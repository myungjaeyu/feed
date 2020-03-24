import IProduct from './IProduct'
import IRank from './IRank'

interface IAppState {
    pending: boolean
    products: IProduct[]
    ranks: IRank[]
    getProductsAsync: () => Promise<boolean>
    getRanksAsync: () => Promise<boolean>
    addProductsAsync: () => Promise<boolean>
    addRanksAsync: () => Promise<boolean>
}

export default IAppState
