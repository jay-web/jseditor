import React from "react"

interface ActionButtonProps {
    icon: string,
    onClick(): void,
    color?:string
}
const ActionButton: React.FC<ActionButtonProps> = ({icon, onClick, color="bg-blue-500"}) => {
    return  <button onClick={onClick} className={`py-1 px-2 ${color} text-white hover:text-black`} >
        <span>
            <i className={`fas ${icon}`} />
        </span>
    </button>
}



export default ActionButton;