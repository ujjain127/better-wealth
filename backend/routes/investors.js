const express = require('express');
const router = express.Router();

// @desc    Get all investors
// @route   GET /api/investors
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category, experience, location } = req.query;

    // Mock investors data
    const investors = [
      {
        id: 'inv_001',
        name: 'Sarah Mitchell',
        title: 'Senior Portfolio Manager',
        experience: '15+ years',
        specialization: ['Growth Stocks', 'Tech Investments', 'ESG Funds'],
        rating: 4.9,
        reviewsCount: 127,
        location: 'New York, NY',
        profileImage: '/images/investor-1.jpg',
        bio: 'Experienced portfolio manager with expertise in technology sector investments and sustainable investing strategies.',
        aum: '$2.5B',
        successRate: 89,
        consultationFee: 250,
        availability: 'Available'
      },
      {
        id: 'inv_002',
        name: 'Michael Chen',
        title: 'Real Estate Investment Specialist',
        experience: '12+ years',
        specialization: ['Real Estate', 'REITs', 'Commercial Properties'],
        rating: 4.8,
        reviewsCount: 93,
        location: 'San Francisco, CA',
        profileImage: '/images/investor-2.jpg',
        bio: 'Real estate investment expert helping clients build wealth through strategic property investments and REIT portfolios.',
        aum: '$1.8B',
        successRate: 92,
        consultationFee: 300,
        availability: 'Available'
      },
      {
        id: 'inv_003',
        name: 'Emily Rodriguez',
        title: 'Retirement Planning Advisor',
        experience: '10+ years',
        specialization: ['Retirement Planning', 'Index Funds', 'Tax Optimization'],
        rating: 4.9,
        reviewsCount: 156,
        location: 'Austin, TX',
        profileImage: '/images/investor-3.jpg',
        bio: 'Dedicated to helping individuals achieve their retirement goals through disciplined investing and tax-efficient strategies.',
        aum: '$1.2B',
        successRate: 87,
        consultationFee: 200,
        availability: 'Busy'
      },
      {
        id: 'inv_004',
        name: 'David Thompson',
        title: 'Cryptocurrency Investment Advisor',
        experience: '8+ years',
        specialization: ['Cryptocurrency', 'DeFi', 'Blockchain Technology'],
        rating: 4.7,
        reviewsCount: 74,
        location: 'Miami, FL',
        profileImage: '/images/investor-4.jpg',
        bio: 'Early adopter and expert in cryptocurrency investments, helping clients navigate the digital asset landscape safely.',
        aum: '$800M',
        successRate: 85,
        consultationFee: 350,
        availability: 'Available'
      },
      {
        id: 'inv_005',
        name: 'Jennifer Walsh',
        title: 'International Markets Specialist',
        experience: '18+ years',
        specialization: ['International Markets', 'Emerging Markets', 'Currency Hedging'],
        rating: 4.8,
        reviewsCount: 109,
        location: 'Boston, MA',
        profileImage: '/images/investor-5.jpg',
        bio: 'Global investment expert with deep knowledge of international markets and cross-border investment strategies.',
        aum: '$3.1B',
        successRate: 91,
        consultationFee: 275,
        availability: 'Available'
      },
      {
        id: 'inv_006',
        name: 'Robert Kim',
        title: 'Options & Derivatives Strategist',
        experience: '14+ years',
        specialization: ['Options Trading', 'Derivatives', 'Risk Management'],
        rating: 4.6,
        reviewsCount: 68,
        location: 'Chicago, IL',
        profileImage: '/images/investor-6.jpg',
        bio: 'Advanced options strategist helping sophisticated investors enhance returns and manage risk through derivatives.',
        aum: '$1.5B',
        successRate: 88,
        consultationFee: 400,
        availability: 'Limited'
      }
    ];

    // Apply filters if provided
    let filteredInvestors = investors;
    
    if (category) {
      filteredInvestors = filteredInvestors.filter(inv => 
        inv.specialization.some(spec => 
          spec.toLowerCase().includes(category.toLowerCase())
        )
      );
    }

    if (location) {
      filteredInvestors = filteredInvestors.filter(inv => 
        inv.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    res.json({
      success: true,
      data: {
        investors: filteredInvestors,
        total: filteredInvestors.length,
        filters: { category, experience, location }
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching investors'
    });
  }
});

