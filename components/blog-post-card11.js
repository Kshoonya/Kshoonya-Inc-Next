import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard11 = (props) => {
  return (
    <>
      <div
        className={`blog-post-card11-blog-post-card ${props.rootClassName} `}
      >
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="blog-post-card11-image"
        />
        <div className="blog-post-card11-container">
          <span className="blog-post-card11-text">{props.label}</span>
          <span className="blog-post-card11-text1">{props.title}</span>
          <span className="blog-post-card11-text2">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card11-blog-post-card {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: 1400px;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-post-card11-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card11-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }
          .blog-post-card11-container {
            display: flex;
            padding: 32px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-post-card11-text {
            color: #595959;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .blog-post-card11-text1 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: 32px;
          }
          .blog-post-card11-text2 {
            color: #595959;
            text-align: justify;
            font-weight: 400;
            margin-bottom: 32px;
          }

          @media (max-width: 991px) {
            .blog-post-card11-image {
              height: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard11.defaultProps = {
  label: 'ENTERPRISE',
  title: 'Lorem ipsum dolor sit amet',
  profile_alt: 'profile',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  image_alt: 'image',
  time: '5 min read',
  author: 'Jon Doe',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  rootClassName: '',
}

BlogPostCard11.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  profile_alt: PropTypes.string,
  profile_src: PropTypes.string,
  image_alt: PropTypes.string,
  time: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard11
