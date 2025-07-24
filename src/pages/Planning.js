import React from 'react';
import './Planning.css';

const Planning = () => {
  const goals = [
    { name: "Emergency Fund", target: 25000, current: 18000, deadline: "Dec 2025" },
    { name: "House Down Payment", target: 100000, current: 45000, deadline: "Jun 2027" },
    { name: "Retirement", target: 1000000, current: 127000, deadline: "Dec 2055" },
    { name: "Vacation Fund", target: 8000, current: 3200, deadline: "Jul 2025" }
  ];

  const calculateProgress = (current, target) => {
    return Math.min((current / target) * 100, 100);
  };

  return (
    <div className="planning-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">Financial Planning & Insights</h1>
          <p className="page-subtitle">
            Set goals, track progress, and get AI-powered insights to optimize your financial future.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Financial Goals */}
        <section className="financial-goals">
          <h2 className="section-title">Your Financial Goals</h2>
          <div className="goals-grid">
            {goals.map((goal, index) => (
              <div key={index} className="goal-card">
                <h3>{goal.name}</h3>
                <div className="goal-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{width: `${calculateProgress(goal.current, goal.target)}%`}}
                    ></div>
                  </div>
                  <div className="progress-text">
                    <span>${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}</span>
                    <span>{Math.round(calculateProgress(goal.current, goal.target))}%</span>
                  </div>
                </div>
                <div className="goal-deadline">Target: {goal.deadline}</div>
              </div>
            ))}
          </div>
          <button className="btn btn-primary">Add New Goal</button>
        </section>

        {/* Planning Tools */}
        <section className="planning-tools">
          <h2 className="section-title">Planning Tools</h2>
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon">🎯</div>
              <h3>Goal-Based Planning</h3>
              <p>Set specific financial goals with timelines and track your progress with smart milestones.</p>
              <ul>
                <li>Custom goal creation</li>
                <li>Progress tracking</li>
                <li>Milestone alerts</li>
                <li>Strategy recommendations</li>
              </ul>
            </div>
            <div className="tool-card">
              <div className="tool-icon">💰</div>
              <h3>Smart Budgeting</h3>
              <p>AI-driven budget suggestions based on your spending patterns and financial objectives.</p>
              <ul>
                <li>Expense categorization</li>
                <li>Budget optimization</li>
                <li>Spending alerts</li>
                <li>Savings recommendations</li>
              </ul>
            </div>
            <div className="tool-card">
              <div className="tool-icon">📈</div>
              <h3>Net Worth Tracking</h3>
              <p>Comprehensive view of your assets and liabilities for complete financial visibility.</p>
              <ul>
                <li>Asset aggregation</li>
                <li>Debt tracking</li>
                <li>Net worth trends</li>
                <li>Growth projections</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Budget Overview */}
        <section className="budget-overview">
          <h2 className="section-title">Monthly Budget Overview</h2>
          <div className="budget-container">
            <div className="budget-summary">
              <div className="budget-item">
                <span className="budget-label">Monthly Income</span>
                <span className="budget-value income">$8,500</span>
              </div>
              <div className="budget-item">
                <span className="budget-label">Total Expenses</span>
                <span className="budget-value expense">$6,200</span>
              </div>
              <div className="budget-item">
                <span className="budget-label">Available to Save</span>
                <span className="budget-value savings">$2,300</span>
              </div>
            </div>
            <div className="budget-breakdown">
              <h3>Expense Breakdown</h3>
              <div className="expense-item">
                <span>Housing</span>
                <div className="expense-bar">
                  <div className="expense-fill" style={{width: '35%'}}></div>
                </div>
                <span>$2,170 (35%)</span>
              </div>
              <div className="expense-item">
                <span>Transportation</span>
                <div className="expense-bar">
                  <div className="expense-fill" style={{width: '15%'}}></div>
                </div>
                <span>$930 (15%)</span>
              </div>
              <div className="expense-item">
                <span>Food</span>
                <div className="expense-bar">
                  <div className="expense-fill" style={{width: '12%'}}></div>
                </div>
                <span>$744 (12%)</span>
              </div>
              <div className="expense-item">
                <span>Utilities</span>
                <div className="expense-bar">
                  <div className="expense-fill" style={{width: '8%'}}></div>
                </div>
                <span>$496 (8%)</span>
              </div>
              <div className="expense-item">
                <span>Entertainment</span>
                <div className="expense-bar">
                  <div className="expense-fill" style={{width: '6%'}}></div>
                </div>
                <span>$372 (6%)</span>
              </div>
              <div className="expense-item">
                <span>Other</span>
                <div className="expense-bar">
                  <div className="expense-fill" style={{width: '7%'}}></div>
                </div>
                <span>$488 (7%)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Insights */}
        <section className="financial-insights">
          <h2 className="section-title">AI-Powered Insights</h2>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-icon">💡</div>
              <h3>Optimization Opportunity</h3>
              <p>You could save an additional $340/month by optimizing your transportation and entertainment expenses.</p>
              <button className="btn btn-secondary">View Details</button>
            </div>
            <div className="insight-card">
              <div className="insight-icon">📊</div>
              <h3>Goal Progress</h3>
              <p>At your current savings rate, you'll reach your emergency fund goal 3 months ahead of schedule.</p>
              <button className="btn btn-secondary">Adjust Goal</button>
            </div>
            <div className="insight-card">
              <div className="insight-icon">⚠️</div>
              <h3>Risk Alert</h3>
              <p>Your house down payment goal may require increasing monthly contributions by $200 to meet the deadline.</p>
              <button className="btn btn-secondary">Revise Plan</button>
            </div>
          </div>
        </section>

        {/* Planning Features */}
        <section className="planning-features">
          <h2 className="section-title">Advanced Planning Features</h2>
          <div className="features-list">
            <div className="feature-row">
              <div className="feature-info">
                <h3>Retirement Calculator</h3>
                <p>Plan for your retirement with detailed projections based on your current savings and investment strategy.</p>
              </div>
              <div className="feature-preview">
                <div className="calculator-preview">
                  <span>Projected Retirement Value</span>
                  <span className="projection-value">$2.4M</span>
                  <span className="projection-date">at age 65</span>
                </div>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature-info">
                <h3>Tax Optimization</h3>
                <p>Get recommendations on tax-efficient savings strategies and account allocation.</p>
              </div>
              <div className="feature-preview">
                <div className="tax-savings">
                  <span>Potential Annual Tax Savings</span>
                  <span className="savings-value">$3,200</span>
                </div>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature-info">
                <h3>Scenario Planning</h3>
                <p>Model different financial scenarios to understand how life changes might affect your goals.</p>
              </div>
              <div className="feature-preview">
                <div className="scenario-options">
                  <span>Career Change</span>
                  <span>Home Purchase</span>
                  <span>Family Planning</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="planning-cta">
          <h2>Start Planning Your Financial Future</h2>
          <p>Create your personalized financial plan and get AI-powered insights to achieve your goals.</p>
          <button className="btn btn-primary btn-large">Create Your Plan</button>
        </section>
      </div>
    </div>
  );
};

export default Planning;
