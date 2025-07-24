import React, { useState, useEffect } from 'react';
import { healthAPI, portfolioAPI, insightsAPI } from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    portfolio: null,
    performance: null,
    market: null
  });
  const [loading, setLoading] = useState(true);
  const [apiStatus, setApiStatus] = useState('checking');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        // Check API health first
        const healthCheck = await healthAPI.check();
        setApiStatus('connected');
        
        // Fetch dashboard data
        const [portfolioResponse, performanceResponse, marketResponse] = await Promise.all([
          portfolioAPI.getPortfolio(),
          insightsAPI.getPerformance(),
          insightsAPI.getMarketInsights()
        ]);

        setDashboardData({
          portfolio: portfolioResponse.data,
          performance: performanceResponse.data,
          market: marketResponse.data
        });
      } catch (error) {
        console.error('Dashboard data fetch error:', error);
        setApiStatus('error');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
    
    // Refresh data every 30 seconds
    const interval = setInterval(fetchDashboardData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <div className="api-status checking">
            <span className="status-indicator"></span>
            Connecting to API...
          </div>
        </div>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className={`api-status ${apiStatus}`}>
          <span className="status-indicator"></span>
          {apiStatus === 'connected' ? 'API Connected' : 'API Error'}
        </div>
      </div>

      {/* Quick Stats */}
      <section className="quick-stats">
        <div className="stat-card">
          <h3>Portfolio Value</h3>
          <div className="stat-value">
            ${dashboardData.portfolio?.totalValue?.toLocaleString() || '0'}
          </div>
          <div className={`stat-change ${(dashboardData.portfolio?.totalReturnPercentage || 0) >= 0 ? 'positive' : 'negative'}`}>
            {(dashboardData.portfolio?.totalReturnPercentage || 0) >= 0 ? '+' : ''}
            {dashboardData.portfolio?.totalReturnPercentage || 0}%
          </div>
        </div>
        
        <div className="stat-card">
          <h3>Today's Change</h3>
          <div className="stat-value">
            ${dashboardData.portfolio?.monthlyReturn?.toLocaleString() || '0'}
          </div>
          <div className={`stat-change ${(dashboardData.portfolio?.monthlyReturnPercentage || 0) >= 0 ? 'positive' : 'negative'}`}>
            {(dashboardData.portfolio?.monthlyReturnPercentage || 0) >= 0 ? '+' : ''}
            {dashboardData.portfolio?.monthlyReturnPercentage || 0}%
          </div>
        </div>
        
        <div className="stat-card">
          <h3>Risk Score</h3>
          <div className="stat-value">
            {dashboardData.portfolio?.riskScore || 0}/10
          </div>
          <div className="stat-change neutral">
            {(dashboardData.portfolio?.riskScore || 0) <= 3 ? 'Conservative' : 
             (dashboardData.portfolio?.riskScore || 0) <= 7 ? 'Moderate' : 'Aggressive'}
          </div>
        </div>
        
        <div className="stat-card">
          <h3>Assets</h3>
          <div className="stat-value">
            {dashboardData.portfolio?.assetsCount || 0}
          </div>
          <div className="stat-change neutral">Positions</div>
        </div>
      </section>

      {/* Performance Chart */}
      <section className="performance-section">
        <h2>Performance Overview</h2>
        <div className="performance-grid">
          {dashboardData.performance?.timeframes && Object.entries(dashboardData.performance.timeframes).map(([period, data]) => (
            <div key={period} className="performance-item">
              <div className="performance-period">
                {period.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </div>
              <div className={`performance-value ${data.return >= 0 ? 'positive' : 'negative'}`}>
                {data.return >= 0 ? '+' : ''}{data.return}%
              </div>
              <div className="performance-benchmark">
                vs {data.benchmark}% benchmark
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Market Overview */}
      <section className="market-section">
        <h2>Market Overview</h2>
        <div className="market-grid">
          {dashboardData.market?.overview && Object.entries(dashboardData.market.overview).map(([index, data]) => (
            <div key={index} className="market-item">
              <div className="market-index">{index.toUpperCase()}</div>
              <div className="market-value">{data.value?.toLocaleString()}</div>
              <div className={`market-change ${data.change >= 0 ? 'positive' : 'negative'}`}>
                {data.change >= 0 ? '+' : ''}{data.change}%
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent News */}
      <section className="news-section">
        <h2>Market News</h2>
        <div className="news-list">
          {dashboardData.market?.news?.slice(0, 3).map((article, index) => (
            <div key={index} className="news-item">
              <div className="news-content">
                <h3>{article.headline}</h3>
                <div className="news-meta">
                  <span className="news-source">{article.source}</span>
                  <span className="news-time">
                    {new Date(article.timestamp).toLocaleDateString()}
                  </span>
                  <span className={`news-impact ${article.impact}`}>
                    {article.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Action Items */}
      <section className="actions-section">
        <h2>Recommended Actions</h2>
        <div className="actions-grid">
          <div className="action-card">
            <h3>Portfolio Review</h3>
            <p>Your portfolio allocation has drifted from targets. Consider rebalancing.</p>
            <button className="btn btn-primary">Review Portfolio</button>
          </div>
          <div className="action-card">
            <h3>Goal Check</h3>
            <p>You're on track to meet your retirement goal. Keep up the great work!</p>
            <button className="btn btn-secondary">View Goals</button>
          </div>
          <div className="action-card">
            <h3>Expert Consultation</h3>
            <p>Book a session with our investment experts for personalized advice.</p>
            <button className="btn btn-primary">Book Session</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
