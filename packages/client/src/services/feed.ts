import requset from '@commons/request'

export const getProducts = async (uri: string) =>
    requset(`/api/feed/products?uri=${uri}`, {
        method: 'GET'
    })

export const getRank = async (uri: string) =>
    requset(`/api/feed/ranks?uri=${uri}`, {
        method: 'GET'
    })
