import React from 'react';

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-[#07140B] text-white">
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-16 sm:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.10),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,20,11,0.92),rgba(11,46,22,0.88))]" />

        <div className="relative mx-auto w-full max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-3 border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-emerald-100">
            <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
            Maintenance Mode
          </div>

          <h1 className="max-w-3xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
            Scale Partners is getting a quick upgrade.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/80">
            We are performing scheduled maintenance and will be back online shortly.
          </p>
        </div>
      </section>
    </main>
  );
}