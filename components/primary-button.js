import React from 'react'

import PropTypes from 'prop-types'

const PrimaryButton = (props) => {
  return (
    <>
      <div className="primary-button-container">
        <button
          name="Dream with shoonya - unleash your potential"
          type="button"
          className="primary-button-button MediumLabel button"
        >
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .primary-button-container {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .primary-button-button {
            color: #141313;
            align-self: center;
            transition: 0.3s;
            padding-top: 12px;
            border-width: 0px;
            padding-left: 32px;
            border-radius: var(--dl-radius-radius-radius6);
            padding-right: 32px;
            padding-bottom: 12px;
            background-color: #d4a6a6;
          }
          .primary-button-button:hover {
            background-color: var(--dl-color-purple-900);
          }
          @media (max-width: 479px) {
            .primary-button-button {
              z-index: 9999;
            }
          }
        `}
      </style>
    </>
  )
}

PrimaryButton.defaultProps = {
  button: 'Button',
}

PrimaryButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryButton
