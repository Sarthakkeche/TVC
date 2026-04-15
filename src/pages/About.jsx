import { useEffect, useRef, useState } from "react";

/* ── PHOTOS ── */
const P = {
  drGillPortrait  : "/assets/Gill_Japsharan.jpg",
  drGillHead      : "/assets/dr j gill.jpg",
  drGillInside    : "/assets/dr J gill-inside.jpg",
  drGillConsult   : "/assets/dr j gill 2.jpg",
  consulting1     : "/assets/counsalting.jpg",
  consulting2     : "/assets/Counsalting 2.jpg",
  clinicInside    : "/assets/inside clinic1.jpg",
  clinicExterior  : "/assets/clinic1.jpg",
  clinicInterior  : "/assets/inetrioir clinic.jpg",
  receptionist    : "/assets/reciptent.jpg",
  office          : "/assets/office.jpg",
  emptyTable      : "/assets/emptytabel.jpg",
  magazines       : "/assets/magzize.jpg",
  drGAp           : "/assets/dr G ap.jpg",
  drGWorking      : "/assets/dr G working.jpg",
};

/* ── Scroll reveal ── */
function useReveal(t = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.unobserve(el); } },
      { threshold: t, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el); return () => obs.disconnect();
  }, [t]);
  return [ref, vis];
}

/* ── Counter ── */
function Counter({ to, suffix = "", ms = 1800 }) {
  const [v, setV] = useState(0);
  const [ref, vis] = useReveal(0.5);
  useEffect(() => {
    if (!vis) return;
    let t0 = null;
    const f = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / ms, 1);
      setV(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(f);
    };
    requestAnimationFrame(f);
  }, [vis, to, ms]);
  return <span ref={ref}>{v}{suffix}</span>;
}

/* ── Custom cursor ── */
function Cursor() {
  const dot = useRef(null), ring = useRef(null), pos = useRef({ x: 0, y: 0 }), raf = useRef(null);
  useEffect(() => {
    const mv = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    const tk = () => {
      if (dot.current)  dot.current.style.transform  = `translate(${pos.current.x - 4}px,${pos.current.y - 4}px)`;
      if (ring.current) ring.current.style.transform = `translate(${pos.current.x - 16}px,${pos.current.y - 16}px)`;
      raf.current = requestAnimationFrame(tk);
    };
    window.addEventListener("mousemove", mv);
    raf.current = requestAnimationFrame(tk);
    return () => { window.removeEventListener("mousemove", mv); cancelAnimationFrame(raf.current); };
  }, []);
  return (
    <>
      <div ref={dot}  className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#B8925A] z-[9999] pointer-events-none" style={{ transition: "none" }} />
      <div ref={ring} className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#B8925A]/50 z-[9998] pointer-events-none" style={{ transition: "transform 0.12s ease-out" }} />
    </>
  );
}

/* ════════════════════════════════════
   ABOUT PAGE
════════════════════════════════════ */
export default function About() {
  return (
    <main style={{ fontFamily: "'Jost', sans-serif", background: "#FDFAF6", cursor: "none" }}>
      <style>{CSS}</style>
      <Cursor />
      <HeroSection />
      <MarqueeStrip />
      <PhilosophyQuote />
      <BiographySection />
      <ClinicGallery />
      <CredentialsSection />
      <StatsSection />
      <MeetTeamSection />
      <WhySection />
      <CTASection />
    </main>
  );
}

