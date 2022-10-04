import type { NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonBack } from "../components/ButtonBack";
import { Block } from "../components/ui/Block";
import { Button } from "../components/ui/Button";
import { Form } from "../components/ui/Form";
import { Input } from "../components/ui/Input";
import { Markdown } from "../components/ui/Markdown";
import { TextArea } from "../components/ui/Textarea";

const New: NextPage = () => {
  const form = useForm();
  const source = form.watch("content");
  const title = form.watch("title");

  const [preview, setPreview] = useState<boolean>(false);

  return (
    <div className="lg:flex">
      <div className="relative float-left w-full pr-0 lg:w-3/4 lg:pr-5">
        <div className="mb-3 overflow-hidden px-4 md:px-0">
          <ButtonBack />
        </div>
        <Block className="mb-4">
          <div className="p-4 leading-5 sm:leading-6">
            Think of your post title as a super short (but{" "}
            <span className="text-meaningful">meaningful</span>) description —
            like an overview of the actual post in one short sentence.
          </div>
        </Block>

        {!preview ? (
          <Form form={form} onSubmit={(data) => console.log(data)}>
            <Input label="Title" {...form.register("title")} />
            <TextArea label="Content" rows={5} {...form.register("content")} />
          </Form>
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
          <div className="p-4 leading-5 sm:leading-6">
            <Button
              onClick={() => setPreview(!preview)}
              className="mb-2 block w-full"
            >
              {preview ? "Edit" : "Preview"}
            </Button>
            <Button className="mb-2 block w-full" primary>
              Continue
            </Button>
          </div>
        </Block>
      </div>
    </div>
  );
};

export default New;
