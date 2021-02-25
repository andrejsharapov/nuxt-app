import { mdiClose } from '@mdi/js'
import VSCode from '@/components/icons/vs-code'

// use $vuetify.icons.values.mdiClose

export default function ({ app }) {
  return {
    lang: {
      t: (key, ...params) => app.i18n.t(key, params),
    },
    theme: { disable: true },
    icons: {
      iconfont: 'mdiSvg',
      values: {
        mdiClose,
        'vs-code': {
          component: VSCode,
          props: {
            name: '$vs-code',
          },
        },
      },
    },
  }
}
