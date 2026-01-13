export const SITE_CONFIG = {
  name: 'Carter Rostron',
  title: 'Carter Rostron | CS Student & Developer',
  description: 'Portfolio showcasing software development and data projects',
  url: 'https://carterrostron.com',
  social: {
    github: 'https://github.com/CarterRostron',
    linkedin: 'https://www.linkedin.com/in/carter-rostron/',
    email: 'carterbrostron@gmail.com',
  },
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  github?: string
  demo?: string
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Project One',
    description: 'A full-stack application demonstrating modern web development practices with React and Node.js',
    image: '/images/projects/project1.jpg',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/CarterRostron/project-one',
    demo: 'https://project-one-demo.com',
  },
  {
    id: 2,
    title: 'Data Analysis Project',
    description: 'Comprehensive data analysis using Python, uncovering insights from large datasets',
    image: '/images/projects/project2.jpg',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/CarterRostron/data-analysis',
  },
  {
    id: 3,
    title: 'Machine Learning Model',
    description: 'Predictive model built with scikit-learn to solve real-world classification problems',
    image: '/images/projects/project3.jpg',
    tech: ['Python', 'scikit-learn', 'TensorFlow', 'Jupyter'],
    github: 'https://github.com/CarterRostron/ml-model',
  },
  // Add more projects as needed
]

export const SKILLS = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'C++'],
  frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'Django'],
  data: ['Pandas', 'NumPy', 'SQL', 'Data Visualization', 'Jupyter', 'Data Analysis'],
  tools: ['Git', 'GitHub', 'VS Code', 'Docker', 'AWS', 'Figma'],
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
