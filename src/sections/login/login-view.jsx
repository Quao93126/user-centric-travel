import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useFormik } from 'formik';
import * as Yup from "yup";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
// import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';

import Swal from 'sweetalert2';

import { useRouter } from 'src/routes/hooks';

// import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { login } from "src/slices/auth";

// ----------------------------------------------------------------------

export default function LoginView() {
  // const theme = useTheme();
  const dispatch = useDispatch();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Email is required!"),
      password: Yup.string().required("Password is required!"),
    }),

    onSubmit: (values) => {
      const { email, password } = values;
      dispatch(login({ email, password }))
      .unwrap()
      .then((result) => {
        if (result.user.message === "null") {
          alertExist();
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('iduser');
          localStorage.removeItem('username');
        } else if (result.user.message === 'Incorrect password! Please try again') {
          alertMatch();
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('iduser');
          localStorage.removeItem('username');
        } else {
          router.push('/');
        }
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

        <Typography sx={{ mt: 2,fontSize:'13px' }}>
         Email* 
        </Typography>
        <TextField name="email" label="email" size="small" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}/>

        <Typography sx={{ mt: 2,fontSize:'13px' }}>
         Password*  
        </Typography>
        <TextField
          name="password"
          label="password"
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
      </Stack>

      <Stack direction="row" sx={{ my: 3 }}>
      <Grid item xs={6} md={6}  sx={{ display: 'flex', justifyContent: 'left' }}>
       <FormControlLabel control={<Checkbox />}  label="Remember me" />
      </Grid>
        
      <Grid item xs={6} md={6}  sx={{ display: 'flex', justifyContent: 'right', mt:1, ml:5 }}>
        <Link variant="subtitle2" underline="hover" sx={{color:'#33C2B2'}} href="/forgot">
          Forgot password?
        </Link>
      </Grid> 
      </Stack>

      <LoadingButton
        fullWidth
        size="middle"
        type="submit"
        variant="contained"
        color="inherit"
        sx={{color:'#FFFFFF',backgroundColor:'#33C2B2'}}
      >
        Login
      </LoadingButton>
    </form>
    </Scrollbar>
  );

  return (
    <Box
   
            // sx={{
      //   ...bgGradient({
      //     color: alpha(theme.palette.background.default, 0.9),
      //     imgUrl: '/assets/background/overlay_4.jpg',
      //   }),
      //   height: 1,
      // }}
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
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
          alignItems: 'left',
          justifyContent: 'left'
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: '550px', opacity: 0.6 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >

          <Typography variant="body2" sx={{ mt: 2, mb: 3 }}>
            Don’t have an account yet?
            <Link variant="subtitle2" sx={{ ml: 0.5 ,color:'#33C2B2'}} href="/register">
            Create an account
            </Link>
          </Typography>

          <Typography sx={{fontSize:'25px', mt: 2 ,mb: 3}}>Log in to your account</Typography>

          {renderForm}

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider>

          <Stack>
            <Button
              fullWidth
              size="middle"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: '#33C2B2'}}
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" />
              <Typography sx={{marginLeft:'3px'}} >Google</Typography>
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}

const alertExist = () => {
  Swal.fire({
    icon: 'error',
    title: 'Email Doesnt Exist!',
    text: 'Please check your personal info or create a new one'
  })
}

// const alertActivate = () => {
//   Swal.fire({
//     icon: 'warning',
//     title: 'This Account need to verified!',
//     text: 'Please check your email account to activate'
//   })
// }

const alertMatch = () => {
  Swal.fire({
    icon: 'question',
    title: 'Email and Password Doesnt Match!'
  })
}

// const alertError = () => {
//   Swal.fire({
//     icon: 'error',
//     title: 'Oops...',
//     text: 'Something went wrong!'
//   })
// }
