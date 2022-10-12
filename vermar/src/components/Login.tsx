import router from "next/router";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../generated/graphql";
import { Button } from "./ui/Button";
import { Form } from "./ui/Form";
import { Input } from "./ui/Input";

export const Login = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [login] = useLoginMutation();

  return (
    <Form
      form={form}
      onSubmit={async (data) => {
        const response = await login({
          variables: {
            options: { ...data },
          },
        });

        if (response.data?.login.errors) {
          response.data.login.errors.forEach((error) => {
            form.setError(error.field as any, { message: error.message });
          });
        } else if (response.data?.login.user) {
          router.push("/");
        }
      }}
    >
      <Input placeholder="Username" {...form.register("username")} />
      <Input placeholder="Password" {...form.register("password")} />
      <Button primary type="submit">
        Login
      </Button>
    </Form>
  );
};
