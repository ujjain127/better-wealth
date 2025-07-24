import React, { useState } from 'react';
import { watchlistAPI } from '../services/api';
import './WatchlistManager.css';

const WatchlistManager = ({ watchlist, onWatchlistUpdate }) => {
  const [newSymbol, setNewSymbol] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAddSymbol = async (e) => {
    e.preventDefault();
    if (!newSymbol.trim()) return;

    try {
      setLoading(true);
      setError('');
      
      await watchlistAPI.addToWatchlist(newSymbol.toUpperCase());
      setNewSymbol('');
      
      // Refresh watchlist
      if (onWatchlistUpdate) {
        onWatchlistUpdate();
      }
    } catch (err) {
      setError('Failed to add symbol to watchlist');
      console.error('Error adding to watchlist:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveSymbol = async (symbol) => {
    try {
      await watchlistAPI.removeFromWatchlist(symbol);
      
      // Refresh watchlist
      if (onWatchlistUpdate) {
        onWatchlistUpdate();
      }
    } catch (err) {
      console.error('Error removing from watchlist:', err);
    }
  };

  return (
    <div className="watchlist-manager">
      <div className="watchlist-header">
        <h3>Manage Watchlist</h3>
        <form onSubmit={handleAddSymbol} className="add-symbol-form">
          <input
            type="text"
            value={newSymbol}
            onChange={(e) => setNewSymbol(e.target.value)}
            placeholder="Enter symbol (e.g., AAPL)"
            className="symbol-input"
            disabled={loading}
          />
          <button 
            type="submit" 
            className="btn btn-primary btn-small"
            disabled={loading || !newSymbol.trim()}
          >
            {loading ? 'Adding...' : 'Add'}
          </button>
        </form>
      </div>
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="watchlist-items">
        {watchlist.map((item) => (
          <div key={item.id} className="watchlist-item-manager">
            <div className="stock-info">
              <div className="stock-symbol">{item.symbol}</div>
              <div className="stock-name">{item.name}</div>
            </div>
            <div className="stock-data">
              <div className="stock-price">${item.currentPrice.toFixed(2)}</div>
              <div className={`stock-change ${item.changePercent >= 0 ? 'positive' : 'negative'}`}>
                {item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%
              </div>
            </div>
            <button
              onClick={() => handleRemoveSymbol(item.symbol)}
              className="remove-btn"
              title="Remove from watchlist"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchlistManager;
