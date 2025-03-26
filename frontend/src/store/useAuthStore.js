import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIng: false,
    isCheckingAuth: true,
    isMakingTest: false,
    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            debugger;
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authUser: res.data });
            toast.success("Cuenta creada correctamente");
        } catch (error) {
            // debugger;
            toast.error(error.response.data.message);
        } finally {
            set({ isSigningUp: false });
        }
    },
    login: async (data) => {
        set({ isLoggingIng: true});
        try {
            debugger;
            const res = await axiosInstance.post("/auth/login", data);
            debugger;
            set({ authUser: res.data });
            toast.success("Sesión iniciada correctamente")
        } catch(error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isLoggingIng: false});
        }
    }
}))