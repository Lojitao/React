import { useParams,useSearchParams } from "react-router-dom"

const Login = ()=>{
  // const [params] = useSearchParams()
  // let id = params.get('id')
  // console.log('id',id);
  const params = useParams()
  console.log('params',params);
  return <div>我是登入頁</div>
}

export default Login