// const fetch = require("node-fetch");


// const insertstatement = async data => {
//     try {

//       url="http://13.84.132.120:8081/data/xAPI/statements";

//         var data=await getData(data)

//         const response = await fetch(url, {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 "content-type": "application/json",
//                 "Authorization": "Basic NWQ0ZjkwMDc0ZDAyMTUwOTdlMzdlZDNiMmJlZGQ5NDExZmU2NjJmMToyZjVlMTM3ZDc1Yjc1OTVjYzk5MDQyNTIzODI1ODA5YmI5YWFlZTc2",
//                 "X-Experience-API-Version":"1.0.6"
//               }
//         });
//         const json = await response.json();
//         return json;
//     } catch (error) {
//         return error;
//     }
// };

// var getData = async(data)=>
// {

// console.log("test5",data)

//   var data = {
//             "actor": {
//             "name": data.name,
//             "account": {
//                       "homePage": "http://www.cintana.com",
//                       "name": data.name
//                       }
//             },
//             "verb": {
//             "id": "http://cintana.com.com/verb/"+data.verb,
//                     "display": {
//                     "en": data.verb
//                     }
//             },
//             "object": {
//             "id": "http://www.cintana.com",
//             "definition": {
//                           "type": "http://activitystrea.ms/schema/1.0/"+data.object,
//                           "name": {
//                           "en": data.object
//                           }
//                      }
//            },
//     // "context": {
//     // "platform": "cintana Platform",
//     // "language": "en",
//     // "extensions": {
//     // "http://www.cintana.com/transition_tool_version": "1.0.0"
//     // }
//     // }
//     }
// return data

// }

// module.exports = {
//   insertstatement,

// };
