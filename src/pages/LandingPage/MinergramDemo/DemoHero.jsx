import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'iconsax-react';
import { images } from '../../../Constants';

const DemoHero = () => {
  return (
    <section className="DemoHero">
      <div className="back_icon">
<<<<<<< HEAD
        <Link to='/landingpage' className='icon'>
=======
        <Link to="/" className="icon">
>>>>>>> 18146e61e73437b503f49e22b79702ce5bac71ca
          <ArrowLeft />
        </Link>
      </div>
      <h3 className="heading">Minergram Demo</h3>
      <div className="content">
        <div className="content_text">
          <div className="image_info">
            <h4 className="info_heading">Image Description</h4>
            <p className="info_description">
<<<<<<< HEAD
              This is the pool area of Eko hotels and suites. In this image, there is a pool with lounging chairs and shades before it, surrounded by other hotel areas and trees.
=======
              This is the pool area of Eko hotels and suites. In this image,
              there is a pool with lounging chairs and shades before it,
              surrounded by other hotel areas and trees.
>>>>>>> 18146e61e73437b503f49e22b79702ce5bac71ca
            </p>
          </div>
          <div className="more_info">
            <h3 className="info_heading">More Image Information</h3>
            <p className="info_description">
              <strong>Question:</strong> Where was this image taken?
              <strong>Answer: Eko hotels and suites, Lagos state</strong>
            </p>
            <p className="info_description">
              <strong>Question:</strong> What objects are on this image?
              <strong>Answer: pool, shades, trees, chairs</strong>
            </p>
          </div>
          <div className="documetation_btn">
<<<<<<< HEAD
            <Link to='/documentation' className='documentation_text'>See documentation</Link>
=======
            <Link to="/documentation" className="documentation_text">
              See documentation
            </Link>
>>>>>>> 18146e61e73437b503f49e22b79702ce5bac71ca
          </div>
        </div>
        <div className="content_image">
          <img src={images.demo} alt="demo" />
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default DemoHero;
=======
export default DemoHero;
>>>>>>> 18146e61e73437b503f49e22b79702ce5bac71ca
