import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { StudentSMmodal } from "./StudentStudyMaterialModal";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function StudentStudyMaterial() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className=" m-20"
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <div className="container xl">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bolder",
                fontFamily: "monospace",
              }}
            >
              Study materials
            </p>
          </div>

          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              Physics
            </AccordionHeader>
            <AccordionBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              optio illum earum ipsum saepe vero accusamus, similique quis
              maxime dolorum facere accusantium deserunt, corrupti delectus iste
              natus fugit esse! Quasi.
              <br />
              <br />
              <StudentSMmodal subject={"Physics"} />
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              Mathematics
            </AccordionHeader>
            <AccordionBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              doloremque a harum, sit magnam facilis, consequatur quidem
              obcaecati necessitatibus aliquid blanditiis ab expedita commodi
              voluptatem veritatis laudantium itaque dolore assumenda.
              <br />
              <br />
              <StudentSMmodal subject={"Mathematics"} />
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              Chemistry
            </AccordionHeader>
            <AccordionBody>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste hic
              culpa ratione quas mollitia quam eaque itaque, esse accusantium,
              labore, fuga officiis deleniti! Voluptatem hic, repudiandae
              corrupti ea laboriosam similique.
              <br />
              <br />
              <StudentSMmodal subject={"Chemistry"} />
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
}
