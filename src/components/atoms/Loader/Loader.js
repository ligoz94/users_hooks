import React from "react";
import * as S from "./Loader.styled";
import { makeStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <S.LoaderStyles className={[classes, "loader-container"]}>
      <CircularProgress />
    </S.LoaderStyles>
  );
};

export default Loader;
