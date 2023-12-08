import Document, { Html, Head, Main, NextScript } from 'next/document'
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: Inter;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.55;\n    color: var(--dl-color-gray-900);\n    background-color: var(--dl-color-gray-white);\n    \n  }\n\n  \n\n  ',
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="shortcut icon"
            href="/hindi_new_logo_2.png"
            type="icon/png"
            sizes="32x32"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script:wght@400&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"
          ></link>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                '</noscript><head>\n  <title>Home - Kshoonya Technologies</title>\n  <link rel=\'canonical\' href=\'https://kshoonya.com/\' />\n  <meta property=\'og:locale\' content=\'en_US\' />\n  <meta property=\'og:type\' content=\'website\' />\n  <meta property=\'og:title\' content=\'Home - Kshoonya Technologies\' />\n  <meta property=\'og:description\' content=\'Kshoonya is an innovative technology company, specializes in developing products that focus on the independence and quality of life of those with disabilities.; Home Read More &raquo;\' />\n  <meta property=\'og:url\' content=\'https://kshoonya.com/\' />\n  <meta property=\'og:site_name\' content=\'Dream. Innovate. Support\' />\n  <meta property=\'article:modified_time\' content=\'2023-04-05T18:34:03+00:00\' />\n  <script type=\'application/ld+json\' class=\'yoast-schema-graph\'>\n  {\n    "@context": "https://schema.org",\n    "@graph": [\n      {\n        "@type": "WebPage",\n        "@id": "https://www.kshoonya.com/",\n        "url": "https://www.kshoonya.com//",\n        "name": "Home - Kshoonya Technologies",\n        "isPartOf": {\n          "@id": "https://www.kshoonya.com/#website"\n        },\n        "about": {\n          "@id": "https://www.kshoonya.com/#organization"\n        },\n        "datePublished": "2023-04-6T15:12:46+00:00",\n        "dateModified": "2023-04-05T18:34:03+00:00",\n        "breadcrumb": {\n          "@id": "https://www.kshoonya.com/#breadcrumb"\n        },\n        "inLanguage": "en-US",\n        "potentialAction": [\n          {\n            "@type": "ReadAction",\n            "target": [\n              "https://www.kshoonya.com/"\n            ]\n          }\n        ]\n      },\n      {\n        "@type": "BreadcrumbList",\n        "@id": "https://www.kshoonya.com/#breadcrumb",\n        "itemListElement": [\n          {\n            "@type": "ListItem",\n            "position": 1,\n            "name": "Home"\n          }\n        ]\n      },\n      {\n        "@type": "WebSite",\n        "@id": "https://www.kshoonya.com/#website",\n        "url": "https://www.kshoonya.com/",\n        "name": "Kshoonya Technologies",\n        "description": "Home Landing Page",\n        "publisher": {\n          "@id": "https://www.kshoonya.com//#organization"\n        },\n        "potentialAction": [\n          {\n            "@type": "SearchAction",\n            "target": {\n              "@type": "EntryPoint",\n              "urlTemplate": "https://www.kshoonya.com/?s={search_term_string}"\n            },\n            "query-input": "required name=search_term_string"\n          }\n        ],\n        "inLanguage": "en-US"\n      },\n      {\n        "@type": "Organization",\n        "@id": "https://www.kshoonya.com/#organization",\n        "name": "Kshoonya Technology",\n        "url": "https://www.kshoonya.com"\n        "logo": {\n        "@type": "ImageObject",\n        "inLanguage": "en-US",\n        "@id": "https://www.kshoonya.in/playground_assets/new_design_full%203-300w.png",\n        "url": "https://www.kshoonya.in/playground_assets/new_design_full%203-300w.png",\n        "contentUrl": "https://www.kshoonya.in/playground_assets/new_design_full%203-300w.png",\n        "width": 222,\n        "height": 191,\n        "caption": "Kshoonya"\n      },\n    "image": {\n    "@id": "https://www.kshoonya.in/playground_assets/new_design_full%203-300w.png"\n    }\n  }\n]\n}\n</script>\n</body>\n</html>\n\n\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Cookie Consent Widget</title>\n  <style>\n    /* Add CSS styles for the cookie consent banner */\n    #cookie-banner {\n      position: fixed;\n      bottom: 20px;\n      left: 20px;\n      background-color: #f7f1f1;\n      color: black;\n      padding: 20px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: flex-start;\n      font-family: Arial, sans-serif;\n      z-index: 9999;\n      border-radius: 5px;\n      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n      opacity: 0;\n      transform: translateY(30px);\n      transition: all 0.5s ease;\n      width: 300px;\n      max-width: 80%;\n      min-height: 150px;\n    }\n\n    #cookie-banner.show {\n      opacity: 1;\n      transform: translateY(0);\n    }\n\n    #cookie-banner p {\n      margin: 0 0 10px 0;\n      font-size: 16px;\n      font-weight: 600;\n    }\n\n    #cookie-banner button {\n      background-color: black;\n      border: none;\n      color: white;\n      padding: 10px 20px;\n      font-size: 16px;\n      cursor: pointer;\n      border-radius: 5px;\n      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n      margin-left: 10px;\n      transition: background-color 0.3s ease;\n    }\n\n    #cookie-banner button:hover {\n      background-color: #333;\n    }\n  </style>\n</head>\n<body>\n  <div id="cookie-banner">\n    <p>We use cookies to improve your experience and for analytics. By using our site, you agree to our use of cookies.</p>\n    <div>\n      <button id="accept-cookies">Accept</button>\n      <button id="decline-cookies">Decline</button>\n    </div>\n  </div>\n\n  <script>\n    // Check if the user has already made a cookie consent choice\n    if (!localStorage.getItem(\'cookie-consent\')) {\n      setTimeout(function() {\n        document.getElementById(\'cookie-banner\').classList.add(\'show\');\n      }, 500);\n    }\n\n    // Store the user\'s choice and hide the banner\n    function setCookieConsent(value) {\n      localStorage.setItem(\'cookie-consent\', value);\n      document.getElementById(\'cookie-banner\').classList.remove(\'show\');\n\n      // Add your Google Analytics tracking code if the user accepts cookies\n      if (value === \'accept\') {\n        initGoogleAnalytics();\n      }\n    }\n\n    // Initialize Google Analytics\n    function initGoogleAnalytics() {\n      window.dataLayer = window.dataLayer || [];\n      function gtag() { dataLayer.push(arguments); }\n      gtag(\'js\', new Date());\n      gtag(\'config\', \'G-6RXS0JXEFD\');\n    }\n\n    // Attach event listeners to the buttons\n    document.getElementById(\'accept-cookies\').addEventListener(\'click\', function() {\n      setCookieConsent(\'accept\');\n    });\n\n    document.getElementById(\'decline-cookies\').addEventListener(\'click\', function() {\n      setCookieConsent(\'decline\');\n});\n </script>\n</body>\n</html>\n\n\n<head>\n  <title>Subscription Form Widget</title>\n  <style>\n    /* Floating icon style */\n    .subscription-form-icon {\n      position: fixed;\n      bottom: 20px;\n      right: 20px;\n      padding: 10px;\n      background-color: maroon;\n      border-radius: 50%;\n      color: white;\n      font-size: 16px;\n      cursor: pointer;\n      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);\n      z-index: 9999;\n    }\n\n    /* Subscription form style */\n    .subscription-form {\n      position: fixed;\n      bottom: 20px;\n      right: 20px;\n      width: 300px;\n      height: 350px;\n      padding: 20px;\n      background-color: white;\n      border-radius: 20px;\n      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);\n      display: none;\n      z-index: 9999;\n    }\n\n    .subscription-form-heading {\n      font-size: 24px;\n      font-weight: bold;\n      margin-bottom: 10px;\n      text-align: center;\n    }\n\n    .subscription-form-input {\n      width: 90%;\n      padding: 10px;\n      margin-bottom: 10px;\n      border: 1px solid black;\n      border-radius: 5px;\n      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n      transition: box-shadow 0.2s ease-in-out;\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n    }\n\n    .subscription-form-input:focus {\n      outline: none;\n      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);\n    }\n\n    .subscription-form-textarea {\n      height: 100px;\n      resize: none;\n    }\n\n    .subscription-form-button {\n      display: block;\n      width: 100%;\n      padding: 10px;\n      background-color: maroon;\n      color: white;\n      border: none;\n      border-radius: 8px;\n      cursor: pointer;\n      font-size: 16px;\n      margin-top: 20px;\n    }\n\n    .subscription-form-close-button {\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      cursor: pointer;\n      font-size: 20px;\n      color: black;\n    }\n\n    .overlay-message {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.5);\n      display: none;\n      justify-content: center;\n      align-items: center;\n      font-size: 24px;\n      color: white;\n    }\n  </style>\n</head>\n<body>\n  <!-- Floating icon -->\n  <div class="subscription-form-icon" onclick="openSubscriptionForm()">Message us!</div>\n    \n  <!-- Subscription form -->\n  <form id="subscription-form" class="subscription-form">\n    <div class="subscription-form-close-button" onclick="closeSubscriptionForm()">&times;</div>\n    <div class="subscription-form-heading">Send us your message</div>\n    <input type="text" id="name" placeholder="Name" class="subscription-form-input" aria-label="Your Name">\n    <input type="email" id="email" placeholder="Email" class="subscription-form-input" aria-label="Your Email" required>\n    <textarea id="message" placeholder="Message" class="subscription-form-input subscription-form-textarea" aria-label="Your Message"></textarea>\n    <button type="button" onclick="submitSubscriptionForm()" class="subscription-form-button" aria-label="Submit button">Submit</button>\n    <div class="overlay-message" id="thank-you-message" aria-label="Your Thank you for Submitting">Thank you for submitting!</div>\n    <div class="overlay-message" id="invalid-email-message" aria-label="Your inputted email is not correct, please check the email address">Please enter a valid email address.</div>\n    </form>\n  <script>\n    var subscriptionForm = document.getElementById(\'subscription-form\');\n    var thankYouMessage = document.getElementById(\'thank-you-message\');\n    var invalidEmailMessage = document.getElementById(\'invalid-email-message\');\n    var buzzSound = new Audio(\'https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3\');\n\n    function openSubscriptionForm() {\n      subscriptionForm.style.display = \'block\';\n      buzzSound.play();\n    }\n\n    function closeSubscriptionForm() {\n      subscriptionForm.style.display = \'none\';\n    }\n\n    function playBuzzSound() {\n      buzzSound.play();\n    }\n\n    function validateEmail(email) {\n      var re = /^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n      return re.test(String(email).toLowerCase());\n    }\n\n    function resetForm() {\n      document.getElementById(\'name\').value = \'\';\n      document.getElementById(\'email\').value = \'\';\n      document.getElementById(\'message\').value = \'\';\n    }\n\n    function showOverlayMessage(element) {\n      element.style.display = \'flex\';\n      setTimeout(function() {\n        element.style.display = \'none\';\n      }, 3000);\n    }\n\n    function submitSubscriptionForm() {\n      var name = document.getElementById(\'name\').value;\n      var email = document.getElementById(\'email\').value;\n      var message = document.getElementById(\'message\').value;\n\n      if (!validateEmail(email)) {\n        showOverlayMessage(invalidEmailMessage);\n        return;\n      }\n\n      // Replace \'your_script_url\' with the URL of your Google Apps Script\n      var url = \'https://script.google.com/macros/s/AKfycbyaGxxfZqBHjpr5eREJijwPX74TtRXV60oiunrSIOkfrqRF1FhkfndScVUtg7y9gAgXIQ/exec\';\n\n      var xhr = new XMLHttpRequest();\n      xhr.open(\'POST\', url);\n      xhr.setRequestHeader(\'Content-Type\', \'application/x-www-form-urlencoded\');\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState === 4 && xhr.status === 200) {\n          playBuzzSound();\n          resetForm();\n          showOverlayMessage(thankYouMessage);\n          setTimeout(closeSubscriptionForm, 3000);\n        }\n      };\n      xhr.send(\'name=\' + encodeURIComponent(name) +\n               \'&email=\' + encodeURIComponent(email) +\n               \'&message=\' + encodeURIComponent(message));\n    }\n  </script>\n</body>\n</html>\n\n\n<noscript>',
            }}
          ></noscript>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          <script
            type="text/javascript"
            src="https://www.googletagmanager.com/gtag/js?id=G-6RXS0JXEFD"
            async
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html:
                "window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', 'G-6RXS0JXEFD');",
            }}
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html:
                "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','GTM-NF5WVB6');",
            }}
          ></script>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<script src=\'https://unpkg.com/@teleporthq/teleport-custom-scripts\'></script>\n<script defer src="/_vercel/insights/script.js"></script>',
            }}
          ></div>
        </body>
      </Html>
    )
  }
}
export default CustomDocument
