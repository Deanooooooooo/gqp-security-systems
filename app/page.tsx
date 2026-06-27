"use client";

import Image from "next/image";
import { animate, motion, useInView, useScroll, useTransform } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import {
  ArrowUpRight,
  BadgeCheck,
  BellRing,
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircuitBoard,
  FlameKindling,
  Lightbulb,
  LockKeyhole,
  Mail,
  MapPin,
  MessageSquareText,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assets = (name: string) => `${basePath}/assets/${name}`;

const facebookUrl = "https://www.facebook.com/p/GQP-Security-Systems-100068504379073/";
const myBuilderUrl = "https://www.mybuilder.com/profile/gqp_security_systems";
const phone = "07572 525408";
const phoneHref = "tel:+447572525408";
const email = "gav_quinton@hotmail.com";
const address = "Nabcroft Lane, Huddersfield HD4 5EP";
const mapsQuery = encodeURIComponent(`GQP Security Systems ${address}`);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const mapEmbedUrl = "https://maps.google.com/maps?q=53.635339,-1.808257&z=15&output=embed";

const services = [
  {
    icon: Camera,
    title: "CCTV systems",
    body: "Camera planning, installation and repair for homes and small business premises, with clean positioning and practical handover.",
  },
  {
    icon: BellRing,
    title: "Intruder alarms",
    body: "Alarm installs, faults, battery changes, keypad help and system resets for properties that need reliable protection.",
  },
  {
    icon: FlameKindling,
    title: "Fire systems",
    body: "Fire alarm work listed on the public profile, handled as part of a wider security and safety setup.",
  },
  {
    icon: LockKeyhole,
    title: "Access control",
    body: "Door entry, access control and security upgrades for entrances, outbuildings and commercial access points.",
  },
  {
    icon: MonitorSmartphone,
    title: "AV installations",
    body: "Practical AV installation support when screens, devices or cabling need to work cleanly alongside the building.",
  },
  {
    icon: Lightbulb,
    title: "Security lighting",
    body: "External lighting and door bell work that improves approach visibility and day-to-day confidence around the property.",
  },
];

const reviews = [
  {
    quote: "Job done quickly and efficiently. Excellent!!",
    name: "David Jones, Huddersfield",
    job: "Burglar alarm repair",
  },
  {
    quote:
      "Gavin was an absolute star! He came out at short notice and kindly talked me through exactly how to operate the alarm.",
    name: "Derrick, Doncaster",
    job: "House alarm",
  },
  {
    quote: "Responded really quick, job done fast, really nice and very professional service, thank you.",
    name: "martina, Huddersfield",
    job: "Alarm back-up battery change",
  },
];

const proofPoints = [
  "CCTV, intruder alarms, fire, access control, AV, lighting and door bell work handled through one local security specialist.",
  "Fourteen years of trade experience listed, with practical help for installs, repairs, resets, batteries and handover.",
  "Customers highlight quick response, short-notice attendance, clear guidance and professional service.",
  "Huddersfield based, serving homes and small business premises across West Yorkshire and nearby towns.",
];

const gallery = [
  {
    src: "gallery-cctv.png",
    icon: Camera,
    title: "CCTV coverage points",
    body: "Camera positions for entrances, driveways, side access and overlooked blind spots.",
    alt: "CCTV camera mounted neatly under the eaves of a brick home",
  },
  {
    src: "gallery-alarm.png",
    icon: BellRing,
    title: "Alarm controls",
    body: "Keypads, batteries, resets and handover help for existing or newly fitted alarm systems.",
    alt: "Intruder alarm keypad mounted on an interior hallway wall",
  },
  {
    src: "gallery-access.png",
    icon: LockKeyhole,
    title: "Entry control",
    body: "Door entry and access control for homes, shops, offices and small commercial premises.",
    alt: "Access control keypad beside a modern entrance door",
  },
  {
    src: "gallery-lighting-doorbell.png",
    icon: Lightbulb,
    title: "Lighting and door bells",
    body: "Exterior lighting and smart door bell positions that improve approach visibility.",
    alt: "Exterior security light and smart doorbell beside a front door",
  },
];

const faqs = [
  ["Can GQP repair an existing alarm?", "Yes. Public MyBuilder review jobs include burglar alarm repair, alarm setup, code reprogramming and back-up battery changes."],
  ["Do they install CCTV?", "Yes. CCTV is listed on the Facebook and MyBuilder profiles, including camera installation and CCTV cabling review jobs."],
  ["Is this only for homes?", "The public listings position GQP for home security and broader security systems work, including access control, fire and AV installations."],
  ["Where should customers enquire?", "Use the phone or email for a direct brief, or check the Facebook and MyBuilder profiles for more background before getting in touch."],
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "220px" });

  useEffect(() => {
    if (!ref.current || !inView) return;
    const controls = animate(0, value, {
      duration: 1.15,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, suffix, value]);

  return <span ref={ref}>0{suffix}</span>;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      className="group w-full rounded-xl border border-slate-900/10 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-600/35"
      onClick={() => setOpen((current) => !current)}
      type="button"
    >
      <span className="flex items-center justify-between gap-4 text-base font-black text-slate-950">
        {q}
        <ChevronDown className={`shrink-0 text-emerald-700 transition ${open ? "rotate-180" : ""}`} size={20} />
      </span>
      {open ? <span className="mt-4 block text-sm leading-7 text-slate-600">{a}</span> : null}
    </button>
  );
}

