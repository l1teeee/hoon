import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate mb-24 flex min-h-[calc(100svh-6rem)] items-center justify-center overflow-hidden">
      <Image
        src="/textures/hero-bg.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <h1 className="hero-title text-lg leading-none text-white md:text-2xl">hoon</h1>
    </section>
  );
}
