var fs = require('fs');
let dataCollection = null;

class Data {
    constructor(students, courses) {
        this.students = students
        this.courses = courses
    }

   
    stat() {
        var sdata;
        var cdata;

        return new Promise(function(resolve, reject){
            try {
                const data = fs.readFileSync('./data/students.json', 'utf8');
                studentdata = JSON.parse(data)
            } catch (err) {
                reject(err)
            }
    
            try {
                const data = fs.readFileSync('./data/courses.json', 'utf8');
                coursedata = JSON.parse(data)
            } catch(err) {
                reject(err)
            }

            dataCollection = new Data(studentdata,coursedata)

            resolve(dataCollection)

            console.log(studentdata)
            console.log(coursedata)
        });
    }

    

    getAllStudents(students) {
        return new Promise (function(resolve, reject) {
            if (students.length == null) {
                reject("No results returned")
            } else {
                resolve(students)
            }
        })
    };

    getCourses(courses) {
        return new Promise (function(resolve, reject) {
            if (courses.length == null) {
                reject("No results returned")
            } else {
                resolve(courses)
            }
        })
    }

    getTAs(students){
        return new Promise(function(resolve, reject){
                
            if (students.length > 0) {
                let taStudents = [];
                students.forEach(element => {
                    if(element.TA){
                        taStudents.push(element);
                    }
                });

                if(taStudents.length <= 0 ){
                    reject("There are no TA true in student");
                }
             
                resolve(taStudents);

            } else {
                reject("There are no students");
            }
          });
      }
}

module.exports = Data
