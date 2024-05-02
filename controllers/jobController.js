const Job = require("../models/jobModel")
const User = require("../models/userModel")
const Company = require("../models/companyModel")
const ApplyJob = require("../models/applyJobModel")

const createJob = async(req,res)=>{
    try {
        const job = new Job(req.body)
        await job.save()
        return res.status(201).json({
            "status": "success",
            "code": 201,
            "message": "Job created successfully",
            "data": job
        })
    } catch (error) {
        return res.status(400).json({
            "status": "error",
            "code": 400,
            "message": error.message
        })
    }
}

const getAllJobs = async(req,res)=>{
    try{
        const jobs = await Job.find().populate('postedBy','image name')
        return res.status(200).json({
            "status": "success",
            "code": 200,
            "message": "Jobs fetched successfully",
            "data": jobs
        })
    }
    catch(error){
        return res.status(500).json({
            "status": "error",
            "code": 500,
            "message": error.message
        })
    }
}


const getCompanyJobs = async(req,res)=>{
    try{
        const companyName = req.params.name
        const company = await Company.findOne({name: companyName})
        if(!company){
            return res.status(404).json({
                "status": "error",
                "code": 404,
                "message": "Company not found"
            })
        }
        const jobs = await Job.find({postedBy:company._id})
        if(!jobs){
            return res.status(404).json({
                "status": "error",
                "code": 404,
                "message": "Jobs not found"
            })
        }
        return res.status(200).json({
            "status": "success",
            "code": 200,
            "message": "Jobs fetched successfully",
            "data": jobs
        })
    }
    catch(error){
        return res.status(500).json({
            "status": "error",
            "code": 500,
            "message": error.message
        })
}
}

const getSingleJob = async(req,res)=>{
    try{
        const jobId = req.params.id
        // const userId = req.params.userId
        // const appyJobPromise = ApplyJob.findOne({user_id: userId,job_id: jobId})
        const job = await Job.findById(jobId).populate('postedBy')
        // const [job,applyJob] = await Promise.all([jobPromise,appyJobPromise])

        if(!job){
            return res.status(404).json({
                "status": "error",
                "code": 404,
                "message": "Job not found"
            })
        }
        // if(applyJob){
        //     const status = applyJob.status
        //     return res.status(200).json({
        //         "status": "success",
        //         "code": 200,
        //         "message": "Job fetched successfully",
        //         "data": job,
        //         "applied": true,
        //         "status": status
        //     })
        // }
        return res.status(200).json({
            "status": "success",
            "code": 200,
            "message": "Job fetched successfully",
            "data": job,
            // "applied": false
        })
    }catch(error){
        return res.status(500).json({
            "status": "error",
            "code": 500,
            "message": error.message
        })
    }

}

const userApplyJob = async(req,res)=>{
    try{
        const userId = req.body.userId
        const jobId = req.body.jobId

        const userPromise = User.findById(userId)

        const jobPromise = Job.findById(jobId)

        const [user,job] = await Promise.all([userPromise,jobPromise])

        if(!user){
            return res.status(404).json({
                "status": "error",
                "code": 404,
                "message": "User not found"
            })
        }
        if(!job){
            return res.status(404).json({
                "status": "error",
                "code": 404,
                "message": "Job not found"
            })
        }

        const applyJob = new ApplyJob({
            job_id:jobId,
            user_id:userId
        })

        await applyJob.save()

        return res.status(200).json({
            "status": "success",
            "code": 200,
            "message": "Applied for job successfully",
            "data": applyJob
        })
    }catch(error){
        return res.status(500).json({
            "status": "error",
            "code": 500,
            "message": error.message
        })
    }
}

const updateJobStatus = async(req,res)=>{
    try{
        const jobId = req.params.id
        const userId = req.body.userId
        const status = req.body.status

        const jobStatus = await ApplyJob.findOne({job_id:jobId,user_id:userId})

        if(!jobStatus){
            return res.status(404).json({
                "status": "error",
                "code": 404,
                "message": "Job not found"
            })
        }

        jobStatus.status = status

        await jobStatus.save()

        return res.status(200).json({
            "status": "success",
            "code": 200,
            "message": "Job status updated successfully",
            "data": jobStatus
        })
    }catch(error){
        return res.status(500).json({
            "status": "error",
            "code": 500,
            "message": error.message
        })
    }
}

const getJobApplicants = async(req,res)=>{
    try{
        const jobId = req.params.id
        const applicants = await ApplyJob.find({job_id:jobId}).populate('user_id')
        if(!applicants){
            return res.status(404).json({
                "status": "error",
                "code": 404,
                "message": "Applicants not found"
            })
        }
        return res.status(200).json({
            "status": "success",
            "code": 200,
            "message": "Applicants fetched successfully",
            "data": applicants
        })
    }catch(error){
        return res.status(500).json({
            "status": "error",
            "code": 500,
            "message": error.message
        })
    }
}


module.exports = {
    createJob,
    getAllJobs,
    getCompanyJobs,
    userApplyJob,
    updateJobStatus,
    getJobApplicants,
    getSingleJob
}