function showInfo()
{
    event.preventDefault();
    var username = document.getElementById("name").value;
    var pass = document.getElementById("password").value;
    var bd = document.getElementById("birth").value;
    var gender = document.getElementsByName("gender");  


    var genderArr = new Array();    
    for(var i =0; i<gender.length;i++)
    {
        if(gender[i].checked)
        {
            genderArr.push(gender[i].value);
        }
    }
    document.getElementById("myInfo").innerHTML = "Name: " + username + "<br>" + "Password: "+ pass+"<br>"+"Birthday: "+ bd+ "<br>"+"Gender: "+ genderArr
}