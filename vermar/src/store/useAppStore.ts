import create from "zustand";

interface AppState {
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  showSidebar: false,
  setShowSidebar: (showSidebar) => set(() => ({ showSidebar })),
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
