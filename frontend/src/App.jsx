import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import { SettingsPage } from './pages/SettingsPage';
import { TimetestPage } from './pages/TimetestPage';
import { CustomtestPage } from './pages/CustomtestPage';
import { NavBar } from './components/NavBar';
import { ProfilePage } from './pages/ProfilePage';
import { WordtestPage } from './pages/WordtestPage';
import { useAuthStore } from './store/useAuthStore';
import { useEffect } from 'react';
import { Loader } from 'lucide-react';

import { Toaster } from "react-hot-toast";

function App() {

  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  
  // console.log(authUser);

  if (isCheckingAuth && !authUser) 
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin"/>
      </div>
    ) 

  return (
    <>
      <NavBar />
      
      <br />

      <div>
        <Routes >
          {/* Auth Routes */}
          <Route path="/" element={ authUser ? <HomePage /> : <Navigate to="/signup"/> } />
          <Route path="/signup" element={ !authUser ? <SignupPage /> : <Navigate to="/" /> } />
          <Route path="/login" element={  !authUser ? <LoginPage /> : <Navigate to="/" /> } />

          {/* User Routes */}
          <Route path="/profile" element={ authUser ? <ProfilePage /> : <Navigate to="/signup"/> } />
          <Route path="/settings" element={ <SettingsPage /> } />
        
          {/* Tests Routes */}
          <Route path="/timetest" element={ authUser ? <TimetestPage /> : <Navigate to="/signup"/> } />
          <Route path="/wordtest" element={ authUser ? <WordtestPage /> : <Navigate to="/signup"/> } />
          <Route path="/customtest" element={ authUser ? <CustomtestPage /> : <Navigate to="/signup"/> } />
        </Routes>

        <Toaster />
      </div>
    </>
  )
}

export default App
