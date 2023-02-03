import React from "react";
import "../Accordion/Accordion.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FaPlus } from "react-icons/fa";

const Accordions = () => {
  return (
    <div className="accordion">
      <div className="acc_wrapper">
        <div className="acc_heading">FAQ’s – Frequently Asked Questions</div>

        <div className="acc_desc">
          As you might imagine, real estate agents field quite a few questions
          every day. People are naturally curious, and it’s an agent’s job to
          guide.
        </div>

        <div className="acc_maps">
          <Accordion id="accordion-body">
            <AccordionSummary
              expandIcon={<FaPlus className="angle" />}
              id="panel1a-header"
            >
              <p>How can I build equity into my house?</p>
            </AccordionSummary>
            <AccordionDetails id="accordion-details">
              You can build equity in three ways. First (and easiest) is from
              market appreciation. Second, when making your monthly mortgage
              payment, try to send a little bit more.
            </AccordionDetails>
          </Accordion>

          <Accordion id="accordion-body">
            <AccordionSummary
              expandIcon={<FaPlus className="angle" />}
              id="panel1a-header"
            >
              <p>How big is an acre?</p>
            </AccordionSummary>
            <AccordionDetails id="accordion-details">
              You can build equity in three ways. First (and easiest) is from
              market appreciation. Second, when making your monthly mortgage
              payment, try to send a little bit more.
            </AccordionDetails>
          </Accordion>

          <Accordion id="accordion-body">
            <AccordionSummary
              expandIcon={<FaPlus className="angle" />}
              id="panel1a-header"
            >
              <p>What are closing costs?</p>
            </AccordionSummary>
            <AccordionDetails id="accordion-details">
              You can build equity in three ways. First (and easiest) is from
              market appreciation. Second, when making your monthly mortgage
              payment, try to send a little bit more.
            </AccordionDetails>
          </Accordion>

          <Accordion id="accordion-body">
            <AccordionSummary
              expandIcon={<FaPlus className="angle" />}
              id="panel1a-header"
            >
              <p> What is Title Insurance?</p>
            </AccordionSummary>
            <AccordionDetails id="accordion-details">
              You can build equity in three ways. First (and easiest) is from
              market appreciation. Second, when making your monthly mortgage
              payment, try to send a little bit more.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Accordions;
