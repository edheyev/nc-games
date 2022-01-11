import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function BasicMenu({ setCurrentDisplayLimit, currentDisplayLimit }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setCurrentDisplayLimit(event.target.value);
  };

  return (
    <div>
      <Box sx={{ maxWidth: 65 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currentDisplayLimit}
            label="displayLimit"
            onChange={handleChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>20</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
      </Box>
      Reviews per page
    </div>
  );
}

export default BasicMenu;
