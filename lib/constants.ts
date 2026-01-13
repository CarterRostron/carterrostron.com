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
    title: 'Mosquito Population Research',
    description: 'Machine learning research applying MapNN neural networks and SLiM evolutionary simulations to predict malaria vector mosquito populations in Africa. Collaborated across Haverford College, University of Pennsylvania, and University of Colorado Boulder.',
    image: '/images/projects/mosquito-research.jpg',
    tech: ['Python', 'Bash', 'Machine Learning', 'SLiM', 'NumPy'],
  },
  {
    id: 2,
    title: 'Two-Player Mancala Game',
    description: 'Interactive Python implementation of the ancient board game supporting two human players with complete game logic including moving, scoring, and special capturing rules.',
    image: '/images/projects/mancala.jpg',
    tech: ['Python', 'Game Development', 'Object-Oriented Programming'],
  },
  {
    id: 3,
    title: 'Two-Player Stratego Game',
    description: 'Java implementation of the classic strategy board game as an object-oriented programming exercise, featuring board setup and competitive turn-based gameplay mechanics.',
    image: '/images/projects/stratego.jpg',
    tech: ['Java', 'OOP', 'Game Logic'],
  },
  {
    id: 4,
    title: 'C/C++ Hashmap and BigInt',
    description: 'Custom implementations of BigInt class for storing exponentially large integers and Hashmap data structure with all standard methods using only C-style notation and methods.',
    image: '/images/projects/hashmap-bigint.jpg',
    tech: ['C/C++', 'Data Structures', 'Algorithm Design'],
  },
]

export const SKILLS = {
  languages: ['Python', 'C/C++', 'Java'],
  libraries: ['NumPy', 'Pandas', 'Matplotlib', 'SLiM'],
  tools: ['Git', 'Linux', 'Bash', 'VS Code'],
  areas: ['Machine Learning', 'Computational Biology', 'Data Analysis', 'Algorithm Design'],
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
