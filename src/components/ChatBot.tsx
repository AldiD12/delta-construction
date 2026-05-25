"use client";

import { useEffect } from "react";

export default function ChatBot() {
  useEffect(() => {
    // Prevent double-loading
    if (document.getElementById("M3VkRmS61n6ANnEwSY5OB")) return;

    // Chatbase init
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

    return () => {
      const el = document.getElementById("M3VkRmS61n6ANnEwSY5OB");
      if (el) el.remove();
    };
  }, []);

  return null;
}
