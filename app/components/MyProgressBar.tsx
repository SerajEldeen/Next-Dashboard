export default function MyProgressBar() {
  interface progressBar {
    label: string;
    progress: number;
    color: string;
    backgroundColor: string;
    textColor: string;
    key: string;
  }
  const ProgressBarArray: progressBar[] = [
    {
      label: "HTML Tools, Forms, History",
      progress: 80,
      color: "bg-blue-500",
      textColor: "text-blue-500",
      backgroundColor: "bg-blue-200",
      key: "Tools",
    },
    {
      label: "Tags & References in HTML",
      progress: 60,
      color: "bg-orange-500",
      textColor: "text-orange-500",
      backgroundColor: "bg-orange-200",
      key: "Tags",
    },
    {
      label: "Tables & References in HTML",
      progress: 24,
      color: "bg-rose-500",
      textColor: "text-rose-500",
      backgroundColor: "bg-rose-200",
      key: "Tables",
    },
    {
      label: "Tables & CSS Basics",
      progress: 96,
      color: "bg-green-500",
      textColor: "text-green-500",
      backgroundColor: "bg-green-200",
      key: "Css-Basics",
    },
  ];

  return (
    <div className="my-8 border-solid border-2 border-gray-200 rounded-md px-3 py-5 w-full  max-w-[90%]">
      <h3 className="font-bold mb-4">Syllabus Wise Analysis</h3>
      {ProgressBarArray.map((e) => (
        <div key={e.key} className="mb-6">
          <span className="text-gray-500 whitespace-nowrap">{e.label}</span>

          <div className="flex items-center justify-between max-w-[200%]">
            <div className={` flex-1 h-4 ${e.backgroundColor} rounded `}>
              <div
                className={`h-full ${e.color} rounded`}
                style={{ width: `${e.progress}%` }}
              ></div>
            </div>

            <div className={`ml-4 ${e.textColor} font-semibold`}>
              {e.progress}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
