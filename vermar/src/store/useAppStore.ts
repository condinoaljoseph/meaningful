import create from "zustand";

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

interface User {
  id: number;
  username: string;
}

interface AppPersistState {
  user: User | null | undefined;
  setUser: (user: User | null | undefined) => void;
}

export const useAppPersistStore = create<AppPersistState>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));
