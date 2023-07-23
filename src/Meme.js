import React from "react"
import memesData from "./memesData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

const Meme = () => {

    /*const memeUrls = memeData.data.memes.map(url => url.url);
    let randomIndex = Math.floor(Math.random() * memeUrls.length)*/

    const [meme, setMeme] = React.useState({
        toptext: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    // eslint-disable-next-line
    const [allMemeImages, setAllMemeImages] = React.useState(memesData.data.memes)

    function getMemeImage(){
        setMeme(
            prevState =>({
                ...prevState,
                randomImage: allMemeImages[Math.floor(Math.random() * allMemeImages.length)].url
            })
        )
    }

    return (
        <section>
            <div className="section--form">
                <div className="section--inputs">
                    <input type="text" placeholder="First line" />
                    <input type="text" placeholder="Second line" />
                </div>
                <button value="submit" onClick={getMemeImage}>Get a new meme image <FontAwesomeIcon icon={faImage} /></button> 
                <img className="meme" src={meme.randomImage} alt="meme" />
            </div>
        </section>
    )
}

export default Meme