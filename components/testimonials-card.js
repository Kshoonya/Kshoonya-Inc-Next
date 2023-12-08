import React from 'react'

import PropTypes from 'prop-types'

const TestimonialsCard = (props) => {
  return (
    <>
      <div className={`testimonials-card-container ${props.rootClassName} `}>
        <div className="testimonials-card-container1">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="testimonials-card-image"
          />
          <div className="testimonials-card-container2">
            <span className="testimonials-card-text">{props.text}</span>
            <span className="Subtitle1">{props.text1}</span>
            <span className="testimonials-card-text2 Lead2">{props.text2}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonials-card-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            box-shadow: 0px 10px 20px 0px rgba(41, 41, 42, 0.07);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .testimonials-card-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .testimonials-card-image {
            top: 81px;
            left: 46px;
            right: auto;
            width: 15px;
            bottom: auto;
            object-fit: cover;
          }
          .testimonials-card-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .testimonials-card-text {
            font-size: 16px;
            font-style: normal;
            font-family: Inter;
            font-weight: 700;
            line-height: 1.55;
            margin-bottom: var(--dl-space-space-doubleunit);
            text-transform: none;
            text-decoration: none;
          }
          .testimonials-card-text2 {
            color: var(--dl-color-gray-700);
          }
          .testimonials-card-root-class-name {
            align-self: center;
          }
          .testimonials-card-root-class-name1 {
            align-self: center;
          }
          @media (max-width: 1600px) {
            .testimonials-card-text {
              font-style: normal;
              font-weight: 700;
            }
          }
          @media (max-width: 1200px) {
            .testimonials-card-text {
              font-style: normal;
              font-weight: 700;
            }
            .testimonials-card-root-class-name {
              background-color: #ffffff;
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialsCard.defaultProps = {
  image_alt1: 'image',
  rootClassName: '',
  image_alt: 'image',
  text2: 'Vice President, GoPro',
  text1: 'Floyd Miles',
  text: 'To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.',
  image_src:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png',
  image_src1: '/quote-mark.svg',
}

TestimonialsCard.propTypes = {
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
}

export default TestimonialsCard
