# GiveEase

A full-stack web application designed to connect donors, institutions, and shopkeepers for transparent donations.

## 🌟 Features

### 👤 User Panel
- User Authentication (Google & Email login)
- Item-Based Donation System
- Real-Time Donation Tracking
- Feedback System
- Shopkeeper Order Management

### 🛠 Admin Panel
- Dashboard Overview
- Institution & Shop Management
- Fraud Detection System
- Transaction Monitoring
- Reports & Analytics

## 💻 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js + Express.js
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Hosting**: Firebase Hosting/Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd give-ease-final
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Add your Firebase configuration:
   ```env
   FIREBASE_API_KEY=your_api_key
   FIREBASE_AUTH_DOMAIN=your_auth_domain
   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_STORAGE_BUCKET=your_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   FIREBASE_APP_ID=your_app_id
   ```

4. **Run the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

5. **Access the application**
   - Open `http://localhost:3000` in your browser

## 📁 Project Structure

```
give-ease-final/
├── server/                 # Backend server
│   ├── routes/            # API routes
│   │   ├── auth.js        # Authentication routes
│   │   ├── donations.js   # Donation management
│   │   ├── institutions.js # Institution management
│   │   └── shopkeepers.js # Shopkeeper management
│   └── index.js           # Server entry point
├── assets/                # Static assets
├── *.html                 # Frontend pages
├── *.css                  # Stylesheets
├── *.js                   # Frontend JavaScript
├── .env.example           # Environment variables template
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## 🔧 Available Scripts

- `npm start` - Run the production server
- `npm run dev` - Run the development server with nodemon
- `npm run client` - Start the client (if applicable)
- `npm run build` - Build the client for production

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For support, email support@giveease.com or create an issue in this repository.