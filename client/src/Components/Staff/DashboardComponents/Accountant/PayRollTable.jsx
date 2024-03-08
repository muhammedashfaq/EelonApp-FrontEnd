import {Card, CardHeader, Typography, Button, CardBody, Chip, CardFooter, Avatar, IconButton, Tooltip, Input} from '@material-tailwind/react';

const TABLE_HEAD = ['Sl.no', 'Month', 'Name', 'Base salary', 'Bonus', 'Incentive', 'increment', 'Remuneration', 'Fine', 'Total'];

export default function PayRollTable({payrollData}) {
  return (
    <Card className='h-full w-full'>
      <CardHeader floated={false} shadow={false} className='rounded-none'>
        <div className='mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center'>
          <div>
            <Typography variant='h4' color='blue-gray'>
              Pay roll
            </Typography>
            {/* <Typography color='gray' className='mt-1 font-normal'>
              These are details about the last transactions
            </Typography> */}
          </div>
          <div className='flex w-full shrink-0 gap-2 md:w-max'>
            <div className='w-full md:w-72'>
              <Input label='Search' />
            </div>
            <Button className='flex items-center gap-3' size='sm'>
              Search
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className='overflow-scroll px-0'>
        <table className='w-full min-w-max table-auto text-left'>
          <thead>
            <tr>
              {TABLE_HEAD.map(head => (
                <th key={head} className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                  <Typography variant='small' color='blue-gray' className='font-normal leading-none opacity-70'>
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {payrollData &&
              payrollData.map((item, index) => {
                const isLast = index === payrollData.length - 1;
                const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

                return (
                  <tr key={item?._id}>
                    <td className={classes}>
                      <div className='flex items-center gap-3'>
                        <Typography variant='small' color='blue-gray' className='font-bold'>
                          {index + 1}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className='flex items-center gap-3'>
                        <Typography variant='small' color='blue-gray' className='font-bold'>
                          {item?.month}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {item?.staffName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {item?.baseSalary}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {item?.bonus}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {item?.incentive}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {item?.increment}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {item?.remuneration}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {item?.fine}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {item?.total}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className='flex items-center justify-between border-t border-blue-gray-50 p-4'>
        <Button variant='outlined' size='sm'>
          Previous
        </Button>
        <div className='flex items-center gap-2'>
          <IconButton variant='outlined' size='sm'>
            1
          </IconButton>
          <IconButton variant='text' size='sm'>
            2
          </IconButton>
          <IconButton variant='text' size='sm'>
            3
          </IconButton>
          <IconButton variant='text' size='sm'>
            ...
          </IconButton>
          <IconButton variant='text' size='sm'>
            8
          </IconButton>
          <IconButton variant='text' size='sm'>
            9
          </IconButton>
          <IconButton variant='text' size='sm'>
            10
          </IconButton>
        </div>
        <Button variant='outlined' size='sm'>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
