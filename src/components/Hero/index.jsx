import React from "react";

export default function Hero() {
  return (
    <div>
      <h1 className={"m-0 text-6xl leading-5 text-center"}>
        Welcome to{" "}
        <a
          href="https://nextjs.org"
          className={
            "text-blue-500 no-underline hover:underline focus:underline active:underline"
          }
        >
          Next.js!
        </a>
      </h1>{" "}
      <p className={"my-16 mx-0 text-center leading-6 text-2xl"}>
        Get started by editing{" "}
        <code className={"bg-white rounded p-3 text-lg font-mono"}>
          src/pages/index.js
        </code>
      </p>
    </div>
  );
}
