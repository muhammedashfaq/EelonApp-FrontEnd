import { Button, Dialog, DialogHeader } from '@material-tailwind/react'
import React from 'react'

const AssignmenViewModal = ({ open, onClose }) => {

  return (
    <div>




<Dialog size="xxl" open={open} handler={onClose} closeButton>

      <div className="flex justify-between">
        <DialogHeader>Create Supporting Materials</DialogHeader>
        <Button className="m-3" variant="gradient" onClick={onClose}>
          <span>X</span>
        </Button>
      </div>

</Dialog>
</div>

  )
}

export default AssignmenViewModal