import React from 'react'
import ShowClasswiseMarks from '../../../../Components/Staff/DashboardComponents/ExamModule/ShowClasswiseMarks'
import Banner from '../../../../Components/Banner/Banner'

const ShowClasswiseMarksPage = () => {
    const breadcrumbs = ["Class Wise Marks"];

  return (
    <div>
        
        <Banner breadcrumbs={breadcrumbs}/>
        <ShowClasswiseMarks/>
    </div>
  )
}

export default ShowClasswiseMarksPage