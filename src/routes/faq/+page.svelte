<script>
    import Question from "$lib/components/faq/question.svelte";

    const list = [
        {
            question: "Welcome to the Hydro FAQ",
            answer: "Here we will try to answer all of your questions!",
        },
        {
            question: "What is the main purpose of project Hydro?",
            answer: "Project Hydro is web3, multi-chain decentralized ecosystem which uses cutting-edge cryptographic technology to secure user identities, accounts, and transactions. Hydro aims to decentralize financial services by bringing public blockchain technology to traditional private systems. It also allows developers around the world to boost their platforms and applications with this innovative technology. As web 3.0 is our coming future and semantic web has already been used, where data is arranged and kept in such a way that computers can easily decipher at a faster pace.",
        },
        {
            question: "What is Hydroswap?",
            answer: "HydroSwap is not your typical decentralized exchange that the DeFi space comes across regularly. It has evolved to involve much more than that. It runs on the Binance Smart Chain to offer high scalability and better transactional experience by users. With this platform, users can seamlessly exchange their tokens/coins for other tokens/coins. They can also become liquidity providers for lucrative rewards. The use cases of HydroSwap continue to increase as newer versions are released into the market. To ensure that everyone, not minding their level of knowledge in the blockchain technology can enjoy the features that HydroSwap offers, the user interface was designed to improve user experience. It is easy to swap tokens without paying a hand and a leg to do that. With HydroSwap, users can easily trade their tokens, stake them and earn. For those that want to create liquidity pools, it is feasible.",
        },
        {
            question: "What is Aegir wallet?",
            answer: "Aegir (Ægir) Wallet is our Multi Coin wallet that supports for Bitcoin, Ethereum, Binance Smart Chain, ERC-20, BEP-20, ERC-721 & ERC1155. Aegir does not require any subscription nor it collects any personal information, and uses hydro protocols to provide transfers all over the world through progressive security. The user is further encouraged to strengthen security with Hydro ID, Biometric Security and local encryption of keys.",
        },
        {
            question: "What is Keresverse?",
            answer: "Keresverse is an open world game containing for example a first person shooter game that will put players into two teams to compete against each other. The objective of that FPS game will be to eliminate the rest of the enemy team’s players in order to achieve victory and take home the prize in the form of blockchain assets in the Play to Earn model. Apart from that there will be multiple other areas of the KeresVerse such as a Casino, Marketplace, Lounge and more.",
        },
        {
            question: "How can Hydro benefit its users?",
            answer: "Creating a robust ecosystem with supply & demand dynamics and market forces. As the ecosystem grows, HYDRO tokens will be integral in: Using dApps, Incentivising participation, Validating users. For instance, the only way to gain initial access to Keres Assets in the KeresVerse will be to stake your Hydro. The evaporation Function natively used in all Hydro smart contracts Consumes a small amount of Hydro which continuously decreases the supply.",
        },
        {
            question: "How to swap Hydro between blockchains?",
            answer: "You can swap Hydro tokens between Ethereum, Binance Smart Chain, Polygon, CoinEx Smart Chain & Moonriver using our own Hydro Bridge.",
        },
        {
            question: "How to stake Hydro and what are the rewards?",
            answer: "Staking is available on the Hydro Swap release along with liquidity pools and the Droplet, The APR is Dynamic and depends on the number of stakers on the platform. Check out the Hydroswap to find out more!",
        },
        {
            question: "How to add Hydro Token in a Web3 wallet?",
            answer: "There is a tool for that! Check out the technology page here on the hydro website to add the Hydro token on all networks its deployed on.",
        },
        {
            question: "Did Hydro have any ICO, or received any investment?",
            answer: "No, Hydro started as an airdrop in Github, all users needed to comply with the tasks to be eligible for airdrop. Project Hydro never had any crowdfunding, Initial Coin Offering nor it received any private investment.",
        },
        {
            question: "How many percent of total supply does the Team hold?",
            answer: "The total number of Hydro tokens that the team holds is around 9% of Total Supply.",
        },
    ];
    let currentActive = 0;
</script>

<svelte:head>
    <title>FAQ</title>
    <meta name="FAQ" content="FAQ" />
</svelte:head>

<section>
    {#each list as item, index}
        <Question {item} {index} on:select={(e) => (currentActive = e.detail)} current={currentActive}/>
    {/each}
</section>

<style lang="scss">
    section {
        max-width: var(--cw-desktop);
    }
</style>
