// ============================================================
//  CUBE PORTFOLIO — src/App.js
//  Single-page 3D cube. Each face = one section.
//  Mouse tilt · Scroll rotation · Nav-click · Arrow keys
// ============================================================
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

// Asset imports
// Profile pic: drop new photo at src/images/Profilepic.jpg (or update path below)
import profilePic  from './images/Profilepic.jpg';
import evGif       from './assets/EV_Registration_Dashboard_Interaction_final.gif';
import evDashboard from './assets/DashboardVisual.png';

import './App.css';

// ── Constants ────────────────────────────────────────────────
const SECTIONS = ['hero','about','skills','projects','experience','contact'];
const NAV_S    = ['about','skills','projects','experience','contact'];
const LABELS   = { hero:'Home', about:'About', skills:'Skills', projects:'Projects', experience:'Experience', contact:'Contact' };

const CUBE_ROT = {
  hero:       {x:0,  y:0   },
  about:      {x:0,  y:-90 },
  skills:     {x:0,  y:180 },
  projects:   {x:0,  y:90  },
  experience: {x:90, y:0   },
  contact:    {x:-90,y:0   },
};

const FACE_T = {
  hero:       'translateZ(50vmin)',
  about:      'rotateY(90deg) translateZ(50vmin)',
  skills:     'rotateY(180deg) translateZ(50vmin)',
  projects:   'rotateY(-90deg) translateZ(50vmin)',
  experience: 'rotateX(-90deg) translateZ(50vmin)',
  contact:    'rotateX(90deg) translateZ(50vmin)',
};

const TYPED_WORDS = ['Power BI & DAX','SQL & Data Modeling','AI-Powered Analytics','Microsoft Fabric','Python Pipelines'];

const SKILLS_DATA = [
  {n:'SQL',             p:90}, {n:'Power BI',        p:90},
  {n:'DAX',             p:85}, {n:'Excel',            p:88},
  {n:'Python',          p:65}, {n:'Microsoft Fabric', p:62},
  {n:'Azure',           p:65}, {n:'OpenAI / AI',      p:70},
];

const EXPS = [
  { r:'BI Developer', c:'Colaberry Inc', d:'2024 — Present', l:'Dallas, TX',
    pts:['Power BI dashboards for C-suite and operations teams','Optimized DAX & SQL against Azure SQL + Fabric Lakehouse','Architected AI homework autograder (OpenAI tool-use agent)'] },
  { r:'Project Manager & BI Analyst', c:'Bit & Bytes LLC', d:'2022 — 2024', l:'Remote',
    pts:['Cut ad-hoc analytics requests by 40% with self-service Power BI','Defined KPIs and data governance across 3 client organizations','End-to-end project delivery from scoping to production'] },
  { r:'Business Analyst', c:'Telenor Global Shared Service', d:'2008 — 2013', l:'Islamabad, Pakistan',
    pts:['Executive reporting for shared-service center of 5,000+ employees','Saved 20 hrs/month via Excel & Access workflow automation','ERP migration data validation across legacy and target systems'] },
];

// ── Typing animation ─────────────────────────────────────────
function Typer() {
  const [txt, setTxt] = useState('');
  const s = useRef({i:0, j:0, d:false});
  useEffect(() => {
    let tm;
    const tick = () => {
      const {i,j,d} = s.current, w = TYPED_WORDS[i];
      if (!d) {
        if (j<w.length){s.current.j++;setTxt(w.slice(0,s.current.j));tm=setTimeout(tick,75);}
        else tm=setTimeout(()=>{s.current.d=true;tick();},1800);
      } else {
        if (j>0){s.current.j--;setTxt(w.slice(0,s.current.j));tm=setTimeout(tick,38);}
        else{s.current.d=false;s.current.i=(i+1)%TYPED_WORDS.length;tm=setTimeout(tick,350);}
      }
    };
    tm=setTimeout(tick,600);
    return ()=>clearTimeout(tm);
  },[]);
  return (
    <span style={{color:'#00d4aa',fontWeight:600}}>
      {txt}<span style={{display:'inline-block',width:2,height:'1.1em',background:'#00d4aa',marginLeft:2,verticalAlign:'text-bottom',animation:'blink 1s step-end infinite'}}/>
    </span>
  );
}

