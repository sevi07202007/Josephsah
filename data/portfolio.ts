import {
  Code2,
  Database,
  Github,
  Globe2,
  LayoutDashboard,
  Mail,
  MapPin,
  Phone,
  Server,
  Sparkles,
} from 'lucide-react'

export type Project = {
  slug: string
  title: string
  category: 'Full Stack' | 'Frontend'
  summary: string
  overview: string
  stack: string[]
  features: string[]
  challenges: string[]
  solutions: string[]
  role: string[]
  demoUrl: string
  repoUrl: string
  screenshot: string
  accent: string
}

export const profile = {
  name: 'Mark Joseph C. Teodoro',
  role: 'Frontend Developer | React Developer | Full-Stack Developer',
  location: 'Rizal, Philippines',
  email: 'teodorojoseph60@gmail.com',
  phone: '0950-059-0093',
  github: 'https://github.com/sevi07202007',
  resume: '/resume.pdf',
  siteUrl: 'https://yourname.vercel.app',
  headline:
    'I build fast, responsive, and recruiter-friendly web experiences with React, TypeScript, PHP, and MySQL.',
  pitch:
    'A detail-oriented BSIT student and developer focused on production-quality interfaces, clean component architecture, accessible UI, and practical full-stack workflows.',
}

export const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const

export const highlights = [
  { label: 'Featured Projects', value: '2+' },
  { label: 'Core Technologies', value: '12+' },
  { label: 'Primary Focus', value: 'React + Full Stack' },
  { label: 'Availability', value: 'Internships / Junior Roles' },
] as const

export const contactLinks = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: profile.phone, href: 'tel:+639500590093', icon: Phone },
  { label: profile.location, href: '#contact', icon: MapPin },
  { label: 'github.com/sevi07202007', href: profile.github, icon: Github },
] as const

export const skills = [
  {
    title: 'Frontend Engineering',
    icon: LayoutDashboard,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'Accessibility'],
  },
  {
    title: 'Backend Foundations',
    icon: Server,
    items: ['PHP', 'REST APIs', 'Authentication', 'Server-side logic', 'Validation'],
  },
  {
    title: 'Database & Data',
    icon: Database,
    items: ['MySQL', 'SQL', 'Data modeling', 'CRUD workflows', 'Relational schemas'],
  },
  {
    title: 'Engineering Tools',
    icon: Code2,
    items: ['Git', 'GitHub', 'Vercel', 'VS Code', 'XAMPP', 'ESLint', 'Prettier'],
  },
] as const

export const projects: Project[] = [
  {
    slug: 'library-management-system',
    title: 'Library Management System',
    category: 'Full Stack',
    summary:
      'A responsive PHP and MySQL platform for managing books, student records, borrowing activity, and admin workflows.',
    overview:
      'Designed for school library staff who need a simple, reliable dashboard for daily inventory and borrowing operations.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'XAMPP'],
    features: [
      'Book inventory',
      'Student records',
      'CRUD workflows',
      'Admin dashboard',
      'Responsive layout',
    ],
    challenges: [
      'Keeping book and student records easy to scan for non-technical users.',
      'Reducing repeated manual work in borrowing and record management.',
    ],
    solutions: [
      'Created structured tables, focused forms, and clear admin actions.',
      'Separated inventory, student, and transaction workflows into predictable screens.',
    ],
    role: ['Database design', 'PHP CRUD implementation', 'Responsive UI', 'Testing key workflows'],
    demoUrl: 'https://library-management.vercel.app',
    repoUrl:
      'https://github.com/sevi07202007/Library-System-Management/tree/main/Library%20System%20Management',
    screenshot: '/screenshots/library-management.svg',
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    slug: 'food-ordering-system',
    title: 'Food Ordering Web Application',
    category: 'Full Stack',
    summary:
      'A customer-focused food ordering experience with authentication, cart management, checkout, wishlist, and order tracking.',
    overview:
      'Built to simulate a real online ordering workflow from browsing products to tracking order status.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
    features: ['Authentication', 'Shopping cart', 'Checkout flow', 'Wishlist', 'Order tracking'],
    challenges: [
      'Maintaining a smooth cart and checkout flow across multiple pages.',
      'Organizing customer actions so the app feels simple and trustworthy.',
    ],
    solutions: [
      'Implemented focused user flows for browsing, cart updates, and order confirmation.',
      'Used consistent UI patterns for actions, status, and product information.',
    ],
    role: [
      'Frontend implementation',
      'Backend workflow logic',
      'Database integration',
      'UX refinement',
    ],
    demoUrl: 'https://food-ordering.vercel.app',
    repoUrl: 'https://github.com/sevi07202007/Food-Ordering-Web/tree/main/MBJ_Lecious',
    screenshot: '/screenshots/food-ordering.svg',
    accent: 'from-emerald-400 to-teal-500',
  },
]

export const processSteps = [
  {
    title: 'Understand the workflow',
    description:
      'I clarify the user, the core task, and the fastest path to a useful first version.',
    icon: Globe2,
  },
  {
    title: 'Build reusable pieces',
    description: 'I keep UI sections typed, componentized, responsive, and easy to update later.',
    icon: Sparkles,
  },
  {
    title: 'Ship and improve',
    description:
      'I test important flows, document setup, and prepare the project for GitHub and Vercel.',
    icon: Github,
  },
] as const
