import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function ClassroomAnnoucementCard() {
  return (
    <Card className="mt-6 w-96 shadow-2xl">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Announcements
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
    </Card>
  );
}
