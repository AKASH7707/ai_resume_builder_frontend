import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import resumeImage from '../assets/resume-icon.png';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const Header = () => {
  return (
    <header>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='bg-secondary'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    <Link to={'/'}><img style={{width : "50px"}} src={resumeImage} alt="" /></Link>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Resume Builder with AI
                    </Typography>
                    <Link to={'/history'} className='btn text-light fw-bold'>History</Link>
                    <Tooltip title="An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF." placement="bottom-start">
                        <Button className='btn text-light'>About</Button>
                    </Tooltip>
                </Toolbar>

            </AppBar>
        </Box>
    </header>
  )
}

export default Header