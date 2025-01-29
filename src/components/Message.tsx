// import { useState } from "react"
import { messages } from "../constants"
interface messageProps {
    step : number
}
const Message = ({step} : messageProps) => {
    // const [message, setMessage] = useState(messages[step])
        return (
            <div className='message'>
                <p>{messages[step]}</p>
            </div>
        )
}

export default Message