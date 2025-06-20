import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";

import { useState } from "react";
export default function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  return (
    <div className="conall">
      <div className="conhead">
        <div className="logo">
          <h1>SMN</h1>
        </div>
        <div className="name2">
          <h3>HOMEMADE</h3>
        </div>
        <div className="food2">
          <h4>Food</h4>
        </div>
      </div>
      <form className="form1">
        <div className="inp1">
          <label
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "180px",
            }}
          >
            Sign in
          </label>
          <div className="inp2">
            <TextField
              type="email"
              id="outlined-basic1"
              label="Enter Your Email"
              variant="outlined"
              value={emailInput}
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
            />
            <TextField
              type="password"
              id="outlined-basic2"
              label="Enter Your Password"
              variant="outlined"
              value={passwordInput}
              onChange={(e) => {
                setPasswordInput(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="radio1">
          <FormControlLabel
            value=""
            control={<Radio />}
            label="Keep me sgined in"
          />
        </div>
        <div className="btnCon">
          <Button className="btn3" type="submit" variant="contained">
            sign in
          </Button>
        </div>
        <div className="forget">
          <h4>! Forget My Password</h4>
        </div>
      </form>
    </div>
  );
}
