
import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Twitter, 
  Youtube, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Smartphone, 
  Gamepad2,
  ChevronRight,
  User,
  BookOpen,
  Video,
  Package,
  ArrowLeft,
  Users,
  TrendingUp,
  Target,
  MessageSquare,
  Linkedin,
  Send,
  Smile
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

// --- Types ---
type PlatformId = 'Twitter' | 'Telegram' | 'LinkedIn' | 'WeChat';

interface Project {
  id?: string;
  name: string;
  heroImg?: string;
  background: {
    period: string;
    positioning: string;
    links?: { label: string; url: string }[];
  };
  stats: { label: string; value: string; desc?: string }[];
  articles: { title: string; content: string; link?: string; img?: string; highlightText?: string }[];
  skills: string[];
}

interface CaseStudy {
  id: PlatformId;
  title: string;
  icon: any;
  color: string;
  summary: string;
  projects: Project[];
}

// --- Components ---

const XiaohongshuIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100" height="100" rx="22" fill="#FF2442"/>
    <path d="M22 45C22 43.8954 22.8954 43 24 43H30C31.1046 43 32 43.8954 32 45V62C32 63.1046 31.1046 64 30 64H24C22.8954 64 22 63.1046 22 62V45Z" fill="white"/>
    <path d="M36 35C36 33.8954 36.8954 33 38 33H44C45.1046 33 46 33.8954 46 35V62C46 63.1046 45.1046 64 44 64H38C36.8954 64 36 63.1046 36 62V35Z" fill="white"/>
    <path d="M50 45C50 43.8954 50.8954 43 52 43H58C59.1046 43 60 43.8954 60 45V62C60 63.1046 59.1046 64 58 64H52C50.8954 64 50 63.1046 50 62V45Z" fill="white"/>
    <path d="M64 35C64 33.8954 64.8954 33 66 33H72C73.1046 33 74 33.8954 74 35V62C74 63.1046 73.1046 64 72 64H66C64.8954 64 64 63.1046 64 62V35Z" fill="white"/>
    <path d="M22 35C22 33.8954 22.8954 33 24 33H30C31.1046 33 32 33.8954 32 35V38C32 39.1046 31.1046 40 30 40H24C22.8954 40 22 39.1046 22 38V35Z" fill="white"/>
    <path d="M50 35C50 33.8954 50.8954 33 52 33H58C59.1046 33 60 33.8954 60 35V38C60 39.1046 59.1046 40 58 40H52C50.8954 40 50 39.1046 50 38V35Z" fill="white"/>
    <path d="M22 68C22 66.8954 22.8954 66 24 66H72C73.1046 66 74 66.8954 74 68V71C74 72.1046 73.1046 73 72 73H24C22.8954 73 22 72.1046 22 71V68Z" fill="white"/>
  </svg>
);

const Navbar = ({ onHome }: { onHome: () => void }) => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh');
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-white brutal-border brutal-shadow-sm rounded-full px-4 md:px-8 py-3 flex items-center gap-4 md:gap-8 max-w-3xl w-full justify-between">
        <div className="flex items-center gap-2 font-bold text-xl cursor-pointer" onClick={onHome}>
          <div className="w-8 h-8 rounded-full brutal-border bg-brutal-yellow flex items-center justify-center">
            <span className="text-sm">LY</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#home" onClick={onHome} className="hover:underline underline-offset-4">{t('navbar.home')}</a>
          <a href="#about" onClick={onHome} className="hover:underline underline-offset-4">{t('navbar.about')}</a>
          <a href="#social" onClick={onHome} className="hover:underline underline-offset-4">{t('navbar.cases')}</a>
          <a href="#skills" onClick={onHome} className="hover:underline underline-offset-4">{t('navbar.skills')}</a>
        </div>
        <div className="flex items-center gap-2">
            <button onClick={toggleLang} className="brutal-btn text-xs font-bold bg-zinc-100 p-2">
                {i18n.language === 'zh' ? 'EN' : '中'}
            </button>
            <a 
                href="https://t.me/lynne00"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl brutal-border bg-black flex items-center justify-center text-white cursor-pointer hover:bg-zinc-800 transition-colors"
            >
                <Mail size={20} />
            </a>
        </div>
      </div>
    </nav>
  );
}

