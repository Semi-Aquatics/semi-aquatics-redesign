export const firstSelectedVariant = (product: any) => {
    const variants = product.node.variants.edges
    const availableVariant = variants.find((variant: any) => variant.node.availableForSale)
    return availableVariant || product.node.variants.edges[0]
  }
  