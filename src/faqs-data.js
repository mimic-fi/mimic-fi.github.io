const data = {
  title: 'FAQs',
  rows: [
    {
      title: 'What is Mimic?',
      content:
        'Mimic is a tool to manage third-party treasuries in a decentralized, trustless, and secure way. It is built for any DAO treasury, institutional investments, and friends & family savings.',
    },
    {
      title: 'How does it work?',
      content:
        'The treasury manager creates a portfolio setting under what conditions assets will be allocated. The treasury owner (eg. DAO) simply accepts those terms by sending assets to the portfolio. The owner is always in full control of those assets and can withdraw them at any time.',
    },
    {
      title: 'Where can a treasury be allocated?',
      content:
        'The manager can only allocate the treasury assets in DeFi strategies that were specified in the portfolio beforehand. Each strategy is well defined and works with one or more DeFi instruments (eg. Aave, Yearn, etc.).',
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
      title: 'Can the treasury owner exit at any time?',
      content: 'Yes. If for some reason the treasury owner wants to withdraw his assets, he can do it directly without asking for permission to the manager.',
    },
    {
      title: 'Can I create my own strategies?',
      content: 'Of course! Mimic protocol allows to create custom strategies. You can connect them to any DeFi instrument that you desire. Right know, programming knowledge is required. However, in the near future, we will create tools to facilitate creating these.',
    },
    {
      title: 'Can I create my own portfolios?',
      content: 'Similar to strategies, custom portfolios can be created. Some examples could be portfolios that require new terms, forced KYC, built-in multisig, etc.',
    },
    {
      title: 'What blockchains are supported by the protocol?',
      content: "Ethereum and Polygon for now. We're more than happy to know if there is interest in supporting new ones. You can drop a message here.",
    },
    {
      title: 'Is there a token involved?',
      content: 'Not now, but we are working on a governance solution to start building a community and a liquidity mining implementation to reward users.',
    },
  ],
}

export default data
