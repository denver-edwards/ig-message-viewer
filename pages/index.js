import React, { useState } from "react";
import { toast } from "react-toastify";
import Message from "@/components/Message";
import Pagination from "@/components/Pagination";

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
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Instagram Message Viewer</h1>
      <input
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        className="mb-4"
      />

      <button
        className="py-1 px-2 text-sm text-white bg-yellow-400 rounded-lg"
        onClick={() =>
          currentUser !== participants[1].name
            ? setCurrentUser(participants[1].name)
            : setCurrentUser(participants[0].name)
        }
      >
        Switch Sides
      </button>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
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
  );
}
