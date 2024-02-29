import React from "react";
import { useState } from "react";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";

const TestYk = () => {
  const axiosPrivate = useAxiosPrivate();

  const getScholasticData = async () => {
    try {
      const response = await axiosPrivate.put();
    } catch (error) {
      console.error(error);
    }
  };
  return <></>;
};
export default TestYk;
