function filenav()
{
    document.getElementsByClassName("file_cont")[0].style.transform ="translateX(0%)";
    document.getElementsByClassName("progress")[0].style.height ="100%";
}

var koo=""

function uploads(){
    document.getElementsByClassName("file")[0].click();
}

function selected(o){
    var f=document.getElementsByClassName("file")[0];
    document.getElementsByClassName("typetxt")[0].innerHTML+=" | "+(o.files[0]).name
}


function complete(){
    var name=document.getElementsByClassName("names")[0].value;
    let cs= $("input[name=csrfmiddlewaretoken]").val();
    l=name
    for(var d=0;d<=l.length;d++)
    {
        l=l.replace('.','')
    }
    $.ajax({
        type: "POST",
        url: "/upload",
        mimeType:'application/json',
        headers: {
            'X-CSRFToken': cs
            },
        data:{"name":name,"filename":fake_path.split("\\").pop()},
        success: function (request) {
            document.getElementsByClassName("progress")[1].style.height ="100%";
            document.getElementsByClassName("inpup")[0].style.display="none";
            document.getElementsByClassName("uploadwish")[0].style.display="flex";                }
    });
}

function ok(){
    var inp=document.getElementsByClassName("file")[0];
    let pile=inp.files;
    fake_path=document.getElementsByClassName('file')[0].value

    $.ajax({
        type: "GET",
        url: "/getid",
        mimeType:'application/json',
        data:{},
        success: function (request) {
            var st=document.getElementsByClassName("progresss")[0];
            const firebaseConfig=request.key;
            var t=firebase.initializeApp(firebaseConfig);
            const storages = firebase.storage().ref(fake_path.split("\\").pop());
            let r=storages.put(pile[0]);
            r.on("status_changed",(snapshot)=>{
                var percentval = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                console.log(percentval);
                document.getElementsByClassName("progresss")[0].style.height=percentval.toString()+"%";
                if(percentval==100)
                {
                    complete();
                }
            },(error)=>{
                    console.log("Error is ", error);
            })
        }
    });

}