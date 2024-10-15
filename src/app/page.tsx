import { UUIDFetcher } from "@/components/UUIDFetcher";

export const runtime = "edge";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-[100dvh]">
      <h1 className="text-3xl font-bold">Coolify Test</h1>

      <div className="pt-4">
        <UUIDFetcher />
      </div>
    </main>
  );
}
