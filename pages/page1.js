import React from 'react'
import Head from 'next/head'

import AppComponent from '../components/component'

const Page1 = (props) => {
  return (
    <>
      <div className="page1-container">
        <Head>
          <title>Page1 - Kshoonya Inc</title>
          <meta
            name="description"
            content="Kshoonya is an innovative technology company, specializes in developing products that focus on the independence and quality of life of those with disabilities."
          />
          <meta property="og:title" content="Page1 - Kshoonya Inc" />
          <meta
            property="og:description"
            content="Kshoonya is revolutionizing the field of artificial intelligence. By utilizing cutting-edge technology and innovative designs."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2a3336f1-8248-49e6-89b7-0c16b08d546c/f9893b75-1135-4e18-a915-19ab4a0be01b?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
      </div>
      <style jsx>
        {`
          .page1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Page1
