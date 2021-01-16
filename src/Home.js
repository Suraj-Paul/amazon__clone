import React from 'react'
import './Home.css'
import Product from './Product';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Home() {
    return (
        <div className="home">
            <div className ="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Accessories/GW/PC-acc_june20_DesktopHero_1500x600._CB429195970_.jpg" />
                <div className = "home__row">
                    <Product id = "401" title ="HP-15" price = {35000} image= "https://static.toiimg.com/photo/66126276/HP-15-da0074tx-4TT07PA-Laptop-Core-i3-7th-Gen8-GB1-TBDOS2-GB.jpg" rating = {5}/>
                    <Product id = "402" title="Poco X3" price={15999} image="https://www.gizmochina.com/wp-content/uploads/2020/09/POCO-X3-renders-1024x698.jpg" rating={4} />                      
                </div>
                <div className = "home__row">
                    <Product id = "404" title ="Galaxy Smart watch" price = {20000} image= "https://s1.poorvikamobile.com/image/data/AAA%20Acc/samsung/New/Samsung%20Galaxy%20Active%202%2044mm%20BT%20Smartwatch/Silver/Samsung-Galaxy-Active-2-44mm-BT-Smartwatch-Silver-5_ios.jpeg"rating = {5}/> 
                    <Product id = "405" title ="HeadSet" price = {2999} image= "https://assets.croma.com/medias/sys_master/images/images/h4f/hdb/8945015554078/211151_pjpeg.jpg" rating = {5}/> 
                    <Product id="406" title="Gamming mouse" price={500} image="https://target.scene7.com/is/image/Target/GUEST_bb4cce99-b936-456e-8433-97d500f03e90?wid=488&hei=488&fmt=pjpeg" rating={5} /> 
                </div>
                <div className = "home__row">
                    <Product id="407" title="Odyssey G9" price={115650} image="https://images-na.ssl-images-amazon.com/images/I/81RcJoVbvDL._AC_SL1500_.jpg" rating={5} /> 
                    <Product id = "403" title="ipad Pro" price={71000} image="https://www.pngitem.com/pimgs/m/175-1757515_apple-ipad-pro-11-hd-png-download.png" rating={5} />
                </div>    
            </div>
        </div>
    )
}

export default Home
