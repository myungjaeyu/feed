import { useState, Dispatch, SetStateAction } from 'react'

import {  getProducts, getRank } from '@services/feed'

import IAppState from '@models/IAppState'
import IProduct from '@models/IProduct'
import IRank from '@models/IRank'

import { API_FIRST_PRODUCT, API_FIRST_RANKS } from '@commons/api.json'

function useApp(): IAppState {

    const [pending, setPending]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)

    const [productsPaginationNext, setProductssPagenationNext]: [string, Dispatch<SetStateAction<string>>] = useState(API_FIRST_PRODUCT)
    const [ranksPaginationNext, setRanksPagenationNext]: [string, Dispatch<SetStateAction<string>>] = useState(API_FIRST_RANKS)

    const [products, setProducts]: [IProduct[], Dispatch<SetStateAction<IProduct[]>>] = useState([])
    const [ranks, setRanks]: [IRank[], Dispatch<SetStateAction<IRank[]>>] = useState([])

    const getProductsAsync = async (): Promise<boolean> => {

        let response: any = { data: [], pagication: {} }

        if (products.length) return

        response = await getProducts(productsPaginationNext)

        setProductssPagenationNext(response.pagination.next)
        setProducts(response.data)

        return true
    }

    const getRanksAsync = async (): Promise<boolean> => {

        let response: any = { data: [], pagication: {} }

        if (ranks.length) return

        response = await getRank(ranksPaginationNext)

        setRanksPagenationNext(response.pagination.next)
        setRanks(response.data)

        return true
    }


    const addProductsAsync = async (): Promise<boolean> => {

        let response: any = { data: [], pagication: {} }

        if (!productsPaginationNext || pending) return

        setPending(true)

        response = await getProducts(productsPaginationNext)

        setProductssPagenationNext(response.pagination.next)
        setProducts([...products, ...response.data])
        setPending(false)

        return true
    }

    const addRanksAsync = async (): Promise<boolean> => {

        let response: any = { data: [], pagication: {} }

        if (!ranksPaginationNext || pending) return

        setPending(true)

        response = await getRank(ranksPaginationNext)

        setRanksPagenationNext(response.pagination.next)
        setRanks([...ranks, ...response.data])
        setPending(false)

        return true
    }    

    return {
        products,
        ranks,
        pending,
        getProductsAsync,
        getRanksAsync,
        addProductsAsync,
        addRanksAsync
    }
}

export default useApp
