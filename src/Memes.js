import React from 'react';
import { useSelector } from 'react-redux';
import './Memes.css'

export default function Memes() {
  const memes = useSelector((store) => store.memes);

  return(
    <>
      {memes.map((meme, idx) => (
        <div key={idx} className="meme">
          <img src={meme.memeUrl} alt="Spicy Meme"></img>
          <div id="meme-top-text">{meme.memeTopText}</div>
          <div id="meme-bottom-text">{meme.memeBottomText}</div>
        </div>
      ))}
    </>
  );

}
