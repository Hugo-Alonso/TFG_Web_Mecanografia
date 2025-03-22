import { useState } from "react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { Lock } from "lucide-react";
import { Mail } from "lucide-react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore.js";

export const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { isSigningUp, signup } = useAuthStore();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    debugger;
    if (!form.username.trim()) return toast.error("El nombre es obligatorio");
    if (!form.email.trim()) return toast.error("El email es obligatorio");
    if (!/\S+@\S+\.\S+/.test(form.email)) return toast.error("Formato de email incorrecto");
    if (!form.password) return toast.error("La contraseña es obligatoria");
    if (form.password.length < 6) return toast.error("La contraseña debe contener 6 caracteres");

    return true;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const success = validateForm();

    if (success) {
      console.log("Form submitted:", form);
      debugger;
      signup(form);
    }
  };

  return (
    // <div className="min-h-screen grid">
   <div className="flex flex-col justify-center items-center sm:p-8">
      {/* Left side */}
        <div className="w-full max-w-md space-y-8">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group mt-16">
              <h1 className="text-2xl font-bold mt-2">Crear Cuenta</h1>
              <p className="text-base-content/60">
                Empieza con tu cuenta gratis
              </p>
            </div>
          </div>

          {/* FORM */}
          <form className="space-y-6 x" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Nombre</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full pl-10"
                  placeholder="John Doe"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  disabled  
                >
                  <Mail className="size-5 text-base-content/40" />
                </button>
                <input
                  type="email"
                  className="input input-bordered w-full pl-10"
                  placeholder="you@gmail.com"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Contraseña</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-10"
                  placeholder="••••••••"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Crear Cuenta
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Ya tienes una cuenta?{" "}
              <Link to="/login" className="link link-primary">
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
  );
};
