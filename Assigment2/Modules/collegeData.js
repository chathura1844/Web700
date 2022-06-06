var datacollection=null

const fs= require('fs');




fs.readFile('../Data/student.json', 'utf8', function(err,StudentData){
    if (err){
        console.log(err); // or reject the promise (if used in a promise)
        return; // exit the function
    }
    
    let Studentdata = JSON.parse(StudentData); // convert the JSON from the file into an array of objects
    console.log(Studentdata);
});

fs.readFile('../Data/courses.json', 'utf8', function(err,CourseData){
    if (err){
        console.log(err); // or reject the promise (if used in a promise)
        return; // exit the function
    }
    
    let Coursedata = JSON.parse(CourseData); // convert the JSON from the file into an array of objects
    console.log(Coursedata);
});

class A2 {
    constructor (id,student,course,TAs){
    this.id = id;
    this.student = student;
    this.course = course;
    this.TAs = TAs;
    }

    getId() {
        return id;
    }

    setId(id) {
        this.id = id;
        console.log(this.id)
    }

    getstudent() {
        return student;
    }

    setStudent(student) {
        this.student = student;
    }
    getCourse() {
        return course;
    }

    setCourse(course) {
        this.course = course;
    }

    TAs() {
        return TAs;
    }

    setTAs(TAs) {
        this.TAs = TAs;
    }

}

const dataCollection = new A2(StudentData,CourseData);
console.log(dataCollection.student)
console.log(dataCollection.course)
//console.log(datacollection.TAs)