// @desc    Get investor by ID
// @route   GET /api/investors/:id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Mock detailed investor data
    const investor = {
      id: id,
      name: 'Sarah Mitchell',
      title: 'Senior Portfolio Manager',
      experience: '15+ years',
      specialization: ['Growth Stocks', 'Tech Investments', 'ESG Funds'],
      rating: 4.9,
      reviewsCount: 127,
      location: 'New York, NY',
      profileImage: '/images/investor-1.jpg',
      bio: 'Experienced portfolio manager with expertise in technology sector investments and sustainable investing strategies. Sarah has helped over 500 clients achieve their financial goals through disciplined investing and strategic asset allocation.',
      aum: '$2.5B',
      successRate: 89,
      consultationFee: 250,
      availability: 'Available',
      education: [
        'MBA, Finance - Wharton School',
        'CFA Charterholder',
        'BS, Economics - Harvard University'
      ],
      achievements: [
        'Top 1% Portfolio Manager 2023',
        'Morningstar Fund Manager of the Year 2022',
        'Winner of Best ESG Strategy Award 2021'
      ],
      recentPerformance: [
        { year: 2023, return: 18.5 },
        { year: 2022, return: 12.3 },
        { year: 2021, return: 24.7 },
        { year: 2020, return: 15.9 }
      ],
      consultationTypes: [
        {
          type: 'Initial Portfolio Review',
          duration: '60 minutes',
          price: 250,
          description: 'Comprehensive analysis of your current portfolio with personalized recommendations.'
        },
        {
          type: 'Ongoing Advisory',
          duration: 'Monthly',
          price: 500,
          description: 'Monthly portfolio reviews and strategic guidance for ongoing wealth management.'
        },
        {
          type: 'Retirement Planning',
          duration: '90 minutes',
          price: 350,
          description: 'Detailed retirement planning session with actionable steps to reach your goals.'
        }
      ]
    };

    res.json({
      success: true,
      data: investor
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching investor details'
    });
  }
});

// @desc    Book consultation with investor
// @route   POST /api/investors/:id/book
// @access  Private
router.post('/:id/book', async (req, res) => {
  try {
    const { id } = req.params;
    const { consultationType, preferredDate, preferredTime, message } = req.body;

    if (!consultationType || !preferredDate || !preferredTime) {
      return res.status(400).json({
        error: 'Consultation type, preferred date, and time are required'
      });
    }

    // Mock booking data
    const booking = {
      id: 'booking_' + Date.now(),
      investorId: id,
      userId: 'user_123', // From auth middleware
      consultationType,
      preferredDate,
      preferredTime,
      message: message || '',
      status: 'pending',
      bookingFee: 250,
      createdAt: new Date().toISOString()
    };

    res.status(201).json({
      success: true,
      message: 'Consultation booking submitted successfully',
      data: booking
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error booking consultation'
    });
  }
});

// @desc    Get investor categories
// @route   GET /api/investors/categories
// @access  Public
router.get('/meta/categories', async (req, res) => {
  try {
    const categories = [
      { name: 'Growth Stocks', count: 45 },
      { name: 'Real Estate', count: 32 },
      { name: 'Retirement Planning', count: 67 },
      { name: 'Cryptocurrency', count: 23 },
      { name: 'International Markets', count: 29 },
      { name: 'Options Trading', count: 18 },
      { name: 'ESG Investing', count: 41 },
      { name: 'Tech Investments', count: 52 },
      { name: 'Index Funds', count: 38 },
      { name: 'Dividend Investing', count: 34 }
    ];

    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching categories'
    });
  }
});

module.exports = router;
