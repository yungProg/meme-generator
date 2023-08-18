import React from "react"
import memesData from "./memesData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

const Meme = () => {

    /*const memeUrls = memeData.data.memes.map(url => url.url);
    let randomIndex = Math.floor(Math.random() * memeUrls.length)*/
    const memeArr = memesData.data.memes

    const [meme, setMeme] = React.useState({
        toptext: "",
        bottomText: "",
    })

    const [allMemeImages, setAllMemeImages] = React.useState({
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function getMemeText(event){
        const {name, value} = event.target
        setMeme(
            prevState =>({
                ...prevState,
                [name]: value,
            })
        )
    }
    function getMemeImage(){
        setAllMemeImages(
            prevState => (
                {
                    ...prevState,
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
                        value={meme.toptext}
                        onChange={getMemeText}
                    />
                    <input 
                        type="text" 
                        placeholder="Second line" 
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={getMemeText}
                    />
                </div>
                <button value="submit" onClick={getMemeImage}>Get a new meme image <FontAwesomeIcon icon={faImage} /></button> 
                <div className="relative">
                <img className="meme" src={allMemeImages.randomImage} alt="meme" />
                <p className="text top">{meme.toptext}</p>
                <p className="text bottom">{meme.bottomText}</p>
                </div>
            </div>
        </section>
    )
}

export default Meme