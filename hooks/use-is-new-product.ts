const NEW_PRODUCT_IDS: string[] = [
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4MTkxNTA0NjMwNTE=",
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4MTkxNTA3OTA3MzE=",
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4MTkxNTA3NTc5NjM=",
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4MTkxNTA4ODkwMzU=",
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4MTkxNTA5MjE4MDM=",
]

export const useIsNewProduct = (id: string) => {
    return NEW_PRODUCT_IDS.includes(id)
}