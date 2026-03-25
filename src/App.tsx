/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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

// --- Types ---
type Platform = 'Twitter' | 'Telegram' | 'LinkedIn' | 'WeChat';

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
  id: Platform;
  title: string;
  icon: any;
  color: string;
  summary: string;
  projects: Project[];
}

// --- Data ---
const CASE_STUDIES: Record<Platform, CaseStudy> = {
  Twitter: {
    id: 'Twitter',
    title: 'Twitter (X) 运营案例',
    icon: Twitter,
    color: 'bg-brutal-blue',
    summary: '深耕 Web3 领域，通过 AI 驱动与生态合作实现 Ads3.ai 与 Claw Intelligence 的爆发式增长。',
    projects: [
      {
        id: 'ads3',
        name: 'Ads3',
        background: {
          period: '2024 – 2026.3',
          positioning: '将社交网络10亿用户引入 Web3，通过 AI 精准广告 + 多维流量聚合，帮助加密项目、GameFi、DApp 实现跨生态爆发式增长。'
        },
        stats: [
          { label: '战略合作伙伴', value: '200+', desc: 'PlaysOut、Fomoin、Ant.fun 等' },
          { label: '单帖最高浏览量', value: '36K+', desc: 'AMA 预告帖' },
          { label: '单帖最高互动', value: '1K+', desc: 'Airdrop & Quest 活动帖' },
          { label: '链上用户增长', value: '225万', desc: 'BNB Chain 30天 Top DApp' }
        ],
        articles: [
          { 
            title: '1. 账号增长与品牌定位', 
            content: '成功打造“AI驱动Web3智能广告”领军者形象。通过发布覆盖 Exchange、Infra、AI、Gaming 等核心赛道的 200+ 合作伙伴全景图，确立了 Ads3 在 Web3 流量聚合领域的权威地位。',
            link: 'https://x.com/ads3_ai/status/1993980650530246815',
            img: '/ads3tweet1.png'
          },
          { 
            title: '2. 战略合作伙伴 BD 与生态扩张', 
            content: '主导并执行了 200+ 高价值合作伙伴的官宣。以与 Fomoin 的战略合作为例，通过 AI 驱动的精准投放能力，显著提升了合作伙伴的获客效率与品牌曝光。',
            link: 'https://x.com/ads3_ai/status/2031203179833205201',
            img: '/ads3tweet2.png'
          },
          { 
            title: '3. 活动策划与社区运营', 
            content: '策划并主持了多场行业标杆级活动。其中「AI, Data & Smart Growth in Web3」Twitter Space AMA 吸引了数千名听众，邀请行业顶级大咖深度探讨 Web3 增长新范式。',
            link: 'https://x.com/ads3_ai/status/2034155549563216279',
            img: '/ads3tweet3.png'
          },
          {
            title: '4. 链上增长直接贡献',
            content: '凭借卓越的流量分发能力，助力 Ads3 登顶 opBNB 链上 DApp 排行榜第一名。在 30 天内实现 300K+ 用户增长及 301K+ 交易量，证明了平台的实战威力。',
            link: 'https://x.com/ads3_ai/status/1964984701036458286',
            img: '/ads3tweet4.png'
          },
          {
            title: '5. 深度案例研究与技术输出',
            content: '发布多篇深度 Case Study，详细拆解如何通过 AI 算法优化获客路径，成功将项目 CPA 降低 4 倍。这些专业内容极大地增强了 B 端客户的转化信心。',
            link: 'https://x.com/ads3_ai/status/1963499017171501268',
            img: '/ads3tweet5.png'
          }
        ],
        skills: ['内容策划', '合作伙伴拓展', '活动运营', '数据分析', 'Web3趋势洞察', 'Twitter算法优化', '品牌定位', '社区增长']
      },
      {
        id: 'claw',
        name: 'Claw Intelligence',
        background: {
          period: '2025.12 – 2026.3',
          positioning: '通过 AI Agent + MCP 协议聚合 market data、on-chain signals，帮助 Web3 用户实现“数据 → 洞察 → 一键执行”的智能交易闭环。',
          links: [
            { label: '官网', url: 'https://clawintelli.com/' },
            { label: 'X 账号', url: 'https://x.com/ClawIntelli' }
          ]
        },
        stats: [
          { label: '战略合作伙伴', value: '20+', desc: 'MarsCat、Hash Epoch 等' },
          { label: '投资背书', value: '5', desc: 'Castrum Capital 战略投资' },
          { label: '单帖最高浏览量', value: '9.6k+', desc: 'MCP功能介绍' },
          { label: '单帖最高互动', value: '286+', desc: '签到功能上线' }
        ],
        articles: [
          { 
            title: '1. 战略合作伙伴BD与生态扩张', 
            content: '主导多起高价值合作伙伴公告，快速构建链上智能生态网络。',
            link: 'https://x.com/ClawIntelli/status/2030825905963094352',
            img: '/clawtweet1.png',
            highlightText: '示例：Exciting partnership alert: Chain Intelligence × DataVLT!'
          },
          { 
            title: '2. 资本背书与投资宣传', 
            content: '成功宣传 Castrum Capital 战略投资，强化项目可信度。',
            link: 'https://x.com/ClawIntelli/status/2034819940591550949',
            img: '/clawtweet2.png'
          },
          {
            title: '3. 行业影响力打造',
            content: '作为嘉宾参与 Ads3.ai 重磅 AMA，定位 Web3 AI 智能增长领域专业声音。',
            link: 'https://x.com/ClawIntelli/status/2034456911505158224',
            img: '/clawtweet3.png'
          },
          {
            title: '4. 产品迭代与内容策略',
            content: '持续推广产品功能（如 Isolated Sandbox），采用“合作伙伴 + 投资 + 行业热点”组合策略。',
            link: 'https://x.com/ClawIntelli/status/2032275456855273946',
            img: '/clawtweet4.png'
          }
        ],
        skills: ['内容策划', '合作伙伴拓展', '资本背书宣传', 'AMA 嘉宾运营', 'AI Agent 趋势洞察', 'Twitter 算法优化', '品牌升级', '社区增长']
      }
    ]
  },
  Telegram: {
    id: 'Telegram',
    title: 'Telegram 社区运营',
    icon: Send,
    color: 'bg-brutal-green',
    summary: '负责 Ads3 官方社区增长与转化，通过活动机制设计与转化路径优化，构建高活跃 Web3 社区。',
    projects: [
      {
        name: 'Ads3 Telegram Community',
        background: {
          period: '2025.09 – 2026.03',
          positioning: '社群类型：空投社区 + 项目官方社区。 核心目标：用户增长（Acquisition）+ 活跃提升（Engagement）+ 转化（Conversion）。'
        },
        stats: [
          { label: '社群规模', value: '115K+', desc: '从 15K 增长至 115K+' },
          { label: '月活跃用户', value: '15K+', desc: 'MAU 保持高位' },
          { label: '活跃率', value: '13%+', desc: '远高于行业平均水平' },
          { label: 'Quest参与', value: '3K-5K', desc: '平均每场活动参与人数' }
        ],
        articles: [
          { 
            title: 'Ads3空投联盟接力赛活动', 
            content: '策划 15 天联合接力赛，实现 17.2k 浏览，参与人数 +8,000，转发裂变率 20%+。',
            link: 'https://t.me/ads3_ai_news/845',
            img: '/tg1.png'
          },
          { 
            title: 'BNB&Ads3空投活动', 
            content: '单次活动实现 19k 浏览，参与人数 5,000+，直接带动注册转化 +1,200 用户。',
            link: 'https://t.me/ads3_ai_news/602',
            img: '/tg2.png'
          }
        ],
        skills: ['社群运营', '活动策划', '转化漏斗', '自动化工具', '裂变机制', '用户留存', 'KOL 合作']
      }
    ]
  },
  LinkedIn: {
    id: 'LinkedIn',
    title: 'LinkedIn B端运营',
    icon: Linkedin,
    color: 'bg-brutal-blue',
    summary: '负责 TopOn 账号内容运营与增长策略，围绕移动广告变现构建 B 端内容体系，实现品牌曝光与获客双增长。',
    projects: [
      {
        name: 'TopOn LinkedIn Strategy',
        background: {
          period: '2024.09 – 2025.01',
          positioning: '品牌曝光 + B端获客 + 产品教育，目标用户为游戏开发者、App 开发者及出海团队。'
        },
        stats: [
          { label: '粉丝增长', value: '+33%', desc: '6K → 8K' },
          { label: '整体曝光', value: '+110%', desc: '内容触达大幅提升' },
          { label: 'Leads 增长', value: '+22%', desc: '月均商务咨询数' },
          { label: '官网点击', value: '+28%', desc: 'CTR 显著提升' }
        ],
        articles: [
          { 
            title: '🏆 案例1：奖项传播（高品牌曝光）', 
            content: 'TopOn 获得 GTC Award 传播，曝光高于平均值 +80%，有效增强行业信任度。',
            img: '/lk1.png'
          },
          { 
            title: '🎄 案例2：节日营销（高互动）', 
            content: 'Christmas Campaign 互动率提升 +60%，在 B 端内容中成功加入“情绪价值”。',
            img: '/lk2.png'
          },
          { 
            title: '🚀 案例3：功能发布（高转化）', 
            content: 'Incentivized Anti-Fraud 功能发布，CTR 提升 +35%，Leads 转化明显提升。',
            img: '/lk3.png'
          }
        ],
        skills: ['B端内容营销', '全英文输出', 'SaaS增长', '行业洞察', 'Leads转化', '品牌公关', '社交销售']
      }
    ]
  },
  WeChat: {
    id: 'WeChat',
    title: '微信公众号运营',
    icon: MessageSquare,
    color: 'bg-brutal-green',
    summary: '负责 TopOn 官方公众号内容运营，通过结构化内容体系与选题策略，实现品牌传播与私域转化。',
    projects: [
      {
        name: 'TopOn 微信公众号',
        background: {
          period: '2024.09 – 2025.01',
          positioning: '品牌宣传 + 行业内容 + 用户教育 + 转化导流，目标用户为出海开发者及广告变现从业者。'
        },
        stats: [
          { label: '粉丝增长', value: '+66%', desc: '3K → 5K' },
          { label: '阅读量提升', value: '+166%', desc: '平均阅读 800+' },
          { label: '爆款阅读', value: '1,500+', desc: '单篇最高阅读量' },
          { label: '私域转化', value: '+20%', desc: '咨询/注册转化率' }
        ],
        articles: [
          { 
            title: '📊 案例1：行业趋势类（高专业度）', 
            content: '《App商业化该怎么做？你需要选择合适的广告平台》，解决开发者痛点，带动官网点击。',
            link: 'https://mp.weixin.qq.com/s/u1lN0CLDQNXnR1YNhtI-Zg',
            img: '/gz1.png'
          },
          { 
            title: '🌏 案例2：市场洞察类（系列内容）', 
            content: '《探秘印尼游戏市场：挖掘无限潜力》，强化 TopOn “出海专家”定位。',
            link: 'https://mp.weixin.qq.com/s/VIQpSdHHoEd9_GPCfwtkBQ',
            img: '/gz2.png'
          },
          { 
            title: '🚀 案例3：产品功能类（转化型）', 
            content: '《TopOn智能聚合系统：开启广告变现“24小时在线”智能优化》，将功能转化为收益逻辑。',
            link: 'https://mp.weixin.qq.com/s/AqckJ75NIpKqCRISukwM-Q',
            img: '/gz3.png'
          }
        ],
        skills: ['内容矩阵', '选题策划', '排版设计', '私域运营', '转化设计', '数据驱动', '用户增长']
      }
    ]
  }
};

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

