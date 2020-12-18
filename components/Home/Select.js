import React from "react";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Adv1 from "../../styles/images/Adverisment/Adv1.jpg";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {},
  media: {
    height: 50,
    width: 70,
  },
});

const Select = () => {
  const classes = useStyles();
  return (
    <div style={select}>
      <div>
        <Typography variant='subtitle2'>
          We are Currently Available iN
        </Typography>
      </div>
      <div style={select2}>
        <div style={city}>
          <Card>
            <CardActionArea>
              <div style={cityName}>
                <Typography variant='caption'>Bhadrak</Typography>
              </div>
              <CardMedia
                className={classes.media}
                image={Adv1}
                title='Advertiesment'
              />
            </CardActionArea>
          </Card>
        </div>
        <div style={city}>
          <Card>
            <CardActionArea>
              <div style={cityName}>
                <Typography variant='caption'>Bhadrak</Typography>
              </div>
              <CardMedia
                className={classes.media}
                image={Adv1}
                title='Advertiesment'
              />
            </CardActionArea>
          </Card>
        </div>
        <div style={city}>
          <Card>
            <CardActionArea>
              <div style={cityName}>
                <Typography variant='caption'>Bhadrak</Typography>
              </div>
              <CardMedia
                className={classes.media}
                image={Adv1}
                title='Advertiesment'
              />
            </CardActionArea>
          </Card>
        </div>
        <div style={city}>
          <Card>
            <CardActionArea>
              <div style={cityName}>
                <Typography variant='caption'>Bhadrak</Typography>
              </div>
              <CardMedia
                className={classes.media}
                image={Adv1}
                title='Advertiesment'
              />
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
};
const select = {
  margin: "5px",
  padding: "10px",
  backgroundColor: "rgb(218,218, 218)",
  borderRadious: "6px",
  boxShadow:
    "0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)",
};
const select2 = {
  display: "flex",
  justifyContent: "space-around",
  paddingTop: "5px",
};
const city = {};

const cityName = {
  padding: "2px",
  textAlign: "center",
};

export default Select;
