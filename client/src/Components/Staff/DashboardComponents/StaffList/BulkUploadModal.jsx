import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { axiosFormdata } from "../../../../api/axios";
import axios from "axios";

const BulkUploadModal = () => {
  const [xlsFile, setXlsFile] = useState("");
  const [isValidate, setIsValidate] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const handleSubmit = async () => {
    try {
      setisLoading(true);
      const formData = new FormData();
      formData.append("file", xlsFile);
      const response = await axiosFormdata.post(
        "bulkuploads/student",
        formData
      );
      console.log(response);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const isValidate = xlsFile;
    setIsValidate(isValidate);
  }, [xlsFile]);
  return (
    <>
      <span
        className="text-white font-normal cursor-pointer"
        onClick={handleOpen}
      >
        Bulk Upload
      </span>
      <Dialog open={open} size="xs">
        <DialogBody>
          <div className="grid gap-6">
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Username
            </Typography>
            <Input
              accept=".xlsx"
              type="file"
              label="Username"
              onChange={(e) => setXlsFile(e.target.files[0])}
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button
            loading={isLoading}
            disabled={!isValidate}
            variant="gradient"
            color="gray"
            onClick={handleSubmit}
          >
            Upload
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default BulkUploadModal;
