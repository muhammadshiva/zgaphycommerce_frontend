import { apiSlice } from "./base-query";

export const collectorApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCollectors: builder.query({
            query: () => ({
                url: "/collector",
                method: "GET",
            })
        }),
        getCollectorDetail: builder.query({
            query: (id: number) => ({
                url: `/collectors/artwork/${id}`,
                method: "GET",
            })
        }),
    }),
})

export const { useGetCollectorsQuery, useGetCollectorDetailQuery } = collectorApi;