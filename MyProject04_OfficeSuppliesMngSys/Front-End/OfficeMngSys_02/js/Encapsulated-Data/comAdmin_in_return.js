

$(document).ready(function(){
    loadReturnDate(1);
    inStorage();
});


//加载数据
function loadReturnDate(pn){

    $.ajax({
    type:"post",
    dataType:"json",
    url:"http://192.168.35.111:8080/officeSystem/InstorageCheckIn/getInstorageHome.do",

    data: JSON.stringify({"inStorageTypeId":"1","pageIndex":pn,"pageCount":"5"}),
    success:function(data){
        console.log(data);
        if(1){

            var page =' ';
            page +='第<input type="text" id="pageIndex" style="border:0;width: 20px;text-align: center;" class="page-current" readonly="readonly" value="'+data.pageIndex+'"/>页';
            page +='共<input type="text" id="pageSize"  style="border:0;width: 20px;text-align: center;" class="page-total" readonly="readonly"value="'+data.pageSize+'"/>页';
            page +='<a class="btn" id="firstPage" onclick="firstPage()">首页</a>';
            page +='<a class="btn" id="previous" onclick="previousPage()">上一页</a>';
            page +='<a class="btn" id="next" onclick="nextPage()">下一页</a>';
            page +='<a class="btn" id="lastPage" onclick="lastPage()">最后一页</a>';
            page +='<input type="text" class="page-num" id="certian-page" style="width: 20px;text-align: center"/>';
            page +='<a class="btn" id="page-jump" onclick="jumpPage()">跳至此页</a>';

            $(".page").append(page);

            var html1 = "";
            for(var i=0;i<data.resultList.length;i++){
                html1 +='<tr>';
                html1 +='<td><input class="choose" type="checkbox"/></td>';
                html1 +='<td>'+data.resultList[i].itemId+'</td>';
                html1 +='<td>'+data.resultList[i].itemName+'</td>';
                html1 +='<td>'+data.resultList[i].itemTypeName+'</td>';
                html1 +='<td>'+data.resultList[i].measureUnitName+'</td>';
                html1 +='<td>'+ data.resultList[i].num+'</td>';
                html1 +='<td>'+ data.resultList[i].staffName+'</td>';
                html1 +='<td>'+ data.resultList[i].time+'</td>';
                html1 +='<td><button id="'+data.resultList[i].id+'" onclick="add(this)">入库</button></td>';
                html1 +='</tr>';
                $("tbody").append(html1);
            }

        }
    },
})
}

function add(element){
    var idList=new Array();
    var f={};
    f.id=element.id;
    idList.push(f);
    console.log(JSON.stringify(idList));
    //var id=element.id;
    //idList.push(id);
    //alert(idList[0]);
    var x = {
        "idList":idList,
        "operaterId":"1",
    };
    console.log(x);
    $.ajax({
        type:"post",
        url:"http://192.168.35.111:8080/officeSystem/InstorageCheckIn/returnInStorage.do",
        data:JSON.stringify(x),
        dataType:"json",
        header:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        success:function(data){
            console.log(data.message);
            if(data.message=="success"){
                alert("成功添加入库");
            }
            if(data.message=="error"){
                alert("添加入库失败");
            }
        }
    })
}



//分页的各种方法

//首页
function firstPage(){
    loadReturnDate(1);
}

//尾页
function lastPage(){
  var pn = document.getElementById("pageSize").value;
    loadPurchaseDate(pn);
}

//上一页
function previousPage(){
   var pn1=document.getElementById("pageIndex").value;
    if(pn1==1){
        alert("这已是首页！");
        var pn = parseInt(pn1);
        loadPurchaseDate(pn);
    }else{
        var pn = parseInt(pn1);
        pn-=1;
        loadPurchaseDate(pn);
    }
}

//下一页
function nextPage(){
    var pn1=document.getElementById("pageIndex").value;
    if(pn1==pageSize){
        alert("这已是最后一页！");
        var pn = parseInt(pn1);
        loadPurchaseDate(pn);
    }else{
        var pn = parseInt(pn1);
        pn+=1;
        loadPurchaseDate(pn);
    }
}

//跳转到指定页
function jumpPage(){
    var pn1 = document.getElementById("certian-page").value;
    var pn = parseInt(pn);
    loadPurchaseDate(pn);
    $("#certian-page").val();
}


//点击入库按钮进行归还入库
function inStorage(){
    $("button[name='inStorage']").on("click",function(){
        var x = {
            "id":"1",
            "operaterId":"1",
        };
        console.log(x);
        $.ajax({
            type:"post",
            url:"http://192.168.35.111:8080/officeSystem/InstorageCheckIn/returnInStorage.do",
            data:JSON.stringify(x),
            dataType:"json",
            header:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            success:function(data){
                console.log(data.message);
                if(data.message=="success"){
                    alert("成功添加入库");
                }
            }
        })
    });

}