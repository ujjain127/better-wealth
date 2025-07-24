import React, { useState, useEffect } from 'react';
import { insightsAPI } from '../services/api';
import './MarketWidget.css';

const MarketWidget = () => {
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await insightsAPI.getMarketInsights();
        setMarketData(response.data);
        setLastUpdate(new Date());
        setLoading(false);
      } catch (error) {
        console.error('Error fetching market data:', error);
        setLoading(false);
      }
    };

    // Initial fetch
    fetchMarketData();

    // Update every 30 seconds
    const interval = setInterval(fetchMarketData, 30000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="market-widget">
        <div className="widget-header">
          <h3>Market Overview</h3>
          <div className="update-status">Loading...</div>
        </div>
        <div className="loading-placeholder">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="market-widget">
      <div className="widget-header">
        <h3>Market Overview</h3>
        <div className="update-status">
          Last updated: {lastUpdate ? formatTime(lastUpdate) : 'Never'}
        </div>
      </div>

      {/* Major Indices */}
      <div className="indices-grid">
        {marketData?.overview && Object.entries(marketData.overview).map(([index, data]) => (
          <div key={index} className="index-card">
            <div className="index-name">{index.toUpperCase()}</div>
            <div className="index-value">{data.value?.toLocaleString()}</div>
            <div className={`index-change ${data.change >= 0 ? 'positive' : 'negative'}`}>
              {data.change >= 0 ? '+' : ''}{data.change}%
              {data.volume && (
                <span className="volume">Vol: {(data.volume / 1e9).toFixed(1)}B</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Sector Performance */}
      <div className="sectors-section">
        <h4>Sector Performance</h4>
        <div className="sectors-list">
          {marketData?.sectors?.slice(0, 6).map((sector, index) => (
            <div key={index} className="sector-item">
              <div className="sector-name">{sector.name}</div>
              <div className={`sector-performance ${sector.performance >= 0 ? 'positive' : 'negative'}`}>
                {sector.performance >= 0 ? '+' : ''}{sector.performance}%
              </div>
              <div className={`trend-indicator ${sector.trend}`}>
                {sector.trend === 'up' && '↗'}
                {sector.trend === 'down' && '↘'}
                {sector.trend === 'flat' && '→'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market News Headlines */}
      <div className="news-section">
        <h4>Latest Market News</h4>
        <div className="news-headlines">
          {marketData?.news?.slice(0, 3).map((article, index) => (
            <div key={index} className="news-headline">
              <div className="headline-text">{article.headline}</div>
              <div className="headline-meta">
                <span className="news-source">{article.source}</span>
                <span className={`impact-badge ${article.impact}`}>
                  {article.impact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Trends */}
      <div className="trends-section">
        <h4>Key Trends</h4>
        <div className="trends-list">
          {marketData?.trends?.slice(0, 2).map((trend, index) => (
            <div key={index} className="trend-item">
              <div className="trend-title">{trend.trend}</div>
              <div className="trend-description">{trend.description}</div>
              <div className="trend-meta">
                <span className="timeframe">{trend.timeframe}</span>
                <span className={`confidence ${trend.confidence}`}>
                  {trend.confidence} confidence
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketWidget;
