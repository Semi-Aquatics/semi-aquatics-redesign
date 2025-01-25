export type ProductImageT = {
  altText: string | null;
  transformedSrc: string;
};

export type ProductVariantT = {
  edges: Array<{
    node: any;
  }>;
};

export type ProductT = {
  availableForSale: boolean;
  id: string;
  images: {
    edges: Array<{
      node: ProductImageT;
    }>;
  };
  title: string;
  variants: ProductVariantT;
};

export type CollectionT = {
  __typename: string;
  title: string;
  id: string;
  products: {
    edges: Array<{
      node: ProductT;
    }>;
  };
};
