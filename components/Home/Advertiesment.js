import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { red } from "@material-ui/core/colors";
import Adv1 from "../../styles/images/Adverisment/Adv1.jpg";
import Adv2 from "../../styles/images/Adverisment/Adv2.jpg";
import Adv3 from "../../styles/images/Adverisment/Adv3.jpg";

const useStyles = makeStyles({
  root: {},
  avatar: {
    backgroundColor: red[500],
  },
  media: {
    height: 180,
  },
});

const Advertiesment = () => {
  const classes = useStyles();

  return (
    <div>
      <div style={heading}>
        <Typography>Adverisments</Typography>
      </div>
      <div style={AdvertiesmentImage}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                A
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title='Advertisment Company Name'
            subheader='December 17, 2020'
          />
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Adv1}
              title='Advertiesment'
            />
          </CardActionArea>
        </Card>
      </div>
      <div style={AdvertiesmentImage}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                B
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title='Advertisment Company Name'
            subheader='December 17, 2020'
          />
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Adv2}
              title='Advertiesment'
            />
          </CardActionArea>
        </Card>
      </div>
      <div style={AdvertiesmentImage}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                C
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title='Advertisment Company Name'
            subheader='December 17, 2020'
          />
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Adv3}
              title='Advertiesment'
            />
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};
const heading = {
  margin: "0",
  padding: "10px",
};
const AdvertiesmentImage = {
  display: "block",
  width: "90%",
  marginLeft: " 5%",
  marginBottom: "15px",
};

export default Advertiesment;
