const Company = require("../models/companyModel")

const createCompanyProfile = async(req,res)=>{
    try {
        const company = new Company(req.body)
        await company.save()
        return res.status(201).json({
            "status": "success",
            "code": 201,
            "message": "Company Profile created successfully",
            "data": company
        })
    } catch (error) {
        return res.status(400).json({
            "status": "error",
            "code": 400,
            "message": error.message
        })
    }
}

const getCompanyProfile = async(req,res)=>{
    try {
        const id = req.params.id
        const company = await Company.findById(id)
        return res.status(200).json({
            "status": "success",
            "code": 200,
            "message": "Company Profile fetched successfully",
            "data": company
        })
    } catch (error) {
        return res.status(400).json({
            "status": "error",
            "code": 400,
            "message": error.message
        })
    }
}


module.exports={
    createCompanyProfile,
    getCompanyProfile
}