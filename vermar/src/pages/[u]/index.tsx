import { BellAlertIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Error from "next/error";
import Link from "next/link";
import { useRouter } from "next/router";
import { ButtonFollow } from "../../components/ButtonFollow";
import { Layout } from "../../components/Layout";
import { PostsList } from "../../components/PostsList";
import { AvatarUser } from "../../components/ui/AvatarUser";
import { Block } from "../../components/ui/Block";
import { Button } from "../../components/ui/Button";
import { ButtonRounded } from "../../components/ui/ButtonRounded";
import { useHasMounted } from "../../composables/useHasMounted";
import { useUserQuery } from "../../generated/graphql";
import { useAppPersistStore } from "../../store/useAppStore";
import withApollo from "../../utils/withApollo";

const Profile = () => {
  const {
    query: { u },
    pathname,
  } = useRouter();

  const hasMounted = useHasMounted();
  const user = useAppPersistStore((state) => state.user);

  const { data, loading, error } = useUserQuery({
    variables: {
      username: u as string,
    },
    skip: !u,
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout>
      <div className="lg:flex">
        <div className="w-full lg:w-1/4">
          {!data && loading ? (
            <div className="mb-4 lg:fixed lg:mb-0 lg:w-[240px]">
              <Block slim className="overflow-hidden">
                <div className="flex px-4 pt-3 text-center lg:block lg:h-[253px]">
                  <div className="mb-2 flex lg:mb-3 lg:block">
                    <div className="lazy-loading mx-auto h-[80px] w-[80px] rounded-full" />

                    <div className="ml-3 flex flex-col items-start justify-center lg:mt-3 lg:ml-0 lg:items-center">
                      <div className="lazy-loading mb-2 h-[28px] w-[130px] rounded-md bg-skin-text" />
                      <div className="lazy-loading h-[26px] w-[100px] rounded-md bg-skin-text" />
                    </div>
                  </div>
                  <div className="ml-3 flex items-center justify-center gap-x-2 lg:ml-0">
                    <Button className="w-[120px] cursor-wait">Follow</Button>
                  </div>
                </div>
              </Block>
            </div>
          ) : (
            <div className="mb-4 lg:fixed lg:mb-0 lg:w-[240px]">
              <Block slim className="overflow-hidden">
                <div className="lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
                  <div className="block px-4 pt-4 text-center md:flex lg:block lg:px-0 lg:pt-0">
                    <div className="flex lg:block">
                      <AvatarUser
                        user={data?.user?.username}
                        size="80"
                        className="lg:my-3"
                      />
                      <div className="mx-3 flex flex-col justify-center truncate text-left lg:block lg:text-center">
                        <h3 className="mb-[2px] flex items-center lg:justify-center">
                          <div className="mr-1 truncate">
                            {data?.user?.username}
                          </div>
                        </h3>
                        <div className="mb-[12px] text-skin-text">
                          2 followers
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-grow items-start justify-end gap-x-2 lg:mb-4 lg:justify-center">
                      <ButtonFollow />
                      <ButtonRounded className="inline">
                        <BellAlertIcon className="h-[1.2em] w-[1.2em]" />
                      </ButtonRounded>
                    </div>
                  </div>

                  <div className="no-scrollbar mt-4 flex overflow-y-auto lg:my-3 lg:block">
                    <Link href="/">
                      <a>
                        <div
                          className={clsx(
                            "block cursor-pointer whitespace-nowrap px-4  py-2 text-skin-link hover:bg-skin-bg",
                            {
                              "border-l-[0px] border-b-[3px] !pl-[21px] lg:border-b-[0px] lg:border-l-[3px]":
                                pathname === "/[u]",
                            }
                          )}
                        >
                          Posts
                        </div>
                      </a>
                    </Link>

                    <Link href="/">
                      <a>
                        <div
                          className={clsx(
                            "block cursor-pointer whitespace-nowrap px-4  py-2 text-skin-link hover:bg-skin-bg",
                            {
                              "border-l-[0px] border-b-[3px] !pl-[21px] lg:border-b-[0px] lg:border-l-[3px]":
                                pathname === "/[u]/settings",
                            }
                          )}
                        >
                          Activity
                        </div>
                      </a>
                    </Link>

                    {user?.username === u && hasMounted && (
                      <Link href="/">
                        <a>
                          <div
                            className={clsx(
                              "block cursor-pointer whitespace-nowrap px-4  py-2 text-skin-link hover:bg-skin-bg",
                              {
                                "border-l-[0px] border-b-[3px] !pl-[21px] lg:border-b-[0px] lg:border-l-[3px]":
                                  pathname === "/[u]/settings",
                              }
                            )}
                          >
                            Settings
                          </div>
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </Block>
            </div>
          )}
        </div>

        <div className="relative w-full pl-0 lg:w-3/4 lg:pl-5">
          <Block className="mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
            nisi. Harum voluptatum nostrum aspernatur magnam qui.
          </Block>
          <div className="relative mb-3 flex px-3 md:px-0">
            <div className="flex-auto">
              <div className="flex flex-auto items-center">
                <h2>Posts</h2>
              </div>
            </div>
          </div>

          <div className="my-4 space-y-4">
            <PostsList limit={5} creatorId={data?.user?.id} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Profile);
