import React from "react"
import memeData from "./memeData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

const Meme = () => {

    const memeUrls = memeData.data.memes.map(url => url.url);
    let randomIndex = Math.floor(Math.random() * memeUrls.length)

    const [meme, setMeme] = React.useState(memeUrls[1])

    function handleMeme(){
        setMeme(memeUrls[randomIndex])
    }

    return (
        <section>
            <div className="section--form">
                <div className="section--inputs">
                    <input type="text" placeholder="First line" />
                    <input type="text" placeholder="Second line" />
                </div>
                <button value="submit" onClick={handleMeme}>Get a new meme image <FontAwesomeIcon icon={faImage} /></button> 
                <img className="meme" src={meme} alt="meme" />
            </div>
        </section>
    )
}

export default Meme