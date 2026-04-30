
function MessageBubble({message}){

  const   messageColor= message.sender==='user'?'bg-blue-600 text-white':' bg-gray-200 text-gray-800 ';
  const alignment = message.sender === "user" ? "justify-end" : "justify-start";  
const bubbleColor = message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800";

return(
    <div className={`flex mb-2 ${alignment}`}>                                                                                                                                                                                                  
    <div className={`max-w-xs px-4 py-2 rounded-lg ${bubbleColor}`}>                                                                                                                                                                          
      {message.text}                                                                                                                                                                                                                          
    </div>                                                                                                                                                                                                                                    
  </div>                                                                                                                                                                                                                                      
           
)

}
export default MessageBubble