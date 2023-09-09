//This file will have the logic for the idea resource

const ideas = require("../models/idea.model");

var count = 2; //current no. of ideas present

//Logic to get all ideas
//Need to write a method, which take req and res object and creates ideas and return the response

exports.getIdeas = (req, res) => {
  //Logic to get all idea
  res.status(200).send(ideas);
};
//Method to get Idea based on ID

exports.getIdeaBasedOnId = (req, res) => {
  const ideaId = req.params.id;
  const idea = ideas[ideaId];
  res.status(200).send(idea);
};

//Method to create new idea

exports.createIdea = (req, res) => {
  //I need to first read the JSON body into JSON object
  req.body.id = ++count; //We are adding a id field to the request body
  ideas[count] = req.body;

  res.status(201).send(ideas[count]);
};

//Method to update an existing idea

exports.updateIdea = (req, res) => {
  const ideaId = req.params.id;

  const idea = ideas[ideaId];

  if (idea) {
    ideas[ideaId] = req.body;
    res.status(200).send(ideas[ideaId]);
  } else {
    res.status(400).send({
      message: "Idea id passes is not valid",
    });
  }
};

//Method to delete an idea

exports.deleteIdea = (req, res) => {
  const ideaId = req.params.id;

  if (ideas[ideaId]) {
    delete ideas[ideaId];
    res.status(200).send({
      message: "Successfully deleted",
    });
  } else {
    res.status(400).send({
      message: "Idea id passed is not valid",
    });
  }
};
