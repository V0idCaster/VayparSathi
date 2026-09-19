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
  launchChecklist: {},
  simUnits: 200,
  simPrice: 180,
  simCost: 90,
  communityPosts: [
    { name: 'Anita Devi', loc: 'Patna, Bihar', text: 'Started my tailoring unit 3 months ago using the PMEGP subsidy calculator here. Break-even hit early because I kept costs lean like the plan suggested.', likes: 24 },
    { name: 'Ramesh Yadav', loc: 'Lucknow, UP', text: 'Anyone else running a dairy delivery business? Looking for tips on reducing spoilage in summer months.', likes: 11 },
    { name: 'Fatima Sheikh', loc: 'Bhopal, MP', text: 'The feasibility score really did match reality for my cloud kitchen. Demand was exactly as predicted in my area.', likes: 18 },
  ],
  doctorSymptoms: [],
};

const OPPORTUNITIES = [
  { id:'cloud-kitchen', name:'Affordable Cloud Kitchen', interest:'food', score:89, demand:'High', competition:'Medium', investment:150000, profit:35000 },
  { id:'organic-grocery', name:'Organic Grocery Store', interest:'retail', score:87, demand:'High', competition:'Medium', investment:200000, profit:42000 },
  { id:'mobile-repair', name:'Mobile Repair Service', interest:'tech', score:81, demand:'High', competition:'High', investment:80000, profit:28000 },
  { id:'dairy-delivery', name:'Dairy & Milk Delivery', interest:'agri', score:78, demand:'High', competition:'Medium', investment:120000, profit:24000 },
  { id:'digital-service', name:'Digital Service Center', interest:'education', score:74, demand:'Medium', competition:'Medium', investment:95000, profit:22000 },
];

const SCHEMES = [
  { id:'pmegp', name:'PMEGP (Prime Minister\'s Employment Generation Programme)', desc:'Subsidy of 15–35% on project cost for new micro-enterprises.', maxInvestment:2500000, subsidyPct:0.25 },
  { id:'mudra-shishu', name:'MUDRA — Shishu Loan', desc:'Collateral-free loans up to ₹50,000 for very small businesses.', maxInvestment:50000, subsidyPct:0 },
  { id:'mudra-kishor', name:'MUDRA — Kishor Loan', desc:'Loans from ₹50,000 to ₹5 lakh for growing small businesses.', maxInvestment:500000, subsidyPct:0 },
  { id:'standup', name:'Stand-Up India', desc:'Loans between ₹10 lakh–₹1 crore for SC/ST and women entrepreneurs.', maxInvestment:10000000, subsidyPct:0 },
  { id:'nrlm', name:'DAY-NRLM (Rural Livelihood Mission)', desc:'Support and low-interest credit for rural self-help groups.', maxInvestment:1000000, subsidyPct:0.10 },
];

const LAUNCH_TASKS = [
  { id:'register', label:'Register your business (Udyam / GST if applicable)' },
  { id:'bankacct', label:'Open a current bank account' },
  { id:'location', label:'Finalise location / kitchen-shop setup' },
  { id:'supplier', label:'Lock in suppliers and pricing' },
  { id:'pricing', label:'Set your pricing and menu / catalog' },
  { id:'permits', label:'Get local permits and licenses (FSSAI etc. if food)' },
  { id:'marketing', label:'Set up WhatsApp Business / local marketing' },
  { id:'softlaunch', label:'Run a soft launch with 10–20 customers' },
];

const DOCTOR_SYMPTOMS = [
  { id:'low-sales', label:'Low or inconsistent sales' },
  { id:'cashflow', label:'Cash flow / running out of money' },
  { id:'no-customers', label:'Struggling to find new customers' },
  { id:'high-competition', label:'Too much local competition' },
  { id:'pricing', label:'Not sure if pricing is right' },
  { id:'time', label:'Not enough time to run everything' },
];

const DOCTOR_PRESCRIPTIONS = {
  'low-sales': 'Track which days/hours sell best and double down on marketing around them. Bundle slow-moving items with your bestsellers.',
  'cashflow': 'Move to weekly supplier payments instead of monthly, and ask regular customers for partial advance payments on large orders.',
  'no-customers': 'List your business on Google Maps and WhatsApp Business with photos. Ask your first 10 customers for referrals with a small discount incentive.',
  'high-competition': 'Differentiate on one thing only — speed, price, or quality — rather than competing on everything. Highlight it in every customer interaction.',
  'pricing': 'Recalculate cost-per-unit including your own time, then check 3 competitor prices nearby before settling on a number.',
  'time': 'Identify the one task eating the most hours and look for a low-cost way to delegate or automate it first.',
};

