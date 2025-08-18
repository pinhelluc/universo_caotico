import OpengraphImage from 'components/opengraph-image';
import { getCollection } from 'lib/shopify';

export default async function Image({
  params
}: {
  params: { collection: string };
}) {
  let collection = undefined;
  try {
    collection = await getCollection(params.collection);
  } catch (error) {
    console.warn('Failed to fetch collection for opengraph image:', error);
  }
  const title = collection?.seo?.title || collection?.title;

  return await OpengraphImage({ title });
}
