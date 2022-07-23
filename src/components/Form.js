import React from "react"
import memesData from "../memesData.js"

export default function Form() {
   const [memeImage, setMemeImage]=React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
       setMemeImage(memesArray[randomNumber].url)
        
    }
    return (
   
     <div className="container">
            <div className="row">
            <div className="col-sm-12 button-dis">
            <button className="form--button" onClick={getMemeImage}>Get ethiopian orthodox church worship images 🏞</button>
            
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 button-dis">
        <img src={memeImage} className ="meme--image" />
        </div>
        </div>
    </div>
    )
}

