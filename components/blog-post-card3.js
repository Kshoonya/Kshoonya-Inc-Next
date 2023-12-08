import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard3 = (props) => {
  return (
    <>
      <div className={`blog-post-card3-blog-post-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="blog-post-card3-image"
        />
        <div className="blog-post-card3-container">
          <span className="blog-post-card3-text">{props.label}</span>
          <h1 className="blog-post-card3-text1">{props.title}</h1>
          <div className="blog-post-card3-container1">
            <span className="blog-post-card3-text2">{props.description}</span>
            <span className="blog-post-card3-text3">Read More</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card3-blog-post-card {
            width: 100%;
            display: flex;
            max-width: 1400px;
            flex-direction: row;
            justify-content: center;
          }
          .blog-post-card3-image {
            width: 500px;
            object-fit: cover;
          }
          .blog-post-card3-container {
            flex: 1;
            display: flex;
            padding: 32px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .blog-post-card3-text {
            color: #595959;
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
            text-transform: uppercase;
          }
          .blog-post-card3-text1 {
            margin-bottom: 48px;
          }
          .blog-post-card3-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 48px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-post-card3-text2 {
            color: #595959;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .blog-post-card3-text3 {
            color: var(--dl-color-gray-black);
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .blog-post-card3-image {
              width: 50%;
            }
          }
          @media (max-width: 767px) {
            .blog-post-card3-blog-post-card {
              flex-direction: column;
              justify-content: space-between;
            }
            .blog-post-card3-image {
              width: 100%;
            }
            .blog-post-card3-container {
              width: 100%;
            }
            .blog-post-card3-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .blog-post-card3-text1 {
              margin-bottom: 32px;
            }
            .blog-post-card3-container1 {
              margin-bottom: 32px;
            }
          }
          @media (max-width: 479px) {
            .blog-post-card3-text3 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard3.defaultProps = {
  label: 'ENTERPRISE',
  author: 'by Jon Doe 5 hours ago',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&h=1200',
  image_alt: 'image',
  title: 'Lorem ipsum dolor sit amet',
}

BlogPostCard3.propTypes = {
  label: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
}

export default BlogPostCard3
