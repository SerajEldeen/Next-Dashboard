import { IoMdStats } from "react-icons/io";
import { FaAward } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import { ComponentType } from "react";

export default function Sidebar() {
  interface list {
    name: string;
    key: string;
    icon: ComponentType;
    style: string;
  }
  const listElement: list[] = [
    {
      name: "Dashboard",
      key: "dashboard",
      icon: IoMdStats,
      style:
        "flex gap-2 mb-4 cursor-pointer hover:bg-gray-200 p-3 rounded-md hover:text-white",
    },
    {
      name: "Skill Test",
      key: "skilltest",
      icon: FaAward,
      style:
        "flex gap-2 mb-4 cursor-pointer bg-gray-300 p-3 rounded-md text-blue-500 ",
    },
    {
      name: "InternShip",
      key: "internship",
      icon: FaRegFile,
      style:
        "flex gap-2 mb-4 cursor-pointer hover:bg-gray-200 p-3 rounded-md hover:text-white",
    },
  ];
  return (
    <nav className="bg-white px-6 py-8 border-r-2 border-r-gray-50 row-span-full hidden xl:flex flex-col gap-8">
      <ul className="list-none p-5 pl-3 ">
        {listElement.map((e) => (
          <li className={e.style} key={e.key}>
            <e.icon /> {e.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
