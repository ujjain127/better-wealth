import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Next-Gen Financial Management</h1>
          <p className="hero-subtitle">
            Connect with experienced investors, manage your portfolio intelligently, 
            and grow your wealth with personalized guidance.
          </p>
          <div className="hero-cta">
            <Link to="/portfolio" className="btn btn-primary">Get Started</Link>
            <Link to="/investors" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="features" id="features">
        <div className="container">
          <h2 className="section-title">Core Features</h2>
          
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Investor Matchmaking & Advice</h3>
              <p>Connect with verified investors, schedule consultations, and join community forums for personalized investment strategies.</p>
              <ul>
                <li>Browse verified investor profiles</li>
                <li>1-on-1 consultations via chat or video</li>
                <li>Community forums for insights</li>
              </ul>
              <Link to="/investors" className="feature-link">Learn More →</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Advanced Portfolio Management</h3>
              <p>Automated tracking, AI-powered rebalancing, and deep performance analytics for optimal investment management.</p>
              <ul>
                <li>Real-time portfolio dashboard</li>
                <li>AI-powered rebalancing suggestions</li>
                <li>Performance analytics & ROI tracking</li>
              </ul>
              <Link to="/portfolio" className="feature-link">Learn More →</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Financial Planning & Insights</h3>
              <p>Goal-based planning, smart budgeting, and comprehensive net worth tracking for complete financial visibility.</p>
              <ul>
                <li>Goal-based financial planning</li>
                <li>AI-driven budget suggestions</li>
                <li>Complete net worth tracking</li>
              </ul>
              <Link to="/planning" className="feature-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Connect Your Accounts</h3>
              <p>Securely link all your investment and bank accounts for a comprehensive financial overview.</p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3>Match with Investors</h3>
              <p>Browse and connect with verified investors who specialize in your areas of interest.</p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3>Plan & Optimize</h3>
              <p>Set financial goals, receive AI-powered recommendations, and track your progress.</p>
            </div>
            <div className="step">
              <div className="step-number">04</div>
              <h3>Grow Your Wealth</h3>
              <p>Execute strategies, monitor performance, and continuously optimize your financial future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"Better Wealth has transformed how I manage my investments. The AI insights helped me optimize my portfolio and increase returns by 15%."</p>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>Software Engineer</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"The investor matching feature connected me with an expert who guided me through my first real estate investment. Incredible platform!"</p>
              <div className="testimonial-author">
                <strong>Michael Chen</strong>
                <span>Marketing Director</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"I love the goal tracking feature. It keeps me motivated and on track to reach my retirement savings target ahead of schedule."</p>
              <div className="testimonial-author">
                <strong>Emily Rodriguez</strong>
                <span>Teacher</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="container">
          <h2 className="section-title">Trusted by Thousands</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$2.5B+</div>
              <div className="stat-label">Assets Under Management</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Verified Investors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Financial Future?</h2>
          <p>Join thousands of users who are already growing their wealth intelligently.</p>
          <Link to="/portfolio" className="btn btn-primary btn-large">Start Your Journey</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
