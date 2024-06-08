import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2';
import DetailsView from '../Components/DetailsView'

function View() {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState()

  useEffect(() => {
    if (localStorage.getItem("restaurants")) {
      const restaurants = JSON.parse(localStorage.getItem("restaurants"))
      console.log(restaurants);
      console.log(restaurants.find(restaurant => restaurant.id == id));
      setRestaurant(restaurants.find(restaurant => restaurant.id == id))
    }
  },[])


  return (
    <>
      <Header />
      <div className='position-absolute top-0' style={{ width: "100%", backgroundImage: `url(${restaurant?.photograph})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", top: "0%" }}>
        <div className=" w-100 px-5" style={{ backdropFilter: "blur(15px)", paddingTop: "130px", paddingBottom: "60px" }}>

          <Grid container spacing={2} className="gridView">
            <Grid xs={12} md={6}>
              <div>
                <img className='restImage' src={restaurant?.photograph} alt="Image" />
              </div>
            </Grid>
            <Grid xs={12} md={6}>
              <div className='pt-3'>
                <h1 className='' style={{color:"#dcdcdc"}}>Name : {restaurant?.name}</h1>
                <h4 className='' style={{color:"#dcdcdc"}}>Type : {restaurant?.cuisine_type}</h4>
                <h6 className='mt-3' style={{color:"#dcdcdc"}}>City : {restaurant?.neighborhood}</h6>
                <h6 className='mt-3' style={{color:"#dcdcdc"}}>Address : {restaurant?.address}</h6>
              </div>
              <div className='pt-3'>
                <DetailsView/>
              </div>
            </Grid>
          </Grid>

        </div>
        <Footer />
      </div>
    </>
  )
}

export default View
