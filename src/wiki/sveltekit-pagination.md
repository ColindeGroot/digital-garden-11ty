---
title: Pagination in SvelteKit
summary: Using Directus querries to improve performance
tags: ["Directus", "SvelteKit"]
---

# Milledoni - 1800 products

When you have over 1,800 products in a database, trying to render them all at once on a single webpage is obviously not ideal for performance.

The challenge was to display and load the products but not impact the UX and performance while doing so.

## The solution

Instead of directly loading all products on the frontend, I decided to build server-side pagination. I configured the API from Directus to set an limit and offset for preloading only a limited amount of data.

1. Directus querry (+layout.server.js)
   First, I had to grab the page parameter right out of the URL, calculated the limit and offset, and passed that to the database.
   I dived all the products between pages with the limit (~1800 / limit) and with the offset I calculated the amount of pages needed.

```js
// Grabbing the page number from the URL, defaulting to 1
const page = Number(url.searchParams.get("page")) || 1;
const limit = 20;
const offset = (page - 1) * limit;

// Fetching only what we need + the total count for the UI math
const [productsRes, totalRes] = await Promise.all([
  fetch(`YOUR_DIRECTUS_URL/items/products?limit=${limit}&offset=${offset}`),
  fetch(`YOUR_DIRECTUS_URL/items/products?aggregate[count]=*`),
]);

// Amount of pages passed to the html

const totalProducts = totalData.data[0].count;
const totalPages = Math.ceil(totalProducts / limit);
```

2.The Pagination (+page.svelte)
With the data setup we now need to build the naigation. I passed down the data and

```svelte

<nav>
  <ul class="pagination">
    {#if Number(data.page) > 1}
    <li>
      <button class="navigate-btn" onclick="{()" ="">
        goto(`/?page=${Number(data.page) - 1}`)} aria-label="Previous page">
        &lt;
      </button>
    </li>
    {/if} {#if Number(data.page) > 1}
    <li>
      <button onclick="{()" ="">goto('/?page=1')}>1</button>
    </li>

    <span aria-hidden="true">...</span>
    {/if} {#if Number(data.page) > 2}
    <li>
      <button onclick="{()" ="">
        goto(`/?page=${Number(data.page) - 1}`)}> {Number(data.page) - 1}
      </button>
    </li>
    {/if}

    <li>
      <button class="active" disabled>{data.page}</button>
    </li>

    {#if Number(data.page) < data.totalPages - 1}
    <li>
      <button onclick="{()" ="">
        goto(`/?page=${Number(data.page) + 1}`)}> {Number(data.page) + 1}
      </button>
    </li>
    {/if} {#if Number(data.page) < data.totalPages}
    <span aria-hidden="true">...</span>

    <li>
      <button onclick="{()" ="">
        goto(`/?page=${data.totalPages}`)}> {data.totalPages}
      </button>
    </li>
    {/if} {#if Number(data.page) < data.totalPages}
    <li>
      <button class="navigate-btn" onclick="{()" ="">
        goto(`/?page=${Number(data.page) + 1}`)} aria-label="Next page"> &gt;
      </button>
    </li>
    {/if}
  </ul>
</nav>
```

Beneath the list, I built a navigation bar with buttons that route the user to the correct /?page=X URL, triggering the server to fetch the next batch.

## What I Learned

Ultimately, this PR was a huge lesson in data flow. I learned how to preload only certain amount of data without comprosmising on the Ux.
