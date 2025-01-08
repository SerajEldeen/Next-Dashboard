"use client";
import Image from "next/image";
import Statistics from "./Statistics";
import Graph from "./Graph";
import { useState } from "react";
import MyForm from "./MyForm";

export default function SkillTest() {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow((e) => !e);
  }
  return (
    <div>
      <h3 className="text-gray-500 mb-5">Skill Test</h3>
      <div className="flex gap-2 border-solid border-2 border-gray-200 p-4 rounded mb-5">
        <Image src="/html.png" alt="HTML-icon" width={50} height={50} />
        <p className="text-gray-500">
          <span className="font-bold text-black">
            Hyper Text Markup Language
            <br />
          </span>
          Question:08 | Duration: 15mins | Submitted on 5 June 2021
        </p>
        <button
          type="button"
          className="text-white px-8 py-1 rounded-md bg-blue-950 hover:bg-blue-300 transition-colors duration-300 "
          onClick={handleClick}
        >
          Update
        </button>
      </div>
      <Statistics />
      <Graph />
      {show && (
        <>
          <MyForm show={show} setShow={setShow} />
        </>
      )}
    </div>
  );
}
