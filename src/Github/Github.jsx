import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState("");

    useEffect(()=>{
        fetch("https://api.github.com/users/Raj-Kolekar")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [])
  return (
    <div className="bg-slate-400 text-center p-4 text-4xl m-5 grid place-content-center">
        
      <img src={data.avatar_url}/>
      GitHub followers: {data.followers}
    </div>
  )
}

export default Github
