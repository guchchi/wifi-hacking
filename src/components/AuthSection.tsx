
import React, { useState } from 'react';
import { Lock, User, Mail, Eye, EyeOff } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const AuthSection = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate authentication
    setTimeout(() => {
      toast({
        title: isLogin ? "Login successful!" : "Account created!",
        description: isLogin 
          ? "Welcome back to ALX-17 Hacks." 
          : "Your account has been created. Welcome to ALX-17 Hacks!",
      });
      
      setIsSubmitting(false);
      // Reset form
      setEmail('');
      setPassword('');
      setName('');
    }, 1500);
  };

  return (
    <section id="auth" className="py-20 bg-hack-gray">
      <div className="section-container">
        <div className="max-w-md mx-auto">
          <div className="card">
            <div className="flex justify-center mb-6">
              <Lock className="h-12 w-12 text-hack-green" />
            </div>
            
            <h2 className="text-2xl font-bold text-center mb-8">
              {isLogin ? 'Login to Access Premium Tutorials' : 'Sign Up for ALX-17 Hacks'}
            </h2>
            
            <div className="flex justify-center mb-6">
              <div className="bg-hack-dark rounded-lg p-1 inline-flex">
                <button
                  className={`px-4 py-2 rounded-md ${isLogin ? 'bg-hack-green text-hack-dark' : 'text-gray-400'}`}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
                <button
                  className={`px-4 py-2 rounded-md ${!isLogin ? 'bg-hack-green text-hack-dark' : 'text-gray-400'}`}
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-hack-dark border border-gray-700 rounded-md pl-10 pr-4 py-2 text-white"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-hack-dark border border-gray-700 rounded-md pl-10 pr-4 py-2 text-white"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="w-full bg-hack-dark border border-gray-700 rounded-md pl-10 pr-10 py-2 text-white"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-hack-green text-hack-dark font-bold py-3 px-4 rounded-md hover:bg-opacity-90 transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : isLogin ? 'Login' : 'Create Account'}
              </button>
            </form>
            
            {isLogin ? (
              <p className="mt-4 text-center text-sm">
                Don't have an account?{' '}
                <button 
                  className="text-hack-green hover:underline"
                  onClick={() => setIsLogin(false)}
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p className="mt-4 text-center text-sm">
                Already have an account?{' '}
                <button 
                  className="text-hack-green hover:underline"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
