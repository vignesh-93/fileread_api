// module.exports = function(params) {
//     var app = params.app;
//     const userService = require("./service");

//     const XLSX = require("xlsx");
//     const workbook = XLSX.readFile("/home/css/Documents/lrs.xlsx")
//     const sheet_name_list = workbook.SheetNames;
   

//     var fs = require('fs');

//     // function readFile(fileName) {
//     //   return new Promise((resolve, reject) => {
//     //     fs.readFile(fileName, 'utf8', function (error, data) {
//     //       if (error) return reject(error);
    
//     //       console.log(fileName)
//     //       console.log(data)
    
//     //       resolve();
//     //     })
//     //   });
//     // }
    
//     app.post("/readfile", async (req, res) => {
     
     
//       fs.readFile('file1.txt', 'utf8', function(err, contents) {
//         console.log(contents);
//     });

//     //  var data=   await fs.readFile("file1.txt", "utf-8");
    
//     //  console.log(data)
      
//     });

  
//     app.post("/insertstatements", async (req, res) => {
//       "use strict";
//       try {

//         var excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list]);

//         console.log(excelData.length)

//         for(let i=0;i<excelData.length;i++)
//         {

//             var data={

//             "name":excelData[i].Name,
//             "verb":excelData[i].Verb,
//             "object":excelData[i].Object

//             }

//           var insertstatememt = await userService.insertstatement(data);

          

//         }

//         res.send({
//           "code":200,
//           "result":"SUCCESS",
//           "message":insertstatememt
//           })
        

      
       
//       } catch (err) {
  
//         res.send({
//           "code":400,
//           "result":"NOT SUCCESS",
//           "ERROR":err
//           })
//       }
//     });


//     app.post("/retailerlogin", async (req, res) => {
//       "use strict";
//       try {

//         var Retailerlogin= await userService.loginRetailer(req.body);

//         if(Retailerlogin.length>0)
//         {
        
//           res.send({
//           "code":200,
//           "result":"SUCCESS",
//           "message":Retailerlogin
//           })

//         }
//         else{

//           res.send({
//             "code":400,
//             "result":"NOT SUCCESS"
//             })

//         }
      
      
       
//       } catch (err) {
  
//         res.send({
//           "code":400,
//           "result":"NOT SUCCESS",
//           "ERROR":err
//           })
//       }
//     });
  
  
    
//   };
  