import { Typography } from '@mui/material'
import React from 'react'
import { FaFileAlt, FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Generate = () => {
  return (
    <section className='vh-100'>
        <Typography className='text-center p-4 fw-bold' variant='h4' component={"h1"}>Create an ATS Friendly Resume in minutes with AI</Typography>
        <div className="d-flex justify-content-around text-center p-5">
            <div className="box border shadow-lg p-5">
                <FaFileAlt className='fs-1 text-primary' />
                <Typography className='text-center fw-bold' variant='h5' component={"h5"}>Add Your Details</Typography>
                <Typography className='text-center fw-bold' variant='p' component={"p"}>Our AI will generate skills & summary</Typography>
                <Typography className='text-center fw-bold' variant='h5' component={"h5"}>Step 1</Typography>
                {/* <Typography className='text-center p-4 fw-bold' variant='h5' component={"h5"}></Typography> */}
            </div>
            <div className="box border shadow-lg p-5">
                <FaFileDownload className='fs-1 text-danger' />
                <Typography className='text-center fw-bold' variant='h5' component={"h5"}>Download your Resume</Typography>
                <Typography className='text-center fw-bold' variant='p' component={"p"}>Download PDF and start applying Step 2</Typography>
                <Typography className='text-center fw-bold' variant='h5' component={"h5"}>Step 2</Typography>
            </div>
        </div>
        {/* <Typography className='text-center p-4 fw-bold' variant='h4' component={"h1"}>Create an ATS Friendly Resume in minutes with AI</Typography> */}
        <div className='text-center p-4'>
            <Link to={'/form'} className='btn btn-lg btn-success text-center'>LET'S START</Link>
        </div>
    </section>
  )
}

export default Generate