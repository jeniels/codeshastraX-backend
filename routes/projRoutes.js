const express = require('express');
const router = express.Router();

//////////////////////////////// Profile Controller //////////////////////////////////

const {createUserProfile,getUserProfile,insertUsers} = require("../controllers/profileController")
router.post('/user/profile/create',createUserProfile)
router.get('/user/profile/:id',getUserProfile)
router.post('/users/insert',insertUsers)







//////////////////////////////// Company profile Controller //////////////////////////////////
const {createCompanyProfile,getCompanyProfile} = require("../controllers/companyProfileController")
router.post('/company/profile/create',createCompanyProfile)
router.get('/company/profile/:id',getCompanyProfile)





//////////////////////////////// Job Controller //////////////////////////////////
const {createJob,getAllJobs,getCompanyJobs,userApplyJob,updateJobStatus,getJobApplicants,getSingleJob} = require("../controllers/jobController")
router.post('/job/create',createJob)
router.get('/jobs/all',getAllJobs)
router.get('/jobs/company/:name',getCompanyJobs)
router.post('/user/job/apply',userApplyJob)
router.put('/job/:id/status/update',updateJobStatus)
router.get('/job/:id/applicants',getJobApplicants)
router.get('/job/:id',getSingleJob)







module.exports = router;