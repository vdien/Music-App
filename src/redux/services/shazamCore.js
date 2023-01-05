import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set(
                "X-RapidApi-Key",
                "3c170fecf0msh7bea8c54ef2bfb8p136214jsnc5fd9f819ba4"
            );
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => "/charts/track" }),
    }),
});
export const { useGetTopChartsQuery } = shazamCoreApi;