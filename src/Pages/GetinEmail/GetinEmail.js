import React from 'react'
import SideBar from '../../Component/SideBar/SideBar'
import MyListing from '../../Component/MyListing/MyListing'
import MyBids from '../../Component/MyBids/MyBids'

export default function GetinEmail() {
  return (
    <>
      {/* MyListing */}
      <section className='container m-auto'>
            <h1 className='text-[60px] font-bold pb-10 ml-[368px]'>My Listing</h1>
       <div className='flex'>
          <div className="sidebar"><SideBar/></div>
          <div className="list"><MyListing/></div>
       </div>
   </section>
    </>
  )
}

