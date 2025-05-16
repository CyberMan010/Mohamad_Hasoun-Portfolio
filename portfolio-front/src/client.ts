import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({

    projectId: 'r9v7rq72',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: import.meta.env.REACT_APP_SANITY_TOKEN,

});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

