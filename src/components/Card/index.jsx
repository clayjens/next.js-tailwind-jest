import React from "react";

export default function Card({ href, title, description }) {
  return (
    <a
      href={href}
      className={
        "m-4 p-6 text-left inherit no-underline border border-gray-200 rounded-xl transition ease delay-150 max-w-xs hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 active:border-blue-500 active:text-blue-500"
      }
    >
      <h2 className={"mb-4 text-2xl"}>{title} &rarr;</h2>
      <p className={"m-0 text-xl leading-6"}>{description}</p>
    </a>
  );
}
