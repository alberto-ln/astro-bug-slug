import { defineCollection } from "astro:content";

export const collections = {
    home: defineCollection({
        loader: () => {
            return [{
                id: "home-id",
                slug: "data-slug",
                slugA: "data-slugA",
            }]
        }
    })
}