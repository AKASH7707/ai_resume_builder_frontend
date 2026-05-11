import React from 'react'
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import Box from "@mui/material/Box";
import { FaFileDownload } from "react-icons/fa";
import { addResumeData } from '../services/allAPI';
import Swal from 'sweetalert2';
import { BiSave } from 'react-icons/bi';


const Preview = ({resumeData, fromHistory}) => {

  const onDownloadClick = async () => {
    try {
      let apiResponse = await addResumeData(resumeData);
      if(apiResponse.status == 201){
        Swal.fire({
          title: "Downloded!",
          text: "You clicked the button!",
          icon: "success"
        });
      }
    } catch (error) {
      console.log(error);
      alert("Failed to add data to server");
    }
  }

  return (
    
      <>
        <Box className='text-end'>
          {
            (resumeData?.summary?.length>0 && !fromHistory) && <Button onClick={onDownloadClick} title='Save' className='fs-1'><BiSave /></Button>
          }
        </Box>      
        <Paper className='p-4 d-grid gap-2 m-2' elevation={2} >
            <Typography className='fw-bold' variant='h4' component={'h1'}>{resumeData?.fullName}</Typography>
            <Typography variant='h6' component={'h3'}>Phone : {resumeData?.contactNumber}</Typography>
            <Typography variant='h6' component={'h3'}>E-mail : {resumeData?.email}</Typography>
            <Typography variant='h6' component={'h3'}>LinkedIn : <a href="">{resumeData?.linkedin}</a></Typography>
            <Typography variant='h6' component={'h3'}>Github : <a href="">{resumeData?.github}</a></Typography>
            <Typography variant='h6' component={'h3'}>Location : {resumeData?.location}</Typography>
            <hr />
            <Typography className='fw-bold' variant='h5' component={'h2'}>Professional Summary</Typography>
            <Typography  variant='p' component={'p'}>{resumeData?.summary}</Typography>
            <hr />
            <Typography className='fw-bold' variant='h5' component={'h2'}>Technical Skills</Typography>
            {
              resumeData?.skills?.length>0 && <Box>
                {
                  resumeData?.skills?.map((eachSkill)=>(
                    <span className='me-3'>{eachSkill}</span>
                  ))
                }
              </Box>
            }
            <hr />
            <Typography className='fw-bold' variant='h5' component={'h2'}>Education</Typography>
            <Typography variant='h6' component={'h3'}>Bachelor’s Degree in {resumeData?.degree}</Typography>
            <Typography variant='h6' component={'h3'}>University/College Name : {resumeData?.college}</Typography>
            <Typography variant='h6' component={'h3'}>Year of Graduation : {resumeData?.yearOfGrad}</Typography>

        </Paper>
      </>
  
  )
}

export default Preview