 import {ApolloClient, InMemoryCache} from '@apollo/client';

 export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pl34da252r01xl104z6lmp/master',
  cache: new InMemoryCache()
 })