import { useRouter } from "next/router";
import { Button } from "./ui/Button";

export const NavbarAccount = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        router.push("/login");
      }}
    >
      Login
    </Button>
  );
};
