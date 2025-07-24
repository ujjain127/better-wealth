const express = require('express');
const router = express.Router();

// @desc    Get financial goals
// @route   GET /api/planning/goals
// @access  Private
router.get('/goals', async (req, res) => {
  try {
    // Mock financial goals data
    const goals = [
      {
        id: 'goal_001',
        title: 'Emergency Fund',
        description: 'Build an emergency fund covering 6 months of expenses',
        targetAmount: 30000,
        currentAmount: 18500,
        targetDate: '2025-12-31',
        category: 'savings',
        priority: 'high',
        progress: 61.7,
        createdAt: '2025-01-01T00:00:00.000Z',
        status: 'active'
      },
      {
        id: 'goal_002',
        title: 'Retirement Savings',
        description: 'Accumulate $1M for comfortable retirement by age 65',
        targetAmount: 1000000,
        currentAmount: 127450,
        targetDate: '2050-01-01',
        category: 'retirement',
        priority: 'high',
        progress: 12.7,
        createdAt: '2024-06-15T00:00:00.000Z',
        status: 'active'
      },
      {
        id: 'goal_003',
        title: 'House Down Payment',
        description: 'Save for 20% down payment on $500k home',
        targetAmount: 100000,
        currentAmount: 45000,
        targetDate: '2026-06-01',
        category: 'major_purchase',
        priority: 'medium',
        progress: 45.0,
        createdAt: '2024-10-01T00:00:00.000Z',
        status: 'active'
      },
      {
        id: 'goal_004',
        title: 'Vacation Fund',
        description: 'European vacation with family',
        targetAmount: 8000,
        currentAmount: 3200,
        targetDate: '2025-08-15',
        category: 'lifestyle',
        priority: 'low',
        progress: 40.0,
        createdAt: '2024-12-01T00:00:00.000Z',
        status: 'active'
      },
      {
        id: 'goal_005',
        title: 'Investment Portfolio',
        description: 'Build diversified investment portfolio',
        targetAmount: 250000,
        currentAmount: 127450,
        targetDate: '2028-01-01',
        category: 'investment',
        priority: 'high',
        progress: 51.0,
        createdAt: '2024-01-01T00:00:00.000Z',
        status: 'active'
      }
    ];

    res.json({
      success: true,
      data: {
        goals,
        summary: {
          totalGoals: goals.length,
          activeGoals: goals.filter(g => g.status === 'active').length,
          totalTargetAmount: goals.reduce((sum, goal) => sum + goal.targetAmount, 0),
          totalCurrentAmount: goals.reduce((sum, goal) => sum + goal.currentAmount, 0),
          averageProgress: goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching financial goals'
    });
  }
});

// @desc    Create new financial goal
// @route   POST /api/planning/goals
// @access  Private
router.post('/goals', async (req, res) => {
  try {
    const { title, description, targetAmount, targetDate, category, priority } = req.body;

    if (!title || !targetAmount || !targetDate || !category) {
      return res.status(400).json({
        error: 'Title, target amount, target date, and category are required'
      });
    }

    const newGoal = {
      id: 'goal_' + Date.now(),
      title,
      description: description || '',
      targetAmount: parseFloat(targetAmount),
      currentAmount: 0,
      targetDate,
      category,
      priority: priority || 'medium',
      progress: 0,
      createdAt: new Date().toISOString(),
      status: 'active'
    };

    res.status(201).json({
      success: true,
      message: 'Financial goal created successfully',
      data: newGoal
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error creating financial goal'
    });
  }
});

// @desc    Get budget analysis
// @route   GET /api/planning/budget
// @access  Private
router.get('/budget', async (req, res) => {
  try {
    const budgetData = {
      monthlyIncome: 8500,
      monthlyExpenses: 6200,
      monthlySavings: 2300,
      savingsRate: 27.1,
      categories: [
        {
          name: 'Housing',
          budgeted: 2500,
          spent: 2500,
          remaining: 0,
          percentage: 40.3
        },
        {
          name: 'Transportation',
          budgeted: 800,
          spent: 750,
          remaining: 50,
          percentage: 12.1
        },
        {
          name: 'Food & Dining',
          budgeted: 600,
          spent: 675,
          remaining: -75,
          percentage: 10.9
        },
        {
          name: 'Utilities',
          budgeted: 300,
          spent: 285,
          remaining: 15,
          percentage: 4.6
        },
        {
          name: 'Entertainment',
          budgeted: 400,
          spent: 320,
          remaining: 80,
          percentage: 5.2
        },
        {
          name: 'Healthcare',
          budgeted: 250,
          spent: 180,
          remaining: 70,
          percentage: 2.9
        },
        {
          name: 'Shopping',
          budgeted: 500,
          spent: 490,
          remaining: 10,
          percentage: 7.9
        },
        {
          name: 'Other',
          budgeted: 300,
          spent: 280,
          remaining: 20,
          percentage: 4.5
        }
      ],
      monthlyTrend: [
        { month: 'Jan', income: 8500, expenses: 6200, savings: 2300 },
        { month: 'Feb', income: 8500, expenses: 6400, savings: 2100 },
        { month: 'Mar', income: 9000, expenses: 6300, savings: 2700 },
        { month: 'Apr', income: 8500, expenses: 6100, savings: 2400 },
        { month: 'May', income: 8500, expenses: 6350, savings: 2150 },
        { month: 'Jun', income: 8500, expenses: 6200, savings: 2300 }
      ]
    };

    res.json({
      success: true,
      data: budgetData
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching budget data'
    });
  }
});

// @desc    Get AI financial insights
// @route   GET /api/planning/insights
// @access  Private
router.get('/insights', async (req, res) => {
  try {
    const insights = [
      {
        id: 'insight_001',
        type: 'optimization',
        title: 'Increase Emergency Fund Allocation',
        description: 'Consider increasing your emergency fund allocation by $200/month to reach your goal 3 months earlier.',
        impact: 'high',
        category: 'savings',
        actionable: true,
        createdAt: new Date().toISOString()
      },
      {
        id: 'insight_002',
        type: 'warning',
        title: 'Food Budget Overspend',
        description: 'You\'ve exceeded your food budget by $75 this month. Consider meal planning to reduce costs.',
        impact: 'medium',
        category: 'budget',
        actionable: true,
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'insight_003',
        type: 'opportunity',
        title: 'Tax-Loss Harvesting Opportunity',
        description: 'You have unrealized losses in TSLA that could be harvested for tax benefits before year-end.',
        impact: 'high',
        category: 'investment',
        actionable: true,
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'insight_004',
        type: 'achievement',
        title: 'Savings Goal Progress',
        description: 'Congratulations! You\'re ahead of schedule on your emergency fund goal.',
        impact: 'positive',
        category: 'savings',
        actionable: false,
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
      }
    ];

    res.json({
      success: true,
      data: insights
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching AI insights'
    });
  }
});

// @desc    Update goal progress
// @route   PATCH /api/planning/goals/:id/progress
// @access  Private
router.patch('/goals/:id/progress', async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;

    if (!amount || isNaN(amount)) {
      return res.status(400).json({
        error: 'Valid amount is required'
      });
    }

    // Mock updated goal
    const updatedGoal = {
      id: id,
      title: 'Emergency Fund',
      currentAmount: 18500 + parseFloat(amount),
      targetAmount: 30000,
      progress: ((18500 + parseFloat(amount)) / 30000) * 100,
      updatedAt: new Date().toISOString()
    };

    res.json({
      success: true,
      message: 'Goal progress updated successfully',
      data: updatedGoal
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error updating goal progress'
    });
  }
});

module.exports = router;
