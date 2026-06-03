import { useEffect, useState } from "react"
  let App = () => {
    let [data,setData] = useState([])
    let [error,setError] = useState('')

    useEffect(() =>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setData(data))
      .catch((err)=> {
        console.log(err)
        setError(err)
        
      })

    },[])

    console.log(data);
    
  
      
   


    return(
      <div>
        {
          data.length ? <ul>
            {
              data.map((ob)=>(
                <li key={ob.id} >{ob.title}</li>
              ))
            }
          </ul>:<h1>no data</h1>
        }
      </div>
    )
}


export default App














//  useEffect(() =>{
  //   let one = setInterval(() =>{
  //   setCount(count+1)
  //   console.log("one");
    

  //  },1000)

  //  return () =>{
  //   clearInterval(one)

  //  }
  //  },[count])