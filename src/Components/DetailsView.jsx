import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { Card, Spinner } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }))

export default function BasicTabs() {
    useEffect(() => {
        if (localStorage.getItem("restaurants")) {
            const foundResturant = JSON.parse(localStorage.getItem("restaurants"));
            setResturant(foundResturant.find((item) => item.id == id));
        }
    }, []);


    const [value, setValue] = React.useState(0);
    const [value2, setValue2] = React.useState(0);

    const { id } = useParams();
    const [resturant, setResturant] = useState();

    if (!resturant) {
        return <div className='text-center mt-5 fw-bolder text-danger'>
            <Spinner animation="border" variant="danger" /> Loading...
        </div>
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };

    console.log(resturant.reviews);

    return (
        <Box sx={{ width: '100%' }} className="detailBox">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Timings" {...a11yProps(0)} className="text-white" />
                    <Tab label="Direction" {...a11yProps(1)} className="text-white" />
                    <Tab label="Reviews" {...a11yProps(2)} className="text-white" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0} className="text-white">
                <ul className="">
                    {Object.entries(resturant.operating_hours).map(([day, hours]) => (
                        <li className="mt-3" key={day}>
                            {day} : {hours}
                        </li>
                    ))}
                </ul>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} className="text-white">
            <iframe style={{borderRadius:"20px"}} src={`https://maps.google.com/maps?q=${resturant.latlng.lat},${resturant.latlng.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`} width="100%" height="300"  allowfullscreen="" 
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2} className="pt-0">

                <Box sx={{ bgcolor: '#00000024' }} className="pt-0">
                    <StyledTabs
                        value={value2}
                        onChange={handleChange2}
                        aria-label="styled tabs example"
                    >
                        {resturant.reviews.map((review, index) => (
                            <StyledTab index label={review.name} />
                        ))}
                    </StyledTabs>
                    <Box>
                    {resturant.reviews.map((review, index) => (
                        <CustomTabPanel value={value2} index={index}  className="text-white p-0">
                            <Rating size="small" className='mb-2' name="size-medium" defaultValue={review.rating} precision={0.5} /> 
                            <p className="text-justify">
                               {review.comments}
                            </p>
                            <p>{review.date}</p>
                        </CustomTabPanel>
                    ))}
                    </Box>
                </Box>

            </CustomTabPanel>
        </Box>
    )
}