import React, { useState } from "react";
import yeezyTaughtme from "../assets/yeezyTaughtMe.jpeg"; 

const yeezyQuotes = [
  "Yo, Taylor, I'm really happy for you. Imma let you finish. But Beyoncé had one of the best videos of all time.",
  "I feel like I'm too busy writing history to read it.",
  "George Bush doesn't care about black people.",
  "Fashion is merely an opinion. And I've got a lot of opinions.",
  "You know what should be banned? Stuff that's whack. The world is controversial. The world is classist. The world is racist.",
  "I don't use blue. I don't like it. It bugs me out. I hate it.",
  "You aint got the answers Sway!",
  "In Paris, you're as far as possible from the land of pleasant smiles.",
  "I have decided in 2020 to run for president.",
  "I'll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying.",
  " The most genius thing about the way I create is to create with other geniuses.",
  "People be feeling like I'm cocky because of the s**t that I say; if you could imagine the s**t that I think.",
  "I'm not comfortable with comfort. I'm only comfortable when I'm in a place where I'm constantly learning and growing.",
  "My goal, if I was going to do art, fine art, would have been to become Picasso or greater. That always sounds so funny to people, comparing yourself to someone in the past that has done so much, and in your life you're not even allowed to think that you can do as much. That's a mentality that suppresses humanity.",
  "Most people are slowed down by the perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I can do everything.",
  "Similar to Tesla, I'm about lighting the world up.",
  "I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle.",
  "It's a tough world out there. You're going to prepare yourself for politics, bad bosses, hating employees, and usually when you're the absolute best, you get hated on the most.",
  "I am so credible and so influential and so relevant that I will change things.",
  "I never put anybody down to big myself up. I just big myself up.",
  "As a celebrity, as soon as you become a star, as soon as it pops off for you? At that point, you stop growing. As soon as you don't have to wash your own dishes anymore. I was like trying to get somebody to jog for me the other day.",
  "I always misspell genius SMH! The irony!",
  "Sometimes I get emotional over fonts.",
];

const Inspiration = () => {
  const [quote, setQuote] = useState("");

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * yeezyQuotes.length);
    setQuote(yeezyQuotes[randomIndex]);
  };

  return (
    <>
      <div className="yeezy-trope"> 
      <br></br>
      <button className="boton" onClick={generateQuote}>Yeezy Says,</button>
        <br></br>
        {quote && <p>{quote}</p>} 
      </div>
    </>
  );
};

export default Inspiration;