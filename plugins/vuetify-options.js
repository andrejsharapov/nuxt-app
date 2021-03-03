import vsCode from '@/components/icons/vs-code'

import {
  mdiHomeRoof,
  mdiFolderOpen,
  mdiPaletteOutline,
  mdiCellphoneLink,
  mdiCellphoneCog,
  mdiVectorRadius,
  mdiVectorCurve,
  mdiDevices,
  mdiResponsive,
  mdiTabletCellphone,
  mdiVectorBezier,
  mdiDotsHorizontal,
  mdiDraw,
  mdiCodeJson,
  mdiScriptText,
  mdiPaletteSwatchOutline,
  mdiVectorPolylineEdit,
  mdiLightbulbOnOutline,
  mdiBrain,
  mdiBookOpenPageVariantOutline,
  mdiAccount,
  mdiFileCertificateOutline,
  mdiTimelineOutline,
  mdiLightbulb,
  mdiContactsOutline,
  mdiVideoWirelessOutline,
  mdiMicrophoneOutline,
  mdiPodcast,
  mdiAccountGroupOutline,
  mdiProgressCheck,
  mdiOrderBoolAscendingVariant,
} from '@mdi/js'

export default function ({ app }) {
  return {
    lang: {
      t: (key, ...params) => app.i18n.t(key, params),
    },
    theme: { disable: true },
    icons: {
      iconfont: 'mdiSvg',
      values: {
        // NOTE[epic=icons] CUSTOM
        vsCode: {
          component: vsCode,
          props: {
            name: '$vsCode',
          },
        },
        // NOTE[epic=icons] MDI
        mdiHomeRoof,
        mdiFolderOpen,
        mdiPaletteOutline,
        mdiCellphoneLink,
        mdiCellphoneCog,
        mdiVectorRadius,
        mdiVectorCurve,
        mdiDevices,
        mdiResponsive,
        mdiTabletCellphone,
        mdiVectorBezier,
        mdiDotsHorizontal,
        mdiDraw,
        mdiCodeJson,
        mdiScriptText,
        mdiPaletteSwatchOutline,
        mdiVectorPolylineEdit,
        mdiLightbulbOnOutline,
        mdiBrain,
        mdiBookOpenPageVariantOutline,
        mdiAccount,
        mdiFileCertificateOutline,
        mdiTimelineOutline,
        mdiLightbulb,
        mdiContactsOutline,
        mdiVideoWirelessOutline,
        mdiMicrophoneOutline,
        mdiPodcast,
        mdiAccountGroupOutline,
        mdiProgressCheck,
        mdiOrderBoolAscendingVariant,
      },
    },
  }
}
