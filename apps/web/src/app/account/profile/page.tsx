import { buildMetadata } from "@/lib/seo";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "Profile",
  path: "/account/profile",
  noIndex: true,
});

export default function ProfilePage() {
  return (
    <div className="container-hb max-w-xl py-8 md:py-10">
      <h1 className="font-serif text-3xl text-hb-deep">Profile</h1>
      <form className="mt-8 space-y-4">
        <Input defaultValue="Priya Sharma" aria-label="Full name" />
        <Input defaultValue="priya@example.com" aria-label="Email" type="email" />
        <Input defaultValue="9876543210" aria-label="Phone" />
        <Button type="button">Save changes</Button>
      </form>
    </div>
  );
}
