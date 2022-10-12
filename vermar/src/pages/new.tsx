import type { NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Block } from "../components/ui/Block";
import { Button } from "../components/ui/Button";
import { Form } from "../components/ui/Form";
import { Input } from "../components/ui/Input";
import { Markdown } from "../components/ui/Markdown";
import { TextArea } from "../components/ui/Textarea";

const New: NextPage = () => {
  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const source = form.watch("content");
  const title = form.watch("title");

  const [preview, setPreview] = useState<boolean>(false);

  return (
    <div className="lg:flex">
      <div className="relative float-left w-full pr-0 lg:w-3/4 lg:pr-5">
        {!preview ? (
          <>
            <div className="px-4 md:px-0">
              <h1 className="mb-4">Create a post</h1>
            </div>
            <Form form={form} onSubmit={(data) => console.log(data)}>
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

      <div className="w-full lg:w-4/12 lg:min-w-[321px]">
        <Block className="lg:fixed lg:w-[320px]">
          <Button
            onClick={() => setPreview(!preview)}
            className="mb-2 block w-full"
          >
            {preview ? "Edit" : "Preview"}
          </Button>
          <Button className="mb-2 block w-full" primary>
            Continue
          </Button>
        </Block>
      </div>
    </div>
  );
};

export default New;
