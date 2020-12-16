import Home from '../pages/Home'
import Homes from '../pages/Homes'
import Car from '../pages/Car'
import My from "../pages/My"
let routerList=[
    {
        path:'/home',
        com:Home,
        children:[
            {
                path:'/home/homes',
                com:Homes,
                title:"主页"
            },
            {
                path:'/home/car',
                com:Car,
                title:"购物车"
            },
            {
                path:'/home/my',
                com:My,
                title:"我的"
            },
            {
                to:'/home/homes',
                from:'/homes'
            }
        ]
    },{
        to:'/home',
        from:'/'
    }
]
export default routerList