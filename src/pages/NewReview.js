import { MenuItem } from "@material-ui/core";
import { ConstructionOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  InputLabel,
  Link,
  Menu,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { getCategories, postReview } from "../utils/api";

const NewReview = () => {
  const { isLoggedIn, user } = useContext(UserContext);
  const [categoryList, setCategoryList] = useState([]);

  const [selectedCat, setSelectedCat] = useState("");

  const reviewOb = {
    owner: user.user,
  };

  useEffect(() => {
    // setIsLoading(true);
    getCategories()
      .then((catsFromApi) => {
        // setIsLoading(false);
        setCategoryList(catsFromApi);
      })
      .catch((err) => {
        console.log(err);
        // setIsError(true);
      });
  }, []);

  const handelTextFieldChange = (event) => {
    if (event.target.id === "category") {
      setSelectedCat(event.target.value);
    }
    reviewOb[`${event.target.id}`] = event.target.value;
  };

  const handleSubmitReview = () => {
    postReview(reviewOb)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {isLoggedIn ? (
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            "& .MuiTextField-root": { m: 1, width: "100%", minWidth: "10ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Box sx={{ p: 1, m: 1 }}>
              <Select
                labelId="category"
                id="category"
                value={selectedCat}
                label="selectedCat"
                onChange={handelTextFieldChange}
                sx={{ minWidth: 120 }}
              >
                {categoryList.map((cat) => {
                  return (
                    <MenuItem value={cat.slug} key={cat.slug}>
                      {cat.slug}
                    </MenuItem>
                  );
                })}
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </Box>

            <TextField
              required
              id="title"
              label="Title"
              onChange={handelTextFieldChange}
            />

            <TextField
              required
              id="designer"
              label="Designer"
              onChange={handelTextFieldChange}
            />
          </Box>
          <Box sx={{ p: 1, m: 1 }}>
            <TextField
              required
              id="review_body"
              label="Review"
              multiline
              rows={10}
              onChange={handelTextFieldChange}
              sx={{}}
            />
          </Box>
          <Button onClick={handleSubmitReview}>Submit review</Button>
        </Box>
      ) : (
        <Link to="/login" sx={{ p: 1, m: 1 }}>
          Please Log in to submit review
        </Link>
      )}
    </>
  );
};

export default NewReview;
