"use client";

import { useEffect } from "react";

function injectChatbase() {
  if (document.getElementById("M3VkRmS61n6ANnEwSY5OB")) return;

  if (
    !(window as any).chatbase ||
    (window as any).chatbase("getState") !== "initialized"
  ) {
    (window as any).chatbase = (...args: any[]) => {
      if (!(window as any).chatbase.q) {
        (window as any).chatbase.q = [];
      }
      (window as any).chatbase.q.push(args);
    };
    (window as any).chatbase = new Proxy((window as any).chatbase, {
      get(target: any, prop: string) {
        if (prop === "q") return target.q;
        return (...args: any[]) => target(prop, ...args);
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
  useEffect(() => {
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
  }, []);

  return null;
}
