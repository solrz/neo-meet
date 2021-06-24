import * as jquery from 'jquery';

export function sendForm(data, formid = '1FAIpQLSekwsRdYIH5BzQdce0fDRAUsPcbPdNCuGSFNjqQoZ4T673ETg') {
    jquery.ajax({
        url: 'https://docs.google.com/forms/u/0/d/e/' + formid + '/formResponse',     //The public Google Form url, but replace /view with /formResponse
        data: data, //Nifty jquery function that gets all the input data
        type: 'POST', //tells ajax to post the data to the url
        dataType: "json", //the standard data type for most ajax requests
        statusCode: { //the status code from the POST request
            0: function (data) { //0 is when Google gives a CORS error, don't worry it went through
                //success
            },
            200: function (data) {//200 is a success code. it went through!
                //success
            },
            403: function (data) {//403 is when something went wrong and the submission didn't go through
                //error
            }
        }
    });
}
