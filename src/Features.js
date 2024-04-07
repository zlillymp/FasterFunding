import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: "Rapid Application Process",
    description: "Our simplified application can be completed in minutes, not days. Start your journey towards financial growth without the wait.",
    href: "#",
    icon: ArrowPathIcon, // Assigning an imported icon
  },

  {
    name: "Flexible Funding Options",
    description: "From lines of credit to term loans, we offer a variety of funding solutions tailored to meet the unique needs of your small business.",
    href: "#",
    icon: LockClosedIcon, // Assigning an imported icon
  },
  {
    name: "Dedicated Support",
    description: "Our team of funding specialists is here to guide you every step of the way, ensuring a smooth and supportive funding experience.",
    href: "#",
    icon: ArrowPathIcon, // Reusing an icon for demonstration
  },
  // Add more features as needed
];

export default function Example() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Funding at the Speed of Business</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Accelerate Your Growth with Faster Funding
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            At Faster-Funding.com, we understand the pace of small business. That's why we've streamlined our funding process to get you the capital you need, swiftly and efficiently. Say goodbye to lengthy applications and weeks of waiting. Welcome to the new era of business financing.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  {/* Dynamically rendering the icon component */}
                  <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                   
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
