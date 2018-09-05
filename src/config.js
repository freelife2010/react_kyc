export const defaultCoin = 'BTC';

export const coins = [
  {
    name: 'Bitcoin',
    currency: 'BTC',
    hasTokens: false,
    tokens: [],  
  },

  {
    name: 'Ethereum',
    currency: 'ETH',
    hasTokens: true,
    tokens: [
      { tokenName: 'TRONix', ticker: 'TRON' },
      { tokenName: 'VeChain', ticker: 'VEN' },
      { tokenName: 'Binance Coin', ticker: 'BNB' },
      { tokenName: 'OmiseGO', ticker: 'OMG' },
      { tokenName: 'Zilliqa', ticker: 'ZIL' },
    ],
  },

  {
    name: 'Litecoin',
    currency: 'LTC',
    hasTokens: false,
    tokens: [],
  },

  {
    name: 'NEO',
    currency: 'NEO',
    hasTokens: true,
    tokens: [
      { tokenName: 'lrnToken', ticker: 'LRN' },
      { tokenName: 'Trinity Network Credit', ticker: 'TNC' },
      { tokenName: 'Qlink Token', ticker: 'QLC' },
      { tokenName: 'Orbis', ticker: 'OBT' },
      { tokenName: 'THKEY', ticker: 'TKY' },
    ],
  },
  
  {
    name: 'Stellar',
    currency: 'XLM',
    hasTokens: true,
    tokens: [
      { tokenName: 'Mobius', ticker: 'MOBI' },
      { tokenName: 'Repocoin', ticker: 'REPO' },
      { tokenName: 'Firefly', ticker: 'XCN' },
      { tokenName: 'Diruna', ticker: 'DRA' },
      { tokenName: 'Smartlands', ticker: 'SLT' },
    ],
  },
];

export const findCoinByCurrency = (currency) => {
  const index = coins.findIndex(coin => {
    return coin.currency.toUpperCase() === currency.toUpperCase();
  });

  if (index < 0)
    return undefined;

  return coins[index];
}

export const findCoinByName = (name) => {
  const index = coins.findIndex(coin => {
    return coin.name.toUpperCase() === name.toUpperCase();
  });

  if (index < 0)
    return undefined;

  return coins[index];
}

export const findTokenByTicker = (currency, ticker) => {
  const coin = findCoinByCurrency(currency);

  if (coin && coin.hasTokens && coin.tokens && coin.tokens.length) {
    const index = coin.tokens.findIndex(token => {
      return token.ticker.toUpperCase() === ticker.toUpperCase()
    });
    
    if (index < 0) 
      return undefined;

    return coin.tokens[index];
  } else {
    return undefined;
  }
}