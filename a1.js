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
        if(serverVerbs[i] == httpVerb)
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
function automateTests()
{
    var testVerbs = ["GET", "POST"];
    var testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"]

    function randomRequest()
    {
        var randVerb, randPath;

        randVerb = getRandomInt(2);
        randPath = getRandomInt(8);

        httpRequest(testVerbs[randVerb], testPaths[randPath]);        
    }
    var interval = setInterval(randomRequest(), 1000);
}

//automateTests();

var interval = setInterval(httpRequest("GET", "/"), 1000);
