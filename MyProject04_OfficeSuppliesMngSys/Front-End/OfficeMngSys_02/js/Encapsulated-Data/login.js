/**
 * Created by lenovo on 2016/1/30.
 */

//点击登录按钮  将数据传给服务端
function checkidnumber() {

    if ($("#idnumber").val() == "") {
        $(".usermsg").html("工号不能为空");
        return false;
    }
    else {
        $(".usermsg").html("");
        return true;
    }
}
function checkpassword() {

    if ($("#password").val() == "") {
        $(".pswmsg").html("密码不能为空");
        return false;
    }
    else {
        $(".pswmsg").html("");
        return true;
    }
}
//function checkrole(){
//    if($(""))
//}

function login_submit() {
    if (checkidnumber() && checkpassword()) {
        var idnumber = $("#idnumber").val();
        var password = $("#password").val();

        var role = $('input:radio[name="role"]:checked').val();
        var x = {"idnumber": idnumber, "password": password,"role":role};
        console.log(x);
        $.ajax({
            type: "post",
            url: "http://192.168.199.157:8080/demo/login.do",
            data: JSON.stringify(x),
            dataType: "json",
            //header:{"Content-Type":"application/json",
            //   "Accept":"application/json"},
            error: function () {
                alert("error");
            },
            success: function (data) {
                console.log(data);

                //if(data.status=="success"){
                //    $.cookie('username',data.userInfo.custNo,2);
                //    $.cookie('userphone',data.userInfo.tel,2);
                //    $("#fakeLoader").fakeLoader({
                //        timeToHide:2000,//加载效果持续时间
                //        zIndex:"999",
                //        spinner:"spinner4",
                //        bgColor:"#3498db"
                //    });
                //    for(var time=2;time>0;time--){
                //        setInterval(function () {
                //            time = parseInt(time);
                //            if (time >0) {
                //            } else {
                //                location.href='index.html?username='+data.userInfo.custNo;
                //            }
                //        }, 2000);
                //    }
                //
                //}
                //else{
                //    $("#errorlogin").html(data.status);
                //    return;
                //}
            }
        });
        return true;
    }
    else return false;
}

$(document).ready(function () {
    $("#idnumber").blur(function () {
        if ($(this).val() == "") {
            $(".idmsg").html("工号不能为空");
            return false;
        }
        else {
            $(".idmsg").html("");
            return true;
        }
    })
    $("#password").blur(function () {
        if ($(this).val() == "") {
            $(".pswmsg").html("密码不能为空");
            return false;
        }
        else {
            $(".pswmsg").html("");
            return true;
        }
    })
})
