import {useState} from 'react'

function App() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = {
      role: "user",
      content: prompt
    }

    // send the messages....

    setMessages([...messages, newMessage]);
    setPrompt("")

  }

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
                <div key={idx}>
                  <div>{message.content}</div>
                </div>
              )
            })}
          </div>
       </div>



        <form onSubmit={handleSubmit} className="flex justify-between w-full">
          <input type="text" className="border w-full p-1" placeholder="Prompt"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          />
          <input type="submit"  className="ml-2 border p-1"/>
        </form>
      </section>
    </main>
  )
}

export default App