// ── Skill bar ─────────────────────────────────────────────────
function SkillBar({n,p,on}) {
  return (
    <div style={{marginBottom:11}}>
      <div style={{display:'flex',justifyContent:'space-between',marginBottom:4}}>
        <span style={{fontSize:11,color:'#c0c0e0',fontWeight:500}}>{n}</span>
        <span style={{fontSize:10,color:'#8888aa'}}>{p}%</span>
      </div>
      <div style={{height:3,background:'rgba(255,255,255,0.07)',borderRadius:9999,overflow:'hidden'}}>
        <div style={{height:'100%',borderRadius:9999,background:'linear-gradient(90deg,#4f8ef7,#00d4aa)',width:on?`${p}%`:0,transition:'width 1.1s cubic-bezier(.4,0,.2,1)'}}/>
      </div>
    </div>
  );
}

// ── Shared tokens ─────────────────────────────────────────────
const SL  = {fontSize:10,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:'#00d4aa',display:'block',marginBottom:5};
const SH2 = {fontSize:'clamp(1.1rem,3vmin,1.7rem)',fontWeight:700,color:'#f0f0ff',lineHeight:1.2};
const PAD = {padding:'62px 40px 28px',height:'100%'};
const BTN = {background:'linear-gradient(135deg,#4f8ef7,#00d4aa)',color:'#fff',border:'none',padding:'11px 24px',borderRadius:30,fontSize:12,fontWeight:600,cursor:'pointer',fontFamily:'inherit'};
const BTN2= {background:'transparent',color:'#4f8ef7',border:'1.5px solid #4f8ef7',padding:'10px 22px',borderRadius:30,fontSize:12,fontWeight:600,cursor:'pointer',fontFamily:'inherit'};
const TAG = {fontSize:10,padding:'3px 9px',background:'rgba(79,142,247,0.1)',color:'#4f8ef7',borderRadius:20,display:'inline-block',marginRight:5,marginBottom:4};
const LBL = {fontSize:9,fontWeight:700,color:'#8888aa',letterSpacing:'0.07em',textTransform:'uppercase',display:'block',marginBottom:5};

