import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
  } from "@apollo/client";

import { API_URL } from './config'  

export { ApolloProvider }

export * from "./functions"  


export const Client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
});
  