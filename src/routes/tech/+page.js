import { dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import { getStakedData } from "$lib/stores/staked";
import { getMediumData } from "$lib/stores/medium";
import { getPriceData } from "$lib/stores/price";

getStakedData();
getMediumData();
getPriceData();