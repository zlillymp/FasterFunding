import { ArrowPathRoundedSquareIcon} from '@heroicons/react/20/solid'
import { CubeTransparentIcon, CurrencyDollarIcon, BellAlertIcon, CloudArrowDownIcon, PhoneArrowDownLeftIcon, ClipboardDocumentCheckIcon} from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Apply faster</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to Your Personal Funding Dashboard</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">Our Borrower Platform is a user-friendly interface designed specifically for you, making it simple to keep track of your applications, gain valuable insights into the funding journey, and take proactive steps towards securing your funding.</p>
            </div>
           
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F330dd2ae144566a7c4443e888589b8e9.cdn.bubble.io%2Ff1709770432773x408748519761427140%2FScreenshot%25202024-03-06%2520at%25206.13.39%25E2%2580%25AFPM.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ClipboardDocumentCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">View All Your Applications</strong> Stay updated with all your submitted applications and their current statuses at a glance.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <PhoneArrowDownLeftIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Direct Line to Your Funding Advisor</strong> Say goodbye to confusion. Your dedicated funding advisor's contact details are readily available, ensuring you're never left in the dark.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CloudArrowDownIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Upload Documents Without Hassle</strong> Secure your offer by uploading any required documents smoothly through the platform.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Resume Applications Effortlessly</strong> Haven't completed an application? No problem. Just hit 'Resume' and pick up right where you left off.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CubeTransparentIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Transparent Offer Details</strong> Explore your offers with ease. Understand the terms and make informed decisions with simple explanations and detailed breakdowns.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CurrencyDollarIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Accept Offers with Confidence</strong> Found the perfect offer? Accept it with a click and move one step closer to your funding.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BellAlertIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Stay Informed on Funding Details</strong> Once funded, you'll receive all the details directly on the platform. It's funding made simple.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              Forget complicated processes and say hello to a straightforward, efficient way to manage your funding journey. With our Borrower Platform, you're in control, equipped with all the tools you need to navigate the funding process with ease and confidence.


              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Start Your Journey Today</h2>
              <p className="mt-6">
              Worried about technical hurdles? Don't be. Our platform is designed for ease of use, ensuring you can focus on what really matters—securing your funding. With intuitive navigation and clear guidance at every step, managing your funding applications has never been simpler.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
