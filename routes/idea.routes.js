//This file will be used to define routes for the idea resource
//Define a route for getting all the ideas

const ideaController = require("../controllers/idea.controller");

module.exports = (app) => {
  //GET 127.0.01.8080/ideaApp/api/v1/ideas
  app.get("/ideaApp/api/v1/ideas", ideaController.getIdeas);

  //GET BY ID 127.0.01.8080/ideaApp/api/v1/ideas/2
  app.get("/ideaApp/api/v1/ideas/:id", ideaController.getIdeaBasedOnId);

  //POST 127.0.01.8080/ideaApp/api/v1/ideas/2
  app.post("/ideaApp/api/v1/ideas", ideaController.createIdea);

  //PUT 127.0.01.8080/ideaApp/api/v1/ideas/2
  app.put("/ideaApp/api/v1/ideas/:id", ideaController.updateIdea);

  //DELETE 127.0.01.8080/ideaApp/api/v1/ideas/2
  app.delete("/ideaApp/api/v1/ideas/:id", ideaController.deleteIdea);
};
