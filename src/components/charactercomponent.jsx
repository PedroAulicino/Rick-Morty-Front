import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export default props => {
  console.log(props.image);
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt={props.name}
        height="400"
        image={props.image}
        title={props.name}
      />
      <h1>nome : {props.name}</h1>
      <h1>status: {props.status}</h1>
      <h1>especie: {props.especie}</h1>
      <h1>sexo: {props.gender}</h1>
    </Card>
  );
};