const TRANSLATIONS = {
  en: {
    tag: 'AI-powered · Made for Bharat',
    h1: 'Your AI Partner for <span class="accent">Starting</span> and <span class="accent">Growing</span> a Business',
    sub: 'Discover the right business opportunity, plan your finances, find suitable government schemes, and grow with AI-powered guidance.',
    ctaPrimary: 'Find My Best Business',
    ctaSecondary: 'Check Business Health',
    trust1: 'Trusted guidance',
    trust2: '8+ Indian languages',
    trust3: 'Scheme matching',
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
    trust1: 'भरोसेमंद मार्गदर्शन',
    trust2: '8+ भारतीय भाषाएँ',
    trust3: 'योजना मिलान',
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
    trust1: 'নির্ভরযোগ্য নির্দেশনা',
    trust2: '৮+ ভারতীয় ভাষা',
    trust3: 'প্রকল্প মিলান',
    jKicker: 'ব্যাপারসাথী যাত্রা',
    jTitle: 'সঠিক সুযোগ → পরিকল্পনা → তহবিল → নির্দেশনা → বৃদ্ধি',
    tagline: 'সঠিক পথ, সঠিক সঙ্গী',
    ctaBlurb: 'এমন একজন উপদেষ্টার সাথে আপনার ব্যবসা যাত্রা শুরু করুন যিনি আপনার এলাকা, ভাষা এবং বাজেট বোঝেন।',
  },
};

// ─── Screen navigation ────────────────────────────────────────────────────────
function showLanding() {
  document.getElementById('landing-screen').style.display = '';
  document.getElementById('onboarding-screen').style.display = 'none';
  document.getElementById('dashboard-screen').style.display = 'none';
}

