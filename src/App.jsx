import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

function App() {
  const reduceMotion = useReducedMotion()
  const [openFaq, setOpenFaq] = useState(0)

  const motionUp = useMemo(() => {
    if (reduceMotion) return {}
    return {
      hidden: { opacity: 0, y: 14 },
      show: { opacity: 1, y: 0 },
    }
  }, [reduceMotion])

  const motionIn = useMemo(() => {
    if (reduceMotion) return {}
    return {
      hidden: { opacity: 0, scale: 0.98 },
      show: { opacity: 1, scale: 1 },
    }
  }, [reduceMotion])

  const features = [
    {
      title: 'Launch pages in minutes',
      desc: 'Go from idea to published landing page in under 30 minutes without writing a single line of code.',
    },
    {
      title: 'Turn more visitors into trial users',
      desc: 'Use proven conversion blocks that help teams lift trial signups by up to 27% in the first month.',
    },
    {
      title: 'Load 3x faster on mobile',
      desc: 'Reduce bounce rate with performance-first sections optimized for speed and readability.',
    },
    {
      title: 'Ship confidently with social proof',
      desc: 'Drop in testimonials, trust badges, and metrics so new visitors trust your offer instantly.',
    },
    {
      title: 'Edit once, stay on-brand',
      desc: 'Customize headlines, colors, and pricing in one place to keep every section consistent.',
    },
    {
      title: 'Scale from MVP to growth',
      desc: 'Start simple, then add advanced blocks like case studies and product walkthroughs as you grow.',
    },
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '$19',
      note: 'For solo builders & MVPs',
      perks: ['1 workspace', 'Up to 1,000 events', 'Email support', 'Basic dashboards'],
    },
    {
      name: 'Pro',
      price: '$49',
      note: 'For teams shipping weekly',
      highlight: true,
      perks: [
        'Unlimited workspaces',
        'Up to 50,000 events',
        'Automations',
        'Priority support',
        'Team roles',
      ],
    },
    {
      name: 'Business',
      price: '$129',
      note: 'For scale & compliance',
      perks: ['SAML SSO', 'Audit logs', 'Custom limits', 'Dedicated success', 'Uptime SLA'],
    },
  ]

  const testimonials = [
    {
      name: 'Ayesha R.',
      title: 'Founder, ByteCraft',
      quote:
        'We replaced three tools with one. Our onboarding time dropped by 38% in the first week.',
    },
    {
      name: 'Marcus J.',
      title: 'PM, AtlasOps',
      quote:
        'The dashboard preview sold it internally. Setup was fast and the UI feels premium.',
    },
    {
      name: 'Sana K.',
      title: 'Growth Lead, Cloudly',
      quote: 'Pricing is clear, and the product looks like it costs 10x more. Instant trust-builder.',
    },
  ]

  const logos = ['NovaLabs', 'Peakly', 'Cloudnest', 'OrbitHQ', 'Metricly', 'LaunchPilot']

  const faqs = [
    {
      q: 'Is this a real SaaS?',
      a: 'This is a landing page template with a fake dashboard preview—perfect for demos, MVPs, and Fiverr deliveries.',
    },
    {
      q: 'Is it fully responsive?',
      a: 'Yes—layout, typography, and cards scale cleanly from mobile to large screens.',
    },
    {
      q: 'Can I change colors and content?',
      a: 'Absolutely. Everything is Tailwind classes and plain React components.',
    },
    {
      q: 'What about animations?',
      a: 'Framer Motion is included for smooth entrance and hover interactions (and respects “reduced motion”).',
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-[0.55]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(168,85,247,0.35),transparent_70%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-semibold">
              S
            </span>
            <span className="text-sm font-semibold tracking-wide text-white">SaaSly</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a className="hover:text-white" href="#features">
              Features
            </a>
            <a className="hover:text-white" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-white" href="#testimonials">
              Testimonials
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
            <a className="hover:text-white" href="#how-it-works">
              How it works
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* HERO */}
        <section className="relative pb-16 pt-16 sm:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              variants={motionUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                For SaaS founders and startup teams
              </div>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Launch fast, modern React landing pages without coding hassle.
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
                Turn traffic into free-trial users with conversion-ready sections, product visuals, and
                trust signals built for SaaS growth.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110"
                >
                  Start Free Trial
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-xs text-zinc-300">
                <Badge>Fully responsive</Badge>
                <Badge>Framer Motion</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Dark modern UI</Badge>
              </div>
            </motion.div>

            {/* Fake dashboard preview */}
            <motion.div
              variants={motionIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-cyan-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 shadow-2xl shadow-black/40">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="text-xs text-zinc-400">Dashboard Preview</div>
                  <div className="text-xs text-zinc-500">saasly.app</div>
                </div>
                <div className="grid gap-4 p-4 sm:p-5">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <Metric label="MRR" value="$42.8k" delta="+12%" />
                    <Metric label="Churn" value="1.9%" delta="-0.4%" good />
                    <Metric label="Trials" value="1,284" delta="+9%" />
                    <Metric label="NPS" value="54" delta="+3" />
                  </div>
                  <div className="grid gap-4 lg:grid-cols-5">
                    <div className="lg:col-span-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold text-white">Revenue</div>
                          <div className="text-xs text-zinc-400">Last 30 days</div>
                        </div>
                        <div className="mt-3 h-28 rounded-lg bg-[linear-gradient(180deg,rgba(168,85,247,0.35),transparent)]">
                          <div className="h-full w-full bg-[radial-gradient(ellipse_55%_40%_at_20%_20%,rgba(34,211,238,0.18),transparent_55%)]" />
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-zinc-300">
                          <MiniStat label="ARPA" value="$64" />
                          <MiniStat label="CAC" value="$18" />
                          <MiniStat label="LTV" value="$1.9k" />
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold text-white">Activity</div>
                          <div className="text-xs text-zinc-400">Live</div>
                        </div>
                        <div className="mt-3 space-y-2">
                          <EventRow title="New subscription" meta="Pro • 2m ago" />
                          <EventRow title="Invoice paid" meta="$49 • 8m ago" />
                          <EventRow title="Trial started" meta="Starter • 13m ago" />
                          <EventRow title="Upgrade request" meta="Business • 23m ago" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                <span>Interactive React dashboard preview included</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
                  No backend needed
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="border-t border-white/10 py-10">
          <div className="text-center">
            <p className="text-sm font-semibold text-cyan-200">Trusted by 500+ startups and SaaS teams</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-300">
              <Badge>3,200+ pages launched</Badge>
              <Badge>Average +31% trial signups</Badge>
              <Badge>4.9/5 founder rating</Badge>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-300 sm:grid-cols-3 lg:grid-cols-6">
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 font-semibold tracking-wide"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT DEMO */}
        <section className="border-t border-white/10 py-16">
          <motion.div
            variants={motionUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid items-center gap-8 lg:grid-cols-2"
          >
            <div className="text-left">
              <p className="text-sm font-semibold text-violet-300">Product demo</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                See exactly what your clients will experience.
              </h2>
              <p className="mt-3 max-w-xl text-zinc-300">
                Live-style dashboard blocks and animated interactions help prospects understand your value
                in seconds, not minutes.
              </p>
              <div className="mt-6">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="aspect-[16/10] rounded-xl border border-white/10 bg-zinc-900/70 p-4">
                <div className="h-full rounded-lg bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.35),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.22),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4">
                  <div className="mb-4 h-3 w-28 rounded bg-white/20" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-lg bg-white/10" />
                    <div className="h-16 rounded-lg bg-white/10" />
                    <div className="h-16 rounded-lg bg-white/10" />
                  </div>
                  <div className="mt-4 h-28 rounded-lg bg-white/10" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="border-t border-white/10 py-16">
          <motion.div
            variants={motionUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-left"
          >
            <p className="text-sm font-semibold text-emerald-300">How it works</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Three steps to launch and convert.
            </h2>
          </motion.div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { step: '01', title: 'Sign up', desc: 'Create your account and pick a conversion-focused template.' },
              { step: '02', title: 'Customize', desc: 'Edit content, brand colors, and pricing in minutes.' },
              { step: '03', title: 'Launch', desc: 'Publish and start collecting qualified free-trial leads.' },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-xs font-semibold text-violet-300">{item.step}</div>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="border-t border-white/10 py-16">
          <motion.div
            variants={motionUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-left"
          >
            <p className="text-sm font-semibold text-violet-300">Features</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Outcomes your clients actually care about.
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-300">
              Every feature is mapped to a business result: faster launches, better conversions, and lower bounce.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={motionUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: reduceMotion ? 0 : i * 0.04 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition hover:bg-white/7"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-white">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">{f.desc}</p>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500/25 to-fuchsia-500/10 ring-1 ring-white/10" />
                </div>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent opacity-70" />
                <p className="mt-4 text-xs text-zinc-400">
                  Built for conversion: clear value → proof → pricing → action.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="border-t border-white/10 py-16">
          <motion.div
            variants={motionUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-left"
          >
            <p className="text-sm font-semibold text-fuchsia-300">Pricing</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Simple pricing, no surprises.
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-300">
              Transparent tiers with a clear “best value” highlight.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {pricing.map((p, i) => (
              <motion.div
                key={p.name}
                variants={motionUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: reduceMotion ? 0 : i * 0.05 }}
                className={[
                  'relative rounded-2xl border p-6 text-left',
                  p.highlight
                    ? 'border-fuchsia-400/40 bg-gradient-to-b from-white/10 to-white/5 shadow-lg shadow-fuchsia-500/10'
                    : 'border-white/10 bg-white/5',
                ].join(' ')}
              >
                {p.highlight && (
                  <div className="absolute right-4 top-4 rounded-full bg-fuchsia-500/15 px-3 py-1 text-xs font-semibold text-fuchsia-200 ring-1 ring-fuchsia-400/30">
                    Most popular
                  </div>
                )}
                <h3 className="text-base font-semibold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{p.note}</p>
                <div className="mt-6 flex items-end gap-2">
                  <div className="text-4xl font-semibold tracking-tight text-white">{p.price}</div>
                  <div className="pb-1 text-sm text-zinc-400">/mo</div>
                </div>
                <a
                  href="#pricing"
                  className={[
                    'mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white',
                    p.highlight
                      ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:brightness-110'
                      : 'border border-white/10 bg-white/5 hover:bg-white/10',
                  ].join(' ')}
                >
                  Start Free Trial
                </a>
                <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="border-t border-white/10 py-16">
          <motion.div
            variants={motionUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-left"
          >
            <p className="text-sm font-semibold text-cyan-300">Testimonials</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Social proof that closes deals.
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-300">
              Clean cards, readable quotes, and a premium feel.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                variants={motionUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: reduceMotion ? 0 : i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left"
              >
                <blockquote className="text-sm leading-relaxed text-zinc-200">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-zinc-400">{t.title}</div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-500/25 to-cyan-500/10 ring-1 ring-white/10" />
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="border-t border-white/10 py-16">
          <motion.div
            variants={motionUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8"
          >
            <p className="text-sm font-semibold text-amber-300">Case study</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              From 2.1% to 6.4% trial conversion in 21 days.
            </h2>
            <p className="mt-3 max-w-3xl text-zinc-300">
              A B2B startup replaced a generic template headline and weak CTA with this conversion-focused
              structure. Result: 3x more trial signups from the same traffic.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-zinc-950/40 p-4">
                <div className="text-xs font-semibold text-zinc-400">Before</div>
                <div className="mt-2 text-sm text-zinc-200">Generic headline, no proof, scattered CTAs.</div>
              </div>
              <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4">
                <div className="text-xs font-semibold text-emerald-200">After</div>
                <div className="mt-2 text-sm text-emerald-100">
                  Clear value proposition, social proof, product demo, and one dominant CTA.
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-white/10 py-16">
          <motion.div
            variants={motionUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-left"
          >
            <p className="text-sm font-semibold text-violet-300">FAQ</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Questions, answered.
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-300">
              Simple accordion—great for trust and handling objections.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-3">
            {faqs.map((item, idx) => {
              const open = openFaq === idx
              return (
                <div key={item.q} className="rounded-2xl border border-white/10 bg-white/5">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenFaq((cur) => (cur === idx ? -1 : idx))}
                    aria-expanded={open}
                  >
                    <span className="text-sm font-semibold text-white">{item.q}</span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-200">
                      {open ? '–' : '+'}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={reduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={reduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                        exit={reduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-sm leading-relaxed text-zinc-300">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-white/10 py-16">
          <motion.div
            variants={motionUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid gap-10 lg:grid-cols-2"
          >
            <div className="text-left">
              <p className="text-sm font-semibold text-fuchsia-300">Contact</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to launch?
              </h2>
              <p className="mt-3 max-w-xl text-zinc-300">
                Drop your details and we’ll “reach out” (form is UI-only—perfect for demos).
              </p>

              <div className="mt-6 grid gap-3 text-sm text-zinc-300">
                <InfoRow label="Email" value="hello@saasly.app" />
                <InfoRow label="Response time" value="Under 24 hours" />
                <InfoRow label="Stack" value="React + Vite + Tailwind + Framer Motion" />
              </div>
            </div>

            <form
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name" placeholder="Sanjida" />
                <Field label="Last name" placeholder="Akter" />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Email" placeholder="you@company.com" type="email" />
                <Field label="Company" placeholder="Your startup" />
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold text-zinc-200">Message</label>
                <textarea
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none ring-0 focus:border-fuchsia-400/40"
                  placeholder="Tell us what you’re building…"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/15 hover:brightness-110"
              >
                Send message
              </button>
              <p className="mt-3 text-xs text-zinc-400">
                By submitting, you agree to our pretend terms.
              </p>
            </form>
          </motion.div>
        </section>

        {/* FINAL CTA */}
        <section id="final-cta" className="border-t border-white/10 py-16">
          <div className="rounded-3xl border border-fuchsia-400/30 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-cyan-500/10 p-8 text-center sm:p-12">
            <p className="text-sm font-semibold text-fuchsia-200">Ready to launch?</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Start your free trial today.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-200">
              Build a SaaS landing page that looks premium, feels trustworthy, and converts visitors into
              users.
            </p>
            <a
              href="#pricing"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110"
            >
              Start Free Trial
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-zinc-400 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
              S
            </span>
            <span>© {new Date().getFullYear()} SaaSly. All rights reserved.</span>
          </div>
          <div className="flex gap-5">
            <a className="hover:text-white" href="#features">
              Features
            </a>
            <a className="hover:text-white" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-white" href="#pricing">
              Start Free Trial
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Badge({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
      {children}
    </span>
  )
}

function Metric({ label, value, delta, good }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="text-xs text-zinc-400">{label}</div>
      <div className="mt-1 flex items-end justify-between gap-2">
        <div className="text-base font-semibold text-white">{value}</div>
        <div
          className={[
            'text-xs',
            good ? 'text-emerald-300' : 'text-zinc-300',
          ].join(' ')}
        >
          {delta}
        </div>
      </div>
    </div>
  )
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-zinc-950/35 px-3 py-2">
      <div className="text-[11px] text-zinc-400">{label}</div>
      <div className="mt-0.5 text-xs font-semibold text-white">{value}</div>
    </div>
  )
}

function EventRow({ title, meta }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-zinc-950/35 px-3 py-2">
      <div className="min-w-0">
        <div className="truncate text-xs font-semibold text-white">{title}</div>
        <div className="truncate text-[11px] text-zinc-400">{meta}</div>
      </div>
      <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400/90" />
    </div>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <span className="text-xs font-semibold text-zinc-200">{label}</span>
      <span className="text-xs text-zinc-300">{value}</span>
    </div>
  )
}

function Field({ label, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="text-xs font-semibold text-zinc-200">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none ring-0 focus:border-fuchsia-400/40"
      />
    </div>
  )
}

export default App
