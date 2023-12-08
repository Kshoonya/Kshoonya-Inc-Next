import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard4 = (props) => {
  return (
    <>
      <div className={`feature-card4-feature-card ${props.rootClassName} `}>
        <div className="feature-card4-container">
          <svg viewBox="0 0 1024 1024" className="feature-card4-icon">
            <path d="M320 192c0-106.039 85.961-192 192-192s192 85.961 192 192c0 106.039-85.961 192-192 192s-192-85.961-192-192zM768.078 448h-35.424l-199.104 404.244 74.45-372.244-96-96-96 96 74.45 372.244-199.102-404.244h-35.424c-127.924 0-127.924 85.986-127.924 192v320h768v-320c0-106.014 0-192-127.922-192z"></path>
          </svg>
        </div>
        <h2 className="feature-card4-text">{props.title}</h2>
        <span className="feature-card4-text1">{props.description}</span>
      </div>
      <style jsx>
        {`
          .feature-card4-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 1400px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card4-container {
            flex: 0 0 auto;
            width: auto;
            height: 24px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .feature-card4-icon {
            width: 24px;
            height: 24px;
          }
          .feature-card4-text {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card4-text1 {
            color: #000000;
            font-style: normal;
            font-weight: 700;
          }
          .feature-card4-root-class-name {
            width: 100%;
          }

          @media (max-width: 1600px) {
            .feature-card4-text1 {
              color: #080808;
              font-style: normal;
              font-weight: 700;
            }
          }
          @media (max-width: 1200px) {
            .feature-card4-text1 {
              color: #040404;
              font-style: normal;
              text-align: left;
              font-weight: 700;
            }
          }
          @media (max-width: 479px) {
            .feature-card4-text {
              font-style: normal;
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard4.defaultProps = {
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
  title: 'Lorem ipsum',
}

FeatureCard4.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard4
