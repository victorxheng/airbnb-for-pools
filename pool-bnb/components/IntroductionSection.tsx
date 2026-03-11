import React from 'react';
import Link from 'next/link';

const IntroductionSection: React.FC = () => {
  return (
    <section className="panel mt-8 overflow-hidden">
      <div className="grid gap-6 px-6 py-10 md:grid-cols-[1.15fr_0.85fr] md:px-10">
        <div>
          <p className="mb-3 inline-flex rounded-full bg-[#f0ead8] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#3b4e5f]">
            Private pools. Zero hassle.
          </p>
          <h1 className="text-4xl leading-tight text-[#173347] md:text-5xl">
            Book the right pool for your next weekend.
          </h1>
          <p className="muted mt-4 max-w-xl text-base md:text-lg">
            Explore curated private pools for families, groups, and events. Filter by location, amenities, and budget in minutes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/pool-listings" className="btn-primary">
              Explore Listings
            </Link>
            <Link href="/dashboard" className="btn-ghost">
              List Your Pool
            </Link>
          </div>
        </div>
        <div className="relative rounded-2xl border border-[#d7d2c6] bg-gradient-to-br from-[#173347] to-[#006877] p-6 text-white">
          <h2 className="text-2xl">Host Snapshot</h2>
          <p className="mt-2 text-sm text-white/85">
            Hosts earn consistently by renting out unused pool hours.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-center">
            <div className="rounded-xl bg-white/15 p-3">
              <p className="text-2xl font-bold">$420</p>
              <p className="text-xs uppercase tracking-wide text-white/80">Avg Weekly</p>
            </div>
            <div className="rounded-xl bg-white/15 p-3">
              <p className="text-2xl font-bold">4.8</p>
              <p className="text-xs uppercase tracking-wide text-white/80">Guest Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
