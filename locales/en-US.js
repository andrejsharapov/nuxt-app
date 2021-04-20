import { appMeta as config } from '../config/app'

export default {
  app: {
    meta: {
      title: `${config.app.en.title}`,
      description: `${config.app.en.description}`,
    },
    loading: 'Loading',
    'general-information': 'General information',
    'last-revised': 'Last revised',
    license: 'License',
    privacy: 'Privacy',
    terms: 'Terms of use',
    updates: 'Updates',
    category: 'Category | category | Not category',
    date: {
      default: 'Date',
    },
    errors: {
      'page-not-found': {
        title: 'Page not found',
        poll: {
          question: 'Why do you think you ended up here?',
          answers: [
            {
              col: 'orange',
              label: 'Most likely the page I am looking for has been moved',
            },
            {
              col: 'warning',
              label: 'Most likely the page I am looking for has been renamed',
            },
            {
              col: 'error',
              label:
                "Most likely, the page I'm looking for was deleted in the most brutal way",
            },
            {
              col: 'success',
              label:
                "Most likely the page I'm looking for never existed at all",
            },
          ],
          result: [
            'Possibly, but not required...',
            'It is very likely that you are right! Click the button below to go to the home page, or use the navigation on the left side of the site to find the page you want. Good luck.',
          ],
          notify: {
            success: {
              group: 'answers',
              type: 'success',
              title: 'Yes',
              text: 'This is very similar to the truth.',
            },
            error: {
              group: 'answers',
              type: 'error',
              title: 'No no no',
              text: 'Not... This is too cruel.',
            },
            warning: {
              group: 'answers',
              type: 'warning',
              title: 'Maybe',
              text: 'But it is not so ...',
            },
          },
        },
      },
      'other-errors': {
        title: 'Something went wrong...',
        subtitle: 'There seems to be a system error somewhere.',
        messages: [
          'Most likely, this is a technical error not related to your actions. Go to the home page and start over.',
          "If it's not difficult for you, please report this error using the form.",
        ],
      },
    },
    themes: {
      light: 'Light mode',
      dark: 'Dark mode',
    },
    cookie: {
      message:
        'The site uses analytics tools to analyze user actions in order to improve the quality of the site.',
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
    'report-problem': 'Report problem',
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
    certificates: {
      message:
        'During my work, I took several tests and online courses in web design, development, marketing and some other areas. Below you can see the certificates of completion.',
    },
    contact: {
      message:
        'You can contact me through the above social networks or use other contacts.',
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
  works: {
    'works-not-found': 'Works not found',
  },
}
