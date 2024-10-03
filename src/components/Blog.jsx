import React from 'react';
import './Blog.css';
import banner from '../assets/images/banner.jpg';
import bannerTablet from '../assets/images/banner-tablette.jpg';
import bannerMobile from '../assets/images/banner-mobile.jpg';
import coderPic from '../assets/images/blog/coder.jpg'
import croissancePic from '../assets/images/blog/croissance.jpg'
import googlePic from '../assets/images/blog/google.jpg'
import screensPic from '../assets/images/blog/screens.jpg'
import seoPic from '../assets/images/blog/seo.jpg'
import technosPic from '../assets/images/blog/technos.png'

const Blog = () => {
  const posts = [
    {
      title: 'Coder son site en HTML/CSS',
      date: '22 août 2022',
      image: coderPic,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      title: 'Vendre ses produits sur le web',
      date: '20 août 2022',
      image: croissancePic,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      title: 'Se positionner sur Google',
      date: '1 août 2022',
      image: googlePic,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      title: 'Coder en responsive design',
      date: '31 juillet 2022',
      image: screensPic,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      title: 'Techniques de référencement',
      date: '30 juillet 2022',
      image: seoPic,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      title: 'Apprendre à coder',
      date: '12 juillet 2022',
      image: technosPic,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    }
  ];

  return (
    <section className="blog">
      <picture className='picture'>
        <source srcSet={banner} media="(min-width: 1024px)" />
        <source srcSet={bannerTablet} media="(min-width: 768px)" />
        <img src={bannerMobile} alt="Bannière" className="home-banner" />
      </picture>
      <section className="blog-section">
        <div className="container">
          <div className='title1'>
            <h2>BLOG</h2>
            <p>Retrouvez ici quelques articles sur le développement web.</p>
          </div>
          <div className="blog-grid">
            {posts.map((post, index) => (
              <div className="blog-card" key={index}>
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <a href="#" className="btn-read-more">Lire la suite</a>
                  <div className="blog-date">&nbsp;&nbsp;Publié le {post.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blog;