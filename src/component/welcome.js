import * as React from 'react';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
export default function Welcome() {
    const navigate = useNavigate();

    const handleLoginClick =()=>{
        navigate('./Login')
    }
    const handleRegisterClick =()=>{
        navigate('./Register')
    }
  return (
    <>
      <div className="logo">
        <h1>SMN</h1>
      </div>
      <div className="name1">
        <h3>HOMEMADE</h3>
      </div>
      <div className="food1">
        <h4>Food</h4>
      </div>
      <div className="containerBtn">
        <Button className='btn1' variant="contained" onClick={handleLoginClick}>I already have an account</Button>
        <Button className='btn1' variant="contained" onClick={handleRegisterClick}>sign up as a new kitchen </Button>
      </div>
    </>
  );
}
