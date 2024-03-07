import React from 'react'
import DailyLedgerBook from '../../../../Components/Staff/DashboardComponents/FeeCollection/DailyLedgerBook'
import Banner from '../../../../Components/Banner/Banner'

const LedgerBookPage = () => {
  const breadcrumbs = ["Invice Ledger"];

  return (
    <div>
        <Banner breadcrumbs={breadcrumbs}/>
        <DailyLedgerBook/>
        
        </div>
  )
}

export default LedgerBookPage