const CaseDetailView = ({ study, onBack }: { study: CaseStudy, onBack: () => void }) => {
  const { t } = useTranslation();

  return (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="pt-32 pb-20 px-6 max-w-5xl mx-auto"
  >
    <button 
      onClick={() => {
        onBack();
        setTimeout(() => {
          document.getElementById('social')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }}
      className="brutal-btn bg-white mb-8 flex items-center gap-2 hover:bg-zinc-50"
    >
      <ArrowLeft size={18} /> {t('caseDetail.backButton')}
    </button>

    <div className="brutal-card bg-white mb-12">
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className={`w-20 h-20 rounded-2xl brutal-border ${study.color} flex items-center justify-center shrink-0 rotate-3`}>
          <study.icon size={40} />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{study.title}</h1>
          <p className="text-xl text-zinc-600 leading-relaxed">{study.summary}</p>
          {study.id === 'Twitter' && (
            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">{t('caseDetail.projectJump')}</span>
              <a href="#ads3" className="brutal-btn bg-brutal-yellow text-xs py-1 px-3 hover:translate-x-1 hover:-translate-y-1">Ads3</a>
              <a href="#claw" className="brutal-btn bg-brutal-blue text-white text-xs py-1 px-3 hover:translate-x-1 hover:-translate-y-1">Claw Intelligence</a>
            </div>
          )}
        </div>
      </div>
    </div>

    <div className="space-y-32">
      {study.projects.map((project, pIdx) => (
        <div key={pIdx} id={project.id} className="space-y-16 scroll-mt-32">
          {/* Project Header */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-grow bg-black"></div>
            <h2 className="text-3xl font-bold px-8 py-3 brutal-border bg-white -rotate-1">
              {project.name}
            </h2>
            <div className="h-px flex-grow bg-black"></div>
          </div>

          <div className="space-y-12">
            {/* Project Background & Skills */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="brutal-card bg-zinc-50 h-full">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Target size={20} className="text-brutal-pink" /> {t('caseDetail.projectBackground')}
                </h3>
                <div className="space-y-6">
                  <div>
                    <span className="font-bold block text-zinc-500 uppercase text-[10px] tracking-widest mb-1">{t('caseDetail.timeSpan')}</span>
                    <p className="text-lg">{project.background.period}</p>
                  </div>
                  { project.name === 'Ads3 Telegram Community' ? (
                    <>
                      <div>
                        <span className="font-bold block text-zinc-500 uppercase text-[10px] tracking-widest mb-1">{t('caseDetail.communityType')}</span>
                        <p className="leading-relaxed text-zinc-700">{project.background.positioning.split('核心目标')[0].replace('社群类型：','')}</p>
                      </div>
                      <div>
                        <span className="font-bold block text-zinc-500 uppercase text-[10px] tracking-widest mb-1">{t('caseDetail.coreTarget')}</span>
                        <p className="leading-relaxed text-zinc-700">{project.background.positioning.split('核心目标')[1]}</p>
                      </div>
                    </>
                  ) : (
                    <div>
                      <span className="font-bold block text-zinc-500 uppercase text-[10px] tracking-widest mb-1">{t('caseDetail.positioning')}</span>
                      <p className="leading-relaxed text-zinc-700">{project.background.positioning}</p>
                    </div>
                  )}
                  {project.background.links && (
                    <div className="pt-2 flex flex-wrap gap-4">
                      {project.background.links.map((l, i) => (
                        <a key={i} href={l.url} target="_blank" rel="noreferrer" className="text-brutal-blue font-bold hover:underline flex items-center gap-1">
                          {l.label} <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="brutal-card bg-brutal-yellow h-full">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Code2 size={20} /> {t('caseDetail.skills')}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="bg-white brutal-border px-3 py-1.5 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="brutal-card bg-white">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <TrendingUp size={20} className="text-brutal-green" /> {t('caseDetail.coreData')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {project.stats.map((stat, i) => (
                  <div key={i} className="bg-zinc-50 brutal-border p-6 rounded-2xl flex flex-col justify-center text-center">
                    <div className="text-3xl font-black mb-2 text-black">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-tighter text-zinc-500 mb-2">{stat.label}</div>
                    {stat.desc && <div className="text-[11px] text-zinc-400 font-medium">{stat.desc}</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Core Responsibilities */}
            { (study.id === 'Telegram' || study.id === 'LinkedIn' || study.id === 'WeChat') &&
                (() => {
                    const respData = t(`caseDetail.responsibilities.${study.id.toLowerCase()}`, { returnObjects: true }) as any;
                    return (
                        <div className="brutal-card bg-white">
                            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                                {study.id === 'WeChat' ? <span>🧠</span> : <Package size={20} className="text-brutal-blue" />}
                                {respData.title}
                            </h3>
                            <div className="space-y-6 text-zinc-800">
                                {respData.sections.map((section: any, idx: number) => (
                                    <div key={idx}>
                                        <p className="font-bold text-base mb-2">{section.title}</p>
                                        <div className="pl-6 text-sm space-y-1">
                                            {section.isList ? (
                                                <ul className="list-disc list-inside space-y-1 pl-4" dangerouslySetInnerHTML={{ __html: section.points.join('') }} />
                                            ) : (
                                                section.points.map((point: string, pIdx: number) => (
                                                    <p key={pIdx} dangerouslySetInnerHTML={{ __html: point }} />
                                                ))
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })()
            }
            
            {/* Articles */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">🧾</span> {study.id === 'Telegram' ? t('caseDetail.caseStudies') : t('caseDetail.articles')}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {project.articles.map((article, i) => (
                  <div key={i} className="brutal-card bg-white group flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold leading-tight">{article.title}</h4>
                      {article.link && (
                        <a href={article.link} target="_blank" rel="noreferrer" className="bg-brutal-blue text-white p-2 brutal-border hover:translate-x-1 hover:-translate-y-1 transition-transform">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    {article.img && (
                      <div className="mb-6 brutal-border overflow-hidden rounded-xl bg-zinc-100">
                        <img 
                          src={article.img} 
                          alt={article.title} 
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                    <p className="text-zinc-600 leading-relaxed mb-6 flex-grow">{article.content}</p>
                    {article.highlightText && (
                      <div className="bg-brutal-pink/10 p-4 brutal-border border-dashed text-sm italic text-zinc-700 font-medium">
                        {article.highlightText}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>


  </motion.div>
)};

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                {t('hero.title1')} <br />
                <span className="relative inline-block px-4 py-2 mt-2">
                <span className="absolute inset-0 bg-brutal-blue brutal-border -rotate-1"></span>
                <span className="relative text-white">{t('hero.name')}</span>
                </span>
                <span>{t('hero.de')}</span>
                <span className="relative inline-block px-4 py-2 mt-2">
                <span className="absolute inset-0 bg-brutal-green brutal-border -rotate-1"></span>
                <span className="relative text-white">{t('hero.world')}</span>
                </span>
                <span>!</span>
            </h1>
            <div className="space-y-4 text-lg text-zinc-700 max-w-md">
                <p>{t('hero.p1')}</p>
                <p className="font-bold text-black italic">{t('hero.p2')}</p>
            </div>
            <div className="mt-10">
                <p className="font-bold mb-4 flex items-center gap-2">
                <MessageSquare size={20} className="text-brutal-pink" /> {t('hero.contact')}
                </p>
                <div className="flex flex-wrap gap-4">
                <a href="https://t.me/lynne00" target="_blank" rel="noreferrer" className="w-12 h-12 brutal-border bg-brutal-blue text-white flex items-center justify-center hover:bg-blue-600 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1" title="Telegram">
                    <Send size={24} />
                </a>
                <a href="https://x.com/LynneXu50314" target="_blank" rel="noreferrer" className="w-12 h-12 brutal-border bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1" title="X">
                    <Twitter size={24} />
                </a>
                <a href="https://xhslink.com/m/2XiUyfUuYT0" target="_blank" rel="noreferrer" className="w-12 h-12 brutal-border bg-brutal-pink text-white flex items-center justify-center hover:bg-pink-600 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1" title="小红书">
                    <XiaohongshuIcon size={28} />
                </a>
                <a href="mailto:lynnexu4@gmail.com" className="w-12 h-12 brutal-border bg-brutal-yellow text-black flex items-center justify-center hover:bg-yellow-400 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1" title="Email">
                    <Mail size={24} />
                </a>
                </div>
            </div>
            <div className="mt-6">
                <button className="brutal-btn bg-white hover:bg-zinc-50">
                {t('hero.portfolioButton')}
                </button>
            </div>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
            >
            <div className="w-full aspect-square rounded-full brutal-border bg-brutal-pink overflow-hidden relative">
                <img 
                src="/tx1.png" 
                alt="Creator" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full brutal-border bg-brutal-yellow flex items-center justify-center rotate-12">
                <Smile size={48} />
            </div>
            </motion.div>
        </section>
    );
}

const SocialCases = ({ onSelect }: { onSelect: (p: PlatformId) => void }) => {
    const { t } = useTranslation();
    const platforms: { id: PlatformId; name: string; icon: any; color: string; desc: string }[] = [
        { id: 'Twitter', name: t('case_studies_data.Twitter.title'), icon: Twitter, color: 'bg-brutal-blue', desc: t('case_studies_data.Twitter.summary') },
        { id: 'Telegram', name: t('case_studies_data.Telegram.title'), icon: Send, color: 'bg-brutal-green', desc: t('case_studies_data.Telegram.summary') },
        { id: 'LinkedIn', name: t('case_studies_data.LinkedIn.title'), icon: Linkedin, color: 'bg-brutal-blue', desc: t('case_studies_data.LinkedIn.summary') },
        { id: 'WeChat', name: t('case_studies_data.WeChat.title'), icon: MessageSquare, color: 'bg-brutal-green', desc: t('case_studies_data.WeChat.summary') },
    ];

    return (
        <section id="social" className="py-20 px-6 bg-white brutal-border-y">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
                <h2 className="text-4xl font-bold mb-4">{t('socialCases.title')}</h2>
                <p className="text-zinc-600 max-w-md">{t('socialCases.subtitle')}</p>
            </div>
            <div className="bg-brutal-pink brutal-border px-6 py-2 rotate-2 font-bold">
                {t('socialCases.tag')}
            </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((p, i) => (
                <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                onClick={() => onSelect(p.id)}
                className="brutal-card flex flex-col h-full cursor-pointer group"
                >
                <div className={`w-12 h-12 rounded-xl brutal-border ${p.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}>
                    <p.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-zinc-600 text-sm mb-6 flex-grow">{p.desc}</p>
                <div className="flex items-center gap-2 font-bold text-sm text-brutal-blue group-hover:translate-x-1 transition-transform">
                    {t('socialCases.viewDetails')} <ChevronRight size={16} />
                </div>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
};

const AboutDetailed = () => {
    const { t } = useTranslation();
    return (
        <section id="about" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
            >
            <div className="brutal-card bg-brutal-green relative z-10 overflow-hidden aspect-[4/5] flex flex-col items-center justify-center">
                <div className="absolute top-4 left-4 font-bold text-sm bg-white px-2 py-1 brutal-border">{t('about.idCard')}</div>
                <div className="w-48 h-48 rounded-full brutal-border bg-white mb-6 overflow-hidden">
                <img 
                    src="/tx2.png" 
                    alt="Avatar" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
                </div>
                <div className="w-full space-y-3 px-4">
                <div className="bg-brutal-yellow brutal-border p-3 rounded-xl">
                    <div className="text-[10px] uppercase font-bold opacity-60">{t('about.nameLabel')}</div>
                    <div className="font-bold text-xl">{t('about.nameValue')}</div>
                </div>
                <div className="bg-brutal-blue/20 brutal-border p-3 rounded-xl">
                    <div className="text-[10px] uppercase font-bold opacity-60">{t('about.majorLabel')}</div>
                    <div className="font-bold">{t('about.majorValue')}</div>
                </div>
                <div className="bg-brutal-pink/20 brutal-border p-3 rounded-xl">
                    <div className="text-[10px] uppercase font-bold opacity-60">{t('about.jobLabel')}</div>
                    <div className="font-bold">{t('about.jobValue')}</div>
                </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-brutal-pink brutal-border flex items-center justify-center rotate-12">
                <span className="font-bold text-xs text-center" dangerouslySetInnerHTML={{ __html: t('about.officialUse').replace(' ', '<br/>') }} />
                </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brutal-yellow brutal-border rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brutal-pink brutal-border rounded-2xl -z-10 rotate-12"></div>
            </motion.div>
            
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            >
            <h2 className="text-4xl font-bold mb-6">
                {t('about.title')} <br />
                <span className="bg-brutal-blue brutal-border px-4 py-1 inline-block text-white rotate-1">{t('about.titleHighlight')}</span>
            </h2>
            <p className="text-zinc-600 mb-8 text-lg">
                {t('about.p1')}
            </p>
            
            <div className="space-y-6">
                <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg brutal-border bg-brutal-green flex items-center justify-center shrink-0">
                    <BookOpen size={20} />
                </div>
                <div>
                    <h4 className="font-bold">{t('about.experience.title')}</h4>
                    <p className="text-sm text-zinc-500">{t('about.experience.desc')}</p>
                </div>
                </div>
                <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg brutal-border bg-brutal-pink flex items-center justify-center shrink-0">
                    <Users size={20} />
                </div>
                <div>
                    <h4 className="font-bold">{t('about.followers.title')}</h4>
                    <p className="text-sm text-zinc-500">{t('about.followers.desc')}</p>
                </div>
                </div>
                <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg brutal-border bg-brutal-blue flex items-center justify-center shrink-0">
                    <TrendingUp size={20} />
                </div>
                <div>
                    <h4 className="font-bold">{t('about.campaigns.title')}</h4>
                    <p className="text-sm text-zinc-500">{t('about.campaigns.desc')}</p>
                </div>
                </div>
            </div>
            </motion.div>
        </section>
    );
}

const Skills = () => {
    const { t } = useTranslation();
    const skillCategories = ['growth', 'campaign', 'content', 'design'];
    const icons = [TrendingUp, Target, MessageSquare, Palette];
    const colors = ['bg-brutal-yellow', 'bg-brutal-blue', 'bg-brutal-pink', 'bg-brutal-green'];

    return (
        <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold inline-block relative">
            {t('skills.title')} <span className="bg-brutal-pink brutal-border px-4 py-1 -rotate-2 inline-block text-white">{t('skills.titleHighlight')}</span>
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, i) => {
                const skillData = t(`skills.categories.${category}`, { returnObjects: true }) as { title: string; items: string[] };
                const Icon = icons[i];
                return (
                    <div key={i} className="brutal-card flex flex-col items-center text-center h-full">
                        <div className={`w-16 h-16 rounded-2xl brutal-border ${colors[i]} flex items-center justify-center mb-6 rotate-3`}>
                        <Icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{skillData.title}</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                        {skillData.items.map((item, j) => (
                            <span key={j} className="bg-zinc-100 brutal-border px-2 py-1 text-xs font-bold">
                            {item}
                            </span>
                        ))}
                        </div>
                    </div>
                );
            })}
        </div>
        </section>
    );
};

const Timeline = () => {
    const { t } = useTranslation();
    const events = t('timeline.events', { returnObjects: true }) as {date: string, title: string}[];
    const eventTypes = ['side', 'main', 'main', 'side', 'side', 'main', 'main', 'main', 'main'];
    const eventColors = ['bg-brutal-pink', 'bg-brutal-blue', 'bg-brutal-green', 'bg-brutal-yellow', 'bg-brutal-pink', 'bg-brutal-yellow', 'bg-brutal-pink', 'bg-brutal-blue', 'bg-brutal-green'];

    return (
        <section id="timeline" className="py-20 px-6 bg-zinc-50 brutal-border-y">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('timeline.title')} <span className="bg-brutal-pink brutal-border px-4 py-1 rotate-1 inline-block text-white">{t('timeline.titleHighlight')}</span></h2>
            </div>
            
            <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-black brutal-border border-0"></div>
            
            <div className="space-y-12 relative">
                <div className="flex justify-between items-center mb-8">
                <div className="brutal-card bg-white px-6 py-2 font-bold -rotate-2">{t('timeline.mainQuest')}</div>
                <div className="brutal-card bg-white px-6 py-2 font-bold rotate-2">{t('timeline.sideQuest')}</div>
                </div>

                {events.map((event, i) => (
                <div key={i} className={`flex items-center w-full ${eventTypes[i] === 'main' ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${eventTypes[i] === 'main' ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="brutal-card inline-block max-w-xs text-left"
                    >
                        <div className="mb-2">
                        <div className={`inline-block px-2 py-0.5 brutal-border text-[10px] font-bold ${eventColors[i]} mb-1`}>{event.date}</div>
                        <div className="font-bold text-sm leading-tight">{event.title}</div>
                        </div>
                    </motion.div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full brutal-border bg-white z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-black"></div>
                    </div>
                    <div className="w-1/2"></div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    );
};

const Footer = () => {
    const { t } = useTranslation();
    const contacts = [
        { icon: Send, url: 'https://t.me/lynne00', label: 'Telegram', color: 'bg-brutal-blue' },
        { icon: Twitter, url: 'https://x.com/LynneXu50314', label: 'X', color: 'bg-black text-white' },
        { icon: XiaohongshuIcon, url: 'https://xhslink.com/m/2XiUyfUuYT0', label: '小红书', color: 'bg-brutal-pink' },
        { icon: Mail, url: 'mailto:lynnexu4@gmail.com', label: 'Email', color: 'bg-brutal-yellow' },
    ];

    return (
        <footer className="py-12 px-6 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full brutal-border bg-brutal-yellow flex items-center justify-center font-bold text-2xl rotate-12">
            LY
            </div>
            <p className="font-bold text-xl">{t('footer.motto')}</p>
            <div className="flex items-center gap-4">
            {contacts.map((c, i) => (
                <a key={i} href={c.url} target="_blank" rel="noreferrer" title={c.label} className={`w-12 h-12 rounded-xl brutal-border ${c.color} flex items-center justify-center shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform`}>
                <c.icon size={24} />
                </a>
            ))}
            </div>
            <p className="text-sm text-zinc-500 mt-4">© {new Date().getFullYear()} Lynne Xu. All rights reserved.</p>
        </div>
        </footer>
    );
};

export default function App() {
  const { t } = useTranslation();
  const [activeCaseId, setActiveCaseId] = useState<PlatformId | null>(null);
  
  const CASE_STUDIES = t('case_studies_data', { returnObjects: true }) as Record<PlatformId, any>;

  const platformIcons: Record<PlatformId, any> = { Twitter, Telegram: Send, LinkedIn: Linkedin, WeChat: MessageSquare };
  const platformColors: Record<PlatformId, string> = { Twitter: 'bg-brutal-blue', Telegram: 'bg-brutal-green', LinkedIn: 'bg-brutal-blue', WeChat: 'bg-brutal-green' };

  const getCaseStudy = (id: PlatformId | null): CaseStudy | null => {
    if (!id) return null;
    const data = CASE_STUDIES[id];
    return {
      id,
      title: data.title,
      summary: data.summary,
      icon: platformIcons[id],
      color: platformColors[id],
      projects: data.projects
    }
  }

  const activeCase = getCaseStudy(activeCaseId);

  // Scroll to top when a case is selected
  useEffect(() => {
    if (activeCase) {
      window.scrollTo(0, 0);
    }
  }, [activeCase]);

  return (
    <Suspense fallback="Loading...">
        <div className="min-h-screen selection:bg-brutal-yellow selection:text-black">
        <Navbar onHome={() => setActiveCaseId(null)} />
        
        <main>
            <AnimatePresence mode="wait">
            {activeCase ? (
                <CaseDetailView 
                    key={activeCase.id}
                    study={activeCase}
                    onBack={() => setActiveCaseId(null)}
                />
            ) : (
                <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                <Hero />
                <AboutDetailed />
                <Timeline />
                <SocialCases onSelect={setActiveCaseId} />
                <Skills />
                </motion.div>
            )}
            </AnimatePresence>
        </main>
        
        <Footer />
        </div>
    </Suspense>
  );
}
