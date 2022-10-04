import { Remarkable } from "remarkable";
import { MouseEvent, useEffect, useState } from "react";
import { Interweave } from "interweave";

const md = new Remarkable();
const trimify = (value: string): string =>
  value?.replace(/\n\s*\n/g, "\n\n").trim();

export const Markdown = ({ source = "" }: { source?: string }) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    setMarkdown(md.render(source));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  return (
    <div className="markdown-body break-words">
      <Interweave
        allowAttributes
        allowElements
        content={trimify(markdown)}
        onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
      />
    </div>
  );
};
