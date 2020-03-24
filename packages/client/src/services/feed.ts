import requset from '@commons/request'

export const getProducts = async (key: string) =>
    requset(`/api/feed/products?key=${key}`, {
        method: 'GET'
    })

export const getRank = async (key: string) =>
    requset(`/api/feed/ranks?key=${key}`, {
        method: 'GET'
    })
