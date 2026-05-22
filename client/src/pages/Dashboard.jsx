import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

function Dashboard() {

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  const [tasks, setTasks] = useState([]);

  const [projectData, setProjectData] = useState({
    title: "",
    description: ""
  });

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    status: "pending",
    dueDate: "",
    project: ""
  });

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token
    }
  };

  const fetchProjects = async () => {

    try {

      const res = await axios.get(
        "/projects",
        config
      );

      setProjects(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const fetchTasks = async () => {

    try {

      const res = await axios.get(
        "/tasks",
        config
      );

      setTasks(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }

    fetchProjects();
    fetchTasks();

  }, []);

  const handleProjectChange = (e) => {

    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value
    });
  };

  const handleTaskChange = (e) => {

    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value
    });
  };

  const createProject = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "/projects",
        projectData,
        config
      );

      fetchProjects();

      setProjectData({
        title: "",
        description: ""
      });

    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "/tasks",
        taskData,
        config
      );

      fetchTasks();

      setTaskData({
        title: "",
        description: "",
        status: "pending",
        dueDate: "",
        project: ""
      });

    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {

    try {

      await axios.put(
        `/tasks/${id}`,
        { status },
        config
      );

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="dashboard">

      <div className="topbar">

        <h1>Team Task Manager 🚀</h1>

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        >
          Logout
        </button>

      </div>

      <div className="forms">

        <form onSubmit={createProject}>

          <h2>Create Project</h2>

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={projectData.title}
            onChange={handleProjectChange}
          />

          <input
            type="text"
            name="description"
            placeholder="Project Description"
            value={projectData.description}
            onChange={handleProjectChange}
          />

          <button type="submit">
            Create Project
          </button>

        </form>

        <form onSubmit={createTask}>

          <h2>Create Task</h2>

          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={taskData.title}
            onChange={handleTaskChange}
          />

          <input
            type="text"
            name="description"
            placeholder="Task Description"
            value={taskData.description}
            onChange={handleTaskChange}
          />

          <input
            type="date"
            name="dueDate"
            value={taskData.dueDate}
            onChange={handleTaskChange}
          />

          <select
            name="project"
            value={taskData.project}
            onChange={handleTaskChange}
          >

            <option value="">
              Select Project
            </option>

            {projects.map((project) => (

              <option
                key={project._id}
                value={project._id}
              >
                {project.title}
              </option>

            ))}

          </select>

          <button type="submit">
            Create Task
          </button>

        </form>

      </div>

      <div className="section">

        <h2>Projects</h2>

        {projects.length === 0 ? (

          <p>No Projects Yet</p>

        ) : (

          projects.map((project) => (

            <div
              key={project._id}
              className="card"
            >

              <h3>{project.title}</h3>

              <p>{project.description}</p>

            </div>

          ))

        )}

      </div>

      <div className="section">

        <h2>Tasks</h2>

        {tasks.length === 0 ? (

          <p>No Tasks Yet</p>

        ) : (

          tasks.map((task) => (

            <div
              key={task._id}
              className="card"
            >

              <h3>{task.title}</h3>

              <p>{task.description}</p>

              <p>
                Status:
                {" "}
                <strong>{task.status}</strong>
              </p>

              <button
                onClick={() =>
                  updateStatus(
                    task._id,
                    "completed"
                  )
                }
              >
                Mark Completed
              </button>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Dashboard;