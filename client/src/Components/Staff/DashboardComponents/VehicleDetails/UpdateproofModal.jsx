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
  IconButton,
} from "@material-tailwind/react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
const UpdateproofModal = () => {
    const [isValidate, setIsValidate] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [description,setDescription] =useState("")
    const [open, setOpen] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const handleOpen = () => setOpen(!open);
    const [base64Pdf, setBase64Pdf] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
    
        const reader = new FileReader();
        reader.onload = (event) => {
          const base64 = event.target.result;
          setBase64Pdf(base64);
        };
        reader.readAsDataURL(file);
      };
    const alldata = {
        description,
        base64Pdf
    }
    const handleSubmit = async(e)=>{
        try {
            e.preventDefault()
            setisLoading(true)
            // const response = await axiosPrivate.put("", alldata)
            setisLoading(false)
        } catch (error) {
            setisLoading(false)
            console.log(error)
        }
    }
    useEffect(() => {
        const isValidate = alldata.base64Pdf;
        setIsValidate(isValidate);
      }, [alldata.base64Pdf]);
  return (
    <div>
        <IconButton variant="text">

    <svg onClick={handleOpen}
                  className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                </svg>
                    </IconButton>
    <Dialog  open={open} >
    <DialogBody className="m-4">
          <div className="grid gap-6">
            <Typography className="-mb-1" color="blue-gray" variant="h5">
              Proof Uplaod
            </Typography>
            <Input
              accept=".pdf"
              type="file"
              label="Upload "
              onChange={handleFileChange}

            />
          </div>
          <Typography className="my-2" color="red" variant="small">
            *Only .pdf file types allowed
          </Typography>
          <Textarea label="Description"  onChange={(e)=>setDescription(e.target.value)}/>
        </DialogBody>
        <DialogFooter className="space-x-2 -mt-4">
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
            UpLoad
          </Button>
        </DialogFooter>
    </Dialog>
  </div>  )
}

export default UpdateproofModal