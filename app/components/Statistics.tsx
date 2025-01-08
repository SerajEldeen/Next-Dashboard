import Image from "next/image";
import { useMyContext } from "../context/MyContextProvider";

export default function Statistics() {
  const { rank, percentile, score } = useMyContext();
  return (
    <div className="border-solid border-2 border-gray-200 rounded-md px-3 py-5">
      <h3 className="mb-3 font-bold">Quick Statistics</h3>
      <div className="flex justify-between items-center gap-3">
        <div className="flex justify-between items-center gap-4">
          <div>
            <Image
              src="/rank.jpg"
              alt="Rank"
              width={50}
              height={50}
              className="p-3 bg-gray-200 rounded-full "
            />
          </div>
          <p className="text-gray-500 uppercase">
            <span className="font-extrabold text-black">{rank}</span>
            <br /> Your Rank
          </p>
        </div>

        <div className="flex justify-between items-center gap-4">
          <div>
            <Image
              src="/percentile2.png"
              alt="Percentile"
              width={50}
              height={50}
              className="p-3 bg-gray-200 rounded-full"
            />
          </div>
          <p className="text-gray-500 uppercase">
            <span className="font-extrabold text-black">{percentile}%</span>
            <br /> Percentile
          </p>
        </div>

        <div className="flex justify-between items-center gap-4">
          <div>
            <Image
              src="/correct.png"
              alt="Correct"
              width={50}
              height={50}
              className="p-3 bg-gray-200 rounded-full"
            />
          </div>
          <p className="text-gray-500 uppercase">
            <span className="font-extrabold text-black">{score} / 15</span>
            <br /> Correct Answers
          </p>
        </div>
      </div>
    </div>
  );
}