/* ══════════════════════════════════════════════════════
   1. HERO — exact homepage structure:
      LEFT  → headline + copy + CTAs + trust tags
      RIGHT → large portrait + floating second photo + floating badge
══════════════════════════════════════════════════════ */
function HeroSection() {
  const [on, setOn] = useState(false);
  useEffect(() => { setTimeout(() => setOn(true), 80); }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg,#FDFAF6 0%,#F5EEE4 45%,#EDE5D6 100%)" }}
    >
      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "180px" }} />

      {/* Floating orbs — same as homepage */}
      {[
        { s: 500, t: "5%",  l: "55%", o: 0.16, d: "0s"  },
        { s: 300, t: "60%", l: "8%",  o: 0.10, d: "4s"  },
        { s: 220, t: "25%", l: "32%", o: 0.07, d: "8s"  },
      ].map((orb, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width: orb.s, height: orb.s, top: orb.t, left: orb.l,
            background: `radial-gradient(circle,rgba(184,146,90,${orb.o}) 0%,transparent 70%)`,
            animation: `floatOrb ${12 + i * 3}s ease-in-out infinite ${orb.d}` }} />
      ))}

      {/* Vertical side accent */}
      <div className="hidden xl:flex absolute left-7 top-1/2 -translate-y-1/2 flex-col items-center gap-3"
        style={{ animation: "fadeUp 1s ease 1s both" }}>
        <span className="w-px h-20 bg-gradient-to-b from-transparent to-[#B8925A]/60" />
        <span className="text-[8px] tracking-[0.35em] uppercase text-[#B8925A]/50 font-medium"
          style={{ writingMode: "vertical-rl" }}>Fremont · California</span>
        <span className="w-px h-20 bg-gradient-to-t from-transparent to-[#B8925A]/60" />
      </div>

      {/* ── MAIN GRID ── */}
      <div className="relative mx-auto max-w-7xl w-full px-5 md:px-10 xl:px-16 py-24 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">

        {/* ── LEFT — Copy (identical layout to homepage) ── */}
        <div className="relative z-10">

          {/* Eyebrow pill */}
          <div className={`inline-flex items-center gap-2.5 border border-[#B8925A]/40 bg-[#B8925A]/5 px-4 py-2 mb-8 transition-all duration-700 ${on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "100ms" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B7C5E] animate-pulse" />
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#B8925A] font-semibold">Board-Certified Psychiatrist · Fremont, CA</span>
          </div>

          {/* Headline */}
          <h1 className={`text-[52px] md:text-[68px] xl:text-[80px] text-[#2C1A0E] leading-[0.97] mb-6 transition-all duration-900 ${on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, transitionDelay: "220ms" }}>
            Meet<br />
            <em className="italic" style={{ color: "#B8925A" }}>Dr. Japsharan</em><br />
            <span style={{ fontWeight: 300, color: "#7A6556" }}>Gill, MD.</span>
          </h1>

          {/* Gold rule + sub */}
          <div className={`flex items-center gap-4 mb-6 transition-all duration-700 ${on ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "400ms" }}>
            <span className="w-12 h-px bg-[#B8925A]/50" />
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#7A6556] font-medium">Founder · Tri-Valley Clinic · 15+ Years Practice</span>
          </div>

          <p className={`text-[#7A6556] text-[17px] leading-relaxed max-w-[440px] font-light mb-10 transition-all duration-700 ${on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "480ms" }}>
            A physician who believes psychiatric care and a beautiful environment are not mutually exclusive — they are both essential to healing.
          </p>

          {/* CTAs — same as homepage */}
          <div className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 ${on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "580ms" }}>
            <a href="tel:5105984921"
              className="group flex items-center gap-3 bg-[#2C1A0E] text-[#F0E8DA] px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#B8925A] transition-all duration-400">
              <PhoneIcon /> Free Consultation
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </a>
            <a href="#biography"
              className="group flex items-center gap-3 border border-[#B8925A] text-[#B8925A] px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#B8925A] hover:text-[#FDFAF6] transition-all duration-300">
              Read Her Story ↓
            </a>
          </div>

          {/* Trust micro-row — same as homepage */}
          <div className={`flex flex-wrap items-center gap-6 transition-all duration-700 ${on ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "700ms" }}>
            {[
              { n: "15+",  l: "Yrs Experience"   },
              { n: "5★",   l: "Google Rated"     },
              { n: "Free", l: "Consultation"     },
              { n: "CA",   l: "Telehealth"       },
            ].map((t) => (
              <div key={t.l} className="flex items-center gap-2">
                <p className="text-[22px] text-[#B8925A]"
                  style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500 }}>{t.n}</p>
                <p className="text-[9px] tracking-[0.18em] uppercase text-[#7A6556]/70 leading-tight">{t.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — TWO OVERLAPPING PHOTOS (identical to homepage pattern) ── */}
        <div className={`relative flex justify-center lg:justify-end pr-0 lg:pr-6 pt-10 lg:pt-0 transition-all duration-1000 ${on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "300ms" }}>

          {/* PHOTO 1 — large primary portrait */}
          <div className="relative">
            {/* Shadow block */}
            <div className="absolute inset-0 translate-x-5 translate-y-5 bg-[#B8925A]/20 -z-10" />
            {/* Gold corner brackets */}
            {["-top-3 -left-3 border-t-2 border-l-2", "-top-3 -right-3 border-t-2 border-r-2",
              "-bottom-3 -left-3 border-b-2 border-l-2", "-bottom-3 -right-3 border-b-2 border-r-2"].map((c, i) => (
              <span key={i} className={`absolute w-10 h-10 border-[#B8925A] z-20 ${c}`} />
            ))}
            <div className="w-[300px] md:w-[370px] overflow-hidden" style={{ height: "490px" }}>
              <img
                src={P.drGillPortrait}
                alt="Dr. Japsharan Gill"
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
              />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2C1A0E]/70 to-transparent px-6 py-5 z-10">
                <p style={{ fontFamily: "'Cormorant Garamond',serif" }} className="text-[#C9A46A] text-xl font-light italic">Dr. Japsharan Gill, MD</p>
                <p className="text-[#E8D5BE]/60 text-[9px] tracking-[0.2em] uppercase mt-0.5">Board-Certified Psychiatrist</p>
              </div>
            </div>
          </div>

          {/* PHOTO 2 — floating offset card (identical to homepage) */}
          <div
            className="absolute -bottom-8 -right-2 md:-right-8 w-[155px] md:w-[185px] overflow-hidden border-[3px] border-[#FDFAF6] shadow-[0_20px_60px_rgba(44,26,14,0.25)]"
            style={{ height: "215px", animation: "floatBadge 5s ease-in-out infinite", zIndex: 15 }}
          >
            <img src={P.clinicInside} alt="Tri-Valley Clinic Interior"
              className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/65 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-[8px] tracking-[0.18em] uppercase text-[#E8D5BE]/80">Our Clinic</p>
              <p className="text-[10px] text-[#C9A46A]/80" style={{ fontFamily: "'Cormorant Garamond',serif" }}>Fremont, CA</p>
            </div>
          </div>

          {/* Floating "New Patients" badge (identical to homepage) */}
          <div
            className="absolute -top-6 left-4 md:-left-8 bg-[#FDFAF6] border border-[#E8D5BE] shadow-[0_8px_32px_rgba(44,26,14,0.10)] px-5 py-3.5"
            style={{ animation: "floatBadge 4s ease-in-out infinite 1.5s" }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#6B7C5E] animate-pulse" />
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#6B7C5E] font-semibold">Accepting Patients</span>
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond',serif" }} className="text-[#2C1A0E] text-lg font-normal">Free First Consultation</p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "fadeUp 1s ease 1.4s both" }}>
        <span className="text-[8px] tracking-[0.3em] uppercase text-[#B8925A]/40">Scroll</span>
        <div className="w-px h-12 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-[#B8925A]/70 to-transparent"
            style={{ animation: "scrollLine 2s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}

/* ══ 2. MARQUEE ══ */
function MarqueeStrip() {
  const items = ["Dr. Japsharan Gill", "Board-Certified Psychiatrist", "15+ Years Experience","Fremont, CA","Free Consultation","Next-Day Appointments","Telehealth · Statewide CA","GLP-1 Weight Loss","IV Hydration","TMS Therapy Launching Soon","Anxiety · Depression · ADHD","PTSD · Bipolar · OCD"];
  const rep = [...items, ...items];
  return (
    <div className="bg-[#2C1A0E] py-3.5 overflow-hidden">
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 40s linear infinite", width: "max-content" }}>
        {rep.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-[#E8D5BE]/60 text-[10px] tracking-[0.22em] uppercase font-medium px-3">
            {t}<Dm />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ══ 3. PHILOSOPHY QUOTE ══ */
function PhilosophyQuote() {
  const [ref, vis] = useReveal();
  return (
    <section className="py-24 px-5 md:px-10 bg-[#FDFAF6]">
      <div ref={ref} className="mx-auto max-w-5xl text-center">
        <div className={`flex items-center justify-center gap-4 mb-12 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-[#B8925A]/50" />
          <Dm size={9} />
          <span className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-[#B8925A]/50" />
        </div>
        <blockquote
          className={`text-4xl md:text-5xl lg:text-6xl text-[#2C1A0E] mb-8 transition-all duration-900 delay-100 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, lineHeight: 1.2 }}
        >
          "My clinic is really beautiful. I just want the website to be as beautiful as the clinic is."
        </blockquote>
        <p className={`text-[10px] tracking-[0.28em] uppercase text-[#B8925A] font-semibold transition-all duration-700 delay-300 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          — Dr. Japsharan Gill · Founder, Tri-Valley Clinic
        </p>
        <div className={`flex items-center justify-center gap-4 mt-12 transition-all duration-700 delay-400 ${vis ? "opacity-100" : "opacity-0"}`}>
          <span className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-[#B8925A]/50" />
          <Dm size={9} />
          <span className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-[#B8925A]/50" />
        </div>
      </div>
    </section>
  );
}

/* ══ 4. BIOGRAPHY — sticky TWO-photo left + narrative right ══ */
function BiographySection() {
  const [ref, vis] = useReveal();
  return (
    <section id="biography" className="py-24 px-5 md:px-10 bg-[#F5EEE4]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* LEFT — sticky with TWO photos */}
          <div ref={ref} className={`relative transition-all duration-1000 ${vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="sticky top-28 space-y-4">

              {/* PRIMARY photo */}
              <div className="relative">
                <div className="absolute top-5 -left-5 right-5 bottom-0 bg-[#E8D5BE]/50 -z-10" />
                <div className="absolute top-0 left-0 w-[3px] h-24 bg-[#B8925A]" />
                <div className="overflow-hidden" style={{ height: "400px" }}>
                  <img src={P.drGillInside} alt="Dr. Gill in clinic"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.04]" />
                </div>
                <div className="bg-[#2C1A0E] px-5 py-4">
                  <p style={{ fontFamily: "'Cormorant Garamond',serif" }} className="text-[#C9A46A] text-lg font-light italic">Dr. Japsharan Gill, MD</p>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#8A7E78] mt-0.5">Board-Certified Psychiatrist · Fremont, CA</p>
                </div>
              </div>

              {/* SECONDARY — second photo below, offset right */}
              <div className="relative ml-8 overflow-hidden border border-[#E8D5BE]" style={{ height: "210px" }}>
                <img src={P.consulting2} alt="In session with Dr. Gill"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.05]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/55 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#E8D5BE]/80">Personalized Patient Consultations</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Biography narrative */}
          <div className={`transition-all duration-1000 delay-200 ${vis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#B8925A]" />
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#B8925A] font-semibold">Her Story</span>
            </div>
            <h2 className="text-5xl md:text-6xl text-[#2C1A0E] mb-10"
              style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, lineHeight: 1.1 }}>
              A Physician Built<br />on <em className="italic text-[#B8925A]">Purpose</em>
            </h2>

            <div className="space-y-5 text-[#7A6556] text-[15px] leading-[1.95] font-light">
              <p>
                Dr. Japsharan Gill founded Tri-Valley Clinic with a vision that most psychiatrists never dare to pursue: a practice where the environment itself contributes to healing. Where the walls, the light, the textures, and the stillness of the space say to every patient —&nbsp;
                <em className="text-[#3D2B1F] not-italic font-medium">you matter here.</em>
              </p>
              <p>
                A board-certified psychiatrist with over 15 years of experience, Dr. Gill has dedicated her career to adult mental health — treating anxiety, depression, ADHD, PTSD, bipolar disorder, OCD, insomnia, and medication management with equal parts clinical precision and human warmth.
              </p>
              <p>
                Her philosophy is simple: the best psychiatric outcomes happen when patients feel truly seen — not processed, not rushed. This is why every appointment at Tri-Valley Clinic is personal, unhurried, and centered entirely on you.
              </p>
              <p>
                Alongside her core psychiatric expertise, Dr. Gill has expanded the clinic to include physician-supervised medical weight loss with GLP-1 medications, premium IV hydration therapy, and the forthcoming addition of TMS (Transcranial Magnetic Stimulation) — a rare and comprehensive wellness experience under one roof.
              </p>
              <p>
                Dr. Gill also offers telehealth psychiatric services to patients across all of California, extending her care to those who cannot attend in-person appointments at the Fremont clinic.
              </p>
            </div>

            {/* Pull quote */}
            <div className="my-9 border-l-2 border-[#B8925A] pl-6">
              <p style={{ fontFamily: "'Cormorant Garamond',serif" }} className="text-2xl text-[#2C1A0E] font-light italic leading-relaxed">
                "The best outcomes happen when patients feel truly seen — not processed, not rushed. Seen."
              </p>
            </div>

            <div className="space-y-5 text-[#7A6556] text-[15px] leading-[1.95] font-light">
              <p>
                Dr. Gill offers a free 15-minute consultation to all new patients — not as a sales call, but as a genuine conversation about whether Tri-Valley Clinic is the right fit for your needs. Once insurance is verified, she is available for next-day appointments, both in-person and via secure telehealth.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="tel:5105984921"
                className="group flex items-center gap-3 bg-[#B8925A] text-[#FDFAF6] px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#2C1A0E] transition-colors duration-300">
                <PhoneIcon /> Book a Consultation
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a href="/psychiatric"
                className="flex items-center border border-[#B8925A]/50 text-[#B8925A] px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:border-[#B8925A] transition-colors duration-300">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══ 5. CLINIC GALLERY ══ */
function ClinicGallery() {
  const [ref, vis] = useReveal();
  const photos = [
    { src: P.clinicInside,   label: "Reception & Waiting Area",   span: "lg:col-span-2 lg:row-span-2" },
    { src: P.office,         label: "Front Office",                span: "" },
    { src: P.emptyTable,     label: "Private Consultation Room",   span: "" },
    { src: P.consulting1,    label: "In Session with Dr. Gill",    span: "" },
    { src: P.magazines,      label: "Comfortable Waiting Lounge",  span: "" },
  ];
  return (
    <section className="py-20 px-5 md:px-10 bg-[#FDFAF6]">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-12 h-px bg-[#B8925A]/50" /><Dm size={7} /><span className="w-12 h-px bg-[#B8925A]/50" />
          </div>
          <h2 className="text-5xl md:text-6xl text-[#2C1A0E]"
            style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300 }}>
            A Space Designed for <em className="italic text-[#B8925A]">Healing</em>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-3">
          {photos.map((p, i) => (
            <div key={p.label}
              className={`relative overflow-hidden group cursor-default ${p.span} ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transition: "all 700ms ease", transitionDelay: `${i * 100}ms` }}>
              <img src={p.src} alt={p.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#B8925A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#E8D5BE] font-medium">{p.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ 6. CREDENTIALS — dark section ══ */
function CredentialsSection() {
  const [ref, vis] = useReveal();
  const cols = [
    { cat: "Certification",   items: ["Board-Certified — American Board of Psychiatry & Neurology","Medical Degree — Ross University School of Medicine","Licensed Physician — State of California","DEA Licensed — Controlled Substance Prescriptions"] },
    { cat: "Specialties",     items: ["Adult Psychiatry & Psychopharmacology","Medication Management & Evaluations","Medical Weight Loss — GLP-1 / Semaglutide","IV Hydration & Wellness Therapy","TMS Therapy (Launching Soon)"] },
    { cat: "Conditions",      items: ["Anxiety Disorders (GAD, Social, Panic)","Major Depressive Disorder","ADHD — Adult Diagnosis & Management","PTSD & Trauma-Related Disorders","Bipolar I & II · OCD · Insomnia · Substance Abuse"] },
    { cat: "Telehealth",      items: ["HIPAA-Compliant Secure Video Visits","Available Statewide — All of California","Same-Day & Next-Day Scheduling","Prescription Management Included"] },
  ];
  return (
    <section className="py-24 px-5 md:px-10" style={{ background: "linear-gradient(160deg,#2C1A0E 0%,#3D2B1F 100%)" }}>
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className="text-center mb-14">
          <div className={`flex items-center justify-center gap-3 mb-5 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="w-12 h-px bg-[#B8925A]/50" /><Dm size={7} /><span className="w-12 h-px bg-[#B8925A]/50" />
          </div>
          <h2 className={`text-5xl md:text-6xl text-[#F0E8DA] transition-all duration-700 delay-100 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300 }}>
            Expertise You Can <em className="italic text-[#C9A46A]">Trust</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cols.map((c, i) => (
            <div key={c.cat}
              className={`border border-[#E8D5BE]/12 p-8 bg-[#F5EEE4]/5 hover:bg-[#F5EEE4]/10 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 130}ms`, transitionDuration: "700ms" }}>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-5 h-px bg-[#B8925A]" />
                <p className="text-[10px] tracking-[0.22em] uppercase text-[#B8925A] font-semibold">{c.cat}</p>
              </div>
              <ul className="space-y-3.5">
                {c.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#A89880] font-light leading-relaxed">
                    <span className="flex-shrink-0 mt-2 w-1 h-1 rounded-full bg-[#B8925A]/60" />{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ 7. STATS — animated counters ══ */
function StatsSection() {
  const [ref, vis] = useReveal();
  const stats = [
    { to: 15,  s: "+", label: "Years of Practice"         },
    { to: 5,   s: "",  label: "Specialty Services"        },
    { to: 100, s: "%", label: "Physician-Supervised Care" },
    { to: 58,  s: "+", label: "CA Cities via Telehealth"  },
  ];
  return (
    <section ref={ref} className="py-16 px-5 md:px-10 bg-[#F0E8DA] border-y border-[#E8D5BE]">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-10 md:divide-x md:divide-[#E8D5BE]">
        {stats.map((s, i) => (
          <div key={s.label}
            className={`text-center transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${i * 100}ms` }}>
            <p className="text-6xl md:text-7xl text-[#B8925A] mb-2 leading-none"
              style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300 }}>
              {vis ? <Counter to={s.to} suffix={s.s} /> : `0${s.s}`}
            </p>
            <p className="text-[9px] tracking-[0.22em] uppercase text-[#7A6556] font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══ 8. MEET THE TEAM ══ */
function MeetTeamSection() {
  const [ref, vis] = useReveal();
  return (
    <section className="py-24 px-5 md:px-10 bg-[#F5EEE4]">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`text-center mb-14 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-12 h-px bg-[#B8925A]/50" /><Dm size={7} /><span className="w-12 h-px bg-[#B8925A]/50" />
          </div>
          <h2 className="text-5xl md:text-6xl text-[#2C1A0E]"
            style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300 }}>
            Meet the <em className="italic text-[#B8925A]">Team</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <DoctorCard
            img={P.drGillHead} name="Dr. Japsharan Gill" title="MD · Founder & Lead Psychiatrist"
            bio="Board-certified psychiatrist with 15+ years of experience in adult psychiatry, medication management, GLP-1 weight loss, IV hydration, and comprehensive psychiatric evaluations."
            delay={0} vis={vis}
          />
          <DoctorCard
            img={P.drGAp} name="Associate Physician" title="MD · Staff Physician"
            bio="Our dedicated staff physician works alongside Dr. Gill to provide exceptional, patient-centered psychiatric and wellness care at Tri-Valley Clinic."
            delay={150} vis={vis}
          />
        </div>
      </div>
    </section>
  );
}

function DoctorCard({ img, name, title, bio, delay, vis }) {
  return (
    <div className={`group relative bg-[#FDFAF6] border border-[#E8D5BE] overflow-hidden hover:shadow-[0_20px_60px_rgba(184,146,90,0.15)] hover:-translate-y-1 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: "700ms" }}>
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B8925A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      <div className="flex flex-col sm:flex-row gap-0">
        <div className="relative w-full sm:w-[180px] flex-shrink-0 overflow-hidden" style={{ height: "230px" }}>
          <img src={img} alt={name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="flex-1 p-7 flex flex-col justify-center">
          <h3 className="text-2xl text-[#2C1A0E] mb-1" style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500 }}>{name}</h3>
          <p className="text-[10px] tracking-[0.18em] uppercase text-[#B8925A] font-semibold mb-3">{title}</p>
          <p className="text-[#7A6556] text-sm leading-relaxed font-light">{bio}</p>
        </div>
      </div>
    </div>
  );
}

/* ══ 9. WHY DR. GILL ══ */
function WhySection() {
  const [ref, vis] = useReveal();
  const reasons = [
    { n: "01", title: "She Listens First",       text: "Every appointment begins with Dr. Gill listening — fully, without interruption. Diagnosis comes after understanding." },
    { n: "02", title: "No Double-Booking",        text: "Your time is yours. We never overbook or rush. Personalized care is our practice, not just our promise." },
    { n: "03", title: "Free Consultation",        text: "A complimentary 15-minute call to discuss your needs before committing. No pressure, no obligation." },
    { n: "04", title: "Beautiful Environment",    text: "The clinic was designed to feel as premium and calming as the care within it — deliberately unlike any typical office." },
    { n: "05", title: "Comprehensive Services",   text: "Psychiatry, weight loss, IV hydration, and TMS — all supervised personally by Dr. Gill under one roof." },
    { n: "06", title: "Statewide Telehealth",     text: "Available to all California residents via secure video — same expert care, anywhere in the state." },
  ];
  return (
    <section className="py-24 px-5 md:px-10 bg-[#FDFAF6]">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className="text-center mb-14">
          <div className={`flex items-center justify-center gap-3 mb-5 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="w-12 h-px bg-[#B8925A]/50" /><Dm size={7} /><span className="w-12 h-px bg-[#B8925A]/50" />
          </div>
          <h2 className={`text-5xl md:text-6xl text-[#2C1A0E] transition-all duration-700 delay-100 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300 }}>
            The Care That Sets Us <em className="italic text-[#B8925A]">Apart</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div key={r.n}
              className={`group relative border border-[#E8D5BE] bg-[#F5EEE4] p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(184,146,90,0.12)] hover:border-[#B8925A]/50 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms`, transitionDuration: "700ms" }}>
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#B8925A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="text-5xl text-[#B8925A]/15 font-light leading-none block mb-4 group-hover:text-[#B8925A]/25 transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond',serif" }}>{r.n}</span>
              <h3 className="text-2xl text-[#2C1A0E] mb-3" style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500 }}>{r.title}</h3>
              <p className="text-[#7A6556] text-sm leading-relaxed font-light">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ 10. CTA ══ */
function CTASection() {
  const [ref, vis] = useReveal();
  return (
    <section className="py-28 px-5 md:px-10 relative overflow-hidden text-center"
      style={{ background: "linear-gradient(160deg,#FDFAF6 0%,#F5EEE4 50%,#EDE5D6 100%)" }}>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(184,146,90,0.16) 0%,transparent 70%)" }} />
      <div ref={ref} className="relative mx-auto max-w-3xl">
        {/* Portrait with online dot */}
        <div className={`flex justify-center mb-8 transition-all duration-700 ${vis ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#B8925A]/60 shadow-[0_8px_32px_rgba(184,146,90,0.2)]">
              <img src={P.drGillPortrait} alt="Dr. Gill" className="w-full h-full object-cover object-top" />
            </div>
            <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#6B7C5E] border-2 border-[#F5EEE4]" />
          </div>
        </div>
        <div className={`flex items-center justify-center gap-3 mb-7 transition-all duration-700 delay-100 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="w-16 h-px bg-[#B8925A]/40" /><Dm /><span className="w-16 h-px bg-[#B8925A]/40" />
        </div>
        <h2 className={`text-5xl md:text-[68px] text-[#2C1A0E] mb-6 transition-all duration-700 delay-150 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, lineHeight: 1.05 }}>
          Ready to Meet<br /><em className="italic text-[#B8925A]">Dr. Gill?</em>
        </h2>
        <p className={`text-[#7A6556] text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Your first consultation is completely free. A 15-minute call with Dr. Gill — no pressure, no commitment. Just a genuine conversation about your wellness journey.
        </p>
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 transition-all duration-700 delay-300 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a href="tel:5105984921"
            className="group flex items-center gap-3 bg-[#2C1A0E] text-[#F0E8DA] px-10 py-[18px] text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#B8925A] transition-colors duration-400">
            <PhoneIcon /> Call (510) 598-4921
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </a>
          <a href="/contact"
            className="flex items-center gap-2 border border-[#B8925A]/50 text-[#B8925A] px-10 py-[18px] text-[11px] font-bold tracking-[0.2em] uppercase hover:border-[#B8925A] hover:bg-[#B8925A]/5 transition-all duration-300">
            Send a Message
          </a>
        </div>
        <p className={`text-[10px] tracking-[0.2em] uppercase text-[#7A6556]/45 transition-all duration-700 delay-400 ${vis ? "opacity-100" : "opacity-0"}`}>
          Mon – Fri · 9:30 AM – 5:30 PM · 680 Mowry Ave, Fremont, CA · Telehealth Statewide CA
        </p>
      </div>
    </section>
  );
}

/* ══ ICONS ══ */
function PhoneIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 2.93h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>;
}
function Dm({ size = 8 }) {
  return <svg width={size} height={size} viewBox="0 0 10 10" fill="#B8925A"><polygon points="5,0 10,5 5,10 0,5"/></svg>;
}

/* ══ CSS ══ */
const CSS = `
  * { cursor: none !important; }
  @keyframes fadeUp     { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
  @keyframes floatOrb   { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(22px,-34px) scale(1.06)} 66%{transform:translate(-16px,20px) scale(0.94)} }
  @keyframes floatBadge { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  @keyframes marquee    { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @keyframes scrollLine { 0%{transform:translateY(-100%)} 100%{transform:translateY(200%)} }
`;