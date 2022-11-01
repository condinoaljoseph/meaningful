import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  UpdateUserRequest,
  User,
  useUpdateUserMutation,
} from "../generated/graphql";
import { Button } from "./ui/Button";
import { Form } from "./ui/Form";
import { Input } from "./ui/Input";
import { Modal } from "./ui/Modal";
import { Textarea } from "./ui/Textarea";

export const ModalProfileForm = ({
  user,
  open,
  onClose,
}: {
  user: User;
  open: boolean;
  onClose: () => void;
}) => {
  const form = useForm({
    defaultValues: {
      displayName: user.displayName,
      bio: user.bio,
    },
  });

  const [updateUser] = useUpdateUserMutation();

  const onSubmit: SubmitHandler<UpdateUserRequest> = async (data) => {
    await updateUser({
      variables: {
        request: data,
      },
      onCompleted: () => {
        onClose();
        toast.success("Saved");
      },
      onError: (error) => toast.error(error.message),
    });
  };

  return (
    <Modal open={open} title="Edit Profile" onClose={onClose}>
      <Form className="!space-y-0" form={form} onSubmit={onSubmit}>
        <div className="space-y-2 p-4">
          <Input
            label="Display name"
            type="text"
            placeholder="Enter name"
            {...form.register("displayName")}
          />
          <div>
            <Textarea
              label="Bio"
              placeholder="Tell your story"
              className="s-input !rounded-3xl"
              {...form.register("bio")}
            />
          </div>
        </div>
        <div className="p-4">
          <Button className="w-full" primary>
            Save
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
