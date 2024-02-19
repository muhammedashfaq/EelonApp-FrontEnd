import { Card, CardHeader, Typography } from "@material-tailwind/react";

const ClassRoomCard = ({ classroom }) => {
  return (
    <>
      <Card
        color="light-green"
        variant="gradient"
        className="w-full max-w-[20rem] p-8 hover:shadow-2xl hover:scale-90 duration-200 transition-all hover:cursor-pointer"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/20 pb-8 text-center"
        >
          <Typography
            variant="h5"
            color="white"
            className="font-normal uppercase hover:underline"
          >
            {classroom?.roomName}
          </Typography>
          <Typography
            variant="paragraph"
            color="white"
            className="mt-6 flex justify-center gap-1 text-1xl font-normal hover:underline  duration-300"
          >
            {classroom?.description}
          </Typography>
        </CardHeader>
      </Card>
    </>
  );
};

export default ClassRoomCard;
