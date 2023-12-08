import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard2 = (props) => {
  return (
    <>
      <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
        <div className="blog-post-card2-container">
          <div className="blog-post-card2-container1">
            <span className="blog-post-card2-text">{props.label}</span>
          </div>
          <h1 className="blog-post-card2-text1">{props.title}</h1>
          <span className="blog-post-card2-text2">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card2-blog-post-card {
            width: 100%;
            display: flex;
            max-width: 1400px;
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card2-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card2-container {
            display: flex;
            align-items: flex-start;
            padding-top: 32px;
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .blog-post-card2-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card2-text {
            color: #595959;
            font-weight: 600;
            text-transform: uppercase;
          }
          .blog-post-card2-text1 {
            margin-bottom: 32px;
          }
          .blog-post-card2-text2 {
            color: #595959;
            font-size: 1.25rem;
            margin-bottom: 32px;
          }

          @media (max-width: 991px) {
            .blog-post-card2-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .blog-post-card2-blog-post-card {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard2.defaultProps = {
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  image_alt: 'image',
  title: 'Lorem ipsum dolor sit amet',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  author: 'Jane Doe',
  rootClassName: '',
  when: '3 days ago',
  label: 'ENTERPRISE',
  profile_alt: 'profile',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
}

BlogPostCard2.propTypes = {
  profile_src: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  rootClassName: PropTypes.string,
  when: PropTypes.string,
  label: PropTypes.string,
  profile_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogPostCard2
