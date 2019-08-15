dbPassword = 'mongodb+srv://user99:'+ encodeURIComponent('password.9') + '@cluster0-i35xb.mongodb.net/test?retryWrites=true&w=majority';


// mongodb+srv://user99:<password>@cluster0-i35xb.mongodb.net/test?retryWrites=true&w=majority


module.exports = {
    mongoURI: dbPassword
};
