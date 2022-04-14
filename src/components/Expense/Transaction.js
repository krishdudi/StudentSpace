import React from 'react'
import './transaction.css'

const Transaction = () => {

  return (
    <>
        <li className='minus'>
        <ul className='txts'>Fuel</ul>
        <ul>
          <ul id='money'>$45000</ul>
          <ul id='dates'></ul>
        </ul>
        <button className="delete-btn">
          ❌
      </button>
      </li>
    </>
  )
}

export default Transaction