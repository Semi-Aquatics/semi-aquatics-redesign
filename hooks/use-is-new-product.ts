const NEW_PRODUCT_IDS: string[] = [
    "6845836001355",
    "6845836230731",
    "6845836492875",
    "6845836099659",
    "6845836263499",
].map (id => `gid://shopify/Product/${id}`)

export const useIsNewProduct = (id: string) => {
    return NEW_PRODUCT_IDS.includes(id)
}
