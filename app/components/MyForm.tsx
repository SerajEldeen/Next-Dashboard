import Image from "next/image";
import { useMyContext } from "../context/MyContextProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface MyFormProps {
  show: boolean;
  setShow: (show: boolean) => void;
}
export default function MyForm({ show, setShow }: MyFormProps) {
  const { rank, setRank, percentile, setPercentile, score, setScore } =
    useMyContext();
  const validateForm = (): boolean => {
    let isValid = true;
    if (!rank || isNaN(Number(rank))) {
      toast.error("Rank  should be a number");
      isValid = false;
    }

    if (
      !percentile ||
      isNaN(Number(percentile)) ||
      Number(percentile) < 0 ||
      Number(percentile) > 100
    ) {
      toast.error("Percentile must be between 0 and 100");
      isValid = false;
    }

    if (
      !score ||
      isNaN(Number(score)) ||
      Number(score) > 15 ||
      Number(score) < 0
    ) {
      toast.error("Score should be a number between [0-15]");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setRank(rank);
    setPercentile(percentile);
    setScore(score);
    setShow(!show);
    toast.success("Scores updated successfully!");
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
        <ol className="list-decimal">
          <li className="flex justify-between mb-3">
            <label htmlFor="rankInput">
              Update your <span className="font-bold">Rank</span>
            </label>
            <div>
              <input
                type="text"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                id="rankInput"
                className={`outline-1 border-solid border-2 px-1 py-1 focus:outline-blue-300 rounded-md ${
                  rank === "" ? "border-red-500" : "border-blue-300"
                }`}
                placeholder="Rank"
              />
              {rank === "" && (
                <p className="text-red-500 text-sm">
                  required | should be number
                </p>
              )}
            </div>
          </li>
          <li className="flex justify-between mb-3">
            <label htmlFor="percentileInput">
              Update your <span className="font-bold">Percentile</span>
            </label>
            <div>
              <input
                type="text"
                value={percentile}
                onChange={(e) => setPercentile(e.target.value)}
                id="percentileInput"
                className={`outline-1 border-solid border-2 px-1 py-1 focus:outline-blue-300 rounded-md ${
                  percentile === "" ? "border-red-500" : "border-blue-300"
                }`}
                placeholder="Percentile"
              />
              {percentile === "" && (
                <p className="text-red-500 text-sm">
                  required | precentile 0-100
                </p>
              )}
            </div>
          </li>
          <li className="flex justify-between mb-3">
            <label htmlFor="scoreInput">
              Update your{" "}
              <span className="font-bold">Current Score (out of 15)</span>
            </label>
            <div>
              <input
                type="text"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                id="scoreInput"
                className={`outline-1 border-solid border-2 px-1 py-1 focus:outline-blue-300 rounded-md ${
                  score === "" ? "border-red-500" : "border-blue-300"
                }`}
                placeholder="Score"
              />
              {score === "" && (
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
