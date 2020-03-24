import { useState, Dispatch, SetStateAction } from 'react'

import {  getProducts, getRank } from '@services/feed'

import IAppState from '@models/IAppState'
import IProduct from '@models/IProduct'
import IRank from '@models/IRank'

function useApp(): IAppState {

    const [pending, setPending]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)

    const [productsPaginationNext, setProductssPagenationNext]: [string, Dispatch<SetStateAction<string>>] = useState('c0ecddc18a84270128f55efeace2311b/raw/977c50ba2acb6d7bee395a087a18c71ae301092a')
    const [ranksPaginationNext, setRanksPagenationNext]: [string, Dispatch<SetStateAction<string>>] = useState('c0ecddc18a84270128f55efeace2311b/raw/a593936603e8aae489bbc35a75c432ac64f84675')

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
