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

function App() {
  return (
    <>
      <NavBar />
      
      <br />

      <div>
        <Routes >
          {/* Auth Routes */}
          <Route path="/" element={ <HomePage /> } />
          <Route path="/signup" element={ <SignupPage /> } />
          <Route path="/login" element={ <LoginPage /> } />

          {/* User Routes */}
          <Route path="/profile" element={ <ProfilePage /> } />
          <Route path="/settings" element={ <SettingsPage /> } />
        
          {/* Tests Routes */}
          <Route path="/timetest" element={ <TimetestPage /> } />
          <Route path="/wordtest" element={ <WordtestPage /> } />
          <Route path="/customtest" element={ <CustomtestPage /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
