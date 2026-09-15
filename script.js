// ─── App state ─────────────────────────────────────────────────────────────
const state = {
  lang: 'en',
  usertype: 'start',
  time: 'parttime',
  biz: 'solo',
  name: 'Priya Sharma',
  location: 'Kolkata, West Bengal',
  budget: 300000,
  interests: ['food'],
  selectedBiz: 'cloud-kitchen',
  obStep: 0,
};

const OPPORTUNITIES = [
  { id:'cloud-kitchen', name:'Affordable Cloud Kitchen', interest:'food', score:89, demand:'High', competition:'Medium', investment:150000, profit:35000 },
  { id:'organic-grocery', name:'Organic Grocery Store', interest:'retail', score:87, demand:'High', competition:'Medium', investment:200000, profit:42000 },
  { id:'mobile-repair', name:'Mobile Repair Service', interest:'tech', score:81, demand:'High', competition:'High', investment:80000, profit:28000 },
  { id:'dairy-delivery', name:'Dairy & Milk Delivery', interest:'agri', score:78, demand:'High', competition:'Medium', investment:120000, profit:24000 },
  { id:'digital-service', name:'Digital Service Center', interest:'education', score:74, demand:'Medium', competition:'Medium', investment:95000, profit:22000 },
];

const TRANSLATIONS = {
  en: {
    tag: 'AI-powered · Made for Bharat',
    h1: 'Your AI Partner for <span class="accent">Starting</span> and <span class="accent">Growing</span> a Business',
    sub: 'Discover the right business opportunity, plan your finances, find suitable government schemes, and grow with AI-powered guidance.',
    ctaPrimary: 'Find My Best Business',
    ctaSecondary: 'Check Business Health',
    trust1: 'Trusted guidance', trust2: '8+ Indian languages', trust3: 'Scheme matching',
    jKicker: 'The VyaparSathi Journey',
    jTitle: 'Right Opportunity → Plan → Funding → Guidance → Growth',
    tagline: 'Sahi Marg, Sahi Saathi',
    ctaBlurb: 'Start your business journey with an advisor that understands your area, your language and your budget.',
  },
  hi: {
    tag: 'एआई-संचालित · भारत के लिए बना',
    h1: 'व्यापार <span class="accent">शुरू करने</span> और <span class="accent">बढ़ाने</span> के लिए आपका एआई साथी',
    sub: 'सही व्यापार अवसर खोजें, अपने वित्त की योजना बनाएँ, उपयुक्त सरकारी योजनाएँ पाएँ, और एआई मार्गदर्शन के साथ आगे बढ़ें।',
    ctaPrimary: 'मेरा सबसे अच्छा व्यापार खोजें',
    ctaSecondary: 'व्यापार स्वास्थ्य जाँचें',
    trust1: 'भरोसेमंद मार्गदर्शन', trust2: '8+ भारतीय भाषाएँ', trust3: 'योजना मिलान',
    jKicker: 'व्यापारसाथी यात्रा',
    jTitle: 'सही अवसर → योजना → धन → मार्गदर्शन → विकास',
    tagline: 'सही मार्ग, सही साथी',
    ctaBlurb: 'एक ऐसे सलाहकार के साथ अपनी व्यापार यात्रा शुरू करें जो आपके क्षेत्र, आपकी भाषा और आपके बजट को समझता है।',
  },
  bn: {
    tag: 'এআই-চালিত · ভারতের জন্য তৈরি',
    h1: 'ব্যবসা <span class="accent">শুরু</span> এবং <span class="accent">বৃদ্ধির</span> জন্য আপনার এআই সঙ্গী',
    sub: 'সঠিক ব্যবসার সুযোগ খুঁজুন, আপনার অর্থের পরিকল্পনা করুন, উপযুক্ত সরকারি প্রকল্প খুঁজুন, এবং এআই নির্দেশনায় এগিয়ে যান।',
    ctaPrimary: 'আমার সেরা ব্যবসা খুঁজুন',
    ctaSecondary: 'ব্যবসার স্বাস্থ্য পরীক্ষা করুন',
    trust1: 'নির্ভরযোগ্য নির্দেশনা', trust2: '৮+ ভারতীয় ভাষা', trust3: 'প্রকল্প মিলান',
    jKicker: 'ব্যাপারসাথী যাত্রা',
    jTitle: 'সঠিক সুযোগ → পরিকল্পনা → তহবিল → নির্দেশনা → বৃদ্ধি',
    tagline: 'সঠিক পথ, সঠিক সঙ্গী',
    ctaBlurb: 'এমন একজন উপদেষ্টার সাথে আপনার ব্যবসা যাত্রা শুরু করুন যিনি আপনার এলাকা, ভাষা এবং বাজেট বোঝেন।',
  }
};

