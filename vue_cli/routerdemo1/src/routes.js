import Home from './views/Home'
import PhoneProducts from './views/PhoneProducts'
import TCProducts from './views/TCProducts'
import TLProducts from './views/TLProducts'

export const routes = [
    {
        path: '/Home',
        component: Home
    },
    {
        path: '/PhoneProducts/:id',
        component: PhoneProducts
    },
    {
        path: '/TCProducts/:id',
        component: TCProducts
    },
    {
        path: '/TLProducts/:id',
        component: TLProducts
    }
]