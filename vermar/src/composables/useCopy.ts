import useCopyToClipboard from "./useCopyToClipboard";

export function useCopy() {
  const { copy } = useCopyToClipboard();

  function copyToClipboard(text: string) {
    copy(text).then((copied) => {
      if (copied) alert("Copied");
    });
  }

  return { copyToClipboard };
}
