import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { restaurantsFetch } from '../Redux/restaurantSlice';
import { Spinner } from 'react-bootstrap';
import Pagination from '@mui/material/Pagination';
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';

function Restaurants() {
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(6)

  const dispatch = useDispatch()
  const { allRestaurants, loading, error } = useSelector(state => state.restaurantReducer)

  useEffect(() => {
    dispatch(restaurantsFetch())
  }, [])

  console.log(allRestaurants);

  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const currentPost = allRestaurants?.slice(firstPostIndex, lastPostIndex)

  return (
    <>
      <Header insideRestaurant={true} />
      <div className='main position-absolute  w-100 ' style={{ top: "0%" }}>
        <div className=" w-100 px-5" style={{ backdropFilter: "blur(8px)", paddingTop: "130px", paddingBottom: "60px" }}>
          {loading ?
            <div className='text-center mt-5 fw-bolder text-danger'>
              <Spinner animation="border" variant="danger" /> Loading...
            </div>
            :
            <Grid container spacing={4}>
              {currentPost?.length > 0 ?
                currentPost?.map(restaurt => (
                  <Grid xs={12} sm={6} lg={4} key={restaurt.id}>
                    <div>
                      <Card sx={{ display: 'flex', height: "205px", backgroundColor: "#1e1e1e" }}>
                        <CardMedia
                          component="img"
                          sx={{ width: 144 }}
                          image={restaurt.photograph}
                          alt="Image"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: "flex-end" }}>
                            <Typography component="div" variant="h6" color={"#f2f2f2"}>
                              {restaurt.name.slice(0,12)}...
                            </Typography>
                            <Typography variant="subtitle1" component="div" color={"#ababab"}>
                              {restaurt.neighborhood}
                            </Typography>
                            <Typography variant="body2" component="div" color={"#ababab"}>
                              Cuisine Type : {restaurt.cuisine_type}
                            </Typography>
                            <Rating className='mt-2' name="size-medium" defaultValue={restaurt.reviews[0].rating} precision={0.5} />
                            <Link to={`/${restaurt.id}/view`} className='btn btn-info bttnEdit'>View</Link>
                          </CardContent>
                        </Box>
                      </Card>
                    </div>
                  </Grid>
                ))
                :
                <div className="fw-bolder text-center mt-5 mb-5 text-danger">
                  Restaurants Not Found!!!
                </div>
              }
            </Grid>
          }
          {allRestaurants?.length>0 &&
            <Pagination className='d-flex justify-content-center mt-4' count={Math.ceil(allRestaurants?.length / postPerPage)} shape="rounded" color="secondary" onChange={(e,selectedPage)=>setCurrentPage(selectedPage)}/>
          }
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Restaurants
