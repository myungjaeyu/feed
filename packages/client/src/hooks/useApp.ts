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

        if (!products.length) response = await getProducts(productsPaginationNext)

        setProducts([...!products.length ? response.data : products])

        return true
    }

    const getRanksAsync = async (): Promise<boolean> => {

        let response: any = { data: [], pagication: {} }

        if (!ranks.length) response = await getRank(ranksPaginationNext)

        setRanks([...(!ranks.length ? response.data : ranks)])

        return true
    }

    return {
        products,
        ranks,
        pending,
        getProductsAsync,
        getRanksAsync
    }
}

export default useApp