function BrandIcon({ type }: { type: "facebook" | "mybuilder" }) {
  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.25 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.25c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.25 22 17.08 22 12.06z" />
      </svg>
    );
  }
  return <span className="text-[11px] font-black tracking-normal">MB</span>;
}

export default function Page() {
  const main = useRef<HTMLElement>(null);
  const galleryTrack = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -64]);
  const beamY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const [brief, setBrief] = useState("CCTV installation");

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false });
    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        y: 44,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".services-grid", start: "top 74%" },
      });
      gsap.to(".signal-line", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: ".proof-section", start: "top 70%", end: "bottom 40%", scrub: true },
      });
    }, main);
    return () => ctx.revert();
  }, []);

  const scrollGallery = (direction: "previous" | "next") => {
    const track = galleryTrack.current;
    if (!track) return;
    const firstCard = track.querySelector("figure");
    const distance = firstCard ? firstCard.getBoundingClientRect().width + 16 : Math.min(track.clientWidth * 0.86, 620);
    track.scrollBy({ left: direction === "next" ? distance : -distance, behavior: "smooth" });
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "GQP Security Systems",
    image: assets("gqp-logo.jpg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nabcroft Lane",
      addressLocality: "Huddersfield",
      addressRegion: "West Yorkshire",
      postalCode: "HD4 5EP",
      addressCountry: "GB",
    },
    geo: { "@type": "GeoCoordinates", latitude: 53.635339, longitude: -1.808257 },
    telephone: "+447572525408",
    email,
    areaServed: ["Huddersfield", "West Yorkshire", "Yorkshire", "Greater Manchester"],
    sameAs: [facebookUrl, myBuilderUrl],
    url: "https://deanooooooooo.github.io/gqp-security-systems/",
  };

  return (
    <motion.main
      ref={main}
      className="min-h-screen overflow-hidden bg-[#f4f7f4] text-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55 }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <motion.div style={{ y: beamY }} className="pointer-events-none fixed right-0 top-0 z-0 h-[42rem] w-[42rem] rounded-full bg-emerald-500/10 blur-3xl" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-950/10 bg-[#f4f7f4]/84 px-4 py-3 backdrop-blur-2xl sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <Image src={assets("gqp-logo.jpg")} width={46} height={46} alt="GQP Security Systems logo" className="h-11 w-11 rounded-full object-cover ring-1 ring-emerald-700/20" />
            <span className="min-w-0">
              <strong className="block text-sm leading-none sm:text-base">GQP Security Systems</strong>
              <small className="mt-1 block text-xs text-slate-600">Huddersfield security systems</small>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold text-slate-600 lg:flex">
            {["Services", "Gallery", "Proof", "Reviews", "FAQ", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-emerald-700">
                {item}
              </a>
            ))}
          </nav>
          <a href={phoneHref} aria-label="Call GQP Security Systems">
            <Button asChild variant="brass" className="rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400">
              <span><Phone size={18} /><span className="hidden sm:inline">{phone}</span></span>
            </Button>
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-screen overflow-hidden px-4 pb-16 pt-28 sm:px-8">
        <Image src={assets("hero-security-install.png")} alt="" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,247,244,0.96)_0%,rgba(244,247,244,0.86)_43%,rgba(244,247,244,0.22)_72%,rgba(244,247,244,0.05)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(16,185,129,0.18),transparent_30%),linear-gradient(180deg,transparent_70%,#f4f7f4_100%)]" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.72fr]">
          <motion.div style={{ y: heroY }} className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-800/12 bg-white/72 px-4 py-2 text-xs font-black uppercase text-emerald-800 shadow-sm backdrop-blur-xl">
              <ShieldCheck size={15} /> CCTV, alarms, access and fire systems
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-normal sm:text-7xl lg:text-8xl">
              Security systems installer in Huddersfield.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700">
              CCTV, intruder alarms, fire systems, access control, AV installs, lighting and door bell work from a reviewed local security specialist.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${email}`}>
                <Button asChild variant="brass" className="rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400">
                  <span><Mail size={19} />Email a brief</span>
                </Button>
              </a>
              <a href={phoneHref}>
                <Button asChild variant="secondary" className="rounded-xl border-slate-950/15 bg-white/80 text-slate-950 hover:bg-white">
                  <span><Phone size={19} />Call {phone}</span>
                </Button>
              </a>
              <a href={facebookUrl}>
                <Button asChild variant="secondary" className="rounded-xl border-slate-950/15 bg-white/80 text-slate-950 hover:bg-white">
                  <span><BrandIcon type="facebook" />Facebook page</span>
                </Button>
              </a>
            </div>
          </motion.div>

          <Card className="rounded-2xl border-slate-950/10 bg-slate-950 text-white shadow-[0_44px_140px_rgba(15,23,42,0.28)]">
            <CardContent className="p-6 sm:p-7">
              <p className="mb-2 text-xs font-black uppercase text-emerald-300">Security enquiry brief</p>
              <h2 className="text-3xl font-black leading-none">What needs securing?</h2>
              <form className="mt-7 grid gap-4" action={`mailto:${email}`} method="post" encType="text/plain">
                <label className="grid gap-2 text-sm font-bold text-white/76">
                  Service
                  <select
                    name="service"
                    value={brief}
                    onChange={(event) => setBrief(event.target.value)}
                    className="min-h-12 rounded-xl border border-white/12 bg-white/10 px-4 text-white outline-none"
                  >
                    <option className="text-slate-950">CCTV installation</option>
                    <option className="text-slate-950">Alarm repair or setup</option>
                    <option className="text-slate-950">Access control</option>
                    <option className="text-slate-950">Fire alarm work</option>
                    <option className="text-slate-950">Lighting or door bell</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-bold text-white/76">
                  Property type
                  <select name="property" className="min-h-12 rounded-xl border border-white/12 bg-white/10 px-4 text-white outline-none">
                    <option className="text-slate-950">Home</option>
                    <option className="text-slate-950">Shop or office</option>
                    <option className="text-slate-950">Outbuilding or storage</option>
                    <option className="text-slate-950">Existing system repair</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-bold text-white/76">
                  Notes for the job
                  <textarea
                    name="details"
                    rows={4}
                    placeholder="Example: alarm keypad fault, two cameras, door entry, exterior light, or system handover needed."
                    className="resize-none rounded-xl border border-white/12 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/38"
                  />
                </label>
                <button className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-4 text-sm font-black text-slate-950 transition hover:bg-emerald-300" type="submit">
                  <Mail size={19} /> Email security brief
                </button>
                <p className="m-0 text-xs leading-6 text-white/50">
                  Selected: {brief}. Sends your security brief direct to GQP; call {phone} if the job is urgent.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-8 grid max-w-7xl gap-4 px-4 sm:px-8 md:grid-cols-3">
        {[
          [14, "", "years of trade experience listed"],
          [5, "/5", "rating shown on MyBuilder"],
          [6, "", "security service categories covered"],
        ].map(([value, suffix, label]) => (
          <Card key={String(label)} className="rounded-2xl border-slate-950/10 bg-white/88 text-slate-950 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur-2xl">
            <CardContent className="p-6">
              <strong className="block text-5xl font-black text-emerald-700"><Counter value={Number(value)} suffix={String(suffix)} /></strong>
              <span className="mt-3 block text-sm font-bold text-slate-600">{label}</span>
            </CardContent>
          </Card>
        ))}
      </section>

      <section id="services" className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="mb-3 text-xs font-black uppercase text-emerald-700">Services</p>
          <h2 className="text-4xl font-black leading-none sm:text-6xl">Security work without the vague sales pitch.</h2>
        </Reveal>
        <div className="services-grid mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className="service-card group min-h-[280px] rounded-2xl border border-slate-950/10 bg-white p-6 shadow-sm"
                whileHover={{ y: -8, rotateX: 2, rotateY: -2, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                <div className="mb-9 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-700/20 bg-emerald-50 text-emerald-800 transition group-hover:bg-emerald-500 group-hover:text-slate-950">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-black">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.body}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="gallery" className="relative z-10 scroll-mt-24 pb-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid gap-8 px-4 sm:px-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-black uppercase text-emerald-700">Security setup gallery</p>
              <h2 className="text-4xl font-black leading-none sm:text-6xl">The parts of the property that usually need attention.</h2>
            </div>
            <div className="grid gap-5 lg:justify-self-end">
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                A strong security setup is not one gadget. It is the right mix of cameras, alarms, entry control and lighting, placed where they reduce real day-to-day risk.
              </p>
              <div className="flex gap-2 lg:justify-end">
                <button
                  type="button"
                  aria-label="Scroll gallery left"
                  onClick={() => scrollGallery("previous")}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-950/10 bg-white text-slate-950 shadow-sm transition hover:bg-emerald-400"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  aria-label="Scroll gallery right"
                  onClick={() => scrollGallery("next")}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-950/10 bg-slate-950 text-white shadow-sm transition hover:bg-emerald-500 hover:text-slate-950"
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            </div>
          </Reveal>
          <div
            ref={galleryTrack}
            className="security-gallery-track mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:px-8"
            aria-label="Security setup gallery"
          >
            {gallery.map((item) => {
              const Icon = item.icon;
              return (
              <motion.figure
                key={item.src}
                className="group relative flex h-[520px] w-[82vw] max-w-[520px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-950/10 bg-white shadow-sm sm:w-[430px] lg:w-[480px]"
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              >
                <div className="relative h-[330px] shrink-0 overflow-hidden bg-slate-100">
                  <Image
                    src={assets(item.src)}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 480px, 82vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="flex flex-1 flex-col justify-between p-6">
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                    <Icon size={23} />
                  </span>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                </figcaption>
              </motion.figure>
              );
            })}
          </div>
        </div>
      </section>

      <section id="proof" className="proof-section relative bg-slate-950 px-4 py-24 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr]">
          <Reveal>
            <p className="mb-3 text-xs font-black uppercase text-emerald-300">Why GQP</p>
            <h2 className="text-4xl font-black leading-none sm:text-6xl">A tidy route from security concern to working system.</h2>
            <p className="mt-6 text-lg leading-8 text-white/62">
              Whether it is a camera blind spot, alarm fault, access issue or outdoor lighting upgrade, the job starts with a clear brief and ends with a system the customer can actually use.
            </p>
          </Reveal>
          <div className="space-y-5">
            {proofPoints.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl">
                  <div className="signal-line mb-4 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-300 to-sky-300" />
                  <p className="m-0 flex gap-3 text-lg font-black text-white/86"><BadgeCheck className="shrink-0 text-emerald-300" />{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-4 py-24 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="mb-3 text-xs font-black uppercase text-emerald-700">Customer words</p>
          <h2 className="text-4xl font-black leading-none sm:text-6xl">Short, specific reviews from security jobs.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((item) => (
            <Card key={item.quote} className="rounded-2xl border-slate-950/10 bg-white text-slate-950 shadow-sm">
              <CardContent className="p-6">
                <div className="mb-6 flex gap-1 text-emerald-700" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={17} fill="currentColor" />)}
                </div>
                <p className="text-lg italic leading-8 text-slate-700">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-5 text-sm text-slate-700">{item.name}</p>
                <p className="mt-1 text-xs font-black uppercase text-slate-400">{item.job}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-3 text-xs font-black uppercase text-emerald-700">System thinking</p>
          <h2 className="text-4xl font-black leading-none sm:text-6xl">Cameras, alarms and access points planned as one setup.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            The service mix makes sense for properties that need more than one isolated fix: visible deterrence, controlled entry, lighting and reliable handover.
          </p>
        </Reveal>
        <Reveal className="grid gap-4 sm:grid-cols-2">
          {[
            ["Plan", "Walk through the weak points: approach, blind spots, doors, outbuildings and existing system faults."],
            ["Install", "Place cameras, alarm parts, lighting and access controls neatly so they suit the property."],
            ["Handover", "Make sure the customer understands basic use, codes, alerts and what to do next."],
            ["Repair", "Handle common existing-system issues such as batteries, cabling, codes and keypad faults."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-slate-950/10 bg-white p-6 shadow-sm">
              <CircuitBoard className="mb-8 text-emerald-700" size={30} />
              <h3 className="text-2xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section id="faq" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-8 lg:grid-cols-[0.72fr_1fr]">
        <Reveal>
          <p className="mb-3 text-xs font-black uppercase text-emerald-700">FAQ</p>
          <h2 className="text-4xl font-black leading-none sm:text-6xl">Useful answers before the enquiry.</h2>
        </Reveal>
        <div className="space-y-3">{faqs.map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}</div>
      </section>

      <section id="contact" className="relative px-4 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <Card className="rounded-3xl border-slate-950/10 bg-white text-slate-950 shadow-sm">
            <CardContent className="p-7 lg:p-9">
              <p className="mb-3 text-xs font-black uppercase text-emerald-700">Contact</p>
              <h2 className="text-4xl font-black leading-none">Get the security job in front of GQP.</h2>
              <div className="mt-8 grid gap-4 text-sm font-bold text-slate-700">
                <a className="flex gap-3 rounded-xl border border-slate-950/10 bg-slate-50 p-4 transition hover:border-emerald-700/35" href={phoneHref}>
                  <Phone className="shrink-0 text-emerald-700" size={19} /> {phone}
                </a>
                <a className="flex gap-3 rounded-xl border border-slate-950/10 bg-slate-50 p-4 transition hover:border-emerald-700/35" href={`mailto:${email}`}>
                  <Mail className="shrink-0 text-emerald-700" size={19} /> {email}
                </a>
                <a className="flex gap-3 rounded-xl border border-slate-950/10 bg-slate-50 p-4 transition hover:border-emerald-700/35" href={myBuilderUrl}>
                  <MessageSquareText className="shrink-0 text-emerald-700" size={19} /> MyBuilder profile and reviews
                </a>
                <a className="flex gap-3 rounded-xl border border-slate-950/10 bg-slate-50 p-4 transition hover:border-emerald-700/35" href={facebookUrl}>
                  <BrandIcon type="facebook" /> Facebook page
                </a>
                <span className="flex gap-3 rounded-xl border border-slate-950/10 bg-slate-50 p-4">
                  <Wrench className="shrink-0 text-emerald-700" size={19} /> CCTV, alarms, fire, access, AV, lighting and door bells
                </span>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={phoneHref}><Button asChild variant="brass" className="rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400"><span><Phone size={18} />Call</span></Button></a>
                <a href={`mailto:${email}`}><Button asChild variant="secondary" className="rounded-xl border-slate-950/15 bg-white text-slate-950 hover:bg-slate-50"><span><Mail size={18} />Email</span></Button></a>
                <a href={facebookUrl}><Button asChild variant="secondary" className="rounded-xl border-slate-950/15 bg-white text-slate-950 hover:bg-slate-50"><span><BrandIcon type="facebook" />Facebook</span></Button></a>
              </div>
            </CardContent>
          </Card>
          <div className="overflow-hidden rounded-3xl border border-slate-950/10 bg-slate-950 text-white shadow-[0_40px_120px_rgba(15,23,42,0.24)]">
            <div className="grid items-center gap-6 p-7 lg:grid-cols-[auto_1fr] lg:p-9">
              <Image src={assets("gqp-logo.jpg")} alt="GQP Security Systems logo" width={120} height={120} className="h-28 w-28 rounded-2xl object-cover ring-1 ring-white/15" />
              <div>
                <p className="mb-3 text-xs font-black uppercase text-emerald-300">Local base</p>
                <h3 className="text-4xl font-black leading-none">GQP Security Systems, {address}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  Huddersfield security systems business listed publicly for CCTV, intruder alarms, fire, access control, AV installations, lighting systems and door bells.
                </p>
              </div>
            </div>
            <div className="grid gap-3 border-t border-white/10 bg-white/[0.045] p-5 sm:grid-cols-2">
              {[
                ["Fast fault help", "Alarm repairs, keypad issues, back-up batteries and existing system problems."],
                ["Better visibility", "CCTV, lighting and door bell work for approaches, doors, drives and outbuildings."],
                ["Controlled entry", "Access control and entry improvements for homes, shops and small premises."],
                ["Clear handover", "Practical guidance so the customer understands the system after the work is done."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <BadgeCheck className="mb-5 text-emerald-300" size={24} />
                  <h4 className="text-xl font-black">{title}</h4>
                  <p className="mt-3 text-sm leading-7 text-white/62">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-emerald-700/20 bg-emerald-400 p-8 text-slate-950 shadow-[0_30px_120px_rgba(16,185,129,0.22)] lg:p-12">
          <p className="mb-3 text-xs font-black uppercase">CCTV, alarms and access control</p>
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <h2 className="max-w-4xl text-4xl font-black leading-none sm:text-6xl">Need a security system looked at, repaired or installed?</h2>
            <a href={`mailto:${email}`}>
              <Button asChild className="rounded-xl bg-slate-950 text-white hover:bg-slate-800">
                <span><Mail size={19} />Email brief</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-3xl border border-slate-950/10 bg-white p-5 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="p-4">
            <p className="mb-3 text-xs font-black uppercase text-emerald-700">Security systems in Huddersfield, West Yorkshire</p>
            <h2 className="text-3xl font-black leading-tight">GQP Security Systems, {address}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Local security systems profile for CCTV installation, alarm repairs and setup, access control, fire systems, AV installations, lighting and door bell work.
            </p>
            <a className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white" href={mapsUrl}>
              <MapPin size={18} /> Open map
            </a>
          </div>
          <iframe
            title="Map to GQP Security Systems in Huddersfield"
            src={mapEmbedUrl}
            width="100%"
            height="430"
            loading="lazy"
            className="min-h-[360px] rounded-2xl border-0"
          />
        </div>
      </section>

      <footer className="border-t border-slate-950/10 bg-white px-4 py-8 text-slate-950 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Image src={assets("gqp-logo.jpg")} width={38} height={38} alt="" className="h-10 w-10 rounded-full object-cover" />
            <span>
              <strong className="block font-black">GQP Security Systems</strong>
              <small className="text-slate-500">Security systems installer in Huddersfield</small>
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { href: phoneHref, label: "Call GQP Security Systems", icon: <Phone size={19} /> },
              { href: `mailto:${email}`, label: "Email GQP Security Systems", icon: <Mail size={19} /> },
              { href: myBuilderUrl, label: "GQP Security Systems on MyBuilder", icon: <BrandIcon type="mybuilder" /> },
              { href: facebookUrl, label: "GQP Security Systems on Facebook", icon: <BrandIcon type="facebook" /> },
              { href: mapsUrl, label: "Google Maps search", icon: <MapPin size={19} /> },
            ].map((link) => (
              <a
                key={link.label}
                aria-label={link.label}
                href={link.href}
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-950/10 bg-slate-50 text-slate-800 transition hover:border-emerald-700/35 hover:bg-emerald-400 hover:text-slate-950"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </motion.main>
  );
}
