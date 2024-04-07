export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 flex">
      <div className="relative p-8 bg-white w-full max-w-2xl m-auto flex-col flex rounded-lg shadow-lg">
        <span className="absolute top-0 right-0 p-4">
          <button onClick={onClose} className="text-black hover:text-gray-700">
            [X] Close
          </button>
        </span>
        <div className="overflow-y-scroll h-96 p-4">
          <h2 className="text-2xl font-bold mb-4">Privacy Notice</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2">1. GENERAL</h3>
              <p className="text-gray-700">
                Faster Funding LLC ("Faster Funding LLC" or "we" or "us" or "our") respects the privacy of everyone ("Sites", "visitor", "user" or "you") that uses our website at http://www.faster-funding.com, as well as other device or online applications related or connected thereto (collectively, the "Sites").
              </p>
              <p className="text-gray-700">
                The following Faster Funding LLC Privacy Notice ("Privacy Notice") is designed to inform you, as a user of the Sites, about the types of personal information that Faster Funding LLC may gather about or collect from you in connection with your use of the Sites. It also is intended to explain the conditions under which Faster Funding LLC uses and discloses that personal information, and your rights in relation to that personal information.
              </p>
              <p className="text-gray-700">
                The Sites are hosted in the United States and is subject to U.S. state and federal law. If you are accessing our Sites from other jurisdictions, please be advised that you are transferring your personal information to us in the United States, and by using our Sites, you are agreeing to that transfer and use of your personal information in accordance with this Privacy Notice. You also agree to abide to the applicable laws of the State of Texas and U.S. federal law concerning your use of the Sites and your agreements with us. If your use of the Sites would be unlawful in your jurisdiction, please do not use the Sites.
              </p>
              <p className="text-gray-700">
                Company Information<br />
                Faster Funding LLC<br />
                5900 Balcones Dr<br />
                Austin, TX 78731<br />
                Email: info@faster-funding.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">2. HOW WE COLLECT AND USE YOUR PERSONAL INFORMATION</h3>
              <p className="text-gray-700">
                Faster Funding LLC gathers personal information from users of the Sites. When you browse our Sites, subscribe to our services or contact us through various social or web forms you are voluntarily sharing personal information with us. This personal information also includes various data that we collect automatically. This may be the user's Internet Protocol (IP) address, operating system, browser type and the locations of the Sites the user views right before arriving at, while navigating and immediately after leaving the Sites. It may also include various technical aspects of user's computer or browser and users browsing habits that are collected through cookies. Faster Funding LLC may analyze various mentioned personal information gathered from or about users to help Faster Funding LLC better understand how the Sites are used and how to make them better. By identifying patterns and trends in usage, Faster Funding LLC is able to better design the Sites to improve users' experiences, both in terms of content and ease of use. From time to time, Faster Funding LLC may also release the anonymized information gathered from the users in the aggregate, such as by publishing a report on trends in the usage of the Sites.
              </p>
              <p className="text-gray-700">
                When we believe disclosure is appropriate, we may disclose your information to help investigate, prevent or take other action regarding illegal activity, suspected fraud or other wrongdoing; to protect and defend the rights, property or safety of Faster Funding LLC, our users, our employees or others; to comply with applicable law or cooperate with law enforcement; to enforce our Terms of Use or other agreements or policies, in response to a subpoena or similar investigative demand, a court order or a request for cooperation from a law enforcement or other government agency; to establish or exercise our legal rights; to defend against legal claims; or as otherwise required by law. In such cases, we may raise or waive any legal objection or right available to us. We will notify you if permitted before undertaking such disclosures.
              </p>
              <p className="text-gray-700">
                Faster Funding LLC reserves the right to transfer all information in its possession to a successor organization in the event of a merger, acquisition, bankruptcy or other sale of all or a portion of Faster Funding LLC's assets. Other than to the extent ordered by a bankruptcy or other court, the use and disclosure of all transferred information will be subject to this Privacy Notice, or to a new privacy notice if you are given notice of that new privacy notice and are given an opportunity to affirmatively opt-out of it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">3. DO WE USE COOKIES?</h3>
              <p className="text-gray-700">
                A "Cookie" is a string of information which assigns you a unique identification that a website stores on a user's computer, and that the user's browser provides to the website each time the user submits a query to the website. We use cookies on the Sites to keep track of services you have used, to record registration information regarding your login name and password, to record your user preferences, to keep you logged into the Sites and to facilitate purchase procedures. Faster Funding LLC also uses Cookies to track the pages that users visit during each of the Sites' sessions, both to help Faster Funding LLC improve users' experiences and to help Faster Funding LLC understand how the Sites is being used. As with other personal information gathered from users of the Sites, Faster Funding LLC analyzes and discloses in aggregated form information gathered using Cookies, so as to help Faster Funding LLC, its partners and others better understand how the Sites is being used. SITES' USERS WHO DO NOT WISH TO HAVE COOKIES PLACED ON THEIR COMPUTERS SHOULD SET THEIR BROWSERS TO REFUSE COOKIES BEFORE ACCESSING THE SITES, WITH THE UNDERSTANDING THAT CERTAIN FEATURES OF THE SITES MAY NOT FUNCTION PROPERLY WITHOUT THE AID OF COOKIES. SITES' USERS WHO REFUSE COOKIES ASSUME ALL RESPONSIBILITY FOR ANY RESULTING LOSS OF FUNCTIONALITY.
              </p>
              <p className="text-gray-700">
                Faster Funding LLC currently uses the following cookies on the Sites:
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">4. DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
              <p className="text-gray-700 font-bold">General Provisions</p>
              <p className="text-gray-700">
                Faster Funding LLC contractually prohibits its contractors, affiliates, vendors and suppliers from disclosing any personal information received from Faster Funding LLC, other than in accordance with this Privacy Notice. These third parties may include advertisers, providers of games, utilities, widgets and a variety of other third-party applications accessible through the Sites. Faster Funding LLC neither owns nor controls the third-party websites and applications accessible through the Sites. Thus, this Privacy Notice does not apply to personal information provided to or gathered by the third parties that operate them. Before visiting a third party, or using a third-party application, whether by means of a link on the Sites, directly through the Sites or otherwise, and before providing any personal information to any such third party, users should inform themselves of the privacy policies and practices (if any) of the third party responsible for those Sites or applications, and should take those steps necessary to, in those users' discretion, protect their privacy.
              </p>
              <p className="text-gray-700 font-bold">Analytics</p>
              <p className="text-gray-700">
                We may use third-party vendors, including Google, who use first-party cookies (such as the Google Analytics cookie) and third-party cookies (such as the DoubleClick cookie) together to inform, optimize and serve ads based on your past activity on the Sites, including Google Analytics for Display Advertising. The personal information collected may be used to, among other things, analyze and track data, determine the popularity of certain content and better understand online activity. If you do not want any personal information to be collected and used by Google Analytics, you can install an opt-out in your web browser (https://tools.google.com/dlpage/gaoptout/ ) and/or opt out from Google Analytics for Display Advertising or the Google Display Network by using Google's Ads Settings (www.google.com/settings/ads ).
              </p>
              <p className="text-gray-700 font-bold">Third-Party Service Providers</p>
              <p className="text-gray-700">
                We may share your personal information, which may include your name and contact information (including email address) with our authorized service providers that perform certain services on our behalf. These services may include fulfilling orders, providing customer service and marketing assistance, performing business and sales analysis, supporting the Sites' functionality and supporting contests, sweepstakes, surveys and other features offered through the Sites. We may also share your name, contact personal information and credit card personal information with our authorized service providers who process credit card payments. These service providers may have access to personal information needed to perform their functions but are not permitted to share or use such personal information for any other purpose. You can contact us to receive our current list of providers.
              </p>
              <p className="text-gray-700">
                If you have opted in to receiving marketing communication from us then Faster Funding LLC may provide your personal information to third parties, with your consent, so that those third parties may directly contact you about additional products and services. To cease having your personal information used for marketing communication purposes, you can:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Email us at info@faster-funding.com</li>
                <li>Opt out by clicking on the unsubscribe button found in the footer of our emails</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">5. SECURITY</h3>
              <p className="text-gray-700">
                We take the security of your personal information seriously and use reasonable electronic, personnel and physical measures to protect it from loss, theft, alteration or misuse. However, please be advised that even the best security measures cannot fully eliminate all risks. We cannot guarantee that only authorized persons will view your personal information. We are not responsible for third-party circumvention of any privacy settings or security measures.
              </p>
              <p className="text-gray-700">
                We are dedicated to protect all personal information on the Sites as is necessary. However, you are responsible for maintaining the confidentiality of your personal information by keeping your password and computer/mobile device access confidential. If you have an account with Faster Funding LLC and believe someone has gained unauthorized access to it or your account please change your password as soon as possible. If you lose control of your account, you should notify us immediately.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">6. PRIVACY RIGHTS - CALIFORNIA USERS</h3>
              <p className="text-gray-700 font-bold">Do Not Sell My Personal Information Notice - California Consumer Privacy Act (CCPA)</p>
              <p className="text-gray-700">
                Faster Funding LLC has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Faster Funding LLC will not sell personal information in the future belonging to Sites&#39; visitors, users and other consumers.
              </p>
              <p className="text-gray-700 font-bold">If you are under 18 years of age</p>
              <p className="text-gray-700">
                If you have registered account with Faster Funding LLC, you have the right to request the removal of unwanted personal information that you publicly post on our Sites. To request the removal of such information, please contact us using the contact information provided below. Make sure to include your account's email address and a statement that you reside in California.
              </p>
              <p className="text-gray-700 font-bold">"Shine the Light Law"</p>
              <p className="text-gray-700">
                California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, personal information about the personal information (if any) we disclosed to third parties for direct marketing purposes in the preceding calendar year. If applicable, this personal information would include a list of the categories of the personal information that was shared and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to the address listed below.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">7. CHILDREN</h3>
              <p className="text-gray-700">
                The Children's Online Privacy Protection Act ("COPPA") protects the online privacy of children under 13 years of age. We do not knowingly collect or maintain personal information from anyone under the age of 13, unless or except as permitted by law. Any person who provides personal information through the Sites represents to us that he or she is 13 years of age or older. If we learn that personal information has been collected from a user under 13 years of age on or through the Sites, then we will take the appropriate steps to cause this personal information to be deleted. If you are the parent or legal guardian of a child under 13 who has become a member of the Sites or has otherwise transferred personal information to the Sites, please contact Faster Funding LLC using our contact personal information below to have that child's account terminated and personal information deleted.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">8. DO-NOT-TRACK NOTICE</h3>
              <p className="text-gray-700">
                Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. Because there is not yet a common understanding of how to interpret the DNT signal, the Sites currently do not respond to DNT browser signals or mechanisms.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">9. GOVERNING LAW</h3>
              <p className="text-gray-700">
                Disputes over privacy issues contained in this Privacy Notice will be governed by the law of the State of Texas. You also agree to abide by any limitation on damages contained in our Terms of Use, or other agreement that we have with you.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">10. PRIVACY NOTICE CHANGES</h3>
              <p className="text-gray-700">
                Faster Funding LLC may, in its sole discretion, change this Privacy Notice from time to time. Any and all changes to Faster Funding LLC's Privacy Notice will be reflected on this page and the date of the new version will be stated at the top of this Privacy Notice. Unless stated otherwise, our current Privacy Notice applies to all personal information that we have about you and your account. Users should regularly check this page for any changes to this Privacy Notice. Faster Funding LLC will always post new versions of the Privacy Notice on the Sites. However, Faster Funding LLC may, as determined in its discretion, decide to notify users of changes made to this Privacy Notice via email or otherwise. Accordingly, it is important that users always maintain and update their contact personal information.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">11. CONTACT</h3>
              <p className="text-gray-700">
                If you have any questions regarding our Privacy Notice, please contact us at:
              </p>
              <p className="text-gray-700">
                Faster Funding LLC<br />
                5900 Balcones Dr<br />
                Austin, TX 78731<br />
                Email: info@faster-funding.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
