const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Please provide a portfolio name'],
    maxLength: [100, 'Portfolio name cannot be more than 100 characters']
  },
  description: {
    type: String,
    maxLength: [500, 'Description cannot be more than 500 characters']
  },
  totalValue: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  totalCost: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  totalReturn: {
    type: Number,
    default: 0
  },
  totalReturnPercentage: {
    type: Number,
    default: 0
  },
  dayChange: {
    type: Number,
    default: 0
  },
  dayChangePercentage: {
    type: Number,
    default: 0
  },
  riskScore: {
    type: Number,
    min: 0,
    max: 10,
    default: 5
  },
  isActive: {
    type: Boolean,
    default: true
  },
  allocation: {
    stocks: {
      type: Number,
      min: 0,
      max: 100,
      default: 0
    },
    bonds: {
      type: Number,
      min: 0,
      max: 100,
      default: 0
    },
    reits: {
      type: Number,
      min: 0,
      max: 100,
      default: 0
    },
    crypto: {
      type: Number,
      min: 0,
      max: 100,
      default: 0
    },
    cash: {
      type: Number,
      min: 0,
      max: 100,
      default: 0
    },
    other: {
      type: Number,
      min: 0,
      max: 100,
      default: 0
    }
  },
  performance: {
    oneDay: { type: Number, default: 0 },
    oneWeek: { type: Number, default: 0 },
    oneMonth: { type: Number, default: 0 },
    threeMonths: { type: Number, default: 0 },
    sixMonths: { type: Number, default: 0 },
    oneYear: { type: Number, default: 0 },
    ytd: { type: Number, default: 0 },
    inception: { type: Number, default: 0 }
  },
  benchmarks: {
    sp500: { type: Number, default: 0 },
    nasdaq: { type: Number, default: 0 },
    dow: { type: Number, default: 0 }
  },
  lastRebalanced: {
    type: Date
  },
  nextRebalanceDate: {
    type: Date
  },
  autoRebalance: {
    type: Boolean,
    default: false
  },
  rebalanceThreshold: {
    type: Number,
    min: 1,
    max: 20,
    default: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
PortfolioSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Calculate total allocation percentage
PortfolioSchema.virtual('totalAllocation').get(function() {
  return this.allocation.stocks + 
         this.allocation.bonds + 
         this.allocation.reits + 
         this.allocation.crypto + 
         this.allocation.cash + 
         this.allocation.other;
});

// Check if allocation is valid (should sum to 100%)
PortfolioSchema.methods.isValidAllocation = function() {
  const total = this.totalAllocation;
  return total >= 99 && total <= 101; // Allow 1% tolerance
};

module.exports = mongoose.model('Portfolio', PortfolioSchema);
