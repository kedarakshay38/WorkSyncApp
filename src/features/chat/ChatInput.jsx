import { useState } from "react";

function ChatInput({onSend}){

    const [text,setText]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(text.trim()==="")
        {
            return;
        }
        onSend(text);
        setText("");
    }

    return(
        <form onSubmit={handleSubmit} className="flex gap-2 p-4 bg-white rounded-lg">
            <input className="flex-1 p-3 border rounded outline-none focus:border-blue-500" value={text} type="text" placeholder="Type a message ..." onChange={(e)=>setText(e.target.value)}/>
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold" type="submit"  >Send</button>
        </form>
    )


}

export default ChatInput;