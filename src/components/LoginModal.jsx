import React, { useState } from 'react';
import { FaTimes, FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from './AuthContext';

const LoginModal = () => {
  const { 
    isLoginModalOpen, 
    isSignupMode, 
    login, 
    signup, 
    closeLoginModal, 
    toggleMode 
  } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
   
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      let result;
      
      if (isSignupMode) {
        result = signup(
          formData.name,
          formData.email,
          formData.password,
          formData.confirmPassword
        );
      } else {
        result = login(formData.email, formData.password);
      }

      if (result.success) {
        setSuccess(result.message);
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        
        setTimeout(() => {
          closeLoginModal();
        }, 2000);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  if (!isLoginModalOpen) return null;

  return (
    <div className="login-modal-overlay" onClick={closeLoginModal}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <div className="login-modal-header">
          <h2>{isSignupMode ? 'Create Account' : 'Welcome Back'}</h2>
          <button className="close-btn" onClick={closeLoginModal}>
            <FaTimes />
          </button>
        </div>

        <div className="login-modal-body">
          {error && (
            <div className="alert error">
              {error}
            </div>
          )}

          {success && (
            <div className="alert success">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            {isSignupMode && (
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser /> Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope /> Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <FaLock /> Password
              </label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder={isSignupMode ? "Create a password (min 6 chars)" : "Enter your password"}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {isSignupMode && (
              <div className="form-group">
                <label htmlFor="confirmPassword">
                  <FaLock /> Confirm Password
                </label>
                <div className="password-input">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            )}

            {!isSignupMode && (
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>
            )}

            <button 
              type="submit" 
              className="auth-submit-btn"
              disabled={loading}
            >
              {loading ? (
                <span className="loading">Loading...</span>
              ) : (
                isSignupMode ? 'Create Account' : 'Sign In'
              )}
            </button>

            <div className="auth-divider">
              <span>or continue with</span>
            </div>

            <div className="social-login">
              <button type="button" className="social-btn google">
                <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" />
                Google
              </button>
              <button type="button" className="social-btn github">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                GitHub
              </button>
            </div>

            <div className="auth-switch">
              <p>
                {isSignupMode ? 'Already have an account?' : "Don't have an account?"}
                <button type="button" onClick={toggleMode} className="switch-btn">
                  {isSignupMode ? 'Sign In' : 'Create Account'}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;