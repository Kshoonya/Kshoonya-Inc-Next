import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import BlogPostCard2 from '../components/blog-post-card2'
import FeatureCard2 from '../components/feature-card2'

const AboutUs = (props) => {
  return (
    <>
      <div className="about-us-container">
        <Head>
          <title>About-us - Kshoonya Inc</title>
          <meta
            name="description"
            content="Kshoonya is an innovative technology company, specializes in developing products that focus on the independence and quality of life of those with disabilities."
          />
          <meta property="og:title" content="About-us - Kshoonya Inc" />
          <meta
            property="og:description"
            content="Kshoonya is revolutionizing the field of artificial intelligence. By utilizing cutting-edge technology and innovative designs."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2a3336f1-8248-49e6-89b7-0c16b08d546c/f9893b75-1135-4e18-a915-19ab4a0be01b?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div data-role="Header" className="about-us-header-container">
          <header className="about-us-header">
            <Link href="/">
              <a className="about-us-link">
                <img
                  alt="Kshoonya Company"
                  src="/new_design_full%203-400w.png"
                  className="about-us-image"
                />
              </a>
            </Link>
            <div className="about-us-menu">
              <Link href="/about-us">
                <a className="about-us-link01">About us</a>
              </Link>
              <Link href="/journey-so-far">
                <a className="about-us-link02">Journey So far</a>
              </Link>
              <Link href="/jobs">
                <a className="about-us-link03">Jobs</a>
              </Link>
              <a
                href="https://outlook.com/kshoonya.in"
                target="_blank"
                rel="noreferrer noopener"
                className="about-us-link04"
              >
                MyKshoonya
              </a>
              <svg viewBox="0 0 1024 1024" className="about-us-icon list">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <a
              href="https://www.linkedin.com/company/kshoonya/"
              target="_blank"
              rel="noreferrer noopener"
              className="about-us-link05"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="about-us-icon02"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
          </header>
          <div data-role="MobileMenu" className="about-us-mobile-menu">
            <div className="about-us-top">
              <div className="about-us-logo">
                <img
                  alt="image"
                  src="/logotype-dark.svg"
                  className="about-us-image01"
                />
              </div>
              <div data-role="CloseMobileMenu" className="about-us-close-menu">
                <svg viewBox="0 0 1024 1024" className="about-us-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="about-us-mid">
              <span className="about-us-text">About</span>
              <span className="about-us-text01">Products</span>
              <span className="about-us-text02">Pricing</span>
              <span className="about-us-text03">Blog</span>
              <span className="about-us-text04">Jobs</span>
              <span className="about-us-text05">More</span>
            </div>
            <div className="about-us-bot">
              <div className="about-us-container01">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-us-link06"
                >
                  <div className="about-us-container02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-us-icon06"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-us-link07"
                >
                  <div className="about-us-container03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-us-icon08"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-us-link08"
                >
                  <div className="about-us-container04">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="about-us-icon10"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-us-link09"
                >
                  <div className="about-us-container05">
                    <svg viewBox="0 0 1024 1024" className="about-us-icon12">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-hero">
          <h1 className="about-us-text06">About Us</h1>
          <h1 className="about-us-text07">Innovators. Dreamers.</h1>
        </div>
        <div className="about-us-main">
          <div className="about-us-blur-background"></div>
        </div>
        <div className="about-us-features">
          <h2 className="about-us-text08">
            <span className="about-us-text09">
              The word ‘Kshoonya’ is an ancient Sanskrit word that literally
              means ‘Zero’ number, but philosophically may be interpreted as the
              limitless presence of nothingness, which is necessary for anything
              and everything to exist. In mathematics, Kshoonya, by itself is
              nil, but when added to any other number, increases their value
              manifold. In digital world, Kshoonya is half of the binary system
              that is the essence of it all. In cosmology, over 99% of atoms,
              the universe and our existence is Kshoonya. All that to say - you
              can either be a small entity in the vast Kshoonya, or be the
              Kshoonya that creates &amp; surrounds all entities.
            </span>
            <br className="about-us-text10"></br>
            <br className="about-us-text11"></br>
            <span className="about-us-text12">
              For us, Kshoonya is an entity that wants to dedicate its efforts
              towards adding limitless value to everyday lives of the masses.
              Through Kshoonya, we want to create technologies &amp; products
              that fill the gaps in lives of people who have the potential &amp;
              means, but lack the tools.
            </span>
            <br className="about-us-text13"></br>
            <br className="about-us-text14"></br>
            <span className="about-us-text15">
              The initial spark of Kshoonya comes from an academician’s mind for
              his visually impaired, slowly-going-blind partner. As the thought
              converted to conversations, the idea slowly solidified into a
              plan.
            </span>
          </h2>
        </div>
        <div className="about-us-container06">
          <div className="about-us-container07"></div>
        </div>
        <div className="about-us-testimonial-card">
          <img
            alt="profile"
            src="/purple-circle.svg"
            className="about-us-image02"
          />
          <div className="about-us-testimonial">
            <span className="about-us-text16">
              <span>Harshit, Ph.D.</span>
              <br></br>
              <span>Founder &amp; Head of Engineering</span>
              <br></br>
            </span>
            <span className="about-us-text21">
              <span className="about-us-text22">
                Meet the brains behind Kshoonya, Harshit a highly experienced
                technology expert with an academic and professional background
                spanning nearly a decade in the fields of electrical
                engineering, data science, and machine learning. With a
                doctorate in the area of artificial intelligence, Harshit brings
                not only immense passion and self-motivation, but also a wealth
                of skills and professional experience to every project
                undertaken. Furthermore, his unique global perspective,
                developed from living and working in India, Taiwan, and the
                United States, makes him perfectly suited to think outside the
                box and deliver creative solutions.
              </span>
              <br className="about-us-text23"></br>
              <span className="about-us-text24">
                Email:harshit@kshoonya.com
              </span>
              <br className="about-us-text25"></br>
            </span>
          </div>
        </div>
        <div className="about-us-testimonial-card1">
          <img
            alt="profile"
            src="/circle-200h.png"
            className="about-us-image03"
          />
          <div className="about-us-testimonial1">
            <span className="about-us-text26">
              <span>Sakshi</span>
              <br></br>
              <span>Co-Founder/CEO</span>
              <br></br>
            </span>
            <span className="about-us-text31">
              <span>
                {' '}
                Introducing Sakshi, an inspiring social entrepreneur, Sakshi!
                She brings her expertise in organization building, team
                management, &amp; narrative building, along with a passion to
                help underprivileged communities and disabled individuals. With
                her unique ability to learn and achieve things without
                traditional means, Sakshi has crafted a team that can keep up
                with the ever-changing world and seize the endless opportunities
                available.
              </span>
              <br></br>
              <span className="about-us-text34">Email:sakshi@kshoonya.com</span>
            </span>
          </div>
        </div>
        <div className="about-us-testimonial-card2">
          <img
            alt="profile"
            src="/leftar-200h.png"
            className="about-us-image04"
          />
          <div className="about-us-testimonial2">
            <span className="about-us-text35">
              <span>Amit Kumar Bedaka, Ph.D.</span>
              <br></br>
              <span> Head of Design</span>
            </span>
            <span className="about-us-text39">
              <span>
                As an experienced technology expert with an academic and
                professional background in mechanical engineering, product
                design, and mechanical system design, Amit is well-equipped to
                develop innovative and practical solutions to complex problems.
                With a doctorate in the area of robotics and automation,
                including robotic system design and implementation, Amit brings
                a wealth of knowledge and experience to the table.
              </span>
              <br className="about-us-text41"></br>
              <span className="about-us-text42">Email:amit@kshoonya.com</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="about-us-testimonial-card3">
          <img
            alt="profile"
            src="/quote-mark.svg"
            className="about-us-image05"
          />
          <div className="about-us-testimonial3">
            <span className="about-us-text44">
              <span>Yogesh Gangotia</span>
              <br></br>
              <span> Business Developer</span>
            </span>
            <span className="about-us-text48">
              <span className="about-us-text49">
                Yogesh started his career as a narrative builder &amp; business
                developer. He is the founder and CEO of a digital development
                &amp; branding firm. His first venture is an extremely
                successful and thriving company today. In joining Kshoonya, he
                adds his entrepreneurial skills to the team capacity, along with
                the capacity of numerous teams - ranging from software
                development to branding &amp; digital marketing.
              </span>
              <br></br>
              <span className="about-us-text51">Email:yogesh@kshoonya.com</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="about-us-testimonial-card4">
          <div className="about-us-container08">
            <img alt="profile" src="/left.svg" className="about-us-image06" />
          </div>
          <div className="about-us-container09">
            <span className="about-us-text53">
              <span>Wen Yung Lee (Jorden)</span>
              <br></br>
              <span>Technology Consultant</span>
            </span>
            <span className="about-us-text57">
              <span className="about-us-text58">Technology Expert, Taiwan</span>
              <br></br>
              <span className="about-us-text60">Email:jorden@kshoonya.com</span>
              <br></br>
            </span>
          </div>
          <div className="about-us-testimonial4"></div>
        </div>
        <div className="about-us-steps">
          <h1 className="about-us-text62">Our Advisors</h1>
          <div className="about-us-banner">
            <div className="about-us-blog">
              <div className="about-us-container10">
                <img
                  alt="image"
                  src="/right%20arrow-300h.png"
                  className="about-us-image07"
                />
                <div className="about-us-container11">
                  <BlogPostCard2
                    label="Tech Advisor"
                    title="Ravi Sankar, Ph.D."
                    image_src="/right.svg"
                    description="Professor at University of South Florida"
                    profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                    rootClassName="rootClassName"
                  ></BlogPostCard2>
                </div>
              </div>
              <div className="about-us-container12">
                <img
                  alt="image"
                  src="/right.svg"
                  className="about-us-image08"
                />
                <div className="about-us-container13">
                  <BlogPostCard2
                    label="Advisor"
                    title="Ed Henkler"
                    image_src="/quote-mark.svg"
                    description="Founder of The Blind Guide  and helping Vetrans"
                    profile_src="/right.svg"
                    rootClassName="rootClassName2"
                    image_alt="Advisor Name"
                  ></BlogPostCard2>
                </div>
              </div>
              <div className="about-us-features1">
                <h1 className="about-us-text63">We’re Here to Help</h1>
                <span className="about-us-text64">
                  Quickly find out whether we have already addressed any
                  questions that may be on your mind. We welcome all inquiries
                  on matters big or small. If there is something that is on your
                  mind that we might not have covered, please get in touch with
                  us today! Kshoonya is here to help you in any and all
                  capacities.
                </span>
                <div className="about-us-features2">
                  <h1 className="about-us-text65">
                    <span>Frequently Asked Questions</span>
                    <br></br>
                    <span className="about-us-text68">
                      Please reach us at contact@kshoonya.com if you cannot find
                      an answer to your question.
                    </span>
                    <br></br>
                  </h1>
                  <div className="about-us-container14">
                    <FeatureCard2
                      title="HOW CAN I KNOW MORE ABOUT THE COMPANY?"
                      description="If you’re unable to find answers through the  website, feel free to reach us directly at contact@kshoonya.com and we will be happy to share more. "
                      rootClassName="rootClassName"
                    ></FeatureCard2>
                    <FeatureCard2
                      title="DO YOU HAVE INTERN POSITIONS?"
                      description="To explore the possibilities of funding and investment, you can reach out directly to the founders or email us at contact@kshoonya.com. "
                      rootClassName="rootClassName2"
                    ></FeatureCard2>
                    <FeatureCard2
                      title="HOW CAN I INVEST IN YOUR STARTUP?"
                      description="Yes, we are always keen to work with young and creative individuals like yourself. Kindly contact us at careers@kshoonya.com."
                      rootClassName="rootClassName3"
                    ></FeatureCard2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-us-heading">
            <h2 className="about-us-text70">Contact us</h2>
          </div>
          <div className="about-us-form">
            <div className="about-us-types"></div>
            <div className="about-us-inputs">
              <input
                type="text"
                placeholder="Name"
                autoComplete="name"
                className="input book-input"
              />
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="input book-input"
              />
              <input
                type="text"
                placeholder="Message"
                className="input book-input"
              />
              <div className="about-us-lower">
                <div className="about-us-button">
                  <button className="about-us-book button button-main">
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-cta">
          <div className="about-us-container15">
            <div className="about-us-container16">
              <img
                alt="image"
                src="/Pictures/Extras/dall%C2%B7e%202023-04-05%2022.21.59%20-%20a%20%20man%20walking%20and%20wearing%20smart%20shoes%20and%20connected%20to%20an%20mobile%20app-300w.png"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="about-us-image09"
              />
              <img
                alt="image"
                src="/Pictures/Extras/dall%C2%B7e%202023-04-05%2022.23.36%20-%20a%20%20man%20walking%20and%20wearing%20smart%20shoes%20and%20connected%20to%20a%20mobile%20app%2C%20and%20helps%20to%20reach%20destination-300h.png"
                className="about-us-image10"
              />
            </div>
            <div className="about-us-container17">
              <img
                alt="image"
                src="/Pictures/First/_3a1e396a-8fc7-404a-8251-91dc346d23e4-1200w.jpeg"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="about-us-image11"
              />
              <img
                alt="image"
                src="/Pictures/Extras/_12f666b0-d77f-4988-a2d4-86fdca45e463-300w.jpeg"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="about-us-image12"
              />
            </div>
          </div>
        </div>
        <div className="about-us-footer">
          <Link href="/">
            <a className="about-us-link10">
              <img
                alt="image"
                src="/new_design_full%203-400w.png"
                loading="lazy"
                className="about-us-image13"
              />
            </a>
          </Link>
          <footer className="about-us-container18">
            <div className="about-us-container19">
              <div className="about-us-container20">
                <div className="about-us-container21">
                  <Link href="/jobs">
                    <a className="about-us-link11">Careers</a>
                  </Link>
                  <Link href="/about-us">
                    <a className="about-us-link12">About us</a>
                  </Link>
                  <Link href="/journey-so-far">
                    <a className="about-us-link13">Journey</a>
                  </Link>
                  <Link href="/privacy-policy">
                    <a className="about-us-link14">Privacy Policy</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="about-us-divider"></div>
            <div className="about-us-container22">
              <span className="about-us-text72 Body2">
                © 2023 Kshoonya Inc. All rights reserved
              </span>
              <div className="about-us-container23">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-us-link15"
                >
                  <div className="about-us-container24">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-us-icon14"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-us-link16"
                >
                  <div className="about-us-container25">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-us-icon16"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-us-link17"
                >
                  <div className="about-us-container26">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="about-us-icon18"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-us-link18"
                >
                  <div className="about-us-container27">
                    <svg viewBox="0 0 1024 1024" className="about-us-icon20">
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
          .about-us-container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #f7f1f1;
          }
          .about-us-header-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .about-us-header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: relative;
            max-width: 1110px;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-end;
          }
          .about-us-link {
            display: contents;
          }
          .about-us-image {
            top: -37px;
            left: 16px;
            width: 343px;
            height: 183px;
            position: absolute;
            object-fit: cover;
            text-decoration: none;
          }
          .about-us-menu {
            left: 440px;
            bottom: -25px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: row;
          }
          .about-us-link01 {
            transition: 0.3s;
            font-weight: bold;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .about-us-link01:hover {
            color: var(--dl-color-turquoise-default);
          }
          .about-us-link02 {
            transition: 0.3s;
            font-weight: bold;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .about-us-link02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .about-us-link03 {
            transition: 0.3s;
            font-weight: bold;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .about-us-link03:hover {
            color: var(--dl-color-turquoise-default);
          }
          .about-us-link04 {
            transition: 0.3s;
            font-weight: bold;
            text-decoration: none;
          }
          .about-us-link04:hover {
            color: var(--dl-color-turquoise-default);
          }
          .about-us-icon {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .about-us-link05 {
            display: contents;
          }
          .about-us-icon02 {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .about-us-mobile-menu {
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
          .about-us-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-logo {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-image01 {
            width: 100px;
            object-fit: cover;
          }
          .about-us-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-icon04 {
            width: 24px;
            height: 24px;
          }
          .about-us-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-text {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-text:hover {
            color: var(--dl-color-turquoise-default);
          }
          .about-us-text01 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-text01:hover {
            color: var(--dl-color-turquoise-default);
          }
          .about-us-text02 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-text02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .about-us-text03 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-text03:hover {
            color: var(--dl-color-turquoise-default);
          }
          .about-us-text04 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-text04:hover {
            color: var(--dl-color-turquoise-default);
          }
          .about-us-text05 {
            transition: 0.3s;
          }
          .about-us-text05:hover {
            color: var(--dl-color-turquoise-default);
          }
          .about-us-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-container01 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .about-us-link06 {
            display: contents;
          }
          .about-us-container02 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .about-us-icon06 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .about-us-icon06:hover {
            fill: var(--dl-color-purple-default);
          }
          .about-us-link07 {
            display: contents;
          }
          .about-us-container03 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .about-us-icon08 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .about-us-icon08:hover {
            fill: var(--dl-color-pink-default);
          }
          .about-us-link08 {
            display: contents;
          }
          .about-us-container04 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .about-us-icon10 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .about-us-icon10:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .about-us-link09 {
            display: contents;
          }
          .about-us-container05 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .about-us-icon12 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .about-us-icon12:hover {
            fill: var(--dl-color-orange-default);
          }
          .about-us-hero {
            width: 100%;
            height: 388px;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: relative;
            max-width: 1110px;
            transition: 0.3s;
            flex-direction: column;
            justify-content: center;
          }

          .about-us-text06 {
            font-size: 72px;
            align-self: center;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .about-us-text07 {
            font-size: 72px;
            align-self: center;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .about-us-main {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-us-blur-background {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            filter: blur(60px);
            height: 70vh;
            display: none;
            position: absolute;
            align-items: center;
            flex-direction: column;
            background-color: #ffecec;
          }
          .about-us-features {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-us-text08 {
            color: var(--dl-color-gray-900);
            font-size: 16px;
            font-style: normal;
            font-family: Inter;
            font-weight: 400;
            text-transform: none;
            text-decoration: none;
          }
          .about-us-container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .about-us-container07 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-testimonial-card {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            justify-content: space-between;
          }
          .about-us-image02 {
            width: 196px;
            height: 192px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-us-testimonial {
            display: flex;
            align-items: flex-start;
            margin-right: 48px;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-text16 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .about-us-text21 {
            font-size: 1.15rem;
            align-self: flex-start;
            text-align: justify;
            margin-bottom: 32px;
          }
          .about-us-text22 {
            color: #595959;
          }
          .about-us-text23 {
            color: #595959;
          }
          .about-us-text24 {
            font-weight: 700;
          }
          .about-us-text25 {
            color: #595959;
          }
          .about-us-testimonial-card1 {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            justify-content: space-between;
          }
          .about-us-image03 {
            width: 192px;
            height: 192px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-us-testimonial1 {
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-right: 48px;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-text26 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .about-us-text31 {
            color: rgb(89, 89, 89);
            font-size: 1.15rem;
            text-align: justify;
            margin-bottom: 32px;
          }
          .about-us-text34 {
            font-weight: 700;
          }
          .about-us-testimonial-card2 {
            width: 1399px;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            padding-left: 48px;
            justify-content: space-between;
          }
          .about-us-image04 {
            width: 195px;
            height: 196px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-us-testimonial2 {
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-right: 425px;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-text35 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .about-us-text39 {
            color: rgb(89, 89, 89);
            font-size: 1.15rem;
            margin-bottom: 32px;
          }
          .about-us-text42 {
            font-weight: 700;
          }
          .about-us-testimonial-card3 {
            width: 1399px;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            padding-left: 48px;
            justify-content: space-between;
          }
          .about-us-image05 {
            width: 195px;
            height: 196px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-us-testimonial3 {
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-right: 425px;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-text44 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .about-us-text48 {
            color: rgb(89, 89, 89);
            font-size: 1.15rem;
            margin-bottom: 32px;
          }
          .about-us-text51 {
            font-weight: 700;
          }
          .about-us-testimonial-card4 {
            width: 1398px;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            justify-content: space-between;
          }
          .about-us-container08 {
            flex: 0 0 auto;
            width: 192px;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .about-us-image06 {
            width: 192px;
            height: 192px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-us-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .about-us-text53 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .about-us-text57 {
            color: rgb(89, 89, 89);
            font-size: 1.15rem;
            margin-bottom: 32px;
          }
          .about-us-text60 {
            font-weight: 700;
          }
          .about-us-testimonial4 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            margin-right: 48px;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-steps {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
          }
          .about-us-text62 {
            color: var(--dl-color-gray-black);
            font-size: 3rem;
          }
          .about-us-banner {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 64px;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: 64px;
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDB8fHx8MTYyNjE4NDA0Mg&ixlib=rb-1.2.1&w=1400');
            background-position: center;
          }
          .about-us-blog {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-container10 {
            flex: 0 0 auto;
            width: 723px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .about-us-image07 {
            width: 200px;
            object-fit: cover;
          }
          .about-us-container11 {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .about-us-image08 {
            width: 200px;
            object-fit: cover;
          }
          .about-us-container13 {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-features1 {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
          }
          .about-us-text63 {
            font-size: 3rem;
            margin-bottom: 32px;
          }
          .about-us-text64 {
            color: #252529;
            width: 70%;
            font-size: 1.15rem;
            text-align: justify;
          }
          .about-us-features2 {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            flex-direction: column;
          }
          .about-us-text65 {
            font-size: 3rem;
            margin-bottom: 48px;
          }
          .about-us-text68 {
            font-size: 1rem;
            font-weight: 400;
          }
          .about-us-container14 {
            width: 100%;
            display: grid;
            grid-gap: 32px;
            grid-template-columns: 1fr 1fr;
          }
          .about-us-heading {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .about-us-text70 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .about-us-form {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-types {
            gap: var(--dl-space-space-unit1);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .about-us-inputs {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-lower {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-us-button {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-us-book {
            width: 100%;
          }
          .about-us-cta {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #692e4a;
          }
          .about-us-container15 {
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
          .about-us-container16 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .about-us-image09 {
            width: 232px;
            opacity: 0.8;
            object-fit: cover;
          }
          .about-us-image10 {
            width: 286px;
            height: 237px;
            opacity: 0.8;
            object-fit: cover;
            padding-right: 30px;
            padding-bottom: 19px;
          }
          .about-us-container17 {
            width: 520px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .about-us-image11 {
            top: -100px;
            left: auto;
            right: var(--dl-space-space-doubleunit);
            width: 232px;
            bottom: auto;
            opacity: 0.8;
            position: absolute;
            object-fit: cover;
          }
          .about-us-image12 {
            top: auto;
            left: var(--dl-space-space-doubleunit);
            right: auto;
            width: 232px;
            bottom: -100px;
            opacity: 0.8;
            position: absolute;
            object-fit: cover;
          }
          .about-us-footer {
            flex: 0 0 auto;
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-black);
          }
          .about-us-link10 {
            display: contents;
          }
          .about-us-image13 {
            width: 204px;
            height: 78px;
            object-fit: cover;
            text-decoration: none;
          }
          .about-us-container18 {
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
          .about-us-container19 {
            flex: 0 0 auto;
            width: auto;
            height: 72px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .about-us-container20 {
            flex: 0 0 auto;
            width: auto;
            height: 72px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .about-us-container21 {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .about-us-link11 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-us-link11:hover {
            color: var(--dl-color-turquoise-default);
          }
          .about-us-link12 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-us-link12:hover {
            color: var(--dl-color-turquoise-default);
          }
          .about-us-link13 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-us-link13:hover {
            color: var(--dl-color-turquoise-default);
          }
          .about-us-link14 {
            transition: 0.3s;
            white-space: nowrap;
            text-decoration: none;
          }
          .about-us-link14:hover {
            color: var(--dl-color-turquoise-default);
          }
          .about-us-divider {
            width: 100%;
            height: 1px;
            opacity: 0.2;
            background-color: var(--dl-color-gray-white);
          }
          .about-us-container22 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-text72 {
            color: var(--dl-color-gray-300);
            margin-top: var(--dl-space-space-unit);
          }
          .about-us-container23 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .about-us-link15 {
            display: contents;
          }
          .about-us-container24 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .about-us-icon14 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .about-us-icon14:hover {
            fill: var(--dl-color-purple-default);
          }
          .about-us-link16 {
            display: contents;
          }
          .about-us-container25 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .about-us-icon16 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .about-us-icon16:hover {
            fill: var(--dl-color-pink-default);
          }
          .about-us-link17 {
            display: contents;
          }
          .about-us-container26 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .about-us-icon18 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .about-us-icon18:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .about-us-link18 {
            display: contents;
          }
          .about-us-container27 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .about-us-icon20 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .about-us-icon20:hover {
            fill: var(--dl-color-orange-default);
          }
          @media (max-width: 1600px) {
            .about-us-container {
              background-color: #f7f1f1;
            }
            .about-us-image {
              top: -37px;
              left: -27px;
              width: 343px;
              height: 183px;
            }
            .about-us-hero {
              width: 1371px;
              height: 430px;
              text-align: justify;
            }
            .about-us-text06 {
              width: 338px;
              align-self: center;
            }
            .about-us-blur-background {
              background-color: #ffecec;
            }
            .about-us-text08 {
              text-align: justify;
            }
            .about-us-testimonial2 {
              margin-right: 425px;
            }
            .about-us-testimonial3 {
              margin-right: 425px;
            }
          }
          @media (max-width: 1200px) {
            .about-us-container {
              background-color: #f7f1f1;
            }
            .about-us-image {
              top: -40px;
              left: 25px;
            }
            .about-us-link04 {
              font-weight: bold;
              text-decoration: none;
            }
            .about-us-hero {
              height: 293px;
            }
            .about-us-text07 {
              font-size: 72px;
              align-self: center;
            }
            .about-us-text08 {
              color: var(--dl-color-gray-900);
              font-size: 16px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
              text-transform: none;
              text-decoration: none;
            }
            .about-us-text31 {
              color: rgb(89, 89, 89);
              font-size: 1.15rem;
            }
            .about-us-text34 {
              font-weight: 700;
            }
            .about-us-image04 {
              margin-left: 100px;
            }
            .about-us-testimonial2 {
              flex: 1;
              width: 874px;
              margin-right: 425px;
            }
            .about-us-text35 {
              font-size: 1.5rem;
            }
            .about-us-text39 {
              color: rgb(89, 89, 89);
              font-size: 1.15rem;
              align-self: flex-end;
              text-align: left;
            }
            .about-us-text41 {
              font-weight: 700;
            }
            .about-us-text42 {
              font-weight: 700;
            }
            .about-us-image05 {
              margin-left: 100px;
            }
            .about-us-testimonial3 {
              width: 793px;
              flex-wrap: wrap;
              align-items: flex-start;
              margin-right: 425px;
            }
            .about-us-text44 {
              font-size: 1.5rem;
            }
            .about-us-text48 {
              color: rgb(89, 89, 89);
              font-size: 1.15rem;
              align-self: center;
              text-align: justify;
            }
            .about-us-text51 {
              font-weight: 700;
            }
            .about-us-image06 {
              align-self: flex-start;
              margin-left: 100px;
              margin-right: 0px;
            }
            .about-us-text53 {
              font-size: 1.5rem;
            }
            .about-us-text57 {
              color: rgb(89, 89, 89);
            }
            .about-us-text60 {
              font-weight: 700;
            }
            .about-us-steps {
              background-color: #f7f1f1;
            }
            .about-us-image07 {
              height: 242px;
            }
            .about-us-image08 {
              height: 242px;
            }
          }
          @media (max-width: 991px) {
            .about-us-image {
              top: -40px;
              left: 46px;
            }
            .about-us-hero {
              height: auto;
              flex-direction: column;
              background-color: ##ffecec;
            }
            .about-us-text06 {
              align-self: center;
              text-align: center;
            }
            .about-us-text07 {
              align-self: center;
              text-align: center;
            }
            .about-us-blur-background {
              display: none;
            }
            .about-us-text08 {
              color: var(--dl-color-gray-900);
              font-size: 16px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
              text-transform: none;
              text-decoration: none;
            }
            .about-us-image04 {
              margin-left: 210px;
            }
            .about-us-testimonial2 {
              margin-right: 420px;
            }
            .about-us-image05 {
              margin-left: 210px;
            }
            .about-us-testimonial3 {
              margin-right: 420px;
            }
            .about-us-image06 {
              margin-left: 210px;
            }
            .about-us-text62 {
              text-align: center;
            }
            .about-us-text63 {
              text-align: center;
            }
            .about-us-text64 {
              text-align: center;
            }
            .about-us-container17 {
              display: none;
            }
            .about-us-link12 {
              text-decoration: none;
            }
            .about-us-link13 {
              text-decoration: none;
            }
          }
          @media (max-width: 767px) {
            .about-us-image {
              top: -15px;
              left: 192px;
            }
            .about-us-menu {
              display: none;
            }
            .about-us-text06 {
              font-size: 50px;
              align-self: center;
              text-align: center;
            }
            .about-us-text07 {
              font-size: 50px;
              align-self: center;
              text-align: center;
            }
            .about-us-text08 {
              color: var(--dl-color-gray-900);
            }
            .about-us-text09 {
              font-size: 16px;
            }
            .about-us-text10 {
              font-size: 16px;
            }
            .about-us-text11 {
              font-size: 40px;
            }
            .about-us-text12 {
              font-size: 16px;
            }
            .about-us-text13 {
              font-size: 16px;
            }
            .about-us-text14 {
              font-size: 40px;
            }
            .about-us-text15 {
              font-size: 16px;
            }
            .about-us-testimonial-card {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-us-testimonial {
              margin-right: 32px;
            }
            .about-us-testimonial-card1 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-us-testimonial1 {
              margin-right: 32px;
            }
            .about-us-testimonial-card2 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-us-image04 {
              margin-left: 325px;
            }
            .about-us-testimonial2 {
              width: auto;
              height: auto;
              margin-left: 0px;
              margin-right: 425px;
            }
            .about-us-text39 {
              align-self: flex-start;
            }
            .about-us-testimonial-card3 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-us-image05 {
              margin-left: 325px;
            }
            .about-us-testimonial3 {
              width: auto;
              margin-left: 0px;
              margin-right: 425px;
            }
            .about-us-text48 {
              align-self: flex-start;
            }
            .about-us-testimonial-card4 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-us-image06 {
              align-self: center;
              margin-left: 0px;
              margin-right: -650px;
            }
            .about-us-testimonial4 {
              margin-right: 32px;
            }
            .about-us-steps {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-us-banner {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-us-blog {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-us-features1 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-us-text63 {
              text-align: center;
            }
            .about-us-features2 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-us-container14 {
              grid-template-columns: 1fr;
            }
            .about-us-heading {
              gap: var(--dl-space-space-unit);
            }
            .about-us-text70 {
              font-size: 24px;
            }
            .about-us-form {
              gap: var(--dl-space-space-threeunits);
            }
            .about-us-types {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .about-us-inputs {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .about-us-container21 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .about-us-container22 {
              flex-direction: column;
            }
            .about-us-text72 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .about-us-header {
              padding-right: 2rem;
            }
            .about-us-image {
              top: 10px;
              left: 78px;
              width: 336px;
              height: 173px;
              padding-bottom: 80px;
            }
            .about-us-bot {
              width: 100%;
            }
            .about-us-text06 {
              width: 351px;
              font-size: 40px;
              align-self: center;
            }
            .about-us-text07 {
              font-size: 40px;
              align-self: center;
              margin-right: 0px;
            }
            .about-us-text08 {
              color: var(--dl-color-gray-900);
              font-size: 16px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              text-transform: none;
              text-decoration: none;
            }
            .about-us-text09 {
              text-align: center;
            }
            .about-us-text11 {
              text-align: center;
            }
            .about-us-text12 {
              text-align: center;
            }
            .about-us-text14 {
              text-align: center;
            }
            .about-us-text15 {
              text-align: center;
            }
            .about-us-testimonial-card {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: 32px;
            }
            .about-us-testimonial {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-us-text16 {
              text-align: center;
            }
            .about-us-text21 {
              text-align: left;
            }
            .about-us-text22 {
              text-align: left;
            }
            .about-us-testimonial-card1 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: 32px;
            }
            .about-us-testimonial1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-us-text26 {
              text-align: center;
            }
            .about-us-text31 {
              text-align: left;
            }
            .about-us-testimonial-card2 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: 32px;
            }
            .about-us-image04 {
              margin-right: 325px;
            }
            .about-us-testimonial2 {
              position: relative;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-us-text35 {
              text-align: center;
            }
            .about-us-text39 {
              color: rgb(89, 89, 89);
              width: auto;
              font-size: 1.15rem;
              min-width: auto;
              align-self: flex-start;
              text-align: left;
              border-color: var(--dl-color-gray-900);
              border-width: 1px;
            }
            .about-us-text42 {
              font-weight: 700;
            }
            .about-us-testimonial-card3 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: 32px;
            }
            .about-us-image05 {
              margin-right: 325px;
            }
            .about-us-testimonial3 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-us-text44 {
              text-align: center;
            }
            .about-us-text48 {
              color: rgb(89, 89, 89);
              font-size: 1.15rem;
              align-self: center;
              text-align: left;
            }
            .about-us-text49 {
              text-align: left;
            }
            .about-us-text51 {
              font-weight: 700;
            }
            .about-us-testimonial-card4 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: 32px;
            }
            .about-us-image06 {
              margin-left: 450px;
              margin-right: 450px;
            }
            .about-us-container09 {
              align-self: center;
            }
            .about-us-text53 {
              text-align: center;
            }
            .about-us-text57 {
              align-self: flex-start;
              text-align: left;
            }
            .about-us-text58 {
              text-align: left;
            }
            .about-us-testimonial4 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-us-steps {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .about-us-banner {
              padding-top: 48px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 48px;
            }
            .about-us-blog {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .about-us-features1 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .about-us-features2 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .about-us-types {
              flex-direction: column;
            }
            .about-us-link12 {
              text-decoration: none;
            }
            .about-us-link13 {
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
