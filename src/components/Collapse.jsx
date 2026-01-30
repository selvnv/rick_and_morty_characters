import { useState } from "react";
import "./Collapse.css"

export const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="collapse-item" onClick={() => setIsOpen(isOpen === false)}>
            <h2>{title}</h2>
            { isOpen && <div className="collapse-data">{content}</div>}
        </div>
    )
};