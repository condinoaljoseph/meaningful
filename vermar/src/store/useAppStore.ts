import create from "zustand";

interface AppState {
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  showSidebar: false,
  setShowSidebar: (showSidebar) => set(() => ({ showSidebar })),
}));
