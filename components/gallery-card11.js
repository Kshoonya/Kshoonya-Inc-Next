import React from 'react'

import PropTypes from 'prop-types'

const GalleryCard11 = (props) => {
  return (
    <>
      <div className={`gallery-card11-gallery-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="gallery-card11-image"
        />
        <h2 className="gallery-card11-text">{props.title}</h2>
        <span className="gallery-card11-text1">{props.subtitle}</span>
      </div>
      <style jsx>
        {`
          .gallery-card11-gallery-card {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-card11-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-card11-text {
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .gallery-card11-text1 {
            color: #595959;
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
          }

          @media (max-width: 767px) {
            .gallery-card11-gallery-card {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .gallery-card11-image {
              height: 10rem;
            }
          }
        `}
      </style>
    </>
  )
}

GalleryCard11.defaultProps = {
  title: 'Project Title',
  image_alt: 'image',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  subtitle: 'Lorem ipsum dolor sit amet',
}

GalleryCard11.propTypes = {
  title: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  subtitle: PropTypes.string,
}

export default GalleryCard11
