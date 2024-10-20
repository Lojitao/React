import { Link,useNavigate } from "react-router-dom"
const Article = ()=>{
  const navigate = useNavigate()
  return (
    <div>
      <p>我是文章</p> 
      <button onClick={()=>navigate('/login/1001?name=jack')}>程式碼跳轉</button>
      <Link to="/login">聲明式跳轉</Link>
    </div>
  )
}

export default Article