const Navbar = ({ onHome }: { onHome: () => void }) => (
  <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
    <div className="bg-white brutal-border brutal-shadow-sm rounded-full px-8 py-3 flex items-center gap-8 max-w-2xl w-full justify-between">
      <div className="flex items-center gap-2 font-bold text-xl cursor-pointer" onClick={onHome}>
        <div className="w-8 h-8 rounded-full brutal-border bg-brutal-yellow flex items-center justify-center">
          <span className="text-sm">LY</span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 font-medium">
        <a href="#home" onClick={onHome} className="hover:underline underline-offset-4">首页</a>
        <a href="#about" onClick={onHome} className="hover:underline underline-offset-4">关于我</a>
        <a href="#social" onClick={onHome} className="hover:underline underline-offset-4">案例</a>
        <a href="#skills" onClick={onHome} className="hover:underline underline-offset-4">技能</a>
      </div>
      <a 
        href="https://t.me/lynne00"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 rounded-xl brutal-border bg-black flex items-center justify-center text-white cursor-pointer hover:bg-zinc-800 transition-colors"
      >
        <Mail size={20} />
      </a>
    </div>
  </nav>
);

const CaseDetailView = ({ study, onBack }: { study: CaseStudy, onBack: () => void }) => (
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
      <ArrowLeft size={18} /> 返回案例
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
              <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">点击下方按钮可快速跳转至相应项目详情:</span>
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
                  <Target size={20} className="text-brutal-pink" /> 项目背景
                </h3>
                <div className="space-y-6">
                  <div>
                    <span className="font-bold block text-zinc-500 uppercase text-[10px] tracking-widest mb-1">时间周期</span>
                    <p className="text-lg">{project.background.period}</p>
                  </div>
                  { project.name === 'Ads3 Telegram Community' ? (
                    <>
                      <div>
                        <span className="font-bold block text-zinc-500 uppercase text-[10px] tracking-widest mb-1">社群类型</span>
                        <p className="leading-relaxed text-zinc-700">空投社区 + 项目官方社区</p>
                      </div>
                      <div>
                        <span className="font-bold block text-zinc-500 uppercase text-[10px] tracking-widest mb-1">核心目标</span>
                        <p className="leading-relaxed text-zinc-700">用户增长（Acquisition）+ 活跃提升（Engagement）+ 转化（Conversion）</p>
                      </div>
                    </>
                  ) : (
                    <div>
                      <span className="font-bold block text-zinc-500 uppercase text-[10px] tracking-widest mb-1">账号定位</span>
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
                  <Code2 size={20} /> 负责技能关键词
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
                <TrendingUp size={20} className="text-brutal-green" /> 核心数据亮点
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
            {project.name === 'Ads3 Telegram Community' && (
              <div className="brutal-card bg-white">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                  <Package size={20} className="text-brutal-blue" />
                  核心职责与执行
                </h3>
                <div className="space-y-6 text-zinc-800">
                  <div>
                    <p className="font-bold text-base mb-2">1️⃣. 社群基础运营（稳定社区结构）</p>
                    <div className="pl-6 text-sm space-y-1">
                      <p><strong>日常控场:</strong> Spam清理 / 风控 / 禁言机制</p>
                      <p><strong>新人引导体系:</strong> 自动欢迎话术 (Bot), Pinned Message (规则 + 路径引导), FAQ整理</p>
                      <p className="font-bold pt-1">👉 确保社区“可控 + 可持续”</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-base mb-2">2️⃣. 活跃机制设计（核心增长点）</p>
                    <div className="pl-6 text-sm space-y-1">
                      <p><strong>构建多层互动体系:</strong></p>
                      <p>• 🎤 <strong>AMA活动 (定期):</strong> 邀请项目方/KOL, 实时互动+奖励</p>
                      <p>• 🎁 <strong>Giveaway/空投:</strong> 任务驱动 (关注/转发/注册) 快速拉新</p>
                      <p>• ✅ <strong>Quest任务体系:</strong> 引导用户完成注册, 使用产品, 社交传播</p>
                      <p>• 🔗 <strong>裂变机制 (Referral):</strong> 邀请奖励, 用户自传播增长</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-base mb-2">3️⃣. 转化路径设计（关键能力）</p>
                    <div className="pl-6 text-sm space-y-1">
                      <p><strong>搭建完整转化漏斗:</strong> Telegram → 注册 → 使用产品 → 留存</p>
                      <p><strong>核心手段:</strong> Bot自动引导, 任务驱动转化, 高频话术引导 (管理员+活动)</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-base mb-2">4️⃣. 自动化与工具应用（加分项）</p>
                    <div className="pl-6 text-sm space-y-1">
                      <p><strong>Telegram Bot:</strong> 自动欢迎, 自动任务分发, 活动平台 (Quest系统), 数据监控 (活跃/转化 tracking)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Core Responsibilities for LinkedIn */}
            {project.name === 'TopOn LinkedIn Strategy' && (
              <div className="brutal-card bg-white">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                  <Package size={20} className="text-brutal-blue" />
                  核心职责与执行
                </h3>
                <div className="space-y-6 text-zinc-800">
                  <div>
                    <p className="font-bold text-base mb-2">1️⃣ 内容体系搭建（从0到结构化）</p>
                    <div className="pl-6 text-sm space-y-2">
                      <p><strong>建立三大内容支柱 (Content Pillars):</strong></p>
                      <ul className="list-disc list-inside space-y-1 pl-4">
                        <li><strong>行业价值内容:</strong> 广告变现策略 (eCPM / Fill Rate / LTV), 出海增长趋势</li>
                        <li><strong>品牌&活动内容:</strong> 奖项传播 (Award), 节日营销 (Christmas Campaign)</li>
                        <li><strong>产品&功能内容:</strong> 新功能发布 (如 Anti-Fraud), 产品能力拆解 (技术优势)</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-base mb-2">2️⃣ 选题与内容策略</p>
                    <div className="pl-6 text-sm space-y-1">
                        <p>• 教育型内容（建立专业信任）</p>
                        <p>• 品牌型内容（增强认知与背书）</p>
                        <p>• 转化型内容（引导点击 & demo）</p>
                        <p className="font-bold pt-1">👉 用“价值内容”替代硬广告</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-base mb-2">3️⃣ 文案与表达优化（重点能力）</p>
                    <div className="pl-6 text-sm space-y-1">
                        <p><strong>全英文内容输出:</strong> (B端专业表达)</p>
                        <p>将复杂广告技术 → 转化为“业务增长语言”</p>
                        <div className="pl-4">
                            <p>❌ <strong>技术描述:</strong> Ad Mediation Optimization</p>
                            <p>✅ <strong>用户语言:</strong> Increase Revenue with Smarter Ad Allocation</p>
                        </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-base mb-2">4️⃣ 产品推广 & 内容转化</p>
                    <div className="pl-6 text-sm space-y-1">
                        <p>深度参与产品功能发布 (如 Anti-Fraud 功能)</p>
                        <p><strong>将功能包装为:</strong></p>
                        <ul className="list-disc list-inside space-y-1 pl-4">
                            <li>用户痛点解决方案</li>
                            <li>可量化收益点 (Revenue / Security)</li>
                        </ul>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-base mb-2">5️⃣ 社媒矩阵联动</p>
                    <div className="pl-6 text-sm space-y-1">
                        <p>LinkedIn × Twitter × 官网内容同步</p>
                        <p>提升内容复用率 & 品牌一致性</p>
                        <p>支撑整体增长漏斗 (Awareness → Conversion)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Core Responsibilities for WeChat */}
            {project.name === 'TopOn 微信公众号' && (
              <div className="brutal-card bg-white">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                  <span>🧠</span>
                  核心职责与执行
                </h3>
                <div className="space-y-6 text-zinc-800">
                  <div>
                    <p className="font-bold text-base mb-2">1️⃣ 内容体系搭建（结构化运营）</p>
                    <div className="pl-6 text-sm space-y-2">
                      <p><strong>建立公众号核心内容矩阵:</strong></p>
                      <ul className="list-disc list-inside space-y-1 pl-4">
                        <li><strong>行业内容 (建立专业信任):</strong> 出海广告趋势, 各地区市场洞察 (日本 / 东南亚等)</li>
                        <li><strong>产品内容 (强化认知):</strong> TopOn 功能解析 (如智能聚合、反作弊)</li>
                        <li><strong>品牌&活动内容:</strong> 官方动态 / 节日 / 奖项</li>
                        <li><strong>深度内容 (提升粘性):</strong> 出海方法论, 广告变现策略拆解</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-base mb-2">2️⃣ 选题与栏目设计（差异化亮点）</p>
                    <div className="pl-6 text-sm space-y-1">
                      <p><strong>打造系列化栏目，提高用户复访率:</strong></p>
                      <p>• 🌏 <strong>地区广告市场洞察系列:</strong> 日本 / 东南亚 / 欧美用户画像</p>
                      <p>• 📊 <strong>广告变现指南:</strong> 从入门到进阶 (教育型内容)</p>
                      <p>• 🧠 <strong>TopInsight 专栏:</strong> 行业趋势 + 数据解读</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-base mb-2">3️⃣ 内容结构与写作能力</p>
                    <div className="pl-6 text-sm space-y-1">
                      <p><strong>沉淀标准文章结构模板:</strong></p>
                      <div className="pl-4">
                        <p><strong>开头:</strong> 痛点/趋势切入 (Hook)</p>
                        <p><strong>中段:</strong> 方法论 + 数据支撑</p>
                        <p><strong>结尾:</strong> 解决方案 + CTA引导</p>
                      </div>
                      <p><strong>标题优化方向:</strong></p>
                      <div className="pl-4">
                        <p><strong>数据驱动:</strong> (如：“提升30%收入的方法”)</p>
                        <p><strong>场景驱动:</strong> (如：“为什么你的广告收入上不去？”)</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-base mb-2">4️⃣ 排版与阅读体验优化</p>
                    <div className="pl-6 text-sm space-y-1">
                      <p>使用 <strong>秀米 / 135编辑器</strong> 完成排版</p>
                      <p>强化信息层级 (标题 / 卡片 / 分割)</p>
                      <p>提升移动端阅读体验 (适配碎片化阅读)</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-base mb-2">5️⃣ 转化设计（关键能力）</p>
                    <div className="pl-6 text-sm space-y-1">
                      <p><strong>每篇文章嵌入:</strong></p>
                      <ul className="list-disc list-inside space-y-1 pl-4">
                        <li>官网跳转</li>
                        <li>产品入口</li>
                        <li>联系方式 (商务/社群)</li>
                      </ul>
                      <p><strong>构建路径:</strong> 内容 → 信任 → 点击 → 转化</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Articles */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">🧾</span> {study.id === 'Telegram' ? '代表活动案例' : '代表文章'}
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
);

const Hero = () => (
  <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
        Welcome to <br />
        <span className="relative inline-block px-4 py-2 mt-2">
          <span className="absolute inset-0 bg-brutal-blue brutal-border -rotate-1"></span>
          <span className="relative text-white">Lynne</span>
        </span>
        <span> 的</span>
        <span className="relative inline-block px-4 py-2 mt-2">
          <span className="absolute inset-0 bg-brutal-green brutal-border -rotate-1"></span>
          <span className="relative text-white">世界</span>
        </span>
        <span>!</span>
      </h1>
      <div className="space-y-4 text-lg text-zinc-700 max-w-md">
        <p>帮助 Web3 项目通过数据驱动的社交媒体策略、社区建设以及跨平台营销活动实现增长。</p>
        <p className="font-bold text-black italic">Anyway，欢迎来到 Lynne 的世界！</p>
      </div>
      <div className="mt-10">
        <p className="font-bold mb-4 flex items-center gap-2">
          <MessageSquare size={20} className="text-brutal-pink" /> 联系方式:
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
          View Portfolio
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

const SocialCases = ({ onSelect }: { onSelect: (p: Platform) => void }) => {
  const platforms: { id: Platform; name: string; icon: any; color: string; desc: string }[] = [
    { id: 'Twitter', name: 'Twitter (X)', icon: Twitter, color: 'bg-brutal-blue', desc: 'Ads3.ai 与 Claw Intelligence 运营案例，96K+ 粉丝增长。' },
    { id: 'Telegram', name: 'Telegram', icon: Send, color: 'bg-brutal-green', desc: '115K+ 成员社区运营，高活跃与高转化增长策略。' },
    { id: 'LinkedIn', name: 'LinkedIn', icon: Linkedin, color: 'bg-brutal-blue', desc: 'TopOn B端内容运营，品牌曝光与获客双增长。' },
    { id: 'WeChat', name: '微信公众号', icon: MessageSquare, color: 'bg-brutal-green', desc: 'TopOn 官方公众号运营，结构化内容与私域转化。' },
  ];

  return (
    <section id="social" className="py-20 px-6 bg-white brutal-border-y">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">社媒运营案例</h2>
            <p className="text-zinc-600 max-w-md">深耕 Web3 与 B 端领域，沉淀多维度的社媒增长与转化方法论。</p>
          </div>
          <div className="bg-brutal-pink brutal-border px-6 py-2 rotate-2 font-bold">
            CASE STUDIES
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
                查看详细案例 <ChevronRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutDetailed = () => (
  <section id="about" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="brutal-card bg-brutal-green relative z-10 overflow-hidden aspect-[4/5] flex flex-col items-center justify-center">
        <div className="absolute top-4 left-4 font-bold text-sm bg-white px-2 py-1 brutal-border">ID CARD</div>
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
            <div className="text-[10px] uppercase font-bold opacity-60">Name</div>
            <div className="font-bold text-xl">Lynne</div>
          </div>
          <div className="bg-brutal-blue/20 brutal-border p-3 rounded-xl">
            <div className="text-[10px] uppercase font-bold opacity-60">Major</div>
            <div className="font-bold">商务英语</div>
          </div>
          <div className="bg-brutal-pink/20 brutal-border p-3 rounded-xl">
            <div className="text-[10px] uppercase font-bold opacity-60">Job</div>
            <div className="font-bold">市场运营&BD</div>
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-brutal-pink brutal-border flex items-center justify-center rotate-12">
          <span className="font-bold text-xs text-center">OFFICIAL<br/>USE</span>
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
        Who's behind all this <br />
        <span className="bg-brutal-blue brutal-border px-4 py-1 inline-block text-white rotate-1">great work?</span>
      </h2>
      <p className="text-zinc-600 mb-8 text-lg">
        我一直对新东西很好奇，在高强度的工作节奏里，一边做增长，一边折腾内容、技术和各种新玩法。
      </p>
      
      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-lg brutal-border bg-brutal-green flex items-center justify-center shrink-0">
            <BookOpen size={20} />
          </div>
          <div>
            <h4 className="font-bold">1+ years of Web3 experience</h4>
            <p className="text-sm text-zinc-500">虽然我只有一年多Web3经验，但该试的、该踩的、该复盘的基本都没落下。</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-lg brutal-border bg-brutal-pink flex items-center justify-center shrink-0">
            <Users size={20} />
          </div>
          <div>
            <h4 className="font-bold">Managed 110K+ followers</h4>
            <p className="text-sm text-zinc-500">主要是 Twitter项目账号，从冷启动到稳定增长都有做过</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-lg brutal-border bg-brutal-blue flex items-center justify-center shrink-0">
            <TrendingUp size={20} />
          </div>
          <div>
            <h4 className="font-bold">Ran 30+ campaigns</h4>
            <p className="text-sm text-zinc-500">AMA、空投、联动活动这些，从想玩法到落地基本都跑过一遍</p>
          </div>
        </div>
      </div>
      

    </motion.div>
  </section>
);

const Skills = () => {
  const skills = [
    { 
      title: 'Growth & Strategy', 
      icon: TrendingUp, 
      color: 'bg-brutal-yellow', 
      items: ['社媒增长', '增长模型', '数据复盘', '用户转化'] 
    },
    { 
      title: 'Campaign & BD', 
      icon: Target, 
      color: 'bg-brutal-blue', 
      items: ['活动机制设计', '项目合作对接', '资源整合', '增长活动执行']
    },
    { 
      title: 'Content & Copywriting', 
      icon: MessageSquare, 
      color: 'bg-brutal-pink', 
      items: ['Twitter Threads', '活动文案', '品牌表达', '内容结构设计']
    },
    { 
      title: 'Design & Tools', 
      icon: Palette, 
      color: 'bg-brutal-green', 
      items: ['Figma', 'Canva', 'Nano banana', '视觉排版', '内容配图', '基础剪辑']
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold inline-block relative">
          My broad <span className="bg-brutal-pink brutal-border px-4 py-1 -rotate-2 inline-block text-white">set of skills</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <div key={i} className="brutal-card flex flex-col items-center text-center h-full">
            <div className={`w-16 h-16 rounded-2xl brutal-border ${skill.color} flex items-center justify-center mb-6 rotate-3`}>
              <skill.icon size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skill.items.map((item, j) => (
                <span key={j} className="bg-zinc-100 brutal-border px-2 py-1 text-xs font-bold">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Timeline = () => {
  const events = [
    { date: '2026.03', title: '激动地开始AI编程，上线了我的个人网站', type: 'side', color: 'bg-brutal-pink' },
    { date: '2025.04 – 至今', title: 'Ads3 市场运营', type: 'main', color: 'bg-brutal-blue' },
    { date: '2025.10-2026.1', title: 'GINFX 社区运营', type: 'main', color: 'bg-brutal-green' },
    { date: '2025.12', title: '开始认真用 AI（ChatGPT / Gemini等）配合 飞书多维表格，把工作效率拉满', type: 'side', color: 'bg-brutal-yellow' },
    { date: '2025.09', title: '发布第一条关于web3图文，成为一名小红书&推特博主', type: 'side', color: 'bg-brutal-pink' },
    { date: '2025年6 月', title: '毕业', type: 'main', color: 'bg-brutal-yellow' },
    { date: '2025.01 – 2025.03', title: 'TrendX 社区运营', type: 'main', color: 'bg-brutal-pink' },
    { date: '2024.7 – 2024.12', title: 'Topon 市场实习生', type: 'main', color: 'bg-brutal-blue' },
    { date: '2024.9 – 2024.11', title: 'Websea DEXMod', type: 'main', color: 'bg-brutal-green' },
  ];

  return (
    <section id="timeline" className="py-20 px-6 bg-zinc-50 brutal-border-y">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">地球Online <span className="bg-brutal-pink brutal-border px-4 py-1 rotate-1 inline-block text-white">开放游戏进度</span></h2>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-black brutal-border border-0"></div>
          
          <div className="space-y-12 relative">
            <div className="flex justify-between items-center mb-8">
              <div className="brutal-card bg-white px-6 py-2 font-bold -rotate-2">主线任务</div>
              <div className="brutal-card bg-white px-6 py-2 font-bold rotate-2">支线任务</div>
            </div>

            {events.map((event, i) => (
              <div key={i} className={`flex items-center w-full ${event.type === 'main' ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${event.type === 'main' ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="brutal-card inline-block max-w-xs text-left"
                  >
                    <div className="mb-2">
                      <div className={`inline-block px-2 py-0.5 brutal-border text-[10px] font-bold ${event.color} mb-1`}>{event.date}</div>
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
        <p className="font-bold text-xl">Stay Brutal, Stay Creative.</p>
        <div className="flex flex-wrap justify-center gap-6">
          {contacts.map((contact, i) => (
            <a 
              key={i} 
              href={contact.url} 
              target="_blank" 
              rel="noreferrer"
              className={`w-12 h-12 brutal-border ${contact.color} flex items-center justify-center hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
              title={contact.label}
            >
              <contact.icon size={24} />
            </a>
          ))}
        </div>
        <p className="text-sm text-zinc-500 mt-4">© 2026 Lynne 的世界. Built with Passion & AI.</p>
      </div>
    </footer>
  );
};

export default function App() {
  const [activeCase, setActiveCase] = useState<Platform | null>(null);

  // Scroll to top when a case is selected
  useEffect(() => {
    if (activeCase) {
      window.scrollTo(0, 0);
    }
  }, [activeCase]);

  return (
    <div className="min-h-screen selection:bg-brutal-yellow selection:text-black">
      <Navbar onHome={() => setActiveCase(null)} />
      
      <main>
        <AnimatePresence mode="wait">
          {activeCase ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CaseDetailView 
                study={CASE_STUDIES[activeCase]} 
                onBack={() => setActiveCase(null)} 
              />
            </motion.div>
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
              <SocialCases onSelect={setActiveCase} />
              <Skills />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}
