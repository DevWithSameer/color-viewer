import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section>
      <Box
      mt={"10px"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 250,
          height: 250,
          backgroundColor: colorValue,
          color: isDarkText ? "#000" : "#FFF",
          border: "2px solid grey",
        }}
      >
        <Typography variant="p">
          {colorValue ? colorValue : "Empty Value"}
        </Typography>
        <Typography variant="p">
          {hexValue ? hexValue : null}
        </Typography>
      </Box>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Value",
};

export default Square;
