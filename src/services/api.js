// API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  };

  // Add auth token if available
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Auth API
export const authAPI = {
  register: (userData) => apiRequest('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData)
  }),
  
  login: (credentials) => apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  }),
  
  getCurrentUser: () => apiRequest('/auth/me'),
  
  logout: () => {
    localStorage.removeItem('authToken');
    return Promise.resolve();
  }
};

// Portfolio API
export const portfolioAPI = {
  getPortfolio: () => apiRequest('/portfolio'),
  
  getAnalytics: () => apiRequest('/portfolio/analytics'),
  
  rebalance: (targetAllocation) => apiRequest('/portfolio/rebalance', {
    method: 'POST',
    body: JSON.stringify({ targetAllocation })
  })
};

// Transactions API
export const transactionsAPI = {
  getTransactions: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/transactions${queryString ? `?${queryString}` : ''}`);
  },
  
  createTransaction: (transactionData) => apiRequest('/transactions', {
    method: 'POST',
    body: JSON.stringify(transactionData)
  }),
  
  getTransaction: (id) => apiRequest(`/transactions/${id}`),
  
  cancelTransaction: (id) => apiRequest(`/transactions/${id}`, {
    method: 'DELETE'
  })
};

// Watchlist API
export const watchlistAPI = {
  getWatchlist: () => apiRequest('/watchlist'),
  
  addToWatchlist: (symbol) => apiRequest('/watchlist', {
    method: 'POST',
    body: JSON.stringify({ symbol })
  }),
  
  removeFromWatchlist: (symbol) => apiRequest(`/watchlist/${symbol}`, {
    method: 'DELETE'
  }),
  
  getAlerts: () => apiRequest('/watchlist/alerts'),
  
  createAlert: (alertData) => apiRequest('/watchlist/alerts', {
    method: 'POST',
    body: JSON.stringify(alertData)
  })
};

// Investors API
export const investorsAPI = {
  getInvestors: (filters = {}) => {
    const queryString = new URLSearchParams(filters).toString();
    return apiRequest(`/investors${queryString ? `?${queryString}` : ''}`);
  },
  
  getInvestor: (id) => apiRequest(`/investors/${id}`),
  
  bookConsultation: (id, bookingData) => apiRequest(`/investors/${id}/book`, {
    method: 'POST',
    body: JSON.stringify(bookingData)
  }),
  
  getCategories: () => apiRequest('/investors/meta/categories')
};

// Planning API
export const planningAPI = {
  getGoals: () => apiRequest('/planning/goals'),
  
  createGoal: (goalData) => apiRequest('/planning/goals', {
    method: 'POST',
    body: JSON.stringify(goalData)
  }),
  
  updateGoal: (id, goalData) => apiRequest(`/planning/goals/${id}`, {
    method: 'PUT',
    body: JSON.stringify(goalData)
  }),
  
  getBudget: () => apiRequest('/planning/budget'),
  
  getRetirementAnalysis: () => apiRequest('/planning/retirement')
};

// Insights API
export const insightsAPI = {
  getPerformance: () => apiRequest('/insights/performance'),
  
  getSectorAnalysis: () => apiRequest('/insights/sectors'),
  
  getRiskAnalysis: () => apiRequest('/insights/risk'),
  
  getMarketInsights: () => apiRequest('/insights/market')
};

// Contact API
export const contactAPI = {
  submitContact: (contactData) => apiRequest('/contact', {
    method: 'POST',
    body: JSON.stringify(contactData)
  }),
  
  getFAQ: () => apiRequest('/contact/faq'),
  
  getResources: () => apiRequest('/contact/resources'),
  
  createSupportTicket: (ticketData) => apiRequest('/contact/support', {
    method: 'POST',
    body: JSON.stringify(ticketData)
  })
};

// Health check
export const healthAPI = {
  check: () => apiRequest('/health')
};

export default {
  auth: authAPI,
  portfolio: portfolioAPI,
  transactions: transactionsAPI,
  watchlist: watchlistAPI,
  investors: investorsAPI,
  planning: planningAPI,
  insights: insightsAPI,
  contact: contactAPI,
  health: healthAPI
};
