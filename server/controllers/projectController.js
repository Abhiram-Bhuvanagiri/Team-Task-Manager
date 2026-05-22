const Project = require("../models/Project");

exports.createProject = async (req, res) => {

  try {

    const project = await Project.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.status(201).json(project);

  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getProjects = async (req, res) => {

  try {

    const projects = await Project.find()
      .populate("createdBy", "name email")
      .populate("teamMembers", "name email");

    res.json(projects);

  } catch (error) {
    res.status(500).json(error);
  }
};