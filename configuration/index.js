//console.log('confijjljlkjkl ', process.env.NODE_ENV = "development")
module.exports = function (config) {
    console.log(config)
    process.env.NODE_ENV = "development";// "production"; // 
    var svcURL = "http://localhost:" 
    var logFolder = "/app/logs";

    var clientDB = "mongodb://localhost:27017/hhhhhhhhhhhhhhhhhhhhhhhhhhhh"
    if(clientDB){
       // console.log('conneced')
    }else{
       /// console.log('not connected')
    }
    var customURL = "mongodb://localhost:27017"; 
    return {
        configuration: {
            clientDataDB: clientDB,//"mongodb://localhost:27017/",
            queryURL: queryURL,
            queueURL: svcURL + "2033",//"http://localhost:3033",//
            logInformation: true,
            logError: true,
            logFile: logFolder + "/info",
            errLogFile: logFolder + "/error"
        }
    };
}
