<script lang="ts">
	import { onMount } from 'svelte';
	import { partytownSnippet } from '@builder.io/partytown/integration';

	let scriptEl: HTMLScriptElement;
	onMount(() => {
		if (scriptEl) {
			scriptEl.textContent = partytownSnippet();
		}
	});
</script>

<svelte:head>
	<script>
		partytown = {
			forward: ['dataLayer.push'],
			resolveUrl: (url) => {
				const siteUrl = 'https://monogram.io/proxytown';

				if (url.hostname === 'www.googletagmanager.com') {
					const proxyUrl = new URL(`${siteUrl}/gtm`);

					const gtmId = new URL(url).searchParams.get('id');
					gtmId && proxyUrl.searchParams.append('id', gtmId);

					return proxyUrl;
				} else if (url.hostname === 'www.google-analytics.com') {
					const proxyUrl = new URL(`${siteUrl}/ga`);

					return proxyUrl;
				}

				return url;
			}
		};
	</script>

	<script bind:this={scriptEl}></script>

	<script
		type="text/partytown"
		src="https://www.googletagmanager.com/gtag/js?id=G-89X6206TEX"
	></script>
	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-89X6206TEX', {
			page_path: window.location.pathname
		});
	</script>
</svelte:head>

<slot />
