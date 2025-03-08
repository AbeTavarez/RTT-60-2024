import { useState, useRef, useEffect } from "react";
import { getChatCompletion } from "./api/groq";
import { CiUser } from "react-icons/ci";
import { LuBot } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { FaRegPenToSquare } from "react-icons/fa6";
import { BsWindowSidebar } from "react-icons/bs";

function App() {
  const promptInputRef = useRef(null); // ref for text input

  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

  // Focus on input
  useEffect(() => {
    promptInputRef.current.focus();
  }, []);

  /**
   * Handle Form Submit
   * @param {*} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // create anew user message object
    const newMessage = {
      role: "user",
      content: prompt,
    };

    // copy the current messages and add the new message
    const newMessages = [...messages, newMessage];

    // call the completions API
    const completion = await getChatCompletion(newMessages);
    console.log(completion);

    // updating state with the assistant message
    setMessages([
      ...newMessages,
      {
        role: "assistant",
        content: completion.choices[0].message.content,
      },
    ]);
    setPrompt("");
  };

  return (
    <main className="flex bg-indigo-900 text-white h-screen">
      {/* LEFT CHATS SECTION  */}
      <section className="flex flex-col flex-1 border p-5 bg-neutral-800">
        <div className="flex justify-between items-center mb-5">
          <BsWindowSidebar size={24} />
          <h1 className="text-center text-xl font-bold text-orange-500">
            Chatbot
          </h1>
          <div className="flex items-center gap-5">
            <IoIosSearch size={24} />
            <FaRegPenToSquare size={24} />
          </div>
        </div>
        {/* PREVIOUS CHATS */}
        <div>
          <p className="border p-1 border rounded-md">
          Previous Chats will go here...
          </p>
        </div>
        <div className="flex items-center mb-5 mt-auto">
          <CiUser size={32} className="border rounded-full p-1 mr-2" />
          <h3 className="text-center text-xl font-bold text-orange-500">User</h3>
        </div>
      </section>

      {/* RIGHT CHAT SECTION  */}
      <section className="flex flex-col flex-3 border bg-neutral-900">
        <h2 className="mb-5 text-center text-xl font-bold bg-neutral-800 p-3 w-full">
          Chat
        </h2>
        <div className="p-5">
          <div className="">
            {messages.map((message, idx) => {
              return (
                <div key={idx} className="flex items-center mb-5">
                  {message.role === "user" ? (
                    <CiUser size={32} className="border rounded-full p-1" />
                  ) : (
                    <LuBot size={32} className="border rounded-full p-1" />
                  )}
                  <div className="ml-2">{message.content}</div>
                </div>
              );
            })}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex justify-between w-full mt-auto p-3"
        >
          <input
            ref={promptInputRef}
            type="text"
            className="border w-full p-1 rounded-lg"
            placeholder="Prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
          <input
            type="submit"
            className="ml-2 border p-2 rounded-lg hover:bg-orange-500 hover:text-bold hover:cursor-pointer"
          />
        </form>
        <i className="text-center">
          Chatbot can make mistakes. Check important info.
        </i>
      </section>
    </main>
  );
}

export default App;
