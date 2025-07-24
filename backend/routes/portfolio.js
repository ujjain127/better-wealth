const express = require('express');
const router = express.Router();

// @desc    Get portfolio overview
// @route   GET /api/portfolio
// @access  Private
router.get('/', async (req, res) => {
  try {
    // Mock portfolio data
    const portfolioData = {
      totalValue: 127450,
      monthlyReturn: 2847,
      monthlyReturnPercentage: 2.3,
      totalReturnPercentage: 8.2,
      assetsCount: 15,
      riskScore: 6.8,
      lastUpdated: new Date().toISOString(),
      allocation: {
        stocks: 45,
        bonds: 25,
        reits: 15,
        crypto: 10,
        cash: 5
      },
      topHoldings: [
        {
          symbol: 'AAPL',
          name: 'Apple Inc.',
          value: 25490,
          shares: 150,
          currentPrice: 169.93,
          dailyChange: 2.5,
          allocation: 20
        },
        {
          symbol: 'MSFT',
          name: 'Microsoft Corp.',
          value: 18327,
          shares: 44.5,
          currentPrice: 411.87,
          dailyChange: 1.8,
          allocation: 14.4
        },
        {
          symbol: 'GOOGL',
          name: 'Alphabet Inc.',
          value: 14556,
          shares: 86.5,
          currentPrice: 168.32,
          dailyChange: -0.9,
          allocation: 11.4
        },
        {
          symbol: 'TSLA',
          name: 'Tesla Inc.',
          value: 12200,
          shares: 50,
          currentPrice: 244.00,
          dailyChange: 3.2,
          allocation: 9.6
        },
        {
          symbol: 'VTI',
          name: 'Vanguard Total Stock Market ETF',
          value: 9840,
          shares: 40,
          currentPrice: 246.00,
          dailyChange: 1.4,
          allocation: 7.7
        }
      ]
    };

    res.json({
      success: true,
      data: portfolioData
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching portfolio data'
    });
  }
});

// @desc    Get portfolio analytics
// @route   GET /api/portfolio/analytics
// @access  Private
router.get('/analytics', async (req, res) => {
  try {
    const analyticsData = {
      performance: {
        oneDay: 1.2,
        oneWeek: 3.1,
        oneMonth: 2.3,
        threeMonths: 8.7,
        sixMonths: 12.4,
        oneYear: 18.9,
        ytd: 5.2
      },
      volatility: {
        beta: 1.15,
        sharpeRatio: 1.8,
        standardDeviation: 12.5,
        maxDrawdown: -8.3
      },
      sectors: [
        { name: 'Technology', allocation: 35, value: 44607.5 },
        { name: 'Healthcare', allocation: 12, value: 15294 },
        { name: 'Financial Services', allocation: 10, value: 12745 },
        { name: 'Consumer Discretionary', allocation: 8, value: 10196 },
        { name: 'Communication Services', allocation: 7, value: 8921.5 },
        { name: 'Industrials', allocation: 6, value: 7647 },
        { name: 'Energy', allocation: 5, value: 6372.5 },
        { name: 'REITs', allocation: 15, value: 19117.5 },
        { name: 'Cash & Equivalents', allocation: 2, value: 2549 }
      ]
    };

    res.json({
      success: true,
      data: analyticsData
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching analytics data'
    });
  }
});

// @desc    Rebalance portfolio
// @route   POST /api/portfolio/rebalance
// @access  Private
router.post('/rebalance', async (req, res) => {
  try {
    const { targetAllocation } = req.body;

    // Mock rebalance suggestions
    const rebalanceData = {
      suggestions: [
        {
          action: 'sell',
          symbol: 'AAPL',
          shares: 20,
          reason: 'Overweight in technology sector'
        },
        {
          action: 'buy',
          symbol: 'VTI',
          shares: 15,
          reason: 'Increase broad market exposure'
        },
        {
          action: 'buy',
          symbol: 'BND',
          shares: 25,
          reason: 'Increase bond allocation for stability'
        }
      ],
      estimatedCost: 25.50,
      expectedImpact: {
        riskReduction: 0.3,
        expectedReturn: 0.2
      }
    };

    res.json({
      success: true,
      message: 'Rebalance suggestions generated',
      data: rebalanceData
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error generating rebalance suggestions'
    });
  }
});

module.exports = router;
