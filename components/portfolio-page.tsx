'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Mail,
  Menu,
  Moon,
  Rocket,
  Sun,
  X,
} from 'lucide-react'

import { FaGithub } from 'react-icons/fa'
import { useMemo, useState } from 'react'

import {
  contactLinks,
  highlights,
  navItems,
  processSteps,
  profile,
  projects,
  skills,
} from '@/data/portfolio'
import { useScrollProgress } from '@/hooks/use-scroll-progress'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { LinkButton } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLightPreview, setIsLightPreview] = useState(false)
  const progress = useScrollProgress()

  const filteredProjects = useMemo(() => projects, [])

  return (
    <div className={cn('min-h-screen', isLightPreview && 'bg-slate-100 text-slate-950')}>
      <div
        className="fixed left-0 top-0 z-50 h-1 bg-cyan-300 transition-[width]"
        style={{ width: `${progress}%` }}
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <Link href="#top" className="font-semibold tracking-tight text-white">
            MJC<span className="text-cyan-300">.</span>Teodoro
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle visual preview"
              className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.05] text-slate-200 transition hover:bg-white/[0.1]"
              onClick={() => setIsLightPreview((value) => !value)}
            >
              {isLightPreview ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.05] text-slate-200 md:hidden"
              onClick={() => setIsMenuOpen((value) => !value)}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav className="section-shell grid gap-2 pb-4 md:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-slate-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className="section-shell grid min-h-[calc(100vh-64px)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <Badge>Available for frontend, React, and full-stack roles</Badge>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-cyan-200">{profile.role}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.headline}</p>
            <p className="mt-3 max-w-2xl leading-7 text-slate-400">{profile.pitch}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="#work">
                View case studies
                <ArrowUpRight size={17} />
              </LinkButton>
              <LinkButton href={profile.github} variant="secondary" target="_blank">
                <FaGithub size={17} />
                GitHub
              </LinkButton>
              <LinkButton href="#contact" variant="secondary">
                <Mail size={17} />
                Contact
              </LinkButton>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="panel-glass rounded-lg p-4"
          >
            <div className="rounded-md border border-white/10 bg-slate-950 p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">Quick Overview</p>
                </div>
                <BriefcaseBusiness className="text-cyan-300" size={24} />
              </div>
              <div className="mt-5 grid gap-4">
                {[
                  'React & Next.js',
                  'PHP & MySQL',
                  'Responsive Design',
                  'Git & GitHub',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={18} />
                    <p className="text-sm leading-6 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="work" className="section-shell py-16">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <Badge>Featured work</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Projects I&apos;ve Built.
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                Each project highlights the technologies I used, the features I developed, the challenges I solved, and includes links to the live demo and source code.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6">
            {filteredProjects.map((project, index) => (
              <Card key={project.slug} className="overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="relative min-h-[260px] border-b border-white/10 bg-slate-900 lg:border-b-0 lg:border-r">
                    <Image
                      src={project.screenshot}
                      alt={`${project.title} responsive screenshot`}
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge>{project.category}</Badge>
                      <span
                        className={cn('h-2 w-24 rounded-full bg-gradient-to-r', project.accent)}
                      />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{project.summary}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      <ProjectDetail title="Key features" items={project.features} />
                      <ProjectDetail title="My role" items={project.role} />
                      <ProjectDetail title="Challenges" items={project.challenges} />
                      <ProjectDetail title="Solutions" items={project.solutions} />
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <LinkButton href={project.demoUrl} target="_blank">
                        <Rocket size={17} />
                        Live Demo
                      </LinkButton>
                      <LinkButton href={project.repoUrl} variant="secondary" target="_blank">
                        <FaGithub size={17} />
                        GitHub Repository
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell py-16">
          <Badge>Technical foundation</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Building responsive and user-friendly web applications.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {skills.map((group) => {
              const Icon = group.icon
              return (
                <Card key={group.title} className="p-6">
                  <Icon className="text-cyan-300" size={26} />
                  <h3 className="mt-4 text-xl font-semibold text-white">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </section>

        <section id="process" className="section-shell py-16">
          <div className="flex flex-col items-center">
            <Badge>How I work</Badge>

            <div className="mt-8 w-full flex justify-center">
              {processSteps.map((step, index) => {
                const Icon = step.icon

                return (
                  <Card key={index} className="max-w-xl p-6 text-center">
                    <Icon className="mx-auto mb-4 text-emerald-300" size={28} />
                    <p>{step.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell py-16">
          <Card className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Badge>Contact</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Let&apos;s connect and discuss how I can contribute to your team.
              </h2>
              <p className="mt-4 leading-7 text-slate-400">
                I&apos;m currently seeking internship and junior developer opportunities in frontend or full-stack development. If you think I&apos;d be a good fit for your team, I&apos;d be happy to connect and discuss how I can contribute.
              </p>
            </div>
            <div className="grid gap-3">
              {contactLinks.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200 transition hover:bg-white/[0.08]"
                  >
                    <Icon className="text-cyan-300" size={18} />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </Card>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="section-shell flex flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>

          <p>Built with Next.js • TypeScript • Tailwind CSS • shadcn/ui</p>
        </div>
      </footer>
    </div>
  )
}

function ProjectDetail({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">{title}</h4>
      <ul className="mt-3 grid gap-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-slate-400">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
