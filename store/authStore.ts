import { api } from "@/api/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

interface loginTypes {
    username: string;
    password: string;
}

export interface registerTypes {
    name: string;
    email: string;
    country_code: string;
    mobile: string;
    experience: string;
    username: string;
    password: string;

    daily_available_hours:number
    expertise: string[];
    languages: string[];
    category: string[];

    is_family_astrologer: string | number;
    family_astrology_details: string | null;
    address: string;
    pincode: string;
}

interface authStoreType {
    user: any | null;
    token: string | null;
    loading: boolean;
    error: string | null;
    hasHydrated: boolean;

    register: (data: registerTypes) => Promise<void>;
    login: (data: loginTypes) => Promise<void>;
    logout: () => Promise<void>;
    profile: () => Promise<void>;
    hydrate: () => Promise<void>;
}

export const userAuthStore = create<authStoreType>((set) => ({
    user: null,
    token: null,
    loading: false,
    error: null,
    hasHydrated: false,

    // 🔥 MANUAL HYDRATION
    hydrate: async () => {
        const token = await AsyncStorage.getItem("token");
        const user = await AsyncStorage.getItem("user");

        set({
            token,
            user: user ? JSON.parse(user) : null,
            hasHydrated: true,
        });
    },

    register: async (data) => {
        try {
            set({ loading: true, error: null });

            const res = await api.post("/astro/register", data);

            await AsyncStorage.setItem("token", res.data.token);

            set({
                token: res.data.token,
                loading: false,
            });
        } catch (err: any) {
            set({
                error: err?.response?.data?.message || "Register failed",
                loading: false,
            });
        }
    },

    login: async (data) => {
        try {
            set({ loading: true, error: null });

            const res = await api.post("/astro/login", data);

            await AsyncStorage.setItem("token", res.data.token);

            set({
                token: res.data.token,
                loading: false,
            });
        } catch (err: any) {
            set({
                error: err?.response?.data?.message || "Login failed",
                loading: false,
            });
        }
    },

    profile: async () => {
        try {
            set({ loading: true });

            const res = await api.get("/astro/profile");

            await AsyncStorage.setItem("user", JSON.stringify(res.data.astro));

            set({
                user: res.data.astro,
                loading: false,
            });
        } catch (err: any) {
            set({
                error: err?.response?.data?.message || "Profile failed",
                loading: false,
            });
        }
    },

    logout: async () => {
        await AsyncStorage.multiRemove(["token", "user"]);

        set({
            user: null,
            token: null,
        });
    },
}));
