// Using the provided `product` and `variant`, this creates an object
// with the necessary data for the cart page. More importantly, `id`
// is used with the Shopify Checkout client.

export const getCartVariant = ({ product, variant }) => {
  if (product && variant) {
    const {
      handle: productHandle,
      title: productTitle,
      featuredMedia: productFeaturedMedia
    } = product.content;
    const { availableForSale, compareAtPrice, sourceEntryId, price, sku } =
      variant;
    if (variant.content) {
      var { featuredMedia, selectedOptions, title } = variant.content;
    } else {
      var featuredMedia, selectedOptions, title;
    }
    return {
      availableForSale,
      compareAtPrice,
      id: sourceEntryId,
      price,
      sku,
      featuredMedia: featuredMedia || productFeaturedMedia,
      selectedOptions,
      title,
      productHandle,
      productTitle
    };
  }
};
