import { useState } from "react";
import { getChatCompletion } from "./api/groq";
import { CiUser } from "react-icons/ci";
import { LuBot } from "react-icons/lu";

function App() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

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

      {/* CHATS SECTION  */}
      <section className="flex-1 border p-5 bg-neutral-800">
        <h1 className="text-center text-xl font-bold text-orange-500">Chatbot</h1>

      </section>


      <section className="flex flex-col flex-3 border bg-neutral-900">
        <h2 className="mb-5 text-center text-xl font-bold bg-neutral-800 p-3 w-full">Chat</h2>
        <div className="p-5">
          <div className="">
            {messages.map((message, idx) => {
              return (
                <div key={idx} className="flex items-center mb-5">
                  {message.role === "user" ? <CiUser size={32} className="border rounded-full p-1"/> : <LuBot size={32} className="border rounded-full p-1"/>}
                  <div className="ml-2">{message.content}</div>
                </div>
              );
            })}
          </div>
        </div>
 
        
        <form onSubmit={handleSubmit} className="flex justify-between w-full mt-auto p-3">
          <input
            type="text"
            className="border w-full p-1 rounded-lg"
            placeholder="Prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
          <input type="submit" className="ml-2 border p-2 rounded-lg hover:bg-white hover:text-black hover:cursor-pointer" />
        </form>
      </section>
    </main>
  );
}

export default App;
