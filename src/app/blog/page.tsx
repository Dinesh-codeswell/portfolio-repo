import { redirect } from "next/navigation";

// Blogs section is disabled for now — the route redirects home so it is
// unreachable from the frontend. Restore the previous page (git history)
// and re-add nav links when the writing section is ready to publish.
export default function BlogPage() {
  redirect("/");
}
