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
  },
  author: {
    name: 'Andrej Sharapov',
    position: ['UI/UX Designer', 'Frontend Developer'],
    job: {
      status: `${config.author.job.status}`,
      title: 'To offer a job',
    },
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
  poll: {
    title: 'UX Poll',
    message: 'Take the poll and you will help make the site better for you.',
    btn: 'Take a poll',
  },
  projects: {
    recent: 'Recent projects',
    'not-found': 'No completed projects.',
  },
}
