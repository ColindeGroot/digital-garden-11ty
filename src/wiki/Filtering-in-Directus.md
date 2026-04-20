---
title: Directus filters
summary: A dive into the many possibility's with directus filtering
tags: ["Directus"]
---

# Directus Filtering

Directus offers filters in the url which is ideal if you only want to extract specfic data. There can be multiple filters in the url making you able to be very specfic during the filtering. Ideal if you have a lot of entrys and only need specfic data based on user inputs.

## Examples

I have already used the filter for mulitple scenario's. One of them being for sorting.

### Sorting

Let's say I have a classroom full of people and I want to sort people based on initials. To test this out is tried out the filters in three different scenario's

1. Sort from A to Z:
   `https://fdnd.directus.app/items/person?limit=-1&sort=name`

2. Start with the letter D:
   {% raw %}`https://fdnd.directus.app/items/person?limit=-1&filter={%22name%22:{%22_starts_with%22:%22D%22 }}`{% endraw %}

3. Start with letter K or D:
   {% raw %}`https://fdnd.directus.app/items/person?fields=name&filter={ "_or": [ { "name": { "_starts_with": "D" } }, { "name": { "_starts_with": "K" } } ] }`{% endraw %}

### Filtering

I also used filters in the url to filter products and create a pagination function. I made 2 variables which i use to calculate the products per page. One for the amount and for for the offset.

For this project I used a pagination function. The project involved a lot of products. Having all the products displayed directly is bad for UX and devestating for the performance. To fix this I added a total_count querry from directus for faster calcultating of the products per page. Beneath the products is a navigation with buttons that help the user navigate the pages.for each button the querry is changed.
