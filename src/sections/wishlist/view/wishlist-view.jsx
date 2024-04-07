import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Checkbox from '@mui/material/Checkbox';
import WorldMap from "react-svg-worldmap";
import axios from "axios";

// import { COUNTRIES } from 'src/_mock/countries';
// import { CITIES } from 'src/_mock/cities';
import { data } from 'src/_mock/mapdata';
import Scrollbar from 'src/components/scrollbar';

import Searchbar from '../searchbar';

const API_URL = "https://user-centric-travel-backend.onrender.com/users/";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
// ----------------------------------------------------------------------

export default function WishlistView() {
  // Travel Score State
  const [travelscore, setTravelScore] = useState(0);

  // Country
  const [COUNTRIES, setCOUNTRIES] = useState([]);
  const getAllCountry = () => axios.get(`${API_URL}getallCountry`);
  useEffect(() => {
    getAllCountry()
    .then((result) => {
      setCOUNTRIES(result.data.data);
    })
    .catch(() => {
      console.log("failed");
    });
  }, []);

  const [open, setOpen] = useState(false);
  const [filterName, setFilterName] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([COUNTRIES]);
  const [checkedCountries, setCheckedCountries] = useState([]);
  const selectedCountriesCount = Object.values(checkedCountries).filter(Boolean).length;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };
  const handleCountryToggle = (countryId) => {
    const selectedCountry = COUNTRIES.find(country => country.title === countryId);
    const countryScore = selectedCountry ? selectedCountry.score : 0;
    console.log('Score of', countryId, 'is', countryScore);
    setTravelScore(prevTravelScore => prevTravelScore + Number(countryScore));
    setCheckedCountries(prevState => {
      const updatedState = { ...prevState };
      updatedState[countryId] = !prevState[countryId];
      return updatedState;
    });
  };
  useEffect(() => {
    setFilteredCountries(COUNTRIES.filter(country => country.title.toLowerCase().includes(filterName.toLowerCase())));
  }, [filterName, COUNTRIES]);

  // City
  const [cities, setCities] = useState([]);
  const getAllCity = () => axios.get(`${API_URL}getallCity`);
  useEffect(() => {
    getAllCity()
    .then((result) => {
      setCities(result.data.data);
    })
    .catch(() => {
      console.log("failed");
    });
  }, []);

  const [openCityModal, setOpenCityModal] = useState(false); // City Modal
  const [filterNameOfCity, setFilterNameOfCity] = useState('');
  const [filteredCities, setFilteredCities] = useState(cities);
  const [checkedCities, setCheckedCities] = useState([]);
  const selectedCitiesCount = Object.values(checkedCities).filter(Boolean).length;

  const handleOpenCityModal = () => setOpenCityModal(true);
  const handleCloseCityModal = () => setOpenCityModal(false);
  const handleFilterByNameOfCity = (event) => {
    setFilterNameOfCity(event.target.value);
  };  
  const handleCityToggle = (cityname) => {
    const selectedCity = cities.find(city => city.cityname === cityname);
    const cityScore = selectedCity ? selectedCity.score : 0;
    console.log('Score of', cityname, 'is', cityScore);
    setTravelScore(prevTravelScore => prevTravelScore + Number(cityScore));
    setCheckedCities(prevState => {
      const updatedState = { ...prevState };
      updatedState[cityname] = !prevState[cityname];
      return updatedState;
    });
  };  
  
  useEffect(() => {
    setFilteredCities(cities.filter(city => city.cityname.toLowerCase().includes(filterNameOfCity.toLowerCase())));
  }, [filterNameOfCity, cities]);
 
  // World Map Style
  const colorPalette = ['#5eb3d8', '#fedb76', '#40d3b7', '#f97b7f', '#f496f0', '#ec7e7f'];
  let colorIndex = 0;

  const stylingFunction = ({ countryName }) => {
    const isSelected = !!checkedCountries[countryName];
    let fillColor = '#93BED4';
    if (isSelected) {
      fillColor = colorPalette[colorIndex % colorPalette.length];
      colorIndex += 1;
    }
    return {
      fill: fillColor,
      stroke: "black",
      strokeWidth: 1,
      strokeOpacity: 0.2,
      cursor: "pointer"
    };
  };

  return (
    <Container maxWidth="xl">
      <Grid 
        container
        spacing={3} 
        justifyContent="center"
        alignItems="center"
        marginTop={6}
      >
        <Grid item style={{ position: 'relative' }}>
          <img alt="icon" src="/assets/images/travelscore.png" style={{width: '233px', height: '200px'}} />
          <Grid style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-34%, -34%)', textAlign: 'center'}}>
            <Typography style={{ fontSize: '15px', color: '#474A5D', fontWeight: 400}}>
              Travel Score
            </Typography>
            <Typography style={{ fontSize: '43px', color: '#FA479D', fontWeight: 600}}>
              {travelscore}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      
      {/* Countries Button and Modal */}
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
              startIcon={<img src="/assets/icons/glass/ic_glass_country.png" alt="icon" style={{ marginRight: 8, width: 46, height: 46 }}/>}
              onClick={handleOpen}>
              <Grid sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start',}}>
                <Typography sx={{color: '#E98A1B', fontSize: '18px'}}>{COUNTRIES.length}</Typography>
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
              onClick={handleOpenCityModal}>
              <Grid sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start',}}>
                <Typography sx={{color: '#0B70EC', fontSize: '18px'}}>{cities.length}</Typography>
                <Typography sx={{color: '#474A5D', fontSize: '14px'}}>Cities</Typography>
              </Grid>
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid item id="modal-modal-title" xs={12} md={12} lg={12}>
            <Paper sx={{
              backgroundColor: '#FB8D334D',
            }}>
              <Button
                fullWidth
                sx={{
                  alignItems: 'left',
                  justifyContent: 'left',
                }}
                startIcon={<img src="/assets/icons/glass/ic_glass_country.png" alt="icon" style={{ marginRight: 8, width: 46, height: 46 }}/>}
              >
                <Grid sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start',}}>
                  <Typography sx={{color: '#E98A1B', fontSize: '18px'}}>{selectedCountriesCount}</Typography>
                  <Typography sx={{color: '#474A5D', fontSize: '14px'}}>Countries</Typography>
                </Grid>
              </Button>
            </Paper>
          </Grid>

          <Searchbar
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <ImageList sx={{ width: 450, height: 300 }} cols={4} rowHeight={82}>
              {filteredCountries.map((item, index) => (
                <ImageListItem key={index} sx={{marginTop: 2}}>
                  <img
                    alt={`${item.value}`}
                    src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${item.value}.svg`}
                    style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                  />
                  <Typography sx={{fontSize: 10, color: 'black'}}>
                    <Checkbox 
                      checked={!!checkedCountries[item.title]}
                      onChange={() => handleCountryToggle(item.title)}
                      sx={{padding: 0}} size='small'/>{item.title}
                  </Typography>
                </ImageListItem>
              ))}
            </ImageList>
          </Scrollbar>
        </Box>
      </Modal>
      
      {/* Cities Button and Modal */}
      <Grid 
        container
        spacing={3} 
        justifyContent="center"
        alignItems="center"
        marginTop={6}
      >
        <WorldMap
          richInteraction
          backgroundColor="white"
          borderColor="white"
          color="#93BED4"
          tooltipBgColor="#31323f"
          size="xl"
          data={data}
          styleFunction={stylingFunction}
        />
      </Grid>
      <Modal
        open={openCityModal}
        onClose={handleCloseCityModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid item id="modal-modal-title" xs={12} md={12} lg={12}>
            <Paper sx={{
              backgroundColor: '#0071CE4D',
            }}>
              <Button
                fullWidth
                sx={{
                  alignItems: 'left',
                  justifyContent: 'left',
                }}
                startIcon={<img src="/assets/icons/glass/ic_glass_city.png" alt="icon" style={{ marginRight: 8, width: 46, height: 46 }} />}
                onClick={handleOpenCityModal}>
                <Grid sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start',}}>
                  <Typography sx={{color: '#0B70EC', fontSize: '18px'}}>{selectedCitiesCount}</Typography>
                  <Typography sx={{color: '#474A5D', fontSize: '14px'}}>Cities</Typography>
                </Grid>
              </Button>
            </Paper>
          </Grid>

          <Searchbar
            filterName={filterNameOfCity}
            onFilterName={handleFilterByNameOfCity}
          />

          <Scrollbar>
            <ImageList sx={{ width: 450, height: 300, backgroundColor: 'black', paddingX: 2}} cols={2} gap={20} rowHeight={82}>
              { filteredCities.map((val, index) => (
                <ImageListItem key={index} sx={{marginTop: 2}}>
                  <img src="/assets/images/city.jpg" alt="Background" style={{width: '90%', height: '100%', cursor: 'pointer' }} />
                  {/* <img
                    alt={`${Object.values(val)[0]}`}
                    src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${Object.values(val)[0]}.svg`}
                    style={{position: 'absolute', top: 8, left: 5, width: '15%', height: '20%' }}
                  /> */}
                  <ImageListItemBar
                    title={<Typography sx={{fontSize: 10, color: 'white'}}>
                              <Checkbox 
                                onChange={() => handleCityToggle(val.cityname)}
                                sx={{padding: 0}} size='small'/>{val.cityname}
                            </Typography>}
                    position="below"
                  />
                </ImageListItem>                    
              ))}
            </ImageList>
          </Scrollbar>
        </Box>
      </Modal>
    </Container>
  );
}