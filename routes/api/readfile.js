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
      fs.readFile('/Users/HP/Documents/fileread_api/Documents/'+req.query.name, 'utf8', function (err, contents) {
        console.log(contents);
        res.send({
          "code" : 200,
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
      fs.writeFile('/Users/HP/Documents/fileread_api/Documents/'+req.body.filename, req.body.content, function (err, contents) {
        // console.log(req.body.filename,"111111111111111111")
        // console.log(req.body.content,"$$$$$$$$$$$$$$$$")
        if (err) throw err;
        res.send({
          "code" : 200,
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
    var newarr = [];
    try {
      fs.readdir("/Users/HP/Documents/fileread_api/Documents",function(err, files){
        if (err) {
        return console.error(err);
        }
        for(var i = 0;i<files.length;i++){
          // console.log(files[i],"##")
          var trim = files[i].replace(/\.[^/.]+$/, "")
          newarr.push(trim)
        }
        // console.log(newarr,"####")
        res.send({
          "code" : 200,
          "files": newarr
        })
        });
    } catch{
      res.send({
        "code" : 400,
        "message": "error"
      })
    }
  });

} 