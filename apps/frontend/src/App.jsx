// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ShipsyLanding from './components/Landing';

// Dummy pages
const Login = () => {
  const handleLogin = () => {
    // Example: after successful login
    localStorage.setItem("token", "dummyToken");
    toast.success("Login successful!");
  };

  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Simulate Login
      </button>
    </div>
  );
};

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info("Logged out!");
  };

  return (
    <div>
      <h1>Dashboard (Protected)</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

// Fake authentication hook
const useAuth = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

// Protected route wrapper
const ProtectedRoute = ({ children }) => {
  const isAuth = useAuth();
  return isAuth ? children : <Navigate to="/login" replace />;
};

// Page transition animation
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <ShipsyLanding />
            </motion.div>
          }
        />
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <Dashboard />
              </motion.div>
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
      {/* Toast Container at root level */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
}
