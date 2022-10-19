import { useState } from "react";
import { useMeQuery } from "../generated/graphql";
import { useAppPersistStore } from "../store/useAppStore";
import { Login } from "./Login";
import { AvatarUser } from "./ui/AvatarUser";
import { Button } from "./ui/Button";
import { MenuAccount } from "./ui/MenuAccount";
import { Modal } from "./ui/Modal";

export const NavbarAccount = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const setUser = useAppPersistStore((state) => state.setUser);

  const { data, loading } = useMeQuery({
    onCompleted: (data) => {
      if (!data.me) {
        setUser(null);
      }

      setUser(data?.me);
    },
  });

  return !data && loading ? (
    <Button loading />
  ) : data?.me ? (
    <MenuAccount>
      <Button className="flex items-center">
        <AvatarUser
          user={data?.me?.username}
          size="18"
          className="-mr-1 -ml-1 sm:mr-2 md:mr-2 lg:mr-2 xl:mr-2"
        />
        <span className="hidden sm:block">{data?.me?.username}</span>
      </Button>
    </MenuAccount>
  ) : (
    <>
      <Button onClick={() => setShowModal(true)}>Login</Button>
      <Modal title="Login" open={showModal} onClose={() => setShowModal(false)}>
        <div className="m-4 space-y-2">
          <Login />
        </div>
      </Modal>
    </>
  );
};
