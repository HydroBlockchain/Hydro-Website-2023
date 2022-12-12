import { dev, browser } from '$app/environment';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import { fetchData } from "$lib/stores/fetch";

fetchData()