// TermsofService.js
const TermsofService = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 flex">
        <div className="relative p-8 bg-white w-full max-w-2xl m-auto flex-col flex rounded-lg shadow-lg">
          <span className="absolute top-0 right-0 p-4">
            <button onClick={onClose} className="text-black hover:text-gray-700">
              [X] Close
            </button>
          </span>
          <div className="overflow-y-scroll h-96 p-4">
            <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                PLEASE READ THESE TERMS AND USE CAREFULLY. BY ACCESSING OUR SITES OR USING THE SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS OF SERVICE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT USE THE SITE OR SERVICES AND MUST DISCONTINUE YOUR USE OF THE SITES AND SERVICES.
              </p>
              <p className="text-gray-700">
                These Terms of Service (the "Terms of Service") govern your use of the websites provided by Faster Funding, LLC. and its affiliates ("Faster Funding", "we" or " us") whether accessed via computer, mobile device or otherwise (individually and collectively, the "Sites,") as well as any products and services provided by Faster Funding (the "Faster Funding Service") (the Sites, together with the Faster Funding Service, collectively referred to as the "Service").
              </p>
              <div>
                <h3 className="text-xl font-bold mb-2">1. ACCEPTANCE OF AGREEMENT.</h3>
                <p className="text-gray-700">
                  THESE TERMS OF SERVICE SET FORTH THE LEGALLY BINDING TERMS AND CONDITIONS THAT GOVERN YOUR USE OF THE SERVICE. BY COMPLETING THE REGISTRATION PROCESS AND/OR BROWSING THE SERVICE, YOU ARE ACCEPTING THESE TERMS OF SERVICE (ON BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT), AND YOU REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THESE TERMS OF SERVICE. YOU MAY NOT ACCESS OR USE THE SITES OR SERVICE OR ACCEPT THESE TERMS OF SERVICE IF (A) YOU ARE NOT OF LEGAL AGE TO FORM A BINDING CONTRACT WITH FASTER FUNDING; (B) YOU ARE PROHIBITED BY LAW FROM RECEIVING OR USING THE SERVICE; OR (C) YOU ARE NOT A U.S. RESIDENT. IF YOU DO NOT AGREE WITH ALL OF THE PROVISIONS OF THESE TERMS OF SERVICE, DO NOT ACCESS AND/OR USE THE SITES OR SERVICE. PLEASE BE AWARE THAT THESE TERMS OF SERVICE REQUIRE THE USE OF ARBITRATION (SECTION 12) ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS, AND ALSO LIMIT THE REMEDIES AVAILABLE TO YOU IN THE EVENT OF A DISPUTE.
                </p>
                <p className="text-gray-700">  
                  Your use of, and participation in, the Service may be subject to additional terms (collectively, "Supplemental Terms") and such Supplemental Terms will either be listed in these Terms of Service or will be presented to you for your acceptance when you sign up to use the supplemental service. If these Terms of Service are inconsistent with the Supplemental Terms, the SupplementalTerms will control with respect to such Service. These Terms of Service and any applicable Supplemental Terms are referred to herein as the "Agreement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2. AMENDMENTS.</h3>
                <p className="text-gray-700">
                  Faster Funding reserves the right to amend these Terms of Service at any time. Faster Funding will post notice of any amendment on the Sites. You should review these Terms of Service regularly to ensure that you are aware of future amendments. If you do not agree to any amendment, you must stop using the Sites and Service. If you have any questions about the terms and conditions in these Terms of Service or Faster Funding's Privacy Policy, please contact us at support@faster-funding.com.
                </p>
                <p className="text-gray-700">
                  We reserve the right to update and revise this Policy at any time. You can determine if this Policy has been revised since your last visit by referring to the "Updated on" date at the top of this page. Your use of the Web site constitutes your acceptance of the terms of the Policy. You should review this Policy regularly to ensure that you are aware of future amendments.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">3. DEFINITIONS AND INTERPRETATION.</h3>
                <p className="text-gray-700">
                  3.1 Defined Terms. Unless the context requires otherwise, capitalized terms in these Terms of Service shall have the following meanings:
                </p>
                <p className="text-gray-700">
                  "Account Information" means information about accounts you maintain at third party websites, including, as applicable, your accounts at any financial institution, as provided by you to Faster Funding.
                  "Affiliate" means, with respect to a party, any person, firm, corporation, partnership (including, without limitation, general partnerships, limited partnerships, and limited liability partnerships), limited liability company, or other entity that now or in the future, directly controls, is controlled with or by or is under common control with such party.
                  "Applicable Law" means all federal and state laws, including regulations, applicable to the activities and obligations contemplated under these Terms of Service, including without limitation the federal TruthinLending Act, Equal Credit Opportunity Act, Fair Credit Reporting Act, Fair Debt Collection Practices Act, the Gramm-Leach-Bliley Act, Dodd Frank Act, CAN SPAM Act and all applicable state licensing, consumer credit and privacy laws, as the same may be amended and in effect from time to time.
                  "Business Day" means any day (other than a Saturday, Sunday or legal holiday) on which federally insured financial institutions in New York,New York are permitted to be open to conduct substantially all of their business.
                  "Profile Information" means the information you provide to us to register for the Service, including as applicable, business name and address, amount and intended purpose of funding sought, certain financial information regarding the business, and certain information regarding the business owner, as well as the username and password that allow you to access the Service, as such information shall change from time to time.
                </p>
                <p className="text-gray-700">
                  3.2 Interpretation. References to Sections are to be construed as references to the Sections in these Terms of Service, unless otherwise indicated. The singular includes the plural, and the plural includes the singular. All references to hereof, herein, here under and other similar compounds of the word here shall mean and refer to these Terms of Service as a whole rather than any particular part of the same. Unless designated as Business Days, all references to days shall mean calendar days. The terms include and including are not limiting. The use of the word "including" in these Terms of Service to refer to specific examples will be construed to mean "including, without limitation" or "including but not limited to" and will not be construed to mean that the examples given are an exclusive list of the topics covered. The headings, captions, headers, footers and version numbers contained in these Terms of Service are intended for convenience or reference and shall not affect the meaning or interpretation of these Terms of Service.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">4. INTELLECTUAL PROPERTY</h3>
                <p className="text-gray-700">
                  The Site is protected by United States and international copyright and trademark laws and other applicable intellectual property laws, and together with any material made available for download, any content, files, code, documents, text, photographs, images, audio, and video, and any materials accessed through or made available for use or download through this Site (collectively, the "Content") may not be copied, distributed, modified, reproduced, published or used, in whole or in part, except for purposes authorized or approved, in writing, by Faster Funding. You may not frame or utilize framing techniques to enclose, or deep link to, our names, trademarks, service marks, logos, Content or other proprietary information without our express written consent. You are authorized solely to view and retain a copy of the pages of the Site for your own personal, non-commercial use. Additionally, you agree that you will not (i) remove or alter trademark or other proprietary notice, or legend displayed on the Site (or printed pages produced from the Site); and (ii) make any other modifications to any documents obtained from the Site other than in connection with completing information required to transact business with Faster Funding.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">5. PRIVACY</h3>
                <p className="text-gray-700">
                  You agree to Faster Funding's Privacy Policy (available at https://www.fasterfunding.com/privacy), which is incorporated by reference into these Terms of Service as if it were set forth herein in its entirety. The Privacy Policy describes how we collect, use, and disclose information provided by you. By using the Sites or Service, you agree to, and are bound by, the terms of the Privacy Policy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">6. STATE DISCLOSURES</h3>
                <p className="text-gray-700">
                  NORTH CAROLINA USERS: DISCLOSURES REQUIRED BY NORTH CAROLINA LAW:  The State of North Carolina has not reviewed and does not approve, recommend, endorse or sponsor any loan contract. The information contained in this disclosure has not been verified by the State of North Carolina.  If you have any questions, see an attorney before you sign a contract or agreement. 
                </p>
                <p className="text-gray-700">
                  As required by North Carolina law, Faster Funding, LLC. has secured a bond by International Fidelity Insurance Company, a surety authorized to do business in North Carolina. Faster Funding does not collect any fees from users or charge users to use the Faster Funding Service. If you secure a loan offer and decide to accept the loan through a lender, the lender will pay Faster Funding a variable origination fee. You may terminate your usage of the Faster Funding Service at any time. For access to the applicable disclosures, please view https://www.sosnc.gov/online_services/search/by_title/_loan_broker_registration and the document linked here.
                </p>
                <p className="text-gray-700">
                  NEBRASKA USERS: DISCLOSURES REQUIRED BY NEBRASKA LAW:  
                  THE STATE OF NEBRASKA HAS NOT REVIEWED AND DOES NOT APPROVE, RECOMMEND, ENDORSE, OR SPONSOR ANY LOAN BROKERAGE AGREEMENT. THE INFORMATION CONTAINED IN THIS DISCLOSURE DOCUMENT HAS NOT BEEN VERIFIED BY THE STATE. IF YOU HAVE QUESTIONS, SEEK LEGAL ADVICE BEFORE YOU SIGN A LOAN BROKERAGE AGREEMENT.
                </p>
                <p className="text-gray-700">
                  You may cancel your agreement with Faster Funding for any reason by emailing support@faster-funding.com or by delivering written notice to Faster Funding at 5900 Balcones Dr, Austin, TX 78731 . You pay no fee to Faster Funding for the Faster Funding Service. You may cancel it at any time.
                </p>
                <p className="text-gray-700">
                  For additional information, please view the document linked here.'
                </p>
                <p className="text-gray-700">
                  CALIFORNIA USERS: If you are a California resident, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Product of the California Department of Consumer Affairs by contacting them in writing at 1625 North Market Boulevard Suite N-112, Sacramento, CA 95814, or by telephone at (800) 952-5210.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">7. ACCOUNT; ACCURACY OF AND CHANGES TO YOUR INFORMATION.</h3>
                <p className="text-gray-700">
                  7.1 Account Creation. In order to use certain features of the Service, you must register for an account ("Account") and provide certain information about yourself. You agree to provide accurate Profile Information and Account Information. You further agree to promptly update all your Profile Information or Account Information whenever the information provided to us is no longer accurate. You can update your information by visiting your profile page on the Sites. You may delete your Account at any time, for any reason, by following the instructions on the Sites. If you need help changing your information, please email us at support@fasterfunding.com. We are not responsible for any payment processing errors or fees or other Service-related issues arising from your failure to keep your Profile Information current. If we determine, in our sole discretion, that you have failed to maintain current and accurate Profile Information or Account Information, we may suspend or terminate your access to the Sites and Service.
                </p>
                <p className="text-gray-700">
                  7.2 Account Responsibilities. You are responsible for maintaining the confidentiality of your Account login information and all activities that occur under your Account. You agree to immediately notify Faster Funding of any unauthorized use, or suspected unauthorized use of your Account or any other breach of security. Faster Funding cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
                </p>
                <p className="text-gray-700">
                  7.3 Our Use of the Account Information. You authorize us to use the Account Information for all purposes related to the Service, and to have continued access to your financial institution, provided that such access shall be used solely for the purpose of providing the Service to you. Account Information shall remain available to you during the term.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">8. THIRD-PARTY LINKS, PRODUCTS AND APPLICATIONS.</h3>
                <p className="text-gray-700">
                  8.1 Third-Party Links and Applications. The Service may contain links to third- party websites, services, products and applications for third parties (collectively, "Third-party Links and Applications"). Such Third-party Links and Applications are not under the control of Faster Funding, and Faster Funding is not responsible for any Third-party Links and Applications. Faster Funding provides access to these Third-party Links and Applications only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-party Links and Applications. You use all Third-party Links and Applications at your own risk, and should apply a suitable level of caution and discretion in doing so. When you click on any of the Third-party Links and Applications, the applicable third party's terms and policies apply, including the third party's privacy and data gathering practices. You should make whatever investigation you feel necessary or appropriate before proceeding with any transaction in connection with such Third-party Links & Applications.
                </p>
                <p className="text-gray-700">
                  8.2 Release. You hereby release and forever discharge Faster Funding (and our officers, employees, agents, successors, and assigns) from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature (including personal injuries, death, and property damage), that has arisen or arises directly or indirectly out of, or that relates directly or indirectly to, the Service (including any interactions with, or act or omission of, our partners or any other third party or any Third party Links and Applications). IF YOU ARE A CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE SECTION 1542 IN CONNECTION WITH THE FOREGOING, WHICH STATES: "A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR."
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">9. INDEMNIFICATION.</h3>
                <p className="text-gray-700">
                  You agree to indemnify and hold Faster Funding (and its officers, employees, and agents) harmless, including costs and attorneys' fees, from any claim or demand made by any third party due to or arising out of (a) your use of the Service, (b) your violation of these Terms of Service, (c) your violation of applicable laws or regulations or (d) your User Content. Faster Funding reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of these claims. You agree not to settle any matter without the prior written consent of Faster Funding. Faster Funding will use reasonable efforts to notify you of any such claim, action or proceeding upon becoming aware of it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TermsofService;
