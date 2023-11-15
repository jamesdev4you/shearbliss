import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '5a2uwhtx',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-25',
});

export default client;
