<template>
  <div
    dark
    class="park-wagons"
  >
    <v-row
      no-gutters
      class="fill-height"
    >
      <v-col
        cols="12"
        md="4"
      >
        <v-card
          dark
          class="mr-4 transparent"
          flat
        >
          <!-- Search: Model (Autocomplete) -->
          <v-autocomplete
            v-model="park.selectedModelId"
            :items="allWagonModels"
            item-text="model"
            item-value="id"
            label="Все модели"
            outlined
            clearable
            hide-details
            @change="selectWagonByModel"
          >
            <template #item="{ item, on }">
              <v-list-item
                :disabled="item.disabled"
                v-on="on"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-autocomplete>

          <v-alert
            dense
            class="my-5"
            color="primary"
          >
            Выберите модель ↑ или заполните поля ниже ↓
          </v-alert>

          <!-- Filter: RPS -->
          <v-select
            v-model="park.selectWagon.rps"
            :items="rpsOptions"
            label="РПС (Группа)"
            outlined
            item-text="groupName"
            item-value="groupId"
            clearable
            :disabled="isModelSelected"
            @change="resetFilters"
          />

          <!-- Filter: Freight, Body, etc. (Displayed after RPS selection) -->
          <v-select
            v-model="park.selectWagon.freight"
            :items="freightOptions"
            label="Грузоподъёмность"
            outlined
            item-text="value"
            item-value="value"
            clearable
            :disabled="isModelSelected || park.selectWagon.rps == null"
            @change="updateFilters"
          />
          <v-select
            v-model="park.selectWagon.body"
            :items="bodyOptions"
            label="Объём кузова"
            outlined
            item-text="value"
            item-value="value"
            clearable
            :disabled="isModelSelected || park.selectWagon.rps == null"
            @change="updateFilters"
          />
          <v-select
            v-model="park.selectWagon.bl"
            :items="blOptions"
            label="Длина"
            outlined
            item-text="value"
            item-value="value"
            clearable
            :disabled="isModelSelected || park.selectWagon.rps == null"
            @change="updateFilters"
          />

          <!-- Display a list of remaining models after filtering -->
          <template v-if="filteredWagons.length > 1 && !park.selectedModelId">
            <p>Выберите модель из списка РПС</p>
            <v-select
              :items="filteredWagons"
              label="Выберите модель"
              outlined
              item-text="model"
              item-value="model"
              @change="selectWagonByModel"
            />
          </template>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="8"
      >
        <!-- Display selected wagon data -->
        <!-- <model-3d-viewer
          v-if="park.selectWagon.hasOwnProperty('hotspots')"
          :modelWagon="park.selectWagon"
        /> -->
        <div
          class="fill-height d-flex justify-center px-8 white--text text-center text-h5"
        >
          <div>
            <div class="d-grid grid-cols-4 fill-width place-items-center">
              <v-avatar
                v-for="{ icon } in park.wagons"
                :key="icon"
                tile
                size="64"
                class="rounded"
              >
                <v-icon
                  dark
                  size="32"
                  color="primary"
                >
                  {{ icon }}
                </v-icon>
              </v-avatar>
            </div>

            <div class="text-h4">
              <span>Выберите модель из списка</span>
              <span>или заполните поля,</span>
              <span>чтобы подобрать</span>
              <span>подходящую модель</span>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  // components: {
  //   Model3dViewer: () => import('@/components/pages/index/model_3d_viewer'),
  // },
  data() {
    return {
      park: {
        tabActive: 1,
        selectWagon: {},
        selectedModelId: null,
        freightHotspotId: 1, // Грузоподъёмность
        bodyHotspotId: 2, // Объём кузова
        blHotspotId: 8, // Длина
        wagons: [
          {
            groupName: 'Полувагоны',
            groupId: 6,
            icon: 'mdi-train-car-hopper-full',
            groupList: [
              {
                id: 1,
                rps: 6,
                name: '8-осный полувагон «УРАЛ»',
                model: '12-5991',
                modelPath: '/models-3d/69__URALх2.glb',
                fov: 70,
                description:
                  'Предназначен для перевозки массовых сыпучих грузов (уголь, руда, щебень и т.п.), не требующих защиты от атмосферных осадков.',
                hotspots: [
                  {
                    hotspotId: 1,
                    name: 'Грузоподъёмность',
                    value: '151 T',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 15, y: 15, z: 10 },
                    },
                    caption:
                      'повышенная грузоподъёмность: на 22% больше груза в поезде длиной 988м по сравнению c типовыми полувагонами (при той же длине состава);',
                  },
                  {
                    hotspotId: 2,
                    name: 'Объём кузова',
                    value: '176 м³',
                    cameraConfig: { fov: 50, position: { x: 0, y: 18, z: 13 } },
                    caption: [
                      'материал кузова: высокопрочная сталь, адаптированная к экстремальным нагрузкам;',
                      'конструкция кузова: цельнометаллический, c разгрузочными люками в полу;',
                      'усиление конструкции: продольные и поперечные балки, рёбра жёсткости, усиленные стойки бортов;',
                      'торцевые стены: глухие (без дверей);',
                      'погрузки/выгрузки: верхняя загрузка, разгрузка через люки в полу;',
                    ],
                  },
                  {
                    hotspotId: 3,
                    name: 'Тара вагона',
                    value: '49 т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: -0.3, y: 16, z: 16 },
                    },
                    caption: [
                      'масса тары обусловлена усиленной конструкцией для работы с повышенными нагрузками',
                      'соотношение грузоподъёмности к таре — одно из лучших в классе',
                    ],
                  },
                  {
                    hotspotId: 4,
                    name: 'Люки',
                    value: '14 шт.',
                    cameraConfig: {
                      fov: 40,
                      position: { x: -7, y: -3.5, z: 10 },
                    },
                    caption: [
                      'конструкция предусматривает двухосную схему секций (вагон разделён на 4 секции по 2 оси), в каждой из которых расположено по 3–4 люка',
                      'равномерно распределённые люки обеспечивают быструю и полную разгрузку',
                      'герметичные уплотнения предотвращают просыпание груза в пути',
                    ],
                  },
                  {
                    hotspotId: 5,
                    name: 'Сцеп',
                    value: 'полужёсткий',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 0, y: 0.35, z: 22 },
                    },
                    caption: [
                      'полужёсткий сцеп позволяет формировать длинные составы с повышенной грузоподъёмностью',
                      'обеспечивает надёжное соединение при высоких динамических нагрузках',
                    ],
                  },
                  {
                    hotspotId: 6,
                    name: 'Нагрузка на ось',
                    value: '25 тс',
                    cameraConfig: {
                      fov: 60,
                      position: { x: -21, y: -3, z: 7 },
                    },
                    caption: [
                      'максимальная допустимая нагрузка на ось (тонн‑сил) для данной конструкции',
                      'восьмиосная схема (четыре двухосные тележки) обеспечивает устойчивость на сложных участках пути',
                      'снижает удельное давление на рельсы при высокой грузоподъёмности',
                    ],
                  },
                  {
                    hotspotId: 7,
                    name: 'Габарит',
                    value: '1‑Т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 3.5, y: 2.5, z: 20 },
                    },
                    caption: [
                      'соответствует ГОСТ 9238‑2023',
                      'допускает обращение по всей сети железных дорог РФ и СНГ',
                    ],
                  },
                  {
                    hotspotId: 8,
                    name: 'Длина',
                    value: '24 700',
                    cameraConfig: { fov: 80, position: { x: 0, y: 0, z: 22 } },
                    caption: '',
                  },
                  {
                    hotspotId: 9,
                    name: 'Температурный диапазон',
                    value: 'от –50 °C до +50 °C',
                    cameraConfig: { fov: 50, position: { x: -7, y: 2, z: 30 } },
                    caption: [
                      'специальная сталь и узлы рассчитаны на работу в широком диапазоне температур',
                      'сохраняет работоспособность в условиях резких перепадов температур',
                    ],
                  },
                ],
              },
              {
                id: 2,
                rps: 6,
                name: '8-осный полувагон «БАМ»',
                model: '12-5992',
                modelPath: '/models-3d/69__BAMх2.glb',
                fov: 50,
                description:
                  '8‑осный полувагон модели 12‑5992, разработан для эксплуатации в сложных условиях БАМа (перепады температур, сложные профили пути). Предназначен для перевозки массовых сыпучих грузов (уголь, руда, щебень), не требующих защиты от атмосферных осадков. Отличается повышенной грузоподъёмностью и усиленной конструкцией.',
                hotspots: [
                  {
                    hotspotId: 1,
                    name: 'Грузоподъёмность',
                    value: '125 т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 15, y: 15, z: 10 },
                    },
                    caption: [
                      'повышенная грузоподъёмность позволяет сократить количество вагонов в составе при сохранении общего веса груза',
                      'оптимизирована для перевозок на Восточном полигоне РЖД',
                    ],
                  },
                  {
                    hotspotId: 2,
                    name: 'Объём кузова',
                    value: '140 м³',
                    cameraConfig: { fov: 50, position: { x: 0, y: 18, z: 13 } },
                    caption: [
                      'кузов из высокопрочной низколегированной стали с повышенной стойкостью к низким температурам',
                      'цельнометаллическая конструкция с разгрузочными люками в полу',
                      'усиленные продольные и поперечные балки, рёбра жёсткости',
                      'глухие торцевые стены без дверей',
                      'верхняя загрузка, разгрузка через люки в полу',
                    ],
                  },
                  {
                    hotspotId: 3,
                    name: 'Тара вагона',
                    value: '45 т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: -0.3, y: 16, z: 16 },
                    },
                    caption: [
                      'масса тары обусловлена усиленной конструкцией для работы в экстремальных условиях',
                      'соотношение грузоподъёмности к таре — оптимальное для данного класса вагонов',
                    ],
                  },
                  {
                    hotspotId: 4,
                    name: 'Люки',
                    value: '20 шт.',
                    cameraConfig: {
                      fov: 40,
                      position: { x: -7, y: -3.5, z: 10 },
                    },
                    caption: [
                      'равномерно распределённые люки обеспечивают быструю и полную разгрузку',
                      'герметичные уплотнения предотвращают просыпание груза в пути',
                    ],
                  },
                  {
                    hotspotId: 5,
                    name: 'Сцеп',
                    value: 'автосцепка СА-3 с поглощающим аппаратом класса Т1',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 0, y: 0.35, z: 22 },
                    },
                    caption: [
                      'усиленная автосцепка для работы в составах повышенной массы',
                      'поглощающий аппарат снижает динамические нагрузки при маневрах и движении',
                    ],
                  },
                  {
                    hotspotId: 6,
                    name: 'Нагрузка на ось',
                    value: '25 тс',
                    cameraConfig: { fov: 80, position: { x: -21, y: 0, z: 7 } },
                    caption: [
                      'максимальная допустимая нагрузка на ось для данной конструкции 25 тс',
                      'восьмиосная схема (четыре двухосные тележки) обеспечивает устойчивость на сложных участках пути',
                      'снижает удельное давление на рельсы при высокой грузоподъёмности',
                    ],
                  },
                  {
                    hotspotId: 7,
                    name: 'Габарит',
                    value: '1-Т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 3.5, y: 2.5, z: 20 },
                    },
                    caption: [
                      'соответствует ГОСТ 9238-2023',
                      'допускает обращение по всей сети железных дорог РФ и СНГ',
                    ],
                  },
                  {
                    hotspotId: 8,
                    name: 'Длина',
                    value: '24 700',
                    cameraConfig: { fov: 80, position: { x: 0, y: 0, z: 22 } },
                    caption: '',
                  },
                  {
                    hotspotId: 9,
                    name: 'Температурный диапазон',
                    value: 'от –60 °C до +50 °C',
                    cameraConfig: { fov: 50, position: { x: -7, y: 2, z: 30 } },
                    caption: [
                      'специальная сталь и узлы рассчитаны на экстремальные морозы БАМа',
                      'сохраняет работоспособность в условиях резких перепадов температур',
                    ],
                  },
                  {
                    hotspotId: 11,
                    name: 'Система слива/налива',
                    value: 'верхний налив, нижний слив',
                    cameraConfig: { fov: 50, position: { x: 0, y: 10, z: 5 } },
                    caption: [
                      'верхние люки с герметичными крышками для налива',
                      'нижние сливные приборы с запорной арматурой',
                      'предохранительные клапаны для сброса избыточного давления',
                    ],
                  },
                  {
                    hotspotId: 12,
                    name: 'Особенности конструкции',
                    value: '(опционально)',
                    cameraConfig: { fov: 55, position: { x: 3, y: 12, z: 9 } },
                    caption: [
                      'шпангоуты повышают жёсткость котла при динамических нагрузках',
                      'возможность установки теплоизоляции для перевозки грузов с температурным режимом',
                    ],
                  },
                ],
              },
            ],
          },
          {
            groupName: 'Цистерны',
            groupId: 7,
            icon: 'mdi-train-car-tank',
            groupList: [
              {
                id: 70,
                rps: 7,
                name: '8-осная цистерна «Находка»',
                model: '15-1271',
                modelPath: null,
                description: '...',
                disabled: true,
                hotspots: [
                  {
                    hotspotId: 1,
                    name: 'Грузоподъёмность',
                    value: '73 т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 15, y: 15, z: 10 },
                    },
                    caption: [
                      'оптимизирована для перевозки лёгких нефтепродуктов с учётом плотности груза',
                      'позволяет сократить количество вагонов в составе при сохранении общего объёма перевозок',
                    ],
                  },
                  {
                    hotspotId: 2,
                    name: 'Объём котла',
                    value: '184 м³',
                    cameraConfig: {
                      fov: 50,
                      position: { x: -0.3, y: 16, z: 16 },
                    },
                    caption: [
                      'увеличенный объём по сравнению с 4‑осными аналогами',
                      'цилиндрическая форма котла с эллиптическими днищами',
                      'материал котла — низколегированная сталь повышенной прочности',
                    ],
                  },
                  {
                    hotspotId: 3,
                    name: 'Тара вагона',
                    value: '55 т',
                    cameraConfig: { position: { x: -0.3, y: 16, z: 16 } },
                    caption: [
                      'масса тары обусловлена усиленной конструкцией и толщиной стенок котла',
                      'соотношение грузоподъёмности к таре — оптимальное для данного класса цистерн',
                    ],
                  },
                  {
                    hotspotId: 10,
                    name: 'Внутренний диаметр котла',
                    value: '3 400 мм',
                    cameraConfig: { fov: 80, position: { x: 22, y: 4, z: 0 } },
                    caption: [
                      'обеспечивает требуемую вместимость при допустимых габаритах',
                      'соответствует стандартам безопасности для перевозки нефтепродуктов',
                    ],
                  },
                  {
                    hotspotId: 5,
                    name: 'Сцеп',
                    value: 'автосцепка СА‑3 с поглощающим аппаратом класса Т1',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 0, y: 0.35, z: 22 },
                    },
                    caption: [
                      'усиленная автосцепка для работы в составах повышенной массы',
                      'поглощающий аппарат снижает динамические нагрузки при маневрах и движении',
                    ],
                  },
                  {
                    hotspotId: 6,
                    name: 'Нагрузка на ось',
                    value: '25 тс',
                    cameraConfig: { fov: 80, position: { x: 11, y: -3, z: 5 } },
                    caption: [
                      'восьмиосная схема обеспечивает устойчивость при высокой загрузке',
                      'снижает удельное давление на рельсы',
                      'максимальная допустимая нагрузка на ось для данной конструкции 25 тс',
                    ],
                  },
                  {
                    hotspotId: 7,
                    name: 'Габарит',
                    value: '1‑Т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 3.5, y: 2.5, z: 20 },
                    },
                    caption: [
                      'соответствует ГОСТ 9238‑2023',
                      'допускает обращение по всей сети железных дорог РФ и СНГ',
                    ],
                  },
                  {
                    hotspotId: 8,
                    name: 'Длина',
                    value: '24 040',
                    cameraConfig: { fov: 80, position: { x: 0, y: 0, z: 22 } },
                    caption: '',
                  },
                  {
                    hotspotId: 11,
                    name: 'Система слива/налива',
                    value: 'верхний налив, нижний слив',
                    cameraConfig: { fov: 50, position: { x: 0, y: 10, z: 5 } },
                    caption: [
                      'верхние люки с герметичными крышками для налива',
                      'нижние сливные приборы с запорной арматурой',
                      'предохранительные клапаны для сброса избыточного давления',
                    ],
                  },
                  {
                    hotspotId: 12,
                    name: 'Особенности конструкции',
                    value: '(опционально)',
                    cameraConfig: { fov: 55, position: { x: 3, y: 12, z: 9 } },
                    caption: [
                      'шпангоуты повышают жёсткость котла при динамических нагрузках',
                      'возможность установки теплоизоляции для перевозки грузов с температурным режимом',
                    ],
                  },
                ],
              },
              {
                id: 76,
                rps: 7,
                name: 'Цистерна 15-1219',
                model: '15-1219',
                modelPath: null,
                description:
                  'Цистерна 4-осная для перевозки бензина с объемом котла 85,6 м³',
                disabled: true,
                hotspots: [
                  {
                    hotspotId: 1,
                    name: 'Грузоподъёмность',
                    value: '69 т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 15, y: 15, z: 10 },
                    },
                  },
                  {
                    hotspotId: 2,
                    name: 'Объём котла',
                    value: '86 м³',
                    cameraConfig: { fov: 50, position: { x: 0, y: 18, z: 13 } },
                    caption: '',
                  },
                  {
                    hotspotId: 8,
                    name: 'Длина',
                    value: '12 020',
                    cameraConfig: { fov: 80, position: { x: 0, y: 0, z: 22 } },
                    caption: '',
                  },
                ],
              },
              {
                id: 75,
                rps: 7,
                name: 'Цистерна 15-1213',
                model: '15-1213',
                modelPath: null,
                description: 'Цистерна 4-осная для перевозки наливных грузов',
                disabled: true,
                hotspots: [
                  {
                    hotspotId: 1,
                    name: 'Грузоподъёмность',
                    value: '68 т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 15, y: 15, z: 10 },
                    },
                  },
                  {
                    hotspotId: 2,
                    name: 'Объём котла',
                    value: '87 м³',
                    cameraConfig: { fov: 50, position: { x: 0, y: 18, z: 13 } },
                    caption: '',
                  },
                  {
                    hotspotId: 8,
                    name: 'Длина',
                    value: '12 020',
                    cameraConfig: { fov: 80, position: { x: 0, y: 0, z: 22 } },
                    caption: '',
                  },
                ],
              },
              {
                id: 74,
                rps: 7,
                name: 'Цистерна 15-1547-03',
                model: '15-1547-03',
                modelPath: null,
                description: 'Цистерна 4-осная для перевозки наливных грузов',
                disabled: true,
                hotspots: [
                  {
                    hotspotId: 1,
                    name: 'Грузоподъёмность',
                    value: '66 т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 15, y: 15, z: 10 },
                    },
                  },
                  {
                    hotspotId: 2,
                    name: 'Объём котла',
                    value: '86 м³',
                    cameraConfig: { fov: 50, position: { x: 0, y: 18, z: 13 } },
                    caption: '',
                  },
                  {
                    hotspotId: 8,
                    name: 'Длина',
                    value: '12 020',
                    cameraConfig: { fov: 80, position: { x: 0, y: 0, z: 22 } },
                    caption: '',
                  },
                ],
              },
              {
                id: 73,
                rps: 7,
                name: 'Цистерна 15-1755',
                model: '15-1755',
                modelPath: null,
                description: 'Цистерна 4-осная для перевозки наливных грузов',
                disabled: true,
                hotspots: [
                  {
                    hotspotId: 1,
                    name: 'Грузоподъёмность',
                    value: '68 т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 15, y: 15, z: 10 },
                    },
                  },
                  {
                    hotspotId: 2,
                    name: 'Объём котла',
                    value: '86 м³',
                    cameraConfig: { fov: 50, position: { x: 0, y: 18, z: 13 } },
                    caption: '',
                  },
                  {
                    hotspotId: 8,
                    name: 'Длина',
                    value: '12 020',
                    cameraConfig: { fov: 80, position: { x: 0, y: 0, z: 22 } },
                    caption: '',
                  },
                ],
              },
              {
                id: 72,
                rps: 7,
                name: 'Цистерна 15-5103-07',
                model: '15-5103-07',
                modelPath: null,
                description: 'Цистерна 4-осная для перевозки наливных грузов',
                disabled: true,
                hotspots: [
                  {
                    hotspotId: 1,
                    name: 'Грузоподъёмность',
                    value: '66 т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 15, y: 15, z: 10 },
                    },
                  },
                  {
                    hotspotId: 2,
                    name: 'Объём кузова',
                    value: '86 м³',
                    cameraConfig: { fov: 50, position: { x: 0, y: 18, z: 13 } },
                    caption: '',
                  },
                  {
                    hotspotId: 8,
                    name: 'Длина',
                    value: '12 020',
                    cameraConfig: { fov: 80, position: { x: 0, y: 0, z: 22 } },
                    caption: '',
                  },
                ],
              },
              {
                id: 71,
                rps: 7,
                name: 'Цистерна 15-150-04',
                model: '15-150-04',
                modelPath: null,
                description:
                  'Цистерна 4-осная для перевозки светлых нефтепродуктов с объемом котла 73,1 м³ без переходной площадки',
                disabled: true,
                hotspots: [
                  {
                    hotspotId: 1,
                    name: 'Грузоподъёмность',
                    value: '66 т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 15, y: 15, z: 10 },
                    },
                  },
                  {
                    hotspotId: 2,
                    name: 'Объём кузова',
                    value: '86 м³',
                    cameraConfig: { fov: 50, position: { x: 0, y: 18, z: 13 } },
                    caption: '',
                  },
                  {
                    hotspotId: 8,
                    name: 'Длина',
                    value: '12 020',
                    cameraConfig: { fov: 80, position: { x: 0, y: 0, z: 22 } },
                    caption: '',
                  },
                ],
              },
            ],
          },
          {
            groupName: 'Платформы',
            groupId: 4,
            icon: 'mdi-train-car-flatbed',
            groupList: [
              {
                id: 40,
                rps: 4,
                name: 'Скоростная платформа «Заря»',
                model: '13‑6704',
                modelPath: null,
                description: '',
                hotspots: [
                  {
                    hotspotId: 1,
                    name: 'Грузоподъёмность',
                    value: '75 т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 15, y: 15, z: 10 },
                    },
                  },
                  {
                    hotspotId: 2,
                    name: 'Объём кузова',
                    value: '38 м³',
                    cameraConfig: { fov: 50, position: { x: 0, y: 18, z: 13 } },
                    caption: '',
                  },
                  {
                    hotspotId: 8,
                    name: 'Длина',
                    value: '26 300',
                    cameraConfig: { fov: 80, position: { x: 0, y: 0, z: 22 } },
                    caption: '',
                  },
                  {
                    hotspotId: 13,
                    name: 'Макс. масса брутто контейнеров',
                    value: 'до 36 т',
                  },
                  {
                    hotspotId: 14,
                    name: 'Конструкционная скорость',
                    value: '140 км/ч',
                  },
                  { hotspotId: 15, name: 'Количество осей', value: '6' },
                  {
                    hotspotId: 6,
                    name: 'Нагрузка на ось',
                    value: '20 тс (196,2 кН)',
                  },
                  {
                    hotspotId: 16,
                    name: 'Тормозная система',
                    value:
                      'автоматический пневматический тормоз + 2 стояночных тормоза с ручным приводом',
                  },
                  {
                    hotspotId: 17,
                    name: 'Вместимость контейнеров',
                    value: '20, 40, 45 футов',
                  },
                  {
                    hotspotId: 18,
                    name: 'Cкорость в ускоренных поездах',
                    value: 'до 140 км/ч (при длине состава ≤ 1 100 м)',
                  },
                  {
                    hotspotId: 19,
                    name: 'Cкорость в смешанных поездах',
                    value: 'до 90 км/ч (масса до 6 000 т, длина до 350 осей)',
                  },
                  {
                    hotspotId: 7,
                    name: 'Габарит',
                    value: 'соответствует ГОСТ 9238',
                  },
                ],
              },
              {
                id: 41,
                rps: 4,
                name: 'Платформа 13-2114',
                model: '13-2114',
                modelPath: null,
                description: '',
                disabled: true,
                hotspots: [
                  {
                    hotspotId: 1,
                    name: 'Грузоподъёмность',
                    value: '68 т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 15, y: 15, z: 10 },
                    },
                    caption: '',
                  },
                  {
                    hotspotId: 2,
                    name: 'Объём кузова',
                    value: '38 м³',
                    cameraConfig: { fov: 50, position: { x: 0, y: 18, z: 13 } },
                    caption: '',
                  },
                  {
                    hotspotId: 8,
                    name: 'Длина',
                    value: '14 620',
                    cameraConfig: { fov: 80, position: { x: 0, y: 0, z: 22 } },
                    caption: '',
                  },
                ],
              },
              {
                id: 42,
                rps: 4,
                name: 'Платформа 13-1258',
                model: '13-1258',
                modelPath: null,
                description: 'Универсальная 4-осная платформа.',
                hotspots: [
                  {
                    hotspotId: 1,
                    name: 'Грузоподъёмность',
                    value: '72 т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 15, y: 15, z: 10 },
                    },
                    caption: '',
                  },
                  {
                    hotspotId: 2,
                    name: 'Объём кузова',
                    value: '38 м³',
                    cameraConfig: { fov: 50, position: { x: 0, y: 18, z: 13 } },
                    caption: '',
                  },
                  {
                    hotspotId: 8,
                    name: 'Длина',
                    value: '14 620',
                    cameraConfig: { fov: 80, position: { x: 0, y: 0, z: 22 } },
                    caption: '',
                  },
                  { hotspotId: 3, name: 'Тара вагона', value: '21–22 т' },
                  {
                    hotspotId: 20,
                    name: 'Максимальная скорость',
                    value: '120 км/ч',
                  },
                  { hotspotId: 6, name: 'Нагрузка на ось', value: '23,5 тс' },
                  { hotspotId: 21, name: 'Площадь пола', value: '38 м²' },
                  { hotspotId: 22, name: 'Фитинговые упоры', value: '16 шт.' },
                  {
                    hotspotId: 23,
                    name: 'Высота погрузочной поверхности',
                    value: '1 308 мм (от уровня головок рельсов)',
                  },
                  { hotspotId: 7, name: 'Габарит', value: 'ГОСТ 9238 0-ВМ' },
                ],
              },
            ],
          },
          {
            groupName: 'Крытые',
            groupId: 2,
            icon: 'mdi-train-car-box-full',
            groupList: [
              {
                id: 20,
                rps: 2,
                name: 'Крытый вагон 11-280',
                model: '11-280',
                modelPath: null,
                description:
                  'Крытый вагон 4-осный с объемом кузова 140 м³ с уширенными дверными проемами',
                disabled: true,
                hotspots: [
                  {
                    hotspotId: 1,
                    name: 'Грузоподъёмность',
                    value: '68 т',
                    cameraConfig: {
                      fov: 50,
                      position: { x: 15, y: 15, z: 10 },
                    },
                    caption: '',
                  },
                  {
                    hotspotId: 2,
                    name: 'Объём кузова',
                    value: '138 м³',
                    cameraConfig: { fov: 50, position: { x: 0, y: 18, z: 13 } },
                    caption: '',
                  },
                  {
                    hotspotId: 8,
                    name: 'Длина',
                    value: '16 970',
                    cameraConfig: { fov: 80, position: { x: 0, y: 0, z: 22 } },
                    caption: '',
                  },
                ],
              },
            ],
          },
        ],
      },
    }
  },
  computed: {
    rpsOptions() {
      return this.park.wagons.map((group) => ({
        groupName: group.groupName,
        groupId: group.groupId,
      }))
    },

    selectedRpsWagons() {
      if (!this.park.selectWagon.rps) {
        return []
      }
      const selectedGroup = this.park.wagons.find(
        (group) => group.groupId === this.park.selectWagon.rps
      )
      return selectedGroup ? selectedGroup.groupList : []
    },

    filteredWagons() {
      let wagons = this.selectedRpsWagons

      if (this.park.selectWagon.freight) {
        wagons = wagons.filter((wagon) =>
          wagon.hotspots.some(
            (hotspot) =>
              hotspot.hotspotId === this.park.freightHotspotId &&
              hotspot.value === this.park.selectWagon.freight
          )
        )
      }

      if (this.park.selectWagon.body) {
        wagons = wagons.filter((wagon) =>
          wagon.hotspots.some(
            (hotspot) =>
              hotspot.hotspotId === this.park.bodyHotspotId &&
              hotspot.value === this.park.selectWagon.body
          )
        )
      }

      if (this.park.selectWagon.bl) {
        wagons = wagons.filter((wagon) =>
          wagon.hotspots.some(
            (hotspot) =>
              hotspot.hotspotId === this.park.blHotspotId &&
              hotspot.value === this.park.selectWagon.bl
          )
        )
      }

      return wagons
    },

    freightOptions() {
      return this.getHotspotOptions(this.park.freightHotspotId)
    },

    bodyOptions() {
      return this.getHotspotOptions(this.park.bodyHotspotId)
    },

    blOptions() {
      return this.getHotspotOptions(this.park.blHotspotId)
    },

    allWagonModels() {
      const models = []
      this.park.wagons.forEach((group) => {
        group.groupList.forEach((wagon) => {
          models.push(wagon.model)
        })
      })
      const arr = [...new Set(models)]

      return arr
    },

    isModelSelected() {
      return !!this.park.selectedModelId
    },
  },
  methods: {
    // Generic method to get hotspot options
    getHotspotOptions(hotspotId) {
      return this.selectedRpsWagons.reduce((acc, wagon) => {
        const hotspot = wagon.hotspots.find((h) => h.hotspotId === hotspotId)
        if (hotspot) {
          if (!acc.find((option) => option.value === hotspot.value)) {
            acc.push({ name: hotspot.name, value: hotspot.value })
          }
        }
        return acc
      }, [])
    },

    // Update the filtered wagons after any filter change
    updateFilters() {
      this.updateSelectedWagon()
    },

    // Reset other filters
    resetFilters() {
      this.park.selectWagon.freight = null
      this.park.selectWagon.body = null
      this.park.selectWagon.bl = null
      this.park.selectedModelId = null // Сбрасываем модель, так как RPS изменился
      this.updateSelectedWagon()
    },

    updateSelectedWagon() {
      if (this.filteredWagons.length === 1) {
        // Case 1: Exactly one wagon found. Select it, and preserve the active filter values.
        this.park.selectWagon = {
          ...this.filteredWagons[0],
          rps: this.park.selectWagon.rps,
          freight: this.park.selectWagon.freight,
          body: this.park.selectWagon.body,
          bl: this.park.selectWagon.bl,
        }
        this.park.selectedModelId = this.park.selectWagon.model
      } else if (this.filteredWagons.length > 1) {
        // Case 2: Multiple wagons remain. Ensure filter values are preserved in the main object.
        this.park.selectWagon = {
          rps: this.park.selectWagon.rps,
          freight: this.park.selectWagon.freight,
          body: this.park.selectWagon.body,
          bl: this.park.selectWagon.bl,
        }
        this.park.selectedModelId = null
      } else {
        // Case 3: Zero wagons remain. Clear filter selections (except RPS).
        this.park.selectWagon = { rps: this.park.selectWagon.rps }
        this.park.selectedModelId = null
      }
    },

    selectWagonByModel(model) {
      if (!model) {
        this.park.selectWagon = {}
        this.park.selectedModelId = null
        return
      }

      let foundWagon = null

      this.park.wagons.forEach((group) => {
        group.groupList.forEach((wagon) => {
          if (wagon.model === model) {
            foundWagon = { ...wagon, rps: group.groupId }
          }
        })
      })

      if (foundWagon) {
        this.park.selectWagon = foundWagon
        this.park.selectWagon.rps = foundWagon.rps

        // Use hotspot IDs to find values
        this.park.selectWagon.freight =
          foundWagon.hotspots.find(
            (h) => h.hotspotId === this.park.freightHotspotId
          )?.value || null
        this.park.selectWagon.body =
          foundWagon.hotspots.find(
            (h) => h.hotspotId === this.park.bodyHotspotId
          )?.value || null
        this.park.selectWagon.bl =
          foundWagon.hotspots.find((h) => h.hotspotId === this.park.blHotspotId)
            ?.value || null

        this.park.selectedModelId = foundWagon.model
      } else {
        this.park.selectWagon = {}
        this.park.selectedModelId = null
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.park-wagons {
  --park-max-height: (64px * 2) + (12px * 2) + (96px + 16px);
  --park-tabs-height-vertical: 40px;

  height: calc(100vh - calc(var(--park-max-height)));
}

.v-tabs-items {
  .v-window {
    &__container {
      height: 100%;
    }
  }
}
</style>
