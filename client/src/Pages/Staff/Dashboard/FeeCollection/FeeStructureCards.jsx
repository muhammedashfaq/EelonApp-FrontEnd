import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function FeeStructureCards({ item }) {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {item?.type}
        </Typography>
        <Typography>Term: {item?.term}</Typography>
        <Typography>Class: {item?.std}</Typography>
        <Typography>Academic year: {item?.academicYear}</Typography>
        <Typography variant="h6">Amount: {item?.amount}</Typography>
      </CardBody>
      {/* <CardFooter className="pt-0">
      </CardFooter> */}
    </Card>
  );
}