// ─── Navigation ─────────────────────────────────────────────────────────────
function showLanding() {
  document.getElementById('landing-screen').style.display = '';
  document.getElementById('onboarding-screen').style.display = 'none';
  document.getElementById('dashboard-screen').style.display = 'none';
}
function showOnboarding() {
  document.getElementById('landing-screen').style.display = 'none';
  document.getElementById('onboarding-screen').style.display = 'flex';
  document.getElementById('dashboard-screen').style.display = 'none';
  state.obStep = 0; renderObStep();
}
function showDashboard() {
  document.getElementById('landing-screen').style.display = 'none';
  document.getElementById('onboarding-screen').style.display = 'none';
  document.getElementById('dashboard-screen').style.display = 'block';
  renderDashboard();
}
function goHome() {
  showPage('dashboard');
}

let navHistory = ['dashboard'];
function navTo(id, btnEl) {
  closeDropdowns();
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  navHistory.push(id);
  showPage(id);
}
function historyBack() {
  if (navHistory.length > 1) { navHistory.pop(); showPage(navHistory[navHistory.length-1]); }
}
function showPage(id) {
  const pages = { dashboard: true };
  if (id === 'dashboard') {
    document.getElementById('page-dashboard').style.display = '';
    document.getElementById('page-other').style.display = 'none';
  } else {
    document.getElementById('page-dashboard').style.display = 'none';
    document.getElementById('page-other').style.display = '';
    const titles = {
      journey: ['🗺️','Business Journey','Map your complete business path from discovery to growth.'],
      opp: ['📍','Opportunities','Hyper-local business ideas ranked for your budget and interests.'],
      feas: ['📊','Feasibility Analysis','AI-powered feasibility score with detailed breakdown.'],
      plan: ['📋','Business Plan','Auto-generated business plan ready for your chosen opportunity.'],
      finance: ['₹','Finance & Funding','Budget planning, funding mix, and ROI projections.'],
      schemes: ['🏛️','Schemes & Loans','Government schemes you are eligible for — PMEGP, MUDRA and more.'],
      launch: ['🚀','Launch Checklist','Step-by-step launch checklist to go live confidently.'],
      doctor: ['🩺','Business Doctor','Diagnose what is slowing your business and get AI prescriptions.'],
      health: ['❤️','Business Health','Real-time health score across sales, finance, growth and risk.'],
      sim: ['🔬','Simulator','Simulate revenue, pricing and growth scenarios.'],
      community: ['👥','Community','Connect with entrepreneurs, get mentors and share experiences.'],
      settings: ['⚙️','Settings','Manage your profile, language, and preferences.'],
    };
    const t = titles[id] || ['📄', id, ''];
    document.getElementById('other-icon').textContent = t[0];
    document.getElementById('other-title').textContent = t[1];
    document.getElementById('other-desc').textContent = t[2];
  }
}

