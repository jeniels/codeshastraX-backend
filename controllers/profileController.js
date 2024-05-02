const User = require("../models/userModel")

const createUserProfile = async(req,res)=>{
    try {
        const user = new User(req.body)
        await user.save()
        return res.status(201).json({
            "status": "success",
            "code": 201,
            "message": "User Profile created successfully",
            "data": user
        })
    } catch (error) {
        return res.status(400).json({
            "status": "error",
            "code": 400,
            "message": error.message
        })
    }
}

const getUserProfile = async(req,res)=>{
    try {
        const id = req.params.id
        const user = await User.findById(id)
        return res.status(200).json({
            "status": "success",
            "code": 200,
            "message": "User Profile fetched successfully",
            "data": user
        })
    } catch (error) {
        return res.status(400).json({
            "status": "error",
            "code": 400,
            "message": error.message
        })
    }
}


const insertUsers = async(req,res)=>{
    try {
        const data=[
            {
                first_name: "Alice",
                last_name: "Johnson",
                email: "alice.johnson@example.com",
                number: "1234567890",
                portfolio: "https://example.com/alice_portfolio",
                github: "https://github.com/alicejohnson",
                linkedin: "https://www.linkedin.com/in/alicejohnson",
                twitter: "https://twitter.com/alicejohnson",
                college_name: "XYZ College",
                clg_start_year: 2017,
                clg_end_year: 2021,
                degree: "Bachelor's",
                schoole_name: "PQR High School",
                school_start_year: 2013,
                school_end_year: 2017,
                school_board: "State Board",
                skills: ["Python", "Django", "JavaScript", "React"],
                projects: [
                  {
                    project_name: "E-commerce Website",
                    project_description: "An online platform for buying and selling products.",
                    project_link: "https://example.com/e-commerce"
                  },
                  {
                    project_name: "Portfolio Website",
                    project_description: "Personal portfolio showcasing projects and skills.",
                    project_link: "https://example.com/portfolio"
                  }
                ],
                interests: ["Web Development", "Data Science", "Artificial Intelligence"],
                experiences: [
                  {
                    company_name: "Tech Solutions Ltd.",
                    position: "Software Developer",
                    duration: "Jan 2022 - Present",
                    description: "Developing web applications and contributing to projects."
                  }
                ]
              },
              {
                first_name: "Rahul",
                last_name: "Gupta",
                email: "rahul.gupta@example.com",
                number: "1234567890",
                portfolio: "https://example.com/rahul_portfolio",
                github: "https://github.com/rahulgupta",
                linkedin: "https://www.linkedin.com/in/rahulgupta",
                twitter: "https://twitter.com/rahulgupta",
                college_name: "ABC University",
                clg_start_year: 2016,
                clg_end_year: 2020,
                degree: "Bachelor's",
                schoole_name: "PQR Public School",
                school_start_year: 2010,
                school_end_year: 2016,
                school_board: "CBSE",
                skills: ["Java", "Spring Boot", "React", "MySQL"],
                projects: [
                  {
                    project_name: "Inventory Management System",
                    project_description: "A system to manage inventory and stock.",
                    project_link: "https://example.com/inventory_system"
                  },
                  {
                    project_name: "E-learning Platform",
                    project_description: "An online platform for education and courses.",
                    project_link: "https://example.com/e-learning"
                  }
                ],
                interests: ["Software Development", "Machine Learning", "Blockchain"],
                experiences: [
                  {
                    company_name: "Tech Innovators Pvt. Ltd.",
                    position: "Software Engineer",
                    duration: "Feb 2021 - Present",
                    description: "Developing scalable solutions and working on innovative projects."
                  }
                ]
              },
              {
                first_name: "Priya",
                last_name: "Patel",
                email: "priya.patel@example.com",
                number: "1234567890",
                portfolio: "https://example.com/priya_portfolio",
                github: "https://github.com/priyapatel",
                linkedin: "https://www.linkedin.com/in/priyapatel",
                twitter: "https://twitter.com/priyapatel",
                college_name: "LMN College",
                clg_start_year: 2015,
                clg_end_year: 2019,
                degree: "Bachelor's",
                schoole_name: "QRS Higher Secondary School",
                school_start_year: 2009,
                school_end_year: 2015,
                school_board: "State Board",
                skills: ["C++", "Python", "Django", "Angular"],
                projects: [
                  {
                    project_name: "Social Networking App",
                    project_description: "A platform for connecting people and sharing updates.",
                    project_link: "https://example.com/social_app"
                  },
                  {
                    project_name: "Online Shopping Website",
                    project_description: "An e-commerce platform for buying and selling products.",
                    project_link: "https://example.com/online_shop"
                  }
                ],
                interests: ["Web Development", "Mobile App Development", "Artificial Intelligence"],
                experiences: [
                  {
                    company_name: "Innovate Solutions Inc.",
                    position: "Software Developer",
                    duration: "Mar 2020 - Present",
                    description: "Working on diverse projects and implementing innovative solutions."
                  }
                ]
              },
              {
                first_name: "Aarav",
                last_name: "Sharma",
                email: "aarav.sharma@example.com",
                number: "1234567890",
                portfolio: "https://example.com/aarav_portfolio",
                github: "https://github.com/aaravsharma",
                linkedin: "https://www.linkedin.com/in/aaravsharma",
                twitter: "https://twitter.com/aaravsharma",
                college_name: "EFG University",
                clg_start_year: 2018,
                clg_end_year: 2022,
                degree: "Bachelor's",
                schoole_name: "STU Public School",
                school_start_year: 2014,
                school_end_year: 2018,
                school_board: "CBSE",
                skills: ["JavaScript", "Node.js", "React", "MongoDB"],
                projects: [
                  {
                    project_name: "Online Chat Application",
                    project_description: "Real-time chat application for communication.",
                    project_link: "https://example.com/chat_app"
                  },
                  {
                    project_name: "Portfolio Website",
                    project_description: "Personal portfolio showcasing projects and skills.",
                    project_link: "https://example.com/portfolio"
                  }
                ],
                interests: ["Web Development", "Data Science", "Machine Learning"],
                experiences: [
                  {
                    company_name: "Tech Solutions Pvt. Ltd.",
                    position: "Software Engineer",
                    duration: "Jan 2023 - Present",
                    description: "Developing web applications and contributing to projects."
                  }
                ]
              },
              {
                first_name: "Neha",
                last_name: "Gupta",
                email: "neha.gupta@example.com",
                number: "1234567890",
                portfolio: "https://example.com/neha_portfolio",
                github: "https://github.com/neha-gupta",
                linkedin: "https://www.linkedin.com/in/neha-gupta",
                twitter: "https://twitter.com/neha_gupta",
                college_name: "HIJ College",
                clg_start_year: 2017,
                clg_end_year: 2021,
                degree: "Bachelor's",
                schoole_name: "UVW High School",
                school_start_year: 2013,
                school_end_year: 2017,
                school_board: "State Board",
                skills: ["Java", "Spring Boot", "Angular", "MySQL"],
                projects: [
                  {
                    project_name: "Expense Tracker App",
                    project_description: "An application to track and manage expenses.",
                    project_link: "https://example.com/expense_tracker"
                  },
                  {
                    project_name: "Portfolio Website",
                    project_description: "Personal portfolio showcasing projects and skills.",
                    project_link: "https://example.com/portfolio"
                  }
                ],
                interests: ["Software Development", "Web Development", "Blockchain"],
                experiences: [
                  {
                    company_name: "Tech Innovations Inc.",
                    position: "Software Developer",
                    duration: "Feb 2022 - Present",
                    description: "Developing scalable solutions and contributing to projects."
                  }
                ]
              },
              {
                first_name: "Aarohi",
                last_name: "Patil",
                email: "aarohi.patil@example.com",
                number: "1234567890",
                portfolio: "https://example.com/aarohi_portfolio",
                github: "https://github.com/aarohipatil",
                linkedin: "https://www.linkedin.com/in/aarohipatil",
                twitter: "https://twitter.com/aarohipatil",
                college_name: "LMN University",
                clg_start_year: 2016,
                clg_end_year: 2020,
                degree: "Bachelor's",
                schoole_name: "QRS Higher Secondary School",
                school_start_year: 2010,
                school_end_year: 2016,
                school_board: "State Board",
                skills: ["C++", "Python", "Django", "React"],
                projects: [
                  {
                    project_name: "Social Media Analysis Tool",
                    project_description: "A tool to analyze and visualize social media data.",
                    project_link: "https://example.com/social_media_analysis"
                  },
                  {
                    project_name: "Portfolio Website",
                    project_description: "Personal portfolio showcasing projects and skills.",
                    project_link: "https://example.com/portfolio"
                  }
                ],
                interests: ["Web Development", "Data Science", "Artificial Intelligence"],
                experiences: [
                  {
                    company_name: "Innovative Solutions Ltd.",
                    position: "Software Engineer",
                    duration: "Mar 2021 - Present",
                    description: "Developing innovative solutions and collaborating on projects."
                  }
                ]
              }
        ]
        const users = await User.insertMany(data)
        return res.status(201).json({
            "status": "success",
            "code": 201,
            "message": "Users created successfully",
            "data": users
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
    createUserProfile,
    getUserProfile,
    insertUsers
}