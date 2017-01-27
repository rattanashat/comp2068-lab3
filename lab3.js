/**
 * Created by apple on 27/01/17.
 */
var http = require('http');
var connect = require('connect');
var url = require('url');
var app = connect();

var fail = function(req, res)
{res.end('Connection Failure');}
//function that Accept 3 QueryString parameters: method, x, and y
var calculator = function(req, res,method)
{
    var queryString = url.parse(req.url, method).query;
    var method = queryString.method;
    var number1 = queryString.x;
    var number2 = queryString.y;
//Possible values for the method parameter are: "add", "subtract", "multiply", and "divide"
    if(method == 'add'){
        res.end(number1 + ' + ' + number2 + ' = ' + (parseInt(number1)+parseInt(number2)));

    }else if(method =='subtract'){
        res.end(number1 + ' - ' + number2 + ' = ' + (parseInt(number1)-parseInt(number2)));

    }else if(method == 'multiply'){
        res.end(number1 + ' * ' + number2 + ' = ' + (parseInt(number1)*parseInt(number2)));

    }else if(method == 'divide'){
        res.end(number1 + ' / ' + number2 + ' = ' + (parseInt(number1)/parseInt(number2)));
//If the method value is anything else, show an error message
    }else{
        res.end('Error: Please use a valid string');
    };
};

app.use('/lab3', calculator);
app.use(fail);

app.listen(3000);
console.log('Server running on port 3000');

//Sample URL: http://localhost:3000/lab3?method=add&x=16&y=4