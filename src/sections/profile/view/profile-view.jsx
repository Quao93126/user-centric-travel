
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function ProfileView() {
  

  return (
    <Container maxWidth="xl">

      <Grid 
        container
        spacing={3} 
        justifyContent="center"
        alignItems="center"
        marginTop={6}
      >
        <img alt="icon" src="/assets/images/travelscore.png" />
      </Grid>

      <Grid 
        container
        spacing={3}
        marginTop={2}
        sx={{ display: 'flex', justifyContent: 'right' }}
      >
        <Grid item xs={6} md={6} lg={6}>
          <Paper sx={{
            backgroundColor: '#FB8D334D',
          }}>
            <Button
              fullWidth
              sx={{
                alignItems: 'left',
                justifyContent: 'left',
              }}
              startIcon={<img src="/assets/icons/glass/ic_glass_country.png" alt="icon" style={{ marginRight: 8, width: 46, height: 46 }} />}
            >
              <Grid sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start',}}>
                <Typography sx={{color: '#E98A1B', fontSize: '18px'}}>5</Typography>
                <Typography sx={{color: '#474A5D', fontSize: '14px'}}>Countries</Typography>
              </Grid>
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={6} md={6} lg={6}>
          <Paper sx={{
            backgroundColor: '#0071CE4D'
          }}>
            <Button
              fullWidth
              sx={{
                alignItems: 'left',
                justifyContent: 'left',
              }}
              startIcon={<img src="/assets/icons/glass/ic_glass_city.png" alt="icon" style={{ marginRight: 8, width: 46, height: 46 }} />}
            >
              <Grid sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start',}}>
                <Typography sx={{color: '#0B70EC', fontSize: '18px'}}>32</Typography>
                <Typography sx={{color: '#474A5D', fontSize: '14px'}}>Cities</Typography>
              </Grid>
            </Button>
          </Paper>
        </Grid>
        
        <Grid item marginRight={2} >
          <MenuItem
            // onClick={handleClose}
            sx={{ fontSize: '16px', fontWeight:'600', color: '#32354E', py: 1.5 }}
          >
            Edit Profile
          </MenuItem>
        </Grid>
      </Grid>

      <Grid 
        container
        spacing={3}
        marginTop={2}
      > 
        <Grid item xs={12} md={12} lg={12}>
          <Typography sx={{ mb: 1, fontSize: '18px', fontWeight: '500', color: '#3E5EE4' }}>
            Header photo
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Box
            component="img"
            src='/assets/images/covers/image.jpg'
            sx={{
              width: '100%',
              maxWidth: '100%', 
              borderRadius: '10px',
              paddingTop: '0px'
            }}
          />
        </Grid>
      </Grid>

      <Grid 
        container
        spacing={3}
        marginTop={2}
      > 
        <Grid item xs={12} md={12} lg={12}>
          <Typography sx={{ mb: 1, fontSize: '18px', fontWeight: '500', color: '#3E5EE4' }}>
            Profile photo
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Box
            component="img"
            src='/assets/images/profiles/profile_photo.jpg'
            sx={{
              borderRadius: '10px',
              paddingTop: '0px'
            }}
          />
        </Grid>
      </Grid>

      <Grid 
        container
        spacing={3}
        marginTop={2}
      > 
        <Grid item xs={6} md={6} lg={6}>
          <Typography sx={{ mb: 1, fontSize: '18px', fontWeight: '500', color: '#3E5EE4' }}>
            Phone number
          </Typography>
          <Typography sx={{ mt: 6, ml: 4, fontSize: '18px', fontWeight: '400', color: '#3D3A45' }}>
            +00 1234567890
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <Typography sx={{ mb: 1, fontSize: '18px', fontWeight: '500', color: '#3E5EE4' }}>
            Location
          </Typography>
          <Typography sx={{ mt: 6, ml: 4, fontSize: '18px', fontWeight: '400', color: '#3D3A45' }}>
            Paris, France
          </Typography>
        </Grid>
      </Grid>

      <Grid 
        container
        spacing={3}
        marginTop={2}
      > 
        <Grid item xs={12} md={12} lg={12}>
          <Typography sx={{ mb: 1, fontSize: '18px', fontWeight: '500', color: '#3E5EE4' }}>
            About me
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Typography sx={{ mb: 1, ml: 4, fontSize: '18px', fontWeight: '400', color: '#3D3A45' }}>
            Lorem ipsum dolor sit amet consectetur. At vestibulum ut ultricies platea vestibulum. At nam vestibulum nibh nisl commodo accumsan sed. Egestas ultrices sagittis in gravida tellus nibh. Consectetur luctus pellentesque pharetra amet nisl massa rhoncus proin odio. Lacus in dui nunc.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
