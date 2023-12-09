import { useState } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

type listDetails = {
  href: string;
  name: string;
};

export default function InPageNav({
  header,
  list
}: {
  header: string;
  list: listDetails[];
}) {
  const [toggle, setToggle] = useState(true);

  const inPageNavList = list.map((details) => {
    return (
      <>
        <Link
          href={details.href}
          key={details.name}
          className={`${
            toggle ? "block" : "hidden"
          } rounded-md border-x-2 border-y border-[--starick-olive] p-2 text-gray-600 last:border-b-2 hover:bg-gray-100`}
        >
          {details.name}
        </Link>
      </>
    );
  });
  return (
    <div className={`flex flex-col justify-between ${inter.className}`}>
      <button
        className={`${
          toggle ? "border-b" : "border-b-2"
        } inline-flex justify-between rounded-md border-2 border-[--starick-olive] p-2 font-semibold text-gray-600`}
        onClick={() => setToggle(!toggle)}
      >
        {header}
        <svg
          className="mr-3 h-5 w-5 text-gray-600"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      {inPageNavList}
    </div>
  );
}
