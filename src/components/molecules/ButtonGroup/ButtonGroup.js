import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const ButtonGroupComponent = ({ items, itemSelected }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        {items.map((item) => (
          <Button
            key={item.id}
            variant={itemSelected === item.id ? "contained" : ""}
            onClick={() => item.onClick()}
          >
            {item.label}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroupComponent;
