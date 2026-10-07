"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useUIStore } from "@/store/uiStore";

export function ContactForm() {
  const showToast = useUIStore((s) => s.showToast);
  const [pending, setPending] = useState(false);

  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        setPending(true);
        setTimeout(() => {
          setPending(false);
          showToast("Message received — we'll get back soon.");
          (e.target as HTMLFormElement).reset();
        }, 500);
      }}
    >
      <Input name="name" placeholder="Your name" required />
      <Input name="email" type="email" placeholder="Email" required />
      <Input name="subject" placeholder="Subject" required />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="How can we help?"
        className="w-full rounded-md border border-hb-border bg-white px-3.5 py-3 text-sm focus:border-hb-deep focus:outline-none focus:ring-1 focus:ring-hb-deep/20"
      />
      <Button type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
