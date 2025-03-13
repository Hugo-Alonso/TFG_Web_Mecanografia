import { AlignJustify, Keyboard, LogIn, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
      backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
        
        {/* Sección Izquierda */}
        <div className="flex-1 flex">
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <AlignJustify className="w-5 h-5 text-primary" />
            </div>
          </Link>
        </div>

        {/* Web Icon */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Keyboard className="w-5 h-5 text-primary" />
            </div>
          </Link>
        </div>

        <div className="flex-1 flex justify-end space-x-3">
          {/* Settings Icon */}
          <Link to="/settings" className="btn btn-sm flex items-center gap-2">
            <Settings className="w-4 h-4 text-primary" />
            <span className="hidden md:inline">Settings</span>
          </Link>

          {/* Profile Icon */}
          <Link to="/profile" className="btn btn-sm flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            <span className="hidden md:inline">Profile</span>
          </Link>

          {/* Login Icon */}
          <Link to="/login" className="btn btn-sm flex items-center gap-2">
            <LogIn className="w-5 h-5 text-primary" />
            <span className="hidden md:inline">LogIn</span>
          </Link>
        </div>

      </div>
    </header>
  );
};
