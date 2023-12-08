import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import PrimaryButton from '../components/primary-button'
import FeatureCard from '../components/feature-card'
import TestimonialsCard from '../components/testimonials-card'
import FeatureCard4 from '../components/feature-card4'
import GalleryCard11 from '../components/gallery-card11'
import BlogPostCard1 from '../components/blog-post-card1'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Kshoonya Inc</title>
          <meta
            name="description"
            content="Kshoonya is an innovative technology company, specializes in developing products that focus on the independence and quality of life of those with disabilities."
          />
          <meta property="og:title" content="Kshoonya Inc" />
          <meta
            property="og:description"
            content="Kshoonya is revolutionizing the field of artificial intelligence. By utilizing cutting-edge technology and innovative designs."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2a3336f1-8248-49e6-89b7-0c16b08d546c/f9893b75-1135-4e18-a915-19ab4a0be01b?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div data-role="Header" className="home-header-container">
          <header className="home-header">
            <Link href="/">
              <a className="home-link">
                <img
                  alt="Kshoonya Company Name"
                  src="/new_design_full%203-400w.png"
                  loading="eager"
                  className="home-image"
                />
              </a>
            </Link>
            <div className="home-logo"></div>
            <div className="home-menu">
              <Link href="/about-us">
                <a className="home-link01">About us</a>
              </Link>
              <Link href="/journey-so-far">
                <a className="home-link02">Journey So far</a>
              </Link>
              <Link href="/jobs">
                <a className="home-link03">Jobs</a>
              </Link>
              <a
                href="https://outlook.com/kshoonya.in"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link04"
              >
                MyKshoonya
              </a>
              <svg viewBox="0 0 1024 1024" className="home-icon list">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
              <a
                href="https://www.linkedin.com/company/kshoonya/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link05"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon02"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
              </a>
            </div>
          </header>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-top">
              <div className="home-logo1">
                <img
                  alt="image"
                  src="/logotype-dark.svg"
                  className="home-image01"
                />
              </div>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-mid">
              <span className="home-text">About</span>
              <span className="home-text01">Products</span>
              <span className="home-text02">Pricing</span>
              <span className="home-text03">Blog</span>
              <span className="home-text04">Jobs</span>
              <span className="home-text05">More</span>
            </div>
            <div className="home-bot">
              <div className="home-container01">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link06"
                >
                  <div className="home-container02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon06"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link07"
                >
                  <div className="home-container03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon08"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link08"
                >
                  <div className="home-container04">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon10"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link09"
                >
                  <div className="home-container05">
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-main">
          <div className="home-blur-background"></div>
          <div className="home-hero">
            <div className="home-container06">
              <h1 className="home-text06">
                <span>
                  Access – Right,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  not a privilege
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </h1>
              <Link href="/journey-so-far">
                <a className="home-link10">
                  <PrimaryButton
                    button="Dream with Kshoonya – unleash your potential"
                    className="home-component"
                  ></PrimaryButton>
                </a>
              </Link>
            </div>
            <img
              alt="A young fit man is walking outdoor. His background is blurred and there are trees in the distance behind him. The image is is taken from his left side at approximately 45 degrees angle.  HE has tanned skin, dark hair &amp; light growth of facial hair. He is midstride &amp; looking downwards. Wearing a half sleeved, round neck grey t-shirt and dark trousers of ankle length. Also wearing a watch on his right hand and light blue sport shoes while white wired earphones are plugged in his ears. Also wearing dark glasses with reddish frame."
              src="/Pictures/First/_ca4a1961-f5eb-4cb5-a9a4-621c4ceda0f3-600h.jpeg"
              loading="eager"
              className="home-image02"
            />
          </div>
          <img
            alt="image"
            src="/turquoise-circle.svg"
            className="home-turquoise-cirble"
          />
        </div>
        <div className="home-features">
          <h2 className="home-text11">Our Values</h2>
          <Link href="/about-us">
            <a className="home-link11">Learn more about us</a>
          </Link>
          <div className="home-features1">
            <FeatureCard
              text="All our designs are user-POV led "
              card_title="User-Led Solutions"
            ></FeatureCard>
            <FeatureCard
              text="As easy as wearing a watch "
              image_src="/02.svg"
              card_title="Access should be easy "
            ></FeatureCard>
            <FeatureCard
              text="Access is for everyone "
              image_src="/03.svg"
              card_title="Affordability"
            ></FeatureCard>
            <FeatureCard
              text="We deserve the benefits of latest technology "
              image_src="/04.svg"
              card_title="Leveraging latest tech "
            ></FeatureCard>
            <FeatureCard
              text="Evolving with user needs "
              image_src="/05.svg"
              card_title=" Intelligent Solutions"
            ></FeatureCard>
            <FeatureCard
              text="Let’s not sacrifice our sense of sound anymore "
              image_src="/06.svg"
              card_title="Shifting towards haptics"
            ></FeatureCard>
          </div>
          <div id="Read more" className="home-banner">
            <h1 className="home-text12">Our Mission</h1>
            <span className="home-text13">
              <span>
                Dedicate efforts towards adding limitless value to everyday
                lives of the masses. Through Kshoonya, we want to create
                technologies &amp; products that fill the gaps in lives of
                people who have the potential &amp; means, but lack the tools.
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
            <Link href="/about-us" name="About our organization mission">
              <a className="home-link12 button">Learn more about our mission</a>
            </Link>
          </div>
        </div>
        <div className="home-testimonials">
          <div className="home-container07">
            <div className="home-container08">
              <h1 className="home-text16">
                Vision Band
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <div className="home-container09">
                <div className="home-container10">
                  <span className="home-text17">
                    Our flagship product
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <div className="home-container11">
                    <TestimonialsCard
                      text="Keep your hands free for more important things.    Wearable bands which go around the ankles. Extremely comfortable and easy to use. You will forget it’s even there! "
                      text1="Wearable, comfortable and easy to use "
                      text2="Product design"
                      image_alt="Mobility and navigation"
                      image_src="/logo-4.svg"
                      image_alt1="Symbol for Statement"
                      rootClassName="testimonials-card-root-class-name"
                    ></TestimonialsCard>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-container12">
              <div className="home-container13">
                <TestimonialsCard
                  src="/logo-1.svg"
                  text="Get all the information required to make walking related decisions,    Not just obstacle detection, but recognition. Not just outdoor, but indoor navigation. "
                  text1="All the critical information is sensed and shared "
                  text2="Comprehensive solution "
                  image_alt="AI-powered support"
                  image_src="/logo-1.svg"
                  image_alt1="Symbol for Statement"
                ></TestimonialsCard>
              </div>
              <div className="home-container14">
                <TestimonialsCard
                  text="You can choose haptics to be the primary feedback system. We know how precious our sense of sound is and would rather be used to be present in the moment. "
                  text1="Enhancing the senses, rather than restricting them "
                  text2="Haptic + Audio feedback "
                  image_alt="Automation and integration"
                  image_src="/logo-2.svg"
                  image_alt1="symbol for statement"
                ></TestimonialsCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-features2">
          <h1 className="home-text18">Features and Benefits</h1>
          <div className="home-separator"></div>
          <div className="home-container15">
            <img
              alt="Picture is of a young woman walking toward right of the frame. Image is from her right side at an angle. She is midstride and looking downwards.  She has long straight black hair worn in a high ponytail. Looking athletic in her Yellow halter top, black calf length slacks &amp; colourful sport shoes. She is wearing big dark glasses. She is walking on the street, with a blurred background of trees in the distance, parallel to the road. "
              src="/Pictures/First/_a44f30b0-445a-4963-8d0e-b5d74b59a155-500h.jpeg"
              loading="lazy"
              className="home-image03"
            />
            <div className="home-container16">
              <FeatureCard4
                title="Accessibility"
                description="Breaking barriers and fostering inclusivity by designing user-friendly technology that adapts to the diverse needs of individuals."
                rootClassName="rootClassName1"
              ></FeatureCard4>
              <FeatureCard4
                title="Empowerment"
                description="Enabling independence and boosting confidence by providing cutting-edge solutions that amplify the capabilities of community members and people with disabilities."
                rootClassName="rootClassName4"
              ></FeatureCard4>
              <FeatureCard4
                title="Innovation"
                description="Pioneering transformative technologies that reimagine everyday life, driving positive change and enhancing the experiences of individuals across the spectrum."
                rootClassName="rootClassName3"
              ></FeatureCard4>
              <FeatureCard4
                title="Inclusivity"
                description="Embrace a design philosophy that caters to diverse needs, promoting a sense of belonging for all. Our cutting-edge technology prioritizes inclusivity, enriching the lives of community members and disabled people alike.."
                rootClassName="rootClassName2"
              ></FeatureCard4>
            </div>
          </div>
        </div>
        <div className="home-hero1">
          <div className="home-container17">
            <h1 className="home-text19">Possibilities are endless</h1>
            <span className="home-text20">
              <span>
                Kshoonya is creating projects with the potential to greatly
                enhance the lives of people everywhere. Learn more about our
                projects and how we are changing the game in AI today!
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
          <img
            alt="The image is of a young woman wearing white top &amp; heavy dark glasses. The image shows her partially from middle of her dark glasses to upper chest. Take from front of the person, the girl is reaching out her hands in the air, as if searching for something she cant see. Her left hand is completely stretched out and close to the camera lens, while her right hand is still near her right shoulder.  She has long dark wavy hair and is looking slightly upwards."
            src="/external/image-uuox-1200w.jpeg"
            loading="lazy"
            className="home-image04"
          />
        </div>
        <div className="home-container18">
          <div className="home-container19"></div>
        </div>
        <div className="home-gallery">
          <GalleryCard11
            title="Dream"
            subtitle="We dream of a world where every disabled individual has same level of access to opportunities &amp; the world around them as any other able person."
            image_alt=". The image hold an older boy wearing dark glasses, looking upwards and smiling to himself. He is sitting in blue polo t-shirt &amp; brown trousers, while the image is taken from front. His mouth is slightly open with front teeth showing. He is brown skinned.In his background are blurred bright spots of lights . The image has a filter of partially transparent red wide streak going from left to right of the image.."
            image_src="/Pictures/Dream.Support.innovate/_2c7cb96e-7c41-4972-8046-9594a3e1e62a-1500h.jpeg"
            rootClassName="rootClassName"
          ></GalleryCard11>
          <GalleryCard11
            title="Innovate"
            subtitle="Kshoonya’s revolutionary technology leverages a combination of AI and sensors to provide an unparalleled level of mobility and navigation."
            image_alt="this image shows 5 individuals standing in a semi circle around a table. Image is taken from front and shows the people partially. The top half of the image, which is above all their heads, shows large sketches of a light bulb, screws, hinges and puzzle pieces. The image is trying to depict brainstorming. Description of people from left to right - side angle of a partly visible man holding a book &amp; showing it to the girl on his left; a girl in dark top and middle parted long straight hair is smiling widely looking downwards at the book; a man wearing reading glasses and white shirt is also smiling looking at the book, he is half crouching and sporting facial hair; a smiling girl in dark glasses and white shirt is reaching out her hand to the book, her left profile is partially visible."
            image_src="/Pictures/Dream.Support.innovate/_1f13f0ed-a9f1-48d0-8b5e-324b7b7fb17e-1500h.jpeg"
            rootClassName="rootClassName1"
          ></GalleryCard11>
          <GalleryCard11
            title="Support"
            subtitle="By pushing boundaries of what’s possible &amp; striving to build the most advance technologies, we support disabled individuals in accessing their maximum potential."
            image_alt="the image shows a close up of 2 hands. They seem to be of 2 different people standing about a feet apart.For stereotypical reasons, one hand seems to be of a man and the other of a woman."
            image_src="/Pictures/Dream.Support.innovate/_e94549ba-5630-4a66-854b-3652db50d574-1500h.jpeg"
            rootClassName="rootClassName5"
          ></GalleryCard11>
        </div>
        <div className="home-steps">
          <h1 className="home-text25">Discover the Process</h1>
          <span className="home-text26">
            <span>Unveiling the Journey from Concept to Reality</span>
            <br></br>
          </span>
          <div className="home-container20">
            <div className="home-step">
              <div className="home-container21">
                <div className="home-line"></div>
                <div className="home-container22">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                  </svg>
                </div>
                <div className="home-line1"></div>
              </div>
              <div className="home-container23">
                <h1 className="home-text29">
                  <span>Ideate</span>
                </h1>
                <span className="home-text31">
                  Embodies the process of generating, developing, and
                  communicating innovative ideas
                </span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-container24">
                <div className="home-line2"></div>
                <div className="home-container25">
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                  </svg>
                </div>
                <div className="home-line3"></div>
              </div>
              <div className="home-container26">
                <h1 className="home-text32">Design</h1>
                <span className="home-text33">
                  <span>
                    Effective solutions tailored to meet the unique needs of
                    individuals, communities, and industries
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-container27">
                <div className="home-line4"></div>
                <div className="home-container28">
                  <svg viewBox="0 0 1024 1024" className="home-icon18">
                    <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                    <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                  </svg>
                </div>
                <div className="home-line5"></div>
              </div>
              <div className="home-container29">
                <h1 className="home-text36">
                  <span>Develop</span>
                </h1>
                <span className="home-text38">
                  <span>
                    Planning, expertise, and dedication converge to bring forth
                    tangible results that address challenges and improve lives
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-step3">
              <div className="home-container30">
                <div className="home-line6"></div>
                <div className="home-container31">
                  <svg viewBox="0 0 1024 1024" className="home-icon21">
                    <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                  </svg>
                </div>
                <div className="home-line7"></div>
              </div>
              <div className="home-container32">
                <h1 className="home-text41">
                  <span>Deploy</span>
                </h1>
                <span className="home-text43">
                  <span>
                    Ensuring that they effectively fulfill their purpose and add
                    value to their intended audience
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="home-blog">
            <div className="home-container33">
              <BlogPostCard1
                label="WHY"
                title="What inspired us?"
                image_alt="the image shows front profile of a young woman who is looking straight at the camera. Her torso is visible, unto the belt of her blue pants. She is standing against a yellow backgrounded shrugging with her hands bent at the elbow and palms facing up at shoulder level and close to it. She is wearing a question expression on her face and a yellow high neck, full sleeved top on her torso. Her hair are straight, brown and fall under her shoulder with middle parting. Her eyes seem to be going in operate directions."
                image_src="/Pictures/Why,what,how/why-1500w.jpeg"
                description="While the tech industry moves towards unimaginable &amp; invaluable solutions, there are still billions of people around the world unable to access something as basic as independent mobility."
                rootClassName="rootClassName3"
              ></BlogPostCard1>
            </div>
            <div className="home-container34">
              <BlogPostCard1
                label="WHAT"
                title="What do we want?"
                image_alt="the image shows a pair or dark shoes in dark background, taken diagonally from left of the pair. Shoes from ground level, the pair has metallic parts &amp; straps, giving it a robotic look."
                image_src="/Pictures/Why,what,how/what-1500w.jpeg"
                description="We want to employ the boundless potential of technology to improve lives. Building AI-based innovative &amp; revolutionary solutions in the form of wearable devices which have the capacity to learn, evolve &amp; guide."
                profile_src="https://images.unsplash.com/photo-1632169486919-f8d993a936c4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJsaW5kfGVufDB8fHx8MTY4MDc0NTg2Nw&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="rootClassName2"
              ></BlogPostCard1>
            </div>
            <div className="home-container35">
              <BlogPostCard1
                label="HOW"
                title="How YOU can contribute?"
                image_alt="the cartoon shows full profile of 6 individuals from front. They are all laughing and smiling. The group is a mixture of genders, heights and complexions."
                image_src="/Pictures/Why,what,how/how-1500w.jpeg"
                description="By writing to us at careers@kshoonya.com if you want to share your time &amp; expertise, and reaching out via contact@kshoonya.com if you’d like to fund the project or have any suggestions for us!"
                rootClassName="rootClassName1"
              ></BlogPostCard1>
            </div>
          </div>
        </div>
        <div className="home-hero2">
          <h1 className="home-text46">Let&apos;s keep things organized</h1>
          <span className="home-text47">connect with us</span>
          <div className="home-btn-group">
            <Link href="/about-us" name="About organization">
              <a className="home-link13 button">
                learn more about our organization
              </a>
            </Link>
          </div>
        </div>
        <div className="home-cta">
          <div className="home-container36">
            <div className="home-container37">
              <img
                alt="image"
                src="/Pictures/Extras/dall%C2%B7e%202023-04-05%2022.21.59%20-%20a%20%20man%20walking%20and%20wearing%20smart%20shoes%20and%20connected%20to%20an%20mobile%20app-300w.png"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="home-image05"
              />
              <img
                alt="image"
                src="/Pictures/Extras/dall%C2%B7e%202023-04-05%2022.23.36%20-%20a%20%20man%20walking%20and%20wearing%20smart%20shoes%20and%20connected%20to%20a%20mobile%20app%2C%20and%20helps%20to%20reach%20destination-300h.png"
                loading="lazy"
                className="home-image06"
              />
            </div>
            <div className="home-container38">
              <img
                alt="image"
                src="/Pictures/First/_3a1e396a-8fc7-404a-8251-91dc346d23e4-1200w.jpeg"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="home-image07"
              />
              <img
                alt="image"
                src="/Pictures/Extras/_12f666b0-d77f-4988-a2d4-86fdca45e463-300w.jpeg"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="home-image08"
              />
            </div>
          </div>
        </div>
        <div className="home-footer">
          <footer className="home-container39">
            <img
              alt="image"
              src="/new_design_full%203-400w.png"
              loading="lazy"
              className="home-image09"
            />
            <div className="home-container40">
              <Link href="/jobs">
                <a className="home-link14">Careers</a>
              </Link>
              <Link href="/about-us">
                <a className="home-link15">About us</a>
              </Link>
              <Link href="/journey-so-far">
                <a className="home-link16">Journey</a>
              </Link>
              <Link href="/privacy-policy">
                <a className="home-link17">Privacy Policy</a>
              </Link>
            </div>
            <div className="home-divider"></div>
            <div className="home-container41">
              <span className="home-text48 Body2">
                © 2023 Kshoonya Inc. All rights reserved
              </span>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #f7f1f1;
          }
          .home-header-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: relative;
            max-width: 1110px;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }

          .home-link {
            display: contents;
          }
          .home-image {
            top: -41px;
            left: -1px;
            width: 364px;
            height: 201px;
            position: absolute;
            object-fit: cover;
            transition: 0.3s;
            text-decoration: none;
          }

          .home-logo {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-menu {
            left: 423px;
            bottom: -24px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link01 {
            transition: 0.3s;
            font-weight: 700;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link01:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-link02 {
            transition: 0.3s;
            font-weight: 700;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-link03 {
            transition: 0.3s;
            font-weight: 700;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }

          .home-link04 {
            transition: 0.3s;
            font-weight: 700;
            text-decoration: none;
          }
          .home-link04:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-icon {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .home-link05 {
            display: contents;
          }
          .home-icon02 {
            width: 24px;
            height: 24px;
            text-decoration: none;
            animation-play-state: running;
          }
          .home-mobile-menu {
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
          .home-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-logo1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image01 {
            width: 100px;
            object-fit: cover;
          }
          .home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon04 {
            width: 24px;
            height: 24px;
          }
          .home-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text01 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text01:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text02 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text03 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text03:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text04 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text04:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text05 {
            transition: 0.3s;
          }
          .home-text05:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link06 {
            display: contents;
          }
          .home-container02 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon06 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon06:hover {
            fill: var(--dl-color-purple-default);
          }
          .home-link07 {
            display: contents;
          }
          .home-container03 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon08 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon08:hover {
            fill: var(--dl-color-pink-default);
          }
          .home-link08 {
            display: contents;
          }
          .home-container04 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon10 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon10:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .home-link09 {
            display: contents;
          }
          .home-container05 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon12 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon12:hover {
            fill: var(--dl-color-orange-default);
          }
          .home-main {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-blur-background {
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
            background-color: #ffecec;
          }
          .home-hero {
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

          .home-container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text06 {
            font-size: 72px;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-link10 {
            display: contents;
          }
          .home-component {
            text-decoration: none;
          }
          .home-image02 {
            width: 431px;
            height: 565px;
            opacity: 0.85;
            align-self: flex-end;
            object-fit: cover;
            transition: 0.3s;
          }
          .home-image02:hover {
            animation: inherit;
            animation-fill-mode: initial;
          }
          .home-turquoise-cirble {
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
          .home-features {
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
          .home-text11 {
            color: var(--dl-color-gray-900);
            font-size: 48px;
            font-family: Inter;
            font-weight: 800;
            text-transform: none;
            text-decoration: none;
          }
          .home-link11 {
            max-width: 500px;
            text-align: center;
            text-decoration: none;
          }
          .home-features1 {
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-banner {
            width: 100%;
            display: flex;
            padding: 48px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text12 {
            font-size: 3rem;
            text-align: center;
          }
          .home-text13 {
            max-width: 1400px;
            font-style: normal;
            margin-top: 32px;
            text-align: center;
            font-weight: 700;
            margin-bottom: 32px;
          }
          .home-link12 {
            font-style: normal;
            transition: 0.3s;
            font-weight: 700;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link12:hover {
            transform: scale(1.02);
          }
          .home-testimonials {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: center;
            background-color: #ffecec;
          }
          .home-container07 {
            display: flex;
            flex-wrap: wrap;
            max-width: 1100px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text16 {
            z-index: 100;
            font-size: 4em;
            max-width: 500px;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container10 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text17 {
            align-self: center;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 350px;
            display: flex;
            align-self: flex-end;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container12 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .home-container13 {
            width: 350px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container14 {
            width: 300px;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-features2 {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            flex-direction: column;
          }
          .home-text18 {
            font-size: 3rem;
            margin-bottom: 32px;
          }
          .home-separator {
            width: 100px;
            height: 2px;
            background-color: #595959;
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 32px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image03 {
            width: 360px;
            height: 450px;
            opacity: 0.8;
            object-fit: cover;
            transition: 0.3s;
            flex-shrink: 0;
            margin-left: 64px;
            border-radius: var(--dl-radius-radius-radius2);
            object-position: left;
          }

          .home-container16 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container17 {
            display: flex;
            margin-right: 48px;
            padding-right: 48px;
            flex-direction: column;
          }
          .home-text19 {
            font-size: 3rem;
            max-width: 450px;
          }
          .home-text20 {
            font-style: normal;
            margin-top: 32px;
            font-weight: 700;
            margin-bottom: 32px;
          }
          .home-image04 {
            width: 520px;
            height: 558px;
            opacity: 1;
            object-fit: cover;
            transition: 0.8s;
          }

          .home-container18 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container19 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-gallery {
            width: 100%;
            display: grid;
            padding: 48px;
            grid-gap: var(--dl-space-space-unit);
            max-width: 1400px;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-steps {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
          }
          .home-text25 {
            color: var(--dl-color-gray-black);
            font-size: 3rem;
          }
          .home-text26 {
            color: var(--dl-color-gray-700);
            font-size: 1.15rem;
            max-width: 600px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container20 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-step {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container21 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .home-line {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container22 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .home-icon14 {
            fill: #595959;
            width: 24px;
            height: 24px;
            transition: 0.3s;
          }

          .home-line1 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container23 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text29 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text31 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-step1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container24 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .home-line2 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container25 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .home-icon16 {
            fill: #595959;
            width: 24px;
            height: 24px;
            transition: 0.3s;
          }

          .home-line3 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container26 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text32 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text33 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-step2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container27 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .home-line4 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container28 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .home-icon18 {
            fill: #595959;
            width: 24px;
            height: 24px;
            transition: 0.3s;
          }

          .home-line5 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container29 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text36 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text38 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-step3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container30 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .home-line6 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container31 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .home-icon21 {
            fill: #595959;
            width: 24px;
            height: 24px;
            transition: 0.3s;
          }

          .home-line7 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container32 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text41 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text43 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-blog {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            justify-content: space-between;
          }
          .home-container33 {
            display: flex;
            align-items: center;
            margin-right: 32px;
            justify-content: space-between;
          }
          .home-container34 {
            display: flex;
            align-items: center;
            margin-right: 32px;
            justify-content: space-between;
          }
          .home-container35 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-hero2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 25;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                270deg,
                rgba(255, 76, 92, 0.8) 15%,
                rgba(70, 229, 255, 0.2) 82%
              ),
              url('https://images.unsplash.com/photo-1513127971914-6a8656fc9718?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQwfHxvcmdhbml6ZWQlMjBvZmZpY2V8ZW58MHx8fHwxNjgwODIxMTc4&ixlib=rb-4.0.3&w=1500');
            background-position: top left, bottom right;
          }
          .home-text46 {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
          }
          .home-text47 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link13 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-white);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: transparent;
          }
          .home-link13:hover {
            transform: scale(1.02);
          }
          .home-cta {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #692e4a;
          }
          .home-container36 {
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
          .home-container37 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image05 {
            top: -100;
            left: auto;
            width: 232px;
            bottom: auto;
            opacity: 0.8;
            object-fit: cover;
          }
          .home-image06 {
            top: auto;
            width: 286px;
            bottom: -100;
            height: 237px;
            opacity: 0.8;
            object-fit: cover;
            padding-right: 30px;
            padding-bottom: 19px;
          }
          .home-container38 {
            width: 520px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image07 {
            top: -100px;
            left: auto;
            right: var(--dl-space-space-doubleunit);
            width: 232px;
            bottom: auto;
            opacity: 0.8;
            position: absolute;
            object-fit: cover;
          }
          .home-image08 {
            top: auto;
            left: var(--dl-space-space-doubleunit);
            right: auto;
            width: 232px;
            bottom: -100px;
            opacity: 0.8;
            position: absolute;
            object-fit: cover;
          }
          .home-footer {
            flex: 0 0 auto;
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-container39 {
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
          .home-image09 {
            width: 194px;
            height: 72px;
            object-fit: cover;
          }
          .home-container40 {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link14 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link14:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-link15 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link15:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-link16 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link16:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-link17 {
            transition: 0.3s;
            white-space: nowrap;
            text-decoration: none;
          }
          .home-link17:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-divider {
            width: 100%;
            height: 1px;
            opacity: 0.2;
            background-color: var(--dl-color-gray-white);
          }
          .home-container41 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text48 {
            color: var(--dl-color-gray-300);
            margin-top: var(--dl-space-space-unit);
          }
          @media (max-width: 1600px) {
            .home-container {
              background-color: #f7f1f1;
            }
            .home-image {
              top: -31px;
              left: -3px;
              width: 343px;
              height: 183px;
            }
            .home-link11 {
              font-style: normal;
              font-weight: 900;
            }
            .home-banner {
              padding-bottom: 48px;
            }
            .home-text13 {
              font-style: normal;
              font-weight: 700;
            }
            .home-link12 {
              font-style: normal;
              font-weight: 700;
              text-decoration: none;
            }
            .home-testimonials {
              background-color: #ffecec;
            }
            .home-text16 {
              font-size: 4em;
            }
            .home-text17 {
              align-self: center;
            }
            .home-hero1 {
              background-color: #ffecec;
            }
            .home-text20 {
              font-style: normal;
              font-weight: 700;
            }
            .home-text26 {
              font-style: normal;
              font-weight: 700;
            }
            .home-text31 {
              font-style: normal;
              font-weight: 600;
            }
            .home-text33 {
              font-style: normal;
              font-weight: 600;
            }
            .home-text38 {
              font-style: normal;
              font-weight: 600;
            }
            .home-text43 {
              font-style: normal;
              font-weight: 600;
            }
          }
          @media (max-width: 1200px) {
            .home-container {
              background-color: #f7f1f1;
            }
            .home-link04 {
              font-weight: 700;
            }
            .home-text06 {
              font-size: 72px;
            }
            .home-text11 {
              color: var(--dl-color-gray-900);
              font-size: 48px;
              font-style: normal;
              font-family: Inter;
              font-weight: 900;
              text-transform: none;
              text-decoration: none;
            }
            .home-link11 {
              font-style: normal;
              font-weight: 900;
            }
            .home-text12 {
              font-style: normal;
              font-weight: 900;
            }
            .home-text13 {
              color: rgb(12, 12, 12);
              font-style: normal;
              font-weight: 700;
            }
            .home-link12 {
              color: rgb(24, 24, 25);
              font-style: normal;
              font-weight: 800;
            }
            .home-text17 {
              font-style: normal;
              font-weight: 500;
            }
            .home-text20 {
              font-style: normal;
              font-weight: 700;
            }
            .home-text26 {
              font-style: normal;
              font-weight: 700;
            }
            .home-text31 {
              font-style: normal;
              font-weight: 900;
            }
            .home-text33 {
              font-style: normal;
              font-weight: 900;
            }
            .home-text38 {
              font-style: normal;
              font-weight: 900;
            }
            .home-text43 {
              font-style: normal;
              font-weight: 900;
            }
            .home-link13 {
              color: var(--dl-color-gray-white);
              font-size: 0.75rem;
              text-transform: uppercase;
              text-decoration: none;
              background-color: transparent;
            }
          }
          @media (max-width: 991px) {
            .home-image {
              top: -34px;
              left: 41px;
            }
            .home-menu {
              left: 423px;
              bottom: -24px;
            }
            .home-hero {
              height: auto;
              flex-direction: column;
            }
            .home-container06 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-text06 {
              text-align: center;
            }
            .home-image02 {
              align-self: center;
            }
            .home-text13 {
              max-width: 100%;
            }
            .home-container07 {
              flex-direction: column;
            }
            .home-container11 {
              align-self: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container12 {
              align-items: center;
              margin-left: 0px;
            }
            .home-container14 {
              width: 350px;
            }
            .home-features2 {
              align-items: center;
            }
            .home-container15 {
              flex-direction: column;
            }
            .home-image03 {
              width: 300px;
              height: 300px;
              margin-top: 32px;
              margin-left: 0px;
            }
            .home-hero1 {
              flex-direction: column;
            }
            .home-container17 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: 32px;
              padding-right: 0px;
            }
            .home-text19 {
              text-align: center;
            }
            .home-text20 {
              text-align: center;
              padding-left: 48px;
              padding-right: 48px;
            }
            .home-gallery {
              grid-template-columns: 1fr 1fr;
            }
            .home-text25 {
              text-align: center;
            }
            .home-text26 {
              text-align: center;
            }
            .home-blog {
              flex-direction: column;
            }
            .home-container33 {
              margin-right: 0px;
              margin-bottom: 48px;
            }
            .home-container34 {
              margin-right: 0px;
              margin-bottom: 48px;
            }
            .home-hero2 {
              flex-direction: column;
            }
            .home-text46 {
              text-align: center;
            }
            .home-text47 {
              text-align: center;
            }
            .home-container38 {
              display: none;
            }
            .home-link15 {
              text-decoration: none;
            }
            .home-link16 {
              text-decoration: none;
            }
          }
          @media (max-width: 767px) {
            .home-image {
              top: -36px;
              left: 214px;
            }
            .home-menu {
              display: none;
            }
            .home-text06 {
              font-size: 50px;
              text-align: center;
            }
            .home-image02 {
              align-self: center;
            }
            .home-text11 {
              font-size: 40px;
            }
            .home-banner {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-text13 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text16 {
              font-size: 40px;
              text-align: center;
            }
            .home-container10 {
              align-items: center;
            }
            .home-features2 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-text18 {
              text-align: center;
            }
            .home-container15 {
              flex-direction: column;
            }
            .home-hero1 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-text20 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-image04 {
              width: 80%;
            }
            .home-gallery {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-steps {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-container20 {
              align-items: flex-start;
              padding-left: 80px;
              flex-direction: column;
            }
            .home-step {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container21 {
              width: 48px;
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line1 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container23 {
              width: 100%;
              align-items: flex-start;
              padding-top: 32px;
              flex-direction: column;
              padding-bottom: 32px;
              justify-content: space-between;
            }
            .home-text29 {
              margin-top: 32px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text31 {
              text-align: left;
            }
            .home-step1 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container24 {
              width: 48px;
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line2 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-line3 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container26 {
              width: 100%;
              align-items: flex-start;
              padding-top: 32px;
              flex-direction: column;
              padding-bottom: 32px;
              justify-content: space-between;
            }
            .home-text32 {
              margin-top: 32px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text33 {
              text-align: left;
            }
            .home-step2 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container27 {
              width: 48px;
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line4 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-line5 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container29 {
              width: 100%;
              align-items: flex-start;
              padding-top: 32px;
              flex-direction: column;
              padding-bottom: 32px;
              justify-content: space-between;
            }
            .home-text36 {
              margin-top: 32px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text38 {
              text-align: left;
            }
            .home-step3 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container30 {
              width: 48px;
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line6 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-line7 {
              border-color: transparent;
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container32 {
              width: 100%;
              align-items: flex-start;
              padding-top: 32px;
              flex-direction: column;
              padding-bottom: 32px;
              justify-content: space-between;
            }
            .home-text41 {
              margin-top: 32px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text43 {
              text-align: left;
            }
            .home-blog {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-hero2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container40 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-container41 {
              flex-direction: column;
            }
            .home-text48 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-header {
              padding-right: 2rem;
            }
            .home-image {
              top: 1px;
              left: 0px;
              right: 0px;
              width: 284px;
              height: 111px;
              margin: auto;
            }
            .home-bot {
              width: 100%;
            }
            .home-image02 {
              align-self: center;
            }
            .home-text11 {
              text-align: center;
            }
            .home-link11 {
              text-align: center;
            }
            .home-banner {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-features2 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-image03 {
              width: 250px;
              height: 250px;
            }
            .home-container16 {
              grid-template-columns: 1fr;
            }
            .home-hero1 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-container17 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-gallery {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-steps {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-container20 {
              padding-left: 0px;
            }
            .home-container23 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 32px;
            }
            .home-text29 {
              margin-left: 0px;
              margin-right: 32px;
            }
            .home-container26 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 32px;
            }
            .home-text32 {
              margin-left: 0px;
              margin-right: 32px;
            }
            .home-container29 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 32px;
            }
            .home-text36 {
              margin-left: 0px;
              margin-right: 32px;
            }
            .home-container32 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 32px;
            }
            .home-text41 {
              margin-left: 0px;
              margin-right: 32px;
            }
            .home-blog {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-hero2 {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-link13 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-link15 {
              text-decoration: none;
            }
            .home-link16 {
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
