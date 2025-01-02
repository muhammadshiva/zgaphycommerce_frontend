import { apiSlice } from "./base-query";

export const artworkApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
       getAllArtwork: builder.query({
            query: () => ({
                url: "/artwork",
                method: "GET",
            })
       }),
       getDetailArtwork: builder.query({
         query: (slug: string) => ({
             url: `/artwork/${slug}`,
             method: "GET",
         })
       })
    }),
})

export const { useGetAllArtworkQuery, useGetDetailArtworkQuery } = artworkApi;