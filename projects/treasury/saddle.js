const {  nullAddress,treasuryExports } = require("../helper/treasury");

module.exports = treasuryExports({
  arbitrum: {
    tokens: [ 
        '0x5575552988a3a80504bbaeb1311674fcfd40ad4b',
        '0x2cab3abfc1670d1a452df502e216a66883cdf079',
        '0x17fc002b466eec40dae837fc4be5c67993ddbd6f',
        '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
     ],
    owners: ['0x8e6e84ddab9d13a17806d34b097102605454d147'],
    ownTokens: [],
  },
})