import { appMeta } from '@/config/app'

export default {
  author: {
    name: 'Andrej Sharapov',
    position: ['UI/UX Designer', 'Frontend Developer'],
    job: {
      status: `${appMeta.author.job.status}`,
      title: 'To offer a job',
    },
  },
  host: {
    name: `${appMeta.host.name}`,
    url: `${appMeta.host.url}`,
  },
  site: {
    header: { name: 'Header' },
    navbar: {
      name: 'Navigation',
    },
  },
}
