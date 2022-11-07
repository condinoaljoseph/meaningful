import DOMPurify from "isomorphic-dompurify";
import { useEffect } from "react";
import { useCopy } from "../../composables/useCopy";
import { marked } from "marked";

export const Markdown = ({ source = "" }: { source?: string }) => {
  const { copyToClipboard } = useCopy();

  useEffect(() => {
    const body = document.querySelector(".markdown-body");
    if (body !== null)
      body.querySelectorAll("pre>code").forEach(function (code) {
        const parent = code.parentElement;
        if (parent !== null) parent.classList.add("rounded-lg");
        const copyButton = document.createElement("button");
        const copySpan = document.createElement("span");
        copySpan.textContent = "copy";
        copySpan.classList.add("copy");
        copySpan.classList.add("text-skin-text");
        copyButton.appendChild(copySpan);
        copyButton.addEventListener("click", function () {
          if (parent !== null)
            copyToClipboard(code.firstChild?.textContent?.trim());
        });
        code.appendChild(copyButton);
      });
  }, [source, copyToClipboard]);

  return (
    <div className="markdown-body break-words">
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked.parse(source)),
        }}
      />
    </div>
  );
};
