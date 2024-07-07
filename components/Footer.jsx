import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} Instagram Message Viewer is not
          affiliated with Instagram.
        </p>
      </div>
    </footer>
  );
}
