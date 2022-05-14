import React, { useState } from 'react';
import quotes from '../quotes.json';




const colors = ['#FFF000', '#7CFC00', '#00FFFF', '#9932CC', '#FF0000','#778899'];

const QuoteBox = () => {


    const randomIndex = Math.floor(Math.random() * quotes.length)
    const [index, setIndex] = useState(randomIndex)

    const changeQuote = ()=> {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setIndex(randomIndex);
    }


    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`;
 
    return (
        <div className='card' style={{color: colors[randomColor]}}>
            <h1>{quotes[index].quote}</h1>
            <h2>{quotes[index].author}</h2>
           
             <div>
                <button onClick={changeQuote}>New Quote</button>
            </div>        
        </div>
    );
};

export default QuoteBox;