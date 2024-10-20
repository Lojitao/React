//引入組件
import Login from "../page/Login";
import Article from "../page/Article";

import { // React Router
  createBrowserRouter,  
} from 'react-router-dom';  

//創建router實例
const router = createBrowserRouter([
  {
   path:'/login/:id',
   element:<Login/>
  },
  {
    path:'/artical',
    element:<Article/>
   },
])

export default router