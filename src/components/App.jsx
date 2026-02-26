import React from "react";
import { ChatBubbleBottomCenterIcon, PaperAirplaneIcon} from "@heroicons/react/24/outline"
import './App.css'
import Chat from "./Chat";
// import { getAiResponse } from "../lib/gemini";

// Inside your handleSubmit:


export default function App() {

  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  // const answer = async (userInput) => {
  //   const aiResponse = await getAiResponse(userInput);
  //   setMessages([...messages, { text: aiResponse, sender: 'ai' }]);
  // };

  function handleChange(event) {
    setInput(event.target.value);
  }
  
  function handleClick() {    
    setInput(input);
  }

  return (
    <>
    <div className="text-sm flex justify-center align-items-center h-screen">
      <div className="flex flex-col border border-gray-200 shadow-xs rounded-xl p-4 gap-4 w-5/6 h-9/10">

        <div className="flex text-lg font-semibold p-3">
          <ChatBubbleBottomCenterIcon className="size-5 "/>
          <p className="ml-2 ">AI chat with streaming and thinking</p>
        </div>


        <div className="flex justify-between ">
            <div className="flex flex-col">
              <p> AI Provider</p>
              <select className="border border-gray-200 shadow-xs focus:outline-none rounded-lg p-2">
                <option value="select">Select AI Provider</option>
                <option value="openai">Google Gemini</option>
              </select>
            </div>
            <div className="flex flex-col justify-between">
              <p className="ml-2"> API Key</p>
              <input className="border border-gray-200 shadow-xs w-80 focus:outline-none rounded-lg p-1.5" type="password" placeholder="Enter API Key" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p>Show AI thinking process</p>
          </div>

          <div className="border border-gray-200 shadow-xs rounded-lg h-full my-2 overflow-y-scroll "> 

            <Chat source="https://i.pravatar.cc/150?img=1" text = "{getAiResponse(input)}" value="flex-start" />
            

          </div>

          <div className="flex gap-2">
            <div className = "border border-gray-200 shadow-xs rounded-lg p-2 gap-2 flex-12">
              <input onChange={handleChange}type="text" placeholder="Type your message here..." className="w-full focus:outline-none" required/>
            </div>
            <div className="border border-gray-200 shadow-xs rounded-xl flex-1 bg-black hover:bg-gray-800">
              <button onClick={handleClick}className="w-full h-full flex justify-center items-center">
                  <PaperAirplaneIcon className="size-6 text-gray-300"/>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center p-4 text-gray-500 text-sm">
            <p className="text-sm "> Please enter your API key to start chatting.</p>
          </div>
        </div>
      </div>
    </>
  )
}

