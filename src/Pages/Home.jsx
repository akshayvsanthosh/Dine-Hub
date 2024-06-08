import React from 'react'
import Header from '../Components/Header'
import Carousel from 'react-bootstrap/Carousel';
import Grid from '@mui/material/Unstable_Grid2';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <Header />
      <Carousel fade className='w-100 position-absolute top-0'>
        <Carousel.Item interval={1000} >
          <div className="bg1" style={{ height: "100vh" }} text="First slide" />
          <Carousel.Caption>
            <Grid container spacing={2} style={{ height: "100%" }}>
              <Grid xs={0} md={6}>
              </Grid>
              <Grid xs={12} md={6}>
                <div className='insideCarouselCaption'>
                  <img className='homeLogo' width={"28%"} src={logo} alt="LOGO" />
                  <p className='homePara'>Dinehub invites you to embark on a delightful gastronomic adventure. Our curated collection of restaurants spans diverse cuisines, from cozy cafes serving aromatic coffees and pastries to elegant fine-dining establishments offering exquisite gourmet dishes.
                  </p>
                  <Link to={'/restaurants'} className='btn btn-warning rounded-4' style={{ width: "19%" }}>Explore</Link>
                </div>
              </Grid>
            </Grid>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="bg2" style={{ height: "100vh" }} text="Second slide" />
          <Carousel.Caption>
            <Grid container spacing={2} style={{ height: "100%" }}>
              <Grid xs={0} md={6}>
              </Grid>
              <Grid xs={12} md={6}>
                <div className='insideCarouselCaption'>
                  <img className='homeLogo' width={"28%"} src={logo} alt="LOGO" />
                  <p className='homePara'>Dinehub invites you to embark on a delightful gastronomic adventure. Our curated collection of restaurants spans diverse cuisines, from cozy cafes serving aromatic coffees and pastries to elegant fine-dining establishments offering exquisite gourmet dishes.
                  </p>
                  <Link to={'/restaurants'} className='btn btn-warning rounded-4' style={{ width: "19%" }}>Explore</Link>
                </div>
              </Grid>
            </Grid>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="bg3" style={{ height: "100vh" }} text="Third slide" />
          <Carousel.Caption>
            <Grid container spacing={2} style={{ height: "100%" }}>
              <Grid xs={0} md={6}>
              </Grid>
              <Grid xs={12} md={6}>
                <div className='insideCarouselCaption'>
                  <img className='homeLogo' width={"28%"} src={logo} alt="LOGO" />
                  <p className='homePara'>Dinehub invites you to embark on a delightful gastronomic adventure. Our curated collection of restaurants spans diverse cuisines, from cozy cafes serving aromatic coffees and pastries to elegant fine-dining establishments offering exquisite gourmet dishes.
                  </p>
                  <Link to={'/restaurants'} className='btn btn-warning rounded-4' style={{ width: "19%" }}>Explore</Link>
                </div>
              </Grid>
            </Grid>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="bg4" style={{ height: "100vh" }} text="Third slide" />
          <Carousel.Caption>
            <Grid container spacing={2} style={{ height: "100%" }}>
              <Grid xs={0} md={6}>
              </Grid>
              <Grid xs={12} md={6}>
                <div className='insideCarouselCaption'>
                  <img className='homeLogo' width={"28%"} src={logo} alt="LOGO" />
                  <p className='homePara'>Dinehub invites you to embark on a delightful gastronomic adventure. Our curated collection of restaurants spans diverse cuisines, from cozy cafes serving aromatic coffees and pastries to elegant fine-dining establishments offering exquisite gourmet dishes.
                  </p>
                  <Link to={'/restaurants'} className='btn btn-warning rounded-4' style={{ width: "19%" }}>Explore</Link>
                </div>
              </Grid>
            </Grid>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="bg5" style={{ height: "100vh" }} text="Third slide" />
          <Carousel.Caption>
            <Grid container spacing={2} style={{ height: "100%" }}>
              <Grid xs={0} md={6}>
              </Grid>
              <Grid xs={12} md={6}>
                <div className='insideCarouselCaption'>
                  <img className='homeLogo' width={"28%"} src={logo} alt="LOGO" />
                  <p className='homePara'>Dinehub invites you to embark on a delightful gastronomic adventure. Our curated collection of restaurants spans diverse cuisines, from cozy cafes serving aromatic coffees and pastries to elegant fine-dining establishments offering exquisite gourmet dishes.
                  </p>
                  <Link to={'/restaurants'} className='btn btn-warning rounded-4' style={{ width: "19%" }}>Explore</Link>
                </div>
              </Grid>
            </Grid>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Home
