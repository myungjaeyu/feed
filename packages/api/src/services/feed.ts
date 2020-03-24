import requset from '@commons/request'

export const getProducts = async (key: string) =>
    requset(`https://gist.githubusercontent.com/styleshare-automation/${ key }/first-goods-response.json`, {
        method: 'GET'
    })

export const getRanks = async (key: string) =>
    requset(`https://gist.githubusercontent.com/styleshare-automation/${ key }/first-mall-response.json`, {
        method: 'GET'
    })