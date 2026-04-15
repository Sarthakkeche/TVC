import { useEffect, useRef, useState } from "react";

const P = {
  drGillPortrait : "/assets/Gill_Japsharan.jpg",
  drGillInside   : "/assets/dr J gill-inside.jpg",
  clinicInside   : "/assets/inside clinic1.jpg",
  clinicInterior : "/assets/inetrioir clinic.jpg",
  consulting1    : "/assets/counsalting.jpg",
  consulting2    : "/assets/Counsalting 2.jpg",
  office         : "/assets/office.jpg",
  receptionist   : "/assets/reciptent.jpg",
};

function useReveal(t = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.unobserve(el); } },
      { threshold: t, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [t]);
  return [ref, vis];
}

function CustomCursor() {
  const dot = useRef(null), ring = useRef(null), pos = useRef({ x: 0, y: 0 }), raf = useRef(null);
  useEffect(() => {
    const mv = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    const tick = () => {
      if (dot.current)  dot.current.style.transform  = `translate(${pos.current.x-4}px,${pos.current.y-4}px)`;
      if (ring.current) ring.current.style.transform = `translate(${pos.current.x-16}px,${pos.current.y-16}px)`;
      raf.current = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", mv);
    raf.current = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", mv); cancelAnimationFrame(raf.current); };
  }, []);
  return (
    <>
      <div ref={dot}  className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#B8925A] z-[9999] pointer-events-none" style={{transition:"none"}} />
      <div ref={ring} className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#B8925A]/50 z-[9998] pointer-events-none" style={{transition:"transform 0.12s ease-out"}} />
    </>
  );
}

/* ══════════════════════════════════
   FINANCING PAGE
══════════════════════════════════ */
export default function Financing() {
  return (
    <main style={{ fontFamily: "'Jost', sans-serif", background: "#FDFAF6", cursor: "none" }}>
      <style>{CSS}</style>
      <CustomCursor />
      <HeroSection />
      <MarqueeStrip />
      <BenefitsSection />
      <CherryFormSection />
      <HowItWorksSection />
      <CompareSection />
      <FAQSection />
      <InsuranceBridge />
      <CTASection />
    </main>
  );
}

/* ══════ 1. HERO ══════ */
function HeroSection() {
  const [on, setOn] = useState(false);
  useEffect(() => { setTimeout(() => setOn(true), 80); }, []);

  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden"
      style={{ background: "linear-gradient(140deg,#2C1A0E 0%,#3D2B1F 55%,#4E3525 100%)" }}>

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize:"180px" }} />

      {/* BG clinic photo — right half */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[52%] overflow-hidden">
        <img src={P.clinicInterior} alt="Tri-Valley Clinic"
          className="w-full h-full object-cover object-center opacity-28"
          style={{ filter:"saturate(0.65)" }} />
        <div className="absolute inset-0" style={{ background:"linear-gradient(to right,#2C1A0E 0%,#2C1A0E 15%,transparent 55%)" }} />
        <div className="absolute inset-0" style={{ background:"linear-gradient(to top,#2C1A0E 0%,transparent 55%)" }} />
      </div>

      {/* Orbs */}
      {[{t:"12%",l:"52%",s:420,d:"0s",o:0.13},{t:"60%",l:"8%",s:280,d:"5s",o:0.09}].map((o,i)=>(
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{width:o.s,height:o.s,top:o.t,left:o.l,background:`radial-gradient(circle,rgba(184,146,90,${o.o}) 0%,transparent 70%)`,animation:`floatOrb ${11+i*4}s ease-in-out infinite ${o.d}`}} />
      ))}

      {/* Vertical side text */}
      <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3"
        style={{writingMode:"vertical-rl",animation:"fadeUp 1s ease 0.8s both"}}>
        <span className="w-px h-16 bg-[#B8925A]/40" />
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#B8925A]/50">Care Without Compromise</span>
        <span className="w-px h-16 bg-[#B8925A]/40" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl w-full px-5 md:px-10 xl:px-16 pb-20 pt-36 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">

        {/* LEFT */}
        <div>
          <div className={`inline-flex items-center gap-2.5 border border-[#B8925A]/40 bg-[#B8925A]/8 px-4 py-2 mb-8 transition-all duration-700 ${on?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}
            style={{transitionDelay:"100ms"}}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8925A] animate-pulse" />
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#B8925A] font-semibold">Powered by Cherry · 0% Interest Available</span>
          </div>

          <h1 className={`text-[50px] md:text-[66px] xl:text-[78px] text-[#F0E8DA] leading-[0.98] mb-6 transition-all duration-900 ${on?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}
            style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300,transitionDelay:"200ms"}}>
            Care Without<br />
            <em className="italic text-[#C9A46A]">Compromise.</em>
          </h1>

          <div className={`flex items-center gap-4 mb-6 transition-all duration-700 ${on?"opacity-100":"opacity-0"}`} style={{transitionDelay:"370ms"}}>
            <span className="w-10 h-px bg-[#B8925A]/60" />
            <span className="text-[10px] tracking-[0.22em] uppercase text-[#A89880] font-light">Flexible Payment Plans for Every Patient</span>
          </div>

          <p className={`text-[#A89880] text-lg leading-relaxed max-w-lg font-light mb-10 transition-all duration-700 ${on?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}
            style={{transitionDelay:"440ms"}}>
            No insurance? High deductible? Out-of-pocket costs? Cherry Financing lets you split the cost of your care into manageable monthly payments — with 0% interest options, instant approval, and no hard credit check required.
          </p>

          <div className={`flex flex-wrap gap-4 mb-10 transition-all duration-700 ${on?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}
            style={{transitionDelay:"540ms"}}>
            <a href="#apply"
              className="group flex items-center gap-3 bg-[#B8925A] text-[#FDFAF6] px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#C9A46A] transition-colors duration-300">
              Apply Now — It's Free
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </a>
            <a href="tel:5105984921"
              className="flex items-center gap-3 border border-[#B8925A]/50 text-[#C9A46A] px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:border-[#B8925A] hover:bg-[#B8925A]/10 transition-all duration-300">
              <PhoneIcon /> Call Us
            </a>
          </div>

          {/* Trust badges */}
          <div className={`flex flex-wrap gap-3 transition-all duration-700 ${on?"opacity-100":"opacity-0"}`} style={{transitionDelay:"650ms"}}>
            {["0% Interest Plans","60-Second Approval","No Hard Credit Check","All Services Covered"].map((t)=>(
              <span key={t} className="text-[9px] tracking-[0.18em] uppercase border border-[#B8925A]/25 text-[#C9A46A]/60 px-3 py-1.5">{t}</span>
            ))}
          </div>
        </div>

        {/* RIGHT — stat cards */}
        <div className={`hidden lg:flex flex-col gap-4 items-end transition-all duration-1000 ${on?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`} style={{transitionDelay:"380ms"}}>
          {[
            {val:"0%",  lab:"Interest Available",     sub:"On qualifying payment plans"     },
            {val:"60s", lab:"Approval Time",           sub:"Fast, easy online application"  },
            {val:"$0",  lab:"Application Fee",         sub:"Completely free to apply"       },
            {val:"All", lab:"Services Covered",        sub:"Psychiatry · Weight Loss · IV"  },
          ].map((c,i)=>(
            <div key={c.lab} className="bg-[#FDFAF6]/8 border border-[#E8D5BE]/15 backdrop-blur-sm px-6 py-5 flex items-center gap-5 w-full max-w-xs"
              style={{animation:`fadeUp 0.8s ease ${0.5+i*0.12}s both`}}>
              <p className="text-3xl text-[#C9A46A] flex-shrink-0"
                style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300}}>{c.val}</p>
              <div>
                <p className="text-[#F0E8DA] text-sm font-medium">{c.lab}</p>
                <p className="text-[#A89880] text-xs font-light mt-0.5">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{background:"linear-gradient(to top,#FDFAF6,transparent)"}} />
      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{animation:"fadeUp 1s ease 1.2s both"}}>
        <span className="text-[8px] tracking-[0.3em] uppercase text-[#B8925A]/40">Scroll</span>
        <div className="w-px h-12 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-[#B8925A]/70 to-transparent"
            style={{animation:"scrollLine 2s ease-in-out infinite"}} />
        </div>
      </div>
    </section>
  );
}

