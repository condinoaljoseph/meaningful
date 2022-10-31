import { Button } from "./ui/Button";

export const Login = () => {
  return (
    <>
      <a href="http://localhost:4000/auth/github">
        <Button className="w-full" type="submit">
          Continue with Github
        </Button>
      </a>
    </>
  );
};
