
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is Wi-Fi hacking illegal?",
      answer: "Yes, hacking into Wi-Fi networks without explicit permission is illegal in most countries and can result in severe penalties. The techniques taught on this website should only be used on your own networks or with explicit permission for educational or security testing purposes."
    },
    {
      question: "Can I do this without a Wi-Fi adapter?",
      answer: "For practical Wi-Fi security testing, a compatible wireless adapter that supports monitor mode and packet injection is necessary. Your laptop's built-in Wi-Fi card typically doesn't support these features. We recommend using adapters like the Alfa AWUS036ACH or TP-Link TL-WN722N (v1)."
    },
    {
      question: "Can I hack using Ethernet?",
      answer: "This course focuses on wireless (Wi-Fi) security testing. Ethernet networks have different security mechanisms and vulnerabilities that require different tools and approaches. While you can run Kali Linux and its tools over an Ethernet connection, the specific techniques covered here apply to wireless networks."
    },
    {
      question: "Is Raspberry Pi capable of Wi-Fi hacking?",
      answer: "Yes, a Raspberry Pi can be used for Wi-Fi security testing. You'll need to install Kali Linux ARM on it and connect a compatible external Wi-Fi adapter. The Raspberry Pi's portable nature makes it an excellent platform for wireless security testing, though it may be slower than a more powerful laptop."
    },
    {
      question: "How long does it take to crack a Wi-Fi password?",
      answer: "The time required depends on many factors: the encryption type, password complexity, your hardware, and the method used. WPA/WPA2 passwords can take anywhere from minutes to years to crack, depending on password strength. Simple or common passwords might be found quickly through dictionary attacks, while complex unique passwords may be practically uncrackable with current technology."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find answers to the most common questions about Wi-Fi security testing.
          </p>
          <div className="w-24 h-1 bg-hack-green mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-hack-blue">
                <AccordionTrigger className="text-left py-4 text-lg font-medium hover:text-hack-green">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
