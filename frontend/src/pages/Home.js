import { useEffect,useState } from 'react'
import React from 'react'

export default function Home() {

const [notlar,setNotlar]=useState(null) // state değişkenini ve onu güncellemek için setState fonksiyonunu tanımlıyoruz
  
useEffect(()=>{

const fetchNotlar=async ()=>{
  const response=await fetch('http://localhost:4000/api/notlar') //get işlemi gerçekleştirilecek 
  const json=await response.json()

  if(response.ok){
    setNotlar.json
  }
}
fetchNotlar()
},[])
return (
    <div className="home">
       <div className='notlar'>
{notlar && notlar.map((not)=>{
  
})}
       </div>
    </div>
  )

}
