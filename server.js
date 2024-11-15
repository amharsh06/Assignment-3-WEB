/********************************************************************************
*  WEB322 – Assignment 04
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Harsh Hasmukhbhai Kathrotiya
*  Student ID: 144225232
*  Date: 10-15-2024
*
********************************************************************************/
const express = require("express");
const path = require("path");
const app = express();


app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public")));

// Mock Data
const projects = [
    {
        id: 1,
        title: "Project Alpha",
        sector: "Transportation",
        summary_short: "A short summary of Project Alpha.",
        feature_img_url: "https://via.placeholder.com/150",
        intro_short: "Introduction to Project Alpha.",
        impact: "Impact details of Project Alpha.",
        original_source_url: "https://example.com/alpha",
    },
    {
        id: 2,
        title: "Project Beta",
        sector: "Industry",
        summary_short: "A short summary of Project Beta.",
        feature_img_url: "https://via.placeholder.com/150",
        intro_short: "Introduction to Project Beta.",
        impact: "Impact details of Project Beta.",
        original_source_url: "https://example.com/beta",
    },
    {
        id: 3,
        title: "Project Gamma",
        sector: "Technology",
        summary_short: "A short summary of Project Gamma.",
        feature_img_url: "https://via.placeholder.com/150",
        intro_short: "Introduction to Project Gamma.",
        impact: "Impact details of Project Gamma.",
        original_source_url: "https://example.com/gamma",
    },
    {
        id: 4,
        title: "Project Delta",
        sector: "Healthcare",
        summary_short: "A short summary of Project Delta.",
        feature_img_url: "https://via.placeholder.com/150",
        intro_short: "Introduction to Project Delta.",
        impact: "Impact details of Project Delta.",
        original_source_url: "https://example.com/delta",
    },
    {
        id: 5,
        title: "Project Epsilon",
        sector: "Energy",
        summary_short: "A short summary of Project Epsilon.",
        feature_img_url: "https://via.placeholder.com/150",
        intro_short: "Introduction to Project Epsilon.",
        impact: "Impact details of Project Epsilon.",
        original_source_url: "https://example.com/epsilon",
    },
    {
        id: 6,
        title: "Project Zeta",
        sector: "Education",
        summary_short: "A short summary of Project Zeta.",
        feature_img_url: "https://via.placeholder.com/150",
        intro_short: "Introduction to Project Zeta.",
        impact: "Impact details of Project Zeta.",
        original_source_url: "https://example.com/zeta",
    },
    {
        id: 7,
        title: "Project Eta",
        sector: "Finance",
        summary_short: "A short summary of Project Eta.",
        feature_img_url: "https://via.placeholder.com/150",
        intro_short: "Introduction to Project Eta.",
        impact: "Impact details of Project Eta.",
        original_source_url: "https://example.com/eta",
    },
    {
        id: 8,
        title: "Project Theta",
        sector: "Transportation",
        summary_short: "A short summary of Project Theta.",
        feature_img_url: "https://via.placeholder.com/150",
        intro_short: "Introduction to Project Theta.",
        impact: "Impact details of Project Theta.",
        original_source_url: "https://example.com/theta",
    },
    {
        id: 9,
        title: "Project Iota",
        sector: "Healthcare",
        summary_short: "A short summary of Project Iota.",
        feature_img_url: "https://via.placeholder.com/150",
        intro_short: "Introduction to Project Iota.",
        impact: "Impact details of Project Iota.",
        original_source_url: "https://example.com/iota",
    },
    {
        id: 10,
        title: "Project Kappa",
        sector: "Technology",
        summary_short: "A short summary of Project Kappa.",
        feature_img_url: "https://via.placeholder.com/150",
        intro_short: "Introduction to Project Kappa.",
        impact: "Impact details of Project Kappa.",
        original_source_url: "https://example.com/kappa",
    },
];



app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/solutions/projects", (req, res) => {
    const sector = req.query.sector;
    const filteredProjects = sector
        ? projects.filter((proj) => proj.sector.toLowerCase() === sector.toLowerCase())
        : projects;

    if (!filteredProjects.length) {
        return res.status(404).render("404", { message: "No projects found for this sector." });
    }

    res.render("projects", { projects: filteredProjects });
});

app.get("/solutions/projects/:id", (req, res) => {
    const project = projects.find((proj) => proj.id === parseInt(req.params.id));
    if (!project) {
        return res.status(404).render("404", { message: "Project not found." });
    }

    res.render("project", { project });
});


app.use((req, res) => {
    res.status(404).render("404", { message: "Page not found." });
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));