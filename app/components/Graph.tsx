import { useMyContext } from "../context/MyContextProvider";
import LineGraph from "./LineGraph";

export default function Graph() {
  const { percentile } = useMyContext();
  return (
    <div className="border-solid border-2 border-gray-200 rounded-md px-3 py-5 mt-5">
      <h3 className="mb-3 font-bold">Comparison Graph</h3>
      <p className="mb-5 text-gray-500">
        <span className="text-gray-600 font-bold">
          You Scored {percentile} % percentile,
        </span>
        which is lower than the average 72% of all the engineers who took this
        assessment
      </p>

      <LineGraph currentPercentile={percentile} />
    </div>
  );
}
