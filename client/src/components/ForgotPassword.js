import {
    Button,
    Container,
    Stack,
    TextField,
    Typography,
    
    Alert,
  } from "@mui/material";
  import {Link} from "react-router-dom"
  import { Box } from "@mui/system";
  import React, { useState } from "react";
  import { signup } from "../api/users";
  import { forgotPassword } from "../api/users";
  import { loginUser } from "../helpers/authHelper";
  import { useNavigate } from "react-router-dom";
 
  import ErrorAlert from "./ErrorAlert";
  import { isLength, isEmail, contains } from "validator";


const ForgotPassword = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState({});
  

  const [formData, setFormData] = useState({
   
    email: "",
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (Object.keys(errors).length !== 0) return;

    const data = await forgotPassword(formData);

    if (data.error) {
      setServerError(data.error);
    } else {
      // loginUser(data);
      alert("Check your email for reset password link.")
      navigate("/login");
    }
  };

 
    
  return (
    <Container maxWidth={"xs"} sx={{ mt: { xs: 2, md: 6 } }}>
    <Stack alignItems="center">
      <Typography variant="h2" color="text.secondary" sx={{ mb: 6 }}>
        <Link to="/" color="inherit" underline="none">
          Postify
        </Link>
      </Typography>
      <Typography variant="h5" gutterBottom>
        Forgot Password
      </Typography>
    
      <Box component="form" onSubmit={handleSubmit}>
      
        <TextField
          label="Email Address"
          fullWidth
          margin="normal"
          autoComplete="email"
          required
          id="email"
          name="email"
          onChange={handleChange}
          error={errors.email !== undefined}
          helperText={errors.email}
        />
        
        <ErrorAlert error={serverError} />
        <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
          Send
        </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        
      </Box>
    </Stack>
  </Container>
  )
}

export default ForgotPassword