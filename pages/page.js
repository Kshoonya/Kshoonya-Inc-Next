import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Kshoonya Inc</title>
          <meta
            name="description"
            content="Kshoonya is an innovative technology company, specializes in developing products that focus on the independence and quality of life of those with disabilities."
          />
          <meta property="og:title" content="Page - Kshoonya Inc" />
          <meta
            property="og:description"
            content="Kshoonya is revolutionizing the field of artificial intelligence. By utilizing cutting-edge technology and innovative designs."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2a3336f1-8248-49e6-89b7-0c16b08d546c/f9893b75-1135-4e18-a915-19ab4a0be01b?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div>
          <div className="page-container2">
            <React.Fragment>
              <div style={{ maxWidth: '1280px' }}>
                <div
                  style={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: '0',
                    overflow: 'hidden',
                  }}
                >
                  <iframe
                    src="https://kshoonyaai-my.sharepoint.com/personal/harshit_kshoonya_com/_layouts/15/embed.aspx?UniqueId=8aa1126b-6cb2-4c29-9490-35a768f88a51&embed=%7B%22af%22%3Atrue%2C%22ust%22%3Afalse%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create"
                    width={1280}
                    height={720}
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen={true}
                    title="20230612_145718000_iOS.mov"
                    style={{
                      border: 'none',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      height: '100%',
                      maxWidth: '100%',
                    }}
                  ></iframe>
                </div>
              </div>
            </React.Fragment>
          </div>
        </div>
        <video
          src="https://kshoonyaai-my.sharepoint.com/personal/harshit_kshoonya_com//_layouts/15/onedrive.aspx?login_hint=harshit%40KSHOONYA%2ECOM&amp;id=%2Fpersonal%2Fharshit%5Fkshoonya%5Fcom%2FDocuments%2FHarshit%2F20230612%5F145718000%5FiOS%2Emov&amp;parent=%2Fpersonal%2Fharshit%5Fkshoonya%5Fcom%2FDocuments%2FHarshit"
          loop
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          preload="auto"
          autoPlay
          controls
          className="page-video"
        ></video>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-container2 {
            display: contents;
          }
          .page-video {
            width: 320px;
            height: 180px;
          }
          @media (max-width: 1200px) {
            .page-video {
              width: 810px;
              height: 667px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
