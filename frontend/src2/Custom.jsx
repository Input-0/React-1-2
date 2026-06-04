import React, { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data,setData] = useState([])
    const [err,setErr] = useState("")

    useEffect(() =>{

        let fetchData = async() => {
         try {
            let response =   await fetch(url)
            let rData = await response.json()
            setData(rData)
         } catch (error) {
            setErr(error)
            
         }
        }

        fetchData()
        
    },[url])
    return [data,err]

}

const Custom = () => {

    let [val,error] = useFetch("https://.typicode.com/posts")
    console.log(error);
    
  return (
    <div>hi</div>
  )
};

export default Custom;
