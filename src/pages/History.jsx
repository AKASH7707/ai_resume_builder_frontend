import React, { useEffect, useState } from 'react'
import { deleteResume, getResumeData } from '../services/allAPI';
import Swal from 'sweetalert2';
import { Box, Button, Typography } from '@mui/material';
import Preview from '../components/Preview';
import { MdDelete, MdEdit } from 'react-icons/md';
import EditComp from '../components/EditComp';


const History = () => {

  const [data, setData] = useState([]);
  const [change, setChange] = useState([]);

  useEffect(()=>{
    getData()
  },[change]);

  const getData = async () => {
    try {
      let apiResponse = await getResumeData();
      if(apiResponse.status == 200){
        setData(apiResponse.data);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error Fetching Data"
      });
    }
  }

  const onDeleteClick = async (id) => {
    try {
      let apiResponse = await deleteResume(id);
      if(apiResponse.status == 200){
        Swal.fire({
          title: "Deleted",
          text: "Resume Successfully Deleted from Server",
          icon: "success"
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to Delete Resume"
      });
    }
    getData()
  }

  return (
    <Box>
      <Typography className='text-center' variant='h3' component={'h3'}>History</Typography>
      {
        data?.length>0 ? <div className='row gap-5 justify-content-center'>
          {
            data?.map((eachResume) => (
              <div className='col-5 border border-2'>
                <Box className='d-flex'>
                  <Button onClick={() => onDeleteClick(eachResume.id)} className='fs-2 text-danger'><MdDelete /></Button>
                  <EditComp resume={eachResume} />
                </Box>

                <Preview resumeData={eachResume} fromHistory={true} /></div>
            ))
          }
        </div> : <Typography className='text-center' variant='h3' component={'h3'}>No Resume for Download</Typography>
      }
    </Box>
  )
}

export default History