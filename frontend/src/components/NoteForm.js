import React from 'react'
import { useState } from 'react'

export default function NoteForm() {
const [baslik,setBaslik]=useState('')
const [aciklama,setAciklama]=useState('')

const handleSubmit=(e)=>{
    e.preventDefault();
    const not={baslik,aciklama}
    console.log(not);
}


  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Yeni bir not ekle</h3>
      <div>
        <label>not başlık:</label>
        <input type='text' onChange={(e)=>setBaslik(e.target.value)} value={baslik}/>
      </div>

      <div>
        <label>not açıklama:</label>
        <input type='text' onChange={(e)=>setAciklama(e.target.value)} value={aciklama}/>
      </div>
      <button type='submit'>EKLE</button>
    </form>
  )
}
