import { useMeQuery } from "../generated/graphql";
import { useAppPersistStore, useAppStore } from "../store/useAppStore";
import { Login } from "./Login";
import { AvatarUser } from "./ui/AvatarUser";
import { Button } from "./ui/Button";
import { MenuAccount } from "./ui/MenuAccount";
import { Modal } from "./ui/Modal";

export const NavbarAccount = () => {
  const setUser = useAppPersistStore((state) => state.setUser);
  const showAuthModal = useAppStore((state) => state.showAuthModal);
  const setShowAuthModal = useAppStore((state) => state.setShowAuthModal);

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
      <AvatarUser
        user={data?.me?.username}
        size="18"
        className="-mr-1 -ml-1 sm:mr-2 md:mr-2 lg:mr-2 xl:mr-2"
      />
      <span className="hidden sm:block">{data?.me?.username}</span>
    </MenuAccount>
  ) : (
    <>
      <Button onClick={() => setShowAuthModal(true)}>Login</Button>
      <Modal
        title="Login"
        open={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      >
        <div className="m-4 space-y-2">
          <Login />
        </div>
      </Modal>
    </>
  );
};
