/*********************************************************************************
   WEB700 – Assignment 2
   Name: Chathura Chamantha Galhena Mudiyanselage
   ID: 143531218 
   Date :6 JUNE 2022

********************************************************************************/
const Data = require("./modules/collegeData");

 

let collegeData = new Data();

collegeData.stat()
.then((data) => {
    collegeData.getAllStudents(data.students)
    .then(students => {
        console.log("Number of students : " + students.length )
    })
    .catch(error => {
        console.log(error)
    });

    collegeData.getCourses(data.courses)
    .then(courses => {
        console.log("Number of courses : " + courses.length)
    })
    .catch(error => {
        console.log(error)
    });

    collegeData.getTAs(data.students).then(tas => {
    
        console.log("Number of TAs : " + tas.length);
    }).catch(error => {
        console.log(error);
    });
})
.catch(error => {
    console.log(error)
});