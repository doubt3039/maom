function selectimg(event){

}



function uploadimg(){
    var formData = new FormData();
    var inp=document.getElementsByClassName("up")[0];
    var name=document.getElementsByClassName("rollnumber")[0].value;
    let pile=inp.files;
    formData.append('file', pile[0]);
    formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val())
    formData.append('name',name);

    $.ajax({
        type: "POST",
        url: "/upload",
        mimeType:'application/json',
        contentType: false,
        processData: false,
        data:formData,
        success: function (request) {
            alert("uploaded sucessfuly")
        }
    });
}


