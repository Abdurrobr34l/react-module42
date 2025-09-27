import React, { Children } from 'react'

export default function Container({children}) {
  return (
    <div className='container mx-auto px-5 md:px-10 lg:px-16 2xl:px-20'>{children}</div>
  )
}
