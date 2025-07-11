import { appMeta as config } from '../config/app'
import { designEn, devEn } from '../lib/pricing-services'

export default {
  all: 'All',
  app: {
    appearance: {
      name: 'Appearance',
    },
    chat: {
      title: 'Chat support',
      loading: {
        message: 'Please stand by',
      },
      state: {
        open: 'Open',
        close: 'Close',
      },
    },
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
    lang: {
      name: 'Language',
      ru: 'Русский',
      en: 'English',
    },
    themes: {
      name: 'Theme preferences',
      light: 'Light theme',
      dark: 'Dark theme',
      system: 'Sync with system',
    },
  },
  author: {
    title: 'Author | author',
    name: 'Andrej Sharapov',
    position: ['UI/UX Designer', 'Frontend Developer'],
    job: {
      status: `${config.author.job.status}`,
      title: 'To offer a job',
    },
    region: 'Russia, Moscow',
  },
  btn: {
    go: {
      to: 'Go to',
      back: 'Go back',
      home: 'Return home',
    },
    close: 'close',
    download: 'Download',
    view: 'View | Views',
    'report-problem': 'Report problem',
  },
  category: 'Category | category | Not category',
  date: {
    default: 'Date',
  },
  editor: 'Editor',
  events: {
    before: 'Before',
    after: 'After',
    updates: 'Updates',
    show: 'Show | show',
    hide: 'Hide | hide',
    prev: 'Back | Prev | Previous',
    next: 'Forward | Next | Following',
    select: 'Select',
  },
  host: {
    name: `${config.host.name}`,
    url: `${config.host.url}`,
  },
  more: {
    base: 'More',
    details: 'More details',
    events: 'More events',
  },
  news: {
    about: 'Articles and mentions in media',
  },
  no: 'No',
  poll: {
    title: 'UX Poll',
    message: 'Take the poll and you will help make the site better for you.',
    btn: 'Take a poll',
  },
  position: {
    right: 'Right | right',
    left: 'Left | left',
  },
  process: 'Process',
  price: {
    rub: 'RUB',
    usd: 'USD',
    eur: 'EUR',
  },
  projects: {
    recent: 'Recent projects',
    'not-found': 'No completed projects.',
  },
  pages: {
    articles: {
      title: 'Articles',
    },
    cases: {
      title: 'Cases',
      message:
        'Below are the categories of work in the field of design and development. | Choose a card for you to go to the section with works.',
      slug: {
        analytics: 'Web Analytics',
        client: {
          about: 'Client',
          issues: 'Issues',
          task: {
            title: 'Task | Tasks',
          },
          'not-found': 'The client is missing or was not named on purpose.',
        },
        colors: 'Colors',
        deadline: 'Deadline',
        done: 'During work',
        grid: 'Grid',
        'header-tabs': ['Tools', 'Role'],
        headings: {
          sections: [
            'Client, issues and tasks',
            'Result and search for a solution',
          ],
        },
        responsive: {
          title: 'Responsive',
          friendliness: 'User friendliness',
          optimization: 'Website optimization work was not carried out.',
          'not-responsive': {
            title: 'Not responsive',
            message:
              'Viewing is possible at screen resolution {size}px and higher.',
          },
        },
        result: {
          title: 'Result',
        },
        sizes: 'Sizes',
        storyboard: 'Storyboard',
        testimonials: 'Testimonials',
        typography: {
          title: 'Typography',
          view: ['For headings', 'For body text'],
        },
      },
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
      help: 'Click on phone number or address to copy.',
    },
    'des-apps': {
      message:
        'I thought about developing a design for applications only at the end of 2019, since I did not have time for this, and I thought that I could not, since I had not studied this area. Inspired by the work of other designers, studying guides and UI Kits*, I decided to try my hand and developed the interface of the {link} application in Figma. C grade, but I did it. This work became a starting point for me.',
    },
    'des-email': {
      message:
        'I create responsive and beautiful emails that can help your business stand out or get better, as well as stay on top of your existing customer base. Cross-platform email solutions are the future of marketing.',
      marketing: {
        title: 'Email Marketing',
        message:
          "Email marketing is a very effective method of engaging with your audience. It's affordable and usually has a good ROI (Return on investment). In turn, the return on investment is one of the main indicators of the success of any business. If you are investing time, effort and money, you need to know how much profit your investment brings, and how quickly it will pay off. Such a calculation is necessary for all components of marketing, including email newsletters.",
      },
      aida: {
        about: "I'm building my email design with AIDA User Experience Model.",
        decoding: [
          'A (Attention) - to attract attention and make the client recognize or remember your product or brand;',
          'I (Interest) - to interest the offer and capture its interest;',
          'D (Desire) - cause a desire to possess what you offer and thereby perform the target action;',
          'A (Action) – form a clear call and push to the desired action;',
          'S (Satisfaction) - Satisfy the customer.',
        ],
      },
    },
    'des-quiz': {
      title: 'Quiz',
      message:
        'Below are the first works that, in my opinion, are good enough for a portfolio. You decide. I don"t have a lot of experience in this area, but I try to improve myself and I think that these works are able to fulfill their task.',
      about: {
        what: 'What is a quiz?',
        message:
          'A quiz is a type of content that is widely used in business. It is a step-by-step questionnaire or a quiz that helps with each subsequent question to interest the client more and more, during the passage of which you can easily:',
        list: [
          'Collect information about potential buyers;',
          'To interest an old audience;',
          'Get traffic from social networks;',
          'Offer your products to the reader, depending on the results ;',
          'Increase CTR (Click Through Rate);',
          'Increase lead generation;',
          'Increase the loyalty of the target audience and earn a reputation as a modern creative company;',
          'Collect contact details, e.g. by sending test results by email.',
        ],
      },
    },
    'des-site': {
      title: 'Design',
      message:
        'I know that every client, before making a choice, wants to see the skills of a designer and his real cases, that is, "live" work, and not just a table of blurry screenshots. This makes sense, so on this page I have presented some of my work done at different times using different tools. | By looking at my work, you can see my professional growth and the skills I possess. Find out if they meet your requirements before you decide to place an order.',
      experience:
        'Design and prototyping experience in years | Work experience in',
    },
    'dev-banners': {
      advantage: {
        prepend:
          'In October 2017, I decided to try my hand at developing html5 banners, since banners using HTML5 technology have many advantages:',
        list: [
          'the ability to use any elements of web pages: text, images, videos and others',
          'the ability to use dynamic scripts (storyboard and animatic)',
          'HTML5 banner files can be quite small',
          'using CSS media queries you can customize banner elements to fit any screen size',
          'the ability to edit the banner after its placement',
        ],
        append:
          'A banner is primarily an image advertisement for your company on the Internet. Your banner design directly affects user loyalty to your company, product or service. In other words, the quality of the banner directly affects the number of visitors and the conversion of your site.',
      },
    },
    'dev-site': {
      title: 'Development',
      cms: 'I started learning web development back in 2010. This was my first knowledge of web development, which eventually grew into a hobby. Over the years I have learned to work with HTML, CSS, JS and have worked with various content management systems (CMS). But I started full-fledged website development only in 2018, when I learned how to create websites on WordPress and got a job as a web developer.',
      message:
        'By looking at my works, you can see my professional growth and the skills I possess. Find out if they meet your requirements before you decide to place an order.',
    },
    drawings: {
      message:
        'As a child, I studied at art school, studied drawing, painting, graphics, art history, sculpture and much more. Unfortunately, I cannot share all my works, as many of them are lost. But in August 2019, I found some old sketches that you can see below.',
    },
    illustrations: {
      message:
        "I don't do illustrations often, but I try to practice from time to time so as not to lose my skills. There are several illustrations on this page that I made, in addition to the cute fish {link} that you can see on the pages of the site.",
    },
    index: {
      title: 'Home',
      sections: {
        about: {
          message:
            'Hello! My name is {author}. Already {years} am engaged in the creation of design, layout and programming of sites on various CMS and site builders. I like to create something new, look for interesting solutions, do the impossible with simple code and bring my ideas and client ideas to life.',
          activity: {
            prepend:
              'I am constantly developing and improving my skills in three easy steps',
            list: [
              {
                message: 'Analyzing the work of experienced developers',
              },
              {
                message: 'Studying UI / UX design and web development trends',
              },
              {
                message: 'Working with new programs and languages',
              },
            ],
            append:
              'They help me stay in the flow of rapidly developing areas and always keep abreast of the latest developments and trends.',
          },
        },
        counters: {
          message:
            'In addition to design and development, I study marketing because I made sure that these three aspects are inseparable from each other during my work. I have enough knowledge and experience necessary to develop a practical, high-quality, and functional product, and understanding user needs and marketing principles allows me to fully engage in the promotion and support of the developed projects.',
        },
        certificates: {
          title: 'Certificates',
          message:
            'To test my strength, I periodically take testing and online courses in web development, design and promotion. As a result of passing, I receive electronic certificates, which you can find below and on the certificates page.',
        },
        progress: {
          title: 'Events and achievements',
          message:
            'During my work, I have successfully completed about {projects} projects to create design and website development, more than {works} small orders of varying complexity: drawing elements and refactoring code, developing logos, corporate websites and much more.',
        },
        skillset: {
          title: 'Skillset',
        },
        works: {
          message:
            'In March 2019, I switched from developing {from} layouts in {to}, where I am now prototyping and designing websites and applications. Check out some of my work in the portfolio.',
        },
      },
    },
    logos: {
      message:
        'There are not many examples in my portfolio that I could boast of, but the works presented below for me, although small, are still achievements.',
      format: 'Format',
    },
    modeling: {
      message:
        'Since 2014, I have been playing Minecraft from time to time and developing a texture pack, adding new item images from version to version. And so, in July 2023, I found out that there is a program that allows you to create 3D models for the game. And since even this seemingly primitive game does not stand still, I decided to update {pack} and fill it with my own 3d models. I started to work in an interesting program called {blockbench} and you know, the result makes me very happy. You can see some models below, and if you play Minecraft, then not only look, but also touch them.',
    },
    photoshop: {
      message:
        'In 2010, I first got acquainted with Photoshop. Then he created a community {link} and started developing designs for VKontakte groups and prototypes for websites',
      games:
        'In the same year, VKontakte launched a wiki code, and in the process of studying it, I decided to implement several games, which required some knowledge of Photoshop to complete. Some games are still partially working, so you can join the community and try games like: crusaders, sims, and penalties.',
      now: 'I have been using Photoshop less and less lately, but I try not to forget about it and maintain my skills, so from time to time, I process photos, some of which you can see below.',
    },
    pricing: {
      sections: {
        why: {
          heading: 'Why order here?',
          pluses: {
            prepend: {
              heading: 'You are guaranteed to receive:',
            },
            append: {
              heading: 'And the most important thing:',
              list: [
                'treating your project as if it were my own;',
                'only the best and unique content;',
                'operational work, in accordance with established deadlines;',
                'quite a reasonable price.',
              ],
            },
          },
        },
        services: {
          heading: 'Services',
          quote:
            'The price of any work is based on the time spent on this work. But in order to understand how much time it takes you to work, you need to understand the amount of work.',
        },
        cooperation: {
          heading: 'Cooperation',
          variants: [
            {
              heading: 'Project work',
              message:
                'The classic "waterfall" approach, when the contract determines the sequence of all stages of work and terms, and the expected end result is written in the terms of reference.',
            },
            {
              heading: '"Flexible" development',
              message:
                'In this case, the work is built on "sprints" - periods of time during which new requirements are implemented, received, among other things, as a result of the analysis of the already working part of the project.',
              comment:
                'It is often important for a client to launch a project in the minimum primary functionality, carrying out its further continuous refinement, change, and improvement.',
            },
          ],
        },
        deadline: {
          heading: 'Deadline',
          message: '',
          calculate: {
            question: 'How fast is the development of the site?',
            message:
              'On average, taking into account the stage of approval of the terms of reference, internal approvals on the client-side, and the duration of work on the creation, redesign, and development of some elements of the site, it can be from 2 days to 3 months. More information can be found in the list of services below.',
            more: '',
          },
        },
        cost: {
          heading: 'Cost',
          calculate: {
            question: 'How to calculate the cost?',
            message:
              'You do not need to download a price list or look for additional calls to find out the total amount! Just open the calculator below and select the services you need. The total cost is calculated automatically.',
          },
        },
        cta: {
          question: 'Ready to order?',
          action: 'Email me',
        },
      },
      design: designEn,
      development: devEn,
    },
    printing: {
      message:
        'Printing includes the printing of books, magazines, leaflets, stickers, decals, tags and many other information and promotional products. I do not specialize in this area, but several times I was approached with assignments on similar topics and I willingly accepted them. The results of the work are presented on this page.',
    },
    projects: {
      message:
        'Often the ideas born in the head remain just an idea. Therefore, I try to bring my ideas to life, and some of them have turned into large-scale projects.',
    },
    shown: 'Shown on page',
    timeline: {
      message:
        'Here you can see a tape of my professional achievements and the most significant events for me. I hope this encourages you to follow your dreams and record your accomplishments along the way!',
    },
  },
  result: 'Result | Result',
  search: {
    label: 'Search',
    placeholder: 'Start typing the text...',
    found: 'Materials found on your request.',
    'not-found': 'Sorry, but there are no results for your search.',
    'no-results': 'No results',
  },
  settings: 'Settings',
  site: {
    header: {
      name: 'Header',
      sticky: 'Sticky',
      scroll: 'Scrollable',
    },
    navbar: {
      name: 'Navigation',
      right: 'Sidebar settings',
    },
    page: {
      construction: 'This page is under construction',
    },
  },
  size: {
    name: 'Size',
    full: 'Full',
    mini: 'Mini',
  },
  source: 'Source | Sources',
  'table-of-contents': 'Table of contents | table of contents',
  support: {
    message: 'Your browser does not support iframes!',
  },
  thx: {
    default: 'Thanks',
    view: 'Thanks for watching',
  },
  total: {
    cost: 'Total cost',
  },
  yes: 'Yes',
  works: {
    'works-not-found': 'Works not found',
    examples: 'Work examples',
    rate: 'Rate work with',
    types: 'Type of works',
  },
}
