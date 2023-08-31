import React from 'react';
import { Typography, Container, Card, CardContent, Grid, CardMedia } from '@mui/material';
import Box from '@mui/material/Box';
import contactPic from '../images/contact.png'

const Contact = () => {

  return (
      <div className = 'contact_logo'>
      <img src={contactPic} alt="desc"/>
      </div>
  );
};

export default Contact;
