import Project from '../models/projects.js';

export const getProjects = async (req, res) => {
    try {
    const projects = await Project.find();
    res.status(200).json(projects);
    } catch (error) {
    res.status(500).json({ message: "Error al obtener los proyectos" });
    }
};

export const createProject = async (req, res) => {
    try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
    } catch (error) {
    res.status(500).json({ message: "Error al crear el proyecto" });
    }
};