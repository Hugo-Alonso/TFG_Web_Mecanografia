import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import { SettingsPage } from './pages/SettingsPage';
import { TimetestPage } from './pages/TimetestPage';
import { WordtestPage } from './pages/WordtestPage';
import { CustomtestPage } from './pages/CustomtestPage';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/signup" element={ <SignupPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/settings" element={ <SettingsPage /> } />
        <Route path="/timetest" element={ <TimetestPage /> } />
        <Route path="/wordtest" element={ <WordtestPage /> } />
        <Route path="/customtest" element={ <CustomtestPage /> } />
      </Routes>
    </>
  )
}

export default App
