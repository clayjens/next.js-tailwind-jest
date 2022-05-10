import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className={
        "flex flex-1 py-4 px-0 border-t border-gray-200 justify-center items-center"
      }
    >
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className={"flex justify-center items-center grow"}
      >
        Powered by
        <span className={"h-4 ml-2"}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
}
