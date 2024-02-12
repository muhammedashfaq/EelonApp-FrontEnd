import { faArrowDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, CardHeader, Input, Option, Select, Typography } from '@material-tailwind/react'

const SearchHead = () => {
  return (
    <div>


        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          {/* <div>
            <Typography variant="h5" color="blue-gray">
              Recent Transactions
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the last transactions
            </Typography>
          </div> */}
          <div className="flex w-full shrink-0 gap-2 md:w-max">

      <Select label="Select Version"  >
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
             
            <Button className="flex items-center gap-3" size="sm">
              <FontAwesomeIcon icon={faArrowDown} strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5" />}
              />
            </div>
            <Button className="flex items-center gap-3" size="sm">
              <FontAwesomeIcon icon={faArrowDown} strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5" />}
              />
            </div>
            <Button className="flex items-center gap-3" size="sm">
              <FontAwesomeIcon icon={faArrowDown} strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
          </div>
        </div>
 
    </div>
  )
}

export default SearchHead