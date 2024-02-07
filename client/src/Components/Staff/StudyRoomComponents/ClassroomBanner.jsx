import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const ClassroomBanner = ({ classRoomData }) => {
  return (
    <>
      <Card
        className="mt-6 w-full shadow-2xl shadow-black classRoomImg"
        style={{ borderRadius: 0 }}
      >
        <div style={{ backdropFilter: "blur(4px)" }}>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {classRoomData?.roomName}
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <Typography variant="paragraph" color="black">
              {classRoomData?.description}
            </Typography>
          </CardBody>
        </div>
      </Card>
    </>
  );
};

export default ClassroomBanner;
