var preference = prompt ('Would you like a house or hotel?');
var message;

if (preference === 'house'){
    message = 'Houses are great!';
} else if (preference === 'hotel'){
    message = 'Hotels are expensive!';
} else {
    message = 'Invalid Answer Please Try Again';
}

document.write('<h3>' + message + '</h3>');