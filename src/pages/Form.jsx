import React, { useState } from 'react'
import FormSteps from '../components/FormSteps'
import Preview from '../components/Preview'

const Form = () => {
    const [resumeData, setResumeData] = useState({
        fullName : '',
        location : '',
        jobTitle : '',
        email : '',
        contactNumber : '',
        linkedin : '',
        github : '',
        degree : '',
        college : '',
        yearOfGrad : '',
        skills : [],
        summary : ''
    })
  return (
    <section className='container mt-4'>
        <div className="row">
            <div className="col-lg-6">
                <FormSteps setResumeData={setResumeData} resumeData={resumeData} />
            </div>
            <div className="col-lg-6">
                <Preview resumeData={resumeData} />
            </div>
        </div>
    </section>
  )
}

export default Form