import { useState } from "react";
import { getChatCompletion } from "./api/groq";
import { CiUser } from "react-icons/ci";
import { LuBot } from "react-icons/lu";

function App() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

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
      <section className="flex-1 border p-5">
        <h1>Chatbot</h1>
      </section>

      <section className="flex-3 border p-5">
        <div className="flex flex-col justify-between">
          <div>
            {messages.map((message, idx) => {
              return (
                <div key={idx} className="flex items-center mb-5">
                  {message.role === "user" ? <CiUser size={24}/> : <LuBot size={24}/>}
                  <div className="ml-2">{message.content}</div>
                </div>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex justify-between w-full">
          <input
            type="text"
            className="border w-full p-1"
            placeholder="Prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <input type="submit" className="ml-2 border p-1" />
        </form>
      </section>
    </main>
  );
}

export default App;
