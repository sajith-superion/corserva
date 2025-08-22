// src/components/Chatbot.js
import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Add config
    window.project_id = "fe11380c55a148b0904518";
    window.frame_type = "widget";

    // Create script tag
    const script = document.createElement("script");
    script.src = "https://app.getodin.ai/loader.min.js";
    script.setAttribute("project_id", "fe11380c55a148b0904518");
    script.setAttribute("frame_type", "widget");
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      document.body.removeChild(script);
    };
  }, []);

  return null; // widget handles rendering itself
};

export default Chatbot;
