import React, { useState, useEffect } from 'react';
import { portfolioAPI, transactionsAPI, watchlistAPI } from '../services/api';
import WatchlistManager from '../components/WatchlistManager';
import './Portfolio.css';

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWatchlistData = async () => {
    try {
      const watchlistResponse = await watchlistAPI.getWatchlist();
      setWatchlist(watchlistResponse.data.watchlist);
    } catch (err) {
      console.error('Error fetching watchlist:', err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch portfolio data
        const [portfolioResponse, transactionsResponse] = await Promise.all([
          portfolioAPI.getPortfolio(),
          transactionsAPI.getTransactions({ limit: 5 })
        ]);

        setPortfolioData(portfolioResponse.data);
        setTransactions(transactionsResponse.data.transactions);
        
        // Fetch watchlist separately
        await fetchWatchlistData();
      } catch (err) {
        setError(err.message);
        console.error('Error fetching portfolio data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="portfolio-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading your portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="portfolio-page">
        <div className="error-container">
          <h2>Error Loading Portfolio</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="btn btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="portfolio-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">Portfolio Management</h1>
          <p className="page-subtitle">
            Advanced portfolio tracking and AI-powered optimization for intelligent wealth management.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Portfolio Overview */}
        <section className="portfolio-overview">
          <h2 className="section-title">Your Portfolio at a Glance</h2>
          <div className="portfolio-stats">
            <div className="stat-card">
              <h3>Total Value</h3>
              <p className="stat-value">${portfolioData?.totalValue?.toLocaleString()}</p>
              <span className={`stat-change ${portfolioData?.totalReturnPercentage >= 0 ? 'positive' : 'negative'}`}>
                {portfolioData?.totalReturnPercentage >= 0 ? '+' : ''}{portfolioData?.totalReturnPercentage}%
              </span>
            </div>
            <div className="stat-card">
              <h3>Monthly Return</h3>
              <p className="stat-value">${portfolioData?.monthlyReturn?.toLocaleString()}</p>
              <span className={`stat-change ${portfolioData?.monthlyReturnPercentage >= 0 ? 'positive' : 'negative'}`}>
                {portfolioData?.monthlyReturnPercentage >= 0 ? '+' : ''}{portfolioData?.monthlyReturnPercentage}%
              </span>
            </div>
            <div className="stat-card">
              <h3>Assets</h3>
              <p className="stat-value">{portfolioData?.assetsCount}</p>
              <span className="stat-change neutral">Diversified</span>
            </div>
            <div className="stat-card">
              <h3>Risk Score</h3>
              <p className="stat-value">{portfolioData?.riskScore}/10</p>
              <span className="stat-change neutral">
                {portfolioData?.riskScore <= 3 ? 'Conservative' : 
                 portfolioData?.riskScore <= 7 ? 'Moderate' : 'Aggressive'}
              </span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="portfolio-features">
          <h2 className="section-title">Portfolio Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📈</div>
              <h3>Real-Time Tracking</h3>
              <p>Monitor your investments with live market data and instant updates on portfolio performance.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered Rebalancing</h3>
              <p>Receive intelligent suggestions on when and how to rebalance your portfolio based on market conditions.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h3>Performance Analytics</h3>
              <p>Deep dive into ROI, risk assessment, asset allocation, and historical performance trends.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔄</div>
              <h3>Automated Sync</h3>
              <p>Connect all your investment accounts for a consolidated view of your entire financial portfolio.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Smart Alerts</h3>
              <p>Get notified about significant market movements, rebalancing opportunities, and goal milestones.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📋</div>
              <h3>Custom Reports</h3>
              <p>Generate detailed reports for tax purposes, performance reviews, and strategic planning.</p>
            </div>
          </div>
        </section>

        {/* Portfolio Tools */}
        <section className="portfolio-tools">
          <h2 className="section-title">Portfolio Tools</h2>
          <div className="tools-grid">
            <div className="tool-card">
              <h3>Asset Allocation</h3>
              <p>Visualize and optimize your asset distribution across different investment categories.</p>
              <div className="allocation-preview">
                <div className="allocation-bar">
                  <div className="allocation-segment stocks" style={{width: `${portfolioData?.allocation?.stocks || 0}%`}}></div>
                  <div className="allocation-segment bonds" style={{width: `${portfolioData?.allocation?.bonds || 0}%`}}></div>
                  <div className="allocation-segment reits" style={{width: `${portfolioData?.allocation?.reits || 0}%`}}></div>
                  <div className="allocation-segment crypto" style={{width: `${portfolioData?.allocation?.crypto || 0}%`}}></div>
                  <div className="allocation-segment cash" style={{width: `${portfolioData?.allocation?.cash || 0}%`}}></div>
                </div>
                <div className="allocation-legend">
                  <span><span className="legend-color stocks"></span>Stocks {portfolioData?.allocation?.stocks || 0}%</span>
                  <span><span className="legend-color bonds"></span>Bonds {portfolioData?.allocation?.bonds || 0}%</span>
                  <span><span className="legend-color reits"></span>REITs {portfolioData?.allocation?.reits || 0}%</span>
                  <span><span className="legend-color crypto"></span>Crypto {portfolioData?.allocation?.crypto || 0}%</span>
                  <span><span className="legend-color cash"></span>Cash {portfolioData?.allocation?.cash || 0}%</span>
                </div>
              </div>
            </div>
            <div className="tool-card">
              <h3>Risk Analysis</h3>
              <p>Understand your portfolio's risk profile and get recommendations for optimization.</p>
              <div className="risk-meter">
                <div className="risk-scale">
                  <div className="risk-indicator" style={{left: '68%'}}></div>
                </div>
                <div className="risk-labels">
                  <span>Conservative</span>
                  <span>Moderate</span>
                  <span>Aggressive</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Transactions */}
        <section className="recent-transactions">
          <h2 className="section-title">Recent Transactions</h2>
          <div className="transaction-list">
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <div key={transaction.id} className="transaction-item">
                  <div className="transaction-info">
                    <strong>{transaction.symbol}</strong>
                    <span>{transaction.name}</span>
                  </div>
                  <div className={`transaction-amount ${transaction.type}`}>
                    {transaction.type === 'buy' ? '+' : '-'}${transaction.totalAmount.toLocaleString()}
                  </div>
                  <div className="transaction-date">
                    {new Date(transaction.timestamp).toLocaleDateString()} at {new Date(transaction.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-data">
                <p>No recent transactions found.</p>
              </div>
            )}
          </div>
        </section>

        {/* Watchlist */}
        <section className="watchlist">
          <h2 className="section-title">Your Watchlist</h2>
          <div className="watchlist-grid">
            {watchlist.length > 0 ? (
              watchlist.map((item) => (
                <div key={item.id} className="watchlist-item">
                  <div className="stock-symbol">{item.symbol}</div>
                  <div className="stock-name">{item.name}</div>
                  <div className="stock-price">${item.currentPrice.toFixed(2)}</div>
                  <div className={`stock-change ${item.changePercent >= 0 ? 'positive' : 'negative'}`}>
                    {item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%
                  </div>
                </div>
              ))
            ) : (
              <div className="no-data">
                <p>Your watchlist is empty. Add some stocks to track their performance.</p>
              </div>
            )}
          </div>
        </section>

        {/* Interactive Watchlist Manager */}
        <WatchlistManager 
          watchlist={watchlist} 
          onWatchlistUpdate={fetchWatchlistData}
        />

        {/* CTA Section */}
        <section className="portfolio-cta">
          <h2>Start Optimizing Your Portfolio Today</h2>
          <p>Connect your accounts and let our AI help you make smarter investment decisions.</p>
          <button className="btn btn-primary btn-large">Connect Accounts</button>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
