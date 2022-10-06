import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Square = ({ colorValue }) => {
  return (
    <section>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: colorValue,
          border: "1px dashed grey",
        }}
      >
        <Typography variant="h5" component="div">
          {colorValue ? colorValue : "Empty Value"}
        </Typography>
      </Box>
      <p>{colorValue ? colorValue : "Empty Value"}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Value",
};

export default Square;
