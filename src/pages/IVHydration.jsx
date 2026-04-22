import IMAGES from "../constants/images";
import DoctorAvatars from "../components/DoctorAvatars";
import { useEffect, useRef, useState } from "react";
const P={hero:"/assets/emptytabel.jpg",drGill:"/assets/Gill_Japsharan.jpg",inside:"/assets/inside clinic1.jpg",interior:"/assets/inetrioir clinic.jpg",office:"/assets/office.jpg"};
function useReveal(t=0.12){const ref=useRef(null);const[v,sv]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){sv(true);o.unobserve(el);}},{threshold:t,rootMargin:"0px 0px -60px 0px"});o.observe(el);return()=>o.disconnect();},[t]);return[ref,v];}
function Cursor(){const d=useRef(null),r=useRef(null),p=useRef({x:0,y:0}),f=useRef(null);useEffect(()=>{const mv=e=>{p.current={x:e.clientX,y:e.clientY};};const tk=()=>{if(d.current)d.current.style.transform=`translate(${p.current.x-4}px,${p.current.y-4}px)`;if(r.current)r.current.style.transform=`translate(${p.current.x-16}px,${p.current.y-16}px)`;f.current=requestAnimationFrame(tk);};window.addEventListener("mousemove",mv);f.current=requestAnimationFrame(tk);return()=>{window.removeEventListener("mousemove",mv);cancelAnimationFrame(f.current);};},[]);return(<><div ref={d} className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#B8925A] z-[9999] pointer-events-none" style={{transition:"none"}}/><div ref={r} className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#B8925A]/50 z-[9998] pointer-events-none" style={{transition:"transform 0.12s ease-out"}}/></>);}
const DRIPS=[
  {
    name:"The Pure Revival Drip",
    tag:"Hydration",
    desc:"Simple, clean rehydration to restore your body's fluid balance and replenish what daily life depletes.",
    benefits:["Restores hydration at the cellular level","Replenishes electrolytes","Supports overall body function"],
    ingredients:["Normal Saline (Electrolyte Base Solution)"],
  },
  {
    name:"The Ignite Drip",
    tag:"Metabolism Support",
    desc:"A powerful combination of nutrients designed to support your body's natural breakdown of fats, carbohydrates, and proteins. Aids in energy-related metabolic processes including the Kreb's cycle and methylation pathways. Supports liver detoxification and helps improve insulin sensitivity.",
    benefits:["Supports fat, carb & protein metabolism","Aids energy production","Supports liver detoxification","Helps improve insulin sensitivity"],
    ingredients:["Normal Saline (Electrolyte Base Solution)","Vitamin C","Magnesium Chloride","Calcium Gluconate","Thiamine","Riboflavin","Pyridoxine","Niacinamide","Dexpanthenol","Cyanocobalamin"],
  },
  {
    name:"The Ultimate Wellness Revive Drip",
    tag:"Myers / Energy",
    desc:"A comprehensive blend of B vitamins, Vitamin C, Magnesium, and Calcium working in combination to increase metabolism, replace electrolytes, and facilitate enzymatic reactions in intracellular processes. Supports adrenal function and helps regulate cortisol and adrenaline levels.",
    benefits:["Enhances relaxation","Supports healthy blood pressure","Helps combat fatigue","Supports adrenal & hormone regulation","Ideal for fatigue, stress, and burnout recovery"],
    ingredients:["Normal Saline (Electrolyte Base Solution)","Vitamin C","Magnesium Chloride","Calcium Gluconate","Thiamine","Riboflavin","Pyridoxine","Niacinamide","Dexpanthenol","Cyanocobalamin"],
  },
  {
    name:"The Shield Drip",
    tag:"Immune Defense",
    desc:"Contains Zinc to support the blocking of viral replication and assist cells that mediate immunity. Provides high-dose Vitamin C to boost lymphocyte and phagocyte production, acting as a powerful antioxidant that helps protect cells and supports the body's natural healing processes.",
    benefits:["Strengthens immune defenses","Supports white blood cell production","Powerful antioxidant protection","Supports faster recovery from illness"],
    ingredients:["Normal Saline (Electrolyte Base Solution)","Ascorbic Acid (Vitamin C) — high dose","Magnesium Chloride"],
  },
  {
    name:"The Lumière Drip",
    tag:"Glow & Skin Brightening",
    desc:"A powerful antioxidant infusion that breaks down free radicals, supports enzyme functions, and helps reduce inflammation at the cellular level. Supports healthy skin by inhibiting the enzymes responsible for pigment production, promoting a more luminous, even complexion.",
    benefits:["Reduces inflammation","Supports skin brightening & luminosity","Slows the visible effects of aging","Detoxifies liver and cells","Improves mental focus and clarity"],
    ingredients:["Normal Saline (Electrolyte Base Solution)","Glutathione 200mg/ml"],
  },
  {
    name:"The Apex Drip",
    tag:"Men's HRT Support",
    desc:"Formulated to support men's hormonal health at the cellular level. Trace minerals and magnesium work together to support mitochondrial function, muscle recovery, nitric oxide production, and healthy blood flow.",
    benefits:["Supports hormonal health","Promotes healthy blood flow & libido","Supports muscle recovery","Aids mitochondrial energy production","Supports cardiovascular function"],
    ingredients:["Normal Saline (Electrolyte Base Solution)","Copper","Manganese","Zinc","Selenium","Magnesium Chloride"],
  },
  {
    name:"The Balance Drip",
    tag:"Women's HRT Support",
    desc:"Crafted to support women's hormonal balance with key cofactors involved in hormone conversion pathways. Vitamin C protects cells from oxidative stress and supports carnitine biosynthesis, which is essential for energy metabolism.",
    benefits:["Supports hormonal balance","Antioxidant & cellular protection","Supports energy metabolism","Aids in hormone conversion pathways","Supports bone & cardiovascular health"],
    ingredients:["Normal Saline (Electrolyte Base Solution)","Vitamin C","Zinc"],
  },
  {
    name:"The Warrior Drip",
    tag:"Muscle Recovery",
    desc:"This infusion helps build muscle mass more efficiently, reduces fatigue, and improves muscular endurance. Reduces inflammatory responses and combats fatigue by improving muscle recovery at a cellular level through antioxidation, assisting in serotonin production, and reducing cellular damage.",
    benefits:["Boosts endurance & performance","Supports muscle conditioning & repair","Reduces post-workout fatigue","Aids cell reproduction & growth","Supports electrolyte balance"],
    ingredients:["Normal Saline (Electrolyte Base Solution)","Vitamin C","Magnesium Chloride","Arginine","Glutamine","Lysine","Proline","L-Taurine","L-Carnitine","Vitamin B12"],
  },
  {
    name:"The Slim Drip",
    tag:"Slim & Trim",
    desc:"A targeted blend designed to support fat metabolism, appetite regulation, liver function, and sustained energy production. L-Carnitine facilitates the transport of fatty acids into the mitochondria for energy. MIC+B12 administered as a separate IM injection.",
    benefits:["Supports fat metabolism","Aids appetite regulation","Supports liver detoxification","Boosts energy production","Supports mood & serotonin balance"],
    ingredients:["Normal Saline (Electrolyte Base Solution)","Vitamin C","L-Carnitine","MIC+B12 (Methionine, Inositol, Choline, Cyanocobalamin) — IM injection"],
  },
  {
    name:"The Rescue Drip",
    tag:"Hangover Recovery",
    desc:"Contains essential vitamins and minerals to combat dehydration and reduce oxidative stress on the liver, cardiovascular, and endocrine systems. Reduces nausea and inflammation to cut recovery time significantly — fast.",
    benefits:["Detoxifies the body","Reduces nausea quickly","Reduces inflammation","Cuts hangover recovery time","Restores fluid and electrolyte balance"],
    ingredients:["Normal Saline (Electrolyte Base Solution)","Magnesium Chloride","Dexamethasone","Ketorolac","Ondansetron"],
  },
  {
    name:"The Relief Drip",
    tag:"Migraine & Headache",
    desc:"This multifaceted infusion works to improve vascular function linked to migraine attacks, reduce associated nausea, and relax blood vessels through double-dose magnesium. Targets the root physiological triggers of migraine for faster, more complete relief.",
    benefits:["Improves vascular function","Reduces nausea","Relieves migraine & headache pain","Relaxes blood vessels","Reduces inflammation"],
    ingredients:["Normal Saline (Electrolyte Base Solution)","Magnesium Chloride — double dose","Ketorolac","Ondansetron"],
  },
  {
    name:"The Clarity Drip",
    tag:"Brain Health & Focus",
    desc:"Specifically targeting cognitive function, mental clarity, and mood support. A great option for professionals, students, and anyone experiencing brain fog, burnout, or stress.",
    benefits:["Sharpens mental focus and concentration","Reduces brain fog","Supports mood and emotional balance","Aids cognitive function and memory","Combats mental fatigue and burnout","Supports neurological health"],
    ingredients:["Normal Saline (Electrolyte Base Solution)","Glutathione","Vitamin B12","Taurine","Vitamin B1","B2","B3","B4","B5","B6"],
  },
];
const BENEFITS=["Bypasses the digestive system for 100% nutrient absorption","Rapid results — most patients feel effects within 30–60 minutes","Administered in our calm, spa-like clinic setting","All formulas overseen by Dr. Japsharan Gill or Dr. Shabeg Gondara personally","Sessions last approximately 45–60 minutes","Available as single sessions or package plans"];
export default function IVHydration(){
  return(<main style={{fontFamily:"'Jost',sans-serif",background:"#FDFAF6",cursor:"none"}}><style>{CSS}</style><Cursor/><Hero/><Mq/><WhatIs/><DripsMenu/><HowItWorks/><WhyChoose/><FAQSec/><CTA/></main>);
}
function Hero(){
  const[on,sOn]=useState(false);useEffect(()=>{setTimeout(()=>sOn(true),80);},[]);
  return(
    <section className="relative min-h-[88vh] flex items-end overflow-hidden" style={{background:"linear-gradient(140deg,#2C1A0E 0%,#3D2B1F 55%,#4E3525 100%)"}}>
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundSize:"180px"}}/>
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[52%] overflow-hidden"><img src="/assets/iv-img.jpg" alt="IV Hydration Therapy at Tri-Valley Clinic" className="w-full h-full object-cover opacity-30" style={{filter:"saturate(0.65)"}}/><div className="absolute inset-0" style={{background:"linear-gradient(to right,#2C1A0E 0%,#2C1A0E 12%,transparent 58%)"}}/><div className="absolute inset-0" style={{background:"linear-gradient(to top,#2C1A0E 0%,transparent 55%)"}}/></div>
      {[{t:"10%",l:"52%",s:400,o:0.12,d:"0s"},{t:"60%",l:"5%",s:260,o:0.08,d:"5s"}].map((o,i)=>(<div key={i} className="absolute rounded-full pointer-events-none" style={{width:o.s,height:o.s,top:o.t,left:o.l,background:`radial-gradient(circle,rgba(184,146,90,${o.o}) 0%,transparent 70%)`,animation:`floatOrb ${11+i*4}s ease-in-out infinite ${o.d}`}}/>))}
      <div className="relative mx-auto max-w-7xl w-full px-5 md:px-10 xl:px-16 pb-20 pt-36 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
        <div>
          <div className={`inline-flex items-center gap-2.5 border border-[#B8925A]/40 bg-[#B8925A]/8 px-4 py-2 mb-7 transition-all duration-700 ${on?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`} style={{transitionDelay:"100ms"}}><span className="w-1.5 h-1.5 rounded-full bg-[#B8925A] animate-pulse"/><span className="text-[10px] tracking-[0.24em] uppercase text-[#B8925A] font-semibold">Available Now · Physician-Supervised</span></div>
          <h1 className={`text-[48px] md:text-[62px] xl:text-[74px] text-[#F0E8DA] leading-[0.98] mb-5 transition-all duration-900 ${on?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`} style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300,transitionDelay:"200ms"}}>Rehydrate.<br/><em className="italic text-[#C9A46A]">Restore.</em><br/>Revive.</h1>
          <p className={`text-[#A89880] text-lg leading-relaxed max-w-lg font-light mb-10 transition-all duration-700 ${on?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`} style={{transitionDelay:"440ms"}}>Premium intravenous nutrient therapy administered in a spa-like setting at Tri-Valley Clinic. Tailored drip formulas for energy, immunity, beauty, and peak wellness — supervised by Dr. Japsharan Gill or Dr. Shabeg Gondara.</p>
          <div className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 ${on?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`} style={{transitionDelay:"540ms"}}>
            <a href="/contact" className="group flex items-center gap-3 bg-[#B8925A] text-[#FDFAF6] px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#C9A46A] transition-colors duration-300"><Ph/> Book a Session <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span></a>
            <a href="#menu" className="flex items-center gap-3 border border-[#B8925A]/50 text-[#C9A46A] px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:border-[#B8925A] hover:bg-[#B8925A]/10 transition-all duration-300">View IV Menu ↓</a>
          </div>
          <div className={`flex flex-wrap gap-3 transition-all duration-700 ${on?"opacity-100":"opacity-0"}`} style={{transitionDelay:"640ms"}}>
            {["45–60 Min Sessions","6 Custom Formulas","Physician-Monitored","Cherry Financing Available"].map(t=>(<span key={t} className="text-[9px] tracking-[0.18em] uppercase border border-[#B8925A]/25 text-[#C9A46A]/60 px-3 py-1.5">{t}</span>))}
          </div>
        </div>
        <div className={`hidden lg:flex flex-col gap-4 items-end transition-all duration-1000 ${on?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`} style={{transitionDelay:"380ms"}}>
          {[{val:"100%",lab:"Nutrient Absorption",sub:"Bypasses the digestive system"},{val:"6",lab:"Custom Drip Formulas",sub:"Tailored to your wellness goals"},{val:"45",lab:"Minute Sessions",sub:"Relax in our spa-like clinic"}].map((c,i)=>(<div key={c.lab} className="bg-[#FDFAF6]/8 border border-[#E8D5BE]/15 px-6 py-5 flex items-center gap-5 w-full max-w-xs" style={{animation:`fadeUp 0.8s ease ${0.5+i*0.12}s both`}}><p className="text-3xl text-[#C9A46A] flex-shrink-0" style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300}}>{c.val}</p><div><p className="text-[#F0E8DA] text-sm font-medium">{c.lab}</p><p className="text-[#A89880] text-xs font-light mt-0.5">{c.sub}</p></div></div>))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none" style={{background:"linear-gradient(to top,#FDFAF6,transparent)"}}/>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{animation:"fadeUp 1s ease 1.2s both"}}><span className="text-[8px] tracking-[0.3em] uppercase text-[#B8925A]/40">Scroll</span><div className="w-px h-12 overflow-hidden"><div className="w-full h-full bg-gradient-to-b from-[#B8925A]/70 to-transparent" style={{animation:"scrollLine 2s ease-in-out infinite"}}/></div></div>
    </section>
  );
}
function Mq(){const items=["IV Hydration","Vitamin C Drip","Glutathione","B-Complex","Immune Boost","Energy Infusion","Beauty Drip","Brain Boost","Amino Acids","Rehydration","Wellness Therapy","Fremont CA"];const rep=[...items,...items];return(<div className="bg-[#2C1A0E] py-3.5 overflow-hidden"><div className="flex whitespace-nowrap" style={{animation:"marquee 36s linear infinite",width:"max-content"}}>{rep.map((t,i)=><span key={i} className="inline-flex items-center gap-3 text-[#E8D5BE]/60 text-[10px] tracking-[0.22em] uppercase font-medium px-3">{t}<Dm/></span>)}</div></div>);}
function IVDripAnimation(){
  return(
    <div className="relative flex items-center justify-center w-full h-full" style={{minHeight:"460px"}}>
      <style>{`
        @keyframes liquidFill{0%,100%{d:path("M54 90 Q50 95 50 100 L50 230 Q50 235 60 238 L140 238 Q150 235 150 230 L150 100 Q150 95 146 90")}50%{d:path("M54 90 Q50 95 50 100 L50 240 Q50 245 60 248 L140 248 Q150 245 150 240 L150 100 Q150 95 146 90")}}
        @keyframes dropForm{0%{r:0;opacity:0;cy:308}25%{r:0;opacity:0;cy:308}50%{r:5;opacity:0.9;cy:312}75%{r:7;opacity:1;cy:318}100%{r:0;opacity:0;cy:380}}
        @keyframes dropForm2{0%{r:0;opacity:0;cy:308}15%{r:0;opacity:0;cy:308}40%{r:4;opacity:0.8;cy:312}65%{r:6;opacity:1;cy:316}90%{r:0;opacity:0;cy:370}100%{r:0;opacity:0;cy:308}}
        @keyframes liquidLevel{0%,100%{height:118px;y:112px}50%{height:114px;y:116px}}
        @keyframes chamberFill{0%,100%{height:28px;y:372px}50%{height:32px;y:368px}}
        @keyframes tubeFlow{0%{stroke-dashoffset:80}100%{stroke-dashoffset:0}}
        @keyframes bagSway{0%,100%{transform:rotate(0deg) translateX(0)}33%{transform:rotate(0.4deg) translateX(1px)}66%{transform:rotate(-0.3deg) translateX(-0.5px)}}
        @keyframes glowPulse{0%,100%{opacity:0.15}50%{opacity:0.3}}
        @keyframes dropTrail{0%{opacity:0;transform:translateY(0)}20%{opacity:0.6}80%{opacity:0.4}100%{opacity:0;transform:translateY(62px)}}
        @keyframes dropTrail2{0%{opacity:0;transform:translateY(0)}20%{opacity:0.5}80%{opacity:0.3}100%{opacity:0;transform:translateY(50px)}}
      `}</style>

      {/* Ambient glow behind bag */}
      <div className="absolute" style={{width:180,height:180,top:"5%",left:"50%",transform:"translateX(-50%)",background:"radial-gradient(circle,rgba(184,146,90,0.18) 0%,transparent 70%)",animation:"glowPulse 4s ease-in-out infinite"}}/>

      <svg viewBox="0 0 200 540" width="260" style={{filter:"drop-shadow(0 20px 60px rgba(184,146,90,0.18))"}}>
        <defs>
          <linearGradient id="bagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5EEE4" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#E8D5BE" stopOpacity="0.08"/>
          </linearGradient>
          <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B8925A" stopOpacity="0.55"/>
            <stop offset="100%" stopColor="#C9A46A" stopOpacity="0.35"/>
          </linearGradient>
          <linearGradient id="chamberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5EEE4" stopOpacity="0.12"/>
            <stop offset="50%" stopColor="#F5EEE4" stopOpacity="0.22"/>
            <stop offset="100%" stopColor="#F5EEE4" stopOpacity="0.08"/>
          </linearGradient>
          <linearGradient id="poolGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C9A46A" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#B8925A" stopOpacity="0.4"/>
          </linearGradient>
          <clipPath id="bagClip">
            <path d="M54 88 Q40 60 42 30 Q42 10 60 8 L140 8 Q158 8 158 30 Q160 60 146 88 Q150 95 150 105 L150 240 Q150 250 140 252 L60 252 Q50 250 50 240 L50 105 Q50 95 54 88 Z"/>
          </clipPath>
          <clipPath id="chamberClip">
            <rect x="80" y="290" width="40" height="110" rx="3"/>
          </clipPath>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* ── IV BAG ── */}
        <g style={{animation:"bagSway 8s ease-in-out infinite",transformOrigin:"100px 130px"}}>
          {/* Bag hanger hook */}
          <line x1="100" y1="0" x2="100" y2="8" stroke="#B8925A" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M90 0 Q100 -6 110 0" fill="none" stroke="#B8925A" strokeWidth="1.5" strokeLinecap="round"/>

          {/* Bag body outline */}
          <path d="M54 88 Q40 60 42 30 Q42 10 60 8 L140 8 Q158 8 158 30 Q160 60 146 88 Q150 95 150 105 L150 240 Q150 250 140 252 L60 252 Q50 250 50 240 L50 105 Q50 95 54 88 Z"
            fill="url(#bagGrad)" stroke="#B8925A" strokeWidth="1.2" strokeOpacity="0.7"/>

          {/* Liquid fill inside bag */}
          <rect x="50" y="114" width="100" rx="0" style={{fill:"url(#liquidGrad)",animation:"liquidLevel 4s ease-in-out infinite"}} clipPath="url(#bagClip)"/>

          {/* Liquid surface shimmer */}
          <line x1="52" y1="115" x2="148" y2="115" stroke="#C9A46A" strokeWidth="0.8" strokeOpacity="0.5" style={{animation:"liquidLevel 4s ease-in-out infinite"}}/>

          {/* Bag label area */}
          <rect x="68" y="140" width="64" height="72" rx="2" fill="#B8925A" fillOpacity="0.08" stroke="#B8925A" strokeWidth="0.5" strokeOpacity="0.3"/>
          <text x="100" y="162" textAnchor="middle" fill="#C9A46A" fontSize="5.5" fontFamily="'Jost',sans-serif" letterSpacing="1.5" fontWeight="600" opacity="0.9">IV HYDRATION</text>
          <line x1="74" y1="167" x2="126" y2="167" stroke="#B8925A" strokeWidth="0.4" strokeOpacity="0.4"/>
          <text x="100" y="178" textAnchor="middle" fill="#E8D5BE" fontSize="4.5" fontFamily="'Jost',sans-serif" letterSpacing="0.8" opacity="0.6">NORMAL SALINE</text>
          <text x="100" y="188" textAnchor="middle" fill="#E8D5BE" fontSize="4" fontFamily="'Jost',sans-serif" opacity="0.5">+ VITAMINS</text>
          <text x="100" y="200" textAnchor="middle" fill="#C9A46A" fontSize="8" fontFamily="'Cormorant Garamond',serif" fontStyle="italic" opacity="0.7">500 mL</text>

          {/* Outlet port at bottom */}
          <rect x="94" y="250" width="12" height="10" rx="2" fill="#B8925A" fillOpacity="0.4" stroke="#B8925A" strokeWidth="0.8" strokeOpacity="0.6"/>
        </g>

        {/* ── TUBE BAG → CHAMBER ── */}
        <line x1="100" y1="260" x2="100" y2="292" stroke="#B8925A" strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round"/>

        {/* ── DRIP CHAMBER ── */}
        <rect x="80" y="290" width="40" height="110" rx="3" fill="url(#chamberGrad)" stroke="#B8925A" strokeWidth="1" strokeOpacity="0.55"/>
        {/* Chamber edge highlight */}
        <line x1="82" y1="292" x2="82" y2="398" stroke="#F0E8DA" strokeWidth="0.5" strokeOpacity="0.2"/>
        <line x1="118" y1="292" x2="118" y2="398" stroke="#B8925A" strokeWidth="0.5" strokeOpacity="0.15"/>

        {/* Liquid pool at bottom of chamber */}
        <rect x="81" y="374" width="38" rx="2" style={{fill:"url(#poolGrad)",animation:"chamberFill 4s ease-in-out infinite"}} clipPath="url(#chamberClip)"/>

        {/* DROP 1 — primary drip */}
        <circle cx="100" cy="308" r="0" fill="#C9A46A" fillOpacity="0.9" filter="url(#glow)"
          style={{animation:"dropForm 3s ease-in-out infinite"}}/>
        {/* Drop trail 1 */}
        <rect x="99" y="318" width="2" height="0" rx="1" fill="#B8925A" fillOpacity="0"
          style={{animation:"dropTrail 3s ease-in-out infinite"}}/>

        {/* DROP 2 — offset timing */}
        <circle cx="100" cy="308" r="0" fill="#B8925A" fillOpacity="0.8"
          style={{animation:"dropForm2 3s ease-in-out 1.5s infinite"}}/>

        {/* ── TUBE CHAMBER → EXIT ── */}
        <line x1="100" y1="400" x2="100" y2="415" stroke="#B8925A" strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round"/>

        {/* Connector clamp */}
        <rect x="89" y="413" width="22" height="7" rx="2" fill="#B8925A" fillOpacity="0.35" stroke="#B8925A" strokeWidth="0.8" strokeOpacity="0.6"/>

        {/* ── LONG TUBE DOWN ── */}
        <path d="M100 420 Q100 440 110 450 Q120 460 120 480 Q120 510 100 520 Q90 522 90 530"
          fill="none" stroke="#B8925A" strokeWidth="2.5" strokeOpacity="0.4" strokeLinecap="round"
          strokeDasharray="6 4" style={{animation:"tubeFlow 2s linear infinite"}}/>

        {/* Flowing liquid inside tube */}
        <path d="M100 420 Q100 440 110 450 Q120 460 120 480 Q120 510 100 520 Q90 522 90 530"
          fill="none" stroke="#C9A46A" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round"
          strokeDasharray="3 7" style={{animation:"tubeFlow 1.5s linear infinite"}}/>

        {/* ── DECORATIVE GOLD DETAILS ── */}
        {/* Top measurement marks on chamber */}
        {[295,320,345,370,395].map((y,i)=>(
          <line key={y} x1="80" y1={y} x2={i===2?76:78} y2={y} stroke="#B8925A" strokeWidth="0.6" strokeOpacity="0.4"/>
        ))}

        {/* Side label */}
        <text x="72" y="348" textAnchor="middle" fill="#B8925A" fontSize="4" fontFamily="'Jost',sans-serif" letterSpacing="0.5" opacity="0.5" transform="rotate(-90, 72, 348)">DRIP CHAMBER</text>
      </svg>

      {/* Gold accent lines */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-30">
        {[...Array(5)].map((_,i)=>(<div key={i} className="bg-[#B8925A]" style={{width:i%2===0?16:10,height:1}}/>))}
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-30">
        {[...Array(5)].map((_,i)=>(<div key={i} className="bg-[#B8925A]" style={{width:i%2===0?16:10,height:1}}/>))}
      </div>
    </div>
  );
}


function WhatIs(){
  const[ref,v]=useReveal();
  return(<section className="py-24 px-5 md:px-10 bg-[#FDFAF6]"><div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div ref={ref} className={`transition-all duration-800 ${v?"opacity-100 translate-x-0":"opacity-0 -translate-x-10"}`}>
      <div className="flex items-center gap-3 mb-5"><span className="w-8 h-px bg-[#B8925A]"/><span className="text-[10px] tracking-[0.28em] uppercase text-[#B8925A] font-semibold">What Is IV Hydration</span></div>
      <h2 className="text-5xl md:text-6xl text-[#2C1A0E] mb-6" style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300,lineHeight:1.1}}>Nutrients Delivered<br/><em className="italic text-[#B8925A]">Directly</em> to You.</h2>
      <p className="text-[#7A6556] text-base leading-[1.95] font-light mb-4">IV hydration therapy delivers vitamins, minerals, antioxidants, and fluids directly into your bloodstream — bypassing the digestive system for immediate, 100% bioavailable absorption. The result: faster, more powerful effects than any oral supplement.</p>
      <p className="text-[#7A6556] text-base leading-[1.95] font-light mb-8">At Tri-Valley Clinic, all IV formulas are medically supervised by Dr. Japsharan Gill or Dr. Shabeg Gondara, and administered by trained clinical staff in a calm, comfortable, spa-like environment — a deliberate departure from the sterile clinical settings of most IV centers.</p>
      <ul className="space-y-3">{BENEFITS.map(b=>(<li key={b} className="flex items-start gap-3 text-sm text-[#7A6556]"><span className="w-1.5 h-1.5 rounded-full bg-[#B8925A] flex-shrink-0 mt-2"/>{b}</li>))}</ul>
    </div>
    <div className={`relative transition-all duration-800 delay-200 ${v?"opacity-100 translate-x-0":"opacity-0 translate-x-10"}`}>
      <div className="absolute top-8 -right-4 left-8 bottom-0 bg-[#2C1A0E]/5 -z-10"/><div className="absolute top-0 right-0 w-[3px] h-24 bg-[#B8925A]"/>
      <div className="overflow-hidden flex items-center justify-center" style={{height:"460px",background:"linear-gradient(135deg,#2C1A0E 0%,#3D2B1F 100%)"}}>
        <IVDripAnimation/>
      </div>
      <div className="absolute -bottom-6 -left-4 bg-[#B8925A] text-[#FDFAF6] px-6 py-5 shadow-xl" style={{animation:"floatBadge 5s ease-in-out infinite"}}><p className="text-4xl font-light mb-0.5" style={{fontFamily:"'Cormorant Garamond',serif"}}>100%</p><p className="text-[9px] tracking-[0.2em] uppercase opacity-80">Nutrient Absorption</p></div>
    </div>
  </div></section>);
}
function DripsMenu(){
  const[ref,v]=useReveal();
  return(<section id="menu" className="py-24 px-5 md:px-10" style={{background:"linear-gradient(160deg,#2C1A0E 0%,#3D2B1F 100%)"}}>
    <div className="mx-auto max-w-7xl">
      <div ref={ref} className="text-center mb-14">
        <div className={`flex items-center justify-center gap-3 mb-5 transition-all duration-700 ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}><span className="w-12 h-px bg-[#B8925A]/50"/><Dm size={7}/><span className="w-12 h-px bg-[#B8925A]/50"/></div>
        <h2 className={`text-5xl md:text-6xl text-[#F0E8DA] transition-all duration-700 delay-100 ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`} style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300}}>Our <em className="italic text-[#C9A46A]">Drip Menu</em></h2>
        <p className={`text-[#A89880] text-base font-light mt-4 max-w-md mx-auto transition-all duration-700 delay-200 ${v?"opacity-100":"opacity-0"}`}>All formulas curated and supervised by Dr. Japsharan Gill or Dr. Shabeg Gondara. Custom blends available on request.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {DRIPS.map((d,i)=>(
          <div key={d.name} className={`group relative border border-[#E8D5BE]/15 bg-[#F5EEE4]/5 p-7 flex flex-col transition-all duration-700 hover:bg-[#F5EEE4]/12 hover:-translate-y-1.5 ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`} style={{transitionDelay:`${i*100}ms`,transitionDuration:"700ms"}}>
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#B8925A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"/>
            {/* Tag */}
            <span className="text-[9px] tracking-[0.2em] uppercase border border-[#B8925A]/30 text-[#B8925A] px-2.5 py-1 font-semibold self-start mb-4">{d.tag}</span>
            {/* Name */}
            <h3 className="text-2xl text-[#F0E8DA] mb-3 group-hover:text-[#C9A46A] transition-colors duration-300" style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:400}}>{d.name}</h3>
            {/* Short desc */}
            <p className="text-[#A89880] text-sm leading-relaxed font-light mb-5">{d.desc}</p>
            {/* Benefits */}
            <div className="mb-4">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#B8925A]/70 font-semibold mb-2">Benefits</p>
              <ul className="space-y-1.5">
                {d.benefits.map(b=>(
                  <li key={b} className="flex items-start gap-2 text-xs text-[#7A6556] font-light leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-[#B8925A] flex-shrink-0 mt-1.5"/>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            {/* Ingredients */}
            <div className="mt-auto pt-4 border-t border-[#E8D5BE]/15">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#B8925A]/50 font-semibold mb-2">Ingredients</p>
              <p className="text-xs text-[#7A6556]/70 font-light leading-relaxed">{d.ingredients.join(" · ")}</p>
            </div>
            {/* CTA */}
            <a href="tel:5105984921" className="flex items-center gap-2 mt-5 text-[10px] tracking-wider text-[#B8925A] hover:text-[#C9A46A] transition-colors duration-200">
              Book This Drip <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        ))}
      </div>
      <div className={`mt-10 text-center transition-all duration-700 delay-700 ${v?"opacity-100":"opacity-0"}`}>
        <a href="tel:5105984921" className="group inline-flex items-center gap-3 bg-[#B8925A] text-[#FDFAF6] px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#C9A46A] transition-colors duration-300"><Ph/> Call to Book Your Drip <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span></a>
      </div>
    </div>
  </section>);
}
function HowItWorks(){
  const[ref,v]=useReveal();
  const steps=[{n:"01",t:"Book Online or Call",d:"Schedule your IV session by calling us or using the contact form. Sessions are 45–60 minutes."},{n:"02",t:"Brief Health Review",d:"A quick health history check to confirm your IV formula is appropriate and safe for you."},{n:"03",t:"Relax & Receive",d:"Sit back in our comfortable clinic setting while your IV drip is administered by clinical staff."},{n:"04",t:"Feel the Difference",d:"Most patients notice effects within 30–60 minutes. Hydration, energy, and clarity — delivered."}];
  return(<section className="py-24 px-5 md:px-10 bg-[#F5EEE4]"><div className="mx-auto max-w-7xl">
    <div ref={ref} className="text-center mb-14"><div className={`flex items-center justify-center gap-3 mb-5 transition-all duration-700 ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}><span className="w-12 h-px bg-[#B8925A]/50"/><Dm size={7}/><span className="w-12 h-px bg-[#B8925A]/50"/></div><h2 className={`text-5xl md:text-6xl text-[#2C1A0E] transition-all duration-700 delay-100 ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`} style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300}}>What to <em className="italic text-[#B8925A]">Expect</em></h2></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
      <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#B8925A]/20 via-[#B8925A]/50 to-[#B8925A]/20"/>
      {steps.map((s,i)=>(<div key={s.n} className={`group text-center transition-all duration-700 ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`} style={{transitionDelay:`${i*140}ms`,transitionDuration:"700ms"}}>
        <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6 mx-auto"><div className="absolute inset-0 rounded-full border-2 border-[#B8925A]/30 group-hover:border-[#B8925A] transition-colors duration-500"/><div className="absolute inset-[6px] rounded-full bg-[#B8925A]/8 group-hover:bg-[#B8925A]/15 transition-all duration-500"/><span className="text-2xl text-[#B8925A]" style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300}}>{s.n}</span></div>
        <h3 className="text-xl text-[#2C1A0E] mb-3 group-hover:text-[#B8925A] transition-colors duration-300" style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:500}}>{s.t}</h3>
        <p className="text-[#7A6556] text-sm leading-relaxed font-light max-w-[210px] mx-auto">{s.d}</p>
      </div>))}
    </div>
  </div></section>);
}
function WhyChoose(){
  const[ref,v]=useReveal();
  const items=[{t:"Physician Oversight",d:"All formulas designed and supervised by Dr. Japsharan Gill or Dr. Shabeg Gondara personally — not a wellness influencer or unlicensed practitioner."},{t:"Clinical Setting",d:"Administered in Tri-Valley Clinic's spa-like treatment rooms — calm, private, and beautifully designed."},{t:"Custom Formulas",d:"Standard menus are a starting point. Dr. Japsharan Gill or Dr. Shabeg Gondara can adjust formulas based on your specific health profile and goals."},{t:"Immediate Results",d:"Unlike oral supplements, IV therapy delivers 100% bioavailability — patients feel results within 30–60 minutes."}];
  return(<section className="py-24 px-5 md:px-10 bg-[#FDFAF6]"><div className="mx-auto max-w-7xl">
    <div ref={ref} className="text-center mb-14"><div className={`flex items-center justify-center gap-3 mb-5 transition-all duration-700 ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}><span className="w-12 h-px bg-[#B8925A]/50"/><Dm size={7}/><span className="w-12 h-px bg-[#B8925A]/50"/></div><h2 className={`text-5xl md:text-6xl text-[#2C1A0E] transition-all duration-700 delay-100 ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`} style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300}}>Why <em className="italic text-[#B8925A]">Tri-Valley Clinic</em></h2></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((it,i)=>(<div key={it.t} className={`group bg-[#F5EEE4] border border-[#E8D5BE] p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_14px_48px_rgba(184,146,90,0.13)] hover:border-[#B8925A]/50 ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`} style={{transitionDelay:`${i*110}ms`,transitionDuration:"700ms"}}>
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#B8925A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left relative"/>
        <p className="text-[32px] text-[#B8925A]/20 leading-none mb-4" style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300}}>{String(i+1).padStart(2,"0")}</p>
        <h3 className="text-xl text-[#2C1A0E] mb-3" style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:500}}>{it.t}</h3>
        <p className="text-[#7A6556] text-sm leading-relaxed font-light">{it.d}</p>
      </div>))}
    </div>
  </div></section>);
}
function FAQSec(){
  const[ref,v]=useReveal();const[open,sOpen]=useState(null);
  const faqs=[{q:"Is IV hydration therapy safe?",a:"Yes, when administered by trained clinical staff under physician supervision. At Tri-Valley Clinic, all IV formulas are overseen by Dr. Japsharan Gill or Dr. Shabeg Gondara, and administered in a medical setting with appropriate monitoring."},{q:"How often can I get IV therapy?",a:"This depends on your health goals and formula. Most wellness patients receive IV therapy every 2–4 weeks. Dr. Japsharan Gill or our clinical staff can recommend a schedule based on your specific needs."},{q:"Does insurance cover IV hydration?",a:"IV hydration therapy is typically a self-pay wellness service and is not covered by most insurance plans. Cherry Financing is available to help spread the cost."},{q:"Are there any side effects?",a:"Side effects are rare and minor — occasional mild bruising at the insertion site. Most patients experience no discomfort during the session itself."},{q:"Can I get IV therapy if I'm on medications?",a:"A health history review is completed before every session. Please disclose all medications during your booking so our staff can confirm your formula is appropriate."}];
  return(<section className="py-24 px-5 md:px-10 bg-[#F5EEE4]"><div className="mx-auto max-w-4xl"><div ref={ref} className={`text-center mb-12 transition-all duration-700 ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}><h2 className="text-5xl md:text-6xl text-[#2C1A0E]" style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300}}>Frequently <em className="italic text-[#B8925A]">Asked</em></h2></div>
  <div className="space-y-3">{faqs.map((f,i)=>(<div key={f.q} className={`border transition-all duration-500 ${open===i?"border-[#B8925A]/50 bg-[#FDFAF6]":"border-[#E8D5BE] bg-[#FDFAF6]/70 hover:border-[#B8925A]/30"} ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`} style={{transitionDelay:`${i*55}ms`,transitionDuration:"600ms"}}><button className="w-full flex items-center justify-between px-6 py-5 text-left gap-4" onClick={()=>sOpen(open===i?null:i)}><span className="text-[15px] font-medium text-[#2C1A0E]">{f.q}</span><span className={`flex-shrink-0 w-7 h-7 border flex items-center justify-center transition-all duration-300 ${open===i?"border-[#B8925A] bg-[#B8925A] text-[#FDFAF6] rotate-45":"border-[#E8D5BE] text-[#B8925A]"}`}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span></button><div className={`overflow-hidden transition-all duration-400 ${open===i?"max-h-48 pb-6":"max-h-0"}`}><p className="px-6 text-[#7A6556] text-sm leading-relaxed font-light">{f.a}</p></div></div>))}</div>
  </div></section>);
}
function CTA(){
  const[ref,v]=useReveal();
  return(
    <section className="py-28 px-5 md:px-10 relative overflow-hidden text-center" style={{background:"linear-gradient(160deg,#FDFAF6 0%,#F5EEE4 50%,#EDE5D6 100%)"}}>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none" style={{background:"radial-gradient(circle,rgba(184,146,90,0.14) 0%,transparent 70%)"}} />
      <div ref={ref} className="relative mx-auto max-w-2xl">
        {/* BOTH DOCTORS — 50/50 partners, every page */}
        <div className={`transition-all duration-700 ${v?"opacity-100 scale-100":"opacity-0 scale-90"}`}>
          <DoctorAvatars className="mb-10"/>
        </div>
        <div className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 delay-100 ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>
          <span className="w-16 h-px bg-[#B8925A]/40"/><Dm/><span className="w-16 h-px bg-[#B8925A]/40"/>
        </div>
        <h2 className={`text-5xl md:text-[64px] text-[#2C1A0E] mb-5 transition-all duration-700 delay-150 ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}
          style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300,lineHeight:1.05}}>
          Ready to Feel<br/><em className="italic text-[#B8925A]">Your Best?</em>
        </h2>
        <p className={`text-[#7A6556] text-lg font-light max-w-lg mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>Book your IV hydration session today. Walk in, relax, and walk out feeling renewed.</p>
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
          <a href="tel:5105984921" className="group flex items-center gap-3 bg-[#2C1A0E] text-[#F0E8DA] px-10 py-[18px] text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#B8925A] transition-colors duration-400"><Ph/> Call (510) 598-4921 <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span></a>
          <a href="/contact" className="flex items-center gap-2 border border-[#B8925A]/50 text-[#B8925A] px-10 py-[18px] text-[11px] font-bold tracking-[0.2em] uppercase hover:border-[#B8925A] hover:bg-[#B8925A]/5 transition-all duration-300">Send a Message</a>
        </div>
        <p className={`mt-7 text-[10px] tracking-[0.2em] uppercase text-[#7A6556]/45 transition-all duration-700 delay-400 ${v?"opacity-100":"opacity-0"}`}>Mon – Fri · 9:30 AM – 5:30 PM · 680 Mowry Ave, Fremont, CA · Telehealth Statewide CA</p>
      </div>
    </section>
  );
}
function Ph(){return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 2.93h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>;}
function Dm({size=8}){return <svg width={size} height={size} viewBox="0 0 10 10" fill="#B8925A"><polygon points="5,0 10,5 5,10 0,5"/></svg>;}
const CSS=`*{cursor:none !important;}@keyframes fadeUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}@keyframes floatOrb{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(22px,-30px) scale(1.06)}66%{transform:translate(-14px,18px) scale(0.94)}}@keyframes floatBadge{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}@keyframes scrollLine{0%{transform:translateY(-100%)}100%{transform:translateY(200%)}}`;