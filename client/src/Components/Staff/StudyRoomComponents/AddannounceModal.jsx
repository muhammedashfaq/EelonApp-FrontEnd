import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  CardHeader,
  Select,
  Option,
} from "@material-tailwind/react";
const AddannounceModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
         

      <Button onClick={handleOpen}variant="outlined" color="blue" className="flex items-center " >Create Announcement</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="w-96">
          <form>
            <div className="pl-4 m-2 flex items-baseline font-semibold">
              <h1>Create Class</h1>
            </div>
            <CardBody className="flex flex-col gap-4">
              <Input
                name="roomName"
                variant="standard"
                label="anu"
                color="blue"
              />

              <Select
                name="std"
                color="blue"
                variant="standard"
                label="Class"
                //   value={formData.std}
                //   onChange={(e) => setStd(e)}
              >
                <Option value="Story">Story</Option>
                <Option value="Poem">Poem</Option>
                <Option value="Biography">Biography</Option>
                <Option value="Mystery">Mystery</Option>
                <Option value="Fiction">Fiction</Option>
                <Option value="Non-fiction">Non-fiction</Option>
              </Select>

              <Select
                name="section"
                color="blue"
                variant="standard"
                label="section"
                //   onChange={(e) => setSection(e)}
              >
                <Option value="Story">Story</Option>
                <Option value="Poem">Poem</Option>
                <Option value="Biography">Biography</Option>
                <Option value="Mystery">Mystery</Option>
                <Option value="Fiction">Fiction</Option>
                <Option value="Non-fiction">Non-fiction</Option>
              </Select>
              <Select
                name="subject"
                color="blue"
                variant="standard"
                label="Subject"
                //   onChange={(e) => setSubject(e)}
              >
                <Option value="Story">Story</Option>
                <Option value="Poem">Poem</Option>
                <Option value="Biography">Biography</Option>
                <Option value="Mystery">Mystery</Option>
                <Option value="Fiction">Fiction</Option>
                <Option value="Non-fiction">Non-fiction</Option>
              </Select>

              <Input
                name="description"
                variant="standard"
                label="Description"
                size="lg"
                color="blue"
                //   onChange={(e) => setDescription(e.target.value)}
              />
            </CardBody>
            <CardFooter className="pt-0 items-end ">
              <Typography variant="gradient" fullWidth className=" float-right">
                <span
                  className="hover:bg-blue-gray-100 rounded-md p-2 cursor-pointer"
                  onClick={handleOpen}
                >
                  Cancel
                </span>

                <Button
                  // onClick={handleFormSubmit}
                  type="submit"
                  className="hover:bg-blue-gray-100 rounded-md p-2 cursor-pointer "
                  // disabled={desableButton ? true : false}
                >
                  Create
                </Button>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
};

export default AddannounceModal;
