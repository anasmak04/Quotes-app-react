import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Quotes.css"
export default function Quotes() {
    const [quote,setQuote] = useState('');
    const [item,setItem] = useState([]);
    const api = "https://breaking-bad-quotes.herokuapp.com/v1/quotes";

   

    useEffect(() => {
        axios.get(api)
        .then(res => {
            setItem(res.data)
          console.log(res.data);
        });
    },[quote])

    const btn = () => {
        setQuote(item)
    }
  return (  
    <div>
        {item.map(itens => {
            return <>
            <pre>Quote : {JSON.stringify(itens.quote)}</pre>
                         <pre>Author : {JSON.stringify(itens.author)}</pre>
            </>
        })}

        <button onClick={btn}>chenge the Quote</button>
    </div>
  )
}
