import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import FeatureCard1 from '../components/feature-card1'

const Jobs = (props) => {
  return (
    <>
      <div className="jobs-container">
        <Head>
          <title>Jobs - Kshoonya Inc</title>
          <meta
            name="description"
            content="Kshoonya is an innovative technology company, specializes in developing products that focus on the independence and quality of life of those with disabilities."
          />
          <meta property="og:title" content="Jobs - Kshoonya Inc" />
          <meta
            property="og:description"
            content="Kshoonya is revolutionizing the field of artificial intelligence. By utilizing cutting-edge technology and innovative designs."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2a3336f1-8248-49e6-89b7-0c16b08d546c/f9893b75-1135-4e18-a915-19ab4a0be01b?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div data-role="Header" className="jobs-header-container">
          <header className="jobs-header">
            <Link href="/">
              <a className="jobs-link">
                <img
                  alt="image"
                  src="/new_design_full%203-400w.png"
                  className="jobs-image"
                />
              </a>
            </Link>
            <div className="jobs-logo"></div>
            <a
              href="https://www.linkedin.com/company/kshoonya/"
              target="_blank"
              rel="noreferrer noopener"
              className="jobs-link01"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="jobs-icon">
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
            <div className="jobs-menu">
              <Link href="/about-us">
                <a className="jobs-link02">About us</a>
              </Link>
              <Link href="/journey-so-far">
                <a className="jobs-link03">Journey So far</a>
              </Link>
              <Link href="/jobs">
                <a className="jobs-link04">Jobs</a>
              </Link>
              <a
                href="https://outlook.com/kshoonya.in"
                target="_blank"
                rel="noreferrer noopener"
                className="jobs-link05"
              >
                MyKshoonya        
              </a>
            </div>
          </header>
          <div data-role="MobileMenu" className="jobs-mobile-menu">
            <div className="jobs-top">
              <div className="jobs-logo1">
                <img
                  alt="image"
                  src="/logotype-dark.svg"
                  className="jobs-image1"
                />
              </div>
              <div data-role="CloseMobileMenu" className="jobs-close-menu">
                <svg viewBox="0 0 1024 1024" className="jobs-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="jobs-mid">
              <span className="jobs-text">About</span>
              <span className="jobs-text1">Products</span>
              <span className="jobs-text2">Pricing</span>
              <span className="jobs-text3">Blog</span>
              <span className="jobs-text4">Jobs</span>
              <span className="jobs-text5">More</span>
            </div>
            <div className="jobs-bot">
              <div className="jobs-container01">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="jobs-link06"
                >
                  <div className="jobs-container02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="jobs-icon04"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="jobs-link07"
                >
                  <div className="jobs-container03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="jobs-icon06"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="jobs-link08"
                >
                  <div className="jobs-container04">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="jobs-icon08"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="jobs-link09"
                >
                  <div className="jobs-container05">
                    <svg viewBox="0 0 1024 1024" className="jobs-icon10">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="jobs-main">
          <div className="jobs-blur-background"></div>
          <div className="jobs-hero">
            <h1 className="jobs-text6">Open Positions</h1>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1598738865218-7809c17181c3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ3fHxvcGVuJTIwcG9zaWlvbnN8ZW58MHx8fHwxNjgwODMwODcx&amp;ixlib=rb-4.0.3&amp;q=80&amp;h=700"
              className="jobs-image2"
            />
          </div>
          <img
            alt="image"
            src="/turquoise-circle.svg"
            className="jobs-turquoise-cirble"
          />
        </div>
        <div className="jobs-features">
          <h1 className="jobs-text7">Join the team</h1>
          <div className="jobs-container06">
            <FeatureCard1
              title="Check back again soon"
              rootClassName="rootClassName2"
            ></FeatureCard1>
          </div>
        </div>
        <div className="jobs-container07">
          <div className="jobs-container08"></div>
        </div>
        <div className="jobs-cta">
          <div className="jobs-container09">
            <div className="jobs-container10">
              <img
                alt="image"
                src="/Pictures/Extras/dall%C2%B7e%202023-04-05%2022.21.59%20-%20a%20%20man%20walking%20and%20wearing%20smart%20shoes%20and%20connected%20to%20an%20mobile%20app-300w.png"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="jobs-image3"
              />
              <img
                alt="image"
                src="/Pictures/Extras/dall%C2%B7e%202023-04-05%2022.23.36%20-%20a%20%20man%20walking%20and%20wearing%20smart%20shoes%20and%20connected%20to%20a%20mobile%20app%2C%20and%20helps%20to%20reach%20destination-300h.png"
                className="jobs-image4"
              />
            </div>
            <div className="jobs-container11">
              <img
                alt="image"
                src="/Pictures/First/_3a1e396a-8fc7-404a-8251-91dc346d23e4-1200w.jpeg"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="jobs-image5"
              />
              <img
                alt="image"
                src="/Pictures/Extras/_12f666b0-d77f-4988-a2d4-86fdca45e463-300w.jpeg"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="jobs-image6"
              />
            </div>
          </div>
        </div>
        <div className="jobs-footer">
          <Link href="/">
            <a className="jobs-link10">
              <img
                alt="image"
                src="/new_design_full%203-400w.png"
                loading="lazy"
                className="jobs-image7"
              />
            </a>
          </Link>
          <footer className="jobs-container12">
            <div className="jobs-container13">
              <div className="jobs-container14">
                <div className="jobs-container15">
                  <Link href="/jobs">
                    <a className="jobs-link11">Careers</a>
                  </Link>
                  <Link href="/about-us">
                    <a className="jobs-link12">About us</a>
                  </Link>
                  <Link href="/journey-so-far">
                    <a className="jobs-link13">Journey</a>
                  </Link>
                  <Link href="/privacy-policy">
                    <a className="jobs-link14">Privacy Policy</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="jobs-divider"></div>
            <div className="jobs-container16">
              <span className="jobs-text8 Body2">
                © 2023 Kshoonya Inc. All rights reserved
              </span>
              <div className="jobs-container17">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="jobs-link15"
                >
                  <div className="jobs-container18">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="jobs-icon12"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="jobs-link16"
                >
                  <div className="jobs-container19">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="jobs-icon14"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="jobs-link17"
                >
                  <div className="jobs-container20">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="jobs-icon16"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="jobs-link18"
                >
                  <div className="jobs-container21">
                    <svg viewBox="0 0 1024 1024" className="jobs-icon18">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .jobs-container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .jobs-header-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .jobs-header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: relative;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .jobs-link {
            display: contents;
          }
          .jobs-image {
            top: -46px;
            left: -11px;
            width: 370px;
            height: 216px;
            position: absolute;
            object-fit: cover;
            text-decoration: none;
          }
          .jobs-logo {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .jobs-link01 {
            display: contents;
          }
          .jobs-icon {
            width: 24px;
            height: 24px;
            text-decoration: none;
            animation-play-state: running;
          }
          .jobs-menu {
            left: 428px;
            bottom: -1px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: row;
          }
          .jobs-link02 {
            transition: 0.3s;
            font-weight: bold;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .jobs-link02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-link03 {
            transition: 0.3s;
            font-weight: bold;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .jobs-link03:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-link04 {
            transition: 0.3s;
            font-weight: bold;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .jobs-link04:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-link05 {
            transition: 0.3s;
            font-weight: bold;
            text-decoration: none;
          }
          .jobs-link05:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            z-index: 101;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .jobs-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .jobs-logo1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .jobs-image1 {
            width: 100px;
            object-fit: cover;
          }
          .jobs-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .jobs-icon02 {
            width: 24px;
            height: 24px;
          }
          .jobs-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .jobs-text {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .jobs-text:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text1 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .jobs-text1:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text2 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .jobs-text2:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text3 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .jobs-text3:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text4 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .jobs-text4:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text5 {
            transition: 0.3s;
          }
          .jobs-text5:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .jobs-container01 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .jobs-link06 {
            display: contents;
          }
          .jobs-container02 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .jobs-icon04 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .jobs-icon04:hover {
            fill: var(--dl-color-purple-default);
          }
          .jobs-link07 {
            display: contents;
          }
          .jobs-container03 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .jobs-icon06 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .jobs-icon06:hover {
            fill: var(--dl-color-pink-default);
          }
          .jobs-link08 {
            display: contents;
          }
          .jobs-container04 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .jobs-icon08 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .jobs-icon08:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .jobs-link09 {
            display: contents;
          }
          .jobs-container05 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .jobs-icon10 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .jobs-icon10:hover {
            fill: var(--dl-color-orange-default);
          }
          .jobs-main {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .jobs-blur-background {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            filter: blur(60px);
            height: 70vh;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            background-color: #f2f2f2;
          }
          .jobs-hero {
            flex: 0 0 auto;
            width: 100%;
            height: 80vh;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }

          .jobs-text6 {
            font-size: 72px;
            align-self: center;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .jobs-image2 {
            width: 529px;
            height: 602px;
            opacity: 0.8;
            object-fit: cover;
          }
          .jobs-turquoise-cirble {
            top: 439px;
            left: auto;
            right: 430px;
            width: 170px;
            bottom: auto;
            filter: blur(60px);
            opacity: 0.6;
            position: absolute;
            object-fit: cover;
          }
          .jobs-features {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            flex-direction: column;
          }
          .jobs-text7 {
            font-size: 3rem;
            margin-bottom: 48px;
          }
          .jobs-container06 {
            flex: 0 0 auto;
            width: 100%;
            display: grid;
            grid-gap: 32px;
            align-items: flex-start;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .jobs-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .jobs-container08 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .jobs-cta {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #692e4a;
          }
          .jobs-container09 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            flex-wrap: wrap;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .jobs-container10 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .jobs-image3 {
            width: 232px;
            opacity: 0.8;
            object-fit: cover;
          }
          .jobs-image4 {
            width: 286px;
            height: 237px;
            opacity: 0.8;
            object-fit: cover;
            padding-right: 30px;
            padding-bottom: 19px;
          }
          .jobs-container11 {
            width: 520px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .jobs-image5 {
            top: -100px;
            left: auto;
            right: var(--dl-space-space-doubleunit);
            width: 232px;
            bottom: auto;
            opacity: 0.8;
            position: absolute;
            object-fit: cover;
          }
          .jobs-image6 {
            top: auto;
            left: var(--dl-space-space-doubleunit);
            right: auto;
            width: 232px;
            bottom: -100px;
            opacity: 0.8;
            position: absolute;
            object-fit: cover;
          }
          .jobs-footer {
            flex: 0 0 auto;
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-black);
          }
          .jobs-link10 {
            display: contents;
          }
          .jobs-image7 {
            width: 196px;
            height: 84px;
            object-fit: cover;
            text-decoration: none;
          }
          .jobs-container12 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            flex-wrap: wrap;
            max-width: 1110px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .jobs-container13 {
            flex: 0 0 auto;
            width: auto;
            height: 72px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .jobs-container14 {
            flex: 0 0 auto;
            width: auto;
            height: 72px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .jobs-container15 {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .jobs-link11 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .jobs-link11:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-link12 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .jobs-link12:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-link13 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .jobs-link13:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-link14 {
            transition: 0.3s;
            white-space: nowrap;
            text-decoration: none;
          }
          .jobs-link14:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-divider {
            width: 100%;
            height: 1px;
            opacity: 0.2;
            background-color: var(--dl-color-gray-white);
          }
          .jobs-container16 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .jobs-text8 {
            color: var(--dl-color-gray-300);
            margin-top: var(--dl-space-space-unit);
          }
          .jobs-container17 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .jobs-link15 {
            display: contents;
          }
          .jobs-container18 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .jobs-icon12 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .jobs-icon12:hover {
            fill: var(--dl-color-purple-default);
          }
          .jobs-link16 {
            display: contents;
          }
          .jobs-container19 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .jobs-icon14 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .jobs-icon14:hover {
            fill: var(--dl-color-pink-default);
          }
          .jobs-link17 {
            display: contents;
          }
          .jobs-container20 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .jobs-icon16 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .jobs-icon16:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .jobs-link18 {
            display: contents;
          }
          .jobs-container21 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .jobs-icon18 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .jobs-icon18:hover {
            fill: var(--dl-color-orange-default);
          }
          @media (max-width: 1600px) {
            .jobs-container {
              background-color: #ffecec;
            }
            .jobs-image {
              top: -37px;
              left: -15px;
              width: 359px;
              height: 199px;
            }
            .jobs-link05 {
              font-weight: bold;
              text-decoration: none;
            }
            .jobs-container06 {
              position: relative;
            }
          }
          @media (max-width: 1200px) {
            .jobs-image {
              top: -29px;
              left: 4px;
            }
            .jobs-link05 {
              font-weight: bold;
              text-decoration: none;
            }
          }
          @media (max-width: 991px) {
            .jobs-image {
              top: -29px;
              left: 41px;
            }
            .jobs-hero {
              height: auto;
              flex-direction: column;
            }
            .jobs-text6 {
              font-size: 25px;
              text-align: center;
            }
            .jobs-text7 {
              align-self: center;
            }
            .jobs-container06 {
              grid-template-columns: 1fr 1fr;
            }
            .jobs-container11 {
              display: none;
            }
            .jobs-link12 {
              text-decoration: none;
            }
            .jobs-link13 {
              text-decoration: none;
            }
          }
          @media (max-width: 767px) {
            .jobs-image {
              top: -31px;
              left: 206px;
            }
            .jobs-menu {
              display: none;
            }
            .jobs-text6 {
              font-size: 50px;
              text-align: center;
            }
            .jobs-features {
              padding-left: 32px;
              padding-right: 32px;
            }
            .jobs-container15 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .jobs-container16 {
              flex-direction: column;
            }
            .jobs-text8 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .jobs-image {
              top: -29px;
              left: 65px;
            }
            .jobs-bot {
              width: 100%;
            }
            .jobs-text6 {
              font-size: 25px;
            }
            .jobs-features {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .jobs-container06 {
              grid-gap: var(--dl-space-space-halfunit);
            }
            .jobs-link11 {
              text-decoration: none;
            }
            .jobs-link12 {
              text-decoration: none;
            }
            .jobs-link13 {
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default Jobs