// ─── Language ────────────────────────────────────────────────────────────────
function toggleLangDropdown() {
  document.getElementById('lang-dropdown').classList.toggle('open');
}
function setLang(code, label) {
  state.lang = code;
  document.getElementById('lang-label').textContent = label.split(' ')[0];
  document.getElementById('cur-lang-label').textContent = label.split(' ')[0];
  document.getElementById('lang-dropdown').classList.remove('open');
  applyTranslations(code);
}
function applyTranslations(code) {
  const t = TRANSLATIONS[code] || TRANSLATIONS.en;
  const el = (id) => document.getElementById(id);
  if (el('land-tag')) el('land-tag').textContent = t.tag;
  if (el('hero-h1')) el('hero-h1').innerHTML = t.h1;
  if (el('hero-sub')) el('hero-sub').textContent = t.sub;
  if (el('cta-primary')) el('cta-primary').textContent = t.ctaPrimary;
  if (el('cta-primary-2')) el('cta-primary-2').textContent = t.ctaPrimary;
  if (el('cta-secondary')) el('cta-secondary').textContent = t.ctaSecondary;
  if (el('trust1')) el('trust1').textContent = t.trust1;
  if (el('trust2')) el('trust2').textContent = t.trust2;
  if (el('trust3')) el('trust3').textContent = t.trust3;
  if (el('journey-kicker')) el('journey-kicker').textContent = t.jKicker;
  if (el('journey-title')) el('journey-title').textContent = t.jTitle;
  if (el('tagline')) el('tagline').textContent = t.tagline;
  if (el('cta-blurb')) el('cta-blurb').textContent = t.ctaBlurb;
}

// ─── Dropdowns ───────────────────────────────────────────────────────────────
function toggleDropdown(id) {
  const el = document.getElementById(id);
  const wasOpen = el.classList.contains('open');
  closeDropdowns();
  if (!wasOpen) el.classList.add('open');
}
function closeDropdowns() {
  document.querySelectorAll('.dropdown-menu,.profile-dropdown,.lang-dropdown').forEach(d => d.classList.remove('open'));
}
function toggleLangSwitcher() {
  const el = document.getElementById('lang-switcher-inline');
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}
function closeLangSwitcher() {
  document.getElementById('lang-switcher-inline').style.display = 'none';
}
document.addEventListener('click', (e) => {
  if (!e.target.closest('.lang-picker') && !e.target.closest('.notif-btn') && !e.target.closest('.topbar-avatar')
      && !e.target.closest('.dropdown-menu') && !e.target.closest('.profile-dropdown')) {
    closeDropdowns();
  }
  if (!e.target.closest('.lang-picker') && !e.target.closest('#lang-dropdown')) {
    document.getElementById('lang-dropdown')?.classList.remove('open');
  }
});

// ─── Onboarding ──────────────────────────────────────────────────────────────
const OB_STEPS = 5;
function renderObStep() {
  for (let i = 0; i < OB_STEPS; i++) {
    const el = document.getElementById('ob-step-'+i);
    if (el) el.style.display = i === state.obStep ? '' : 'none';
  }
  document.getElementById('ob-progress').style.width = ((state.obStep+1)/OB_STEPS*100)+'%';
  document.getElementById('ob-step-label').textContent = 'Step '+(state.obStep+1)+' of '+OB_STEPS;
}
function obNext() {
  if (state.obStep === 1) {
    state.name = document.getElementById('ob-name').value || 'Priya Sharma';
    state.location = document.getElementById('ob-location').value || 'Kolkata, West Bengal';
  }
  if (state.obStep < OB_STEPS-1) { state.obStep++; renderObStep(); }
}
function obBack() { if (state.obStep > 0) { state.obStep--; renderObStep(); } }
function selectChoice(group, val, btn) {
  const container = btn.closest('.ob-choice-grid') || btn.closest('#time-choices') || btn.closest('#biz-choices');
  if (container) container.querySelectorAll('.ob-choice').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state[group] = val;
}
function toggleInterest(id, btn) {
  btn.classList.toggle('selected');
  const idx = state.interests.indexOf(id);
  if (idx === -1) state.interests.push(id); else state.interests.splice(idx,1);
}
function selectBudget(val, btn) {
  document.querySelectorAll('.budget-option').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.budget = val;
  document.getElementById('ob-budget-custom').value = '';
}
function customBudget(val) {
  document.querySelectorAll('.budget-option').forEach(b => b.classList.remove('selected'));
  state.budget = parseInt(val) || 300000;
}
function finishOnboarding() {
  state.name = document.getElementById('ob-name').value || state.name;
  state.location = document.getElementById('ob-location').value || state.location;
  showDashboard();
}

