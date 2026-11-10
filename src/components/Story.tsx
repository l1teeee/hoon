const groups = [
  {
    title: "Origin",
    lines: [
      "Raw materials sourced with care",
      "Small batches, traced to the maker",
      "Nothing hurried, nothing wasted",
      "Honest surfaces that show their age",
    ],
  },
  {
    title: "Craft",
    lines: [
      "Shaped by hand in our studio",
      "Finished with oils and wax",
      "Checked piece by piece",
      "Made to be repaired, not replaced",
    ],
  },
  {
    title: "Care",
    lines: [
      "Wipe clean with a soft cloth",
      "Keep away from direct heat",
      "Re-oil once a year",
      "Let it patina with use",
    ],
  },
];

export default function Story() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center md:py-32">
      <p className="max-w-md text-xs leading-relaxed tracking-wide text-foreground/70">
        Objects made slowly, from honest materials. Every piece is shaped by
        hand and finished to age well, so it only grows more yours with time.
      </p>
      {groups.map(({ title, lines }) => (
        <div key={title} className="mt-16 flex flex-col items-center">
          <h2 className="font-serif text-2xl font-light md:text-3xl">
            {title}
          </h2>
          <ul className="mt-5 space-y-2 text-xs leading-relaxed text-foreground/60">
            {lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
