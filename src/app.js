import express from "express";
import gestorRoutes from "./routes/gestor.route.js";
import projectRoutes from "./routes/project.route.js";
import gestorProjectRoutes from "./routes/gestorProject.route.js";

const app = express();
const PORT = process.env.PORT;
//Middleware
app.use(express.json());
app.use("/gestor", gestorRoutes);
app.use("/project", projectRoutes);
app.use("/gestorProject", gestorProjectRoutes);

app.listen(PORT, () => {
  console.log("server initialized");
});
