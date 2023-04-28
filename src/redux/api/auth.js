import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_URL}/` }),
  endpoints: (builder) => ({
    login: builder.query({
      query: ({ cedula, password }) => ({
        url: "login/auth",
        method: "POST",
        body: { cedula, password },
      }),
    }),
  }),
});

export const { useLoginQuery } = authApi;
