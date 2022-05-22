var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
var serverResponses = ["Welcome to WEB700 Assignment 1", 
                        "This assignment was prepared by Galhena Mudiyanselage Chathura Chamantha", 
                        "Galhena Mudiyanselage Chathura Chamantha:ccgalhena-mudiyansel@myseneca.ca",
                        "User Logged In", "Main Panel", "Logout Complete"];

                        
function httpRequest(httpVerb, path)
{
    var i, flag;

    flag = 0;

    for(i = 0; i < serverPaths.length; i++)
    {
        if(serverVerbs[i] == httpVerb && path == serverPaths[i])
        {
            console.log("200 : " + serverResponses[i]);
            flag = 1;                        
        }
    }
    
    if(flag == 0)
    {
        console.log("404 : Unable to process " + httpVerb + " request for " + path);
    }
}

httpRequest("PUT","/logout")
httpRequest("GET","/about")

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
// test function
function automateTests()
{
    testVerbs = ["GET", "POST"];
    testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"]

    function randomRequest()
    {
    

        var randVerb = testVerbs[getRandomIntInclusive(0,2)]
        console.log(randVerb)
        var randPath = testPaths[getRandomIntInclusive(0,7)]
        console.log(randPath)
        httpRequest(randVerb,randPath)       
    }
   setInterval(randomRequest, 1000)
}

automateTests()
