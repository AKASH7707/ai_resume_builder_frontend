import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
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
import Swal from "sweetalert2";


const FormSteps = ({setResumeData, resumeData}) => {
    const steps = [
        "Personal Details",
        "Create an ad group",
        "Create an ad",
        "Review and Submit"
    ];
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const generateSkills = () => {

        if (resumeData.jobTitle){
            setResumeData({...resumeData, skills: jobSkill[resumeData.jobTitle], summary: summaries[resumeData.jobTitle]})
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Must select a job Title"
                });
        }
        console.log(resumeData)
    }

    console.log(resumeData)
    const renderForm = () => {
        switch (activeStep) {
            case 0:
                return (
                    <>
                        <Typography className='text-center p-4 fw-bold' variant='h4' component={"h1"}>Personal Details</Typography>
                        <TextField value={resumeData?.fullName} onChange={(e) => setResumeData({...resumeData, fullName:e.target.value})} className="w-100" id="standard-basic" label="Full Name" variant="standard" />
                            {/* since resume data is an object we need all the key value pairs, we set setResumData as an object and spread all the existing datas in the resume data to it, then sets key and assign its value */}
                        <TextField value={resumeData?.location} onChange={(e) => setResumeData({...resumeData, location:e.target.value})} className="w-100 mb-2" id="standard-basic" label="Location" variant="standard" />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Job Role</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                //   value={age}
                                label="Age"
                                onChange={(e) => setResumeData({...resumeData, jobTitle: e.target.value})}
            
                            //   onChange={handleChange}
                            >   
                                {
                                    jobJson ?.jobRoles?.map((eachJob) => (
                                        <MenuItem value={eachJob}>{eachJob}</MenuItem>
                                    ))
                                }
                                
                            
                            </Select>
                        </FormControl>
                    </>
                )
                break;
            case 1:
                return (
                    <>
                        <Typography className='text-center p-4 fw-bold' variant='h4' component={"h1"}>Contact Details</Typography>
                        <TextField value={resumeData?.email} onChange={(e) => setResumeData({...resumeData, email:e.target.value})} className="w-100" id="standard-basic" label="E-mail" variant="standard" />
                        <TextField value={resumeData?.contactNumber} onChange={(e) => setResumeData({...resumeData, contactNumber:e.target.value})} className="w-100" id="standard-basic" label="Contact Number" variant="standard" />
                        <TextField value={resumeData?.linkedin} onChange={(e) => setResumeData({...resumeData, linkedin:e.target.value})} className="w-100" id="standard-basic" label="Linkedin Link" variant="standard" />
                        <TextField value={resumeData?.github} onChange={(e) => setResumeData({...resumeData, github:e.target.value})} className="w-100" id="standard-basic" label="GitHub Link" variant="standard" />
                    </>
                )
            case 2:
                return (
                    <>
                        <Typography className='text-center p-4 fw-bold' variant='h4' component={"h1"}>Educational Details</Typography>
                        <TextField value={resumeData?.degree} onChange={(e) => setResumeData({...resumeData, degree:e.target.value})} className="w-100" id="standard-basic" label="Bachelor's Degree" variant="standard" />
                        <TextField value={resumeData?.college} onChange={(e) => setResumeData({...resumeData, college:e.target.value})} className="w-100" id="standard-basic" label="University / Collage Name" variant="standard" />
                        <TextField value={resumeData?.yearOfGrad} onChange={(e) => setResumeData({...resumeData, yearOfGrad:e.target.value})} className="w-100" id="standard-basic" label="Year of Graduation" variant="standard" />
                    </>
                )
            case 3:
                return (
                    <>
                        <Typography className='text-center p-4 fw-bold' variant='p' component={"h1"}>Our AI will generate Skills & Summary according to your job role. Click the Generate AI Skill & Summary button to Proceed.</Typography>
                    </>
                )

            default:
                break;
        }
    }
    
    return (
        <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography className='text-center p-4 fw-bold' variant='p' component={"h1"}>Finished</Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

                    {renderForm()}
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />
                        {
                        activeStep === steps.length - 1 ? <Button onClick={generateSkills}>Generate Skills and Summary</Button> : <Button onClick={handleNext}>Next</Button>    
                        }
                        
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
};

export default FormSteps;
