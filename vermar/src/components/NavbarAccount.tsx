import { useState } from "react";
import { Login } from "./Login";
import { Button } from "./ui/Button";
import { Modal } from "./ui/Modal";

export const NavbarAccount = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
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
