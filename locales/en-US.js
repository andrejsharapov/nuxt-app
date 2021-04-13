import { appMeta as config } from '../config/app'

export default {
  app: {
    cookie: {
      message:
        'The site uses analytics tools to analyze user actions in order to improve the quality of the site.',
    },
    'general-information': 'General information',
    'last-revised': 'Last revised',
    license: 'License',
    loading: 'Loading',
    meta: {
      title: `${config.app.en.title}`,
      description: `${config.app.en.description}`,
    },
    privacy: 'Privacy',
    terms: 'Terms of use',
    themes: {
      light: 'Light mode',
      dark: 'Dark mode',
    },
  },
  author: {
    name: 'Andrej Sharapov',
    position: ['UI/UX Designer', 'Frontend Developer'],
    job: {
      status: `${config.author.job.status}`,
      title: 'To offer a job',
    },
    region: 'Russia, Moscow',
  },
  host: {
    name: `${config.host.name}`,
    url: `${config.host.url}`,
  },
  site: {
    header: { name: 'Header' },
    navbar: {
      name: 'Navigation',
    },
    page: {
      construction: 'This page is under construction',
    },
  },
  btn: {
    go: {
      to: 'Go to',
      back: 'Go back',
      home: 'Return home',
    },
    download: 'Download',
    view: 'View | Views',
    'report-problem': 'Report problem',
  },
  category: 'Category | category | Not category',
  date: {
    default: 'Date',
  },
  events: {
    before: 'Before',
    after: 'After',
    updates: 'Updates',
  },
  more: {
    base: 'More',
    details: 'More details',
    events: 'More events',
  },
  poll: {
    title: 'UX Poll',
    message: 'Take the poll and you will help make the site better for you.',
    btn: 'Take a poll',
  },
  projects: {
    recent: 'Recent projects',
    'not-found': 'No completed projects.',
  },
  pages: {
    shown: 'Shown on page',
    cases: {
      message:
        'Below are the categories of work in the field of design and development. | Choose a card for you to go to the section with works.',
    },
    certificates: {
      message:
        'During my work, I took several tests and online courses in web design, development, marketing and some other areas. Below you can see the certificates of completion.',
    },
    coding: {
      message: [
        'It is not always possible to write good code right away, so it needs to be tested in programs and editors separately from the site. I often experiment with code, and sometimes in search of inspiration or trying to improve myself, sometimes cool things come out, some of which I have shared with other developers on the',
        'and will gladly share with you.',
      ],
    },
    contact: {
      message:
        'You can contact me through the above social networks or use other contacts.',
    },
    drawings: {
      message:
        'As a child, I studied at art school, studied drawing, painting, graphics, art history, sculpture and much more. Unfortunately, I cannot share all my works, as many of them are lost. But in August 2019, I found some old sketches that you can see below.',
    },
    illustrations: {
      message:
        "I don't do illustrations often, but I try to practice from time to time so as not to lose my skills. There are several illustrations on this page that I made, in addition to the cute fish that you can see on the pages of the site.",
    },
    logos: {
      message:
        'There are not many examples in my portfolio that I could boast of, but the works presented below for me, although small, are still achievements.',
    },
    photoshop: {
      message:
        'In 2010, I first got acquainted with Photoshop. Then he created a community {link} and started developing designs for VKontakte groups and prototypes for websites',
      games:
        'In the same year, VKontakte launched a wiki code, and in the process of studying it, I decided to implement several games, which required some knowledge of Photoshop to complete. Some games are still partially working, so you can join the community and try games like: crusaders, sims, and penalties.',
      now:
        'I have been using Photoshop less and less lately, but I try not to forget about it and maintain my skills, so from time to time, I process photos, some of which you can see below.',
    },
    projects: {
      message:
        'Often the ideas born in the head remain just an idea. Therefore, I try to bring my ideas to life, and some of them have turned into large-scale projects.',
    },
    timeline: {
      message:
        'Here you can see a tape of my professional achievements and the most significant events for me. I hope this encourages you to follow your dreams and record your accomplishments along the way!',
    },
  },
  source: 'Sources',
  works: {
    'works-not-found': 'Works not found',
    examples: 'Work examples',
    types: 'Type of works',
  },
}
