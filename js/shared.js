/* ═══════════════════════════════════════
   JobVault — Shared JS (all pages)
   ═══════════════════════════════════════ */

/* ── SVG ICONS ── */
const IC = {
  mapPin:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  briefcase:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  search:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  send:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  chevronDown:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevronRight:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  arrowRight:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  check:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  x:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  bookmark:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  mapPinLg:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  mail:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  phone:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.79 19.79 19.79 0 0 1 1.61 1.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>`,
  clock:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  code:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  pen:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  barChart:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,
  heart:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  trendingUp:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  megaphone:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`,
  cpu:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/></svg>`,
  shield:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  layers:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  cloud:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
  smartphone:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
  bookOpen:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  target:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  building:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M12 14h.01M8 14h.01M16 14h.01"/></svg>`,
  users:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  linkedin:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  twitter:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l16 16M4 20L20 4"/></svg>`,
  facebook:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  instagram:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
};

/* ── SHARED DATA ── */
const JOBS = [
  {id:1,title:"Senior Frontend Engineer",company:"NovaTech",logo:"NT",logoColor:"#1a3a5c",logoBg:"rgba(40,207,200,.2)",location:"Lusaka",type:"hybrid",industry:"tech",contract:"Full-time",salary:"K 18,000 – K 22,000/mo",posted:"2 days ago",isNew:true,desc:"Join our product team building next-generation web experiences used by thousands. You'll own the frontend architecture and collaborate directly with design and backend teams.",reqs:["5+ years of React / TypeScript experience","Strong eye for accessible, performant UI","Experience with design systems","Familiarity with GraphQL & REST APIs"]},
  {id:2,title:"Product Designer",company:"PixelFlow",logo:"PF",logoColor:"#3a1a5c",logoBg:"rgba(232,93,122,.2)",location:"Remote",type:"remote",industry:"design",contract:"Full-time",salary:"K 14,000 – K 18,000/mo",posted:"1 day ago",isNew:true,desc:"Shape the look and feel of a fast-growing SaaS platform. You'll run user research, create wireframes and prototypes, and work closely with engineering.",reqs:["3+ years of product design experience","Proficient in Figma","Portfolio demonstrating end-to-end design process","Knowledge of design systems"]},
  {id:3,title:"Data Analyst",company:"Meridian Analytics",logo:"MA",logoColor:"#1a4a2a",logoBg:"rgba(52,201,127,.2)",location:"Lusaka",type:"onsite",industry:"finance",contract:"Full-time",salary:"K 12,000 – K 16,000/mo",posted:"3 days ago",isNew:false,desc:"Transform raw data into actionable insights for financial services clients. You'll build dashboards, conduct cohort analyses, and present findings to stakeholders.",reqs:["Strong SQL and Python/R skills","Experience with Tableau or Power BI","Statistical analysis background","Finance domain knowledge a plus"]},
  {id:4,title:"DevOps Engineer",company:"CloudShift",logo:"CS",logoColor:"#4a2a1a",logoBg:"rgba(240,168,64,.2)",location:"Remote",type:"remote",industry:"tech",contract:"Contract",salary:"K 900 – K 1,100/day",posted:"Today",isNew:true,desc:"Build and maintain resilient cloud infrastructure. Work with Kubernetes, Terraform, and AWS to streamline CI/CD pipelines for a global engineering team.",reqs:["AWS/GCP certification or equivalent","Proficient in Terraform and Kubernetes","Experience with CI/CD toolchains","Strong scripting ability (Bash, Python)"]},
  {id:5,title:"Content Strategist",company:"BrightSpark Media",logo:"BS",logoColor:"#1a2a4a",logoBg:"rgba(40,207,200,.15)",location:"Lusaka",type:"hybrid",industry:"marketing",contract:"Part-time",salary:"K 6,000 – K 9,000/mo",posted:"5 days ago",isNew:false,desc:"Develop and execute a content strategy that drives organic growth. Manage a small team of writers and oversee the editorial calendar.",reqs:["4+ years in content marketing","Strong writing and editing skills","SEO knowledge and analytics experience","Cross-functional collaboration"]},
  {id:6,title:"Clinical Data Manager",company:"HealthBridge",logo:"HB",logoColor:"#2a1a4a",logoBg:"rgba(232,93,122,.15)",location:"Ndola",type:"onsite",industry:"health",contract:"Full-time",salary:"K 13,000 – K 17,000/mo",posted:"4 days ago",isNew:false,desc:"Oversee clinical trial data integrity. Work with sponsors, CROs, and statisticians to ensure accurate data collection and reporting.",reqs:["3+ years in clinical data management","CCDM certification preferred","Experience with EDC systems","Knowledge of GCP guidelines"]},
  {id:7,title:"Machine Learning Engineer",company:"Synaptic AI",logo:"SA",logoColor:"#3a3a1a",logoBg:"rgba(240,168,64,.18)",location:"Remote",type:"remote",industry:"tech",contract:"Full-time",salary:"K 20,000 – K 26,000/mo",posted:"Today",isNew:true,desc:"Build and productionise ML models powering our recommendation engine. Own the full ML lifecycle from research to deployment.",reqs:["Strong Python & PyTorch/TensorFlow","Experience deploying models at scale","Familiarity with MLOps practices","MSc or PhD preferred"]},
  {id:8,title:"UX Researcher",company:"Crestline Products",logo:"CP",logoColor:"#1a3a3a",logoBg:"rgba(52,201,127,.15)",location:"Kitwe",type:"hybrid",industry:"design",contract:"Full-time",salary:"K 11,000 – K 15,000/mo",posted:"2 days ago",isNew:false,desc:"Lead mixed-methods research to uncover user needs and improve product decisions. Own the research roadmap and evangelise a user-centred culture.",reqs:["4+ years of UX research experience","Proficient in Dovetail or UserTesting","Skilled in qualitative and quantitative methods","Strong stakeholder management"]},
  {id:9,title:"Network Administrator",company:"ZedNet",logo:"ZN",logoColor:"#1a3050",logoBg:"rgba(40,207,200,.18)",location:"Lusaka",type:"onsite",industry:"tech",contract:"Full-time",salary:"K 10,000 – K 14,000/mo",posted:"6 days ago",isNew:false,desc:"Manage and maintain network infrastructure across multiple sites. Troubleshoot connectivity issues and ensure 99.9% uptime for all services.",reqs:["Cisco CCNA or equivalent","3+ years network administration","Experience with firewalls and VPNs","Strong documentation skills"]},
  {id:10,title:"Finance Manager",company:"Meridian Analytics",logo:"MA",logoColor:"#1a4a2a",logoBg:"rgba(52,201,127,.2)",location:"Lusaka",type:"onsite",industry:"finance",contract:"Full-time",salary:"K 22,000 – K 28,000/mo",posted:"1 week ago",isNew:false,desc:"Lead the finance function for a fast-growing analytics firm. Manage reporting, budgeting, and compliance across all business units.",reqs:["ACCA or CIMA qualified","5+ years finance experience","Strong Excel and ERP skills","Experience with Zambian tax regulations"]},
  {id:11,title:"HR Business Partner",company:"NovaTech",logo:"NT",logoColor:"#1a3a5c",logoBg:"rgba(40,207,200,.2)",location:"Lusaka",type:"hybrid",industry:"hr",contract:"Full-time",salary:"K 12,000 – K 16,000/mo",posted:"3 days ago",isNew:false,desc:"Partner with business leaders to drive talent strategies. Own recruitment, performance management, and employee engagement initiatives.",reqs:["Degree in HR or related field","4+ years HRBP experience","Knowledge of Zambian labour law","Strong interpersonal skills"]},
  {id:12,title:"Mobile Developer",company:"PixelFlow",logo:"PF",logoColor:"#3a1a5c",logoBg:"rgba(232,93,122,.2)",location:"Remote",type:"remote",industry:"tech",contract:"Contract",salary:"K 700 – K 900/day",posted:"Today",isNew:true,desc:"Build cross-platform mobile applications for our growing product suite using React Native. Work with designers and backend engineers in an agile team.",reqs:["3+ years React Native experience","Published apps on iOS and Android","Experience with REST APIs","TypeScript proficiency"]},
];

