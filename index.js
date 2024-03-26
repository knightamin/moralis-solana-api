const Moralis = require('moralis').default;
const { SolNetwork } = require('@moralisweb3/common-sol-utils');

const runApp = async () => {
    await Moralis.start({
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImY1NzdjYWNkLThlYmEtNDYwNy1hZTk5LWU5YjFiNWZlYzI5MSIsIm9yZ0lkIjoiMzg0ODMyIiwidXNlcklkIjoiMzk1NDE0IiwidHlwZUlkIjoiMWNmODU0OTQtNWRlOC00NTE4LThhNzgtNmM0ZjY4ZTkzMzVjIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTE0NjExMTgsImV4cCI6NDg2NzIyMTExOH0.-D6q6jpDQ-VHGbweG5ZPudUUnhX6dUgleIChAkbk4Wg',
        // ...and any other configuration
    });

    //change address wallet here
    const address = 'HhBXHoJCgMNyPRCx3qVEqHnUFNZpsUnfLDZBNK8gmvgh';

    const network = SolNetwork.MAINNET;

    const response = await Moralis.SolApi.account.getPortfolio({
        address,
        network,
    });

    console.log(response.toJSON());
};

runApp();
