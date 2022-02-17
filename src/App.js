

import InputAdornment from '@mui/material/InputAdornment';

import TextField from '@mui/material/TextField';
import {useState} from "react";
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';




import './App.css';
import icon from "./image/icon.png";
import india from "./image/india.png";
import down from "./image/dropdown.svg";
import imageC from "./image/imageC.png"
import indias from "./image/indias.png";
import turkey from "./image/turkey.png";
import usa from "./image/usa.png";
import pakistan from "./image/pakistan.png";



const area = [
  { 
    flag : indias,
    label : "India"
  },
  {
    flag : turkey,
    label : "Turkey"
  },
  {
    flag : usa,
    label : "USA"
  },
  {
    flag : pakistan,
    label : "Pakistan"
  }
]

function App() {

  const [country, setCountry] = useState("India");
  const handleChange = (event) => {
    setCountry(event.target.value);
  };



  //phone number validation
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorPhone, setErrorPhone] = useState(false);


  const restrictPhone = (e) => {
    let x = e.which || e.keycode;
    if(x >= 48 && x <= 57) {
      console.log(e.target.value);
      setPhoneNumber(e.target.value);
      setErrorPhone(false);
    } else {
      setErrorPhone(true);
    }
    
  }

//Name validationvalidation

const [name, setName] = useState("");
const [errorName, setErrorName] = useState(false);

const restrictName = (e) => {
  let x = e.which|| e.keycode;
  if((x >= 65  && x <= 90) ||( x >= 97 && x <= 122) || x == 32) {
    setErrorName(false);
    setName(e.target.value);
  } else {
    setErrorName(true);
  }
}




//Email validation
const [email, setEmail] = useState("");
const [errorEmail, setErrorEmail] = useState(false);


const handleOnChange = (e) => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(e)) {
    setErrorEmail(false);
  } else {
    setErrorEmail(true);
  }
}


  return (
    <div className="App">
      <div className = "mainContainer">
        <div className = "navbarContainer">
          <div className = "companyIcon">
              {/* <img src = {icon} alt = "icon" /> */}
              <div className = "com"><span className = "pre">un</span>grammary</div>
          </div>
          <div className = "somePage">
            <p>About us</p>
            <p>Solution</p>
            <p>Global Network</p>
          </div>
          <div className = "contactUs">
            <div className = "contactUs">
              <button className = "contactUsBtn">Contact us</button>
            </div>
            <div className = "dropDown">
              <img className = "india-flag" src = {india} alt = "india-flag" />
            </div>
            <div className = "dropSign">
            <img src = {down} alt = "drop" />
            </div>
          </div>
        </div>
        <div className = "contentContainer">
          <div className = "imageContainer">
            <br />
            <br />
            <img src = {imageC} alt = "image" />
          </div>
          <div className = "formContainer">
            <div>
              <h1>Hi, let's get in touch.</h1>
            </div>
            {
              errorPhone === true ? (
                <TextField
            onKeyPress = {(e) => restrictPhone(e)}
            // value = {phoneNumber}
            error
            // error
          label="Phone no"
          id="outlined-start-adornment outlined-end-error-helper-text"
          helperText = "Enter valid number"
          sx={{ m: 1, width: '94%' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">
              <img className = "india" src = {india} alt = "some" />
              <img className = "down" src = {down} alt = "down" /> <span className = "arrow"> |</span>
            </InputAdornment>,
          }}
        />
              ) : (
                <TextField
                onKeyPress = {(e) => restrictPhone(e)}
                // value = {phoneNumber}
                
                // error
              label="Phone no"
              id="outlined-start-adornment outlined-end-error-helper-text"
              // helperText = "Enter valid number"
              sx={{ m: 1, width: '94%' }}
              InputProps={{
                startAdornment: <InputAdornment position="start">
                  <img className = "india" src = {india} alt = "some" />
                  <img className = "down" src = {down} alt = "down" /> <span className = "arrow"> |</span>
                </InputAdornment>,
              }}
            />
              )
            }
            

      <TextField
          id="outlined-select-currency"
          select
          label="Select Country"
          sx={{ m: 1, width: '94%' }}

          value={country}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {area.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              <img  src = {option.flag} alt = "flag" />
              {"  "}  <span className = "align">{option.label}</span>
            </MenuItem>
          ))}
        </TextField>


          {
            errorName== true ? (
              <TextField
              onKeyPress = {(e) => restrictName(e)}
                error
              label="Enter name"
              id="outlined-start-adornment outlined-end-error-helper-text"
              helperText = "Special Character not allowed"
              defaultValue="John Doe"
              sx={{ m: 1, width: '94%' }}
              
            />
            ) : (
              <TextField
              onKeyPress = {(e) => restrictName(e)}
                
              label="Enter name"
              id="outlined-start-adornment outlined-end-error-helper-text"
              // helperText = "Special Character not allowed"
              defaultValue="John Doe"
              sx={{ m: 1, width: '94%' }}
              
            />
            )
          }
         
          {
            errorEmail === true ? (
              <TextField
            error
            onChange = {(e) => {
              handleOnChange(e.target.value);
            }}
          label="Email address"
          id="outlined-start-adornment outlined-end-error-helper-text"
          helperText = "Enter valid email address"
          defaultValue="John Doe"
          sx={{ m: 1, width: '94%' }}
          
        />
            ) : (
              <TextField
            // error
            onChange = {(e) => {
              handleOnChange(e.target.value);
            }}
          label="Email address"
          id="outlined-start-adornment outlined-end-error-helper-text"
          // helperText = "Enter valid email address"
          defaultValue="John Doe"
          sx={{ m: 1, width: '94%' }}
          
        />
            )
          }
      
        <TextField
          id="outlined-multiline-static"
          label="Message"
          // placeholder = "Message"
          multiline
          rows={4}
          sx={{ m: 1, width: '94%' }}

          // defaultValue="Default Value"
        />
          
        <Button sx={{ m: 1}} color = "secondary" variant="contained">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
