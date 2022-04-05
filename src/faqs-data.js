const data = {
  styles:{
    zIndex: '9999'
  },
  title: 'FAQs',
  rows: [
    {
      title: 'What is Mimic?',
      content:
        'Mimic is a trustless treasury management protocol. It is fully transparent and non-custodial allowing users to allocate third-party assets to different DeFi strategies in a simple, flexible, and secure way. It is built for any DAO treasury, institutional money, and friends & family savings. .',
    },
    {
      title: 'How does it work?',
      content:
        'The manager creates a portfolio setting the terms under which the treasury assets will be allocated. The DAO simply accepts those terms by sending assets to the portfolio. The DAO is always in full control of those assets and can withdraw them at any time.',
    },
    {
      title: 'Where can a treasury be allocated?',
      content:
        'The manager can only allocate the DAO assets in any of the DeFi strategies that were specified in the portfolio. Each strategy is well defined and works with one or more DeFi instruments (eg. Balancer, AAVE, Yearn, etc).',
    },
    {
      title: 'What other terms are set in the portfolio?',
      content: 'Apart from specifying the strategies in which the manager can allocate the assets, it also specifies the fees the manager will charge, allowed slippage in case trades are involved, what EOAs the manager can use, among other minor settings.',
    },
    {
      title: 'Can the manager withdraw the assets to himself?',
      content: 'No, the manager can only reallocate the assets based on the portfolio conditions that were agreed by the owner.',
    },
    {
      title: 'Is it possible to change the manager?',
      content: 'Yes. DAOs have the ability to delegate their management permissions or revoke access, without affecting the underlying treasury assets.',
    },
    {
      title: 'Can DAOs exit at any time?',
      content: 'Yes. If for some reason the DAO wants to withdraw its assets, it can do it directly without asking for permission to the manager.',
    },
    {
      title: 'I am a dev, is it possible to create my own strategy?',
      content: 'Of course! Mimic protocol allows to create custom strategies. You can connect them to any DeFi instrument that you desire. Right now, programming knowledge is required. However, in the near future, we will create tools to facilitate creating these.',
    },
    {
      title: 'Can I create my own portfolios?',
      content: 'Similar to strategies, custom portfolios can be created. Some examples could be portfolios that require new terms, forced KYC, built-in multisig, etc.',
    },
    {
      title: 'What blockchains are supported by the protocol?',
      content: "Ethereum and Polygon for now. We're more than happy to know if there is interest in supporting new ones. You can drop a message to us.",
    },
  ],
}

export default data
