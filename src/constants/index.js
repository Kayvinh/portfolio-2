import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  tailwind,
  nodejs,
  git,
  flask,
  postgresql,
  jobly,
  warbler,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: "UI/UX",
    icon: ux,
  },
  {
    title: 'Testing',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'flask',
    icon: flask,
  },
  {
    name: 'python',
    icon: python,
  },
];

const experiences = [
  {
    title: 'Full Stack Engineer Intern',
    company_name: 'Numbers API',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'April 2023 - May 2023',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Warbler',
    description: 'Twitter Clone',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: warbler,
    repo: 'https://github.com/Kayvinh/warbler',
    demo: 'https://kevinnguyen-warbler.onrender.com/',
  },
  {
    id: 'project-2',
    name: 'Jobly',
    description:
      'Job application website where users can apply for jobs and view companies',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobly,
    repo: 'https://github.com/Kayvinh/react-jobly',
    demo: 'https://kevin-jobly.surge.sh/',
  },
];

export { services, technologies, experiences, projects };
