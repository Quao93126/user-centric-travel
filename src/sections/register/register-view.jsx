import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useFormik } from 'formik';
import * as Yup from "yup";


import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
// import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';


import { useRouter } from 'src/routes/hooks';

// import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import { register } from "src/slices/auth";
import { clearMessage } from "src/slices/message";
// ----------------------------------------------------------------------

const validateSchema = Yup.object({
  firstName: Yup.string('Enter your firstName')
    .required('FirstName is required'),
  lastName: Yup
    .string('Enter your lastName')
    .required('LastName is required'),
  email: Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmpassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function RegisterView() {
  // const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmpassword: '',
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      const { firstName, lastName, email, password } = values;
      const username = `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName.charAt(0).toUpperCase()}${lastName.slice(1)}`;

      dispatch(register({ username, email, password }))
      .unwrap()
      .then(() => {
        console.log("dispatch success");
        router.push('/login');
      })
      .catch(() => {
        console.log("failed");
      });
    
    },
  });

  
  const renderForm = (
    <Scrollbar>
    <form onSubmit={formik.handleSubmit} style={{height: '400px'}}>
      <Stack spacing={3}> 

        <Typography sx={{ fontSize:'13px' }}>
         First name* 
        </Typography>
        <TextField id='fn' name="firstName" label="first name" size="small" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          InputProps={{ style: { marginTop: 0 } }}/>

        <Typography sx={{ fontSize:'13px' }}>
         Last name* 
        </Typography>
        <TextField id='ln' name="lastName" label="last name" size="small" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}/>

        <Typography sx={{ fontSize:'13px' }}>
         Email* 
        </Typography>
        <TextField id='em' name="email" label="email" size="small" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}/>

        <Typography sx={{ fontSize:'13px' }}>
         Password*  
        </Typography>

        <TextField
          id='pw'
          name="password"
          size="small"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange} onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
         
        />
        <Typography sx={{ fontSize:'13px' }}>
          Confirm Password*  
        </Typography>

        <TextField
          id='cpw'
          name="confirmpassword"
          size="small"
          type={showConfirmPassword ? 'text' : 'password'}
          value={formik.values.confirmpassword}
          onChange={formik.handleChange} onBlur={formik.handleBlur}
          error={formik.touched.confirmpassword && Boolean(formik.errors.confirmpassword)}
          helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowConfirmPassword} onMouseDown={handleMouseDownPassword} edge="end">
                  <Iconify icon={showConfirmPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
         
        />

      </Stack>

      <LoadingButton
        fullWidth
        size="middle"
        type="submit"
        variant="contained"
        color="inherit"
        sx={{color:'#FFFFFF', backgroundColor:'#33C2B2', mt: 4}}
      >
        Sign Up
      </LoadingButton>
    </form>
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <source src="/assets/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Logo
        sx={{
          position: 'fixed',
        }}
      />
      
      <Stack alignItems="center" justifyContent="center" sx={{height: '550px', opacity: 0.6}}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >

          <Typography sx={{fontSize:'25px', mb: 2}}>Register</Typography>
          
          {/* {!successful && (
            {renderForm}
          )} */}
          
          {renderForm}
          {/* {message && (
            <div className="form-group">
              <div
                className={successful ? "alert alert-success" : "alert alert-danger"}
                role="alert"
              >
                {message}
              </div>
            </div>
          )} */}

        </Card>
      </Stack>
    </Box>
  );
}
