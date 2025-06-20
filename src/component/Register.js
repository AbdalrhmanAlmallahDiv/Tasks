import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";

import { useState } from "react";
export default function Register() {
  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[email,setEmail]=useState("");
  const[phoneNumber,setPhoneNumber]=useState("");
  const[kitchenName,setKitchenName]=useState("");
  const[password,setPassword]=useState("");
  const[passwordConfig,setPasswordConfig]=useState("");
  return (
    <>
      <div className="parent">
        <div className="container">
          <div className="div1">
            <span>SMN</span>

            <div className="div2">
              <h3>HOMEMADE</h3>
            </div>
            <div className="div3">
              <h4>Food</h4>
            </div>
          </div>
          <div className="div4">
            <label>Sgin in</label>
          </div>
          <form>
            <div class="input-row">
              <TextField
                type="text"
                id="outlined-basic1"
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => {
                setFirstName(e.target.value);
              }}
              />

              <TextField
                type="text"
                id="outlined-basic1"
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => {
                setLastName(e.target.value);
              }}
              />
            </div>
            <div class="input-row">
              {" "}
              <TextField
                type="email"
                id="outlined-basic1"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => {
                setEmail(e.target.value);
              }}
              />
              <TextField
                type="tel"
                id="outlined-basic1"
                label="Phone Number"
                variant="outlined"
                value={phoneNumber}
                onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              />
            </div>
            <div class="input-row">
              <TextField
                type="text"
                id="outlined-basic1"
                label="Your Kitchen Name"
                variant="outlined"
                value={kitchenName}
                onChange={(e) => {
                setKitchenName(e.target.value);
              }}
              />

              <TextField
                type="password"
                id="outlined-basic1"
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => {
                setPassword(e.target.value);
              }}
              />
            </div>
            <div class="input-row align-end">
              {" "}
              <TextField
                type="password"
                id="outlined-basic1"
                label="Confirm Password"
                variant="outlined"
                value={passwordConfig}
                onChange={(e) => {
                setPasswordConfig(e.target.value);
              }}
              />
              <div class="terms">
                {" "}
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Accept Our Terms"
                />
              </div>
            </div>
            <div class="div13">
              {" "}
              <Button type="submit" className="btn3" variant="contained">
                sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
