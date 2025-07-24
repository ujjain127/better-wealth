import React from 'react';
import './Investors.css';

const Investors = () => {
  const investors = [
    {
      name: "Sarah Chen",
      expertise: "Tech Stocks & Growth",
      experience: "12 years",
      rating: "4.9",
      returns: "+24.3%",
      specialties: ["Technology", "Growth Investing", "IPOs"]
    },
    {
      name: "Marcus Williams",
      expertise: "Real Estate & REITs",
      experience: "15 years",
      rating: "4.8",
      returns: "+18.7%",
      specialties: ["Real Estate", "REITs", "Commercial Properties"]
    },
    {
      name: "Elena Rodriguez",
      expertise: "ESG & Sustainable",
      experience: "10 years",
      rating: "4.9",
      returns: "+21.2%",
      specialties: ["ESG Investing", "Renewable Energy", "Sustainability"]
    }
  ];

  return (
    <div className="investors-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">Connect with Expert Investors</h1>
          <p className="page-subtitle">
            Get personalized investment advice from verified professionals with proven track records.
          </p>
        </div>
      </div>

      <div className="container">
        {/* How It Works */}
        <section className="how-matching-works">
          <h2 className="section-title">How Investor Matching Works</h2>
          <div className="matching-steps">
            <div className="matching-step">
              <div className="step-number">1</div>
              <h3>Tell Us Your Goals</h3>
              <p>Share your investment objectives, risk tolerance, and preferred asset classes.</p>
            </div>
            <div className="matching-step">
              <div className="step-number">2</div>
              <h3>Browse Expert Profiles</h3>
              <p>Review verified investor profiles with their specialties, track records, and ratings.</p>
            </div>
            <div className="matching-step">
              <div className="step-number">3</div>
              <h3>Schedule Consultations</h3>
              <p>Book 1-on-1 sessions via chat or video call with your chosen investors.</p>
            </div>
            <div className="matching-step">
              <div className="step-number">4</div>
              <h3>Get Personalized Advice</h3>
              <p>Receive tailored investment strategies and ongoing guidance from experts.</p>
            </div>
          </div>
        </section>

        {/* Featured Investors */}
        <section className="featured-investors">
          <h2 className="section-title">Featured Investors</h2>
          <div className="investors-grid">
            {investors.map((investor, index) => (
              <div key={index} className="investor-card">
                <div className="investor-header">
                  <div className="investor-avatar">
                    {investor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="investor-info">
                    <h3>{investor.name}</h3>
                    <p className="expertise">{investor.expertise}</p>
                    <div className="investor-meta">
                      <span>{investor.experience} experience</span>
                      <span>⭐ {investor.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="investor-stats">
                  <div className="stat">
                    <span className="stat-label">Avg. Returns</span>
                    <span className="stat-value positive">{investor.returns}</span>
                  </div>
                </div>
                <div className="investor-specialties">
                  <h4>Specialties</h4>
                  <div className="specialty-tags">
                    {investor.specialties.map((specialty, idx) => (
                      <span key={idx} className="specialty-tag">{specialty}</span>
                    ))}
                  </div>
                </div>
                <button className="btn btn-primary">Schedule Consultation</button>
              </div>
            ))}
          </div>
        </section>

        {/* Consultation Types */}
        <section className="consultation-types">
          <h2 className="section-title">Consultation Options</h2>
          <div className="consultation-grid">
            <div className="consultation-card">
              <div className="consultation-icon">💬</div>
              <h3>Chat Consultation</h3>
              <p>Quick questions and advice through our secure messaging platform.</p>
              <div className="consultation-price">$50/session</div>
              <ul>
                <li>30-minute session</li>
                <li>Written advice summary</li>
                <li>Follow-up questions</li>
              </ul>
            </div>
            <div className="consultation-card featured">
              <div className="consultation-icon">📹</div>
              <h3>Video Call</h3>
              <p>Face-to-face consultation for detailed investment planning and strategy.</p>
              <div className="consultation-price">$150/session</div>
              <ul>
                <li>60-minute session</li>
                <li>Screen sharing</li>
                <li>Detailed action plan</li>
                <li>Recording available</li>
              </ul>
              <span className="popular-badge">Most Popular</span>
            </div>
            <div className="consultation-card">
              <div className="consultation-icon">📊</div>
              <h3>Portfolio Review</h3>
              <p>Comprehensive analysis of your current portfolio with optimization recommendations.</p>
              <div className="consultation-price">$300/review</div>
              <ul>
                <li>Full portfolio audit</li>
                <li>Written report</li>
                <li>Rebalancing suggestions</li>
                <li>90-day follow-up</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community Forum */}
        <section className="community-forum">
          <h2 className="section-title">Join Our Investment Community</h2>
          <div className="forum-preview">
            <div className="forum-content">
              <h3>Connect with Like-Minded Investors</h3>
              <p>Join discussions, share insights, and learn from a community of investors and experts.</p>
              <ul>
                <li>Daily market discussions</li>
                <li>Investment strategy sharing</li>
                <li>Q&A with verified investors</li>
                <li>Educational webinars</li>
              </ul>
            </div>
            <div className="forum-stats">
              <div className="forum-stat">
                <span className="stat-number">2,847</span>
                <span className="stat-label">Active Members</span>
              </div>
              <div className="forum-stat">
                <span className="stat-number">156</span>
                <span className="stat-label">Expert Investors</span>
              </div>
              <div className="forum-stat">
                <span className="stat-number">1,234</span>
                <span className="stat-label">Daily Discussions</span>
              </div>
            </div>
          </div>
          <button className="btn btn-primary btn-large">Join Community</button>
        </section>

        {/* CTA Section */}
        <section className="investors-cta">
          <h2>Ready to Connect with Expert Investors?</h2>
          <p>Start your journey towards smarter investing with personalized guidance.</p>
          <button className="btn btn-primary btn-large">Find Your Investor</button>
        </section>
      </div>
    </div>
  );
};

export default Investors;