// ── HERO ──────────────────────────────────────────────────────
function HeroFace({go}) {
  return (
    <div style={{...PAD,display:'flex',flexDirection:'column',justifyContent:'center',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',width:320,height:320,borderRadius:'50%',background:'rgba(79,142,247,0.08)',filter:'blur(60px)',top:-80,left:-60,pointerEvents:'none'}}/>
      <div style={{position:'absolute',width:220,height:220,borderRadius:'50%',background:'rgba(0,212,170,0.08)',filter:'blur(50px)',bottom:20,right:20,pointerEvents:'none'}}/>
      <div style={{position:'relative',zIndex:1}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'#00d4aa',marginBottom:14}}>Senior Data Professional</p>
        <h1 style={{fontSize:'clamp(2rem,6.5vmin,4.5rem)',fontWeight:800,lineHeight:1.05,marginBottom:14,background:'linear-gradient(135deg,#4f8ef7,#00d4aa)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Sehrish Khan</h1>
        <p style={{fontSize:'clamp(.85rem,2vmin,1.2rem)',color:'#8888aa',marginBottom:22}}>Turning raw data into decisions that move businesses forward</p>
        <p style={{fontSize:'clamp(.8rem,1.8vmin,1rem)',color:'#c0c0e0',marginBottom:42,minHeight:'1.5em'}}>I build with <Typer/></p>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <button onClick={()=>go('projects')} style={BTN}>View My Work</button>
          <button onClick={()=>go('contact')} style={BTN2}>Get In Touch</button>
        </div>
      </div>
    </div>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────
function AboutFace({go}) {
  return (
    <div style={PAD}>
      <span style={SL}>About Me</span>
      <h2 style={{...SH2,marginBottom:20}}>The Person Behind the Data</h2>
      <div style={{display:'flex',gap:24,alignItems:'flex-start',marginBottom:22}}>
        <div style={{width:84,height:84,borderRadius:'50%',flexShrink:0,padding:2,background:'linear-gradient(135deg,#4f8ef7,#00d4aa)'}}>
          <div style={{width:'100%',height:'100%',borderRadius:'50%',overflow:'hidden',background:'#0d1228'}}>
            <img src={profilePic} alt="Sehrish Khan" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top',display:'block'}}/>
          </div>
        </div>
        <div>
          <p style={{fontSize:12,color:'#c0c0e0',lineHeight:1.85,marginBottom:10}}><span style={{color:'#00d4aa',fontWeight:600}}>15+ years</span> transforming complex datasets into dashboards that drive real business decisions — across telecom, education, and technology.</p>
          <p style={{fontSize:12,color:'#8888aa',lineHeight:1.75}}>Currently building AI-powered analytics at Colaberry. Passionate about the intersection of BI and machine intelligence.</p>
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginBottom:22}}>
        {[['15+','Years Exp.'],['10+','Projects'],['3','Industries']].map(([v,l])=>(
          <div key={l} style={{background:'rgba(79,142,247,0.06)',border:'1px solid rgba(79,142,247,0.12)',borderRadius:14,padding:'15px 12px',textAlign:'center'}}>
            <div style={{fontSize:'1.6rem',fontWeight:800,background:'linear-gradient(135deg,#4f8ef7,#00d4aa)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{v}</div>
            <div style={{fontSize:10,color:'#8888aa',marginTop:3}}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{display:'flex',gap:12}}>
        <button onClick={()=>go('projects')} style={BTN}>See My Work</button>
        <a href="/Resume/Resume-Sehrish-Khan.pdf" download style={{...BTN2,textDecoration:'none',display:'inline-flex',alignItems:'center'}}>Download CV</a>
      </div>
    </div>
  );
}

// ── SKILLS (back face — scaleX(-1) un-mirrors) ────────────────
function SkillsFace({active}) {
  return (
    <div style={{transform:'scaleX(-1)',height:'100%'}}>
      <div style={PAD}>
        <span style={SL}>Skills & Tools</span>
        <h2 style={{...SH2,marginBottom:20}}>The Stack That Gets It Done</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0 36px'}}>
          {SKILLS_DATA.map(s=><SkillBar key={s.n} n={s.n} p={s.p} on={active}/>)}
        </div>
      </div>
    </div>
  );
}

// ── PROJECTS (with media tabs + embedded visuals) ─────────────
function ProjectsFace() {
  const [tab, setTab] = useState('autograder');
  const tb = (id) => ({
    background:'transparent', border:'none',
    borderBottom: tab===id ? '2px solid #4f8ef7' : '2px solid transparent',
    color: tab===id ? '#4f8ef7' : '#8888aa',
    padding:'8px 16px', cursor:'pointer', fontSize:12, fontWeight:600,
    fontFamily:'inherit', transition:'all 0.2s',
  });
  return (
    <div style={{height:'100%',paddingTop:60,display:'flex',flexDirection:'column'}}>
      <div style={{padding:'0 32px'}}>
        <span style={SL}>Featured Projects</span>
        <h2 style={{...SH2,marginBottom:12}}>Real Problems. Real Data. Real Results.</h2>
      </div>
      <div style={{display:'flex',borderBottom:'1px solid rgba(255,255,255,0.08)',padding:'0 32px'}}>
        <button onClick={()=>setTab('autograder')} style={tb('autograder')}>🤖 AI Autograder</button>
        <button onClick={()=>setTab('ev')} style={tb('ev')}>📊 EV Registrations</button>
      </div>

      {tab==='autograder' && (
        <div style={{flex:1,display:'flex',flexDirection:'column',padding:'12px 32px 14px',overflow:'hidden',minHeight:0}}>
          <div style={{flex:1,borderRadius:10,overflow:'hidden',border:'1px solid rgba(79,142,247,0.15)',marginBottom:8,minHeight:0}}>
            <iframe src="/sprint4_progress.html" title="Sprint 4 — AI Autograder" style={{width:'100%',height:'100%',border:'none',display:'block'}} loading="lazy"/>
          </div>
          <details style={{marginBottom:8}}>
            <summary style={{fontSize:11,color:'#4f8ef7',cursor:'pointer',fontWeight:600,listStyle:'none',display:'flex',alignItems:'center',gap:6}}>
              ▶ Watch Demo Video
            </summary>
            <video src="/autograder-demo.mp4" controls style={{width:'100%',borderRadius:8,marginTop:6,maxHeight:130,background:'#000'}}/>
          </details>
          <div>{['Python','OpenAI API','SQL Server','Microsoft Fabric','Pandas'].map(t=><span key={t} style={TAG}>{t}</span>)}</div>
        </div>
      )}

      {tab==='ev' && (
        <div style={{flex:1,display:'flex',flexDirection:'column',padding:'12px 32px 14px',overflow:'hidden',minHeight:0}}>
          <p style={{fontSize:11,color:'#8888aa',lineHeight:1.75,marginBottom:10,flexShrink:0}}>
            End-to-end Power BI analysis of US EV registration trends — CAFV eligibility, YoY growth by model year, electric range distribution, and geographic adoption patterns.
          </p>
          <div style={{flex:1,borderRadius:10,overflow:'hidden',border:'1px solid rgba(79,142,247,0.15)',marginBottom:8,minHeight:0,background:'#000',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <img src={evGif} alt="EV Registrations Dashboard interactive demo" style={{width:'100%',height:'100%',objectFit:'contain',display:'block'}}/>
          </div>
          <details style={{marginBottom:8}}>
            <summary style={{fontSize:11,color:'#4f8ef7',cursor:'pointer',fontWeight:600,listStyle:'none',display:'flex',alignItems:'center',gap:6}}>
              🖼 View Full Dashboard
            </summary>
            <img src={evDashboard} alt="EV Dashboard full view" style={{width:'100%',borderRadius:8,marginTop:6}}/>
          </details>
          <div>{['Power BI','DAX','Python','Pandas','Plotly','Data Wrangling'].map(t=><span key={t} style={TAG}>{t}</span>)}</div>
        </div>
      )}
    </div>
  );
}

// ── EXPERIENCE ────────────────────────────────────────────────
function ExperienceFace() {
  return (
    <div style={{...PAD,overflowY:'auto'}}>
      <span style={SL}>Experience</span>
      <h2 style={{...SH2,marginBottom:18}}>15+ Years of Impact</h2>
      <div style={{paddingLeft:24,borderLeft:'2px solid rgba(79,142,247,0.2)',position:'relative'}}>
        {EXPS.map((e,i)=>(
          <div key={i} style={{marginBottom:18,position:'relative'}}>
            <div style={{position:'absolute',left:-33,width:12,height:12,borderRadius:'50%',background:'#4f8ef7',border:'2px solid #06080f',boxShadow:'0 0 10px rgba(79,142,247,0.55)'}}/>
            <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)',borderRadius:12,padding:14}}>
              <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:4,marginBottom:8}}>
                <div><div style={{fontSize:13,fontWeight:600,color:'#f0f0ff'}}>{e.r}</div><div style={{fontSize:11,color:'#4f8ef7',marginTop:2}}>{e.c}</div></div>
                <div style={{textAlign:'right'}}><div style={{fontSize:10,color:'#8888aa'}}>{e.d}</div><div style={{fontSize:10,color:'#8888aa'}}>{e.l}</div></div>
              </div>
              {e.pts.map((pt,pi)=>(
                <div key={pi} style={{fontSize:11,color:'#8888aa',lineHeight:1.7,paddingLeft:12,position:'relative'}}>
                  <span style={{position:'absolute',left:0,color:'#00d4aa'}}>›</span>{pt}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── CONTACT ───────────────────────────────────────────────────
function ContactFace() {
  const EMPTY = {name:'',email:'',phone:'',subject:'',message:''};
  const [fields,setFields]=useState(EMPTY);
  const [status,setStatus]=useState('idle');
  const [touched,setTouched]=useState({});
  const upd = k => e => setFields(p=>({...p,[k]:e.target.value}));
  const tch = k => () => setTouched(p=>({...p,[k]:true}));
  const errors={};
  if(!fields.name.trim())    errors.name='Name is required.';
  if(!fields.email.trim())   errors.email='Email is required.';
  if(!fields.subject)        errors.subject='Please select a topic.';
  if(!fields.message.trim()) errors.message='Message is required.';

  const send = async ev => {
    ev.preventDefault();
    setTouched({name:true,email:true,subject:true,message:true});
    if(Object.keys(errors).length) return;
    setStatus('sending');
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {from_name:fields.name,from_email:fields.email,phone:fields.phone||'—',subject:fields.subject,message:fields.message,reply_to:fields.email},
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      );
      setStatus('success'); setFields(EMPTY);
    } catch { setStatus('error'); }
  };

  const inp = err => ({width:'100%',background:'rgba(255,255,255,0.04)',border:`1px solid ${err?'rgba(239,68,68,0.5)':'rgba(255,255,255,0.1)'}`,borderRadius:10,color:'#f0f0ff',padding:'9px 13px',fontSize:11,fontFamily:'inherit',outline:'none'});

  if(status==='success') return (
    <div style={{...PAD,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
      <div style={{width:56,height:56,borderRadius:'50%',background:'rgba(0,212,170,0.12)',border:'2px solid rgba(0,212,170,0.35)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,color:'#00d4aa',marginBottom:14}}>✓</div>
      <p style={{color:'#00d4aa',fontSize:15,fontWeight:600,marginBottom:6}}>Message sent!</p>
      <p style={{color:'#8888aa',fontSize:12}}>I'll reply within 24 hours.</p>
      <button onClick={()=>{setStatus('idle');setTouched({});}} style={{...BTN2,marginTop:20,fontSize:12,padding:'8px 20px'}}>Send another</button>
    </div>
  );

  return (
    <div style={{...PAD,overflowY:'auto'}}>
      <span style={SL}>Contact</span>
      <h2 style={{...SH2,marginBottom:16}}>Let's Work Together</h2>
      {status==='error'&&<div style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.3)',borderRadius:10,padding:'10px 14px',marginBottom:12,fontSize:11,color:'#f87171'}}>Something went wrong. <a href="mailto:sehrishkhan336@gmail.com" style={{color:'#f87171'}}>Email me directly →</a></div>}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:10}}>
        {['name','email'].map(k=>(
          <div key={k}>
            <label style={LBL}>{k[0].toUpperCase()+k.slice(1)}</label>
            <input type={k==='email'?'email':'text'} value={fields[k]} onChange={upd(k)} onBlur={tch(k)} style={inp(touched[k]&&errors[k])} placeholder={k==='name'?'Jane Smith':'jane@co.com'}/>
            {touched[k]&&errors[k]&&<p style={{fontSize:10,color:'#f87171',marginTop:4}}>{errors[k]}</p>}
          </div>
        ))}
      </div>
      <div style={{marginBottom:10}}>
        <label style={LBL}>Topic</label>
        <select value={fields.subject} onChange={upd('subject')} onBlur={tch('subject')} style={{...inp(touched.subject&&errors.subject),appearance:'none'}}>
          <option value="">Select a topic…</option>
          {['BI / Dashboard Project','Data Analytics Consultation','Full-time Opportunity','Collaboration','Other'].map(o=><option key={o}>{o}</option>)}
        </select>
        {touched.subject&&errors.subject&&<p style={{fontSize:10,color:'#f87171',marginTop:4}}>{errors.subject}</p>}
      </div>
      <div style={{marginBottom:12}}>
        <label style={LBL}>Message</label>
        <textarea value={fields.message} onChange={upd('message')} onBlur={tch('message')} rows={3} style={{...inp(touched.message&&errors.message),resize:'none'}} placeholder="Tell me about your project…"/>
        {touched.message&&errors.message&&<p style={{fontSize:10,color:'#f87171',marginTop:4}}>{errors.message}</p>}
      </div>
      <button onClick={send} disabled={status==='sending'} style={{...BTN,width:'100%',justifyContent:'center',opacity:status==='sending'?0.7:1}}>
        {status==='sending'?'Sending…':'Send Message'}
      </button>
      <div style={{marginTop:18,display:'flex',gap:20}}>
        {[['LinkedIn','https://www.linkedin.com/in/sehrish-khan-63056416/'],['GitHub','https://github.com/sehrishkhan336'],['Email','mailto:sehrishkhan336@gmail.com']].map(([l,h])=>(
          <a key={l} href={h} target="_blank" rel="noopener noreferrer" style={{color:'#8888aa',textDecoration:'none',fontSize:10}}>{l} ↗</a>
        ))}
      </div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────
export default function App() {
  const [cur,  setCur]  = useState('hero');
  const [rot,  setRot]  = useState({x:0, y:0});
  const [tilt, setTilt] = useState({x:0, y:0});
  const [skOn, setSkOn] = useState(false);
  const wl = useRef(false);

  const go = (sec) => {
    setCur(sec); setRot(CUBE_ROT[sec]);
    if (sec==='skills') setTimeout(()=>setSkOn(true),500);
  };

  const onMove = (e) => {
    const cx=window.innerWidth/2, cy=window.innerHeight/2;
    setTilt({x:-((e.clientY-cy)/cy)*3.5, y:((e.clientX-cx)/cx)*3.5});
  };

  // Scroll navigation
  useEffect(()=>{
    const h=(e)=>{
      e.preventDefault();
      if(wl.current) return;
      wl.current=true; setTimeout(()=>{wl.current=false;},950);
      setCur(prev=>{
        const idx=SECTIONS.indexOf(prev);
        const next=e.deltaY>0?SECTIONS[(idx+1)%SECTIONS.length]:SECTIONS[(idx-1+SECTIONS.length)%SECTIONS.length];
        setRot(CUBE_ROT[next]);
        if(next==='skills') setTimeout(()=>setSkOn(true),500);
        return next;
      });
    };
    window.addEventListener('wheel',h,{passive:false});
    return ()=>window.removeEventListener('wheel',h);
  },[]);

  // Keyboard navigation
  useEffect(()=>{
    const h=(e)=>{
      if(!['ArrowDown','ArrowRight','ArrowUp','ArrowLeft'].includes(e.key)) return;
      e.preventDefault();
      const fwd=e.key==='ArrowDown'||e.key==='ArrowRight';
      setCur(prev=>{
        const idx=SECTIONS.indexOf(prev);
        const next=fwd?SECTIONS[(idx+1)%SECTIONS.length]:SECTIONS[(idx-1+SECTIONS.length)%SECTIONS.length];
        setRot(CUBE_ROT[next]);
        if(next==='skills') setTimeout(()=>setSkOn(true),500);
        return next;
      });
    };
    window.addEventListener('keydown',h);
    return ()=>window.removeEventListener('keydown',h);
  },[]);

  const cubeT=`rotateX(${rot.x+tilt.x}deg) rotateY(${rot.y+tilt.y}deg)`;

  const fs=(id,extra={})=>({
    position:'absolute',inset:0,
    transform:FACE_T[id],
    background:'#06080f',
    border:'1px solid rgba(79,142,247,0.1)',
    overflow:'hidden',
    pointerEvents:cur===id?'auto':'none',
    ...extra,
  });

  return (
    <div onMouseMove={onMove} style={{position:'fixed',inset:0,background:'#030408',overflow:'hidden',fontFamily:'Inter,system-ui,sans-serif'}}>
      <style>{`
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-thumb{background:#4f8ef7;border-radius:2px}
        button,a{font-family:inherit}
        details summary::-webkit-details-marker{display:none}
      `}</style>

      {/* NAVBAR */}
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:300,height:58,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 28px',background:'rgba(3,4,8,0.94)',backdropFilter:'blur(24px)',borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
        <button onClick={()=>go('hero')} style={{background:'none',border:'none',cursor:'pointer',fontWeight:700,fontSize:16,color:'#f0f0ff',letterSpacing:'-0.01em',fontFamily:'inherit'}}>
          Sehrish <span style={{background:'linear-gradient(135deg,#4f8ef7,#00d4aa)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Khan</span>
        </button>
        <div style={{display:'flex',gap:4}}>
          {NAV_S.map(s=>(
            <button key={s} onClick={()=>go(s)} style={{background:cur===s?'rgba(79,142,247,0.1)':'transparent',border:cur===s?'1px solid rgba(79,142,247,0.3)':'1px solid transparent',color:cur===s?'#4f8ef7':'#8888aa',padding:'4px 13px',borderRadius:20,cursor:'pointer',fontSize:12,fontWeight:500,transition:'all 0.2s',fontFamily:'inherit'}}>
              {LABELS[s]}
            </button>
          ))}
        </div>
        <a href="/Resume/Resume-Sehrish-Khan.pdf" download style={{...BTN,textDecoration:'none',padding:'7px 16px',fontSize:12}}>Resume</a>
      </nav>

      {/* 3D SCENE */}
      <div style={{position:'fixed',inset:0,display:'flex',alignItems:'center',justifyContent:'center',perspective:'130vmin',perspectiveOrigin:'50% 50%'}}>
        <div style={{width:'100vmin',height:'100vmin',position:'relative',transformStyle:'preserve-3d',transform:cubeT,transition:'transform 0.88s cubic-bezier(0.77,0,0.175,1)'}}>

          <div style={fs('hero')}><HeroFace go={go}/></div>
          <div style={fs('about')}><AboutFace go={go}/></div>
          <div style={fs('skills')}><SkillsFace active={skOn}/></div>
          <div style={fs('projects')}><ProjectsFace/></div>
          <div style={fs('experience')}><ExperienceFace/></div>
          <div style={fs('contact')}><ContactFace/></div>

        </div>
      </div>

      {/* NAV DOTS */}
      <div style={{position:'fixed',bottom:22,left:'50%',transform:'translateX(-50%)',display:'flex',gap:7,zIndex:300,alignItems:'center'}}>
        {SECTIONS.map(s=>(
          <button key={s} onClick={()=>go(s)} aria-label={LABELS[s]} title={LABELS[s]} style={{width:cur===s?22:7,height:7,borderRadius:4,padding:0,border:'none',cursor:'pointer',background:cur===s?'#4f8ef7':'rgba(255,255,255,0.18)',transition:'all 0.3s'}}/>
        ))}
      </div>

      {/* HINT */}
      <div style={{position:'fixed',bottom:38,left:'50%',transform:'translateX(-50%)',zIndex:300,fontSize:9,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'rgba(255,255,255,0.2)',whiteSpace:'nowrap',pointerEvents:'none'}}>
        {LABELS[cur]} · scroll · arrow keys · click nav
      </div>
    </div>
  );
}
