const express = require('express');
const router = express.Router();

// @desc    Get user's watchlist
// @route   GET /api/watchlist
// @access  Private
router.get('/', async (req, res) => {
  try {
    // Mock watchlist data
    const watchlist = [
      {
        id: 'watch_001',
        symbol: 'NVDA',
        name: 'NVIDIA Corp',
        currentPrice: 892.45,
        previousClose: 871.33,
        change: 21.12,
        changePercent: 2.34,
        marketCap: 2195000000000,
        volume: 28450000,
        addedAt: '2025-01-20T10:00:00.000Z'
      },
      {
        id: 'watch_002',
        symbol: 'MSFT',
        name: 'Microsoft Corp',
        currentPrice: 412.18,
        previousClose: 404.62,
        change: 7.56,
        changePercent: 1.87,
        marketCap: 3065000000000,
        volume: 18920000,
        addedAt: '2025-01-19T14:30:00.000Z'
      },
      {
        id: 'watch_003',
        symbol: 'GOOGL',
        name: 'Alphabet Inc',
        currentPrice: 168.32,
        previousClose: 169.92,
        change: -1.60,
        changePercent: -0.95,
        marketCap: 2085000000000,
        volume: 22150000,
        addedAt: '2025-01-18T09:15:00.000Z'
      },
      {
        id: 'watch_004',
        symbol: 'AMZN',
        name: 'Amazon.com Inc',
        currentPrice: 178.94,
        previousClose: 173.39,
        change: 5.55,
        changePercent: 3.21,
        marketCap: 1875000000000,
        volume: 31200000,
        addedAt: '2025-01-17T11:45:00.000Z'
      },
      {
        id: 'watch_005',
        symbol: 'VTI',
        name: 'Vanguard Total Stock Market ETF',
        currentPrice: 245.67,
        previousClose: 242.15,
        change: 3.52,
        changePercent: 1.45,
        marketCap: 355000000000,
        volume: 4560000,
        addedAt: '2025-01-16T16:20:00.000Z'
      },
      {
        id: 'watch_006',
        symbol: 'QQQ',
        name: 'Invesco QQQ Trust',
        currentPrice: 398.21,
        previousClose: 401.15,
        change: -2.94,
        changePercent: -0.73,
        marketCap: 215000000000,
        volume: 28900000,
        addedAt: '2025-01-15T13:10:00.000Z'
      }
    ];

    res.json({
      success: true,
      data: {
        watchlist,
        total: watchlist.length,
        lastUpdated: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching watchlist'
    });
  }
});

// @desc    Add symbol to watchlist
// @route   POST /api/watchlist
// @access  Private
router.post('/', async (req, res) => {
  try {
    const { symbol } = req.body;

    if (!symbol) {
      return res.status(400).json({
        error: 'Symbol is required'
      });
    }

    // Mock new watchlist item
    const newWatchlistItem = {
      id: 'watch_' + Date.now(),
      symbol: symbol.toUpperCase(),
      name: `${symbol.toUpperCase()} Corp.`, // In real app, fetch from API
      currentPrice: 150.00, // Mock price
      previousClose: 148.50,
      change: 1.50,
      changePercent: 1.01,
      marketCap: 500000000000,
      volume: 15000000,
      addedAt: new Date().toISOString()
    };

    res.status(201).json({
      success: true,
      message: `${symbol.toUpperCase()} added to watchlist`,
      data: newWatchlistItem
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error adding to watchlist'
    });
  }
});

// @desc    Remove symbol from watchlist
// @route   DELETE /api/watchlist/:symbol
// @access  Private
router.delete('/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;

    res.json({
      success: true,
      message: `${symbol.toUpperCase()} removed from watchlist`
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error removing from watchlist'
    });
  }
});

// @desc    Get price alerts for watchlist
// @route   GET /api/watchlist/alerts
// @access  Private
router.get('/alerts', async (req, res) => {
  try {
    const alerts = [
      {
        id: 'alert_001',
        symbol: 'AAPL',
        type: 'price_above',
        targetPrice: 200.00,
        currentPrice: 195.50,
        isActive: true,
        createdAt: '2025-01-15T10:00:00.000Z'
      },
      {
        id: 'alert_002',
        symbol: 'TSLA',
        type: 'price_below',
        targetPrice: 220.00,
        currentPrice: 244.00,
        isActive: true,
        createdAt: '2025-01-14T15:30:00.000Z'
      }
    ];

    res.json({
      success: true,
      data: alerts
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching alerts'
    });
  }
});

// @desc    Create price alert
// @route   POST /api/watchlist/alerts
// @access  Private
router.post('/alerts', async (req, res) => {
  try {
    const { symbol, type, targetPrice } = req.body;

    if (!symbol || !type || !targetPrice) {
      return res.status(400).json({
        error: 'Symbol, type, and target price are required'
      });
    }

    const newAlert = {
      id: 'alert_' + Date.now(),
      symbol: symbol.toUpperCase(),
      type,
      targetPrice: parseFloat(targetPrice),
      currentPrice: 150.00, // Mock current price
      isActive: true,
      createdAt: new Date().toISOString()
    };

    res.status(201).json({
      success: true,
      message: 'Price alert created successfully',
      data: newAlert
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error creating alert'
    });
  }
});

module.exports = router;
