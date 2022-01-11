import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import CategoryFilter from "./CategoryFilter";
import TextField from "@mui/material/TextField";

const FilterAndSearch = ({
  sortQuery,
  setSortQuery,
  sortDir,
  setSortDir,
  categoryList,
  searchTerm,
  setSearchTerm,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const sortAr = [
    "date",
    "owner",
    "title",
    "category",
    "created_at",
    "votes",
    "comment_count",
  ];

  const handleChangeSort = (event) => {
    setSortQuery(event.target.value);
  };

  const handleChangeDir = (event) => {
    setSortDir(event.target.value);
  };

  const handleSearch = (event) => {
    // setSearchTerm(event.target.value);
  };
  const keyPress = (event) => {
    if (event.keyCode == 13) {
      setSearchTerm(event.target.value);
    }
  };

  return (
    <div>
      <ToggleButton value="check" selected={isOpen} onChange={toggleOpen}>
        Advanced search
      </ToggleButton>
      {isOpen && (
        <div>
          <CategoryFilter categoryList={categoryList} />
          <Box sx={{ maxWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="review-sort-by"
                id="review-sort-by-select"
                value={sortQuery}
                label="sortQuery"
                onChange={handleChangeSort}
              >
                {sortAr.map((option) => {
                  return (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ maxWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Order</InputLabel>
              <Select
                labelId="review-sort-by"
                id="review-sort-by-select"
                value={sortDir}
                label="sortDir"
                onChange={handleChangeDir}
              >
                <MenuItem value={"ASC"}>Ascending</MenuItem>
                <MenuItem value={"DESC"}>Descending</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      )}
      <TextField
        id="standard-basic"
        label="Search reviews..."
        variant="standard"
        onChange={handleSearch}
        onKeyDown={keyPress}
      />
    </div>
  );
};

export default FilterAndSearch;
