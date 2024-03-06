import React from "react";

// album
import Heartbreak from "../assets/album/Heartbreak.png"
import Collegedropout from "../assets/album/Collegedropout.jpg"
import CruelSummer from "../assets/album/CruelSummer.jpg"
import Donda from "../assets/album/Donda.png"
import Graduation from "../assets/album/Graduation.jpg"
import JesusIsKing from "../assets/album/JesusIsKing.png"
import KidsSeeGhosts from "../assets/album/KidsSeeGhosts.png"
import LateRegistration from "../assets/album/LateRegistration.jpg"
import MyBeautifulDarkTwistedFantasy from "../assets/album/MyBeautifulDarkTwistedFantasy.jpg"
import TheLifeofPablo from "../assets/album/TheLifeofPablo.jpg"
import Vultures from "../assets/album/Vultures.png"
import WatchTheThrone from "../assets/album/WatchTheThrone.jpg"
import Ye from "../assets/album/Ye.jpg"
import Yeezus from "../assets/album/Yeezus.png"

// shirts
import Chickfila from "../assets/shirts/Chickfila.jpeg"
import Mamba from "../assets/shirts/Mamba.jpeg"
import NoMoreParties from "../assets/shirts/NoMoreParties.jpeg"
import Pablocombo from "../assets/shirts/Pablocombo.jpeg"
import Ultralightbeams from "../assets/shirts/Ultralightbeams.jpeg"
import Votekanye from "../assets/shirts/Votekanye.jpeg"

// shoes
import Yzy350 from "../assets/shoes/Yzy350.jpeg"
import Yzy500 from "../assets/shoes/Yzy500.jpeg"
import Yzy700 from "../assets/shoes/Yzy700.jpeg"
import Yzy750 from "../assets/shoes/Yzy750.jpeg"
import Yzyfoamrunner from "../assets/shoes/Yzyfoamrunner.jpeg"

const Collection = () => {
  return (
    <>
    <section>
        <h2>Albums</h2>
        <div className="album-container">
      <img src={Collegedropout} alt='college' className='album-image1' />
      <h4>The College Dropout 2004</h4>

      <img src={LateRegistration} alt='late' className='album-image2' />
      <h4>Late Registration 2005</h4>

      <img src={Graduation} alt='grad' className='album-image3' />
      <h4>Graduation 2007</h4>

      <img src={Heartbreak} alt='808s' className='album-image4' />
      <h4>808s & Heartbreak 2008</h4>

      <img src={MyBeautifulDarkTwistedFantasy} alt='mbdtf' className='album-image5' />
      <h4>My Beautiful Dark Twisted Fantasy 2010</h4>

      <img src={CruelSummer} alt='cruel' className='album-image6' />
      <h4>Cruel Summer 2012</h4>

      <img src={Yeezus} alt='yeezus' className='album-image7' /> 
      <h4>Yeezus 2013</h4>

      <img src={TheLifeofPablo} alt='tlop' className='album-image8' />
      <h4>The Life of Pablo 2016</h4>

      <img src={KidsSeeGhosts} alt='kids' className='album-image9' />
      <h4>Kids See Ghosts 2018</h4>

      <img src={Ye} alt='ye' className='album-image10' /> 
      <h4> Ye 2018</h4>

      <img src={JesusIsKing} alt='jesus' className='album-image11' />
      <h4>Jesus Is King 2019</h4>

      <img src={Donda} alt='donda' className='album-image12' />
      <h4>Donda 2021</h4>

      <img src={WatchTheThrone} alt='watch' className='album-image13' /> 
      <h4>Watch The Throne 2011</h4>

      <img src={Vultures} alt='vultures' className='album-image14' /> 
      <h4>Vultures 1 2024</h4>

      </div>
      </section>

      <section>
        <h2>Shoes</h2>
        <div className="shoes-container">
      <img src={Yzy350} alt='yzy350' className='shoes-image1' />
      <h4>Yeezy 350</h4>

      <img src={Yzy500} alt='yzy500' className='shoes-image2' />
      <h4>Yeezy 500 </h4>

      <img src={Yzy700} alt='yzy700' className='shoes-image3' />
      <h4>Yeezy 700 </h4>

      <img src={Yzy750} alt='yzy750' className='shoes-image4' />
      <h4>Yeezy 750 </h4>

      <img src={Yzyfoamrunner} alt='yzyfoamrunner' className='shoes-image5' />
      <h4>Yeezy Foam Runner</h4>

      </div>
      </section>

      <section>
        <h2>Shirts</h2>
        <div className="shirts-container">

      <img src={Chickfila} alt='Chick fil a' className='shirts-image1' />
      <h4>Sunday Service</h4>

      <img src={Mamba} alt='Mamba' className='shirts-image2' />
      <h4>I feel like Kobe</h4>

      <img src={NoMoreParties} alt='NoMorePartiesInLA' className='shirts-image3' />
      <h4>No More Parties In LA</h4>

      <img src={Pablocombo} alt='PabloPabloPablo' className='shirts-image4' />
      <h4>I feel like Pablo</h4>

      <img src={Ultralightbeams} alt='Ultra Light Beams' className='shirts-image5' />
      <h4>Ultra Light Beams</h4>

      <img src={Votekanye} alt='Vote Kanye 2020' className='shirts-image6' />
      <h4>Kanye 2020 Campaign</h4>

      </div>
      </section>
    </>
  );
};

export default Collection  