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
            const res = await axiosInstance.post("/api/auth/signup", data);
            set({ authUser: res.data });
            toast.success("Account created successfully");
        } catch (error) {
            debugger;
            toast.error(error.response.data.message);
        } finally {
            set({ isSigningUp: false });
        }
    },
}))