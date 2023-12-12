setInterval(ref,1000);


function urlcreate(k){
    l=k
    for(var d=0;d<=l.length;d++)
    {
        l=l.replace(' ','%20')
    }
    l='/download/'+l+'/'
    return l
}

function ref(){
    console.log("hii");
    var l = [];
    var g=document.getElementsByClassName("nam");
    for(var i=0;i<g.length;i++){
        l.push(g[i].innerHTML.toString())
    }
    console.log(l.join(','))
    $.ajax({
        type: "POST",
        url: "/refresh",
        mimeType:'application/json',
        data:{ 'csrfmiddlewaretoken': $("input[name=csrfmiddlewaretoken]").val(),"present":l.join(',')},
        success: function (request) {
            for(var f=0;f<(request.up).length;f++)
            {
                var t='<div class="info_cont" onclick="ref()">'+
                '<div class="name">'+
                    '<span class="n_n">name</span>'+
                    '<span class="nam">'+request.up[f].name+'</span>'+
                '</div>'+
                '<div class="uploadt">'+
                    '<span class="n_n">uploaded time</span>'+
                    '<span class="upd">'+request.up[f].uploadtime+'</span>'+
                '</div>'+
                '<div class="pdfn">'+
                    '<span class="n_n">filename</span>'+
                    '<span class="pd">'+request.up[f].pdf+'</span>'+
                '</div>'+
                '<div class="download">'+
                    '<a  href='+request.up[f].url+' class="linkbtn" target="_blank">'+
                        '<div class="download_btn">'+
                            'open'+
                        '</div>'+
                    '</a>'+
                '</div>'+
                '</div>'
                document.getElementsByClassName("main")[0].innerHTML=t+document.getElementsByClassName("main")[0].innerHTML
            }
        }
    });
}

