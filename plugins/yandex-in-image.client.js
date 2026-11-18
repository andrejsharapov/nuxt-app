// Суффикс .client.js гарантирует, что код выполнится только в браузере, где есть window и document.
export default ({ app }) => {
  const BLOCK_ID = 'R-A-20450032-1'

  const renderAdForImage = (imageId) => {
    window.yaContextCb = window.yaContextCb || []
    window.yaContextCb.push(() => {
      window.Ya.Context.AdvManager.render({
        renderTo: imageId,
        blockId: BLOCK_ID,
        type: 'inImage',
      })
    })
  }

  const scanAndRenderImages = () => {
    // Находим все картинки, которым еще не присваивали рекламный ID
    const images = Array.from(document.querySelectorAll('img')).filter(
      (img) => !img.dataset.rtbProcessed
    )

    images.forEach((image) => {
      // Помечаем картинку, чтобы при повторном вызове не навесить рекламу дважды
      image.dataset.rtbProcessed = 'true'

      // Если у картинки уже есть свой id (например, для якорей), сохраняем его, иначе генерируем
      if (!image.id) {
        image.id = `yandex_rtb_${BLOCK_ID}-${Math.random()
          .toString(16)
          .slice(2)}`
      }

      if (!image.complete) {
        image.addEventListener('load', () => renderAdForImage(image.id), {
          once: true,
        })
      } else {
        renderAdForImage(image.id)
      }
    })
  }

  // Запускаем при каждом переходе между страницами в Nuxt
  app.router.afterEach((to, from) => {
    // Игнорируем смену GET-параметров (фильтры, якоря) на той же странице
    if (to.path === from.path) return

    // Уничтожаем только блоки этого формата, не затрагивая остальные баннеры на сайте
    if (window.Ya?.Context?.AdvManager?.destroy) {
      window.Ya.Context.AdvManager.destroy({ blockId: BLOCK_ID })
    }

    // Даем Vue время отрендерить новый DOM страницы
    setTimeout(() => {
      scanAndRenderImages()
    }, 300)
  })
}
