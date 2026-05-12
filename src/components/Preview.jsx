import React from "react";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { FaFileDownload } from "react-icons/fa";
import Swal from "sweetalert2";
import { BiDownload, BiSave } from "react-icons/bi";
import html2canvas from "@html2canvas/html2canvas";
import jsPDF from "jspdf";
import { addResumeData } from "../services/allAPI";



const Preview = ({ resumeData, fromHistory }) => {
  const onSaveClick = async () => {
    try {
      let apiResponse = await addResumeData(resumeData);
      if (apiResponse.status == 201) {
        Swal.fire({
          title: "Saved!",
          text: "You clicked the button!",
          icon: "success",
        });
      }
    } catch (error) {
      console.log(error);
      alert("Failed to add data to server");
    }
  };

  const onDownloadClick = async () => {
    // select element to take screenshot
    const element = document.getElementById(resumeData?.id ? resumeData.id : 'paperEl');
    // console.log(element)
    // create a canvas of the element
    let canvas = await html2canvas(element, {scale: 2});
    // console.log(canvas)
    // convert the canvas to url
    let imgUrl = canvas.toDataURL('image/png');
    // create a pdf like a4 sheet with mm and portrait -p 
    let pdf = new jsPDF('p', 'mm', 'a4');
    let pdfWidth = pdf.internal.pageSize.getWidth();
    let pdfHeight = (canvas.height * pdfWidth)/canvas.width;
    pdf.addImage(imgUrl, 'pdf', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');

  }

  return (
    <>
      <Box className="text-end">
        {resumeData?.summary?.length > 0 && !fromHistory && (
          <Button onClick={onSaveClick} title="Save" className="fs-1">
            <BiSave />
          </Button>
          
        )}
        <Box>
          <Button onClick={onDownloadClick} title="Download" className="fs-1">
            <BiDownload />
          </Button>
        </Box>
      </Box>
      {/* check resumeid is present if yes then it is in history page else it is in preview page */}
      <Paper id={resumeData?.id ? resumeData.id : 'paperEl'} className="p-4 d-grid gap-2 m-2" elevation={2}>
        <Typography className="fw-bold" variant="h4" component={"h1"}>
          {resumeData?.fullName}
        </Typography>
        <Typography variant="h6" component={"h3"}>
          Phone : {resumeData?.contactNumber}
        </Typography>
        <Typography variant="h6" component={"h3"}>
          E-mail : {resumeData?.email}
        </Typography>
        <Typography variant="h6" component={"h3"}>
          LinkedIn : <a href="">{resumeData?.linkedin}</a>
        </Typography>
        <Typography variant="h6" component={"h3"}>
          Github : <a href="">{resumeData?.github}</a>
        </Typography>
        <Typography variant="h6" component={"h3"}>
          Location : {resumeData?.location}
        </Typography>
        <hr />
        <Typography className="fw-bold" variant="h5" component={"h2"}>
          Professional Summary
        </Typography>
        <Typography variant="p" component={"p"}>
          {resumeData?.summary}
        </Typography>
        <hr />
        <Typography className="fw-bold" variant="h5" component={"h2"}>
          Technical Skills
        </Typography>
        {resumeData?.skills?.length > 0 && (
          <Box>
            {resumeData?.skills?.map((eachSkill) => (
              <span className="me-3">{eachSkill}</span>
            ))}
          </Box>
        )}
        <hr />
        <Typography className="fw-bold" variant="h5" component={"h2"}>
          Education
        </Typography>
        <Typography variant="h6" component={"h3"}>
          Bachelor’s Degree in {resumeData?.degree}
        </Typography>
        <Typography variant="h6" component={"h3"}>
          University/College Name : {resumeData?.college}
        </Typography>
        <Typography variant="h6" component={"h3"}>
          Year of Graduation : {resumeData?.yearOfGrad}
        </Typography>
      </Paper>
    </>
  );
};

export default Preview;
