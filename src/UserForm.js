import { Button, Grid, Input, Typography } from "@mui/material";
import { useState } from "react";

const UserForm = (props) => {
  const [id, setId] = useState();
  const [name, setName] = useState();

  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#ffffff",
          marginBottom: "30px",
          display: "block",
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            component={"h1"}
            sx={{ color: "#000000", marginBottom: "20px", marginTop: "20px" }}
          >
            User Form
          </Typography>
        </Grid>
        {/* ID */}
        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="id"
            sx={{
              color: "#000000",
              marginRight: "16px",
              fontSize: "16px",
              width: "100px",
              display: "block",
            }}
          >
            ID
          </Typography>
          <Input
            type="number"
            id="id"
            name="id"
            placeholder="Enter ID"
            sx={{ width: "400px", marginBottom: "16px" }}
            value={"id"}
            onChange={(e) => setId(e.target.value)}
          />
        </Grid>
        {/* Name */}
        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="id"
            sx={{
              color: "#000000",
              marginRight: "16px",
              fontSize: "16px",
              width: "100px",
              display: "block",
            }}
          >
            Name
          </Typography>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            sx={{ width: "400px", marginBottom: "16px" }}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>

        <Button
          sx={{
            margin: "auto",
            marginBottom: "20px",
            backgroundColor: "#00c6e6",
            color: "#000000",
            marginLeft: "15px",
            marginTop: "20px",
            "&:hover": {
              opacity: "0.7",
              backgroundColor: "#00c6e6",
            },
          }}
        >
          Add
        </Button>
      </Grid>
    </div>
  );
};

export default UserForm;