const COMPANIES = [
  {name:"NovaTech",logo:"NT",industry:"Software & SaaS",jobs:24,employees:"50–200",founded:"2016",rating:4.6,logoBg:"rgba(40,207,200,.2)",location:"Lusaka",desc:"NovaTech builds enterprise software solutions for businesses across Southern Africa, specialising in cloud-based platforms and custom software development."},
  {name:"HealthBridge",logo:"HB",industry:"Healthcare Tech",jobs:18,employees:"100–500",founded:"2019",rating:4.8,logoBg:"rgba(232,93,122,.2)",location:"Ndola",desc:"HealthBridge connects patients and healthcare providers through innovative digital health platforms, improving access to quality healthcare across Zambia."},
  {name:"Meridian Analytics",logo:"MA",industry:"Finance & Data",jobs:11,employees:"20–100",founded:"2014",rating:4.4,logoBg:"rgba(52,201,127,.2)",location:"Lusaka",desc:"Meridian delivers financial analytics and business intelligence tools to banks, insurers, and fintechs operating in the Zambian and wider African markets."},
  {name:"PixelFlow",logo:"PF",industry:"Design & Creative",jobs:9,employees:"10–50",founded:"2020",rating:4.7,logoBg:"rgba(240,168,64,.2)",location:"Remote",desc:"PixelFlow is a product design and development studio creating beautiful digital experiences for startups and scale-ups across Africa and beyond."},
  {name:"CloudShift",logo:"CS",industry:"Cloud Infrastructure",jobs:31,employees:"200–1000",founded:"2017",rating:4.5,logoBg:"rgba(40,207,200,.15)",location:"Lusaka",desc:"CloudShift provides managed cloud infrastructure, DevOps consulting, and cybersecurity services to enterprises seeking digital transformation."},
  {name:"Synaptic AI",logo:"SA",industry:"Artificial Intelligence",jobs:15,employees:"20–80",founded:"2021",rating:4.9,logoBg:"rgba(232,93,122,.15)",location:"Remote",desc:"Synaptic AI develops cutting-edge machine learning solutions for agriculture, logistics, and retail sectors across sub-Saharan Africa."},
  {name:"BrightSpark Media",logo:"BS",industry:"Marketing & Media",jobs:7,employees:"10–40",founded:"2018",rating:4.3,logoBg:"rgba(240,168,64,.15)",location:"Lusaka",desc:"BrightSpark is Zambia's leading digital marketing agency, helping brands grow through content strategy, social media, and performance marketing."},
  {name:"ZedNet",logo:"ZN",industry:"Telecommunications",jobs:12,employees:"100–300",founded:"2012",rating:4.2,logoBg:"rgba(40,207,200,.18)",location:"Lusaka",desc:"ZedNet delivers enterprise networking, ISP services, and IT infrastructure solutions to corporations and government institutions nationwide."},
];

