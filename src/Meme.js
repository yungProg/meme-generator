import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

const Meme = () => {
    return (
        <section>
            <form className="section--form">
                <div className="section--inputs">
                    <input type="text" placeholder="First line" />
                    <input type="text" placeholder="Second line" />
                </div>
                <button value="submit">Get a new meme image <FontAwesomeIcon icon={faImage} /></button> 
            </form>
        </section>
    )
}

export default Meme