import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
        <div className="image-container">
            <img
            src="https://scontent.fdel1-2.fna.fbcdn.net/v/t39.30808-6/305842526_480112457462860_1258181700195647656_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ATmvsDqagZkAX8LTYLi&_nc_ht=scontent.fdel1-2.fna&oh=00_AfC9F8RHacabHo9LbMRfg3m_IIxn4wgCnbZg4vPgrAvuDQ&oe=65A1C07B" 
            alt="Nishyan"
            className="brand-image"
            />
            <p>
            We love to make our customers happy by providing handmade products,
            including tie and dye. Explore our unique collection and elevate your style!
            </p>
        </div>
    </div>
  );
};

export default Home;
