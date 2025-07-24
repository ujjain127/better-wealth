const express = require('express');
const router = express.Router();

// @desc    Get performance insights
// @route   GET /api/insights/performance
// @access  Private
router.get('/performance', async (req, res) => {
  try {
    const performanceData = {
      overall: {
        totalReturn: 18.7,
        annualizedReturn: 12.4,
        volatility: 15.2,
        sharpeRatio: 1.85,
        maxDrawdown: -8.3,
        benchmarkComparison: {
          sp500: 16.2,
          nasdaq: 21.4,
          userPerformance: 18.7,
          outperformance: 2.5
        }
      },
      timeframes: {
        oneDay: { return: 0.8, benchmark: 0.5 },
        oneWeek: { return: 2.1, benchmark: 1.8 },
        oneMonth: { return: 3.4, benchmark: 2.9 },
        threeMonths: { return: 8.7, benchmark: 7.2 },
        sixMonths: { return: 12.4, benchmark: 11.1 },
        oneYear: { return: 18.7, benchmark: 16.2 },
        ytd: { return: 5.8, benchmark: 4.9 }
      },
      monthlyReturns: [
        { month: 'Jan 2024', return: 2.4, benchmark: 1.8 },
        { month: 'Feb 2024', return: -1.2, benchmark: -0.8 },
        { month: 'Mar 2024', return: 3.1, benchmark: 2.9 },
        { month: 'Apr 2024', return: 1.8, benchmark: 1.4 },
        { month: 'May 2024', return: 2.9, benchmark: 2.1 },
        { month: 'Jun 2024', return: 1.5, benchmark: 1.2 },
        { month: 'Jul 2024', return: 3.2, benchmark: 2.8 },
        { month: 'Aug 2024', return: -2.1, benchmark: -1.9 },
        { month: 'Sep 2024', return: 2.7, benchmark: 2.3 },
        { month: 'Oct 2024', return: 4.1, benchmark: 3.7 },
        { month: 'Nov 2024', return: 1.9, benchmark: 1.6 },
        { month: 'Dec 2024', return: 2.8, benchmark: 2.4 }
      ]
    };

    res.json({
      success: true,
      data: performanceData
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching performance insights'
    });
  }
});

// @desc    Get sector analysis
// @route   GET /api/insights/sectors
// @access  Private
router.get('/sectors', async (req, res) => {
  try {
    const sectorData = {
      allocation: [
        {
          sector: 'Technology',
          allocation: 35.2,
          value: 44873,
          performance: {
            oneMonth: 4.2,
            threeMonths: 12.1,
            oneYear: 22.8
          },
          topHoldings: ['AAPL', 'MSFT', 'GOOGL', 'NVDA'],
          trend: 'positive'
        },
        {
          sector: 'Healthcare',
          allocation: 12.8,
          value: 16313,
          performance: {
            oneMonth: 1.8,
            threeMonths: 5.4,
            oneYear: 8.9
          },
          topHoldings: ['JNJ', 'PFE', 'UNH'],
          trend: 'stable'
        },
        {
          sector: 'Financial Services',
          allocation: 10.5,
          value: 13382,
          performance: {
            oneMonth: 2.9,
            threeMonths: 8.7,
            oneYear: 15.3
          },
          topHoldings: ['JPM', 'BAC', 'WFC'],
          trend: 'positive'
        },
        {
          sector: 'Consumer Discretionary',
          allocation: 8.7,
          value: 11089,
          performance: {
            oneMonth: -0.5,
            threeMonths: 3.2,
            oneYear: 12.1
          },
          topHoldings: ['AMZN', 'TSLA', 'HD'],
          trend: 'neutral'
        },
        {
          sector: 'Real Estate',
          allocation: 15.0,
          value: 19118,
          performance: {
            oneMonth: 1.2,
            threeMonths: 4.8,
            oneYear: 11.7
          },
          topHoldings: ['VNQ', 'REZ', 'SCHH'],
          trend: 'positive'
        },
        {
          sector: 'Energy',
          allocation: 5.3,
          value: 6755,
          performance: {
            oneMonth: 3.7,
            threeMonths: 11.2,
            oneYear: 18.4
          },
          topHoldings: ['XOM', 'CVX', 'COP'],
          trend: 'positive'
        },
        {
          sector: 'Industrials',
          allocation: 7.2,
          value: 9176,
          performance: {
            oneMonth: 2.1,
            threeMonths: 6.8,
            oneYear: 14.2
          },
          topHoldings: ['CAT', 'GE', 'HON'],
          trend: 'stable'
        },
        {
          sector: 'Cash & Equivalents',
          allocation: 5.3,
          value: 6755,
          performance: {
            oneMonth: 0.4,
            threeMonths: 1.2,
            oneYear: 4.8
          },
          topHoldings: ['Money Market', 'Treasury Bills'],
          trend: 'stable'
        }
      ],
      recommendations: [
        {
          type: 'rebalance',
          sector: 'Technology',
          suggestion: 'Consider reducing technology allocation by 5% to limit concentration risk'
        },
        {
          type: 'opportunity',
          sector: 'International',
          suggestion: 'Add international exposure to improve diversification'
        },
        {
          type: 'optimize',
          sector: 'Bonds',
          suggestion: 'Consider adding bond allocation for portfolio stability'
        }
      ]
    };

    res.json({
      success: true,
      data: sectorData
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching sector analysis'
    });
  }
});

