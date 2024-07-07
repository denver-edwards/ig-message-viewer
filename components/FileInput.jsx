import { useRef, useState } from "react";
import { ArrowUpFromLine } from "lucide-react";

export default function FileInput({ handleFileUpload }) {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("Upload JSON File");

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      handleFileUpload(event);
    }
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="px-2 py-1 bg-cyan-700 hover:bg-cyan-600 text-sm text-white rounded-lg outline-none"
      >
        <ArrowUpFromLine size={"1.1em"} className="inline mr-1" />
        {fileName}
      </button>

      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
      />
    </>
  );
}
