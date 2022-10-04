import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { ButtonRounded } from "./ui/ButtonRounded";

export const ButtonTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ButtonRounded
      className="text-skin-text hover:text-skin-link"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <SunIcon className="h-[1.2em] w-[1.2em]" />
      ) : (
        <MoonIcon className="h-[1.2em] w-[1.2em]" />
      )}
    </ButtonRounded>
  );
};
