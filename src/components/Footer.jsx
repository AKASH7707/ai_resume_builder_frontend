import { Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <footer className='row p-5 bg-secondary'>
        <div className='col-4'>
            <Typography variant='p' component={'p'}>An AI Powered Resume Builder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</Typography>
        </div>
        <div className='col-4'>
            <Typography variant='p' className='text-center' component={'p'}>Designed & built with ❤️ using React</Typography>
        </div>
        <div className='col-4'>
            <ul>
                <li><Typography variant='h5' component={'p'}>Contact Us</Typography></li>
                <li><Typography variant='p' component={'p'}></Typography>resumebuilder@gmail.com</li>
                <li><Typography variant='p' component={'p'}>9087654321</Typography></li>
                <li><Typography variant='p' component={'p'}>Connect With Us</Typography></li>
                <li><Typography variant='p' component={'p'}></Typography></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer