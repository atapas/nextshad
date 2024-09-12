import Image from "next/image";
import { Star } from "lucide-react";

export default async function Home() {
  const response = await fetch("https://api.github.com/repos/atapas/nextshad");
  const data = await response.json();
  const starGazzersCount = data?.stargazers_count;

  console.log(starGazzersCount);

  return (
    <div className="grid grid-rows-[5px_1fr_5px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex w-full justify-around">
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <Image
            className="dark:invert"
            src="https://res.cloudinary.com/atapas/image/upload/v1726141045/misc/shadcn-ui-seeklogo_y0exqp.svg"
            alt="shadcn logo"
            width={140}
            height={28}
            priority
          />
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Find shadcn components under the{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/components/ui
            </code>
            folder.
          </li>
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row w-full justify-center">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/atapas/nextshad/fork"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fork the Repo
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/atapas/nextshad"
            target="_blank"
            rel="noopener noreferrer"
          >
            Give a <Star size={18} className="mx-1 dark:text-yellow-300" /><span className="text-md">({starGazzersCount || 2})</span>
          </a>
        </div>
      </div>
      
    </div>
  );
}
