import Link from "next/link"
import { CheckCircle2, ChevronRight } from "lucide-react"

const trustPoints = [
  "2,400+ properties",
  "4.9/5 rating",
  "No obligation",
]

const quickStats = [
  "18% fee savings",
  "48hr response",
  "2,400+ matches",
  "4.9/5 rating",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(214,176,84,0.22),_transparent_28%),linear-gradient(135deg,_rgba(13,24,43,0.95),_rgba(30,46,69,0.92))]" />
      <div className="absolute left-[-8rem] top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute right-[-5rem] top-1/3 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground shadow-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span>Free for property owners</span>
          </div>

          <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            Compare Ireland estate agents and choose with confidence
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 sm:text-xl">
            Receive up to 4 offers from verified agents, compare fees and performance side by side, and pick the best fit for your property.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-primary-foreground/12 bg-card p-6 shadow-2xl shadow-black/20 sm:p-8">
          <div className="text-center">
            <p className="text-lg font-semibold text-card-foreground">
              See 4 free quotes from verified agents near you.
            </p>
          </div>

          <form
            id="hero-form"
            className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-6"
            action="/thank-you"
            method="get"
          >
            <input
              name="name"
              type="text"
              required
              placeholder="Name*"
              className="h-14 w-full min-w-0 rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 lg:col-span-2"
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Phone*"
              className="h-14 w-full min-w-0 rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 lg:col-span-2"
            />
            <input
              name="postcode"
              type="text"
              required
              placeholder="Postcode*"
              className="h-14 w-full min-w-0 rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 lg:col-span-2"
            />
            <select
              name="service"
              required
              defaultValue=""
              className="h-14 w-full min-w-0 rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20 md:col-span-1 lg:col-span-2"
            >
              <option value="" disabled>
                Sell / Rent
              </option>
              <option value="sell">Sell</option>
              <option value="rent">Rent</option>
            </select>
            <button
              type="submit"
              className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-accent px-6 text-base font-semibold text-accent-foreground shadow-[0_16px_32px_rgba(214,176,84,0.28)] transition hover:-translate-y-0.5 hover:bg-accent/90 md:col-span-1 lg:col-span-4"
            >
              Get 4 Quotes Free
              <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {trustPoints.map((item) => (
              <div key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-2xl bg-secondary px-5 py-4 text-center text-sm font-medium text-card-foreground">
            {quickStats.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-3 rounded-full bg-background/70 px-3 py-1 text-card-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          id="comparison-sample"
          className="mx-auto mt-8 max-w-4xl rounded-[1.5rem] border border-primary-foreground/12 bg-primary-foreground/8 p-5 text-primary-foreground backdrop-blur-sm"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
                Sample Comparison
              </p>
              <h2 className="mt-1 font-serif text-2xl">See fees, speed, and postcode fit side by side</h2>
            </div>
            <Link
              href="/agents"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              View agents
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-5 grid gap-3">
            {[
              { agent: "Coastline Property", fee: "1.25%", speed: "21 days avg.", highlight: "Best fit for Dublin 6 family homes with 98.4% price achieved" },
              { agent: "Harbour Lettings", fee: "7% let fee", speed: "12 days avg.", highlight: "Strong landlord results across Cork, Galway, and commuter towns" },
              { agent: "Oakview Estates", fee: "1.4%", speed: "18 days avg.", highlight: "High-conversion agent for Ireland sellers needing a fast launch" },
            ].map((item) => (
              <div
                key={item.agent}
                className="grid gap-3 rounded-2xl border border-primary-foreground/12 bg-primary-foreground/8 p-4 sm:grid-cols-[1.7fr_repeat(2,minmax(0,0.8fr))]"
              >
                <div>
                  <p className="font-semibold text-primary-foreground">{item.agent}</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">{item.highlight}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-primary-foreground/60">Typical fee</p>
                  <p className="mt-1 text-sm font-semibold text-primary-foreground">{item.fee}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-primary-foreground/60">Speed to offer</p>
                  <p className="mt-1 text-sm font-semibold text-primary-foreground">{item.speed}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


