export default function Home() {
  return (
    <main className="crust-page">
      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="nav-left">
          <a href="#" className="nav-link active">HOME</a>
          <a href="#" className="nav-link">MENU</a>
          <a href="#" className="nav-link">LOCATIONS</a>
          <a href="#" className="nav-link">ORDER ONLINE</a>
        </div>
        <div className="nav-logo">
          <div className="logo-circle">
            <span className="logo-text-top">CRUST</span>
            <span className="logo-pizza"></span>
            <span className="logo-text-bottom">PIZZA CO.</span>
          </div>
        </div>
        <div className="nav-right">
          <a href="#" className="nav-link">ABOUT</a>
          <a href="#" className="nav-link">CONTACT</a>
          <div className="nav-icons">
            <button className="icon-btn" aria-label="User">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
            <button className="icon-btn" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.738l7.72-8.833L1.254 2.25H8.08l4.257 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
          </div>
          <a href="#" className="btn-pill btn-orange">CALL NOW</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero tape-frame">
        <img
          src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=1200&q=80"
          alt="Delicious pizza"
          className="hero-img"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">MADE-FROM SCRATCH</div>
          <h1 className="hero-title">
            FOR DELICIOUS,<br />
            <span className="hero-accent">MADE-FROM</span><br />
            SCRATCH PIZZAS
          </h1>
          <p className="hero-sub">More than a great name. Insanely good pizza.</p>
          <a href="#" className="btn-pill btn-orange hero-cta">Order Online</a>
        </div>
        <div className="tape tape-tl" />
        <div className="tape tape-tr" />
        <div className="tape tape-bl" />
        <div className="tape tape-br" />
      </section>

      {/* ── OUR MENU ── */}
      <section className="section menu-section">
        <h2 className="section-title">OUR MENU</h2>
        <div className="menu-grid">
          {[
            { name: "CHICKEN PARM", desc: "Slow-roasted chicken with house marinara, fresh mozzarella and basil pesto.", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80", price: "19" },
            { name: "CHICKEN ALFREDO", desc: "House-made alfredo sauce with rotisserie chicken, roasted garlic and asiago.", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80", price: "20" },
            { name: "SPAGHETTI & MEATBALLS", desc: "Loose thin crust, hot honey sauce, speck and goats cheese.", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80", price: "20" },
            { name: "BAKED MAC & CHEESE", desc: "Fresh rigatoni pasta with house-made cheese sauce, topped with panko.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", price: "19" },
          ].map((item) => (
            <div className="menu-card" key={item.name}>
              <div className="menu-card-img-wrap">
                <img src={item.img} alt={item.name} className="menu-card-img" />
                <span className="menu-price">{item.price}</span>
              </div>
              <div className="menu-card-body">
                <h3 className="menu-card-title">{item.name}</h3>
                <p className="menu-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="menu-cta-wrap">
          <a href="#" className="btn-pill btn-orange-outline">VIEW OUR COMPLETE MENU</a>
        </div>
      </section>

      {/* ── CHICAGO SECTION ── */}
      <section className="section chicago-section">
        <div className="chicago-left">
          <h2 className="chicago-title">HOME OF THE<br />CHICAGO-STYLE<br />THIN CRUST PIZZA</h2>
          <p className="chicago-desc">
            Ueriusd tes trio sosiven a dainct titu to dont dote-dovne
            orchi ding is tamnivam is bols noo meisq tesses there tened
            ponvlas ind suenony yaas.
          </p>
          <div className="chicago-icons-grid">
            {[
              { icon: "fi fi-ss-bullseye", label: "CATERING CUISINE" },
              { icon: "fi fi-ss-building", label: "CORPORATE OFFICES" },
              { icon: "fi fi-ss-pizza-slice", label: "NYC-STYLE ERUCO" },
              { icon: "fi fi-ss-info", label: "LEARN MORE" },
              { icon: "fi fi-ss-car", label: "NUTRITION PICKLE" },
              { icon: "fi fi-ss-leaf", label: "FRANCHISING" },
            ].map((ic) => (
              <div className="chicago-icon-item" key={ic.label}>
                <div className="chicago-icon-box">
                  <i className={`chicago-icon ${ic.icon}`}></i>
                </div>
                <span className="chicago-icon-label">{ic.label}</span>
              </div>
            ))}
          </div>
          <div className="chicago-btns">
            <a href="#" className="btn-pill btn-orange">LEARN MORE</a>
            <a href="#" className="chicago-link">SEE LOCATIONS</a>
          </div>
        </div>
        <div className="chicago-right">
          <div className="polaroid polaroid-1 tape-frame">
            <img src="https://i.pinimg.com/736x/1b/72/ed/1b72edb985367796dc58e2be8e302e63.jpg" alt="Chef 1" />
            <div className="tape tape-tl" />
            <div className="tape tape-tr" />
          </div>
          <div className="polaroid polaroid-2 tape-frame">
            <img src="https://i.pinimg.com/736x/64/47/5b/64475ba22677480aa5ad04da6f9bb599.jpg" alt="Chef 2" />
            <div className="tape tape-tl" />
            <div className="tape tape-tr" />
          </div>
        </div>
      </section>

      {/* ── WAYS TO ENJOY ── */}
      <section className="section ways-section">
        <h2 className="section-title">WAYS TO ENJOY</h2>
        <div className="ways-grid">
          <div className="ways-pizza-wrap tape-frame">
            <img
              src="https://i.pinimg.com/736x/95/ec/c2/95ecc2e059692a2d7d7e40b15f8b211a.jpg"
              alt="Pepperoni pizza"
              className="ways-pizza-img"
            />
            <div className="ways-logo-overlay">
              <div className="ways-logo-badge">
                <span className="ways-logo-text">CRUST</span>
                <span className="ways-logo-sub">PIZZA CO.</span>
              </div>
            </div>
            <div className="tape tape-tl" />
            <div className="tape tape-tr" />
            <div className="tape tape-bl" />
            <div className="tape tape-br" />
          </div>
          <div className="ways-cards">
            <div className="ways-card ways-card-dark">
              <div className="ways-card-icon"></div>
              <h3>AWARD-WINNING<br />PIZZA & SERVICE</h3>
              <p>Sbrenchsen inktrite slav domaine oranod onon-porturies.</p>
              <a href="#" className="btn-pill btn-orange ways-btn">LEARN MORE</a>
            </div>
            <div className="ways-card ways-card-dark">
              <div className="ways-card-icon"></div>
              <h3>KIDS EAT FREE<br />TUESDAYS!</h3>
              <p>Wer cloet oon-anbenter slaw dotnane clers ncerecod poerpneas.</p>
              <a href="#" className="btn-pill btn-orange ways-btn">VIEW OUR COMPLETE MENU</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY + WHY CHOOSE US ── */}
      <section className="section community-section">
        <div className="community-left">
          <div className="community-hero-img tape-frame">
            <img
              src="https://i.pinimg.com/1200x/68/ea/ce/68eacef1fff34f4a3c24f0fd7bf29a6d.jpg"
              alt="Community pizza"
              className="community-img"
            />
            <div className="tape tape-tl" />
            <div className="tape tape-tr" />
          </div>
          <div className="community-text">
            <p className="community-handle">@yourbrandhandle</p>
            <h3 className="community-title">LET'S WORK TOGETHER<br />FOR OUR COMMUNITY</h3>
            <p className="community-desc">Us snos cronmieis inssuno brv and sornion tasme ponvians yosas.</p>
          </div>
          <div className="community-mascots">
            <img src="https://i.pinimg.com/1200x/79/93/4f/79934f2de034cc9bcdae60da7535789d.jpg" alt="Mascot" className="mascot" />
          </div>
        </div>
        <div className="community-right">
          <h3 className="why-title">WHY CHOOSE US</h3>
          <div className="why-grid">
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80" alt="Why 1" className="why-img" />
            <img src="https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=300&q=80" alt="Why 2" className="why-img" />
            <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&q=80" alt="Why 3" className="why-img" />
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&q=80" alt="Why 4" className="why-img" />
            <img src="https://i.pinimg.com/736x/f8/19/ec/f819ecf9266ca0179aeaf3cabe2885aa.jpg" alt="Why 4" className="why-img" />
            <img src="https://i.pinimg.com/1200x/98/bf/eb/98bfeb4ac514fcdcb7df9473780b1553.jpg" alt="Why 4" className="why-img" />
          </div>
        </div>
      </section>

      {/* ── FRANCHISE + SUBMIT ── */}
      <section className="section franchise-section">
        <div className="franchise-left">
          <h2 className="franchise-title">WANT TO OWN YOUR OWN<br />CRUST PIZZA CO.?</h2>
          <p className="franchise-desc">Inasse nee tnuieveriance toiy plan soeised Is steals.</p>
          <a href="#" className="btn-pill btn-orange">SUBMIT A REQUEST</a>
        </div>
        <div className="franchise-img-wrap tape-frame">
          <img
            src="https://i.pinimg.com/1200x/ca/d2/bc/cad2bc514e0d36af47749f6eef04dfd2.jpg"
            alt="Crust Pizza Location"
            className="franchise-img"
          />
          <div className="tape tape-tl" />
          <div className="tape tape-tr" />
          <div className="tape tape-bl" />
          <div className="tape tape-br" />
        </div>
        <div className="submit-right">
          <h3 className="submit-title">SUBMIT A REQUEST</h3>
          <div className="submit-btns">
            <a href="#" className="btn-pill btn-orange submit-pill">LOCATIONS</a>
            <a href="#" className="btn-pill btn-orange submit-pill">GET GIFT CARDS</a>
            <a href="#" className="btn-pill btn-orange submit-pill">FOLLOW US</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-logo">
          <div className="footer-logo-circle">
            <span className="footer-logo-text">CRUST</span>
            <span className="footer-pizza"></span>
            <span className="footer-logo-sub">PIZZA CO.</span>
          </div>
          <p className="footer-tagline">WANT TO PLACE AN<br />ORDER NOW?</p>
        </div>
        <nav className="footer-nav">
          <a href="#">MENU</a>
          <a href="#">CATERING</a>
          <a href="#">CATERING</a>
          <a href="#">COMMISSIONS</a>
          <a href="#">PRIVACY</a>
          <a href="#">TERMS</a>
        </nav>
      </footer>
    </main>
  );
}