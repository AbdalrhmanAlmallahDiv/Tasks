import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
export default function Register() {
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
              />

              <TextField
                type="text"
                id="outlined-basic1"
                label="Last Name"
                variant="outlined"
              />
            </div>
            <div class="input-row">
              {" "}
              <TextField
                type="email"
                id="outlined-basic1"
                label="Email"
                variant="outlined"
              />
              <TextField
                type="tel"
                id="outlined-basic1"
                label="Phone Number"
                variant="outlined"
              />
            </div>
            <div class="input-row">
              <TextField
                type="text"
                id="outlined-basic1"
                label="Your Kitchen Name"
                variant="outlined"
              />

              <TextField
                type="password"
                id="outlined-basic1"
                label="Password"
                variant="outlined"
              />
            </div>
            <div class="input-row align-end">
              {" "}
              <TextField
                type="password"
                id="outlined-basic1"
                label="Confirm Password"
                variant="outlined"
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