const CATEGORIES = [
  {iconKey:"code",name:"Software Engineering",count:"4,230 jobs",iconBg:"rgba(40,207,200,.12)",iconColor:"var(--teal)"},
  {iconKey:"pen",name:"Design & UX",count:"1,890 jobs",iconBg:"rgba(232,93,122,.12)",iconColor:"var(--rose)"},
  {iconKey:"barChart",name:"Data & Analytics",count:"2,100 jobs",iconBg:"rgba(52,201,127,.12)",iconColor:"var(--green)"},
  {iconKey:"heart",name:"Healthcare",count:"1,540 jobs",iconBg:"rgba(240,168,64,.12)",iconColor:"var(--gold)"},
  {iconKey:"trendingUp",name:"Finance & Accounting",count:"1,320 jobs",iconBg:"rgba(40,207,200,.12)",iconColor:"var(--teal)"},
  {iconKey:"megaphone",name:"Marketing & Growth",count:"2,080 jobs",iconBg:"rgba(232,93,122,.12)",iconColor:"var(--rose)"},
  {iconKey:"cpu",name:"AI & Machine Learning",count:"980 jobs",iconBg:"rgba(52,201,127,.12)",iconColor:"var(--green)"},
  {iconKey:"shield",name:"Cybersecurity",count:"720 jobs",iconBg:"rgba(240,168,64,.12)",iconColor:"var(--gold)"},
  {iconKey:"layers",name:"Product Management",count:"1,650 jobs",iconBg:"rgba(40,207,200,.12)",iconColor:"var(--teal)"},
  {iconKey:"cloud",name:"Cloud & DevOps",count:"1,440 jobs",iconBg:"rgba(232,93,122,.12)",iconColor:"var(--rose)"},
  {iconKey:"smartphone",name:"Mobile Development",count:"860 jobs",iconBg:"rgba(52,201,127,.12)",iconColor:"var(--green)"},
  {iconKey:"bookOpen",name:"Education & Training",count:"530 jobs",iconBg:"rgba(240,168,64,.12)",iconColor:"var(--gold)"},
];

