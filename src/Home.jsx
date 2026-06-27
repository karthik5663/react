import React from 'react'
export default function Home() {
  const db = import .meta.env.VITE_DB_URL || 'no url is there'
  return (
    <div>
      <a href="/about">about page</a> <br />
      <a href="/contact">contact page</a><br /><br />
       value : {db}
    </div>
  )
}
