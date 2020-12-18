import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SaleBanner from "../../styles/images/SaleBanner.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "5px",
    backgroundColor: "rgb(218,218, 218)",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  saleImge: {
    height: 40,
    width: "100%",
  },
  summary: {
    height: 30,
  },
  ulitems: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    marginLeft: "8px",
  },
}));

const SimpleAccordion = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <div style={Banner}>
          <img
            src={SaleBanner}
            className={classes.saleImge}
            alt='Sale banner'
          />
        </div>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
            className={classes.summary}
          >
            <Typography className={classes.heading}>Furnitures</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <ul className={classes.ulitems}>
                <li>
                  <a href='#'>Sofas</a>
                </li>
                <li>
                  <a href='#'>Beds</a>
                </li>
                <li>
                  <a href='#'>Seatings</a>
                </li>
                <li>
                  <a href='#'>Chairs</a>
                </li>

                <li>
                  <a href='#'>Tables</a>
                </li>
                <li>
                  <a href='#'>Dining & Bars</a>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
            className={classes.summary}
          >
            <Typography className={classes.heading}>Garments</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <ul className={classes.ulitems}>
                <li>
                  <a href='#'>Sofas</a>
                </li>
                <li>
                  <a href='#'>Beds</a>
                </li>
                <li>
                  <a href='#'>Seatings</a>
                </li>
                <li>
                  <a href='#'>Chairs</a>
                </li>

                <li>
                  <a href='#'>Tables</a>
                </li>
                <li>
                  <a href='#'>Dining & Bars</a>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
            className={classes.summary}
          >
            <Typography className={classes.heading}>Decoration</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <ul className={classes.ulitems}>
                <li>
                  <a href='#'>Sofas</a>
                </li>
                <li>
                  <a href='#'>Beds</a>
                </li>
                <li>
                  <a href='#'>Seatings</a>
                </li>
                <li>
                  <a href='#'>Chairs</a>
                </li>

                <li>
                  <a href='#'>Tables</a>
                </li>
                <li>
                  <a href='#'>Dining & Bars</a>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </Fragment>
  );
};
const Banner = {};
export default SimpleAccordion;
