import { useEffect } from "react";

export function useChatBehavior(
  isOpen: boolean,
  setIsOpen: (v: boolean) => void,
) {
  // Lock scroll on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-doc-scroll");
    } else {
      document.body.classList.remove("no-doc-scroll");
    }
    return () => document.body.classList.remove("no-doc-scroll");
  }, [isOpen]);

  // Back button closes chat on mobile
  useEffect(() => {
    if (isOpen && window.innerWidth < 640) {
      window.history.pushState({ chatOpen: true }, "");
    }
  }, [isOpen]);

  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [isOpen]);
}
