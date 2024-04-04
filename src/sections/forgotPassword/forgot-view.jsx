import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';

// ----------------------------------------------------------------------

export default function ForgotView() {
  const theme = useTheme();

  const router = useRouter();


  const handleClick = () => {
    router.push('/dashboard');
  };

  const renderForm = (
    <>
      <Stack spacing={3}> 

        <Typography sx={{ mt: 2,fontSize:'13px' }}>
         Email* 
        </Typography>
        <TextField name="email" label="briang.giday@company.com" size="small" sx={{ mt: 2 }} />
  
      </Stack>
      <div style={{ height: 20 }} />
      <LoadingButton
        fullWidth
        size="middle"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
        sx={{color:'#FFFFFF',backgroundColor:'#33C2B2'}}
      >
        Request Password Reset
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
          alignItems: 'left',
          justifyContent: 'left'
        }}
      />

      <Stack alignItems="center" justifyContent="center">
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography sx={{fontSize:'25px', mt: 2 ,mb: 3}}>Forgot Password</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Please enter your email address below and we will send you a link to reset your password
          </Typography>

          {renderForm}

        </Card>
      </Stack>
    </Box>
  );
}
