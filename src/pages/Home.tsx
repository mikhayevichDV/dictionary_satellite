import React, { useState } from "react";
import { Button, Grow, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { searchQueryAction } from "../store/action-creators/word";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const clickHandler = (): void => {
    if (query.length !== 0) {
      dispatch(searchQueryAction(query));
      navigate(`/word/${query}`);
    }
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "60%",
        height: "50px",
        margin: "auto",
        justifyContent: "space-between",
      }}
    >
      <Grow in={true}>
        <TextField
          style={{ width: "90%", height: "100%" }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={query}
          onChange={changeHandler}
        />
      </Grow>
      <Grow in={true}>
        <Button
          style={{ width: "8%", height: "110%" }}
          color="primary"
          aria-label="search in dictionary"
          onClick={clickHandler}
        >
          <SearchIcon />
        </Button>
      </Grow>
    </div>
  );
};

export default Home;

