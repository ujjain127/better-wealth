const express = require('express');
const router = express.Router();

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message, type } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Name, email, and message are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Please provide a valid email address'
      });
    }

    // Mock contact submission
    const contactSubmission = {
      id: 'contact_' + Date.now(),
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
      type: type || 'general',
      status: 'received',
      submittedAt: new Date().toISOString(),
      ticketNumber: 'BW-' + Math.random().toString(36).substr(2, 8).toUpperCase()
    };

    // In a real app, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Create support ticket

    res.status(201).json({
      success: true,
      message: 'Your message has been received successfully. We will get back to you within 24 hours.',
      data: {
        ticketNumber: contactSubmission.ticketNumber,
        submittedAt: contactSubmission.submittedAt
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error submitting contact form'
    });
  }
});

// @desc    Get FAQ
// @route   GET /api/contact/faq
// @access  Public
router.get('/faq', async (req, res) => {
  try {
    const faq = [
      {
        id: 'faq_001',
        category: 'Getting Started',
        question: 'How do I create an account?',
        answer: 'Creating an account is simple! Click the "Sign Up" button, provide your email and create a password. You\'ll receive a verification email to complete the process.',
        order: 1
      },
      {
        id: 'faq_002',
        category: 'Getting Started',
        question: 'Is there a minimum investment amount?',
        answer: 'No, there is no minimum investment amount required. You can start with any amount that\'s comfortable for you.',
        order: 2
      },
      {
        id: 'faq_003',
        category: 'Portfolio Management',
        question: 'How often should I rebalance my portfolio?',
        answer: 'We recommend reviewing your portfolio quarterly and rebalancing when allocations drift more than 5% from your target. Our AI will provide personalized recommendations.',
        order: 3
      },
      {
        id: 'faq_004',
        category: 'Portfolio Management',
        question: 'What investment accounts can I connect?',
        answer: 'You can connect most major brokerage accounts including Fidelity, Charles Schwab, E*TRADE, TD Ameritrade, and many others through secure API connections.',
        order: 4
      },
      {
        id: 'faq_005',
        category: 'Security',
        question: 'How secure is my financial data?',
        answer: 'We use bank-level security with 256-bit SSL encryption, two-factor authentication, and read-only access to your accounts. Your login credentials are never stored on our servers.',
        order: 5
      },
      {
        id: 'faq_006',
        category: 'Security',
        question: 'Can Better Wealth access my money?',
        answer: 'No, we have read-only access to your accounts for tracking purposes only. We cannot initiate trades, transfers, or withdrawals. You maintain full control of your investments.',
        order: 6
      },
      {
        id: 'faq_007',
        category: 'Pricing',
        question: 'What does Better Wealth cost?',
        answer: 'Our basic portfolio tracking is free. Premium features including AI insights and investor consultations start at $9.99/month with no long-term commitments.',
        order: 7
      },
      {
        id: 'faq_008',
        category: 'Pricing',
        question: 'Can I cancel my subscription anytime?',
        answer: 'Yes, you can cancel your subscription at any time without penalties. You\'ll continue to have access to premium features until the end of your billing period.',
        order: 8
      },
      {
        id: 'faq_009',
        category: 'Investor Matching',
        question: 'How are investors vetted?',
        answer: 'All investors on our platform are thoroughly vetted with background checks, credential verification, and performance history review. We only accept certified financial professionals.',
        order: 9
      },
      {
        id: 'faq_010',
        category: 'Investor Matching',
        question: 'What if I\'m not satisfied with a consultation?',
        answer: 'We offer a satisfaction guarantee. If you\'re not completely satisfied with your consultation, we\'ll provide a full refund or match you with a different investor.',
        order: 10
      },
      {
        id: 'faq_011',
        category: 'Technical Support',
        question: 'How do I sync my accounts?',
        answer: 'Go to Settings > Accounts and click "Add Account". Select your brokerage and follow the secure connection process. Syncing typically takes 1-2 minutes.',
        order: 11
      },
      {
        id: 'faq_012',
        category: 'Technical Support',
        question: 'Why isn\'t my portfolio updating?',
        answer: 'Portfolio updates depend on your brokerage\'s data feed. Most accounts update within 15 minutes during market hours. Check your connection status in Settings if data seems stale.',
        order: 12
      }
    ];

    const categorizedFaq = faq.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    res.json({
      success: true,
      data: {
        faq: categorizedFaq,
        totalItems: faq.length
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching FAQ'
    });
  }
});

// @desc    Get support resources
// @route   GET /api/contact/resources
// @access  Public
router.get('/resources', async (req, res) => {
  try {
    const resources = {
      documentation: [
        {
          title: 'Getting Started Guide',
          description: 'Complete guide to setting up your Better Wealth account',
          url: '/docs/getting-started',
          type: 'guide'
        },
        {
          title: 'Portfolio Management Best Practices',
          description: 'Learn how to optimize your investment strategy',
          url: '/docs/portfolio-management',
          type: 'guide'
        },
        {
          title: 'API Documentation',
          description: 'Technical documentation for developers',
          url: '/docs/api',
          type: 'technical'
        }
      ],
      videos: [
        {
          title: 'Platform Overview',
          description: '5-minute walkthrough of main features',
          url: '/videos/platform-overview',
          duration: '5:23'
        },
        {
          title: 'Setting Up Your First Goal',
          description: 'Step-by-step goal creation tutorial',
          url: '/videos/goal-setup',
          duration: '3:45'
        },
        {
          title: 'Understanding Risk Analysis',
          description: 'Deep dive into portfolio risk metrics',
          url: '/videos/risk-analysis',
          duration: '8:12'
        }
      ],
      webinars: [
        {
          title: 'Monthly Market Outlook',
          description: 'Expert analysis of current market trends',
          date: '2025-08-01T18:00:00.000Z',
          registrationUrl: '/webinars/market-outlook'
        },
        {
          title: 'Retirement Planning Strategies',
          description: 'Comprehensive retirement planning workshop',
          date: '2025-08-15T19:00:00.000Z',
          registrationUrl: '/webinars/retirement-planning'
        }
      ],
      contact: {
        supportEmail: 'support@betterwealth.com',
        salesEmail: 'sales@betterwealth.com',
        phone: '1-800-WEALTH-1',
        hours: 'Monday-Friday, 9 AM - 6 PM EST',
        liveChatAvailable: true
      }
    };

    res.json({
      success: true,
      data: resources
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching support resources'
    });
  }
});

// @desc    Submit support ticket
// @route   POST /api/contact/support
// @access  Private
router.post('/support', async (req, res) => {
  try {
    const { subject, description, priority, category } = req.body;

    if (!subject || !description) {
      return res.status(400).json({
        error: 'Subject and description are required'
      });
    }

    const supportTicket = {
      id: 'ticket_' + Date.now(),
      ticketNumber: 'BW-' + Math.random().toString(36).substr(2, 8).toUpperCase(),
      userId: 'user_123', // From auth middleware
      subject,
      description,
      priority: priority || 'medium',
      category: category || 'general',
      status: 'open',
      createdAt: new Date().toISOString(),
      estimatedResolution: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
    };

    res.status(201).json({
      success: true,
      message: 'Support ticket created successfully',
      data: supportTicket
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error creating support ticket'
    });
  }
});

module.exports = router;
