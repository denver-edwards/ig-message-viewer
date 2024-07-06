import React from "react";
import moment from "moment";

export default function Message({
  sender_name,
  content,
  timestamp_ms,
  reactions,
  currentUser,
}) {
  const decodedContent = content ? decodeURIComponent(escape(content)) : "";
  const isCurrentUser = sender_name === currentUser;

  return (
    <div
      className={`flex ${isCurrentUser ? "justify-end" : "justify-start"} p-4`}
    >
      {!isCurrentUser && (
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-slate-400 mr-4"></div>
      )}
      <div className={`max-w-md ${isCurrentUser ? "text-right" : "text-left"}`}>
        <div className="text-sm font-semibold text-gray-900">{sender_name}</div>
        <div className="text-sm text-gray-600">{decodedContent}</div>
        {reactions && reactions.length > 0 && (
          <div className="text-xs text-gray-500 mt-2">
            {reactions.map((reaction, index) => (
              <span key={index} className="mr-2 float-right">
                {decodeURIComponent(escape(reaction.reaction))} by{" "}
                {reaction.actor}
              </span>
            ))}
          </div>
        )}
        <div className="text-xs text-gray-400">
          {moment(timestamp_ms).format("LLL")}
        </div>
      </div>
      {isCurrentUser && (
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-300 ml-4"></div>
      )}
    </div>
  );
}
