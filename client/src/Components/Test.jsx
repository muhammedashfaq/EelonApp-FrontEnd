import { Button } from "@material-tailwind/react";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { axiosFormdata } from "../api/axios";

const Test = () => {
  const [pdf, setpdf] = useState();
  const [teacherName, setteacherName] = useState();
  const sendPdf = async () => {
    const formData = new FormData();
    formData.append("teacherName", teacherName);
    formData.append("file", pdf);
    console.log(formData, "Formdata :");
    const response = await axiosFormdata.post(
      "/lessonplanning/syllabus",
      formData
    );
    console.log(response);
  };
  useEffect(() => {
    console.log(pdf);
  }, [pdf]);
  return (
    <>
      <input type="text" onChange={(e) => setteacherName(e.target.value)} />
      <br />
      <input
        type="file"
        id="files"
        multiple
        onChange={(e) => setpdf(e.target.files[0])}
      />
      <br />
      <Button onClick={sendPdf}>Send pdf</Button>
    </>
  );
};

export default Test;
