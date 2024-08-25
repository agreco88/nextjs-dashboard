import { lusitana } from "@/app/ui/fonts";

export default async function Page() {
  return (
    <main className="w-full container mx-auto flex flex-col pt-8 gap-">
      <h1
        className={`${lusitana.className} mb-4 text-xl md:text-2xl font-bold uppercase`}
      >
        TODO Home Dashboard
      </h1>
    </main>
  );
}
