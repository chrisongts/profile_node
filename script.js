$(function (){

  $.ajax({
    // url: 'http://localhost:7000/users',
    url: 'https://warm-river-72899.herokuapp.com/users'
    // headers: { 'x-my-custom-header': 'some' },
    // xhrFields: { withCredentials: true},
    // header: ( "Access-Control-Allow-Origin: http://localhost:7000/users" ),
    // header: ("Access-Control-Allow-Methods: POST, GET, HEAD"),
    // header: ("Access-Control-Allow-Headers: Origin"),
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    // data: {sentence: $("#yoda_input").val()},
    // Origin: "*",
    datatype: 'json',
  }).always(alwaysFunction)
    .success(successFunction)
    .fail(failFunction);

function alwaysFunction(){
console.log("Happy!");
}

function successFunction(data){

  $("#name_top").text(data.name);
  $("#name_out").text(data.name);
  $("#job_out").text(data.job);
  $("#email_out").text(data.email);
  $("#age_out").text(data.age);
  $("#mobile_out").text(data.mobile);
  $("#hobby_out_0").text(data.hobby[0]);
  $("#hobby_out_1").text(data.hobby[1]);
  $("#hobby_out-2").text(data.hobby[2]);
  $("#hobby_out_3").text(data.hobby[3]);
  $("#hobby_out_4").text(data.hobby[4]);
  $("#hobby_out_5").text(data.hobby[5]);
  $("#marital_out").text(data.maritalStatus);
  $("#school_out").text(data.school);
  $("#school_abbr_out").text(data.schoolAbbr);
  console.log(data);
  console.log(data.name);
}

function failFunction(jqXHR, textStatus, errorThrown){
console.log(errorThrown);
}

});
