import React from 'react'

function Information({data}) {

  return (
    <div>
        <img src={data.avatar_url} alt="" />
        <span>{data.followers}</span>
        <span>{data.following}</span>
        <span>{data.blog}</span>
        <span>{data.name}</span>
        <span>{data.commpany}</span>
    </div>
  )
}

export default Information