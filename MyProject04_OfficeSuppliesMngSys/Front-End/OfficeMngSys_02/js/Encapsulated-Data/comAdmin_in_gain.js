/**
 * Created by user10 on 2016/5/30.
 */
/*---------加载入库-受赠-----------*/
//$(document).ready(function () {
//
//})

//function loadInGain(){
//    var x={"inStorageTypeId":3};
//    console.log(x);
//    $.ajax({
//        type:"post",
//        url:"http://192./InstorageCheckIn/sendInStorage.do",
//        data:JSON.stringify(x),
//        dataType:"json",
//        header:{
//            "Content-Type":"application/json",
//            "Accept":"application/json"
//        },
//        success:function(data){
//            var json=data;
//            console.log(data);
//
//
//            //var html1 = '';
//            for(var i= 0;i<json)
//        }
//    })
//
//}

//获取赠送物品的信息，传给后台数据库
$(function(){
    $("#inStorage").click(function(){

        var itemId= $("#itemId").val();
        var itemName=$("#itemName").val();
        var itemTypeId = $("#itemTypeId").val();
        var spec=$("#spec").val();
        var totalNumber=$("#totalNumber").val();
        var sender=$("#sender").val();
        var sendTime=$("#sendTime").val();
        var remark=$("#remark").val();

        var x = {"itemId": itemId, "itemName": itemName, "itemTypeId": itemTypeId, "spec": spec, "totalNumber": totalNumber,
            "sender": sender, "sendTime": sendTime, "remark": remark };
        console.log(x);
    });
})