/* ── HELPERS ── */
function badgeClass(type){return type==="remote"?"badge-remote":type==="onsite"?"badge-onsite":"badge-hybrid";}

function jobCardHTML(j,root=''){
  return `<div class="job-card" onclick="openModal(${j.id})">
    <div class="job-card-top">
      <div class="company-logo" style="background:${j.logoBg};color:${j.logoColor}">${j.logo}</div>
      <div class="job-badges">
        <span class="badge ${badgeClass(j.type)}">${j.type.charAt(0).toUpperCase()+j.type.slice(1)}</span>
        ${j.isNew?'<span class="badge badge-new">New</span>':''}
      </div>
    </div>
    <div class="job-title">${j.title}</div>
    <div class="job-company">${j.company}</div>
    <div class="job-meta">
      <span class="job-meta-item">${IC.mapPin} ${j.location}</span>
      <span class="job-meta-item">${IC.briefcase} ${j.contract}</span>
    </div>
    <div class="job-salary">${j.salary}</div>
    <div class="job-footer">
      <span class="job-posted">Posted ${j.posted}</span>
      <button class="btn-apply" onclick="event.stopPropagation();openModal(${j.id})">View Role</button>
    </div>
  </div>`;}

/* ── MOBILE NAV ── */
function initNav(){
  const hamburger=document.getElementById('hamburger');
  const mobileMenu=document.getElementById('mobileMenu');
  const navEl=document.querySelector('nav');
  if(!hamburger||!mobileMenu)return;
  hamburger.addEventListener('click',()=>{
    const isOpen=mobileMenu.classList.contains('open');
    if(isOpen){mobileMenu.classList.remove('open');hamburger.classList.remove('open');hamburger.setAttribute('aria-expanded','false');}
    else{mobileMenu.classList.add('open');hamburger.classList.add('open');hamburger.setAttribute('aria-expanded','true');}
  });
  document.addEventListener('click',e=>{
    if(navEl&&!navEl.contains(e.target)&&!mobileMenu.contains(e.target))closeMobileMenu();
  });
}
function closeMobileMenu(){
  const h=document.getElementById('hamburger');
  const m=document.getElementById('mobileMenu');
  if(m)m.classList.remove('open');
  if(h){h.classList.remove('open');h.setAttribute('aria-expanded','false');}
}

/* ── MODAL ── */
function openModal(id){
  const j=JOBS.find(x=>x.id===id);if(!j)return;
  document.getElementById('modal-title').textContent=j.title;
  document.getElementById('modal-company').textContent=`${j.company} · ${j.location} · ${j.contract}`;
  document.getElementById('modal-tags').innerHTML=`
    <span class="badge ${badgeClass(j.type)}">${j.type.charAt(0).toUpperCase()+j.type.slice(1)}</span>
    ${j.isNew?'<span class="badge badge-new">New</span>':''}
    <span class="badge" style="background:rgba(255,255,255,.07);color:var(--soft)">${j.industry.charAt(0).toUpperCase()+j.industry.slice(1)}</span>`;
  document.getElementById('modal-desc').textContent=j.desc;
  document.getElementById('modal-reqs').innerHTML=j.reqs.map(r=>`<li>${r}</li>`).join('');
  document.getElementById('modal-salary').textContent=j.salary;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(e){if(e.target.id==='modal-overlay')closeModalDirect();}
function closeModalDirect(){document.getElementById('modal-overlay').classList.remove('open');document.body.style.overflow='';}
function applyNow(){closeModalDirect();showToast('Application submitted successfully!');}

/* ── TOAST ── */
function showToast(msg){
  document.getElementById('toast-msg').textContent=msg;
  const t=document.getElementById('toast');
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3500);
}

/* ── SCROLL FADE ── */
function initScrollFade(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(en=>{if(en.isIntersecting)en.target.classList.add('visible');});
  },{threshold:0.08});
  document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));
}

