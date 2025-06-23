# Kyiv Cryptocurrency Exchanger
A modern, secure, and user-friendly cryptocurrency exchange platform built with React.

## 🚀 Features
- Cryptocurrency Exchange : Exchange various cryptocurrencies with competitive rates
- Real-time Market Data : View up-to-date cryptocurrency prices and market information
- Multi-language Support : Available in English, Ukrainian, and Russian
- User Authentication : Secure login and registration system
- User Dashboard : Manage your account, transactions, and reviews
- Admin Panel : Comprehensive admin interface for managing users, reviews, transactions, and chat
- Responsive Design : Optimized for all devices from mobile to desktop
- Dark/Light Theme : Toggle between dark and light themes
- Live Chat Support : Get help from support agents through the integrated chat system
## 💻 Technologies Used
### Frontend
- React 18
- Redux Toolkit for state management
- React Router for navigation
- Material UI components
- Emotion for styled components
- i18next for internationalization
- React Hook Form for form handling
- Axios for API requests
- Socket.io for real-time communication
- React Toastify for notifications
### Development Tools
- ESLint for code linting
- Prettier for code formatting
- Husky for Git hooks
## 📋 Prerequisites
- Node.js (v14 or higher)
- npm or yarn

Trae

25 context(s) used

Workspace

ReviewItem.jsx 1-104

AdminRoute.js 1-16

AdminMenu.styled.js 1-19

AdminMenu.jsx 1-36

ReviewPage.jsx 1-119

... More ( 19 +)

I'll create a comprehensive README.md file for this cryptocurrency exchange project. First, I need to understand the project structure and key features to include in the documentation.

Search in the workspace

Now I need to understand the project structure better to create a comprehensive README. Let me search for more information about the project's components and features.

Search in the workspace

I need to get a better understanding of the project structure to create a comprehensive README. Let me list the directories to see the overall organization.

kyiv_cryptocurrency_exchanger

Let me check the package.json file to understand the project dependencies and scripts, which will be important information for the README.

package.json :( 1 - 80 )

Now I'll check the App.jsx file to understand the main application structure and routing.

src\App.jsx :( 1 - 100 )

Let me see the rest of the App.jsx file to understand the complete routing structure.

src\App.jsx :( 101 - 120 )

Let me check the HomePage component to understand the main features showcased on the home page.

src\pages\Home\HomePage.jsx :( 1 - 20 )

Let me check the Hero component to understand what's displayed in the hero section of the homepage.

src\components\hero\Hero.jsx :( 1 - 50 )

Let me check the Calculator component to understand the exchange functionality.

src\components\calculator\Calculator.jsx :( 1 - 100 )

Let me see the rest of the Calculator component to understand the complete exchange functionality.

src\components\calculator\Calculator.jsx :( 101 - 178 )

Let me check the Exchange component to understand how the actual exchange process works.

src\components\exchange\Exchange.jsx :( 1 - 100 )

Let me see the rest of the Exchange component to understand the complete exchange process.

src\components\exchange\Exchange.jsx :( 101 - 196 )

# Kyiv Cryptocurrency Exchanger
A modern, secure, and user-friendly cryptocurrency exchange platform built with React.

## 🚀 Features
- Cryptocurrency Exchange : Exchange various cryptocurrencies with competitive rates
- Real-time Market Data : View up-to-date cryptocurrency prices and market information
- Multi-language Support : Available in English, Ukrainian, and Russian
- User Authentication : Secure login and registration system
- User Dashboard : Manage your account, transactions, and reviews
- Admin Panel : Comprehensive admin interface for managing users, reviews, transactions, and chat
- Responsive Design : Optimized for all devices from mobile to desktop
- Dark/Light Theme : Toggle between dark and light themes
- Live Chat Support : Get help from support agents through the integrated chat system
## 💻 Technologies Used
### Frontend
- React 18
- Redux Toolkit for state management
- React Router for navigation
- Material UI components
- Emotion for styled components
- i18next for internationalization
- React Hook Form for form handling
- Axios for API requests
- Socket.io for real-time communication
- React Toastify for notifications
### Development Tools
- ESLint for code linting
- Prettier for code formatting
- Husky for Git hooks
## 📋 Prerequisites
- Node.js (v14 or higher)
- npm or yarn
## 🔧 Installation
1. Clone the repository
   
   ```
   git clone https://github.com/
   your-username/
   kyiv_cryptocurrency_exchanger.git
   cd kyiv_cryptocurrency_exchanger
   ```
2. Install dependencies
   
   ```
   npm install
   ```
3. Start the development server
   
   ```
   npm start
   ```
4. Open http://localhost:3000 to view it in your browser
## 🏗️ Project Structure
```
├── public/             # Static files 
and localization resources
│   ├── locales/        # Translation 
files (en, ua, ru)
│   └── index.html      # HTML template
├── src/                # Source code
│   ├── components/     # React 
components
│   ├── helpers/        # Helper 
functions
│   ├── hooks/          # Custom React 
hooks
│   ├── images/         # Image assets
│   ├── layouts/        # Layout 
components
│   ├── pages/          # Page 
components
│   ├── redux/          # Redux store 
and slices
│   ├── schemas/        # Validation 
schemas
│   ├── services/       # API services
│   ├── shared/         # Shared 
utilities
│   ├── styles/         # Global styles
│   ├── App.jsx         # Main 
application component
│   └── index.js        # Application 
entry point
└── package.json        # Project 
dependencies and scripts
```
## 🔐 Key Features Explained
### Cryptocurrency Calculator
The calculator allows users to convert between different cryptocurrencies and fiat currencies with real-time rates. It displays the amount a user will receive after the exchange, including any applicable fees.

### Exchange Process
Users can exchange cryptocurrencies by:

1. Selecting currencies and amount in the calculator
2. Proceeding to the exchange page
3. Providing payment details (wallet address or credit card)
4. Confirming the transaction
### User Dashboard
Registered users have access to:

- Account information and settings
- Transaction history
- Ability to leave reviews
### Admin Panel
Administrators can:

- Manage user accounts
- Review and moderate user reviews
- Monitor and manage transactions
- Respond to user inquiries through the chat system