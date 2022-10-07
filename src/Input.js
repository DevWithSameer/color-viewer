import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import colorNames from "colornames";
import Switch from "@mui/material/Switch";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setisDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "28ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Add Color Name"
          variant="outlined"
          value={colorValue}
          onChange={(e) => {
            setColorValue(e.target.value);
            setHexValue(colorNames(e.target.value));
          }}
        />
      </Box>
      <Switch
        checked={isDarkText}
        color="warning"
        size="small"
        onClick={() => setisDarkText(!isDarkText)}
      />
    </form>
  );
};

export default Input;
