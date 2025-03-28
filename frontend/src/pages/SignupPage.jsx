import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, LoaderCircle } from "lucide-react";
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

    if (success == true) {
      console.log("Form submitted:", form);
      debugger;
      signup(form);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center sm:p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group mt-16">
              <h1 className="text-2xl font-bold mt-2">Únete hoy</h1>
              <p className="text-base-content/60">
                Empieza con tu cuenta gratis
              </p>
            </div>
          </div>

          {/* FORM */}
          <form className="space-y-6 x" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Usuario</span>
              </label>
              <div className="input input-bordered items-center w-full gap-3 rounded-lg px-4 py-2 focus-within:ring-0">
                <User className="size-5 text-base-content/40"/>
                <input
                  type="text"
                  className="w-full outline-none bg-transparent"
                  placeholder="Jhon Doe"
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
              <div className="input input-bordered items-center w-full gap-3 rounded-lg px-4 py-2 focus-within:ring-0">
                <Mail className="size-5 text-base-content/40"/>
                <input
                  type="email"
                  className="w-full outline-none bg-transparent"
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
              <div className="input input-bordered items-center w-full gap-3 rounded-lg px-4 py-2 focus-within:ring-0">
                <Lock className="size-5 text-base-content/40"/>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full outline-none bg-transparent"
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
                    <EyeOff className="size-5 text-base-content/40"/>
                  ) : (
                    <Eye className="size-5 text-base-content/40"/>
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <LoaderCircle className="size-5 animate-spin"/>
                  Cargando...
                </>
              ) : (
                "Crear Cuenta"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              ¿Ya tienes cuenta?{" "}
              <Link to="/login" className="link link-primary">
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
  );
};
