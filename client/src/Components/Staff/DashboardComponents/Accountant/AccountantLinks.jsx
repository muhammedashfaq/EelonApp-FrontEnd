import cashcounter from '../../../../assets/cashcounter.png'
import feeStructure from '../../../../assets/feestructure.png'
import concession from '../../../../assets/concession.png'
import legder from '../../../../assets/LedgerBook.png'
import admission from '../../../../assets/admissionfee.png'
import payroll from '../../../../assets/Payroll.png'
import { RouteObjects } from "../../../../Routes/RoutObjects";

const AccountantLink = [
        {
          titleName: "Fee Collection ",
          href: RouteObjects.FeeCollection,
          icon:cashcounter
          
        },
        {
            titleName: "Admission Fee ",
          href: RouteObjects.AdminssionFee,
          icon:admission
        },
        {
            titleName: "Add Fee structure ",
            href: RouteObjects.AddFeeStructure,
            icon:feeStructure
          
        },
        {
            titleName: "Add Concession fee structure ",
          href: RouteObjects.AddConcessionStructure,
          icon:concession
        },
        {
            titleName: "Ledger Book ",
          href: RouteObjects.LedgerBook,
          icon:legder
        },
        {
            titleName: "PayRoll ",
          href: RouteObjects.LedgerBook,
          icon:payroll
          
        },
      

      




]


export default AccountantLink