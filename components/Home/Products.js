import { Typography, Card, CardActionArea, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fur1 from "../../styles/images/Furniture/Furniture1.jpg";
import Fur2 from "../../styles/images/Furniture/Furniture2.jpg";
import Fur3 from "../../styles/images/Furniture/Furniture3.jpg";
import Fur4 from "../../styles/images/Furniture/Furniture4.jpg";
import React from "react";
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "rgb(218,218, 218)",
    margin: 0,
    padding: 0,
  },
  heading: {
    textAlign: "center",
    padding: "5px",
    fontWeight: 100,
  },
  media: {
    height: 130,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  products: {
    display: "flex",
    justifyContent: "space-around",
  },
  products1: {
    width: "47%",
    marginBottom: "10px",
  },
  text: {
    textAlign: "center",
  },
}));
const Products = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <Typography variant='subtitle1'>Whats Popular In Furniture</Typography>
      </div>
      <div className={classes.products}>
        <Card className={classes.products1}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Fur1}
              title='Advertiesment'
            />
            <div className={classes.text}>
              <h5>DOUBLE BEDS</h5>
              <p>Starting ₹ 20000</p>
            </div>
          </CardActionArea>
        </Card>
        <Card className={classes.products1}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Fur2}
              title='Advertiesment'
            />
            <div className={classes.text}>
              <h5>CHAIRS</h5>
              <p>Starting ₹ 8000</p>
            </div>
          </CardActionArea>
        </Card>
      </div>
      <div className={classes.products}>
        <Card className={classes.products1}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Fur3}
              title='Advertiesment'
            />
            <div className={classes.text}>
              <h5>MULTIPLE CHAIRS</h5>
              <p>Starting ₹ 15000</p>
            </div>
          </CardActionArea>
        </Card>
        <Card className={classes.products1}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Fur4}
              title='Advertiesment'
            />
            <div className={classes.text}>
              <h5>2 SEATER SOFAS</h5>
              <p>Starting ₹ 18000</p>
            </div>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};
export default Products;
