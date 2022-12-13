import React from 'react'
// import imgHP from './images/imageHP'
// import imgMecha from './images/imageMecha'
import './homepage.css'
// import imgAnm from './images/imageAnime'
// import imgFig4 from './images/imageFig4'
// import imgFig5 from './images/imageFig5'
// import imgFig1 from './images/imageFig1'
// import imgFig2 from './images/imageFig2'
// import imgFig3 from './images/imageFig3'
// import imgFig6 from './images/imageFig6'
// import imgFig7 from './images/imageFig7'
// import imgFig8 from './images/imageFig8'
// import { FaPlane, FaParachuteBox, FaPaypal } from 'react-icons/fa'
import Slider from './Slider'
import Announcement from './Assest/Announcement'
import Header from './Header'
import Footer from './Assest/Footer'
import Categories from './Categories/Catgories'



const HomePage = () => {
    return (

        // <div className='homepage'>

        //     {
        //         imgHP.map(img => (<img className='hp-avt' src={img} alt=''></img>))
        //     }

        //     <div className='shop-name'>Welcome to Hirito Figure Shop !</div>

        //     <div className='collection'>
        //         <div className='mecha'>
        //             {
        //                 imgMecha.map(img => (<img className='mecha-fig' src={img} alt=''></img>))
        //             }

        //             <div className='mecha-description'>
        //                 <div className='name-collect'>Collection</div>
        //                 <div className='type-figure'>Mecha Figure</div>
        //                 <div className='type-info'>It's a model with a lot of intricate details suitable for people who love robots</div>

        //                 <button className='btn-info'>See More</button>
        //             </div>

        //         </div>

        //         <div className='anime'>
        //             {
        //                 imgAnm.map(img => (<img className='anime-fig' src={img} alt=''></img>))
        //             }

        //             <div className='anime-description'>
        //                 <div className='name-collect'>Collection</div>
        //                 <div className='type-figure'>Anime Figure</div>
        //                 <div className='type-info'>The most popular figure line, many faces, free to pose</div>

        //                 <button className='btn-info'>See More</button>
        //             </div>

        //         </div>
        //     </div>

        //     <div className='figure'>

        //         <div className='name-desc'>
        //             <div className='name-fig'>Pre-Order Figure</div>
        //             <div className='name-'>Products that have been or are about to be released and need to be pre-ordered</div>
        //         </div>

        //         <div className='Pre-order'>


        //             <div className='present-fig'>
        //                 <div className='one-fig'>
        //                     {
        //                         imgFig4.map(img => (<img className='fig-pic' src={img} alt=''></img>))
        //                     }

        //                     <div className='btn-and-info'>
        //                         <div className='one-fig-desc'>

        //                             <div className='one-fig-name'>THE IDOLM@STER Cinderella Girls Nagi Hisakawa</div>
        //                             <div className='one-fig-price'>6,000,000 VND</div>

        //                         </div>
        //                         <button className='atc-btn'>Add to Cart</button>

        //                     </div>


        //                 </div>
        //             </div>

        //             <div className='present-fig'>
        //                 <div className='one-fig'>
        //                     {
        //                         imgFig5.map(img => (<img className='fig-pic' src={img} alt=''></img>))
        //                     }

        //                     <div className='btn-and-info'>
        //                         <div className='one-fig-desc'>

        //                             <div className='one-fig-name'> NEEDY GIRL OVERDOSE OMGkawaiiAngel-chan</div>
        //                             <div className='one-fig-price'>5,000,000 VND</div>

        //                         </div>
        //                         <button className='atc-btn'>Add to Cart</button>

        //                     </div>


        //                 </div>
        //             </div>

        //         </div>

        //         <div className='Pre-order'>


        //             <div className='present-fig'>
        //                 <div className='one-fig'>
        //                     {
        //                         imgFig1.map(img => (<img className='fig-pic' src={img} alt=''></img>))
        //                     }

        //                     <div className='btn-and-info'>
        //                         <div className='one-fig-desc'>

        //                             <div className='one-fig-name'>Bandai Gundam Universe Action May Vary 10009</div>
        //                             <div className='one-fig-price'>15,000,000 VND</div>

        //                         </div>
        //                         <button className='atc-btn'>Add to Cart</button>

        //                     </div>


        //                 </div>
        //             </div>

        //             <div className='present-fig'>
        //                 <div className='one-fig'>
        //                     {
        //                         imgFig2.map(img => (<img className='fig-pic' src={img} alt=''></img>))
        //                     }

        //                     <div className='btn-and-info'>
        //                         <div className='one-fig-desc'>

        //                             <div className='one-fig-name'> Gunpla Mecha Pionner Set Blue Heresy</div>
        //                             <div className='one-fig-price'>12,000,000 VND</div>

        //                         </div>
        //                         <button className='atc-btn'>Add to Cart</button>

        //                     </div>


        //                 </div>
        //             </div>

        //         </div>

        //         <div className='name-desc'>
        //             <div className='name-fig'>Available Figure</div>
        //             <div className='name-'>The product is in stock, you can buy it now</div>
        //         </div>

        //         <div className='Pre-order'>


        //             <div className='present-fig'>
        //                 <div className='one-fig'>
        //                     {
        //                         imgFig3.map(img => (<img className='fig-pic' src={img} alt=''></img>))
        //                     }

        //                     <div className='btn-and-info'>
        //                         <div className='one-fig-desc'>

        //                             <div className='one-fig-name'>Falslander - Hemet Nethel - Figma</div>
        //                             <div className='one-fig-price'>2,300,000 VND</div>

        //                         </div>
        //                         <button className='atc-btn'>Add to Cart</button>

        //                     </div>


        //                 </div>
        //             </div>

        //             <div className='present-fig'>
        //                 <div className='one-fig'>
        //                     {
        //                         imgFig6.map(img => (<img className='fig-pic' src={img} alt=''></img>))
        //                     }

        //                     <div className='btn-and-info'>
        //                         <div className='one-fig-desc'>

        //                             <div className='one-fig-name'> Re:ZERO - Echidna - Hanfu</div>
        //                             <div className='one-fig-price'>9,000,000 VND</div>

        //                         </div>
        //                         <button className='atc-btn'>Add to Cart</button>

        //                     </div>


        //                 </div>
        //             </div>

        //         </div>

        //         <div className='Pre-order'>


        //             <div className='present-fig'>
        //                 <div className='one-fig'>
        //                     {
        //                         imgFig7.map(img => (<img className='fig-pic' src={img} alt=''></img>))
        //                     }

        //                     <div className='btn-and-info'>
        //                         <div className='one-fig-desc'>

        //                             <div className='one-fig-name'>Classroom of the Elite Kei Karuizawa</div>
        //                             <div className='one-fig-price'>7,180,000 VND</div>

        //                         </div>
        //                         <button className='atc-btn'>Add to Cart</button>

        //                     </div>


        //                 </div>
        //             </div>

        //             <div className='present-fig'>
        //                 <div className='one-fig'>
        //                     {
        //                         imgFig8.map(img => (<img className='fig-pic' src={img} alt=''></img>))
        //                     }

        //                     <div className='btn-and-info'>
        //                         <div className='one-fig-desc'>

        //                             <div className='one-fig-name'> Devil Hunter Samurai Gundam</div>
        //                             <div className='one-fig-price'>8,000,000 VND</div>

        //                         </div>
        //                         <button className='atc-btn'>Add to Cart</button>

        //                     </div>


        //                 </div>
        //             </div>

        //         </div>



        //     </div>
        //     <div className='fig-thantoan'>
        //         <div className='thanhtoan-part'>
        //             <FaParachuteBox className='icon-payment' />

        //             <div className='info-partpayment'>
        //                 <div className='ipay-name'>Genuine product</div>
        //                 <div className='ipay-info'>Imported directly from Japan</div>
        //             </div>

        //         </div>

        //         <div className='thanhtoan-part'>
        //             <FaPaypal className='icon-payment' />

        //             <div className='info-partpayment'>
        //                 <div className='ipay-name'>Simple payment</div>
        //                 <div className='ipay-info'>Bank Transfer or Cash</div>
        //             </div>

        //         </div>

        //         <div className='thanhtoan-part'>
        //             <FaPlane className='icon-payment' />

        //             <div className='info-partpayment'>
        //                 <div className='ipay-name'>Fast Delivery</div>
        //                 <div className='ipay-info'>Free for orders when you buy more than 1.000.000VND</div>
        //             </div>

        //         </div>
        //     </div>



        // </div>
        <div>
            <Announcement/>
            <Header style={{}}/>
            <Slider/>
            <Categories/>
            <Footer/>
        </div>
    )
}

export default HomePage;