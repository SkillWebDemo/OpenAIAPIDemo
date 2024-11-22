//OpenAI API Demo

//https://platform.openai.com/docs/quickstart?context=node&desktop-os=windows
//setx OPENAI_API_KEY "your_api_key_here"
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