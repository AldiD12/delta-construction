"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const adLandingPages = new Set(["/roofing/quote", "/extensions/quote"]);

type ChatbaseFunction = ((...args: unknown[]) => unknown) & {
  q?: unknown[][];
};

type ChatbaseWindow = Window & {
  chatbase?: ChatbaseFunction;
};

function injectChatbase() {
  if (document.getElementById("M3VkRmS61n6ANnEwSY5OB")) return;

  const chatWindow = window as ChatbaseWindow;

  if (
    !chatWindow.chatbase ||
    chatWindow.chatbase("getState") !== "initialized"
  ) {
    const queuedChatbase: ChatbaseFunction = (...args: unknown[]) => {
      if (!queuedChatbase.q) {
        queuedChatbase.q = [];
      }
      queuedChatbase.q.push(args);
    };

    chatWindow.chatbase = new Proxy(queuedChatbase, {
      get(target, prop: string) {
        if (prop === "q") return target.q;
        return (...args: unknown[]) => target(prop, ...args);
      },
    });
  }

  const script = document.createElement("script");
  script.src = "https://www.chatbase.co/embed.min.js";
  script.id = "M3VkRmS61n6ANnEwSY5OB";
  script.setAttribute("domain", "www.chatbase.co");
  document.body.appendChild(script);
}

export default function ChatBot() {
  const pathname = usePathname();

  useEffect(() => {
    if (adLandingPages.has(pathname)) return;

    let loaded = false;

    const load = () => {
      if (loaded) return;
      loaded = true;
      injectChatbase();
      window.removeEventListener("scroll", load);
    };

    // Load after 3s OR on first scroll — whichever is sooner
    const timer = setTimeout(load, 3000);
    window.addEventListener("scroll", load, { once: true, passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", load);
    };
  }, [pathname]);

  return null;
}
