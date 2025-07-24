const express = require('express');
const router = express.Router();

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        error: 'Please provide all required fields'
      });
    }

    // Mock response for now
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        id: 'user_' + Date.now(),
        name,
        email,
        createdAt: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error during registration'
    });
  }
});

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validation
    if (!email || !password) {
      return res.status(400).json({
        error: 'Please provide email and password'
      });
    }

    // Mock response for now
    res.json({
      success: true,
      message: 'Login successful',
      token: 'mock_jwt_token_' + Date.now(),
      user: {
        id: 'user_123',
        name: 'John Doe',
        email: email
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error during login'
    });
  }
});

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
router.get('/me', async (req, res) => {
  try {
    // Mock response for now
    res.json({
      success: true,
      user: {
        id: 'user_123',
        name: 'John Doe',
        email: 'john@example.com',
        createdAt: '2025-01-15T10:00:00.000Z',
        lastLogin: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server error fetching user data'
    });
  }
});

module.exports = router;
