import loader from '@/public/loader.gif'
import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div>
      <Image src={loader} alt="Loader.." />
    </div>
  )
}

export default Loading