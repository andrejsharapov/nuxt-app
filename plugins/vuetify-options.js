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
  mdiPhone,
  mdiWhatsapp,
  mdiSkypeBusiness,
  mdiChartTimelineVariant,
  mdiTrophyAward,
  mdiAccountCheck,
  mdiAdjust,
  mdiEmailOutline,
  mdiEmailSyncOutline,
  mdiEmailFastOutline,
  mdiAccountGroup,
  mdiPalette,
  mdiNuxt,
  mdiGit,
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiVuejs,
  mdiVuetify,
  mdiGoogleAnalytics,
  mdiMicrosoftVisualStudioCode,
  mdiWordpress,
  mdiHandshakeOutline,
  mdiBriefcaseEyeOutline,
  mdiLanguagePhp,
  mdiDatabaseCheckOutline,
  mdiPrinter3d,
  mdiPrinterOutline,
} from '@mdi/js'
import vsCode from '@/components/icons/vs-code'
import figmaOutline from '@/components/icons/figma-outline'
import dribbbleOutline from '@/components/icons/dribbble-outline'
import behanceOutline from '@/components/icons/behance-outline'
import mediumOutline from '@/components/icons/medium-outline'
import mediumFilled from '@/components/icons/medium-filled'
import hashnodeFilled from '@/components/icons/hashnode-filled'
import codepenOutline from '@/components/icons/codepen-outline'
import githubOutline from '@/components/icons/github-outline'
import twitterOutline from '@/components/icons/twitter-outline'
import vkOutline from '@/components/icons/vk-outline'
import instagramOutline from '@/components/icons/instagram-outline'
import telegramOutline from '@/components/icons/telegram-outline'
import pinterestOutline from '@/components/icons/pinterest-outline'
import discordOutline from '@/components/icons/discord-outline'
import unsplashOutline from '@/components/icons/unsplash-outline'
import devToOutline from '@/components/icons/dev-to-outline'

export default function ({ app }) {
  return {
    lang: {
      t: (key, ...params) => app.i18n.t(key, params),
    },
    theme: {
      dark: false,
      options: {
        customProperties: true,
        minifyTheme(css) {
          return process.env.NODE_ENV === 'production'
            ? css.replace(/(?<!v-application)[\s|\r\n|\r|\n]/g, '')
            : css
        },
        // themeCache: {
        //   get: (key) => localStorage.getItem(key),
        //   set: (key, value) => localStorage.setItem(key, value),
        // },
      },
      themes: {
        light: {
          primary: '#0a92d1',
          secondary: '#434756',
          accent: '#0041e6',
          info: '#4a54de',
          success: '#40ce87',
          warning: '#ff8800',
          error: '#eb0000',
        },
        dark: {
          // disable: true,
          primary: '#0a92d1',
          secondary: '#e5f7ff',
          accent: '#0041e6',
          info: '#4a54de',
          success: '#40ce87',
          warning: '#ff8800',
          error: '#eb0000',
        },
      },
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
        figmaOutline: {
          component: figmaOutline,
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
        mediumFilled: {
          component: mediumFilled,
        },
        hashnodeFilled: {
          component: hashnodeFilled,
        },
        vkOutline: {
          component: vkOutline,
        },
        telegramOutline: {
          component: telegramOutline,
        },
        pinterestOutline: {
          component: pinterestOutline,
        },
        discordOutline: {
          component: discordOutline,
        },
        unsplashOutline: {
          component: unsplashOutline,
        },
        devToOutline: {
          component: devToOutline,
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
        mdiPhone,
        mdiWhatsapp,
        mdiSkypeBusiness,
        mdiChartTimelineVariant,
        mdiTrophyAward,
        mdiAccountCheck,
        mdiAdjust,
        mdiEmailOutline,
        mdiEmailSyncOutline,
        mdiEmailFastOutline,
        mdiAccountGroup,
        mdiPalette,
        mdiNuxt,
        mdiGit,
        mdiLanguageHtml5,
        mdiLanguageCss3,
        mdiVuejs,
        mdiVuetify,
        mdiGoogleAnalytics,
        mdiMicrosoftVisualStudioCode,
        mdiWordpress,
        mdiHandshakeOutline,
        mdiBriefcaseEyeOutline,
        mdiLanguagePhp,
        mdiDatabaseCheckOutline,
        mdiPrinter3d,
        mdiPrinterOutline,
      },
    },
  }
}
