/**
 * Created by user10 on 2016/6/22.
 */
//$(function(){})和$(document).ready(function(){}) 的用法

$(function(){
    $("#submit-info").click(function () {
        $.validator.setDefaults({
            submitHandler: function () {
                saveForm();
            }
        });
        _addFun();
    })
});


//"fullName": "供应商全称",
//    "shortName": "供应商简称",
//    "supplierTypeId": "供应商类型",
//    "linkman": "联系人",
//    "cellPhoneNumber": "手机号码",
//    "phone": "联系电话",
//    "fax": "传真",
//    "postcode": "邮编",
//    "address": "地址",
//    "remark": "备注"

function saveForm(){
    console.log("添加供应商啊");
    //获取用户输入的数据
    var supplierId=$("#supplier-id").val();
    var fullName=$("#supplier-fullName").val();
    var shortName=$("#supplier-shortName").val();
       //类型
    var supplierTypeId=$("#supplier-type").val();

    var linkman=$("#supplier-contact").val();
    var cellPhoneNumber=$("#supplier-telephone").val();
    var phone=$("#supplier-phone").val();
    var fax=$("#supplier-fax").val();
    var postcode=$("#supplier-postcode").val();
    var address=$("#supplier-address").val();
    var remark=$("#supplier-remark").val();

    var  x = {
        "pageIndex":pn,
        "pageCount":pageCount,
        "startTime":startTime,
        "endTime":endTime,
        "itemTypeId":itemTypeId,
        "itemName":itemName,
        "inStorageTypeId":inStorageTypeId
    };

    $.ajax({
        url:"http://192.168.35.111:8080/officeSystem/SupplierManager/addSupplier.do",
        type:"post",
        dataType:"json",
        data: JSON.stringify(x),
        success: function (data) {
            alert("成功提交");
            $('#ruku')[0].reset();
            $('#addzichanruku').modal('hide');
            Stocking();
            funResult = eval(data);
            console.log("成功将入库数据传入后台");

        },
        error: function () {
            console.log("将入库数据传入后台失败");
        }

    })
}