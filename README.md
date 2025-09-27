# Expense Tracker App

A full-stack mobile application for tracking personal expenses and managing finances, built with Expo (React Native) and Node.js.

## 📱 Features

- **User Authentication**: Secure sign-up and sign-in functionality powered by Clerk
- **Expense Tracking**: Add, view, and manage your expenses
- **Real-time Updates**: Instantly view your transaction history
- **Balance Overview**: Quick view of your current balance and spending patterns
- **Secure Storage**: All data is securely stored and managed
- **Responsive Design**: Works seamlessly on both iOS and Android devices

## 🛠️ Technology Stack

### Frontend (Mobile App)
- **Expo / React Native** - Mobile application framework
- **Expo Router** - For navigation and routing
- **Clerk** - Authentication and user management
- **React Navigation** - Navigation components
- **Expo Vector Icons** - Icon library
- **Expo Secure Store** - Secure local storage

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **NeonDB** - PostgreSQL database
- **Upstash Redis** - Rate limiting and caching
- **Cron** - Scheduled tasks
- **Cors** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CodeFreak2186/My-Expense-tracker-.git
   cd expense-tracker
   ```

2. **Install App Dependencies**
   ```bash
   cd app
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Setup**
   - Create `.env` file in the backend directory
   - Create `.env` file in the app directory
   - Add necessary environment variables (see .env.example)

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the Expo App**
   ```bash
   cd app
   npm start
   ```

3. **Run on Device/Simulator**
   - Press `a` for Android
   - Press `i` for iOS
   - Scan QR code with Expo Go app for physical device

## 📱 App Structure

```
app/
├── app/                 # Main application code
│   ├── (auth)/         # Authentication routes
│   └── (root)/         # Main app routes
├── assets/             # Images and assets
├── components/         # Reusable components
├── constants/          # Constants and configurations
├── hooks/              # Custom React hooks
├── lib/               # Utility functions
└── styles/            # Styling files

backend/
├── src/
│   ├── config/        # Configuration files
│   ├── controllers/   # Route controllers
│   ├── middleware/    # Custom middleware
│   └── routes/        # API routes
```

## 🔒 Security Features

- Authentication via Clerk
- Rate limiting with Upstash Redis
- Secure data storage
- Protected API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Sanskaar (CodeFreak2186)

---

Made with ❤️ using Expo and Node.js
