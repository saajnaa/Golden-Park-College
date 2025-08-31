import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import '../styles/gallery.css'

// importing image
import haphoto1 from '../assets/images/f-health/f-health1.jpg'
import haphoto2 from '../assets/images/f-health/f-health2.jpg'
import haphoto3 from '../assets/images/f-health/f-health3.jpg'
import haphoto4 from '../assets/images/f-health/f-health4.jpg'
import haphoto5 from '../assets/images/f-health/f-health5.jpg'

import comphoto1 from '../assets/images/f-computer/f-computer1.jpg'
import comphoto2 from '../assets/images/f-computer/f-computer2.jpg'
import comphoto3 from '../assets/images/f-computer/f-computer3.jpg'
import comphoto4 from '../assets/images/f-computer/f-computer4.jpg'

import civilphoto1 from '../assets/images/f-civil/f-civil1.jpg'
import civilphoto2 from '../assets/images/f-civil/f-civil2.jpg'

import elphoto1 from '../assets/images/f-electrical/el4.jpg'
import elphoto2 from '../assets/images/f-electrical/el5.jpg'


export default function TitlebarImageList() {
  return (

    <>

      <div className="gallery-container">
        <ImageList sx={{ width: 1000, height: 450 }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">Golden Park college Gallery</ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.description}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>


  );
}



const itemData = [
  {
    img: haphoto1,
    title: 'Health Assistance Lab Expireriment',
    description: 'GPC Student Doing Practical lab experiment',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: haphoto2,
    title: ' Health Assistance Training',
    description: 'Description',
  },
  {
    img: haphoto3,
    title: 'Health assistance',
    description: 'Description.........',
  },
  {
    img: haphoto4,
    title: 'Health assistance',
    description: 'Description.............',
    cols: 2,
  },
  {
    img: haphoto5,
    title: 'Health assistance',
    description: 'description..............',
    cols: 2,
  },
  {
    img: comphoto1,
    title: 'Computer Engineering',
    description: 'Description',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: comphoto2,
    title: 'Computer Engineering',
    description: 'description............',
  },
  {
    img: comphoto3,
    title: 'Computer Engineering',
    description: 'description.............',
  },
  {
    img: comphoto4,
    title: 'Computer Engineering',
    description: 'description............',
    rows: 2,
    cols: 2,
  },
  {
    img: civilphoto1,
    title: 'Civil Engineering',
    description: 'description',
  },
  {
    img: civilphoto2,
    title: 'Civil Engineering',
    description: 'description',
  },
  {
    img: elphoto1,
    title: 'Electrical Engineering',
    description: 'description',
    cols: 2,
  },
  {
    img: elphoto2,
    title: 'Electrical Engineering',
    description: 'description',
    cols: 2,
  },

];


