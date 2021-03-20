import vsCode from '@/components/icons/vs-code'
import dribbbleOutline from '@/components/icons/dribbble-outline'
import behanceOutline from '@/components/icons/behance-outline'
import mediumOutline from '@/components/icons/medium-outline'
import codepenOutline from '@/components/icons/codepen-outline'
import githubOutline from '@/components/icons/github-outline'
import twitterOutline from '@/components/icons/twitter-outline'
import vkOutline from '@/components/icons/vk-outline'
import instagramOutline from '@/components/icons/instagram-outline'

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
  mdiClose,
  mdiShieldLock,
  mdiAccountCheckOutline,
  mdiLicense,
} from '@mdi/js'

export default function ({ app }) {
  return {
    lang: {
      t: (key, ...params) => app.i18n.t(key, params),
    },
    theme: {
      dark: false,
      // disable: true,
    },
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
        dribbbleOutline: {
          component: dribbbleOutline,
        },
        behanceOutline: {
          component: behanceOutline,
        },
        codepenOutline: {
          component: codepenOutline,
        },
        githubOutline: {
          component: githubOutline,
        },
        twitterOutline: {
          component: twitterOutline,
        },
        instagramOutline: {
          component: instagramOutline,
        },
        mediumOutline: {
          component: mediumOutline,
        },
        vkOutline: {
          component: vkOutline,
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
        mdiClose,
        mdiShieldLock,
        mdiAccountCheckOutline,
        mdiLicense,
      },
    },
  }
}
