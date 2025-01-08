import { SiIconify } from "react-icons/si";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white flex justify-between items-center  py-3 px-8 border-b-2 border-b-gray-100  ">
      <h1 className="font-bold flex gap-2">
        <Image
          src="/whatbytes.jpg"
          alt="Whatbytes-icon"
          width={30}
          height={30}
          className="rounded-sm"
        />
        WhatBytes
      </h1>
      <div className="bg-white border-solid border-2 border-gray-100 p-2 rounded-sm">
        <p className="flex gap-2">
          <SiIconify /> Rahil Siddique
        </p>
      </div>
    </header>
  );
}
