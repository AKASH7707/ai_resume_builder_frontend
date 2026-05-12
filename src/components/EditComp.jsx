import * as React from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobJson from '../assets/jobRole.json';
import summaries from '../assets/summaries.json';
import jobSkill from '../assets/jobSkills.json';
import Modal from '@mui/material/Modal';
import { MdEdit, MdOutlineDelete } from 'react-icons/md';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { editResume } from '../services/allAPI';
import Swal from 'sweetalert2';


const EditComp = ({ resume }) => {

    const [resumeData, setResumeData] = React.useState({
        fullName: '',
        location: '',
        jobTitle: '',
        email: '',
        contactNumber: '',
        linkedin: '',
        github: '',
        degree: '',
        college: '',
        yearOfGrad: '',
        skills: [],
        summary: ''
    })

    const [inputSkill, setInputSkill] = React.useState('');

    const removeSkill = (selectedSkill) => {
        let existingSkills = resumeData.skills;
        let newSkills = existingSkills.filter((eachSkill) => eachSkill != selectedSkill);
        setResumeData({ ...resumeData, skills: newSkills })
    }

    const addSkill = () => {
        let existingSkills = resumeData.skills;
        if (!existingSkills.includes(inputSkill)) {
            existingSkills.push(inputSkill);
        } else {
            // Swal.fire({
            //     icon: "error",
            //     title: "Oops...",
            //     text: "this skill is already added"
            // });
            alert("this skill is already added")
        }
        setResumeData({ ...resumeData, skills: existingSkills })
    }

    const editClick = async () => {
        try {
            let apiResponse = await editResume(resumeData.id, resumeData);
            if(apiResponse.status === 200){
                Swal.fire({
                    title: "Edited Successfully",
                    // text: "You clicked the button!",
                    icon: "success"
                });
                handleClose();
            }
        } catch (error) {
            console.log(error);
            
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to Edit"
            });
        }
    }

    React.useEffect(() => {
        setResumeData(resume)
    }, [])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <Box>
            <Button onClick={handleOpen} className='fs-2 text-secondary'><MdEdit /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography className='text-center mb-3' id="modal-modal-title" variant="h6" component="h2">
                        Edit Resume
                    </Typography>
                    <Box className='row'>
                        <Box className='col-6 d-grid gap-3'>
                            {/* <Typography className='text-center p-4 fw-bold' variant='h4' component={"h1"}>Personal Details</Typography> */}
                            <TextField value={resumeData?.fullName} onChange={(e) => setResumeData({ ...resumeData, fullName: e.target.value })} className="w-100" id="standard-basic" label="Full Name" variant="standard" />
                            {/* since resume data is an object we need all the key value pairs, we set setResumData as an object and spread all the existing datas in the resume data to it, then sets key and assign its value */}
                            <TextField value={resumeData?.location} onChange={(e) => setResumeData({ ...resumeData, location: e.target.value })} className="w-100 mb-2" id="standard-basic" label="Location" variant="standard" />
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Job Role</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={resumeData?.jobTitle}
                                    label="Age"
                                    onChange={(e) => setResumeData({ ...resumeData, jobTitle: e.target.value })}

                                //   onChange={handleChange}
                                >
                                    {
                                        jobJson?.jobRoles?.map((eachJob) => (
                                            <MenuItem value={eachJob}>{eachJob}</MenuItem>
                                        ))
                                    }


                                </Select>
                            </FormControl>

                            {/* <Typography className='text-center p-4 fw-bold' variant='h4' component={"h1"}>Contact Details</Typography> */}
                            <TextField value={resumeData?.email} onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })} className="w-100" id="standard-basic" label="E-mail" variant="standard" />
                            <TextField value={resumeData?.contactNumber} onChange={(e) => setResumeData({ ...resumeData, contactNumber: e.target.value })} className="w-100" id="standard-basic" label="Contact Number" variant="standard" />
                            <TextField value={resumeData?.linkedin} onChange={(e) => setResumeData({ ...resumeData, linkedin: e.target.value })} className="w-100" id="standard-basic" label="Linkedin Link" variant="standard" />
                            <TextField value={resumeData?.github} onChange={(e) => setResumeData({ ...resumeData, github: e.target.value })} className="w-100" id="standard-basic" label="GitHub Link" variant="standard" />
                            <TextField value={resumeData?.degree} onChange={(e) => setResumeData({ ...resumeData, degree: e.target.value })} className="w-100" id="standard-basic" label="Bachelor's Degree" variant="standard" />
                            <TextField value={resumeData?.college} onChange={(e) => setResumeData({ ...resumeData, college: e.target.value })} className="w-100" id="standard-basic" label="University / Collage Name" variant="standard" />
                        </Box>
                        <Box className='col-6 d-grid gap-1'>


                            {/* <Typography className='text-center p-4 fw-bold' variant='h4' component={"h1"}>Educational Details</Typography> */}

                            
                            <TextField value={resumeData?.yearOfGrad} onChange={(e) => setResumeData({ ...resumeData, yearOfGrad: e.target.value })} className="w-100" id="standard-basic" label="Year of Graduation" variant="standard" />
                            <TextareaAutosize className='mt-3'
                                onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
                                value={resumeData?.summary}
                                aria-label="minimum height"
                                minRows={3}
                                placeholder="summary"
                                style={{ width: '100%' }}
                            />

                            <Typography variant='h6' component={'h6'}>Skills</Typography>
                            <Box className='row gap-2'>
                                {
                                    resumeData?.skills?.map((eachSkill) => (

                                        <Box className='border border-dark col-5 d-flex p-2'>
                                            <Typography>{eachSkill}</Typography>
                                            <Button onClick={() => removeSkill(eachSkill)} className='btn text-danger'><MdOutlineDelete className='fs-3' /></Button>
                                        </Box>


                                    ))
                                }
                                <Box className='d-flex'>
                                    <TextField className="w-100" id="standard-basic" label="Add Skills" variant="standard" onChange={(e) => setInputSkill(e.target.value)} />
                                    <Button onClick={addSkill} variant='outlined' >Add</Button>
                                </Box>

                                <Box className='mt-3' >
                                    <Button onClick={handleClose} variant='contained' className='me-3' >Cancel</Button>
                                    <Button onClick={editClick} variant='contained' >Edit</Button>
                                </Box>
                            </Box>

                        </Box>
                    </Box>      
                </Box>
            </Modal>
        </Box>
    );
}

export default EditComp