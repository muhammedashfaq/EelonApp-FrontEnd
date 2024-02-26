import React from 'react'

export const TableHeaderName = ({name,year}) => {
  return (
        
        <div className="bg-dark-purple py-2  rounded-t-md flex justify-between items-center px-4">
    <span className="text-white font-normal">{name? name:""} {year?year:""}</span>
   </div>
  )
}
