import {
    Button,
    Container,
    Stack,
    TextField,
    Typography,
    
    Alert,
  } from "@mui/material";
  import {Link, useParams} from "react-router-dom"
  import { Box } from "@mui/system";
  import React, { useState } from "react";
  import { signup } from "../api/users";
  import { resetPassword } from "../api/users";
  import { loginUser } from "../helpers/authHelper";
  import { useNavigate } from "react-router-dom";
 
  import ErrorAlert from "./ErrorAlert";
  import { isLength, isEmail, contains } from "validator";


const ResetPassword = () => {
  const navigate = useNavigate();
  const {token} = useParams();
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
   
    password: "",
    token
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // setFormData({...formData, token})
    console.log(formData)
    e.preventDefault();

    
    if (Object.keys(errors).length !== 0) return;

    const data = await resetPassword(formData);

    if (data.error) {
      setServerError(data.error);
    } else {
      // loginUser(data);
    
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
        Reset Password
      </Typography>
    
      <Box component="form" onSubmit={handleSubmit}>
      
      <TextField
            label="Password"
            fullWidth
            required
            margin="normal"
            autoComplete="password"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            error={errors.password !== undefined}
            helperText={errors.password}
          />
        
        <ErrorAlert error={serverError} />
        <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
          Change Password
        </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        
      </Box>
    </Stack>
  </Container>
  )
}

export default ResetPassword