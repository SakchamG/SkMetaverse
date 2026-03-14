import { Suspense } from "react";
import StartProjectClient from "./StartProjectClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24 px-6 text-muted-foreground">Loading…</div>}>
      <StartProjectClient />
    </Suspense>
  );
}
