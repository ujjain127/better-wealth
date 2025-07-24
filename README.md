# Better Wealth: Next-Gen Financial Management App

A comprehensive financial management application with React.js frontend and Node.js backend, featuring portfolio management, investor matching, financial planning, and AI-powered insights.

## 🚀 Features

### Frontend (React.js)
- **Dashboard**: Real-time portfolio overview with live market data
- **Portfolio Management**: Track investments, analyze performance, manage watchlists
- **Investor Matching**: Connect with verified financial advisors and experts
- **Financial Planning**: Set and track financial goals, budget analysis, retirement planning
- **Market Insights**: Live market data, sector analysis, risk assessment
- **Interactive Components**: Add/remove watchlist items, real-time data updates

### Backend (Node.js/Express)
- **RESTful API**: Complete API endpoints for all features
- **Real-time Data**: Mock financial data with realistic market information
- **Authentication**: User registration, login, and session management
- **Portfolio Analytics**: Performance calculations, risk assessment
- **Contact System**: Contact forms, FAQ, support tickets

## 🛠️ Tech Stack

### Frontend
- **React.js 19.1.0** - Modern React with hooks and functional components
- **React Router DOM** - Client-side routing for multi-page navigation
- **CSS3** - Custom styling with black/white minimalist design (inspired by shallz.com)
- **Google Fonts (Inter)** - Clean, professional typography

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB/Mongoose** - Database models (configured, ready for MongoDB)
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Morgan** - HTTP request logging
- **Rate Limiting** - API protection

## 📁 Project Structure

```
better-wealth/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js/css
│   │   │   ├── Footer.js/css
│   │   │   ├── WatchlistManager.js/css
│   │   │   └── MarketWidget.js/css
│   │   ├── pages/
│   │   │   ├── Home.js/css
│   │   │   ├── Dashboard.js/css
│   │   │   ├── Portfolio.js/css
│   │   │   ├── Investors.js/css
│   │   │   ├── Planning.js/css
│   │   │   ├── Insights.js/css
│   │   │   └── Contact.js/css
│   │   ├── services/
│   │   │   └── api.js
│   │   └── App.js
│   └── package.json
└── backend/
    ├── routes/
    │   ├── auth.js
    │   ├── portfolio.js
    │   ├── transactions.js
    │   ├── watchlist.js
    │   ├── investors.js
    │   ├── planning.js
    │   ├── insights.js
    │   └── contact.js
    ├── models/
    │   ├── User.js
    │   └── Portfolio.js
    ├── server.js
    ├── .env
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (optional, for database features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd better-wealth
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Environment Setup**
   ```bash
   # Copy environment template
   cp backend/.env.example backend/.env
   
   # Update the .env file with your configuration
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   The API server will start on http://localhost:5000

2. **Start the Frontend Development Server**
   ```bash
   # In the root directory
   npm start
   ```
   The React app will start on http://localhost:3000

### API Health Check
Test the backend API:
```bash
curl http://localhost:5000/api/health
```

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Portfolio
- `GET /api/portfolio` - Get portfolio overview
- `GET /api/portfolio/analytics` - Get portfolio analytics
- `POST /api/portfolio/rebalance` - Get rebalancing suggestions

### Transactions
- `GET /api/transactions` - Get transaction history
- `POST /api/transactions` - Create new transaction
- `GET /api/transactions/:id` - Get specific transaction
- `DELETE /api/transactions/:id` - Cancel transaction

### Watchlist
- `GET /api/watchlist` - Get user's watchlist
- `POST /api/watchlist` - Add symbol to watchlist
- `DELETE /api/watchlist/:symbol` - Remove from watchlist
- `GET /api/watchlist/alerts` - Get price alerts
- `POST /api/watchlist/alerts` - Create price alert

### Investors
- `GET /api/investors` - Get all investors (with filters)
- `GET /api/investors/:id` - Get investor details
- `POST /api/investors/:id/book` - Book consultation
- `GET /api/investors/meta/categories` - Get investor categories

### Planning
- `GET /api/planning/goals` - Get financial goals
- `POST /api/planning/goals` - Create new goal
- `PUT /api/planning/goals/:id` - Update goal
- `GET /api/planning/budget` - Get budget analysis
- `GET /api/planning/retirement` - Get retirement analysis

### Insights
- `GET /api/insights/performance` - Performance insights
- `GET /api/insights/sectors` - Sector analysis
- `GET /api/insights/risk` - Risk analysis
- `GET /api/insights/market` - Market insights

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact/faq` - Get FAQ
- `GET /api/contact/resources` - Get support resources
- `POST /api/contact/support` - Create support ticket

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Gray Tones**: #666666, #999999, #CCCCCC
- **Backgrounds**: #F9F9F9, #F0F0F0

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300 (Light), 400 (Regular), 500 (Medium)
- **Text Transform**: lowercase (consistent across the app)

### Layout Principles
- Minimalist black and white design
- Clean typography and spacing
- Responsive grid layouts
- Subtle hover effects and transitions

## 🔧 Key Features

### Interactive Dashboard
- Real-time portfolio updates
- Live market data integration
- Performance tracking vs benchmarks
- API connection status indicator

### Watchlist Management
- Add/remove stocks dynamically
- Real-time price updates
- Interactive UI components
- Error handling and loading states

### Market Data Widget
- Live market indices (S&P 500, NASDAQ, DOW)
- Sector performance tracking
- Latest market news integration
- Market trends analysis

### Portfolio Analytics
- Asset allocation visualization
- Risk score calculation
- Transaction history tracking
- Performance metrics

## 🚀 Deployment

### Frontend Deployment
```bash
npm run build
# Deploy the build folder to your hosting service
```

### Backend Deployment
```bash
# Set NODE_ENV=production in your environment
# Configure production database
# Deploy to your hosting service (Heroku, AWS, etc.)
```

## 🔒 Security Features

- **Helmet.js**: Security headers
- **CORS**: Cross-origin protection
- **Rate Limiting**: API abuse prevention
- **Input Validation**: Request validation
- **Authentication**: JWT-based auth (ready for implementation)

## 📈 Future Enhancements

- **Real Market Data Integration**: Connect to financial APIs (Alpha Vantage, Polygon, etc.)
- **User Authentication**: Complete JWT implementation
- **Database Integration**: MongoDB/PostgreSQL setup
- **Email Notifications**: Portfolio alerts and updates
- **Mobile App**: React Native version
- **Advanced Analytics**: Machine learning insights
- **Social Features**: Investment community and sharing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React.js community for excellent documentation
- Financial data providers for market insights
- Open source community for the amazing tools and libraries

---

**Better Wealth** - *Transforming how you manage and grow your wealth with intelligent technology and expert guidance.*

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
