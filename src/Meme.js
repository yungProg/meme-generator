import React from "react"
import memesData from "./memesData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

const Meme = () => {
    const memeArr = memesData.data.memes

    const [memeText, setMemeText] = React.useState({
        toptext: "",
        bottomText: "",
    })

    const [memeImage, setMemeImage] = React.useState({
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function handleMemeText(event){
        const {name, value} = event.target
        setMemeText(
            prevText =>({
                ...prevText,
                [name]: value,
            })
        )
    }
    function getMemeImage(){
        setMemeImage(
            prevImage => (
                {
                    ...prevImage,
                    randomImage: memeArr[Math.floor(Math.random() * memeArr.length)].url
                }
            )
        )
    }

    return (
        <section>
            <div className="section--form">
                <div className="section--inputs">
                    <input 
                        type="text" 
                        placeholder="First line" 
                        name="toptext"
                        value={memeText.toptext}
                        onChange={handleMemeText}
                    />
                    <input 
                        type="text" 
                        placeholder="Second line" 
                        name="bottomText"
                        value={memeText.bottomText}
                        onChange={handleMemeText}
                    />
                </div>
                <button value="submit" onClick={getMemeImage}>Get random meme image <FontAwesomeIcon icon={faImage} /></button> 
                <div className="relative">
                <img className="meme" src={memeImage.randomImage} alt="meme" />
                <p className="text top">{memeText.toptext}</p>
                <p className="text bottom">{memeText.bottomText}</p>
                </div>
            </div>
        </section>
    )
}

export default Meme