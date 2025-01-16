import Image from "next/image";
import { useMyContext } from "../context/MyContextProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

interface MyFormProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export default function MyForm({ show, setShow }: MyFormProps) {
  const { rank, setRank, percentile, setPercentile, score, setScore } =
    useMyContext();

  const [localRank, setLocalRank] = useState(rank);
  const [localPercentile, setLocalPercentile] = useState(percentile);
  const [localScore, setLocalScore] = useState(score);

  const validateForm = (): boolean => {
    let isValid = true;
    if (!localRank || isNaN(Number(localRank)) || Number(localRank) <= 0) {
      toast.error("Rank should be a positive  number ");
      isValid = false;
    }

    if (
      !localPercentile ||
      isNaN(Number(localPercentile)) ||
      Number(localPercentile) < 0 ||
      Number(localPercentile) > 100
    ) {
      toast.error("Percentile must be between 0 and 100");
      isValid = false;
    }

    if (
      !localScore ||
      isNaN(Number(localScore)) ||
      Number(localScore) > 15 ||
      Number(localScore) < 0
    ) {
      toast.error("Score should be a number between [0-15]");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setRank(localRank);
    setPercentile(localPercentile);
    setScore(localScore);
    setShow(!show);
    toast.success("Statistics updated successfully!");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold">Update Scores</h3>
          <Image src="/html.png" alt="Form-img" width={40} height={40} />
        </div>
        <ol className="list-decimal list-inside pl-5 ">
          <li className="flex justify-between mb-3 relative ">
            <span className="absolute -left-8 before:content-['1'] before:mr-2 before:ml-2  rounded-xl bg-blue-950 text-white  "></span>
            <label htmlFor="rankInput">
              Update your <span className="font-bold">Rank</span>
            </label>
            <div>
              <input
                type="text"
                value={localRank}
                onChange={(e) => setLocalRank(e.target.value)}
                id="rankInput"
                className={`outline-1 border-solid border-2 px-1 py-1 focus:outline-blue-300 rounded-md ${
                  localRank === "" ? "border-red-500" : "border-blue-300"
                }`}
                placeholder="Rank"
              />
              {localRank === "" && (
                <p className="text-red-500 text-sm">
                  required | should be number
                </p>
              )}
            </div>
          </li>
          <li className="flex justify-between mb-3 relative">
            <span className="absolute -left-8 before:content-['2'] before:mr-2 before:ml-2  rounded-xl bg-blue-950 text-white  "></span>
            <label htmlFor="percentileInput">
              Update your <span className="font-bold">Percentile</span>
            </label>
            <div>
              <input
                type="text"
                value={localPercentile}
                onChange={(e) => setLocalPercentile(e.target.value)}
                id="percentileInput"
                className={`outline-1 border-solid border-2 px-1 py-1 focus:outline-blue-300 rounded-md ${
                  localPercentile === "" ? "border-red-500" : "border-blue-300"
                }`}
                placeholder="Percentile"
              />
              {localPercentile === "" && (
                <p className="text-red-500 text-sm">
                  required | percentile 0-100
                </p>
              )}
            </div>
          </li>
          <li className="flex justify-between mb-3 relative">
            <span className="absolute -left-8 before:content-['3'] before:mr-2 before:ml-2  rounded-xl bg-blue-950 text-white  "></span>
            <label htmlFor="scoreInput">
              Update your{" "}
              <span className="font-bold">Current Score (out of 15)</span>
            </label>
            <div>
              <input
                type="text"
                value={localScore}
                onChange={(e) => setLocalScore(e.target.value)}
                id="scoreInput"
                className={`outline-1 border-solid border-2 px-1 py-1 focus:outline-blue-300 rounded-md ${
                  localScore === "" ? "border-red-500" : "border-blue-300"
                }`}
                placeholder="Score"
              />
              {localScore === "" && (
                <p className="text-red-500 text-sm">
                  required | should be score
                </p>
              )}
            </div>
          </li>
        </ol>
        <div className="text-right space-x-10 mt-5">
          <button
            className="font-bold text-blue-950 py-2 px-1 border-solid border-2 bg-white border-blue-950 rounded-md"
            type="button"
            onClick={() => setShow(!show)}
          >
            Cancel
          </button>
          <button
            className="font-bold text-white bg-blue-950 px-7 py-2 border-solid border-2 border-blue-950 rounded-lg"
            type="submit"
          >
            Save →
          </button>
        </div>
      </form>
    </div>
  );
}
