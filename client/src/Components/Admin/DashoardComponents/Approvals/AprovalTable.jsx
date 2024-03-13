import { faChevronDown, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, Chip, Tooltip } from "@material-tailwind/react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { RouteObjects } from "../../../../Routes/RoutObjects";

const TABLE_HEAD = ["#NO", "Subject", "Term", "Document", "Status", " Action"];

const AprovalTable = ({ filteredData, api }) => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const approveApi = api;
  const RejectThis = async (id) => {
    try {
      const { value: text } = await Swal.fire({
        input: "textarea",
        inputLabel: "Message",
        inputPlaceholder: "Type your message here...",
        inputAttributes: {
          "aria-label": "Type your message here",
        },
        showCancelButton: true,
      });
      if (text) {
        await axiosPrivate.put(`${approveApi}/${id}`, {
          status: "Rejected",
          remarks: text,
        });
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          color: "white",
          background: "green",
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "successfully Rejected",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const ApproveThis = async (id) => {
    try {
      const { value: text } = await Swal.fire({
        input: "textarea",
        inputLabel: "Message",
        inputPlaceholder: "Type your message here...",
        inputAttributes: {
          "aria-label": "Type your message here",
        },
        showCancelButton: true,
      });
      if (text) {
        await axiosPrivate.put(`${approveApi}/${id}`, {
          status: "Approved",
          remarks: text,
        });

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          color: "white",
          background: "green",
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "successfully Approved",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <table className="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th
                key={head}
                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  {head}{" "}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData &&
            filteredData?.map(
              ({ _id, subject, termName, status, pdf }, index) => {
                const classes = "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>{index + 1}</td>{" "}
                    <td className={classes}>{subject}</td>
                    <td className={classes}>{termName}</td>
                    <td className={classes}>
                      <a href={pdf?.url} target="_blank">
                        <Tooltip
                          content={
                            pdf?.url ? "View document" : "No document uploaded"
                          }
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            size="xl"
                            style={{
                              color: pdf?.url ? "black" : "GrayText",
                            }}
                          />
                        </Tooltip>
                      </a>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={status}
                          color={
                            status === "Rejected"
                              ? "red"
                              : status === "Approved"
                              ? "green"
                              : status === "Pending"
                              ? "blue-gray"
                              : ""
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      {status === "Pending" && (
                        <div className="flex space-x-3">
                          <span onClick={() => ApproveThis(_id)}>
                            <Chip
                              color="green"
                              size="sm"
                              value="Aprove"
                              className="cursor-pointer hover:bg-green-600"
                            />
                          </span>

                          <span onClick={() => RejectThis(_id)}>
                            <Chip
                              color="red"
                              size="sm"
                              value="Reject"
                              className="cursor-pointer hover:bg-red-600"
                            />
                          </span>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
    </div>
  );
};

export default AprovalTable;