// ─── Score ring SVG ───────────────────────────────────────────────────────────
function scoreRingSVG(value, size, color, label) {
  const r = (size-16)/2, cx = size/2, cy = size/2;
  const circ = 2*Math.PI*r;
  const offset = circ - (value/100)*circ;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#f3f4f6" stroke-width="10"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color||'#047857'}" stroke-width="10"
      stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round"
      transform="rotate(-90 ${cx} ${cy})" style="transition:stroke-dashoffset 0.8s ease"/>
    <text x="${cx}" y="${cy-6}" text-anchor="middle" font-family="Lexend,sans-serif" font-size="22" font-weight="800" fill="#111827">${value}</text>
    <text x="${cx}" y="${cy+14}" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#6b7280">${label||'out of 100'}</text>
  </svg>`;
}

// ─── Rupee formatting ─────────────────────────────────────────────────────────
function rupeeShort(n) {
  if (n >= 10000000) return '₹'+(n/10000000).toFixed(2)+' Cr';
  if (n >= 100000) return '₹'+(n/100000).toFixed(n>=1000000?1:2)+' L';
  if (n >= 1000) return '₹'+(n/1000).toFixed(0)+'K';
  return '₹'+n;
}
function rupee(n) { return '₹'+n.toLocaleString('en-IN', {maximumFractionDigits:0}); }

// ─── Dashboard render ─────────────────────────────────────────────────────────
const TRACKER_STAGES = [
  {label:'Opportunity',page:'opp'},
  {label:'Feasibility',page:'feas'},
  {label:'Business Plan',page:'plan'},
  {label:'Funding',page:'finance'},
  {label:'Launch',page:'launch'},
  {label:'Growth',page:'sim'},
];
const CURRENT_STAGE = 2;

function renderDashboard() {
  // Profile
  const initials = (state.name||'U').charAt(0).toUpperCase();
  ['sidebar-avatar','topbar-avatar','profile-drop-avatar'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = initials;
  });
  const firstName = state.name.split(' ')[0];
  document.getElementById('dash-name').textContent = firstName;
  document.getElementById('sidebar-name').textContent = state.name;
  document.getElementById('sidebar-loc').textContent = state.location;
  document.getElementById('profile-drop-name').textContent = state.name;
  document.getElementById('profile-drop-loc').textContent = state.location;
  document.getElementById('score-location').textContent = state.location.split(',')[0] || 'Your area';

  // Journey tracker
  const trackerEl = document.getElementById('tracker-steps');
  trackerEl.innerHTML = '';
  TRACKER_STAGES.forEach((s, i) => {
    const step = document.createElement('div');
    step.className = 'flex items-center flex-1';
    const circ = document.createElement('button');
    circ.className = 'tracker-step';
    circ.onclick = () => navTo(s.page, null);
    let circClass = 'step-pending', labelClass = '';
    if (i < CURRENT_STAGE) { circClass = 'step-done'; labelClass = 'step-done-label'; }
    else if (i === CURRENT_STAGE) { circClass = 'step-current'; labelClass = 'step-current-label'; }
    circ.innerHTML = `
      <div class="step-circle ${circClass}">${i < CURRENT_STAGE ? '✓' : i+1}</div>
      <span class="step-label ${labelClass}">${s.label}</span>`;
    step.appendChild(circ);
    if (i < TRACKER_STAGES.length-1) {
      const line = document.createElement('div');
      line.className = 'tracker-line '+(i < CURRENT_STAGE ? 'line-done' : 'line-pending');
      step.appendChild(line);
    }
    trackerEl.appendChild(step);
  });

  // Rank by interests
  const ranked = [...OPPORTUNITIES].sort((a,b) => {
    const am = state.interests.includes(a.interest)?1:0, bm = state.interests.includes(b.interest)?1:0;
    if (am !== bm) return bm-am; return b.score-a.score;
  });
  const top5 = ranked.slice(0,5);
  const top = ranked.find(o => o.id === state.selectedBiz) || ranked[0];

  // Score ring
  document.getElementById('score-ring-container').innerHTML = scoreRingSVG(top.score, 140, '#047857', 'out of 100');
  document.getElementById('health-ring-container').innerHTML = scoreRingSVG(82, 130, '#039855', 'healthy');
  document.getElementById('score-biz-name').textContent = top.name;

  // Suggested business stats
  document.getElementById('dash-biz-name').textContent = top.name;
  document.getElementById('dash-score').textContent = top.score;
  document.getElementById('dash-invest').textContent = rupeeShort(top.investment);
  document.getElementById('dash-profit').textContent = rupeeShort(top.profit)+'/mo';
  document.getElementById('dash-demand').innerHTML = `<span class="level-badge ${top.demand==='High'?'level-high-pos':top.demand==='Medium'?'level-med-pos':'level-low-pos'}">${top.demand}</span>`;
  document.getElementById('dash-comp').innerHTML = `<span class="level-badge ${top.competition==='Low'?'level-low-neg':top.competition==='Medium'?'level-med-neg':'level-high-neg'}">${top.competition}</span>`;
  const matchesInterest = state.interests.includes(top.interest);
  document.getElementById('interest-badge').style.display = matchesInterest ? '' : 'none';

  // Opp options
  const oppEl = document.getElementById('opp-options');
  oppEl.innerHTML = '';
  top5.forEach(o => {
    const selected = o.id === top.id;
    const fits = o.investment <= state.budget;
    const btn = document.createElement('button');
    btn.className = 'opp-option'+(selected?' selected':'');
    btn.innerHTML = `
      <span class="opp-score-box ${selected?'selected':'unselected'}">${o.score}</span>
      <span class="min-w-0 flex-1">
        <span class="opp-name truncate">${o.name}</span><br>
        <span class="opp-sub">${rupeeShort(o.investment)} · ${rupeeShort(o.profit)}/mo${state.interests.includes(o.interest)?' · <span style="color:var(--brand-700)">✦ your interest</span>':''}</span>
      </span>
      <span class="opp-fit ${fits?'fits':'over'}">${fits?'Fits':'Over'}</span>
      ${selected?'<span style="color:var(--brand-600);font-size:14px;">✓</span>':''}
    `;
    btn.onclick = () => { state.selectedBiz = o.id; renderDashboard(); };
    oppEl.appendChild(btn);
  });

  // Budget math
  const budget = state.budget, investment = top.investment;
  const fits = investment <= budget;
  const surplus = budget - investment;
  const usedPct = Math.min(100, Math.round(investment/Math.max(budget,1)*100));
  const loanNeeded = Math.max(0, investment - budget);
  const ownFunds = Math.min(budget, investment);
  const subsidy = Math.round(investment*0.35);
  const breakEven = Math.max(1, Math.ceil(investment/Math.max(top.profit,1)));
  const annualProfit = top.profit*12;
  const roi = Math.round(annualProfit/Math.max(investment,1)*100);

  document.getElementById('budget-biz-name').textContent = top.name;
  const fitBadge = document.getElementById('budget-fit-badge');
  fitBadge.textContent = fits ? 'Within your budget' : 'Needs extra funding';
  fitBadge.className = 'level-badge '+(fits?'level-low-neg':'level-high-neg');
  fitBadge.style.padding = '5px 14px'; fitBadge.style.fontSize = '13px';

  document.getElementById('b-budget').textContent = rupee(budget);
  document.getElementById('b-invest').textContent = rupee(investment);
  document.getElementById('b-surplus').textContent = rupee(Math.abs(surplus));
  document.getElementById('b-breakeven').textContent = breakEven+' mo';
  const bar = document.getElementById('budget-bar');
  bar.style.width = usedPct+'%';
  bar.className = 'budget-bar-fill'+(usedPct>=100?' over':'');
  document.getElementById('b-pct').textContent = usedPct+'%';

  document.getElementById('f-own').textContent = rupee(ownFunds);
  document.getElementById('f-subsidy').textContent = rupee(subsidy);
  document.getElementById('f-loan').textContent = rupee(loanNeeded);
  document.getElementById('b-roi').textContent = roi+'%';
  document.getElementById('b-invest-2').textContent = rupee(investment);

  // AI callout
  const city = state.location.split(',')[0] || 'your area';
  document.getElementById('ai-callout-text').textContent =
    `${top.name} is a strong fit for ${city} — ${top.demand.toLowerCase()} demand with ${top.competition.toLowerCase()} competition. Starting lean keeps costs low and break-even near ${breakEven} months.`;
}

// ─── Init ─────────────────────────────────────────────────────────────────────
showLanding();
