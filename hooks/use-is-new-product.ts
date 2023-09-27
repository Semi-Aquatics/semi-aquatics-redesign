const NEW_PRODUCT_IDS: string[] = [
    "6857907503179",
    "6857907568715",
    "6857907634251",
    "6857907667019",
    "6857907961931",
    "6857907994699",
    "6857907929163",
    "6857907732555",
    "6857907798091",
    "6857908027467",
].map (id => `gid://shopify/Product/${id}`)

export const useIsNewProduct = (id: string) => {
    return NEW_PRODUCT_IDS.includes(id)
}
