import React from 'react';
import "./Home.css";
import Navbar from './Navbar';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
          <Navbar />
          <div className='home__body'>
            <div className='product__row'>
                  <Product 
                      id={58796401}

                      description="Lava Agni 5G |64 MP AI Quad Camera| (8GB RAM/128 GB ROM)| 5000 mAh Battery| Superfast 30W Fast Charging| 6.78 inch Big Screen (Fiery Blue)"
                      rating={5}
                      image="https://m.media-amazon.com/images/I/71Ut7O9cKVL._SL1500_.jpg"
                      price={18900}
                  />
                  <Product 
                      id={58796402}
                      description="Marshall Stanmore II Wireless Bluetooth Speaker (Black) (1002485)"
                      rating={3}
                      image="https://m.media-amazon.com/images/I/71VfR7Xhk8L._SL1000_.jpg"
                      price={34800}
                  />
                  <Product 
                      id={58796407}
                      description="boAt Rockerz 330 Bluetooth Neckband with Upto 30 Hours Playtime, ASAP™ Charge, boAt Signature Sound, Dual Pairing & IPX5(Navy Blue)"
                      rating={1}
                      image="https://m.media-amazon.com/images/I/514sHd2+YyS._SL1500_.jpg"
                      price={1599}
                   />
            </div>
            <div className='product__row'>
            <Product 
                      id={58796403}
                      description="ErRahul Sharma || Keep your face towards sunshine and shadows will fall behind you🔥🔥"
                      rating={2}
                      image="https://scontent.fblr8-1.fna.fbcdn.net/v/t39.30808-6/274473307_1608973852806191_8080974491652509895_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4efshjkDxEQAX_eZ4Fw&_nc_ht=scontent.fblr8-1.fna&oh=00_AT_GRg7EDJo_bQIIXjKrAMDf_TYYisSZR54jRwyG6_i0FA&oe=6328877Fhttps://scontent.fblr8-1.fna.fbcdn.net/v/t39.30808-6/274473307_1608973852806191_8080974491652509895_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4efshjkDxEQAX_eZ4Fw&_nc_ht=scontent.fblr8-1.fna&oh=00_AT_GRg7EDJo_bQIIXjKrAMDf_TYYisSZR54jRwyG6_i0FA&oe=6328877F"
                      price={19900}
                  />
                  <Product 
                      id={58796404}
                      description="Saurabh Hisariya || Keep your face towards sunshine and shadows will fall behind you🔥🔥"
                      rating={4}
                      image="https://scontent.fpat2-2.fna.fbcdn.net/v/t1.6435-9/83176122_2463675780517486_3012052833743667200_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=smmd6wB2NyIAX8SgDv7&_nc_ht=scontent.fpat2-2.fna&oh=00_AT8szsMBWu_clBw8eCcp7ef75qDZSsFi7ErixwurD0PSKQ&oe=6336B22B"
                      price={16999}
                  />
                   
            </div>
            <div className='product__row'>
                <Product 
                      id={58796406}
                      description="Shishu Kumar || Keep your face towards sunshine and shadows will fall behind you🔥🔥"
                      rating={4}
                      image="https://scontent.fpat2-3.fna.fbcdn.net/v/t31.18172-8/10991624_444652289025800_3524292657901393563_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=19026a&_nc_ohc=O-u3qvKsN_YAX8RY9c5&_nc_ht=scontent.fpat2-3.fna&oh=00_AT872dXe7NcQEefOkLPUJpjPFLn3sKq8GvL4sURBBYOjDg&oe=6334B1B7"
                      price={14800}
                  />
                  <Product 
                      id={58796405}
                      description="Satyam Raj || Keep your face towards sunshine and shadows will fall behind you🔥🔥"
                      rating={4}
                      image="https://scontent.fpat2-1.fna.fbcdn.net/v/t31.18172-8/1921023_306451372880034_5929339923328488280_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=2c4854&_nc_ohc=ri-WnRsTEIUAX-7dyvx&_nc_ht=scontent.fpat2-1.fna&oh=00_AT_k3BKYwK7sLAW18rGPSEJyb1GYAE7Wv6RqVhCQPijjsQ&oe=6334B52B"
                      price={34800}
                   />
                  
            </div>
        </div>
    </div>
  )
}

export default Home
