require("dotenv").config();
const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const dailyConsRoute = require("./routes/dailyConsumptionRoute");
const delayRoute = require("./routes/delayRoute");
const bundlesRoute=require("./routes/bundlesRoute");
const standsRoute=require("./routes/standsRoute");
const summaryRoute=require("./routes/summaryRoute");

const ApiError = require("./utils/apiError");
const globalError = require("./middleWares/errorMiddleware");

const app = express();
const PORT = process.env.PORT || 3000;

//parses incoming JSON data from the request body (post/put requests).
app.use(express.json());
//parse URL-encoded data from the request body.
// URL-encoded data is commonly used when submitting HTML forms via POST requests.
//The extended: true option allows for complex objects and arrays to be included in the form data.
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Swagger definition
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node.js MSSQL API with Swagger",
      version: "1.0.0",
      description: "API to manage power consumption data",
    },
    servers: [
      {
        url: `http://${process.env.DB_BASE_URL}:${PORT}/api`,
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Serve Swagger UI
app.use("/swapi", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/api/dailyCons", dailyConsRoute);
app.use("/api/delay", delayRoute);
app.use("/api/stands", standsRoute);
app.use("/api/bundles", bundlesRoute);
app.use("/api/summary", summaryRoute);



//If the user send wrong API then make this message and send to error handleing
app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this route : ${req.originalUrl}`, 400)); //pass error to next Error handleing
});

//Global Error Handleing for express
app.use(globalError);

// Start the server [I put app.listen in variable called server to can cose the server or listen when there is error out of express]
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Error handling to error out of express well make events to listen to it and callback error to can handle it
process.on("unhandledRejection", (err) => {
  console.error(`unhandle rejection error : ${err.name} | ${err.message}`);

  //if the server has request that already make then close it first then exit application
  server.close(() => {
    console.log(`Application Shutdown..........`);
    process.exit(1);
  });
});
