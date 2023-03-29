import React from 'react'

import './sass/BlogList.scss'

export default function BlogList({ data }) {
  return (
    <div className='BlogList'>
      {
      data.length > 0 ? 
      <pre>
        {JSON.stringify(data,null,1)}
      </pre>
      : null
      }
    </div>
  )
}
