import { create } from "zustand";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIng: false,
    isCheckingAuth: true,
    isMakingTest: false
}))