const express = require('express');
const router = express.Router();
// const util = require('util');
const fs = require('fs');
// const path = require('path');
// const folder = require('../../../readfile')

module.exports = function (params) {
  var app = params.app;

  app.get("/readfile", async (req, res) => {
    try {
      fs.readFile('/Users/HP/Documents/readfile/Documents/'+req.query.name, 'utf8', function (err, contents) {
        console.log(contents);
        res.send({
          "content": contents
        })
      });
    } catch{
      res.send({
        "message": "error"
      })
    }
  });

  app.post("/writefile", async (req, res) => {
    try {
      fs.writeFile('/Users/HP/Documents/readfile/Documents/'+req.body.filename, req.body.content, function (err, contents) {
        // console.log(req.body.filename,"111111111111111111")
        // console.log(req.body.content,"$$$$$$$$$$$$$$$$")
        if (err) throw err;
        res.send({
          "status": "updated"
        })
      });
    } catch{
      res.send({
        "message": "error"
      })
    }
  });

  app.get("/showfile", async (req, res) => {
    try {
      fs.readdir("/Users/HP/Documents/readfile/Documents",function(err, files){
        if (err) {
        return console.error(err);
        }
        res.send({
          "Files": files
        })
        });
    } catch{
      res.send({
        "message": "error"
      })
    }
  });

} 