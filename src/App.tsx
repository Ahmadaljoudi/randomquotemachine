import { useState } from 'react'
import quotes from "./assets/quotes.json"
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa"

import './App.css'

interface Quote {
  quote: string;
  author: string;
}

function getRandomQuote(): Quote {
  return {
    quote: quotes[Math.floor(Math.random() * quotes.length)].quote,
    author: quotes[Math.floor(Math.random() * quotes.length)].author
  }
}


function App() {

  
const [quote, setQuote] = useState <Quote>(getRandomQuote());
const [randomColor, setRandomColor] = useState <string>("");

function changeQuote() {
  setQuote(getRandomQuote());
  changeColor();
}

function changeColor() {
  setRandomColor(Math.floor(Math.random()*16777215).toString(16));
}



  return ( <div className='background' style={{backgroundColor:`#${randomColor}` , transition: "background-color 0.5s ease-in-out"}} >

    <div id="quote-box">
      <div className="quote-content">
        <FaQuoteLeft size={30} color="white" className="quote-icon"/>
        <h2 id="text" style={{color:`#${randomColor}`}}>
          {quote.quote}
        </h2>
        <FaQuoteRight size={30} color="white" className="quote-icon"/>
        <h4 id="author">
          - {quote.author}
        </h4>
      </div>

      <div className="buttons">
        <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`} id='tweet-quote' style={{backgroundColor:"#1DA1F2", marginRight:"10px"}}><FaTwitter color="white"/></a>
        <button id="new-quote" onClick={changeQuote} style={{color:`#${randomColor}`}}>Another one</button>
      </div>
    </div>
  </div>
  
  )
}

export default App
