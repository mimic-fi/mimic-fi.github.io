const data = {
  styles: {
    zIndex: "9999",
  },
  title: "FAQs",
  rows: [
    {
      title: "What is Mimic?",
      content:
        "Mimic is an automated treasury management protocol. It automates the way a treasury interacts with the most popular DeFi Instruments making the management experience much easier than before.",
    },
    {
      title: "How does it work?",
      content:
        "The protocol provides a set of actions that are triggered when pre-set conditions are met. These conditions determine who, when and how they can be executed.",
    },
    {
      title: "What actions are provided?",
      content:
        "There are standard actions that Mimic defines to automate treasury management. These actions are collect, swap, bridge, join strategy, exit strategy and withdraw.",
    },
    {
      title: "How can an action be triggered?",
      content:
        "It can be exectuted manually from an EOA, externally by another smart contract or automatically via Mimic network of bots. .",
    },
    {
      title: "When is an action executed?",
      content:
        "An action can be scheduled every certain period of time or on a specific date. It can be triggered depending on market conditions, gas price, external smart contract status and other circumstances. ",
    },
    {
      title: "Who is in custody of the assets?",
      content:
        "Mimic protocol is fully trustless. Even if a bot or a delegated manager is executing an action, the owner of the assets is allways in full custody of them.",
    },
    {
      title: "I am a dev, is it possible to create my own action?",
      content:
        "Of course! there is a standard interface that define the way an action communicates with Mimic protocol providing full flexibility to create custom actions for specific processes.",
    },
    {
      title: "I am a dev, is it possible to create my own strategy?",
      content:
        "Yes, Mimic protocol allows to create custom strategies. You can connect them to any DeFi instrument you desire or to an existen ERC-4626 vault.",
    },
    {
      title: "What blockchains are supported by the protocol?",
      content:
        "Ethereum and Polygon for now. We're more than happy to know if there is interest in supporting new ones. You can drop a message to us.",
    },
  ],
};

export default data;
