import React from 'react'
import './intro.css'
// import Introimg1 from './introImg1'
import imgIntro from './introMain'
// import Introimg2 from './introImg2'
// import Introimg3 from './introImg3'
import Footer from '../Assest/Footer'
import Header from '../Header'
import Announcement from '../Assest/Announcement'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';



const Container = styled.div`

`;

const Wrapper = styled.div`

`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 40px;
  text-align: center;
`;

const TopText = styled.span`
  font-size: 25px;
  cursor: pointer;
  margin: 0px 10px;
`;

const Summary = styled.div`
  // flex: 1;
  border: 0.5px solid #023047;
  border-radius: 10px;
  padding: 20px;
  margin-right: 80px;
  margin-left: 80px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 50%; 
`;

const Img1 = styled.img`
  width: 25%; 
  // height: 25%;
`;

const ImgContainer = styled.div`
display: flex;
justify-content: center;
 
`;

const ImgContainer1 = styled.div`
margin-right: 40px;
flex: 1;
justify-content: space-around;
 
`;

const Note = styled.p`
  text-align: center;
  color: gray;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 10%;
  padding: 5px;
  background-color: #d9d9d9;
  color: black;
  font-weight: 600;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
`;

const Text = styled.p`
  margin-top: 2px;
  margin-left: 5px;
`;

const Intro = () => {
  return (
<div>      
    
    {/* {imgIntro.map(img => (<img className='intro-avt' src={img} alt=''></img>))}
    <div className='part'>
    <p className='intro-tit'>Introduction About Hirito Figure Shop</p>
    <p className='quest'>1. What is Figure ?</p>
    <p className='text-desc'>Is it a model, a statue, or any other name for 3D artifacts held in one's hand that simulate characters in 
                                drawings, movies, stories, or games...Figures are usually people, but they can also be animals, 
                                plants, monsters, elves, gods, or even aliens...</p>
    
    {Introimg1.map(img => (<img className='part1-pic' src={img} alt=''></img>))}

    <p className='pic-desc'>picture 1 : A room of a collector's figure </p>

    <p className='quest'>2. What is Japan Figure ?</p>
    <p className='text-desc'>* These are the first prototypes created, illustrated, 
                                  sculpted, and perfected by Japanese artists.</p>
    <p className='text-desc'>*  The majority of the design was then sent to China for mass production. 
                                   As a result, the finished product you hold in your hand with the words "Made in China" is quite normal.</p>
    <p className='text-desc'>*  Because it is from Japan, it is obvious that it has a strong Japanese culture, ranging from Anime, Manga, 
                                  Game, Light novel, J-pop to virtual singer, virtual streamer, and so on.</p>
    {Introimg2.map(img => (<img className='part2-pic' src={img} alt=''></img>))}

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
    {Introimg3.map(img => (<img className='part3-pic' src={img} alt=''></img>))}
    
    </div> */}
    <Header/>
    <Announcement/>
    <Container>
      <Wrapper>
        {imgIntro.map(img => (<img className='intro-avt' src={img} alt=''></img>))}
        <Title><b>Introduction About Hirito Figure Shop</b></Title>
        <TopText>1. What Is Figure ?</TopText>
        <Summary>Is It A Model, A Statue, Or Any Other Name For 3D Artifacts Held In One's Hand That Simulate Characters In Drawings, 
          Movies, Stories, Or Games... Figures Are Usually People, But They Can Also Be Animals, Plants, Monsters, Elves, Gods, 
          Or Even Aliens...</Summary>
        <ImgContainer>
          <Img src="https://static.myfigurecollection.net/upload/pictures/2019/03/24/2178519.jpeg"/>
        </ImgContainer>
        <Note><i>A Room Of A Collector's Figure</i></Note>
        <TopText>2. What Is Japan Figure ?</TopText>
        <Summary>* These Are The First Prototypes Created, Illustrated, Sculpted, And Perfected By Japanese Artists.</Summary>
        <Summary>* The Majority Of The Design Was Then Sent To China For Mass Production. As A Result, The Finished Product You Hold In 
                    Your Hand With The Words "Made In China" Is Quite Normal.</Summary>
        <Summary>* Because It Is From Japan, It Is Obvious That It Has A Strong Japanese Culture, Ranging From Anime, Manga, Game, 
                    Light Novel, J-Pop To Virtual Singer, Virtual Streamer, And So On.</Summary>
        <ImgContainer1>
          <Img1 src="https://cdn.shopify.com/s/files/1/0008/7851/0137/products/s-l1600_702a05af-9f90-412d-bc00-ba552167f378_512x512.jpg?v=1666579110"/>
          <Img1 src="https://m.media-amazon.com/images/I/61G5tPw-S5L._AC_SX679_.jpg"/>
          <Img1 src="https://m.media-amazon.com/images/I/71ns4s3w5ML.jpg"/>
          <Img1 src="https://m.media-amazon.com/images/I/61BbOviuNfL._AC_SX679_.jpg"/>
        </ImgContainer1>
        <Note><i>Both Pictures Above Here Are Japan Figure Anime</i></Note>
        <TopText>3. G6 Figure Shop ?</TopText>
        <Summary>* A Place Specializing In Providing Genuine Japanese Figures In Vietnam</Summary>
        <Summary>* G6 Figure Is A Paradise For Those Who Care, Pursue Beauty, And Are Passionate About High-End Figures And The Fascination Of Japan.</Summary>
        <Summary>* If Your Needs Are Limited To Low Quality, Fake, Fake, Non-Copyrighted Figures… Then Unfortunately Japan Figure Is Not The Right Place For You.</Summary>
        <Summary>* Since August 2012, After 11 Years Of Service, Japan Figure Is Pleased To Receive A Large Amount Of Support From Collectors All Over Vietnam.</Summary>
        <Button> <StarIcon/><Text>In G6 Shop, We:</Text></Button>
        <Summary>
        <ul>
          <li>Specializing in providing high quality Japanese figures</li>
          <li>Update new product information every day.</li>
          <li>Answers to all your questions about figures, how to purchase, and free shipping.</li>
          <li>Hunt for figures from rare to extremely rare</li>
        </ul>
        </Summary>
      </Wrapper>
    </Container>
    <Footer/>
</div>

    


  )
}

export default Intro
