import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Simple intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <h1 className="hero-title reveal">UNLOCK THE WAGYU.<br />DEFY THE GRAVITY.</h1>
          <p className="hero-subtitle reveal delay-200">Wagyu Master Chef Shintani presents the anomaly.</p>
          <div className="reveal delay-400 mt-4">
            <button className="btn-gold hover-lift">Enter the Unlocked Future</button>
          </div>
        </div>
      </section>

      {/* 2. The Problem & The Key (Manifesto) */}
      <section className="manifesto-section section container text-center">
        <h2 className="section-title text-gold reveal">The Antigravity Manifesto</h2>
        <div className="manifesto-content reveal delay-200">
          <p className="lead-text">
            和牛産業における「重力」—それは非効率という名の巨大な枷である。<br />
            中間業者の連鎖、不透明な価格設定、そして最高峰の和牛のポテンシャルを縛り付ける旧態依然とした論理。
          </p>
          <p className="sub-text mt-2">
            "Gravity" in the Wagyu industry is the immense weight of inefficiency.<br />
            We eliminate the void. We unlock the heavy doors of distribution.
          </p>
        </div>
      </section>

      {/* 2.5 The Architect (Profile) */}
      <section className="profile-section section container">
        <div className="glass-panel profile-panel reveal hover-lift">
          <div className="profile-grid">
            <div className="profile-image-container">
              <img src="/shintani.png" alt="Master Chef Noriyuki Shintani" className="profile-image" />
            </div>
            <div className="profile-content text-left">
              <h2 className="section-title text-gold" style={{ marginBottom: "1rem" }}>The Master Architect</h2>
              <h3 className="serif text-white mb-4">
                Noriyuki Shintani<br />
                <span className="text-muted" style={{ fontSize: '1rem', letterSpacing: '1px' }}>Wagyu Master Chef / Creator of "Unlock"</span>
              </h3>
              <div className="profile-bio">
                <p>
                  10代より食肉業界の最前線に立ち、和牛の血統、解体、調理に至る全工程を掌握。<br />
                  数々の伝説的なステーキハウス・焼肉店をプロデュースし、独自の「スペック解体」理論を確立する。
                </p>
                <p className="mt-2">
                  「肉ではなく、歴史を味わう」という哲学のもと、日本の至宝である和牛を世界へダイレクトに届ける『Unlock』プロジェクトを作り上げる。<br />
                  和牛ビジネスにおける中間搾取を排除し、純粋な価値だけを届ける、まさに「重力」を無効化する特異点（アノマリー）である。
                </p>
              </div>
              <div className="profile-social mt-4">
                <a href="https://instagram.com/sample_shintani" target="_blank" rel="noopener noreferrer" className="social-link btn-gold" style={{ textDecoration: 'none', display: 'inline-block', padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Absolute Power (Core Skill) */}
      <section className="core-skill-section section">
        <div className="container">
          <div className="glass-panel reveal hover-lift">
            <h2 className="section-title text-gold text-center">The Absolute Power</h2>
            <div className="skill-grid">
              <div className="skill-card text-center">
                <div className="icon-wrapper">👁️</div>
                <h3 className="serif">God's Tongue</h3>
                <p>一口食べただけで牛の育ち方を逆算する絶対的な味覚。</p>
              </div>
              <div className="skill-card text-center">
                <div className="icon-wrapper">🔪</div>
                <h3 className="serif">Architect of Cuts</h3>
                <p>出口（料理）から逆算した「スペック解体技術」。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Legends (Farms) */}
      <section className="farms-section">
        <div className="hero-overlay"></div>
        <div className="container section text-center reveal">
          <h2 className="section-title text-gold">The Legends</h2>
          <p className="lead-text text-white">澤井姫和牛・有田牛の圧倒的なポテンシャル</p>
          <p className="sub-text mt-2">Connecting legendary farms directly with global distributors.<br />Zero Gravity. Zero Middlemen.</p>
        </div>
      </section>

      {/* 5. The Logic of Wealth (Business Logic) */}
      <section className="business-logic-section section container text-center">
        <h2 className="section-title text-gold reveal">The Logic of Wealth</h2>
        <p className="lead-text reveal delay-200">月間200万〜1,000万規模の利益、そして年収1億へとスケールする現実的なロードマップ。</p>

        <div className="logic-grid reveal delay-300 mt-4">
          <div className="logic-card glass-panel hover-lift">
            <h3 className="serif text-gold">Direct Connection</h3>
            <p>生産者と海外ディストリビューターを直結（ダイレクト・コネクト）。中間費用をゼロへ。</p>
          </div>
          <div className="logic-card glass-panel hover-lift">
            <h3 className="serif text-gold">Spec-Sales System</h3>
            <p>「スペック販売」×「自社店舗消化」による、一頭買いリスク0の完全無欠システム。</p>
          </div>
          <div className="logic-card glass-panel hover-lift">
            <h3 className="serif text-gold">Monthly Scalability</h3>
            <p>月間30〜50頭のハンドリング能力を証明。圧倒的スケーリング。</p>
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="cta-section section text-center">
        <div className="container reveal">
          <h2 className="section-title text-gold">The Gateway</h2>
          <p className="lead-text mb-4">Become a part of the Unlocked Future.</p>
          <button className="btn-gold hover-lift form-trigger">Apply for Private Offer</button>
        </div>
      </section>

      <footer className="footer text-center">
        <p className="text-muted">© 2026 Wagyu Master Chef Shintani. "Unlock" Project. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
