import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { ButtonRounded } from "./ui/ButtonRounded";
import { useHasMounted } from "../composables/useHasMounted";

export const ButtonTheme = () => {
  const hasMounted = useHasMounted();
  const { theme, setTheme } = useTheme();

  return (
    <ButtonRounded
      className="text-skin-text hover:text-skin-link"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" && hasMounted ? (
        <SunIcon className="h-[1.2em] w-[1.2em]" />
      ) : (
        <MoonIcon className="h-[1.2em] w-[1.2em]" />
      )}
    </ButtonRounded>
  );
};
