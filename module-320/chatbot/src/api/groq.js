import Groq from 'groq-sdk';


const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true
});


export async function getChatCompletion(messages) {
    return await groq.chat.completions.create({
        messages: messages,
        model: "llama-3.3-70b-versatile"
    })
}