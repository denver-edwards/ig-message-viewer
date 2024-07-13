import { useRef, useState } from "react";
import { toast } from "react-toastify";
import Instructions from "@/components/Instructions";
import Message from "@/components/Message";
import Pagination from "@/components/Pagination";
import FileInput from "@/components/FileInput";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [participants, setParticipants] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [inputPage, setInputPage] = useState("");
  const messagesPerPage = 20;

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);
        const sortedMessages = json.messages.sort(
          (a, b) => a.timestamp_ms - b.timestamp_ms
        );
        setMessages(sortedMessages);
        setParticipants(json.participants);
        setCurrentUser(json.participants[0]?.name || "");
        setError("");
        setCurrentPage(1);
      } catch (err) {
        showError("Invalid JSON file");
      }
    };

    if (file) {
      reader.readAsText(file);
    }
  };

  const displayedMessages = messages.slice(
    (currentPage - 1) * messagesPerPage,
    currentPage * messagesPerPage
  );

  const totalPages = Math.ceil(messages.length / messagesPerPage);

  const showError = (err) => toast.warning(err, { toastId: 1 });

  return (
    <>
      <div className="flex flex-col min-h-screen bg-slate-100 pb-10 text-cyan-900">
        <Header />

        {messages.length < 1 ? <Instructions /> : null}

        <div className="flex justify-center items-center my-4">
          <FileInput handleFileUpload={handleFileUpload} />

          {messages.length > 1 ? (
            <button
              className="ml-4 py-2 px-4 text-sm text-white bg-cyan-500 hover:bg-cyan-600 rounded-3xl"
              onClick={() =>
                currentUser !== participants[1].name
                  ? setCurrentUser(participants[1].name)
                  : setCurrentUser(participants[0].name)
              }
            >
              Switch Sides
            </button>
          ) : null}
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-x-auto sm:overflow-x-hidden p-4 sm:p-6 mx-auto sm:w-4/5 w-full">
          {displayedMessages.map((message, index) => (
            <Message
              key={index}
              sender_name={message.sender_name}
              content={message.content}
              timestamp_ms={message.timestamp_ms}
              reactions={message.reactions}
              currentUser={currentUser}
            />
          ))}
        </div>

        <Pagination
          inputPage={inputPage}
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setInputPage={setInputPage}
        />
      </div>

      <Footer />
    </>
  );
}
