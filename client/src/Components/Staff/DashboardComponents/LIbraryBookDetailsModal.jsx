import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function LIbraryBookDetailsModal({ data }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        style={{ textTransform: "none" }}
        size="sm"
      >
        More Info
      </Button>

      <Dialog open={open} handler={handleOpen}>
        <Card className="w-full max-w-[48rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-4">
              Book Name: {data?.bookName}
            </Typography>
            <Typography color="gray" className="mb-3 font-semibold">
              Author: {data?.author}
            </Typography>
            <Typography color="gray" className="mb-3 font-semibold">
              Genre: {data?.genre}
            </Typography>
            <Typography color="gray" className="mb-3 font-semibold">
              Ref No: {data?.refNo}
            </Typography>
            <Typography color="gray" className="mb-3 font-semibold">
              Language: {data?.language}
            </Typography>
            <Typography color="gray" className="mb-3 font-semibold">
              Isbn number: {data?.IsbnNo}
            </Typography>
            <Typography color="gray" className="mb-3 font-semibold">
              Pulblishing year: {data?.year}
            </Typography>
            <Typography color="gray" className="mb-3 font-semibold">
              Barcode: {data?.barcode}
            </Typography>
            <Typography color="gray" className="mb-3 font-semibold">
              Reference subject: {data?.refSubject}
            </Typography>
            <Typography color="gray" className="mb-3 font-semibold">
              Book description: {data?.description}
            </Typography>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}
