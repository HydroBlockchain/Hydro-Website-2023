<script>
// @ts-nocheck
	//logos
	import drop from "$lib/images/white-drop.svg";
	//exchanges
	import coinex from "$lib/images/exchanges/coinex.svg";
	import bithumb from "$lib/images/exchanges/bithumb.svg";
	import mercatox from "$lib/images/exchanges/mercatox.svg";
	import latoken from "$lib/images/exchanges/latoken.svg";
	import buyucoin from "$lib/images/exchanges/buyucoin.svg";
	//partners
	import bloceducare from "$lib/images/partners/bloceducare.svg";
	import ethernity from "$lib/images/partners/ethernity.svg";
	import sparkpoint from "$lib/images/partners/sparkpoint.png";
	import vulkania from "$lib/images/partners/vulkania.svg";

// 	//Get Medium Data and parse it to JSON
// 	const RSSConverter = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fprojecthydro.medium.com%2Ffeed`;

// 	export const getMediumData = async () => {
    
//     try {
//     const response = await fetch(RSSConverter);
//     const data = await response.json();
//     console.log(data);
//     return data
//     } catch(error){
//         console.log(error)
//     }
// };

// getMediumData()

// const text = document.querySelector('.text');
// const textList = document.querySelector('.textList');

// const getSingleText = async () => {
//     const posts = await getMediumData();
//     const post = posts.items[1]; // latest text (0 to 9)
//     const title = post.title;
//     const pubDate = post.pubDate;
//     const link = post.link;
//     const author = post.author;
//     const content = post.content;

//     const newText = document.createElement('div');
//     newText.className = 'text';
//     newText.innerHTML = `<h1>${title}</h1>
//     <a href="${link}"><h2>Published ${pubDate} by ${author}</h2></a>
//     ${content}`;

//     text.appendChild(newText)
// };

// const getLatestTextsList = async () => {
//     const posts = await getMediumData();
//     for (let post of posts.items){
//         const newItem = document.createElement('li');
//         const title = post.title;
//         const link = post.link;
//         const thumbnail = post.thumbnail;

//         newItem.innerHTML = `<img src="${thumbnail}" alt=""><a href="${link}"><h3>${title}</h3></a>`;

//         textList.appendChild(newItem)

//     }
// };

// getSingleText()
// getLatestTextsList()

// const cards = document.querySelector('.cards');
// const header = document.querySelector('.header');

// const getTextToCard = async () => {
//     const posts = await getMediumData();
//     for (let post of posts.items){
//         const newItem = document.createElement('col');
//         newItem.className = 'col';
        
//         const title = post.title;
//         const link = post.link;
//         const thumbnail = post.thumbnail;
//         const pubDate = post.pubDate;
//         const author = post.author;

//         newItem.innerHTML = `<div class="card">
//         <img src="${thumbnail}" class="card-img-top" alt="Medium Text Thumbnail">
//         <div class="card-body">
//           <a href="${link}"><h5 class="card-title">${title.toUpperCase()}</h5></a>
//           <p class="card-text">Published by ${author} in ${pubDate}</p>
//         </div>
//       </div>`;

//         cards.appendChild(newItem)

//     }
// };

// const getFeedTitle = async () => {
//     const data = await getMediumData();
//     header.textContent = `${data.feed.title}`;
// }

// getFeedTitle();
// getTextToCard();

</script>

<svelte:head>
	<title>Home</title>
	<meta name="Project Hydro" content="Project Hydro" />
</svelte:head>

<section>
	<div class="full" id="animated-border">
		<img src={drop} alt="hydro-logo" id="hydro-drop"/>
		<div class="tagline">Multi-chain protocols securing the web3 reality.</div>
	</div>

	<div class="multiple-containers">
			<div class="one-quarter" id="animated-border">Introduction</div>
			<div class="three-quarter" id="animated-border">Blog Feed
				<!-- <div class="cards row row-cols-1 row-cols-md-2 g-4">

				</div> -->
			</div>
		</div>

		<div class="full" id="animated-border">
			<div class="title">Roadmap</div>
				<div class="information">
					<div class="roadmap">
					<div class="kvartal">Q1</div>
					<div class="kvartal">Q2</div>
					<div class="kvartal">Q3</div>
					<div class="kvartal">Q4</div>
				</div>
			</div>
		</div>

	<div class="multiple-containers-2">
		<div class="half" id="animated-border">
			<div class="title">Partners</div>
			<div class="partners">
				<a href="https://www.blocedu.care/" target="_blank" rel="noopener noreferrer"><img src={bloceducare} alt="bloceducare" id="partner"/></a>
				<a href="https://vulkania.io/coins/hydro" target="_blank" rel="noopener noreferrer"><img src={vulkania} alt="vulkania" id="partner"/></a>
			</div>
			<div class="partners">
				<a href="https://sparkpoint.io/" target="_blank" rel="noopener noreferrer"><img src={sparkpoint} alt="sparkpoint" id="partner"/></a>
				<a href="https://ethernity.live/" target="_blank" rel="noopener noreferrer"><img src={ethernity} alt="Ethernity" id="partner"/></a>
			</div>
		</div>

		<div class="half" id="animated-border" style="margin-right:0px;margin-left:15px;">
			<div class="title">Exchanges</div>
			<div class="exchanges">
				<a href="https://coinex.com" target="_blank" rel="noopener noreferrer"><img src={coinex} alt="Coinex" id="exchange"/></a>
				<a href="https://www.bitglobal.com/en-us/spot/trade?q=HYDRO-USDT" target="_blank" rel="noopener noreferrer"><img src={bithumb} alt="Bithumb" id="exchange"/></a>
				<a href="https://mercatox.com/exchange/HYDRO/BTC" target="_blank" rel="noopener noreferrer"><img src={mercatox} alt="Mercatox" id="exchange"/></a>
			</div>
			<div class="exchanges">
				<a href="https://latoken.com/exchange/HYDRO_USDT" target="_blank" rel="noopener noreferrer"><img src={latoken} alt="LAtoken" id="exchange"/></a>
				<a href="https://trade.buyucoin.com/trade/HYDRO-INR" target="_blank" rel="noopener noreferrer"><img src={buyucoin} alt="BuyUcoin" id="exchange"/></a>
			</div>
		</div>
	</div>

	<div class="full" id="animated-border">
		<div class="tagline">Contact Us</div>
	</div>

</section>

<style>
	.tagline{
		margin-top: 2rem;
	}

	.half {
		height: var(--container-height-mini);
	}

	.three-quarter, .one-quarter {
		height: var(--container-height-small);
	}

	.title{
		font-size: var(--font-size-large);
		color: var(--title-color);
	}

	.exchanges {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.roadmap{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.kvartal{
		display: flex;
		justify-content: center;
		margin: 20px;
	}

	.partners {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
