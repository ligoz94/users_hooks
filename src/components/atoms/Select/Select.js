import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import * as S from "./Select.styled";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Select = ({ options, name, title, value, onChange }) => {
  const classes = useStyles();
  const [state, setState] = React.useState();

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });

    onChange && onChange(event.target.value);
  };

  useEffect(() => {
    setState({ [name]: value });
  }, [value]);

  return (
    <S.SelectStyles>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">{title}</InputLabel>
        <NativeSelect
          value={state && state[name]}
          onChange={handleChange}
          name={name}
          className={classes.selectEmpty}
          inputProps={{ "aria-label": { name } }}
        >
          {options.map((e) => {
            return (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </S.SelectStyles>
  );
};
export default Select;
