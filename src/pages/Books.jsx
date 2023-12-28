import React from 'react'
import Navigation from '../components/Navigationlink'
import NewBookForm from '../components/Form'
import Bookstore from '../components/Bookstore'
import BookList from '../components/BookList1'

export default function Books() {
  return (
    <div>
        <h1>
            BOOK STORE
            <Navigation/>

            <NewBookForm/>
            <Bookstore/>
            {/* <BookList/> */}

        </h1>
      
    </div>
  )
}
