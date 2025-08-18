import type { Product, Menu } from 'lib/shopify/types';

// Minimal mocked products used when Shopify credentials are missing.
export const mockProducts: Product[] = [
  {
    id: 'gid://shopify/Product/1',
    handle: 'mock-hoodie',
    availableForSale: true,
    title: 'Mock Hoodie',
    description: 'A warm and comfy mock hoodie.',
    descriptionHtml: '<p>A warm and comfy mock hoodie.</p>',
    options: [],
    priceRange: {
      maxVariantPrice: { amount: '49.00', currencyCode: 'USD' },
      minVariantPrice: { amount: '49.00', currencyCode: 'USD' }
    },
    variants: [],
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&h=1200&fit=crop',
      altText: 'Mock Hoodie',
      width: 1200,
      height: 1200
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&h=1200&fit=crop',
        altText: 'Mock Hoodie',
        width: 1200,
        height: 1200
      }
    ],
    seo: {
      title: 'Mock Hoodie',
      description: 'A warm and comfy mock hoodie.'
    },
    tags: [],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'gid://shopify/Product/2',
    handle: 'mock-tshirt',
    availableForSale: true,
    title: 'Mock T-Shirt',
    description: 'A classic cotton tee.',
    descriptionHtml: '<p>A classic cotton tee.</p>',
    options: [],
    priceRange: {
      maxVariantPrice: { amount: '29.00', currencyCode: 'USD' },
      minVariantPrice: { amount: '29.00', currencyCode: 'USD' }
    },
    variants: [],
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&h=1200&fit=crop',
      altText: 'Mock T-Shirt',
      width: 1200,
      height: 1200
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&h=1200&fit=crop',
        altText: 'Mock T-Shirt',
        width: 1200,
        height: 1200
      }
    ],
    seo: {
      title: 'Mock T-Shirt',
      description: 'A classic cotton tee.'
    },
    tags: [],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'gid://shopify/Product/3',
    handle: 'mock-mug',
    availableForSale: true,
    title: 'Mock Mug',
    description: 'A mug for your favourite beverage.',
    descriptionHtml: '<p>A mug for your favourite beverage.</p>',
    options: [],
    priceRange: {
      maxVariantPrice: { amount: '15.00', currencyCode: 'USD' },
      minVariantPrice: { amount: '15.00', currencyCode: 'USD' }
    },
    variants: [],
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=1200&h=1200&fit=crop',
      altText: 'Mock Mug',
      width: 1200,
      height: 1200
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=1200&h=1200&fit=crop',
        altText: 'Mock Mug',
        width: 1200,
        height: 1200
      }
    ],
    seo: {
      title: 'Mock Mug',
      description: 'A mug for your favourite beverage.'
    },
    tags: [],
    updatedAt: new Date().toISOString()
  }
];

// Mock navigation links for header & footer when Shopify is disabled.
export const mockMenu: Menu[] = [
  { title: 'Home', path: '/' },
  { title: 'Products', path: '/search' },
  { title: 'About', path: '/about' }
];
