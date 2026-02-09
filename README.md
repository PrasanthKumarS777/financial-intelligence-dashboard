<div align="center">

# 💰 FinanceHub

### *Your Personal Financial Intelligence Dashboard*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10.x-FFCA28?logo=firebase&logoColor=white)](https://firebase.google.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Live Demo](https://financehub-phi.vercel.app) • [Report Bug](https://github.com/YOUR_USERNAME/financehub/issues) • [Request Feature](https://github.com/YOUR_USERNAME/financehub/issues)

![FinanceHub Dashboard](https://via.placeholder.com/800x400/1a1a1a/dc2626?text=FinanceHub+Dashboard)

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Firebase Setup](#-firebase-setup)
- [Usage Guide](#-usage-guide)
- [Project Structure](#️-project-structure)
- [Deployment](#-deployment)
- [Security](#-security)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)
- [Acknowledgments](#-acknowledgments)

---

## 📖 Overview

**FinanceHub** is a modern, real-time personal finance management dashboard designed to give you complete control over your financial life. Built with React and powered by Firebase, it provides instant insights into your income, expenses, savings goals, credit cards, and bills—all in one beautiful, intuitive interface.

### What Makes FinanceHub Special?

- **Real-time Data Synchronization** - See your financial updates instantly across all devices
- **Beautiful Custom Animations** - Unique gold rupee cursor and floating logo with particle effects
- **Intelligent Analytics** - Visual charts and KPIs that help you understand your spending patterns
- **Secure & Private** - Firebase Authentication with user-specific data isolation
- **Responsive Design** - Works flawlessly on desktop, tablet, and mobile devices
- **Zero Setup Hassle** - Cloud-based solution requiring no backend server setup

---

## ✨ Features

### 🔐 Authentication & Security
- **Firebase Authentication** with email/password
- Protected routes - dashboard accessible only after login
- User-specific data isolation in Firestore
- Secure session management with automatic token refresh
- Password requirements and validation

### 💰 Financial Management

#### Transaction Tracking
- Add income and expense transactions with detailed categorization
- Real-time balance calculations
- Category-based spending analysis
- Date-based transaction history
- Quick transaction entry with modal forms

#### Categories Supported
- **Income**: Salary, Freelance, Investment, Other
- **Expenses**: Food, Shopping, Bills, Transport, Entertainment, Other

### 💳 Credit Card Management
- Store multiple credit cards securely
- Track card details: holder name, last 4 digits, expiry, bank
- Visual card display with beautiful UI
- Quick access to all cards in one place

### 🎯 Savings Goals
- Set multiple savings goals with target amounts
- Track current progress toward each goal
- Visual progress bars showing completion percentage
- Add and update goals in real-time

### 📅 Bill Tracking
- Add upcoming bills with due dates
- Mark bills as paid or pending
- Amount tracking for each bill
- Never miss a payment with organized bill list

### 📊 Visual Analytics

#### Key Performance Indicators (KPIs)
- **Total Balance**: Real-time calculation (Income - Expenses)
- **Total Income**: Sum of all income transactions
- **Emergency Funds**: Dedicated savings goal tracking
- **Reserve Funds**: 30% of total balance calculation

#### Interactive Charts
- **Line Chart**: Income vs Expenses trend over time
- **Pie Chart**: Expense breakdown by category with percentages
- **AIR Card**: All Inclusive Ratio spending analysis with progress bars
- **Goal Progress Bars**: Visual representation of savings goals

### 🎨 Premium UI/UX

#### Custom Gold Rupee Cursor
A unique browsing experience with an animated gold rupee (₹) cursor that:
- Glows with golden light effects and shadows
- Has smooth trailing animation following mouse movement
- Pulses gently for a premium feel
- Only appears after login (normal cursor on login page)
- Created with pure CSS for optimal performance

#### Floating Rupee Animation
The dashboard logo features a stunning floating ₹ symbol that includes:
- **Smooth floating motion** - Gentle up-and-down movement
- **Orbiting coins** - Three mini rupee symbols orbiting the main symbol
- **Particle effects** - Four floating particles with fade-in/fade-out
- **Shimmer glow** - Dynamic golden glow that intensifies and fades
- **Interactive hover** - 360° spin animation when hovering over logo
- **Color scheme** - Gold to red gradient matching dashboard theme

#### Theme & Design
- **Professional dark theme** - Black background with red accents (#dc2626)
- **Glass morphism effects** - Translucent cards with backdrop blur
- **Smooth animations** - Butter-smooth transitions throughout
- **Responsive layout** - Adapts perfectly to all screen sizes
- **Custom scrollbars** - Styled to match the theme
- **Accessibility** - High contrast and readable fonts

### ⚡ Quick Actions
- Fast access buttons at the bottom of dashboard
- Quick entry for transactions, cards, goals, and bills
- Icon-based interface for intuitive navigation

---

## 🎬 Demo

### Live Application
🌐 **[View Live Demo](https://financehub-phi.vercel.app)**

### Key Screens

1. **Login/Signup Page**
   - Clean authentication interface
   - Form validation
   - Error handling
   - Normal cursor (custom cursor appears after login)

2. **Dashboard Overview**
   - Welcome message with user's name
   - 4 KPI cards with real-time calculations
   - Income vs Expense line chart
   - Expense breakdown pie chart
   - Recent transactions list
   - Credit cards display
   - Savings goals with progress
   - Upcoming bills tracker

3. **Data Entry Modals**
   - Transaction form (Income/Expense)
   - Credit card form
   - Savings goal form
   - Bill entry form

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.x | UI library with hooks and modern features |
| **Vite** | 5.x | Lightning-fast build tool and dev server |
| **Recharts** | 2.x | Beautiful, composable charting library |
| **Lucide React** | Latest | Modern, customizable icon set |
| **Tailwind CSS** | 3.x | Utility-first CSS framework |
| **CSS3** | - | Custom animations and styling |

### Backend & Services
| Service | Purpose |
|---------|---------|
| **Firebase Authentication** | User authentication and session management |
| **Cloud Firestore** | NoSQL real-time database |
| **Firebase Hosting** | Optional hosting platform |

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Git** - Version control

### Deployment
- **Vercel** - Production hosting (recommended)
- **GitHub** - Code repository and version control

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.x or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)
- **Firebase Account** - [Sign up for free](https://firebase.google.com/)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/financehub.git
   cd financehub
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   This will install all required packages including React, Firebase, Recharts, etc.

4. **Configure Firebase** (See [Firebase Setup](#-firebase-setup) section below)

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   ```
   http://localhost:5173
   ```
   The app will automatically reload when you make changes.

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

---

## 🔥 Firebase Setup

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter project name: **FinanceHub** (or your preferred name)
4. Disable Google Analytics (optional for this project)
5. Click "Create project"
6. Wait for project to be created

### Step 2: Enable Authentication
1. In Firebase Console, click "Authentication" in left sidebar
2. Click "Get started" button
3. Select "Email/Password" as sign-in provider
4. Toggle ON the "Email/Password" switch
5. Leave "Email link (passwordless sign-in)" OFF
6. Click "Save"

### Step 3: Create Firestore Database
1. Click "Firestore Database" in left sidebar
2. Click "Create database" button
3. **Select edition**: Choose "Standard edition"
4. Click "Next"
5. **Database ID**: Keep as "(default)"
6. **Location**: Select closest region to you
   - For India: `asia-south1` (Mumbai)
   - For USA: `us-central1`
   - For Europe: `europe-west1`
7. Click "Next"
8. **Security rules**: Select "Start in test mode" (for development)
9. Click "Create"
10. Wait 1-2 minutes for database provisioning

### Step 4: Get Firebase Configuration
1. In Firebase Console, click the gear icon ⚙️ next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps" section
4. Click the Web icon `</>`
5. Register app: Enter nickname (e.g., "FinanceHub Web")
6. Click "Register app"
7. Copy the configuration object

### Step 5: Configure Your App

Create or edit `frontend/src/firebase.js`:

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Cloud Firestore
export const db = getFirestore(app);
```

### Step 6: Update Security Rules (Important!)

In Firebase Console:
1. Go to Firestore Database → Rules tab
2. Replace with these rules:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read/write their own data only
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Allow users to create their own user document
    match /users/{userId} {
      allow create: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. Click "Publish"

### Step 7: Enable Billing (Required but Free!)

Firebase requires billing to be enabled even for free tier:

1. Go to Firebase Console → Upgrade plan
2. Select "Blaze (pay as you go)" plan
3. Add payment method

**Don't worry!** You'll stay in free tier with these generous limits:
- ✅ 50,000 document reads per day
- ✅ 20,000 document writes per day
- ✅ 20,000 document deletes per day
- ✅ 1 GB storage
- ✅ Unlimited authentication

Your app won't exceed these limits in normal use!

---

## 📱 Usage Guide

### First Time Setup

#### 1. Create Your Account
- Navigate to the login page
- Click "Sign Up" link at the bottom
- Enter your email address
- Create a strong password (minimum 6 characters)
- Confirm password
- Click "CREATE ACCOUNT" button
- You'll be automatically logged in and redirected to dashboard

#### 2. Experience the Custom Cursor
- After login, move your mouse around
- Notice the gold rupee (₹) cursor following your mouse
- See the beautiful glow and trail effect
- Observe the floating rupee animation beside the FINANCEHUB logo
- Hover over the logo to see the rupee spin!

#### 3. Understand Your Dashboard

**KPI Cards (Top Section)**
- **Total Balance**: Automatically calculated (Total Income - Total Expenses)
- **Total Income**: Sum of all income transactions
- **Emergency Funds**: From your emergency fund savings goal
- **Reserve Funds**: Automatically calculated as 30% of balance

**Charts Section**
- **Line Chart**: Shows income vs expense trends over time
- **Pie Chart**: Breaks down expenses by category with percentages

**AIR Card**
- All Inclusive Ratio spending analysis
- Shows spending patterns
- Progress bar visualization

### Adding Your First Data

#### Add a Transaction
1. Scroll to "Recent Transactions" section
2. Click the red "+ Add" button
3. Fill in the modal form:
   - **Name**: E.g., "Monthly Salary"
   - **Amount**: E.g., 50000
   - **Type**: Select "Income" or "Expense"
   - **Category**: Choose appropriate category
   - **Date**: Select date (defaults to today)
4. Click "Add transaction" button

**Watch the Magic:**
- Transaction appears instantly in the list
- KPI cards update in real-time
- Charts adjust to show new data
- Data is saved to Firebase automatically

#### Add More Transactions (Examples)

**Income Examples:**
- Monthly Salary: ₹50,000 (Salary category)
- Freelance Project: ₹20,000 (Freelance category)
- Investment Returns: ₹5,000 (Investment category)

**Expense Examples:**
- Grocery Shopping: ₹5,000 (Food category)
- Electricity Bill: ₹2,000 (Bills category)
- Movie Night: ₹1,500 (Entertainment category)
- Uber Rides: ₹800 (Transport category)

#### Add a Credit Card
1. Go to "My Credit Cards" section
2. Click "+ Add Card" button
3. Fill in details:
   - **Card Holder Name**: Your full name
   - **Last 4 Digits**: Last 4 digits of card number
   - **Expiry Date**: MM/YY format
   - **Bank Name**: Your bank name
4. Click "Add Card"
5. The card appears in a beautiful visual card format!

#### Set Savings Goals
1. Go to "Savings Goals" section
2. Click "+ Add" button
3. Enter goal details:
   - **Goal Name**: E.g., "Emergency Fund"
   - **Target Amount**: E.g., ₹100,000
   - **Current Amount**: E.g., ₹25,000
4. Click "Add Goal"

**More Goal Ideas:**
- Dream Vacation: Target ₹150,000
- New Laptop: Target ₹80,000
- Wedding Fund: Target ₹500,000
- Car Down Payment: Target ₹200,000

#### Track Bills
1. Go to "Upcoming Bills" section
2. Click "+ Add Bill" button
3. Fill in:
   - **Bill Name**: E.g., "Electricity Bill"
   - **Amount**: E.g., ₹2,000
   - **Due Date**: Select future date
   - **Status**: Pending or Paid
4. Click "Add Bill"

### Using Quick Actions

At the bottom of the dashboard, find Quick Action buttons:
- **Add Transaction** - Fast transaction entry
- **Add Card** - Quick card addition
- **Set Goal** - Instant goal creation
- **Add Bill** - Rapid bill entry

### Navigation

Use the sidebar to navigate:
- **Overview** - Main dashboard (home)
- **Transactions** - View all transactions
- **Analytics** - Detailed analytics view
- **Cards** - Manage credit cards
- **Goals** - Track savings goals
- **Settings** - User settings
- **Logout** - Sign out securely

### Tips for Best Experience

- ✅ Add transactions regularly - Keep your data up-to-date
- ✅ Set realistic goals - Start with achievable targets
- ✅ Review charts weekly - Understand your spending patterns
- ✅ Use categories consistently - For better analytics
- ✅ Update bills immediately - When you pay them
- ✅ Check your balance daily - Stay aware of your finances

---

## 🏗️ Project Structure

```
financehub/
│
├── frontend/                          # Main application directory
│   ├── src/                          # Source code
│   │   ├── components/               # React components
│   │   │   ├── Auth.jsx             # Login/Signup authentication component
│   │   │   ├── CustomCursor.jsx     # Gold rupee cursor component
│   │   │   ├── FloatingRupee.jsx    # Animated floating rupee logo
│   │   │   └── DataEntryModal.jsx   # Modal forms for data entry
│   │   │
│   │   ├── App.jsx                  # Main application component
│   │   ├── App.css                  # Global styles and animations
│   │   ├── firebase.js              # Firebase configuration
│   │   └── main.jsx                 # Application entry point
│   │
│   ├── public/                       # Static assets
│   │   └── vite.svg                 # Vite logo
│   │
│   ├── .gitignore                   # Git ignore rules
│   ├── eslint.config.js             # ESLint configuration
│   ├── index.html                   # HTML template
│   ├── package.json                 # Dependencies and scripts
│   ├── package-lock.json            # Locked dependency versions
│   ├── postcss.config.js            # PostCSS configuration
│   ├── tailwind.config.js           # Tailwind CSS configuration
│   └── vite.config.js               # Vite configuration
│
├── .gitignore                        # Root Git ignore
└── README.md                         # Project documentation (this file)
```

### Key Files Explained

**`frontend/src/firebase.js`**
- Firebase SDK initialization
- Authentication service export
- Firestore database export

**`frontend/src/App.jsx`**
- Main dashboard component
- State management with React hooks
- Real-time Firebase data listeners
- KPI calculations
- Chart data processing

**`frontend/src/App.css`**
- Custom animations (cursor, floating rupee)
- Dashboard styling
- Card designs
- Responsive breakpoints
- Theme colors and variables

**`frontend/src/components/Auth.jsx`**
- Login and signup forms
- Firebase authentication integration
- Form validation
- Error handling

**`frontend/src/components/CustomCursor.jsx`**
- Gold rupee cursor logic
- Mouse position tracking
- Conditional rendering (only in dashboard)

**`frontend/src/components/FloatingRupee.jsx`**
- Floating rupee animation structure
- Particle and orbit elements

**`frontend/src/components/DataEntryModal.jsx`**
- Universal modal component
- Dynamic forms based on data type
- Firestore data submission
- Form validation and error handling

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

Vercel offers the best experience for React applications with automatic deployments.

#### Prerequisites
- GitHub account
- Vercel account (free) - [Sign up here](https://vercel.com/signup)
- Code pushed to GitHub repository

#### Method 1: Vercel CLI (Fastest)

1. **Install Vercel CLI globally**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```
   Choose your login method (GitHub, email, etc.)

3. **Navigate to frontend folder**
   ```bash
   cd frontend
   ```

4. **Deploy**
   ```bash
   vercel
   ```
   Answer the prompts:
   - Set up and deploy? **Y** (Yes)
   - Which scope? Select your account
   - Link to existing project? **N** (No)
   - Project name? **financehub** (or your choice)
   - In which directory is your code? Press **Enter**
   - Want to override settings? **N** (No)

5. **Deploy to production**
   ```bash
   vercel --prod
   ```

You'll receive URLs:
- Preview: `https://financehub-xxx.vercel.app`
- Production: `https://financehub.vercel.app`

#### Method 2: Vercel Dashboard (Easiest)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. **Import Git Repository**
   - Connect your GitHub account
   - Select your repository
   - Click "Import"
4. **Configure Project**
   - Framework Preset: **Vite**
   - Root Directory: **frontend**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Click "Deploy"
6. Wait 2-3 minutes for deployment
7. Your app is live! 🎉

#### Update Firebase Authorized Domains

After deployment, add your Vercel domain to Firebase:

1. Go to Firebase Console
2. Select your project
3. Click **Authentication** → **Settings** tab
4. Scroll to **Authorized domains**
5. Click "Add domain"
6. Enter your Vercel domain: `financehub.vercel.app` (without https://)
7. Click "Add"

Now authentication will work on your live site!

### Deploy to Netlify (Alternative)

1. **Build the project:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```
   Follow the prompts to authorize and deploy

### Custom Domain (Optional)

**On Vercel:**
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Wait for DNS propagation (up to 48 hours)

---

## 🔒 Security

### Authentication Security
- **Password Requirements**: Minimum 6 characters (configurable)
- **Firebase Authentication**: Industry-standard security
- **Session Management**: Automatic token refresh
- **Secure Password Storage**: Handled by Firebase (never stored in plain text)

### Data Security
- **User Data Isolation**: Each user can only access their own data
- **Firestore Security Rules**: Server-side validation
- **HTTPS Only**: All production traffic encrypted
- **No Data Exposure**: Firebase configuration keys are safe to expose (they're just identifiers)

### Firestore Security Rules (Already Configured)

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can access data
    // Users can only read/write their own data
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Users can create their own user document
    match /users/{userId} {
      allow create: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Best Practices for Production

1. ✅ Update Firebase Rules to production mode after testing
2. ✅ Enable App Check in Firebase for additional security
3. ✅ Set up monitoring with Firebase Analytics
4. ✅ Enable CORS if needed for your domain
5. ✅ Regular security audits of dependencies
6. ✅ Keep Firebase SDK updated to latest version

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
   - Click the "Fork" button at the top right

2. **Clone your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/financehub.git
   cd financehub
   ```

3. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

4. **Make your Changes**
   - Add your amazing feature
   - Test thoroughly
   - Follow existing code style

5. **Commit your Changes**
   ```bash
   git commit -m "Add some AmazingFeature"
   ```

6. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click "Pull Requests" → "New Pull Request"
   - Select your branch
   - Describe your changes
   - Submit!

### Contribution Ideas

- 🎨 Additional themes (light mode, blue theme, green theme)
- 📊 More chart types and analytics
- 💱 Multi-currency support
- 🔔 Email/SMS notifications for bills
- 📱 Progressive Web App (PWA) features
- 🤖 AI-powered financial insights
- 📈 Investment portfolio tracking
- 🏦 Bank account integration
- 📝 Export to Excel/PDF
- 🌍 Internationalization (i18n)

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Prasanth Kumar Sahu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Author

**Prasanth Kumar Sahu**

🎓 MBA in Finance & IT  
💼 Aspiring Business Analyst / Data Analyst  


### Connect with Me

- 🐙 **GitHub**: [@YOUR_USERNAME](https://github.com/PrasanthKumarS777)
- 💼 **LinkedIn**: [Prasanth Kumar Sahu](https://linkedin.com/in/prasanthsahu7)
- 📧 **Email**: pk777sahu@gmail.com
- 🌐 **Portfolio**: [your-portfolio.com](https://your-portfolio.com)

### Why I Built This

As someone passionate about finance and technology, I wanted to create a tool that makes personal finance management both powerful and enjoyable. FinanceHub combines my interests in financial analysis, data visualization, and modern web development to help people take control of their financial lives.

---

## 🙏 Acknowledgments

### Technologies & Libraries

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Firebase](https://firebase.google.com/) - Backend-as-a-Service platform
- [Recharts](https://recharts.org/) - A composable charting library
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icon set
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

### Inspiration

- Modern fintech dashboards for design inspiration
- Personal finance management needs
- Community feedback and suggestions

### Special Thanks

- Firebase team for amazing documentation
- React community for excellent resources
- Open-source contributors worldwide

---

<div align="center">

### 🌟 If you found this project helpful, please give it a star!

**Built with ❤️ using React and Firebase**

© 2026 Prasanth Kumar Sahu. All rights reserved.

</div>