/* ── FOOTER HTML ── */
function renderFooter(root=''){
  const f=document.getElementById('site-footer');
  if(!f)return;
  f.innerHTML=`
  <div class="footer-top">
    <div class="footer-brand">
      <div class="footer-logo">Job<span>Vault</span></div>
      <p class="footer-tagline">A unified platform connecting talented Zambians with world-class opportunities. Your career journey starts here.</p>
    </div>
    <div class="footer-col"><h4>For Job Seekers</h4><ul>
      <li><a href="${root}jobs.html">Browse Jobs</a></li>
      <li><a href="${root}jobs.html">Featured Roles</a></li>
      <li><a href="${root}index.html#categories">Categories</a></li>
      <li><a href="${root}contact.html">Career Tips</a></li>
      <li><a href="${root}contact.html">CV Builder</a></li>
    </ul></div>
    <div class="footer-col"><h4>For Employers</h4><ul>
      <li><a href="${root}contact.html">Post a Job</a></li>
      <li><a href="${root}companies.html">Company Profiles</a></li>
      <li><a href="${root}contact.html">Talent Search</a></li>
      <li><a href="${root}contact.html">Pricing</a></li>
      <li><a href="${root}contact.html">Recruiter Tools</a></li>
    </ul></div>
    <div class="footer-col"><h4>Company</h4><ul>
      <li><a href="${root}about.html">About Us</a></li>
      <li><a href="${root}contact.html">Contact</a></li>
      <li><a href="${root}about.html">Careers</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Terms of Service</a></li>
    </ul></div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">© 2026 JobVault Zambia. All rights reserved.</div>
    <div class="footer-socials">
      <a class="social-btn" href="#" title="LinkedIn">${IC.linkedin}</a>
      <a class="social-btn" href="#" title="Twitter">${IC.twitter}</a>
      <a class="social-btn" href="#" title="Facebook">${IC.facebook}</a>
      <a class="social-btn" href="#" title="Instagram">${IC.instagram}</a>
    </div>
  </div>`;}

/* ── NAV HTML ── */
function renderNav(active, root=''){
  const pages=[
    {href:`${root}index.html`,label:'Home'},
    {href:`${root}jobs.html`,label:'Browse Jobs'},
    {href:`${root}companies.html`,label:'Companies'},
    {href:`${root}categories.html`,label:'Categories'},
    {href:`${root}about.html`,label:'About'},
    {href:`${root}contact.html`,label:'Contact'},
  ];
  const links=pages.map(p=>`<a href="${p.href}" class="${p.label===active?'active':''}">${p.label}</a>`).join('');
  const mlinks=pages.map(p=>`<a href="${p.href}" class="${p.label===active?'active':''}" onclick="closeMobileMenu()">${p.label}</a>`).join('');
  document.getElementById('nav-placeholder').innerHTML=`
  <nav>
    <a href="${root}index.html" class="nav-logo">Job<span>Vault</span></a>
    <div class="nav-links">${links}</div>
    <div class="nav-right"><a href="${root}contact.html" class="nav-cta">Post a Job</a></div>
    <button class="nav-hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu" id="mobileMenu">${mlinks}<a href="${root}contact.html" class="mob-cta" onclick="closeMobileMenu()">Post a Job</a></div>`;
}

/* ── MODAL HTML ── */
function renderModal(){
  const m=document.getElementById('modal-placeholder');
  if(!m)return;
  m.innerHTML=`
  <div id="modal-overlay" onclick="closeModal(event)">
    <div class="modal">
      <div class="modal-header">
        <div class="modal-title" id="modal-title"></div>
        <button class="modal-close" onclick="closeModalDirect()" aria-label="Close">${IC.x}</button>
      </div>
      <div class="modal-company" id="modal-company"></div>
      <div class="modal-tags" id="modal-tags"></div>
      <div class="modal-section"><h4>About the Role</h4><p id="modal-desc"></p></div>
      <div class="modal-section"><h4>Requirements</h4><ul id="modal-reqs"></ul></div>
      <div class="modal-section"><h4>Compensation</h4><p id="modal-salary"></p></div>
      <div class="modal-footer">
        <button class="btn-modal-save" onclick="closeModalDirect()">${IC.bookmark} Save for Later</button>
        <button class="btn-modal-apply" onclick="applyNow()">Apply Now ${IC.arrowRight}</button>
      </div>
    </div>
  </div>`;
}

/* ── TOAST HTML ── */
function renderToast(){
  const t=document.getElementById('toast-placeholder');
  if(!t)return;
  t.innerHTML=`<div id="toast">${IC.check} <span id="toast-msg"></span></div>`;
}

