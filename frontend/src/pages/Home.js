import { useEffect, useState } from 'react'
import React from 'react'

export default function Home() {

  const [notlar, setNotlar] = useState(null) // state değişkenini ve onu güncellemek için setState fonksiyonunu tanımlıyoruz

  useEffect(() => {

    const fetchNotlar = async () => {
      const response = await fetch('/api/notlar') //get işlemi gerçekleştirilecek 
      
      const json = await response.json()

      console.log(json);
      if (response.ok) {
        setNotlar(json)
      }
    }
    fetchNotlar()

  }, [])

  return (
    <div className="home">
      <div className='notlar'>
        {notlar && notlar.map((not) => {
          <p key={not._id}>{not.baslik}</p>
        })}
      </div>
    </div>
  )

}
