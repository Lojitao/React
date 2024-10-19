//項目的根組件
//APP->index.js->public/index.html(root)
import { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

function useGetList(){
  const [list,setList] = useState([])

  useEffect(()=>{
    async function getList(){
      const res = await fetch('https://fakestoreapi.com/products')
      const resLists = await res.json()
      setList(resLists)
    }
    getList()
  },[])

  return {list, setList}
}


//封裝列表組件
function Items({item}){
  return <li>{item.category}</li>
}

function App() {
  const count = useSelector((state) => state.counter.count);  // 獲取狀態
  console.log('storeCount',count);

  const {list, setList} = useGetList()
 
  return (
    <div className="App">
      <ul>
        {list.map(item=><Items key={item.id} item={item}/>)}
      </ul>
    </div>
  );
}

export default App;
