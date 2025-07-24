const express = require('express');
const router = express.Router();

// @desc    Get recent transactions
// @route   GET /api/transactions
// @access  Private
router.get('/', async (req, res) => {
  try {
    const { limit = 20, offset = 0 } = req.query;

    // Mock transaction data
    const transactions = [
      {
        id: 'txn_001',
        symbol: 'AAPL',
        name: 'Apple Inc.',
        type: 'buy',
        shares: 25,
        price: 210.00,
        totalAmount: 5250.00,
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
        status: 'completed'
      },
      {
        id: 'txn_002',
        symbol: 'TSLA',
        name: 'Tesla Inc.',
        type: 'sell',
        shares: 15,
        price: 253.33,
        totalAmount: 3800.00,
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
        status: 'completed'
      },
      {
        id: 'txn_003',
        symbol: 'SPY',
        name: 'SPDR S&P 500 ETF',
        type: 'buy',
        shares: 5,
        price: 420.00,
        totalAmount: 2100.00,
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
        status: 'completed'
      },
      {
        id: 'txn_004',
        symbol: 'BTC',
        name: 'Bitcoin',
        type: 'buy',
        shares: 0.035,
        price: 42857.14,
        totalAmount: 1500.00,
        timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
        status: 'completed'
      },
      {
        id: 'txn_005',
        symbol: 'MSFT',
        name: 'Microsoft Corp.',
        type: 'buy',
        shares: 10,
        price: 385.00,
        totalAmount: 3850.00,
        timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
        status: 'completed'
      },
      {
        id: 'txn_006',
        symbol: 'NVDA',
        name: 'NVIDIA Corp',
        type: 'buy',
        shares: 8,
        price: 875.00,
        totalAmount: 7000.00,
        timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
        status: 'completed'
      }
    ];

    const paginatedTransactions = transactions.slice(offset, offset + parseInt(limit));

    res.json({
      success: true,
      data: {
        transactions: paginatedTransactions,
        total: transactions.length,
        limit: parseInt(limit),
        offset: parseInt(offset)
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching transactions'
    });
  }
});

// @desc    Create new transaction
// @route   POST /api/transactions
// @access  Private
router.post('/', async (req, res) => {
  try {
    const { symbol, type, shares, price } = req.body;

    // Validation
    if (!symbol || !type || !shares || !price) {
      return res.status(400).json({
        error: 'Please provide all required fields: symbol, type, shares, price'
      });
    }

    if (!['buy', 'sell'].includes(type)) {
      return res.status(400).json({
        error: 'Transaction type must be either "buy" or "sell"'
      });
    }

    // Mock new transaction
    const newTransaction = {
      id: 'txn_' + Date.now(),
      symbol: symbol.toUpperCase(),
      name: `${symbol.toUpperCase()} Corp.`, // In real app, fetch from API
      type,
      shares: parseFloat(shares),
      price: parseFloat(price),
      totalAmount: parseFloat(shares) * parseFloat(price),
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    res.status(201).json({
      success: true,
      message: 'Transaction created successfully',
      data: newTransaction
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error creating transaction'
    });
  }
});

// @desc    Get transaction by ID
// @route   GET /api/transactions/:id
// @access  Private
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Mock transaction lookup
    const transaction = {
      id: id,
      symbol: 'AAPL',
      name: 'Apple Inc.',
      type: 'buy',
      shares: 25,
      price: 210.00,
      totalAmount: 5250.00,
      timestamp: new Date().toISOString(),
      status: 'completed',
      fees: 9.99,
      notes: 'Automated purchase via rebalancing'
    };

    res.json({
      success: true,
      data: transaction
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching transaction'
    });
  }
});

// @desc    Cancel transaction
// @route   DELETE /api/transactions/:id
// @access  Private
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    res.json({
      success: true,
      message: `Transaction ${id} cancelled successfully`
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error cancelling transaction'
    });
  }
});

module.exports = router;
