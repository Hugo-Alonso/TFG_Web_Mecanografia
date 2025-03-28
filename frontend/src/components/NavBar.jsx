import { useState, useRef, useEffect } from "react";
import { AlignJustify, Keyboard, LogIn, LogOut, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { authUser, logout } = useAuthStore();
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ( dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target) 
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">

        {/* Left Section */}
        <div className="flex-1 flex relative">
          { authUser && ( 
            <button
              ref={buttonRef}
              onClick={handleClick}
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <AlignJustify className="w-5 h-5 text-primary"/>
              </div>
            </button>
          )}
          
          {/* Dropdown */}
          {isDropdownOpen && (
            <ul 
                ref={dropdownRef}
                className="absolute left-0 top-full dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-50 mt-2">
            <li>
              <Link to="/timetest" className="text-secondary" onClick={() => setIsDropdownOpen(false)}>
                TimeTest
              </Link>
            </li>
            <li>
              <Link to="/wordtest" className="text-secondary" onClick={() => setIsDropdownOpen(false)}>
                WordTest
              </Link>
            </li>
            <li>
              <Link to="/customtest" className="text-secondary" onClick={() => setIsDropdownOpen(false)}>
                CustomTest
              </Link>
            </li>
          </ul>
          )}
        </div>

        {/* Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Keyboard className="w-5 h-5 text-primary" />
            </div>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-end space-x-3">
          <Link to="/settings" className="btn btn-sm flex items-center gap-2">
            <Settings className="w-5 h-5 text-primary" />
          </Link>
          { !authUser ? 
          <Link to="/signup" className="btn btn-sm flex items-center gap-2">
            <LogIn className="w-5 h-5 text-primary" />
          </Link>
          :
          <>
            <Link to="/profile" className="btn btn-sm flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
            </Link>
            <Link className="btn btn-sm flex items-center gap-2" onClick={logout}>
              <LogOut className="w-5 h-5 text-primary" />
            </Link>
          </>
          }
        </div>
      </div>
    </header>
  );
};
