import { appMeta as config } from '../config/app'

export default {
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
  projects: {
    recent: 'Recent projects',
    'not-found': 'No completed projects.',
  },
}
