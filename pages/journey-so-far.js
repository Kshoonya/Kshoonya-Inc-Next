import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const JourneySoFar = (props) => {
  return (
    <>
      <div className="journey-so-far-container">
        <Head>
          <title>Journey-So-Far - Kshoonya Inc</title>
          <meta
            name="description"
            content="Kshoonya is an innovative technology company, specializes in developing products that focus on the independence and quality of life of those with disabilities."
          />
          <meta property="og:title" content="Journey-So-Far - Kshoonya Inc" />
          <meta
            property="og:description"
            content="Kshoonya is revolutionizing the field of artificial intelligence. By utilizing cutting-edge technology and innovative designs."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2a3336f1-8248-49e6-89b7-0c16b08d546c/f9893b75-1135-4e18-a915-19ab4a0be01b?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div data-role="Header" className="journey-so-far-header-container">
          <header className="journey-so-far-header">
            <Link href="/">
              <a className="journey-so-far-link">
                <img
                  alt="Kshoonya Company"
                  src="/new_design_full%203-400w.png"
                  className="journey-so-far-image"
                />
              </a>
            </Link>
            <div className="journey-so-far-logo"></div>
            <div className="journey-so-far-menu">
              <Link href="/about-us">
                <a className="journey-so-far-link01">About us</a>
              </Link>
              <span className="journey-so-far-text">Journey So far</span>
              <Link href="/jobs">
                <a className="journey-so-far-link02">Jobs</a>
              </Link>
              <a
                href="https://outlook.com/kshoonya.in"
                target="_blank"
                rel="noreferrer noopener"
                className="journey-so-far-link03"
              >
                MyKshoonya
              </a>
              <svg viewBox="0 0 1024 1024" className="journey-so-far-icon list">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
              <a
                href="https://www.linkedin.com/company/kshoonya/"
                target="_blank"
                rel="noreferrer noopener"
                className="journey-so-far-link04"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="journey-so-far-icon02"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
              </a>
            </div>
          </header>
          <div data-role="MobileMenu" className="journey-so-far-mobile-menu">
            <div className="journey-so-far-top">
              <div className="journey-so-far-logo1">
                <img
                  alt="image"
                  src="/logotype-dark.svg"
                  className="journey-so-far-image1"
                />
              </div>
              <div
                data-role="CloseMobileMenu"
                className="journey-so-far-close-menu"
              >
                <svg viewBox="0 0 1024 1024" className="journey-so-far-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="journey-so-far-mid">
              <span className="journey-so-far-text01">About</span>
              <span className="journey-so-far-text02">Products</span>
              <span className="journey-so-far-text03">Pricing</span>
              <span className="journey-so-far-text04">Blog</span>
              <span className="journey-so-far-text05">Jobs</span>
              <span className="journey-so-far-text06">More</span>
            </div>
            <div className="journey-so-far-bot">
              <div className="journey-so-far-container01">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="journey-so-far-link05"
                >
                  <div className="journey-so-far-container02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="journey-so-far-icon06"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="journey-so-far-link06"
                >
                  <div className="journey-so-far-container03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="journey-so-far-icon08"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="journey-so-far-link07"
                >
                  <div className="journey-so-far-container04">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="journey-so-far-icon10"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="journey-so-far-link08"
                >
                  <div className="journey-so-far-container05">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="journey-so-far-icon12"
                    >
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="journey-so-far-main">
          <div className="journey-so-far-blur-background"></div>
          <div className="journey-so-far-hero">
            <h1 className="journey-so-far-text07">Journey of Kshoonya</h1>
            <img
              alt="An image where a girl rejoicing the journey"
              src="/external/_2e9c8e47-01fd-4d7b-9d91-51a01e47621f-1500h.jpg"
              loading="lazy"
              className="journey-so-far-image2"
            />
          </div>
          <img
            alt="image"
            src="/turquoise-circle.svg"
            className="journey-so-far-turquoise-cirble"
          />
        </div>
        <div className="journey-so-far-container06">
          <div className="journey-so-far-container07"></div>
        </div>
        <div className="journey-so-far-hero1">
          <h1 className="journey-so-far-text08">Startup</h1>
          <div className="journey-so-far-container08">
            <span className="journey-so-far-text09">
              <span>
                While Kshoonya might be in its nascent stage, the experience of
                those behind it is not. With a team of extremely qualified
                engineers, researchers &amp; advisors on board, the (delete
                redundant) company is propelling forward at bullet speed. Come
                with us as we give you a sneak peek into our inner workings!
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Kshoonya is revolutionizing the field of artificial
                intelligence. By utilizing cutting-edge technology and
                innovative designs, Kshoonya is creating projects with the
                potential to greatly enhance the lives of people everywhere,
                especially of those with physical limitations.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                We deeply believe that every single one of us deserves the same
                opportunities, irrespective of our location, financial means,
                and technological skills.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                People with blindness have the same potential to thrive. Why
                aren’t more thriving?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Below is a brief summary of our journey as we turn that dream
                into reality.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Our dream of using cutting-edge technology to make the world a
                more equitable place began in 2023. In January, celebrating the
                new year, the founders began their secondary research into the
                world of technology, accessibility, and wearable products.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                As our knowledge and commitment deepened, we added a highly
                accomplished professor from the University of South Florida to
                our advisory board. His interest in our work gave us the first
                validation from the industry.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                As our research continued, we became increasingly convinced that
                access to assistive technology was insufficient. Our belief was
                that access should be a universal right, not dictated by our
                financial means, location, or anything else. However, as
                researchers, we needed hard evidence that the problem is truly
                as widespread as we perceived. That led to a primary survey for
                the community we have in mind.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                In March 2023, we increased our team from 2 to 4, adding
                industry experts to the team, along with onboarding a highly
                successful advisor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                On the research front, with our primary survey concluded and
                analyzed, we had hard proof that over 80% of our target audience
                of disabled individuals was struggling with the problem of
                independent mobility. While it strengthened our resolve, the
                scope of inaccessibility issues also dismayed us.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                We are determined to bring our idea to reality to increase
                access in our society and restore some of the independence to
                disabled individuals that our inaccessible world has stolen.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Stay tuned to know what happens next!
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
        </div>
        <div className="journey-so-far-blog">
          <div className="journey-so-far-container09"></div>
          <div className="journey-so-far-steps">
            <h1 className="journey-so-far-text47">Development Stage</h1>
            <div className="journey-so-far-container10">
              <div className="journey-so-far-container11">
                <div className="journey-so-far-step">
                  <h1 className="journey-so-far-text48">
                    <span>1</span>
                  </h1>
                  <h1 className="journey-so-far-text50">Phase</h1>
                  <span className="journey-so-far-text51">
                    <span>
                      Project funding for our technology is an important part of
                      the development process. We are currently in Phase 1 of
                      the project, looking for funding and developing a
                      prototype. We are seeking investors and sponsors who are
                      interested in helping us bring this technology to
                      fruition. We have already completed some preliminary
                      research and development, and we are now ready to take the
                      next step in creating a working prototype. Our goal is to
                      create a product that will revolutionize the technology.
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="journey-so-far-step1">
                  <h1 className="journey-so-far-text54">
                    <span>2</span>
                  </h1>
                  <h1 className="journey-so-far-text56">Phase</h1>
                  <span className="journey-so-far-text57">
                    <span>Coming soon</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="journey-so-far-container12">
                <div className="journey-so-far-step2">
                  <h1 className="journey-so-far-text60">
                    <span>3</span>
                  </h1>
                  <h1 className="journey-so-far-text62">Phase</h1>
                  <span className="journey-so-far-text63">
                    <span>coming soon</span>
                    <br></br>
                  </span>
                </div>
                <div className="journey-so-far-step3">
                  <h1 className="journey-so-far-text66">
                    <span>4</span>
                  </h1>
                  <h1 className="journey-so-far-text68">Production</h1>
                  <span className="journey-so-far-text69">
                    <span>
                      coming
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>soon</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="journey-so-far-cta">
          <div className="journey-so-far-container13">
            <div className="journey-so-far-container14">
              <img
                alt="image"
                src="/Pictures/Extras/dall%C2%B7e%202023-04-05%2022.21.59%20-%20a%20%20man%20walking%20and%20wearing%20smart%20shoes%20and%20connected%20to%20an%20mobile%20app-300w.png"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="journey-so-far-image3"
              />
              <img
                alt="image"
                src="/Pictures/Extras/dall%C2%B7e%202023-04-05%2022.23.36%20-%20a%20%20man%20walking%20and%20wearing%20smart%20shoes%20and%20connected%20to%20a%20mobile%20app%2C%20and%20helps%20to%20reach%20destination-300h.png"
                className="journey-so-far-image4"
              />
            </div>
            <div className="journey-so-far-container15">
              <img
                alt="image"
                src="/Pictures/First/_3a1e396a-8fc7-404a-8251-91dc346d23e4-1200w.jpeg"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="journey-so-far-image5"
              />
              <img
                alt="image"
                src="/Pictures/Extras/_12f666b0-d77f-4988-a2d4-86fdca45e463-300w.jpeg"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="journey-so-far-image6"
              />
            </div>
          </div>
        </div>
        <div className="journey-so-far-footer">
          <footer className="journey-so-far-container16">
            <Link href="/">
              <a className="journey-so-far-link09">
                <img
                  alt="image"
                  src="/new_design_full%203-400w.png"
                  loading="lazy"
                  className="journey-so-far-image7"
                />
              </a>
            </Link>
            <div className="journey-so-far-container17">
              <div className="journey-so-far-container18">
                <Link href="/jobs">
                  <a className="journey-so-far-link10">Careers</a>
                </Link>
                <Link href="/about-us">
                  <a className="journey-so-far-link11">About us</a>
                </Link>
                <Link href="/journey-so-far">
                  <a className="journey-so-far-link12">Journey</a>
                </Link>
                <Link href="/privacy-policy">
                  <a className="journey-so-far-link13">Privacy Policy</a>
                </Link>
              </div>
            </div>
            <div className="journey-so-far-divider"></div>
            <div className="journey-so-far-container19">
              <span className="journey-so-far-text74 Body2">
                © 2023 Kshoonya Inc. All rights reserved
              </span>
              <div className="journey-so-far-container20">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="journey-so-far-link14"
                >
                  <div className="journey-so-far-container21">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="journey-so-far-icon14"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="journey-so-far-link15"
                >
                  <div className="journey-so-far-container22">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="journey-so-far-icon16"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="journey-so-far-link16"
                >
                  <div className="journey-so-far-container23">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="journey-so-far-icon18"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="journey-so-far-link17"
                >
                  <div className="journey-so-far-container24">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="journey-so-far-icon20"
                    >
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
          .journey-so-far-container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-header-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-header {
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
          .journey-so-far-link {
            display: contents;
          }
          .journey-so-far-image {
            top: -46px;
            left: -19px;
            width: 363px;
            height: 211px;
            position: absolute;
            object-fit: cover;
            text-decoration: none;
          }
          .journey-so-far-logo {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .journey-so-far-menu {
            left: 420px;
            bottom: -27px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: row;
          }
          .journey-so-far-link01 {
            transition: 0.3s;
            font-weight: bold;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .journey-so-far-link01:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-text {
            transition: 0.3s;
            font-weight: bold;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .journey-so-far-text:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-link02 {
            transition: 0.3s;
            font-weight: bold;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .journey-so-far-link02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-link03 {
            transition: 0.3s;
            font-weight: bold;
            text-decoration: none;
          }
          .journey-so-far-link03:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-icon {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .journey-so-far-link04 {
            display: contents;
          }
          .journey-so-far-icon02 {
            width: 24px;
            height: 24px;
            text-decoration: none;
            animation-play-state: running;
          }
          .journey-so-far-mobile-menu {
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
          .journey-so-far-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .journey-so-far-logo1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .journey-so-far-image1 {
            width: 100px;
            object-fit: cover;
          }
          .journey-so-far-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .journey-so-far-icon04 {
            width: 24px;
            height: 24px;
          }
          .journey-so-far-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .journey-so-far-text01 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .journey-so-far-text01:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-text02 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .journey-so-far-text02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-text03 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .journey-so-far-text03:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-text04 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .journey-so-far-text04:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-text05 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .journey-so-far-text05:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-text06 {
            transition: 0.3s;
          }
          .journey-so-far-text06:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .journey-so-far-container01 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .journey-so-far-link05 {
            display: contents;
          }
          .journey-so-far-container02 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .journey-so-far-icon06 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .journey-so-far-icon06:hover {
            fill: var(--dl-color-purple-default);
          }
          .journey-so-far-link06 {
            display: contents;
          }
          .journey-so-far-container03 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .journey-so-far-icon08 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .journey-so-far-icon08:hover {
            fill: var(--dl-color-pink-default);
          }
          .journey-so-far-link07 {
            display: contents;
          }
          .journey-so-far-container04 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .journey-so-far-icon10 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .journey-so-far-icon10:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .journey-so-far-link08 {
            display: contents;
          }
          .journey-so-far-container05 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .journey-so-far-icon12 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .journey-so-far-icon12:hover {
            fill: var(--dl-color-orange-default);
          }
          .journey-so-far-main {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-blur-background {
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
          .journey-so-far-hero {
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
            justify-content: flex-start;
          }

          .journey-so-far-text07 {
            font-size: 72px;
            align-self: center;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .journey-so-far-image2 {
            width: 465px;
            opacity: 0.8;
            object-fit: cover;
          }
          .journey-so-far-turquoise-cirble {
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
          .journey-so-far-container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .journey-so-far-container07 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .journey-so-far-hero1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #f7f1f1;
          }
          .journey-so-far-text08 {
            font-size: 3rem;
          }
          .journey-so-far-container08 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-text09 {
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: justify;
            font-weight: 700;
            padding-left: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .journey-so-far-blog {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .journey-so-far-container09 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .journey-so-far-steps {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-text47 {
            color: var(--dl-color-gray-black);
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .journey-so-far-container10 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .journey-so-far-container11 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .journey-so-far-step {
            display: flex;
            padding: 24px;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-text48 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .journey-so-far-text50 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .journey-so-far-text51 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            margin-top: 24px;
            text-align: center;
          }
          .journey-so-far-step1 {
            display: flex;
            padding: 24px;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-text54 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .journey-so-far-text56 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .journey-so-far-text57 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            margin-top: 24px;
            text-align: center;
          }
          .journey-so-far-container12 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .journey-so-far-step2 {
            display: flex;
            padding: 24px;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-text60 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .journey-so-far-text62 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .journey-so-far-text63 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            margin-top: 24px;
            text-align: center;
          }
          .journey-so-far-step3 {
            display: flex;
            padding: 24px;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-text66 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .journey-so-far-text68 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .journey-so-far-text69 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            margin-top: 24px;
            text-align: center;
          }
          .journey-so-far-cta {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #692e4a;
          }
          .journey-so-far-container13 {
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
          .journey-so-far-container14 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .journey-so-far-image3 {
            width: 232px;
            opacity: 0.8;
            object-fit: cover;
          }
          .journey-so-far-image4 {
            width: 286px;
            height: 237px;
            opacity: 0.8;
            object-fit: cover;
            padding-right: 30px;
            padding-bottom: 19px;
          }
          .journey-so-far-container15 {
            width: 520px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .journey-so-far-image5 {
            top: -100px;
            left: auto;
            right: var(--dl-space-space-doubleunit);
            width: 232px;
            bottom: auto;
            opacity: 0.8;
            position: absolute;
            object-fit: cover;
          }
          .journey-so-far-image6 {
            top: auto;
            left: var(--dl-space-space-doubleunit);
            right: auto;
            width: 232px;
            bottom: -100px;
            opacity: 0.8;
            position: absolute;
            object-fit: cover;
          }
          .journey-so-far-footer {
            flex: 0 0 auto;
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .journey-so-far-container16 {
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
          .journey-so-far-link09 {
            display: contents;
          }
          .journey-so-far-image7 {
            width: 194px;
            height: 72px;
            object-fit: cover;
            text-decoration: none;
          }
          .journey-so-far-container17 {
            flex: 0 0 auto;
            width: auto;
            height: 72px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .journey-so-far-container18 {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .journey-so-far-link10 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .journey-so-far-link10:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-link11 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .journey-so-far-link11:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-link12 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .journey-so-far-link12:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-link13 {
            transition: 0.3s;
            white-space: nowrap;
            text-decoration: none;
          }
          .journey-so-far-link13:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-divider {
            width: 100%;
            height: 1px;
            opacity: 0.2;
            background-color: var(--dl-color-gray-white);
          }
          .journey-so-far-container19 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .journey-so-far-text74 {
            color: var(--dl-color-gray-300);
            margin-top: var(--dl-space-space-unit);
          }
          .journey-so-far-container20 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .journey-so-far-link14 {
            display: contents;
          }
          .journey-so-far-container21 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .journey-so-far-icon14 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .journey-so-far-icon14:hover {
            fill: var(--dl-color-purple-default);
          }
          .journey-so-far-link15 {
            display: contents;
          }
          .journey-so-far-container22 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .journey-so-far-icon16 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .journey-so-far-icon16:hover {
            fill: var(--dl-color-pink-default);
          }
          .journey-so-far-link16 {
            display: contents;
          }
          .journey-so-far-container23 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .journey-so-far-icon18 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .journey-so-far-icon18:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .journey-so-far-link17 {
            display: contents;
          }
          .journey-so-far-container24 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .journey-so-far-icon20 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .journey-so-far-icon20:hover {
            fill: var(--dl-color-orange-default);
          }
          @media (max-width: 1600px) {
            .journey-so-far-container {
              background-color: #f7f1f1;
            }
            .journey-so-far-image {
              top: -50px;
              left: -24px;
              width: 355px;
              height: 211px;
            }
            .journey-so-far-main {
              background-color: #ffecec;
            }
            .journey-so-far-blur-background {
              background-color: #ffecec;
            }
            .journey-so-far-hero1 {
              background-color: #f7f1f1;
            }
            .journey-so-far-text09 {
              font-style: normal;
              font-weight: 700;
            }
          }
          @media (max-width: 1200px) {
            .journey-so-far-link03 {
              font-weight: bold;
              text-decoration: none;
            }
            .journey-so-far-text09 {
              font-style: normal;
              font-weight: 700;
            }
          }
          @media (max-width: 991px) {
            .journey-so-far-image {
              top: -49px;
              left: 23px;
            }
            .journey-so-far-hero {
              height: auto;
              flex-direction: column;
            }
            .journey-so-far-text07 {
              text-align: center;
            }
            .journey-so-far-hero1 {
              flex-direction: column;
            }
            .journey-so-far-text08 {
              text-align: center;
            }
            .journey-so-far-container08 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .journey-so-far-text09 {
              text-align: center;
            }
            .journey-so-far-text47 {
              text-align: center;
            }
            .journey-so-far-text48 {
              text-align: center;
            }
            .journey-so-far-text50 {
              text-align: center;
            }
            .journey-so-far-text54 {
              text-align: center;
            }
            .journey-so-far-text56 {
              text-align: center;
            }
            .journey-so-far-text60 {
              text-align: center;
            }
            .journey-so-far-text62 {
              text-align: center;
            }
            .journey-so-far-text66 {
              text-align: center;
            }
            .journey-so-far-text68 {
              text-align: center;
            }
            .journey-so-far-container15 {
              display: none;
            }
            .journey-so-far-link11 {
              text-decoration: none;
            }
            .journey-so-far-link12 {
              text-decoration: none;
            }
          }
          @media (max-width: 767px) {
            .journey-so-far-image {
              top: -49px;
              left: 181px;
            }
            .journey-so-far-menu {
              display: none;
            }
            .journey-so-far-text07 {
              font-size: 50px;
              align-self: center;
              text-align: center;
            }
            .journey-so-far-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .journey-so-far-text09 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .journey-so-far-blog {
              padding-left: 32px;
              padding-right: 32px;
            }
            .journey-so-far-steps {
              padding-left: 32px;
              padding-right: 32px;
            }
            .journey-so-far-container10 {
              flex-direction: column;
            }
            .journey-so-far-step {
              padding: var(--dl-space-space-unit);
            }
            .journey-so-far-step1 {
              padding: var(--dl-space-space-unit);
            }
            .journey-so-far-step2 {
              padding: var(--dl-space-space-unit);
            }
            .journey-so-far-step3 {
              padding: var(--dl-space-space-unit);
            }
            .journey-so-far-container18 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .journey-so-far-container19 {
              flex-direction: column;
            }
            .journey-so-far-text74 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .journey-so-far-image {
              top: -9px;
              left: 89px;
              width: 288px;
              height: 119px;
            }
            .journey-so-far-bot {
              width: 100%;
            }
            .journey-so-far-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .journey-so-far-container08 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .journey-so-far-blog {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .journey-so-far-steps {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .journey-so-far-container11 {
              flex-direction: column;
            }
            .journey-so-far-container12 {
              flex-direction: column;
            }
            .journey-so-far-link11 {
              text-decoration: none;
            }
            .journey-so-far-link12 {
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default JourneySoFar
