import React from 'react'
import { useState, useEffect } from 'react'

export default function QuoteGenerator(props) {
  
  const [quote, setQuote] = useState({})

  useEffect(() =>{
    
    const { quotes } = props
    const random = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[random])
    // console.log(random)
    // console.log(quote)
    },[])

    return (
      <div className='quotes'>
       <h4>{quote.quote}.</h4>
        <p>—{quote.author}</p>
      </div>
    )
  }
