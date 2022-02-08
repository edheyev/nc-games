import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ToggleButton from "@mui/material/ToggleButton";
import CategoryFilter from "./CategoryFilter";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
    if (event.target.value === "") {
      return navigate(`/`);
    }
  };
  const keyPress = (event) => {
    if (event.keyCode == 13) {
      return navigate(`/search/${event.target.value}`);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        p: 1,
        m: 1,
      }}
    >
      <ToggleButton
        sx={{ p: 1, m: 1 }}
        value="check"
        selected={isOpen}
        onChange={toggleOpen}
      >
        Advanced search
      </ToggleButton>
      {isOpen && (
        <Box>
          <CategoryFilter categoryList={categoryList} />
          <Box sx={{ display: "flex" }}>
            <Box>
              <FormControl fullWidth>
                <InputLabel id="select-label">Sort</InputLabel>
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
            <Box>
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
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default FilterAndSearch;
