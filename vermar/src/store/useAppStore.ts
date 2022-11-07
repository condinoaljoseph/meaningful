import create from "zustand";
import { User } from "../generated/graphql";

interface AppState {
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
  showAuthModal: boolean;
  setShowAuthModal: (showAuthModal: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  showSidebar: false,
  setShowSidebar: (showSidebar) => set(() => ({ showSidebar })),
  showAuthModal: false,
  setShowAuthModal: (showAuthModal) => set(() => ({ showAuthModal })),
}));

interface AppPersistState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAppPersistStore = create<AppPersistState>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));
