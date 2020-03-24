interface IProduct {
    id: string
    image: {
        id: string
        url: string
    },
    liked: boolean
    likedCount: number
    mobileUrl: string
    price: number
    shopId: string
    shopName: string
    title: string
    url: string
}

export default IProduct
