import { useEffect } from "react";

export const DisableInspect: React.FC = () => {
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      console.log(
        "%cStop! This is a protected website.",
        "color:#ef4444;font-size:20px;font-weight:bold"
      );
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const isDevToolsTrigger =
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && e.key === "U") ||
        (e.ctrlKey && e.shiftKey && e.key === "P");
      if (isDevToolsTrigger) {
        e.preventDefault();
      }
    };

    const debuggerLoop = window.setInterval(() => {
      // eslint-disable-next-line no-debugger
      debugger;
    }, 100);

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
      window.clearInterval(debuggerLoop);
    };
  }, []);

  return null;
};