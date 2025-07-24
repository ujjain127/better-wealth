import React from 'react';
import MarketWidget from '../components/MarketWidget';
import './Insights.css';

const Insights = () => {
  return (
    <div className="insights-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">Analytics & Insights</h1>
          <p className="page-subtitle">
            Deep financial analytics and AI-powered insights to optimize your investment strategy.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Live Market Data Widget */}
        <MarketWidget />

        {/* Performance Dashboard */}
        <section className="performance-dashboard">
          <h2 className="section-title">Performance Dashboard</h2>
          <div className="dashboard-grid">
            <div className="metric-card">
              <h3>Portfolio Performance</h3>
              <div className="metric-value">+12.4%</div>
              <div className="metric-period">YTD Return</div>
              <div className="metric-comparison">
                <span>vs S&P 500: +8.2%</span>
                <span className="outperforming">+4.2% ahead</span>
              </div>
            </div>
            <div className="metric-card">
              <h3>Risk-Adjusted Return</h3>
              <div className="metric-value">1.47</div>
              <div className="metric-period">Sharpe Ratio</div>
              <div className="metric-comparison">
                <span>Benchmark: 1.12</span>
                <span className="outperforming">31% better</span>
              </div>
            </div>
            <div className="metric-card">
              <h3>Volatility</h3>
              <div className="metric-value">14.2%</div>
              <div className="metric-period">Annualized</div>
              <div className="metric-comparison">
                <span>Target: 15%</span>
                <span className="performing-well">Within range</span>
              </div>
            </div>
            <div className="metric-card">
              <h3>Maximum Drawdown</h3>
              <div className="metric-value">-8.7%</div>
              <div className="metric-period">Peak to Trough</div>
              <div className="metric-comparison">
                <span>Recovery: 23 days</span>
                <span className="performing-well">Quick recovery</span>
              </div>
            </div>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="market-analysis">
          <h2 className="section-title">Market Analysis</h2>
          <div className="analysis-grid">
            <div className="analysis-card">
              <h3>Sector Performance</h3>
              <div className="sector-list">
                <div className="sector-item">
                  <span>Technology</span>
                  <div className="performance-bar positive" style={{width: '75%'}}></div>
                  <span>+18.3%</span>
                </div>
                <div className="sector-item">
                  <span>Healthcare</span>
                  <div className="performance-bar positive" style={{width: '60%'}}></div>
                  <span>+12.7%</span>
                </div>
                <div className="sector-item">
                  <span>Financials</span>
                  <div className="performance-bar positive" style={{width: '45%'}}></div>
                  <span>+8.9%</span>
                </div>
                <div className="sector-item">
                  <span>Energy</span>
                  <div className="performance-bar negative" style={{width: '30%'}}></div>
                  <span>-4.2%</span>
                </div>
                <div className="sector-item">
                  <span>Real Estate</span>
                  <div className="performance-bar negative" style={{width: '20%'}}></div>
                  <span>-7.1%</span>
                </div>
              </div>
            </div>
            <div className="analysis-card">
              <h3>Asset Allocation Efficiency</h3>
              <div className="efficiency-metrics">
                <div className="efficiency-item">
                  <span>Diversification Score</span>
                  <div className="score-bar">
                    <div className="score-fill" style={{width: '82%'}}></div>
                  </div>
                  <span>82/100</span>
                </div>
                <div className="efficiency-item">
                  <span>Risk Distribution</span>
                  <div className="score-bar">
                    <div className="score-fill" style={{width: '76%'}}></div>
                  </div>
                  <span>76/100</span>
                </div>
                <div className="efficiency-item">
                  <span>Cost Efficiency</span>
                  <div className="score-bar">
                    <div className="score-fill" style={{width: '91%'}}></div>
                  </div>
                  <span>91/100</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Insights */}
        <section className="ai-insights">
          <h2 className="section-title">AI-Powered Insights</h2>
          <div className="insights-container">
            <div className="insight-item priority-high">
              <div className="insight-header">
                <span className="insight-type">Rebalancing Opportunity</span>
                <span className="priority-badge high">High Priority</span>
              </div>
              <h3>Tech Allocation Above Target</h3>
              <p>Your technology allocation is 8% above your target. Consider rebalancing to maintain optimal risk distribution.</p>
              <div className="insight-actions">
                <button className="btn btn-primary">Rebalance Now</button>
                <button className="btn btn-secondary">View Details</button>
              </div>
            </div>
            <div className="insight-item priority-medium">
              <div className="insight-header">
                <span className="insight-type">Market Opportunity</span>
                <span className="priority-badge medium">Medium Priority</span>
              </div>
              <h3>Value Stocks Undervalued</h3>
              <p>Current market conditions suggest value stocks are trading at attractive valuations relative to growth stocks.</p>
              <div className="insight-actions">
                <button className="btn btn-primary">Explore Options</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
            <div className="insight-item priority-low">
              <div className="insight-header">
                <span className="insight-type">Tax Optimization</span>
                <span className="priority-badge low">Low Priority</span>
              </div>
              <h3>Tax-Loss Harvesting</h3>
              <p>You have potential tax-loss harvesting opportunities that could save approximately $1,200 in taxes.</p>
              <div className="insight-actions">
                <button className="btn btn-primary">Review Opportunities</button>
                <button className="btn btn-secondary">Schedule Call</button>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Reports */}
        <section className="research-reports">
          <h2 className="section-title">Research & Reports</h2>
          <div className="reports-grid">
            <div className="report-card">
              <h3>Weekly Market Summary</h3>
              <p>Key market movements, economic indicators, and their impact on your portfolio.</p>
              <div className="report-meta">
                <span>Published: Jan 15, 2025</span>
                <span>5 min read</span>
              </div>
              <button className="btn btn-secondary">Read Report</button>
            </div>
            <div className="report-card">
              <h3>Quarterly Portfolio Review</h3>
              <p>Comprehensive analysis of your portfolio performance and strategic recommendations.</p>
              <div className="report-meta">
                <span>Published: Jan 1, 2025</span>
                <span>12 min read</span>
              </div>
              <button className="btn btn-secondary">Read Report</button>
            </div>
            <div className="report-card">
              <h3>Economic Outlook 2025</h3>
              <p>Expert analysis on economic trends and their potential impact on investment strategies.</p>
              <div className="report-meta">
                <span>Published: Dec 20, 2024</span>
                <span>8 min read</span>
              </div>
              <button className="btn btn-secondary">Read Report</button>
            </div>
          </div>
        </section>

        {/* Analytics Tools */}
        <section className="analytics-tools">
          <h2 className="section-title">Advanced Analytics Tools</h2>
          <div className="tools-showcase">
            <div className="tool-preview">
              <h3>Monte Carlo Simulations</h3>
              <p>Model thousands of potential market scenarios to understand your portfolio's probability of success.</p>
              <div className="simulation-result">
                <span>90% confidence interval</span>
                <div className="result-range">
                  <span>$890K - $2.1M</span>
                  <span>retirement value</span>
                </div>
              </div>
            </div>
            <div className="tool-preview">
              <h3>Risk Factor Analysis</h3>
              <p>Understand how different risk factors contribute to your portfolio's performance and volatility.</p>
              <div className="risk-factors">
                <div className="factor-item">
                  <span>Market Risk</span>
                  <span>67%</span>
                </div>
                <div className="factor-item">
                  <span>Sector Risk</span>
                  <span>23%</span>
                </div>
                <div className="factor-item">
                  <span>Specific Risk</span>
                  <span>10%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="insights-cta">
          <h2>Unlock Deeper Insights</h2>
          <p>Get advanced analytics and personalized recommendations to optimize your investment strategy.</p>
          <button className="btn btn-primary btn-large">Upgrade to Pro</button>
        </section>
      </div>
    </div>
  );
};

export default Insights;
