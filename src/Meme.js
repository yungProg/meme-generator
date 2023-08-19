import React from "react"
import memesData from "./memesData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

const Meme = () => {
    const memeArr = memesData.data.memes

    const [memeText, setMemeText] = React.useState({
        toptext: "",
        bottomText: "",
        fontFamily: "",
        fontColor: "#efefef",
        fontSize: 16,
        minFontSize: 8,
        maxFontSize: 72,
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

    const textFont = {
        fontFamily: memeText.fontFamily,
        fontSize: Number(memeText.fontSize) < memeText.minFontSize ? Number(memeText.minFontSize) : 
        Number(memeText.fontSize) > Number(memeText.maxFontSize) ? Number(memeText.maxFontSize) : 
        Number(memeText.fontSize),
        color: memeText.fontColor
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
                <div className="font">
                    <div className="fam">
                <span>Font family: </span>
                <select
                    name="fontFamily"
                    value={memeText.fontFamily}
                    onChange={handleMemeText}
                >
                    <option value="Impact">Impact</option>
                    <option value="Karla">Karla</option>
                    <option value="sans-serif">sans-serif</option>
                    <option value="serif">serif</option>
                    <option value="Courier New">Courier New</option>
                    <option value="monospace">monospace</option>
                </select> 
                <input 
                    type="color" 
                    name="fontColor"
                    value={memeText.fontColor}
                    onChange={handleMemeText}
                />
                </div>
                <div className="div--font">
                <label htmlFor="font--size">Font size:</label>
                <input 
                        id="font--size"
                        type="number" 
                        name="fontSize"
                        value={memeText.fontSize}
                        onChange={handleMemeText}
                        min={memeText.minFontSize}
                        max={memeText.maxFontSize}
                    />
                </div>
                </div>
                <div className="relative">
                <img className="meme" src={memeImage.randomImage} alt="meme" />
                <p draggable={true} className="text top" style={textFont}>{memeText.toptext}</p>
                <p className="text bottom" style={textFont}>{memeText.bottomText}</p>
                </div>
            </div>
        </section>
    )
}

export default Meme