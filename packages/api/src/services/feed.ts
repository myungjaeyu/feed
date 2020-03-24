import requset from '@commons/request'

export const getProducts = async (uri: string) => requset(uri, { method: 'GET' })

export const getRanks = async (uri: string) => requset(uri, { method: 'GET' })