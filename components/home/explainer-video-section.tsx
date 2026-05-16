export function ExplainerVideoSection() {
  return (
    <section id="how-it-works" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              How it works
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              See how CompareAgents.ie works
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Watch the short explainer to see how we connect motivated property owners with trusted local agents.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-black shadow-2xl">
            <video
              className="aspect-video w-full bg-black"
              controls
              preload="metadata"
              playsInline
            >
              <source src="/videos/partner-explainer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