/* ══════ 2. MARQUEE ══════ */
function MarqueeStrip() {
  const items = ["0% Interest Available","60-Second Approval","No Hard Credit Check","Instant Decision","All Services Covered","Flexible Monthly Payments","Apply Online in Minutes","No Prepayment Penalty","Powered by Cherry","Safe & Secure"];
  const rep = [...items,...items];
  return (
    <div className="bg-[#2C1A0E] py-3.5 overflow-hidden">
      <div className="flex whitespace-nowrap" style={{animation:"marquee 36s linear infinite",width:"max-content"}}>
        {rep.map((t,i)=>(
          <span key={i} className="inline-flex items-center gap-3 text-[#E8D5BE]/60 text-[10px] tracking-[0.22em] uppercase font-medium px-3">
            {t}<DiamondSvg />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ══════ 3. BENEFITS ══════ */
function BenefitsSection() {
  const [ref, vis] = useReveal();
  const benefits = [
    {icon:<ZeroIcon />,   title:"0% Interest",           sub:"On qualifying plans",       desc:"Select plans offer 0% promotional interest — making it possible to pay for your care over time without any added cost." },
    {icon:<ClockIcon />,  title:"60-Second Approval",    sub:"Fast & simple",             desc:"The Cherry application takes under a minute to complete and delivers an instant decision — no waiting, no back-and-forth." },
    {icon:<LockIcon />,   title:"No Hard Credit Check",  sub:"Safe to apply",             desc:"Applying through Cherry uses a soft credit pull only, so it won't affect your credit score. Apply with confidence." },
    {icon:<StarIcon />,   title:"Flexible Plans",        sub:"Your amount, your schedule", desc:"Choose a payment amount and schedule that works for your budget. Plans range from 3 to 24 months depending on your needs." },
    {icon:<CardIcon />,   title:"All Services Covered",  sub:"One plan for everything",   desc:"Use Cherry to cover psychiatric care, medical weight loss, IV hydration therapy, and TMS — everything under one roof." },
    {icon:<ShieldIcon />, title:"100% Secure",           sub:"Bank-level encryption",     desc:"Cherry's platform uses bank-level security to protect your information throughout the entire application process." },
  ];
  return (
    <section className="py-24 px-5 md:px-10 bg-[#FDFAF6]">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className="text-center mb-14">
          <div className={`flex items-center justify-center gap-3 mb-5 transition-all duration-700 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>
            <span className="w-12 h-px bg-[#B8925A]/50" /><DiamondSvg size={7} /><span className="w-12 h-px bg-[#B8925A]/50" />
          </div>
          <h2 className={`text-5xl md:text-6xl text-[#2C1A0E] mb-5 transition-all duration-700 delay-100 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}
            style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300}}>
            Why Patients Choose <em className="italic text-[#B8925A]">Cherry</em>
          </h2>
          <p className={`text-[#7A6556] text-lg font-light max-w-xl mx-auto transition-all duration-700 delay-200 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
            Cherry makes paying for healthcare simple, transparent, and stress-free — so you can focus entirely on feeling better.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b,i)=>(
            <div key={b.title}
              className={`group relative bg-[#F5EEE4] border border-[#E8D5BE] p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_16px_50px_rgba(184,146,90,0.13)] hover:border-[#B8925A]/50 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`}
              style={{transitionDelay:`${i*100}ms`,transitionDuration:"700ms"}}>
              {/* top gold sweep */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#B8925A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="w-12 h-12 border border-[#B8925A]/30 flex items-center justify-center text-[#B8925A] mb-5 group-hover:bg-[#B8925A] group-hover:text-[#FDFAF6] group-hover:border-[#B8925A] transition-all duration-300">
                {b.icon}
              </div>
              <h3 className="text-xl text-[#2C1A0E] mb-0.5" style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:500}}>{b.title}</h3>
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#B8925A] font-semibold mb-3">{b.sub}</p>
              <p className="text-[#7A6556] text-sm leading-relaxed font-light">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════ 4. CHERRY FORM EMBED ══════ */
function CherryFormSection() {
  const [ref, vis] = useReveal();
  return (
    <section id="apply" className="py-24 px-5 md:px-10"
      style={{background:"linear-gradient(160deg,#2C1A0E 0%,#3D2B1F 100%)"}}>
      {/* Subtle cross pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B8925A'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/svg%3E")`}} />

      <div className="mx-auto max-w-7xl relative">

        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <div className={`flex items-center justify-center gap-3 mb-5 transition-all duration-700 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>
            <span className="w-12 h-px bg-[#B8925A]/50" /><DiamondSvg size={7} /><span className="w-12 h-px bg-[#B8925A]/50" />
          </div>
          <h2 className={`text-5xl md:text-6xl text-[#F0E8DA] mb-4 transition-all duration-700 delay-100 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}
            style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300}}>
            Apply for <em className="italic text-[#C9A46A]">Cherry Financing</em>
          </h2>
          <p className={`text-[#A89880] text-base font-light max-w-lg mx-auto transition-all duration-700 delay-200 ${vis?"opacity-100":"opacity-0"}`}>
            Complete the form below. It takes under 60 seconds and won't affect your credit score.
          </p>
        </div>

        {/* Two-column: form left, details right */}
        <div className={`grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 transition-all duration-700 delay-300 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>

          {/* Cherry embed container */}
          <div className="relative border border-[#E8D5BE]/15 bg-[#F5EEE4]/5">
            {/* Gold top accent */}
            <div className="h-[3px] bg-gradient-to-r from-transparent via-[#B8925A] to-transparent" />

            <div className="p-8 md:p-10">
              {/* Cherry widget placeholder — replace with your actual Cherry embed script/widget */}
              <div id="cherry-checkout-button" className="cherry-financing-widget">
                {/* ════════════════════════════════════════════════════════
                    PASTE YOUR CHERRY EMBED CODE HERE
                    Example Cherry embed:
                    <script src="https://cdn.withcherry.com/widget/cherry.js"
                      data-merchant-id="YOUR_MERCHANT_ID"
                      data-amount="500"
                      data-terms="3,6,12,18,24"
                      data-prequal="true">
                    </script>
                    OR use their hosted checkout button:
                    <a href="https://withcherry.com/..." class="cherry-btn">Apply with Cherry</a>
                    ════════════════════════════════════════════════════════ */}

                {/* Visual placeholder — shown until Cherry widget loads */}
                <div className="flex flex-col items-center justify-center text-center py-16 border border-dashed border-[#B8925A]/30 rounded-sm">
                  <div className="w-16 h-16 border border-[#B8925A]/30 flex items-center justify-center text-[#B8925A] mb-5">
                    <CardIcon size={28} />
                  </div>
                  <p className="text-[#C9A46A] text-xl mb-2" style={{fontFamily:"'Cormorant Garamond',serif"}}>Cherry Financing Widget</p>
                  <p className="text-[#7A6556] text-sm font-light mb-6 max-w-xs">
                    Insert your Cherry embed code or checkout button in the <code className="text-[#B8925A] text-xs bg-[#B8925A]/10 px-1.5 py-0.5 rounded">#cherry-checkout-button</code> div above.
                  </p>
                  <a href="https://withcherry.com/patients/" target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-3 bg-[#B8925A] text-[#FDFAF6] px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#C9A46A] transition-colors duration-300">
                    Apply at Cherry.com
                    <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </a>
                  <p className="text-[#7A6556]/50 text-[10px] mt-4 tracking-wider uppercase">No hard credit check · Instant decision</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar — what to expect */}
          <div className="flex flex-col gap-5">

            {/* Application steps */}
            <div className="border border-[#E8D5BE]/15 bg-[#F5EEE4]/5 p-7">
              <h3 className="text-lg text-[#F0E8DA] mb-5" style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:400}}>
                What to Expect
              </h3>
              <div className="space-y-5">
                {[
                  {n:"1",t:"Enter Your Details",  d:"Basic personal & income info — takes about 60 seconds"},
                  {n:"2",t:"Instant Decision",     d:"Cherry gives you an approval decision immediately"},
                  {n:"3",t:"Choose Your Plan",     d:"Select your monthly payment amount and term"},
                  {n:"4",t:"Use at Checkout",      d:"Show your Cherry approval at Tri-Valley Clinic"},
                ].map((s)=>(
                  <div key={s.n} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full border border-[#B8925A]/40 flex items-center justify-center text-[10px] text-[#B8925A] font-semibold flex-shrink-0">{s.n}</span>
                    <div>
                      <p className="text-[#F0E8DA] text-sm font-medium mb-0.5">{s.t}</p>
                      <p className="text-[#7A6556] text-xs font-light leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security note */}
            <div className="border border-[#6B7C5E]/30 bg-[#263320]/50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8C59A]" />
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#A8C59A] font-semibold">Security</p>
              </div>
              <p className="text-[#A8B89E] text-sm font-light leading-relaxed">
                Cherry uses bank-level 256-bit SSL encryption. Your personal and financial data is never shared with Tri-Valley Clinic.
              </p>
            </div>

            {/* Phone alt */}
            <div className="border border-[#E8D5BE]/15 bg-[#F5EEE4]/5 p-6 text-center">
              <p className="text-[#A89880] text-sm font-light mb-4">Prefer to apply by phone?</p>
              <a href="tel:5105984921"
                className="flex items-center justify-center gap-2 border border-[#B8925A]/40 text-[#C9A46A] px-5 py-3 text-[10px] tracking-[0.2em] uppercase hover:border-[#B8925A] hover:bg-[#B8925A]/10 transition-all duration-300">
                <PhoneIcon /> (510) 598-4921
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════ 5. HOW IT WORKS ══════ */
function HowItWorksSection() {
  const [ref, vis] = useReveal();
  const steps = [
    {n:"01",icon:<FormIcon />,   title:"Apply Online or Call",       desc:"Complete Cherry's 60-second application online — or call our front desk and we'll walk you through it over the phone."},
    {n:"02",icon:<CheckIcon />,  title:"Get Instant Approval",       desc:"Cherry delivers an instant decision. No waiting days for a call-back. Know your options in under a minute."},
    {n:"03",icon:<PlanIcon />,   title:"Choose Your Payment Plan",   desc:"Select the monthly payment and term that fits your budget. Plans from 3 to 24 months with 0% interest options."},
    {n:"04",icon:<CalIcon />,    title:"Book Your Appointment",      desc:"Bring your Cherry approval to Tri-Valley Clinic. We'll apply it to your service and get you scheduled right away."},
  ];
  return (
    <section className="py-24 px-5 md:px-10 bg-[#F5EEE4]">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className="text-center mb-16">
          <div className={`flex items-center justify-center gap-3 mb-5 transition-all duration-700 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>
            <span className="w-12 h-px bg-[#B8925A]/50" /><DiamondSvg size={7} /><span className="w-12 h-px bg-[#B8925A]/50" />
          </div>
          <h2 className={`text-5xl md:text-6xl text-[#2C1A0E] transition-all duration-700 delay-100 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}
            style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300}}>
            How It <em className="italic text-[#B8925A]">Works</em>
          </h2>
          <p className={`text-[#7A6556] text-base font-light mt-4 max-w-md mx-auto transition-all duration-700 delay-200 ${vis?"opacity-100":"opacity-0"}`}>
            Four simple steps — from application to appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#B8925A]/20 via-[#B8925A]/50 to-[#B8925A]/20" />

          {steps.map((s,i)=>(
            <div key={s.n}
              className={`group relative text-center transition-all duration-700 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`}
              style={{transitionDelay:`${i*140}ms`,transitionDuration:"700ms"}}>

              {/* Number+icon circle */}
              <div className="relative inline-flex items-center justify-center w-[110px] h-[110px] mb-7 mx-auto">
                <div className="absolute inset-0 rounded-full border-2 border-[#B8925A]/25 group-hover:border-[#B8925A] transition-colors duration-500" />
                <div className="absolute inset-[6px] rounded-full bg-[#B8925A]/6 group-hover:bg-[#B8925A]/12 transition-all duration-500" />
                <div className="relative text-center">
                  <div className="text-[#B8925A] flex justify-center mb-1">{s.icon}</div>
                  <span className="text-[9px] tracking-[0.22em] text-[#B8925A]/50 font-bold uppercase">{s.n}</span>
                </div>
                {/* white bg dot for connector line */}
                {i < steps.length-1 && (
                  <div className="hidden lg:block absolute -right-[calc(50%+12px)] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#B8925A]/30 border border-[#B8925A]/50" />
                )}
              </div>

              <h3 className="text-xl text-[#2C1A0E] mb-3 group-hover:text-[#B8925A] transition-colors duration-300"
                style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:500}}>{s.title}</h3>
              <p className="text-[#7A6556] text-sm leading-relaxed font-light max-w-[220px] mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className={`mt-14 text-center transition-all duration-700 delay-700 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
          <a href="#apply"
            className="group inline-flex items-center gap-3 bg-[#B8925A] text-[#FDFAF6] px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#2C1A0E] transition-colors duration-300">
            Apply Now — No Hard Credit Check
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ══════ 6. COMPARE TABLE ══════ */
function CompareSection() {
  const [ref, vis] = useReveal();
  const rows = [
    {feature:"Interest Rate",         cherry:"0% on qualifying plans", credit:"18–29% typical APR", cash:"N/A"},
    {feature:"Application Impact",    cherry:"Soft pull only",          credit:"Hard pull",           cash:"None"},
    {feature:"Approval Speed",        cherry:"Under 60 seconds",        credit:"Days to weeks",       cash:"Instant"},
    {feature:"Flexible Terms",        cherry:"3–24 months",             credit:"Varies",              cash:"None"},
    {feature:"Coverage",              cherry:"All TVC services",        credit:"Any charge",          cash:"Any charge"},
    {feature:"Cost to Apply",         cherry:"Free",                    credit:"Free",                cash:"Free"},
  ];
  return (
    <section className="py-24 px-5 md:px-10 bg-[#FDFAF6]">
      <div className="mx-auto max-w-5xl">
        <div ref={ref} className="text-center mb-12">
          <div className={`flex items-center justify-center gap-3 mb-5 transition-all duration-700 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>
            <span className="w-12 h-px bg-[#B8925A]/50" /><DiamondSvg size={7} /><span className="w-12 h-px bg-[#B8925A]/50" />
          </div>
          <h2 className={`text-5xl md:text-6xl text-[#2C1A0E] transition-all duration-700 delay-100 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}
            style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300}}>
            Cherry vs. Other <em className="italic text-[#B8925A]">Options</em>
          </h2>
        </div>

        <div className={`overflow-hidden border border-[#E8D5BE] transition-all duration-700 delay-200 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>
          {/* Table header */}
          <div className="grid grid-cols-4 bg-[#2C1A0E]">
            {["Feature","Cherry Financing","Credit Card","Pay in Full"].map((h,i)=>(
              <div key={h} className={`px-5 py-4 text-[10px] tracking-[0.2em] uppercase font-semibold ${i===1?"text-[#C9A46A]":"text-[#E8D5BE]/60"}`}>
                {i===1 && <span className="text-[8px] mr-1.5 text-[#B8925A]">★</span>}{h}
              </div>
            ))}
          </div>

          {/* Rows */}
          {rows.map((r,i)=>(
            <div key={r.feature}
              className={`grid grid-cols-4 border-t border-[#E8D5BE] transition-colors duration-200 hover:bg-[#F5EEE4] ${i%2===0?"bg-[#FDFAF6]":"bg-[#FAF7F2]"}`}>
              <div className="px-5 py-4 text-sm text-[#7A6556] font-medium">{r.feature}</div>
              <div className="px-5 py-4 text-sm text-[#2C1A0E] font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8925A] flex-shrink-0" />{r.cherry}
              </div>
              <div className="px-5 py-4 text-sm text-[#7A6556] font-light">{r.credit}</div>
              <div className="px-5 py-4 text-sm text-[#7A6556] font-light">{r.cash}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════ 7. FAQ ══════ */
function FAQSection() {
  const [ref, vis] = useReveal();
  const [open, setOpen] = useState(null);
  const faqs = [
    {q:"Does applying for Cherry affect my credit score?",       a:"No. Cherry uses a soft credit pull only during the application process, which does not affect your credit score. Only if you accept a loan offer will a hard pull potentially occur, depending on the lender."},
    {q:"What services at Tri-Valley Clinic can I finance?",      a:"Cherry Financing can be applied to all services at Tri-Valley Clinic, including psychiatric evaluations, medication management, medical weight loss / GLP-1 programs, IV hydration therapy, and TMS therapy (launching soon)."},
    {q:"How long does the application take?",                    a:"The Cherry application typically takes under 60 seconds to complete. You'll receive an instant decision and can select your payment plan immediately after approval."},
    {q:"What interest rates are available?",                     a:"Cherry offers a range of plans including 0% promotional interest options for qualifying applicants. Standard APR plans are also available. The specific rates offered depend on your creditworthiness and the plan you select."},
    {q:"What is the minimum and maximum I can finance?",         a:"Cherry financing is available for treatment amounts starting from a few hundred dollars. The maximum amount depends on your approval and the specific plan offered. Call us for details about your specific service cost."},
    {q:"Can I pay off my Cherry plan early?",                    a:"Yes. Cherry does not charge prepayment penalties, so you can pay off your balance at any time without incurring any additional fees."},
    {q:"I was denied by Cherry. What are my options?",           a:"If Cherry is not approved for your application, please call us at (510) 598-4921. We can discuss other payment arrangements and ensure your access to care isn't affected."},
    {q:"Is Cherry the same as CareCredit?",                      a:"No — Cherry is a separate healthcare financing platform. While similar in concept, Cherry is a different company with its own application process, terms, and partner providers."},
  ];
  return (
    <section className="py-24 px-5 md:px-10 bg-[#F5EEE4]">
      <div className="mx-auto max-w-4xl">
        <div ref={ref} className="text-center mb-14">
          <div className={`flex items-center justify-center gap-3 mb-5 transition-all duration-700 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>
            <span className="w-12 h-px bg-[#B8925A]/50" /><DiamondSvg size={7} /><span className="w-12 h-px bg-[#B8925A]/50" />
          </div>
          <h2 className={`text-5xl md:text-6xl text-[#2C1A0E] transition-all duration-700 delay-100 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}
            style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300}}>
            Financing <em className="italic text-[#B8925A]">Questions</em>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f,i)=>(
            <div key={f.q}
              className={`border transition-all duration-500 ${open===i?"border-[#B8925A]/50 bg-[#FDFAF6]":"border-[#E8D5BE] bg-[#FDFAF6]/60 hover:border-[#B8925A]/30"} ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}
              style={{transitionDelay:`${i*55}ms`,transitionDuration:"600ms"}}>
              <button className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={()=>setOpen(open===i?null:i)}>
                <span className="text-[15px] font-medium text-[#2C1A0E]">{f.q}</span>
                <span className={`flex-shrink-0 w-7 h-7 border flex items-center justify-center transition-all duration-300 ${open===i?"border-[#B8925A] bg-[#B8925A] text-[#FDFAF6] rotate-45":"border-[#E8D5BE] text-[#B8925A]"}`}>
                  <PlusIcon />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-400 ${open===i?"max-h-48 pb-6":"max-h-0"}`}>
                <p className="px-6 text-[#7A6556] text-sm leading-relaxed font-light">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════ 8. INSURANCE BRIDGE ══════ */
function InsuranceBridge() {
  const [ref, vis] = useReveal();
  return (
    <section className="py-20 px-5 md:px-10 bg-[#FDFAF6]">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className={`relative overflow-hidden border border-[#E8D5BE] transition-all duration-700 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>
          <div className="h-[3px] bg-gradient-to-r from-transparent via-[#B8925A] to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

            {/* Photo */}
            <div className="relative overflow-hidden" style={{height:"320px"}}>
              <img src={P.receptionist} alt="Tri-Valley Clinic reception"
                className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FDFAF6]/80 hidden md:block" />
            </div>

            {/* Text */}
            <div className="p-10 md:p-14 flex flex-col justify-center bg-[#FDFAF6]">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#B8925A]" />
                <span className="text-[10px] tracking-[0.28em] uppercase text-[#B8925A] font-semibold">Have Insurance?</span>
              </div>
              <h3 className="text-4xl md:text-5xl text-[#2C1A0E] mb-4"
                style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300,lineHeight:1.1}}>
                We Accept Most<br /><em className="italic text-[#B8925A]">Major Plans Too.</em>
              </h3>
              <p className="text-[#7A6556] text-base font-light leading-relaxed mb-7">
                If you have insurance, let us verify your coverage before your first visit — completely free. Most major commercial, government, and behavioral health plans are accepted.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/insurance"
                  className="group flex items-center gap-3 bg-[#B8925A] text-[#FDFAF6] px-7 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#2C1A0E] transition-colors duration-300">
                  View Accepted Plans →
                </a>
                <a href="tel:5105984921"
                  className="flex items-center gap-2 border border-[#B8925A]/50 text-[#B8925A] px-7 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase hover:border-[#B8925A] transition-colors duration-300">
                  <PhoneIcon /> Verify Coverage
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════ 9. CTA ══════ */
function CTASection() {
  const [ref, vis] = useReveal();
  return (
    <section className="py-28 px-5 md:px-10 relative overflow-hidden text-center"
      style={{background:"linear-gradient(160deg,#FDFAF6 0%,#F5EEE4 50%,#EDE5D6 100%)"}}>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{background:"radial-gradient(circle,rgba(184,146,90,0.16) 0%,transparent 70%)"}} />

      <div ref={ref} className="relative mx-auto max-w-2xl">
        <div className={`flex justify-center mb-8 transition-all duration-700 ${vis?"opacity-100 scale-100":"opacity-0 scale-90"}`}>
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#B8925A]/60 shadow-[0_8px_32px_rgba(184,146,90,0.2)]">
              <img src={P.drGillPortrait} alt="Dr. Gill" className="w-full h-full object-cover object-top" />
            </div>
            <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#6B7C5E] border-2 border-[#F5EEE4]" />
          </div>
        </div>

        <div className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 delay-100 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>
          <span className="w-16 h-px bg-[#B8925A]/40" /><DiamondSvg /><span className="w-16 h-px bg-[#B8925A]/40" />
        </div>

        <h2 className={`text-5xl md:text-[64px] text-[#2C1A0E] mb-5 transition-all duration-700 delay-150 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}
          style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300,lineHeight:1.05}}>
          Your Care Shouldn't<br />
          Wait for <em className="italic text-[#B8925A]">Finances.</em>
        </h2>
        <p className={`text-[#7A6556] text-lg font-light max-w-lg mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
          Apply for Cherry Financing in 60 seconds, or call us to discuss your options. We'll make sure cost is never a barrier to your care.
        </p>
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-7 transition-all duration-700 delay-300 ${vis?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
          <a href="#apply"
            className="group flex items-center gap-3 bg-[#2C1A0E] text-[#F0E8DA] px-10 py-[18px] text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#B8925A] transition-colors duration-400">
            Apply for Financing
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </a>
          <a href="tel:5105984921"
            className="flex items-center gap-3 border border-[#B8925A]/50 text-[#B8925A] px-10 py-[18px] text-[11px] font-bold tracking-[0.2em] uppercase hover:border-[#B8925A] hover:bg-[#B8925A]/5 transition-all duration-300">
            <PhoneIcon /> (510) 598-4921
          </a>
        </div>
        <p className={`text-[10px] tracking-[0.2em] uppercase text-[#7A6556]/45 transition-all duration-700 delay-400 ${vis?"opacity-100":"opacity-0"}`}>
          Mon – Fri · 9:30 AM – 5:30 PM · 680 Mowry Ave, Fremont, CA
        </p>
      </div>
    </section>
  );
}

/* ══════ ICONS ══════ */
const ic = (d,s=18)=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{d}</svg>;
function PhoneIcon(){return ic(<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 2.93h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>);}
function ZeroIcon(){return ic(<><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></>);}
function ClockIcon(){return ic(<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>);}
function LockIcon(){return ic(<><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></>);}
function StarIcon(){return ic(<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/>);}
function CardIcon({size=18}){return ic(<><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></>,size);}
function ShieldIcon(){return ic(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>);}
function CheckIcon(){return ic(<polyline points="20 6 9 17 4 12"/>);}
function CalIcon(){return ic(<><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>);}
function FormIcon(){return ic(<><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></>);}
function PlanIcon(){return ic(<><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></>);}
function PlusIcon(){return ic(<><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>);}
function DiamondSvg({size=8}){return <svg width={size} height={size} viewBox="0 0 10 10" fill="#B8925A"><polygon points="5,0 10,5 5,10 0,5"/></svg>;}

const CSS=`
  * { cursor:none !important; }
  @keyframes fadeUp    {from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
  @keyframes floatOrb  {0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(22px,-30px) scale(1.06)}66%{transform:translate(-14px,18px) scale(0.94)}}
  @keyframes floatBadge{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
  @keyframes marquee   {from{transform:translateX(0)}to{transform:translateX(-50%)}}
  @keyframes scrollLine{0%{transform:translateY(-100%)}100%{transform:translateY(200%)}}
`;