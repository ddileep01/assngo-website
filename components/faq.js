import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "" : "transform rotate-180"
                      } w-5 h-5 text-green-950`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How can I get involved with Akhanda Seva Samsthan?",
    answer: "There are various ways to get involved, such as volunteering, making a donation, or participating in our events. Visit our 'Get Involved' page for more information.",
  },
  {
    question: "How can I donate to Akhanda Seva Samsthan?",
    answer: "You can make a donation through our website by visiting the 'Donate' page. We also accept UPI.",
  },
  {
    question: "Where does the money from donations go?",
    answer:
      "The funds from donations are used to support specific projects or initiatives. We are committed to transparency and accountability in the use of funds.",
  },
  {
    question: "Is Akhanda Seva Samsthan a registered non-profit organization? ",
    answer:
      "Yes, Akhanda Seva Samsthan is a registered non-profit organization. We are committed to operating with transparency and accountability.",
  },
  {
    question: "Can my company or organization partner with Akhanda Seva Samsthan?",
    answer:
      "Yes, we welcome partnerships with businesses and organizations that share our values. Contact us for more information.",
  },
];

export default Faq;