import { useState } from 'react'
import './App.css'

type Language = 'ko' | 'ja' | 'en'

const channelUrl = 'https://www.youtube.com/@jeonfamily'
const contactPageUrl = '/contact.html'

const content: Record<
  Language,
  {
    languageName: string
    pageTitle: string
    heroTitle: string
    heroDescription: string
    ctaPrimary: string
    ctaSecondary: string
    sectionIntroTitle: string
    sectionIntroBody: string
    sectionVideoTitle: string
    sectionVideoBody: string
    sectionScheduleTitle: string
    sectionScheduleBody: string
    sectionContactTitle: string
    sectionContactBody: string
    contactAction: string
    cardLabels: {
      intro: string
      video: string
      schedule: string
      contact: string
    }
  }
> = {
  ko: {
    languageName: '한국어',
    pageTitle: '전씨네 일상 채널 소개',
    heroTitle: '전씨네의 따뜻한 일상을 소개합니다',
    heroDescription:
      '가족의 평범한 하루를 기록하는 유튜브 채널입니다. 소소한 일상, 주말 브이로그, 함께 먹는 집밥 이야기를 편하게 즐겨보세요.',
    ctaPrimary: '유튜브 채널 보기',
    ctaSecondary: '최신 영상 확인',
    sectionIntroTitle: '채널 소개',
    sectionIntroBody:
      '전씨네 채널은 과장 없는 생활 기록을 중심으로 운영됩니다. 가족의 실제 생활 루틴을 담아 편안하게 볼 수 있는 콘텐츠를 지향합니다.',
    sectionVideoTitle: '주요 콘텐츠',
    sectionVideoBody:
      '평일 저녁 루틴, 주말 나들이, 가족 식사 준비, 집 정리 브이로그 등 일상 중심의 영상을 업로드합니다.',
    sectionScheduleTitle: '업로드 안내',
    sectionScheduleBody:
      '기본 업로드는 주 2회이며, 특별한 일정이 있는 주에는 짧은 일상 클립이 추가됩니다.',
    sectionContactTitle: '문의 및 협업',
    sectionContactBody:
      '채널 관련 문의는 유튜브 채널 소개란의 이메일로 연락 부탁드립니다.',
    contactAction: '문의 폼 열기',
    cardLabels: {
      intro: '소개',
      video: '콘텐츠',
      schedule: '업로드',
      contact: '문의',
    },
  },
  ja: {
    languageName: '日本語',
    pageTitle: 'チョン家の日常チャンネル紹介',
    heroTitle: 'チョン家のあたたかい日常へようこそ',
    heroDescription:
      '家族の何気ない毎日を記録するYouTubeチャンネルです。週末Vlogや家庭料理など、気軽に楽しめる動画をお届けします。',
    ctaPrimary: 'YouTubeチャンネルを見る',
    ctaSecondary: '最新動画をチェック',
    sectionIntroTitle: 'チャンネル紹介',
    sectionIntroBody:
      'チョン家チャンネルは、飾らない生活記録を中心に運営しています。リアルな家族の暮らしを丁寧に伝える内容です。',
    sectionVideoTitle: '主なコンテンツ',
    sectionVideoBody:
      '平日夜のルーティン、週末のお出かけ、家族ごはんの準備、片付けVlogなど日常中心の動画を公開しています。',
    sectionScheduleTitle: '更新スケジュール',
    sectionScheduleBody:
      '基本は週2回更新です。特別なイベントがある週にはショートクリップも追加されます。',
    sectionContactTitle: 'お問い合わせ',
    sectionContactBody:
      'お問い合わせやコラボのご相談は、YouTubeチャンネル概要欄のメールへご連絡ください。',
    contactAction: 'お問い合わせフォーム',
    cardLabels: {
      intro: '紹介',
      video: '動画',
      schedule: '更新',
      contact: '連絡',
    },
  },
  en: {
    languageName: 'English',
    pageTitle: 'Jeon Family Daily Life Channel',
    heroTitle: 'Welcome to the Jeon Family Daily Vlog',
    heroDescription:
      'This channel shares simple moments from family life. Enjoy weekend vlogs, home cooking, and calm daily routines.',
    ctaPrimary: 'Visit YouTube Channel',
    ctaSecondary: 'See Latest Videos',
    sectionIntroTitle: 'About the Channel',
    sectionIntroBody:
      'The Jeon Family channel focuses on honest daily-life stories. We share real routines in a warm and easy-to-watch style.',
    sectionVideoTitle: 'Featured Content',
    sectionVideoBody:
      'Weeknight routines, weekend outings, family meal prep, and home-organization vlogs are uploaded regularly.',
    sectionScheduleTitle: 'Upload Schedule',
    sectionScheduleBody:
      'New videos are usually posted twice a week, with occasional short clips during special weeks.',
    sectionContactTitle: 'Contact',
    sectionContactBody:
      'For collaborations or channel questions, please use the email listed in the YouTube channel description.',
    contactAction: 'Open Contact Form',
    cardLabels: {
      intro: 'About',
      video: 'Videos',
      schedule: 'Schedule',
      contact: 'Contact',
    },
  },
}

function App() {
  const [language, setLanguage] = useState<Language>('ko')
  const t = content[language]

  return (
    <div className="page">
      <header className="topbar">
        <p className="brand">JEON FAMILY</p>
        <div className="language-switch" role="group" aria-label="Language selector">
          {(['ko', 'ja', 'en'] as const).map((lang) => (
            <button
              key={lang}
              className={language === lang ? 'lang-btn active' : 'lang-btn'}
              onClick={() => setLanguage(lang)}
            >
              {content[lang].languageName}
            </button>
          ))}
        </div>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">{t.pageTitle}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-description">{t.heroDescription}</p>
          <div className="cta-row">
            <a className="btn primary" href={channelUrl} target="_blank" rel="noreferrer">
              {t.ctaPrimary}
            </a>
            <a className="btn secondary" href={`${channelUrl}/videos`} target="_blank" rel="noreferrer">
              {t.ctaSecondary}
            </a>
          </div>
        </section>

        <section className="grid">
          <article className="card">
            <p className="card-tag">{t.cardLabels.intro}</p>
            <h2>{t.sectionIntroTitle}</h2>
            <p>{t.sectionIntroBody}</p>
          </article>
          <article className="card">
            <p className="card-tag">{t.cardLabels.video}</p>
            <h2>{t.sectionVideoTitle}</h2>
            <p>{t.sectionVideoBody}</p>
          </article>
          <article className="card">
            <p className="card-tag">{t.cardLabels.schedule}</p>
            <h2>{t.sectionScheduleTitle}</h2>
            <p>{t.sectionScheduleBody}</p>
          </article>
          <article className="card">
            <p className="card-tag">{t.cardLabels.contact}</p>
            <h2>{t.sectionContactTitle}</h2>
            <p>{t.sectionContactBody}</p>
            <a className="btn secondary contact-btn" href={contactPageUrl} target="_blank" rel="noreferrer">
              {t.contactAction}
            </a>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
