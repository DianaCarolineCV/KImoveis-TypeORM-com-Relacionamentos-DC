import "reflect-metadata"
import express from "express"
import "express-async-errors"
import handleError from "./errors/handleError"
import userRoutes from "./routes/users/users.routes"
import sessionRoutes from "./routes/sessions/session.routes"
import categoriesRoutes from "./routes/categories/categories.routes"
import propertiesRoutes from "./routes/properties/properties.routes"
import schedulesRoutes from "./routes/schedules/schedules.routes"

const app = express()

app.use(express.json())

app.use("/users", userRoutes)
app.use("/login", sessionRoutes)
app.use("/categories", categoriesRoutes);
app.use("/properties", propertiesRoutes);
app.use("/schedules", schedulesRoutes);
app.use(handleError)

export default app