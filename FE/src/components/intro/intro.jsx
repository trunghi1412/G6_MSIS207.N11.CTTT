import React from 'react'
import '../intro/intro.css'
import Introimg1 from './introImg1'
import imgIntro from './introMain'
import Introimg2 from './introImg2'
import Introimg3 from './introImg3'

const Intro = () => {
  return (
<div className='container'>
        
      {
    imgIntro.map(img => (<img className='intro-avt' src={img} alt=''></img>))
  }
    <div className='part'>
    <p className='intro-tit'>Introduction About Hirito Figure Shop</p>
    <p className='quest'>1. What is Figure ?</p>
    <p className='text-desc'>Is it a model, a statue, or any other name for 3D artifacts held in one's hand that simulate characters in drawings, movies, stories, or games...
    Figures are usually people, but they can also be animals, plants, monsters, elves, gods, or even aliens...</p>
    
    {
    Introimg1.map(img => (<img className='part1-pic' src={img} alt=''></img>))
  }

<p className='pic-desc'>picture 1 : A room of a collector's figure </p>

<p className='quest'>2. What is Japan Figure ?</p>
    <p className='text-desc'>* These are the first prototypes created, illustrated, 
    sculpted, and perfected by Japanese artists.</p>
    <p className='text-desc'>*  The majority of the design was then sent to China for mass production. 
     As a result, the finished product you hold in your hand with the words "Made in China"
     is quite normal.</p>
    <p className='text-desc'>*  Because it is from Japan, it is obvious that it has a strong Japanese 
    culture, ranging from Anime, Manga, Game, Light novel, J-pop to virtual singer, 
    virtual streamer, and so on.</p>
    
    {
    Introimg2.map(img => (<img className='part2-pic' src={img} alt=''></img>))
  }

<p className='pic-desc'>Picture 2: Both pictures above here are Japan Figure Anime</p>
<p className='text-desc'> The finished figure products are very soulful of the original 
characters, with sharp details, vivid colors, and well packaged, thanks to Japanese 
technology and a strictly supervised production process.</p>
<p className='text-desc'>Thanks to that, the Japanese figure has satisfied fans all over the world.</p>
    

    <p className='quest'>3. Hirito Figure Shop ?</p>
    <p className='text-desc'>* A place specializing in providing genuine Japanese figures in Vietnam</p>
    <p className='text-desc'>* Hirito Figure is a paradise for those who care, pursue beauty, and are
     passionate about high-end figures and the fascination of Japan.</p>
    <p className='text-desc'>* If your needs are limited to low quality, fake, fake, 
    non-copyrighted figures… then unfortunately Japan Figure is not the right place for you.</p>
    <p className='text-desc'>* Since August 2012, after 11 years of service, Japan 
    Figure is pleased to receive a large amount of support from collectors all over Vietnam.</p>
    
    <div className='quest'>In Hirito Shop, we: </div>
    <ul className='text-desc2'>
        <li>Specializing in providing high quality Japanese figures</li>
        <li>Update new product information every day.</li>
        <li>Answers to all your questions about figures, how to purchase, and free shipping.</li>
        <li>Hunt for figures from rare to extremely rare</li>
    </ul>
    
    <p className='pic-desc'>Our shop's purpose are: </p>   
    {
    Introimg3.map(img => (<img className='part3-pic' src={img} alt=''></img>))
  }

 
    
    </div>



</div>
    


  )
}

export default Intro