function showOnboarding() {
  document.getElementById('landing-screen').style.display = 'none';
  document.getElementById('onboarding-screen').style.display = 'flex';
  document.getElementById('dashboard-screen').style.display = 'none';
  state.obStep = 0;
  renderObStep();
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

// ─── In-app page routing ──────────────────────────────────────────────────────
let navHistory = ['dashboard'];

function navTo(id, btnEl) {
  closeDropdowns();
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  navHistory.push(id);
  showPage(id);
}

function historyBack() {
  if (navHistory.length > 1) {
    navHistory.pop();
    showPage(navHistory[navHistory.length - 1]);
  }
}

// Map of page id -> [element id, render function (optional)]
const PAGE_RENDERERS = {
  dashboard: ['page-dashboard', renderDashboard],
  opp:       ['page-opp',       renderOpportunitiesPage],
  feas:      ['page-feas',      renderFeasibilityPage],
  plan:      ['page-plan',      renderBusinessPlanPage],
  finance:   ['page-finance',   renderFinancePage],
  schemes:   ['page-schemes',   renderSchemesPage],
  launch:    ['page-launch',    renderLaunchPage],
  doctor:    ['page-doctor',    renderDoctorPage],
  health:    ['page-health',    renderHealthPage],
  sim:       ['page-sim',       renderSimPage],
  community: ['page-community', renderCommunityPage],
  settings:  ['page-settings',  renderSettingsPage],
  journey:   ['page-dashboard', renderDashboard],
};

function showPage(id) {
  const entry = PAGE_RENDERERS[id] || PAGE_RENDERERS.dashboard;
  const [targetElId, renderFn] = entry;
  Object.values(PAGE_RENDERERS).forEach(([elId]) => {
    const el = document.getElementById(elId);
    if (el) el.style.display = 'none';
  });
  const target = document.getElementById(targetElId);
  if (target) target.style.display = '';
  if (typeof renderFn === 'function') renderFn();
}

// ─── Language switching ───────────────────────────────────────────────────────
function toggleLangDropdown() {
  document.getElementById('lang-dropdown').classList.toggle('open');
}

function setLang(code, label) {
  state.lang = code;
  const short = label.split(' ')[0];
  const labelEl = document.getElementById('lang-label');
  const curEl   = document.getElementById('cur-lang-label');
  if (labelEl) labelEl.textContent = short;
  if (curEl)   curEl.textContent   = short;
  document.getElementById('lang-dropdown')?.classList.remove('open');
  applyTranslations(code);
}

function applyTranslations(code) {
  const t  = TRANSLATIONS[code] || TRANSLATIONS.en;
  const el = id => document.getElementById(id);
  const set = (id, html, isHtml = false) => {
    const node = el(id);
    if (!node) return;
    if (isHtml) node.innerHTML = html; else node.textContent = html;
  };
  set('land-tag',       t.tag);
  set('hero-h1',        t.h1,        true);
  set('hero-sub',       t.sub);
  set('cta-primary',    t.ctaPrimary);
  set('cta-primary-2',  t.ctaPrimary);
  set('cta-secondary',  t.ctaSecondary);
  set('trust1',         t.trust1);
  set('trust2',         t.trust2);
  set('trust3',         t.trust3);
  set('journey-kicker', t.jKicker);
  set('journey-title',  t.jTitle);
  set('tagline',        t.tagline);
  set('cta-blurb',      t.ctaBlurb);
}

// ─── Dropdown helpers ─────────────────────────────────────────────────────────
function toggleDropdown(id) {
  const el     = document.getElementById(id);
  const wasOpen = el.classList.contains('open');
  closeDropdowns();
  if (!wasOpen) el.classList.add('open');
}

function closeDropdowns() {
  document.querySelectorAll('.dropdown-menu, .profile-dropdown, .lang-dropdown')
    .forEach(d => d.classList.remove('open'));
}

function toggleLangSwitcher() {
  const el = document.getElementById('lang-switcher-inline');
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function closeLangSwitcher() {
  document.getElementById('lang-switcher-inline').style.display = 'none';
}

document.addEventListener('click', e => {
  if (
    !e.target.closest('.lang-picker') &&
    !e.target.closest('.notif-btn') &&
    !e.target.closest('.topbar-avatar') &&
    !e.target.closest('.dropdown-menu') &&
    !e.target.closest('.profile-dropdown')
  ) {
    closeDropdowns();
  }
});

// ─── Onboarding ───────────────────────────────────────────────────────────────
const OB_STEPS = 5;

function renderObStep() {
  for (let i = 0; i < OB_STEPS; i++) {
    const el = document.getElementById('ob-step-' + i);
    if (el) el.style.display = i === state.obStep ? '' : 'none';
  }
  document.getElementById('ob-progress').style.width =
    ((state.obStep + 1) / OB_STEPS * 100) + '%';
  document.getElementById('ob-step-label').textContent =
    'Step ' + (state.obStep + 1) + ' of ' + OB_STEPS;
}

function obNext() {
  if (state.obStep === 1) {
    state.name     = document.getElementById('ob-name').value     || 'Priya Sharma';
    state.location = document.getElementById('ob-location').value || 'Kolkata, West Bengal';
  }
  if (state.obStep < OB_STEPS - 1) {
    state.obStep++;
    renderObStep();
  }
}

function obBack() {
  if (state.obStep > 0) {
    state.obStep--;
    renderObStep();
  }
}

function selectChoice(group, val, btn) {
  const container =
    btn.closest('.ob-choice-grid') ||
    btn.closest('#time-choices')   ||
    btn.closest('#biz-choices');
  if (container) container.querySelectorAll('.ob-choice').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state[group] = val;
}

function toggleInterest(id, btn) {
  btn.classList.toggle('selected');
  const idx = state.interests.indexOf(id);
  if (idx === -1) state.interests.push(id);
  else            state.interests.splice(idx, 1);
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
  state.name     = document.getElementById('ob-name').value     || state.name;
  state.location = document.getElementById('ob-location').value || state.location;
  showDashboard();
}

// ─── SVG Score ring ───────────────────────────────────────────────────────────
function scoreRingSVG(value, size, color, label) {
  const r      = (size - 16) / 2;
  const cx     = size / 2;
  const cy     = size / 2;
  const circ   = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#f3f4f6" stroke-width="10"/>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color || '#047857'}" stroke-width="10"
        stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round"
        transform="rotate(-90 ${cx} ${cy})"
        style="transition:stroke-dashoffset 0.8s ease"/>
      <text x="${cx}" y="${cy - 6}"  text-anchor="middle"
        font-family="Lexend,sans-serif" font-size="22" font-weight="800" fill="#111827">${value}</text>
      <text x="${cx}" y="${cy + 14}" text-anchor="middle"
        font-family="Inter,sans-serif" font-size="11" fill="#6b7280">${label || 'out of 100'}</text>
    </svg>`;
}

// ─── Rupee formatting ─────────────────────────────────────────────────────────
function rupeeShort(n) {
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000)   return '₹' + (n / 100000).toFixed(n >= 1000000 ? 1 : 2) + ' L';
  if (n >= 1000)     return '₹' + (n / 1000).toFixed(0) + 'K';
  return '₹' + n;
}

function rupee(n) {
  return '₹' + n.toLocaleString('en-IN', { maximumFractionDigits: 0 });
}

function getTopBusiness() {
  const ranked = [...OPPORTUNITIES].sort((a, b) => {
    const am = state.interests.includes(a.interest) ? 1 : 0;
    const bm = state.interests.includes(b.interest) ? 1 : 0;
    if (am !== bm) return bm - am;
    return b.score - a.score;
  });
  return ranked.find(o => o.id === state.selectedBiz) || ranked[0];
}

// ─── Journey tracker stages ───────────────────────────────────────────────────
const TRACKER_STAGES = [
  { label: 'Opportunity',   page: 'opp'     },
  { label: 'Feasibility',   page: 'feas'    },
  { label: 'Business Plan', page: 'plan'    },
  { label: 'Funding',       page: 'finance' },
  { label: 'Launch',        page: 'launch'  },
  { label: 'Growth',        page: 'sim'     },
];
const CURRENT_STAGE = 2; // 0-indexed — user is at "Business Plan"

// ─── Dashboard render ─────────────────────────────────────────────────────────
function renderDashboard() {
  const initials  = (state.name || 'U').charAt(0).toUpperCase();
  const firstName = state.name.split(' ')[0];

  ['sidebar-avatar', 'topbar-avatar', 'profile-drop-avatar'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = initials;
  });
  document.getElementById('dash-name').textContent        = firstName;
  document.getElementById('sidebar-name').textContent     = state.name;
  document.getElementById('sidebar-loc').textContent      = state.location;
  document.getElementById('profile-drop-name').textContent = state.name;
  document.getElementById('profile-drop-loc').textContent  = state.location;
  document.getElementById('score-location').textContent    = state.location.split(',')[0] || 'Your area';

  const trackerEl = document.getElementById('tracker-steps');
  trackerEl.innerHTML = '';
  TRACKER_STAGES.forEach((s, i) => {
    const wrap = document.createElement('div');
    wrap.className = 'flex items-center flex-1';

    const btn = document.createElement('button');
    btn.className = 'tracker-step';
    btn.onclick   = () => navTo(s.page, null);

    let circClass = 'step-pending', labelClass = '';
    if      (i < CURRENT_STAGE)  { circClass = 'step-done';    labelClass = 'step-done-label';    }
    else if (i === CURRENT_STAGE) { circClass = 'step-current'; labelClass = 'step-current-label'; }

    btn.innerHTML = `
      <div class="step-circle ${circClass}">${i < CURRENT_STAGE ? '✓' : i + 1}</div>
      <span class="step-label ${labelClass}">${s.label}</span>`;
    wrap.appendChild(btn);

    if (i < TRACKER_STAGES.length - 1) {
      const line = document.createElement('div');
      line.className = 'tracker-line ' + (i < CURRENT_STAGE ? 'line-done' : 'line-pending');
      wrap.appendChild(line);
    }
    trackerEl.appendChild(wrap);
  });

  const currentStageObj = TRACKER_STAGES[CURRENT_STAGE];
  const nextStageObj = TRACKER_STAGES[CURRENT_STAGE + 1];
  const statusEl = document.getElementById('journey-status-text');
  if (statusEl) {
    statusEl.innerHTML = nextStageObj
      ? `You're on <strong>${currentStageObj.label}</strong>. Next up: ${nextStageObj.label}.`
      : `You're on <strong>${currentStageObj.label}</strong>. That's the final stage!`;
  }
  const continueBtn = document.getElementById('journey-continue-btn');
  if (continueBtn) {
    if (nextStageObj) {
      continueBtn.style.display = '';
      continueBtn.textContent = `Continue to ${nextStageObj.label} →`;
      continueBtn.onclick = () => navTo(nextStageObj.page, null);
    } else {
      continueBtn.style.display = 'none';
    }
  }

  const ranked = [...OPPORTUNITIES].sort((a, b) => {
    const am = state.interests.includes(a.interest) ? 1 : 0;
    const bm = state.interests.includes(b.interest) ? 1 : 0;
    if (am !== bm) return bm - am;
    return b.score - a.score;
  });
  const top5 = ranked.slice(0, 5);
  const top  = ranked.find(o => o.id === state.selectedBiz) || ranked[0];

  document.getElementById('score-ring-container').innerHTML =
    scoreRingSVG(top.score, 140, '#047857', 'out of 100');
  document.getElementById('health-ring-container').innerHTML =
    scoreRingSVG(82, 130, '#039855', 'healthy');
  document.getElementById('score-biz-name').textContent = top.name;

  document.getElementById('dash-biz-name').textContent = top.name;
  document.getElementById('dash-score').textContent    = top.score;
  document.getElementById('dash-invest').textContent   = rupeeShort(top.investment);
  document.getElementById('dash-profit').textContent   = rupeeShort(top.profit) + '/mo';

  const demandClass = top.demand === 'High'   ? 'level-high-pos' :
                      top.demand === 'Medium' ? 'level-med-pos'  : 'level-low-pos';
  const compClass   = top.competition === 'Low'    ? 'level-low-neg'  :
                      top.competition === 'Medium' ? 'level-med-neg'  : 'level-high-neg';
  document.getElementById('dash-demand').innerHTML =
    `<span class="level-badge ${demandClass}">${top.demand}</span>`;
  document.getElementById('dash-comp').innerHTML =
    `<span class="level-badge ${compClass}">${top.competition}</span>`;

  const matchesInterest = state.interests.includes(top.interest);
  document.getElementById('interest-badge').style.display = matchesInterest ? '' : 'none';

  const oppEl = document.getElementById('opp-options');
  oppEl.innerHTML = '';
  top5.forEach(o => {
    const selected = o.id === top.id;
    const fits     = o.investment <= state.budget;
    const interestTag = state.interests.includes(o.interest)
      ? ' · <span style="color:var(--brand-700)">✦ your interest</span>' : '';

    const btn = document.createElement('button');
    btn.className = 'opp-option' + (selected ? ' selected' : '');
    btn.innerHTML = `
      <span class="opp-score-box ${selected ? 'selected' : 'unselected'}">${o.score}</span>
      <span class="min-w-0 flex-1">
        <span class="opp-name truncate">${o.name}</span><br>
        <span class="opp-sub">${rupeeShort(o.investment)} · ${rupeeShort(o.profit)}/mo${interestTag}</span>
      </span>
      <span class="opp-fit ${fits ? 'fits' : 'over'}">${fits ? 'Fits' : 'Over'}</span>
      ${selected ? '<span style="color:var(--brand-600);font-size:14px;">✓</span>' : ''}
    `;
    btn.onclick = () => { state.selectedBiz = o.id; renderDashboard(); };
    oppEl.appendChild(btn);
  });

  const budget     = state.budget;
  const investment = top.investment;
  const fits       = investment <= budget;
  const surplus    = budget - investment;
  const usedPct    = Math.min(100, Math.round(investment / Math.max(budget, 1) * 100));
  const loanNeeded = Math.max(0, investment - budget);
  const ownFunds   = Math.min(budget, investment);
  const subsidy    = Math.round(investment * 0.35);
  const breakEven  = Math.max(1, Math.ceil(investment / Math.max(top.profit, 1)));
  const annualProfit = top.profit * 12;
  const roi        = Math.round(annualProfit / Math.max(investment, 1) * 100);

  document.getElementById('budget-biz-name').textContent = top.name;

  const fitBadge = document.getElementById('budget-fit-badge');
  fitBadge.textContent  = fits ? 'Within your budget' : 'Needs extra funding';
  fitBadge.className    = 'level-badge ' + (fits ? 'level-low-neg' : 'level-high-neg');
  fitBadge.style.cssText += ';padding:5px 14px;font-size:13px;';

  document.getElementById('b-budget').textContent   = rupee(budget);
  document.getElementById('b-invest').textContent   = rupee(investment);
  document.getElementById('b-surplus').textContent  = rupee(Math.abs(surplus));
  document.getElementById('b-breakeven').textContent = breakEven + ' mo';

  const bar = document.getElementById('budget-bar');
  bar.style.width = usedPct + '%';
  bar.className   = 'budget-bar-fill' + (usedPct >= 100 ? ' over' : '');
  document.getElementById('b-pct').textContent = usedPct + '%';

  document.getElementById('f-own').textContent    = rupee(ownFunds);
  document.getElementById('f-subsidy').textContent = rupee(subsidy);
  document.getElementById('f-loan').textContent   = rupee(loanNeeded);
  document.getElementById('b-roi').textContent    = roi + '%';
  document.getElementById('b-invest-2').textContent = rupee(investment);

  const city = state.location.split(',')[0] || 'your area';
  document.getElementById('ai-callout-text').textContent =
    `${top.name} is a strong fit for ${city} — ${top.demand.toLowerCase()} demand ` +
    `with ${top.competition.toLowerCase()} competition. Starting lean keeps costs low ` +
    `and break-even near ${breakEven} months.`;
}

// ─── Opportunities page ────────────────────────────────────────────────────────
function renderOpportunitiesPage() {
  const listEl = document.getElementById('opp-page-list');
  if (!listEl) return;
  listEl.innerHTML = '';
  const sorted = [...OPPORTUNITIES].sort((a, b) => b.score - a.score);
  sorted.forEach(o => {
    const selected = o.id === state.selectedBiz;
    const fits = o.investment <= state.budget;
    const matches = state.interests.includes(o.interest);
    const card = document.createElement('div');
    card.className = 'card card-hover' + (selected ? ' opp-page-card-selected' : '');
    card.style.cssText = 'padding:18px;margin-bottom:12px;cursor:pointer;display:flex;align-items:center;gap:16px;' + (selected ? 'border-color:var(--brand-500);' : '');
    card.innerHTML = `
      <span class="opp-score-box ${selected ? 'selected' : 'unselected'}" style="flex-shrink:0;">${o.score}</span>
      <span class="flex-1 min-w-0">
        <span style="font-weight:700;font-size:15px;color:var(--gray-900);">${o.name}</span>
        ${matches ? '<span class="chip chip-green" style="margin-left:8px;">✦ your interest</span>' : ''}
        <br>
        <span style="font-size:13px;color:var(--gray-500);">Investment ${rupeeShort(o.investment)} · Profit ${rupeeShort(o.profit)}/mo</span>
        <br>
        <span class="level-badge ${o.demand==='High'?'level-high-pos':o.demand==='Medium'?'level-med-pos':'level-low-pos'}" style="margin-top:4px;display:inline-block;">${o.demand} demand</span>
        <span class="level-badge ${o.competition==='Low'?'level-low-neg':o.competition==='Medium'?'level-med-neg':'level-high-neg'}" style="margin-left:6px;">${o.competition} competition</span>
      </span>
      <span class="opp-fit ${fits?'fits':'over'}" style="flex-shrink:0;">${fits?'Fits budget':'Over budget'}</span>
      <button class="btn btn-primary btn-sm" style="flex-shrink:0;" onclick="selectOpportunity('${o.id}', event)">${selected?'Selected ✓':'Select'}</button>
    `;
    listEl.appendChild(card);
  });
}

function selectOpportunity(id, e) {
  if (e) e.stopPropagation();
  state.selectedBiz = id;
  renderOpportunitiesPage();
}

// ─── Feasibility Analysis page ─────────────────────────────────────────────────
function renderFeasibilityPage() {
  const top = getTopBusiness();
  const nameEl = document.getElementById('feas-biz-name');
  if (nameEl) nameEl.textContent = top.name;

  const demandScore = top.demand === 'High' ? 90 : top.demand === 'Medium' ? 65 : 40;
  const compScore    = top.competition === 'Low' ? 90 : top.competition === 'Medium' ? 60 : 35;
  const budgetFitScore = top.investment <= state.budget ? 95 : Math.max(20, 95 - Math.round((top.investment - state.budget) / top.investment * 100));
  const profitScore = Math.min(100, Math.round(top.profit / 500));

  const metrics = [
    { label: 'Market Demand', value: demandScore, note: `${top.demand} demand observed in your area` },
    { label: 'Competition Level', value: compScore, note: `${top.competition} competition nearby` },
    { label: 'Budget Fit', value: budgetFitScore, note: budgetFitScore >= 80 ? 'Comfortably within your budget' : 'May need extra funding' },
    { label: 'Profitability', value: profitScore, note: `${rupeeShort(top.profit)}/month estimated profit` },
  ];

  const ringEl = document.getElementById('feas-score-ring');
  if (ringEl) ringEl.innerHTML = scoreRingSVG(top.score, 150, '#047857', 'feasibility');

  const metricsEl = document.getElementById('feas-metrics');
  if (metricsEl) {
    metricsEl.innerHTML = '';
    metrics.forEach(m => {
      const row = document.createElement('div');
      row.style.cssText = 'margin-bottom:16px;';
      row.innerHTML = `
        <div class="flex justify-between" style="margin-bottom:6px;">
          <span style="font-size:13px;font-weight:600;color:var(--gray-700);">${m.label}</span>
          <span style="font-size:13px;font-weight:700;color:var(--gray-900);">${m.value}/100</span>
        </div>
        <div class="budget-bar-track"><div class="budget-bar-fill${m.value < 40 ? ' over' : m.value < 70 ? ' mid' : ''}" style="width:${m.value}%;"></div></div>
        <div style="font-size:12px;color:var(--gray-500);margin-top:4px;">${m.note}</div>
      `;
      metricsEl.appendChild(row);
    });
  }
}

// ─── Business Plan page ────────────────────────────────────────────────────────
function renderBusinessPlanPage() {
  const top = getTopBusiness();
  const city = state.location.split(',')[0] || 'your area';
  const breakEven = Math.max(1, Math.ceil(top.investment / Math.max(top.profit, 1)));

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('plan-biz-name', top.name);
  set('plan-summary', `${top.name} is a ${top.demand.toLowerCase()}-demand, ${top.competition.toLowerCase()}-competition business well suited to ${city}. With an estimated investment of ${rupeeShort(top.investment)}, the business is projected to break even in around ${breakEven} months and generate ${rupeeShort(top.profit)} in monthly profit thereafter.`);
  set('plan-customer', `Primary customers are local households and small offices within a 2–3 km radius of ${city}, drawn to convenience, consistent quality, and fair pricing compared to larger competitors.`);
  set('plan-revenue', `Revenue is generated through direct sales${top.interest === 'food' ? ' and repeat/subscription orders' : ''}. At current pricing, ${rupeeShort(top.profit)}/month profit is expected once demand stabilises.`);
  set('plan-costs', `Initial setup: ${rupeeShort(top.investment)}. This typically covers equipment/inventory, a starting stock buffer, basic licensing, and one to two months of operating costs.`);

  const milestonesEl = document.getElementById('plan-milestones');
  if (milestonesEl) {
    const milestones = [
      ['Month 1', 'Register, set up location/supplies, run soft launch'],
      ['Month 2–3', 'Build local customer base, refine pricing and offering'],
      [`Month ${breakEven}`, 'Expected break-even point'],
      ['Month 6+', 'Explore expansion — new products, delivery radius, or a second outlet'],
    ];
    milestonesEl.innerHTML = milestones.map(([time, desc]) => `
      <div class="flex" style="gap:12px;padding:10px 0;border-bottom:1px solid var(--gray-100);">
        <span style="font-weight:700;font-size:13px;color:var(--brand-700);min-width:90px;">${time}</span>
        <span style="font-size:13px;color:var(--gray-600);">${desc}</span>
      </div>
    `).join('');
  }
}

// ─── Finance & Funding page ────────────────────────────────────────────────────
function renderFinancePage() {
  const top = getTopBusiness();
  const budget = state.budget;
  const investment = top.investment;
  const loanNeeded = Math.max(0, investment - budget);
  const ownFunds = Math.min(budget, investment);
  const subsidy = Math.round(investment * 0.35);
  const breakEven = Math.max(1, Math.ceil(investment / Math.max(top.profit, 1)));
  const roi = Math.round((top.profit * 12) / Math.max(investment, 1) * 100);

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('fin-biz-name', top.name);
  set('fin-budget', rupee(budget));
  set('fin-investment', rupee(investment));
  set('fin-own', rupee(ownFunds));
  set('fin-subsidy', rupee(subsidy));
  set('fin-loan', rupee(loanNeeded));
  set('fin-roi', roi + '%');
  set('fin-breakeven', breakEven + ' months');

  const ownPct = Math.round(ownFunds / investment * 100);
  const subsidyPct = Math.round(Math.min(subsidy, investment - ownFunds) / investment * 100);
  const loanPct = Math.max(0, 100 - ownPct - subsidyPct);

  const mixEl = document.getElementById('fin-mix-bar');
  if (mixEl) {
    mixEl.innerHTML = `
      <div style="background:var(--brand-600);width:${ownPct}%;" title="Own funds"></div>
      <div style="background:var(--orange-500);width:${subsidyPct}%;" title="Subsidy"></div>
      <div style="background:var(--gray-400);width:${loanPct}%;" title="Loan needed"></div>
    `;
  }
  const legendEl = document.getElementById('fin-mix-legend');
  if (legendEl) {
    legendEl.innerHTML = `
      <span class="fin-mix-legend-item"><span class="fin-mix-dot" style="background:var(--brand-600);"></span>Own funds · ${ownPct}%</span>
      <span class="fin-mix-legend-item"><span class="fin-mix-dot" style="background:var(--orange-500);"></span>Subsidy · ${subsidyPct}%</span>
      <span class="fin-mix-legend-item"><span class="fin-mix-dot" style="background:var(--gray-400);"></span>Loan needed · ${loanPct}%</span>
    `;
  }
}

// ─── Schemes & Loans page ──────────────────────────────────────────────────────
function renderSchemesPage() {
  const top = getTopBusiness();
  const listEl = document.getElementById('schemes-list');
  if (!listEl) return;
  listEl.innerHTML = '';
  const schemeIcons = { pmegp: '🏛️', 'mudra-shishu': '🪙', 'mudra-kishor': '💰', standup: '🚀', nrlm: '🌾' };
  SCHEMES.forEach(s => {
    const eligible = top.investment <= s.maxInvestment;
    const card = document.createElement('div');
    card.className = 'card scheme-card';
    card.style.cssText = 'padding:18px;margin-bottom:12px;';
    card.innerHTML = `
      <div class="scheme-icon">${schemeIcons[s.id] || '🏛️'}</div>
      <div class="flex-1">
        <div class="flex justify-between items-start" style="gap:12px;">
          <div style="font-weight:700;font-size:14px;color:var(--gray-900);margin-bottom:4px;">${s.name}</div>
          <span class="level-badge ${eligible ? 'level-low-neg' : 'level-high-neg'}" style="flex-shrink:0;">${eligible ? 'Likely eligible' : 'Check limits'}</span>
        </div>
        <div style="font-size:13px;color:var(--gray-500);">${s.desc}</div>
      </div>
    `;
    listEl.appendChild(card);
  });
}

// ─── Launch Checklist page ─────────────────────────────────────────────────────
function renderLaunchPage() {
  const listEl = document.getElementById('launch-list');
  if (!listEl) return;
  listEl.innerHTML = '';
  LAUNCH_TASKS.forEach(t => {
    const checked = !!state.launchChecklist[t.id];
    const row = document.createElement('button');
    row.className = 'checklist-item' + (checked ? ' checked' : '');
    row.onclick = () => toggleLaunchTask(t.id);
    row.innerHTML = `
      <span class="checklist-box">${checked ? '✓' : ''}</span>
      <span class="checklist-label">${t.label}</span>
    `;
    listEl.appendChild(row);
  });
  const done = LAUNCH_TASKS.filter(t => state.launchChecklist[t.id]).length;
  const pct = Math.round(done / LAUNCH_TASKS.length * 100);
  const barEl = document.getElementById('launch-progress-bar');
  if (barEl) barEl.style.width = pct + '%';
  const pctEl = document.getElementById('launch-progress-pct');
  if (pctEl) pctEl.textContent = `${done} of ${LAUNCH_TASKS.length} done (${pct}%)`;
}

function toggleLaunchTask(id) {
  state.launchChecklist[id] = !state.launchChecklist[id];
  renderLaunchPage();
}

// ─── Business Doctor page ──────────────────────────────────────────────────────
function renderDoctorPage() {
  const listEl = document.getElementById('doctor-symptoms');
  if (listEl && !listEl.dataset.built) {
    listEl.innerHTML = DOCTOR_SYMPTOMS.map(s => `
      <button class="chip chip-blue doctor-symptom-btn" data-id="${s.id}" onclick="toggleDoctorSymptom('${s.id}', this)" style="cursor:pointer;margin:4px;">${s.label}</button>
    `).join('');
    listEl.dataset.built = '1';
  }
  renderDoctorResults();
}

function toggleDoctorSymptom(id, btn) {
  btn.classList.toggle('selected-symptom');
  const idx = state.doctorSymptoms.indexOf(id);
  if (idx === -1) state.doctorSymptoms.push(id); else state.doctorSymptoms.splice(idx, 1);
  renderDoctorResults();
}

function renderDoctorResults() {
  const resultsEl = document.getElementById('doctor-results');
  if (!resultsEl) return;
  if (state.doctorSymptoms.length === 0) {
    resultsEl.innerHTML = `<div style="color:var(--gray-500);font-size:13px;padding:20px 0;">Select what's slowing your business down above, and I'll suggest fixes.</div>`;
    return;
  }
  resultsEl.innerHTML = state.doctorSymptoms.map(id => {
    const symptom = DOCTOR_SYMPTOMS.find(s => s.id === id);
    return `
      <div class="ai-callout" style="margin-bottom:10px;">
        <div>
          <div style="font-weight:700;font-size:13px;color:var(--brand-800);margin-bottom:4px;">${symptom ? symptom.label : id}</div>
          <div style="font-size:13px;color:var(--gray-700);">${DOCTOR_PRESCRIPTIONS[id] || ''}</div>
        </div>
      </div>
    `;
  }).join('');
}

// ─── Business Health page ──────────────────────────────────────────────────────
function renderHealthPage() {
  const scores = { sales: 78, finance: 82, growth: 68, risk: 88 };
  const overall = Math.round((scores.sales + scores.finance + scores.growth + scores.risk) / 4);
  const ringEl = document.getElementById('health-page-ring');
  if (ringEl) ringEl.innerHTML = scoreRingSVG(overall, 150, '#039855', 'overall health');

  const breakdownEl = document.getElementById('health-breakdown');
  if (breakdownEl) {
    const labels = { sales: 'Sales Performance', finance: 'Financial Health', growth: 'Growth Trajectory', risk: 'Risk Management' };
    breakdownEl.innerHTML = Object.entries(scores).map(([k, v]) => `
      <div style="margin-bottom:14px;">
        <div class="flex justify-between" style="margin-bottom:6px;">
          <span style="font-size:13px;font-weight:600;color:var(--gray-700);">${labels[k]}</span>
          <span style="font-size:13px;font-weight:700;">${v}/100</span>
        </div>
        <div class="budget-bar-track"><div class="budget-bar-fill${v < 40 ? ' over' : v < 70 ? ' mid' : ''}" style="width:${v}%;"></div></div>
      </div>
    `).join('');
  }
}

// ─── Simulator page ─────────────────────────────────────────────────────────────
function renderSimPage() {
  const priceEl = document.getElementById('sim-price-input');
  const unitsEl = document.getElementById('sim-units-input');
  const costEl  = document.getElementById('sim-cost-input');
  if (priceEl && !priceEl.dataset.built) {
    priceEl.value = state.simPrice;
    unitsEl.value = state.simUnits;
    costEl.value  = state.simCost;
    priceEl.dataset.built = '1';
  }
  updateSimResults();
}

function updateSimResults() {
  state.simPrice = parseFloat(document.getElementById('sim-price-input').value) || 0;
  state.simUnits = parseFloat(document.getElementById('sim-units-input').value) || 0;
  state.simCost  = parseFloat(document.getElementById('sim-cost-input').value)  || 0;

  const revenue = state.simPrice * state.simUnits;
  const cost = state.simCost * state.simUnits;
  const profit = revenue - cost;
  const margin = revenue > 0 ? Math.round(profit / revenue * 100) : 0;

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('sim-revenue', rupee(revenue));
  set('sim-cost-total', rupee(cost));
  set('sim-profit', rupee(profit));
  set('sim-margin', margin + '%');

  const priceLabel = document.getElementById('sim-price-label');
  const unitsLabel = document.getElementById('sim-units-label');
  const costLabel  = document.getElementById('sim-cost-label');
  if (priceLabel) priceLabel.textContent = rupee(state.simPrice);
  if (unitsLabel) unitsLabel.textContent = state.simUnits;
  if (costLabel)  costLabel.textContent  = rupee(state.simCost);
}

// ─── Community page ─────────────────────────────────────────────────────────────
function renderCommunityPage() {
  const listEl = document.getElementById('community-list');
  if (!listEl) return;
  listEl.innerHTML = state.communityPosts.map(p => `
    <div class="card" style="padding:16px;margin-bottom:12px;">
      <div class="flex items-center gap-2" style="margin-bottom:8px;">
        <span class="topbar-avatar" style="width:32px;height:32px;font-size:13px;">${p.name.charAt(0)}</span>
        <div>
          <div style="font-weight:700;font-size:13px;color:var(--gray-900);">${p.name}</div>
          <div style="font-size:12px;color:var(--gray-500);">${p.loc}</div>
        </div>
      </div>
      <div style="font-size:13px;color:var(--gray-700);margin-bottom:8px;">${p.text}</div>
      <div style="font-size:12px;color:var(--gray-500);">♥ ${p.likes} found this helpful</div>
    </div>
  `).join('');
}

function postCommunityMessage() {
  const input = document.getElementById('community-post-input');
  if (!input || !input.value.trim()) return;
  state.communityPosts.unshift({ name: state.name, loc: state.location, text: input.value.trim(), likes: 0 });
  input.value = '';
  renderCommunityPage();
}

// ─── Settings page ──────────────────────────────────────────────────────────────
function renderSettingsPage() {
  const nameEl = document.getElementById('settings-name-input');
  const locEl  = document.getElementById('settings-loc-input');
  const budgetEl = document.getElementById('settings-budget-input');
  if (nameEl) nameEl.value = state.name;
  if (locEl) locEl.value = state.location;
  if (budgetEl) budgetEl.value = state.budget;
}

function saveSettings() {
  state.name = document.getElementById('settings-name-input').value || state.name;
  state.location = document.getElementById('settings-loc-input').value || state.location;
  state.budget = parseInt(document.getElementById('settings-budget-input').value) || state.budget;
  const msgEl = document.getElementById('settings-saved-msg');
  if (msgEl) {
    msgEl.style.display = '';
    setTimeout(() => { msgEl.style.display = 'none'; }, 2000);
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────
showLanding();
