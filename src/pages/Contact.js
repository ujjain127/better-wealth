import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with our team for support, questions, or partnership opportunities.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Contact Form */}
        <section className="contact-form-section">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Let's Talk</h2>
              <p>Whether you have questions about our platform, need technical support, or want to explore partnership opportunities, we're here to help.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-details">
                    <h3>Email</h3>
                    <p>info@betterwealth.com</p>
                    <span>Response within 24 hours</span>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-details">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                    <span>Mon-Fri, 9AM-6PM EST</span>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">💬</div>
                  <div className="method-details">
                    <h3>Live Chat</h3>
                    <p>Available in app</p>
                    <span>Mon-Fri, 9AM-6PM EST</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="6" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-large">Send Message</button>
              </form>
            </div>
          </div>
        </section>

        {/* Support Resources */}
        <section className="support-resources">
          <h2 className="section-title">Support Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">📚</div>
              <h3>Knowledge Base</h3>
              <p>Find answers to common questions and learn how to use Better Wealth features.</p>
              <button className="btn btn-secondary">Browse Articles</button>
            </div>
            <div className="resource-card">
              <div className="resource-icon">🎥</div>
              <h3>Video Tutorials</h3>
              <p>Watch step-by-step guides on portfolio management and platform features.</p>
              <button className="btn btn-secondary">Watch Videos</button>
            </div>
            <div className="resource-card">
              <div className="resource-icon">📖</div>
              <h3>User Guide</h3>
              <p>Comprehensive documentation covering all aspects of the platform.</p>
              <button className="btn btn-secondary">Download Guide</button>
            </div>
            <div className="resource-card">
              <div className="resource-icon">🔧</div>
              <h3>API Documentation</h3>
              <p>Technical documentation for developers integrating with our platform.</p>
              <button className="btn btn-secondary">View Docs</button>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="office-locations">
          <h2 className="section-title">Our Offices</h2>
          <div className="locations-grid">
            <div className="location-card">
              <h3>New York (Headquarters)</h3>
              <div className="location-details">
                <p>123 Financial District</p>
                <p>New York, NY 10004</p>
                <p>United States</p>
              </div>
              <div className="location-hours">
                <h4>Office Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
            <div className="location-card">
              <h3>San Francisco</h3>
              <div className="location-details">
                <p>456 Tech Boulevard</p>
                <p>San Francisco, CA 94105</p>
                <p>United States</p>
              </div>
              <div className="location-hours">
                <h4>Office Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
            <div className="location-card">
              <h3>London</h3>
              <div className="location-details">
                <p>789 Canary Wharf</p>
                <p>London E14 5AB</p>
                <p>United Kingdom</p>
              </div>
              <div className="location-hours">
                <h4>Office Hours</h4>
                <p>Monday - Friday: 9:00 AM - 5:00 PM GMT</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>How secure is my financial data?</h3>
              <p>We use bank-level encryption and security measures to protect your data. All connections are secured with SSL encryption, and we never store your banking credentials.</p>
            </div>
            <div className="faq-item">
              <h3>What investment accounts can I connect?</h3>
              <p>Better Wealth supports most major brokerages, 401(k) providers, and banks. We currently integrate with over 12,000 financial institutions.</p>
            </div>
            <div className="faq-item">
              <h3>How much does Better Wealth cost?</h3>
              <p>We offer a free tier with basic portfolio tracking. Premium features start at $19/month with advanced analytics and investor consultations.</p>
            </div>
            <div className="faq-item">
              <h3>Can I cancel my subscription anytime?</h3>
              <p>Yes, you can cancel your subscription at any time. Your premium features will remain active until the end of your billing period.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
