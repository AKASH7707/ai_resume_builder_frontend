import React from 'react'
import { Typography } from "@mui/material";
import resumeImg from "../assets/resume.png";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <section id='section1' className='parallax d-flex justify-content-center align-items-center text-center'>
            <div className='z-1'>
                    <Typography variant="h4" component={"p"} className="fw-bold text-light">
                    Designed To Get Hired. Your <br /> Skills, Your Story, Your Next{" "}
                    <br /> Job - All In One.
                    </Typography>
                    <Link to={'/generate'} className="btn btn-info mt-3">Make your RESUME with AI</Link>
            </div>
            <div id='coverDiv' className="p-5 bg-secondary fs-3 w-50 h-50 opacity-50 position-absolute"></div>

        </section>
        <section >
            <Typography className="text-center p-5 fw-bold" variant="h3" component={"h3"}>
          What's AI rBuilder
        </Typography>
        <div className="d-flex container justify-content-around align-items-center p-5">
          <div id="section2Content" >
            <Typography variant="p" component={"p"}>
              An AI rBuilder is a web application that helps users create
              professional resumes quickly and efficiently using artificial
              intelligence. Traditional resume creation can be time-consuming
              and difficult, especially for freshers who may not know the
              correct format or keywords required for modern recruitment
              systems. <br /><br />
              The system can suggest job-specific keywords, professional
              summaries, and skill recommendations to make the resume more
              effective and ATS (Applicant Tracking System) friendly. <br /><br />
              The main goal of the AI rBuilder is to simplify the resume
              creation process and help job seekers build professional,
              well-structured resumes in a few minutes. Users can edit content,
              preview their resume, and download it in formats such as PDF.{" "}
              <br /><br />
              This type of system is especially useful for students & fresh
              graduates, who want to create high-quality resumes that increase
              their chances of getting shortlisted for job interviews.
            </Typography>
          </div>
          <div id="section2ImgContainer" >
            <img src={resumeImg} alt="resume Image"  />
          </div>
        </div>
        </section>
        <section id='section3' className='parallax'>
        </section>
        <section className='container'>
            <Typography className="text-center p-5 fw-bold" variant="h3" component={"h3"}>
            Testimony
            </Typography>
            <div className="d-flex container justify-content-center align-items-center p-5">
                <div id="section4Content">
                    <Typography className='py-3 fs-3 fw-bold' variant="h5" component={"p"}>Trusted by professionals worldwide.</Typography>
                    <Typography  variant="p" component={"p"}>
                    At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results. <br /><br />
                    In fact, users who used LiveCareer reported getting hired an average of 48 days faster. <br /><br />
                    Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out<br /><br />
                    </Typography>
                </div>
                <div id="section4ImgContainer" className='d-grid justify-content-around'>
                    <div className='row gap-3'>
                        <img className='col-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYjRGgAD2uPP_2eGJ6gg_V4LJII_VAfYJFQ&s" alt="" />
                        <img className='col-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYjRGgAD2uPP_2eGJ6gg_V4LJII_VAfYJFQ&s" alt="" />
                        <img className='col-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYjRGgAD2uPP_2eGJ6gg_V4LJII_VAfYJFQ&s" alt="" />
                        <img className='col-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYjRGgAD2uPP_2eGJ6gg_V4LJII_VAfYJFQ&s" alt="" />
                    </div>
                    <div className='row gap-3'>
                        <img className='col-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYjRGgAD2uPP_2eGJ6gg_V4LJII_VAfYJFQ&s" alt="" />
                        <img className='col-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYjRGgAD2uPP_2eGJ6gg_V4LJII_VAfYJFQ&s" alt="" />
                        <img className='col-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYjRGgAD2uPP_2eGJ6gg_V4LJII_VAfYJFQ&s" alt="" />
                        <img className='col-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYjRGgAD2uPP_2eGJ6gg_V4LJII_VAfYJFQ&s" alt="" />
                    </div>
                    <div className='row gap-3'>
                        <img className='col-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYjRGgAD2uPP_2eGJ6gg_V4LJII_VAfYJFQ&s" alt="" />
                        <img className='col-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYjRGgAD2uPP_2eGJ6gg_V4LJII_VAfYJFQ&s" alt="" />
                        <img className='col-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYjRGgAD2uPP_2eGJ6gg_V4LJII_VAfYJFQ&s" alt="" />
                        <img className='col-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYjRGgAD2uPP_2eGJ6gg_V4LJII_VAfYJFQ&s" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home