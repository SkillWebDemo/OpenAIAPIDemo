//Import the OpenAI library
/*const { Configuration, OpenAIApi } = require("openai")
//import {Configuration, OpenAI} from "openai"
 
//Configure the OpenAI client with your API key
const configuration = new Configuration({
    //apiKey: "your-openai-api-key", // Replace this with your OpenAI API key
    apiKey: "...", // Replace this with your OpenAI API key
})
 
const openai = new OpenAIApi(configuration)
 
// Function to send a request to ChatGPT
async function askChatGPT()
{
    try
    {
        const response = await openai.createChatCompletion({
            //model: "gpt-3.5-turbo", // Model to use (e.g., gpt-3.5-turbo)
            model: "gpt-40-mini", // Model to use (e.g., gpt-40-mini)
            messages: [
                { role: "system", content: "You are a helpful assistant." }, // System role sets the context
                { role: "user", content: "What is Node.js?" },               // User message
            ],
        })
 
        // Log the assistant's response
        console.log("ChatGPT Response:", response.data.choices[0].message.content)
    }
    catch (error)
    {
        console.error("Error communicating with ChatGPT:", error)
    }
}
 
// Call the function
askChatGPT()*/
 
/*import OpenAI from "openai"
 
/ *const openai = new OpenAI({
    organization: "org-QsWaQtk944xhPl6zL3Gdz4So",
    //project: "$PROJECT_ID",
    //apiKey: "your-openai-api-key", // Replace this with your OpenAI API key
})* /
 
/*const openai = new OpenAI()
 
async function main()
{
    const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: "Say this is a test" }],
        stream: true,
    });
 
    for await (const chunk of stream)
    {
        process.stdout.write(chunk.choices[0]?.delta?.content || "")
    }
}
 
main()*/
 
 
//https://www.noobgeek.in/blogs/create-an-openai-api-key-and-use-in-nodejs-project
/*import OpenAI from "openai"
 
//const openai = new OpenAI()
const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});
 
async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-4o-mini",
  })
 
  console.log(completion.choices[0])
}
 
main()*/
 
//https://platform.openai.com/docs/quickstart?context=node&desktop-os=windows
import OpenAI from "openai";
const openai = new OpenAI({
    //organization: "org-YMlEsT9g7onoLqWJmnNdXuCG",
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
})
 
const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "Your are a System admin linux long beard" },
        {
            role: "user",
            content: "Write a favorite shell script to automate lunch orders",
            //content: "What is Node.js?",
        },
    ],
})
 
console.log(completion.choices[0].message)
 
 
Create an OpenAI API key and use it into a Node.js project
Learn how to set up and use the OpenAI API key in a Node.js project effortlessly. Follow a step-by-step guide for installing Node.js, incorporating the OpenAI Node.js library, and configuring your ...
 
