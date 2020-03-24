import IProduct from './IProduct'
import IRank from './IRank'

interface IAppState {
    products: IProduct[]
    ranks: IRank[]
    getProductsAsync: () => Promise<boolean>
    getRanksAsync: () => Promise<boolean>
}

export default IAppState
