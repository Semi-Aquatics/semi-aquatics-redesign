const NEW_PRODUCT_IDS: string[] = [
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4MjY1NTYzOTE0OTk=",
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4MjY1NTYzNTg3MzE=",
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4MjY1NTYyOTMxOTU=",
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4MjY1NTYzMjU5NjM=",
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4MjY1NTYyNjA0Mjc=",
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4MjY1NTYyMjc2NTk=",
]

export const useIsNewProduct = (id: string) => {
    return NEW_PRODUCT_IDS.includes(id)
}