import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
{
question: "Why should someone use faster-funding.com?",
answer:
"Faster-funding.com is a valuable resource for small businesses seeking quick and efficient access to financing. By partnering with a wide network of lenders and financing providers, faster-funding.com simplifies the process of finding and applying for the most suitable financing option for your business. Their experienced team of funding experts can guide you through the application process, help you compare offers, and ensure you secure the best terms and rates available. Whether you need a line of credit, an SBA loan, a term loan, equipment financing, or accounts receivable financing, faster-funding.com can connect you with the right lender and expedite the funding process. With their commitment to fast, reliable service and their extensive knowledge of the financing landscape, faster-funding.com is an excellent choice for small businesses looking to grow and succeed.",
},
{
question: "What are the different types of financing available for small businesses?",
answer:
"Small businesses can explore various financing options, including lines of credit, SBA loans, term loans, equipment loans, factoring, and accounts receivable financing. Each option has its own characteristics and benefits, so it's essential to evaluate your specific needs and financial situation to determine the most suitable financing solution for your business.",
},
{
question: "What is a line of credit, and how does it work for small businesses?",
answer:
"A line of credit is a flexible financing option that allows small businesses to access funds up to a predetermined credit limit. You can draw funds as needed, pay interest only on the amount borrowed, and repay the funds over time. Lines of credit are useful for managing cash flow, covering short-term expenses, or seizing business opportunities.",
},
{
question: "What are SBA loans, and how can small businesses qualify for them?",
answer:
"SBA (Small Business Administration) loans are government-backed loans designed to support small businesses. The SBA partners with approved lenders to provide favorable terms and lower interest rates. To qualify for an SBA loan, businesses typically need to meet specific criteria, such as being a for-profit business, operating in the U.S., having invested equity, and demonstrating a need for financing.",
},
{
question: "How do term loans work for small businesses?",
answer:
"Term loans provide small businesses with a lump sum of money that is repaid over a fixed period, usually with fixed monthly payments. These loans can be used for various purposes, such as expansion, equipment purchases, or long-term investments. The interest rates and repayment terms vary depending on the lender, the borrower's creditworthiness, and the loan amount.",
},
{
question: "What is equipment financing, and how can it benefit small businesses?",
answer:
"Equipment financing is a type of loan specifically designed to help small businesses purchase or lease necessary equipment. The equipment itself serves as collateral for the loan, making it easier for businesses to secure financing. Equipment loans can help businesses acquire essential assets while preserving working capital for other expenses.",
},
{
question: "What are factoring and accounts receivable financing?",
answer:
"Factoring and accounts receivable financing are financing options that allow small businesses to leverage their outstanding invoices to obtain funding. With factoring, a business sells its invoices to a factoring company at a discount in exchange for immediate cash. Accounts receivable financing, on the other hand, uses invoices as collateral to secure a loan. These options can help businesses improve cash flow and manage their accounts receivable more effectively.",
},
// More questions...
]

export default function Example() {
return (
<div className="bg-white">
<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
<h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
<dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
{faqs.map((faq) => (
<Disclosure as="div" key={faq.question} className="pt-6">
{({ open }) => (
<>
<dt>
<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
<span className="text-base font-semibold leading-7">{faq.question}</span>
<span className="ml-6 flex h-7 items-center">
{open ? (
<MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
) : (
<PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
)}
</span>
</Disclosure.Button>
</dt>
<Disclosure.Panel as="dd" className="mt-2 pr-12">
<p className="text-base leading-7 text-gray-600">{faq.answer}</p>
</Disclosure.Panel>
</>
)}
</Disclosure>
))}
</dl>
</div>
</div>
</div>
)
}