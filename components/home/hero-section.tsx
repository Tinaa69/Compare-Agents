import { ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const propertyTypes = [
  "Apartment",
  "Duplex",
  "Terraced house",
  "Semi detached house",
  "Detached house",
  "Bungalow",
]

const bedrooms = ["1", "2", "3", "4", "5", "6", "7", "8"]
const bathrooms = ["1", "2", "3", "4", "5"]
const conditions = ["Fair", "Good", "Very good", "Excellent"]
const timelines = ["0-3 months", "3-6 months", "Over 6 months", "Not sure"]

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
            Compare Irish estate agents and choose with confidence
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 sm:text-xl">
            Receive up to 4 offers from verified agents, compare fees and performance side by side, and choose the right fit for you and your property.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-primary-foreground/12 bg-card p-6 shadow-2xl shadow-black/20 sm:p-8">
          <Tabs defaultValue="sale" className="w-full">
            <TabsList className="grid h-auto w-full grid-cols-2 rounded-2xl bg-secondary p-1">
              <TabsTrigger value="sale" className="h-12 rounded-xl text-sm font-semibold">
                Property sale
              </TabsTrigger>
              <TabsTrigger value="let" className="h-12 rounded-xl text-sm font-semibold">
                Property let
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sale" className="mt-6">
              <PropertyForm service="sale" />
            </TabsContent>

            <TabsContent value="let" className="mt-6">
              <PropertyForm service="let" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function PropertyForm({ service }: { service: "sale" | "let" }) {
  return (
    <form id="hero-form" className="grid gap-3 md:grid-cols-2 lg:grid-cols-6" action="/thank-you" method="get">
      <input type="hidden" name="service" value={service} />
      <input
        name="address"
        type="text"
        required
        placeholder="Address*"
        className="h-14 w-full min-w-0 rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 lg:col-span-3"
      />
      <input
        name="estimatedValue"
        type="text"
        placeholder="Estimated value"
        className="h-14 w-full min-w-0 rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 lg:col-span-3"
      />
      <select
        name="propertyType"
        required
        defaultValue=""
        className="h-14 w-full min-w-0 rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20 lg:col-span-2"
      >
        <option value="" disabled>
          Property type*
        </option>
        {propertyTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <select
        name="bedrooms"
        required
        defaultValue=""
        className="h-14 w-full min-w-0 rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20 lg:col-span-1"
      >
        <option value="" disabled>
          Bedrooms*
        </option>
        {bedrooms.map((count) => (
          <option key={count} value={count}>
            {count}
          </option>
        ))}
      </select>
      <select
        name="bathrooms"
        required
        defaultValue=""
        className="h-14 w-full min-w-0 rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20 lg:col-span-1"
      >
        <option value="" disabled>
          Bathrooms*
        </option>
        {bathrooms.map((count) => (
          <option key={count} value={count}>
            {count}
          </option>
        ))}
      </select>
      <input
        name="size"
        type="text"
        placeholder="Size (m2)"
        className="h-14 w-full min-w-0 rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 lg:col-span-1"
      />
      <select
        name="condition"
        required
        defaultValue=""
        className="h-14 w-full min-w-0 rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20 lg:col-span-1"
      >
        <option value="" disabled>
          Condition*
        </option>
        {conditions.map((condition) => (
          <option key={condition} value={condition}>
            {condition}
          </option>
        ))}
      </select>
      <select
        name="extension"
        required
        defaultValue=""
        className="h-14 w-full min-w-0 rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20 lg:col-span-1"
      >
        <option value="" disabled>
          Extension?*
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <select
        name="timeline"
        required
        defaultValue=""
        className="h-14 w-full min-w-0 rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20 lg:col-span-4"
      >
        <option value="" disabled>
          When would you like to sell/let?*
        </option>
        {timelines.map((timeline) => (
          <option key={timeline} value={timeline}>
            {timeline}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-accent px-6 text-base font-semibold text-accent-foreground shadow-[0_16px_32px_rgba(214,176,84,0.28)] transition hover:-translate-y-0.5 hover:bg-accent/90 lg:col-span-2"
      >
        Request Agent Offers
        <ChevronRight className="ml-1 h-4 w-4" />
      </button>
    </form>
  )
}


