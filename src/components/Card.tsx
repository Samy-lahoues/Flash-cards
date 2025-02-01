import { useState } from "react"
interface cardProps {
    front : string,
    back : string
}
const Card = ({ front, back } : cardProps) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div onClick={() => setIsActive((currentState) => !currentState)} className={`card ${isActive && "active"}`}>
            <div className={`card-inner ${isActive ? "card-back" : "card-front"}`}>
                <p>{!isActive ? front : back}</p>
            </div>
        </div>
    )
}

export default Card;