// @desc    Get risk analysis
// @route   GET /api/insights/risk
// @access  Private
router.get('/risk', async (req, res) => {
  try {
    const riskData = {
      overall: {
        riskScore: 6.8,
        riskLevel: 'Moderate',
        riskCapacity: 'High',
        riskTolerance: 'Moderate-Aggressive'
      },
      metrics: {
        beta: 1.15,
        standardDeviation: 15.2,
        sharpeRatio: 1.85,
        sortinoRatio: 2.41,
        maxDrawdown: -8.3,
        var95: -2.8,
        var99: -4.2
      },
      factors: [
        {
          factor: 'Market Risk',
          exposure: 85,
          description: 'Risk from general market movements',
          impact: 'high'
        },
        {
          factor: 'Sector Concentration',
          exposure: 72,
          description: 'Risk from technology sector concentration',
          impact: 'medium'
        },
        {
          factor: 'Geographic Risk',
          exposure: 60,
          description: 'Risk from US market concentration',
          impact: 'medium'
        },
        {
          factor: 'Currency Risk',
          exposure: 25,
          description: 'Risk from foreign currency exposure',
          impact: 'low'
        },
        {
          factor: 'Interest Rate Risk',
          exposure: 40,
          description: 'Risk from interest rate changes',
          impact: 'medium'
        },
        {
          factor: 'Liquidity Risk',
          exposure: 15,
          description: 'Risk from illiquid holdings',
          impact: 'low'
        }
      ],
      recommendations: [
        {
          priority: 'high',
          action: 'Reduce technology sector concentration',
          rationale: 'Current 35% allocation exceeds recommended 25% for balanced portfolios'
        },
        {
          priority: 'medium',
          action: 'Add international diversification',
          rationale: 'Reduce geographic concentration with 15-20% international allocation'
        },
        {
          priority: 'medium',
          action: 'Consider defensive assets',
          rationale: 'Add 10-15% bond allocation to reduce overall volatility'
        },
        {
          priority: 'low',
          action: 'Review position sizing',
          rationale: 'Ensure no single position exceeds 5% of total portfolio'
        }
      ],
      stressTests: [
        {
          scenario: '2008 Financial Crisis',
          portfolioImpact: -32.5,
          marketImpact: -37.0,
          relativePerformance: 4.5
        },
        {
          scenario: 'COVID-19 Market Crash',
          portfolioImpact: -28.2,
          marketImpact: -34.0,
          relativePerformance: 5.8
        },
        {
          scenario: 'Tech Bubble Burst',
          portfolioImpact: -41.3,
          marketImpact: -39.2,
          relativePerformance: -2.1
        },
        {
          scenario: 'Interest Rate Spike',
          portfolioImpact: -15.7,
          marketImpact: -18.4,
          relativePerformance: 2.7
        }
      ]
    };

    res.json({
      success: true,
      data: riskData
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching risk analysis'
    });
  }
});

// @desc    Get market insights
// @route   GET /api/insights/market
// @access  Public
router.get('/market', async (req, res) => {
  try {
    const marketData = {
      overview: {
        sp500: { value: 4780.23, change: 1.2, volume: 3.2e9 },
        nasdaq: { value: 15234.56, change: 0.8, volume: 4.1e9 },
        dow: { value: 37891.45, change: 0.9, volume: 285e6 },
        vix: { value: 16.23, change: -2.1 },
        tenYear: { value: 4.25, change: 0.05 }
      },
      sectors: [
        { name: 'Technology', performance: 1.8, trend: 'up' },
        { name: 'Healthcare', performance: 0.5, trend: 'up' },
        { name: 'Financial Services', performance: 1.2, trend: 'up' },
        { name: 'Energy', performance: 2.4, trend: 'up' },
        { name: 'Consumer Discretionary', performance: -0.3, trend: 'down' },
        { name: 'Utilities', performance: 0.1, trend: 'flat' },
        { name: 'Real Estate', performance: 0.8, trend: 'up' },
        { name: 'Materials', performance: 1.1, trend: 'up' }
      ],
      news: [
        {
          headline: 'Fed Holds Rates Steady, Signals Potential Cuts Ahead',
          source: 'Reuters',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          impact: 'positive',
          relevance: 'high'
        },
        {
          headline: 'Tech Earnings Beat Expectations, Driving Market Rally',
          source: 'Bloomberg',
          timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
          impact: 'positive',
          relevance: 'high'
        },
        {
          headline: 'Oil Prices Rise on Supply Concerns',
          source: 'CNBC',
          timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
          impact: 'neutral',
          relevance: 'medium'
        }
      ],
      trends: [
        {
          trend: 'AI and Technology Revolution',
          description: 'Continued investment in artificial intelligence driving tech sector growth',
          timeframe: 'long-term',
          confidence: 'high'
        },
        {
          trend: 'Energy Transition',
          description: 'Shift towards renewable energy creating opportunities in clean tech',
          timeframe: 'long-term',
          confidence: 'high'
        },
        {
          trend: 'Interest Rate Environment',
          description: 'Potential rate cuts may benefit growth stocks and real estate',
          timeframe: 'short-term',
          confidence: 'medium'
        }
      ]
    };

    res.json({
      success: true,
      data: marketData
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching market insights'
    });
  }
});

module.exports = router;
