import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Block } from "../../../components/ui/Block";
import { Button } from "../../../components/ui/Button";
import { Form } from "../../../components/ui/Form";
import { Input } from "../../../components/ui/Input";
import { Markdown } from "../../../components/ui/Markdown";
import { TextArea } from "../../../components/ui/Textarea";
import {
  PostInput,
  usePostQuery,
  useUpdatePostMutation,
} from "../../../generated/graphql";

const Edit: NextPage = () => {
  const { query, back } = useRouter();

  const { data, loading } = usePostQuery({
    variables: { id: parseInt(query.id as string) },
  });

  const form = useForm<PostInput>({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  useEffect(() => {
    form.reset({
      title: data?.post?.title,
      content: data?.post?.content,
    });
  }, [form, data]);

  const source = form.watch("content") || "";
  const title = form.watch("title");

  const [preview, setPreview] = useState<boolean>(false);

  const [updatePost] = useUpdatePostMutation();

  const onSubmit: SubmitHandler<PostInput> = async (data) => {
    await updatePost({
      variables: {
        id: parseInt(query.id as string),
        ...data,
      },
    });

    back();
  };

  if (!data && loading) {
    return (
      <div className="space-y-3">
        <div className="lazy-loading rounded-md w-full h-[34px]" />
        <div className="lazy-loading rounded-md w-[40%] h-[34px]" />
        <div className="lazy-loading rounded-md w-[65px] h-[28px]" />
      </div>
    );
  }

  return (
    <div className="lg:flex">
      <div className="relative w-full pr-0 lg:w-3/4 lg:pr-5">
        <div className="mb-5 px-4 md:px-0">
          {!preview ? (
            <>
              <h1 className="mb-4">Edit post</h1>
              <Form form={form} onSubmit={onSubmit}>
                <Input label="Title" {...form.register("title")} />
                <TextArea
                  label="Content"
                  {...form.register("content")}
                  count={source.length}
                />
              </Form>
            </>
          ) : (
            <>
              <h1 className="w-full break-all">{title || "Untitled"}</h1>
              <div className="mb-2">
                <Markdown source={source} />
              </div>
            </>
          )}
        </div>
      </div>

      <div className="w-full lg:w-4/12 lg:min-w-[321px]">
        <Block className="lg:fixed lg:w-[320px]">
          <Button
            onClick={() => setPreview(!preview)}
            className="mb-2 block w-full"
          >
            {preview ? "Edit" : "Preview"}
          </Button>
          <Button
            className="mb-2 block w-full"
            primary
            type="submit"
            onClick={form.handleSubmit(onSubmit)}
          >
            Save changes
          </Button>
        </Block>
      </div>
    </div>
  );
};

export default Edit;
