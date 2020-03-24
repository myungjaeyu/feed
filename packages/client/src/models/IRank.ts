interface IRank {
    id: string
    description: string
    image: {
        id: string
        url: string
    }
    liked: boolean
    name: string
    url: string
}

export default IRank