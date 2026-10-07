"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useUIStore } from "@/store/uiStore";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const showToast = useUIStore((s) => s.showToast);

  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (!email.includes("@")) {
          showToast("Enter a valid email", "error");
          return;
        }
        showToast("Welcome to the mountains — you're on the list.");
        setEmail("");
      }}
    >
      <Input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        aria-label="Email for newsletter"
        className="bg-white"
      />
      <Button type="submit" variant="primary" className="shrink-0">
        Join
      </Button>
    </form>
  );
}
