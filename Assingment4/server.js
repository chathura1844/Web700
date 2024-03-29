

/*********************************************************************************
*  WEB700 – Assignment 03 
*  Name: Chathura Galhena          Student ID: 143531218 Date: 19 June 2022
********************************************************************************/ 


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
const path = require("path")
var app = express();

var collegedata = require('./Modules/collegeData')


// Add middleware for static contents
app.use(express.static('Views'))
app.use(express.static('Modules'))
app.use(express.static('css'))

// Get request for student details
app.get('/students', (req, res) => {

    if( req.query.course &&  req.query.course !== undefined){
        let courseFromParams = req.query.course;
        console.log(courseFromParams);

        collegedata.initialize().then(data => {
            collegedata.getStudentsByCourse(courseFromParams).then(course => {
                res.send(course)
                console.log("courses data retrieved")
            }).catch()
           
        }).catch(err => {
            console.log(err)
        })
    } else {
        collegedata.initialize().then(data => {
            collegedata.getAllStudents().then(students => {
            res.send(students)
            console.log("students suceeded")
            }).catch()
        }).catch(err => {
            err = {
                message : "no results"}
            res.send()
        })
    }
})

app.get("/tas", (req, res) => {
    collegedata.initialize().then(data => {
        collegedata.getTAs().then(tas => {
        res.send(tas)
        console.log("tas suceeded" )
        }).catch()
    }).catch(err => {
        err = {
            message : "no results"}
        res.send()
    })
})

app.get("/courses", (req, res) => {
    console.log("Entering courses")
    collegedata.initialize().then(data => {
        collegedata.getCourses().then(courses => {
        res.send(courses)
        console.log("courses suceeded" )
        }).catch()
    }).catch(err => {
        err = {
            message : "no results"}
        res.send()
    })
})

app.get("/student/:studentnum", (req, res) => {
    console.log("Entering student num")
    let studentnumber = req.params.studentnum
        collegedata.initialize().then(data => {
            collegedata.getStudentByNum(studentnumber).then(students => {
                res.send(students)
                console.log("student data retrieved")
            }).catch(err => {
                console.log(err)
            })
           
        }).catch(err => {
            console.log(err)
        })
})

// setup a 'route' to listen on the default url path

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"./views/home.html"));
});


// setup a 'route' to listen on the default url path
app.get("/htmlDemo", (req, res) => {
    res.sendFile(path.join(__dirname,"./views/htmlDemo.html"));
});

app.get('*', function(req, res){
    res.send('Page Not Found', 404);
});



// setup http server to listen on HTTP_PORT
collegedata.initialize()
.then(app.listen(HTTP_PORT, ()=>{
    
    console.log("server listening on port: " + HTTP_PORT)
}))
.catch(err => {
    console.log("Error in intializing with the json files")
})

