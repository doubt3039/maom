function filenav()
{
    document.getElementsByClassName("file_cont")[0].style.transform ="translateX(0%)";
    if(screen.width<=980)
    {
        document.getElementsByClassName("progress")[0].style.width="100%";
    }
    else{
        document.getElementsByClassName("progress")[0].style.height ="100%";
    }
}

var koo=""

function uploads(){
    document.getElementsByClassName("file")[0].click();
}

function uploads1(){
    document.getElementsByClassName("file")[1].click();
}

function selected(o){

    document.getElementsByClassName("typetxt")[0].innerHTML=(o.files[0]).name
}

function selected1(o){
    document.getElementsByClassName("typetxt")[1].innerHTML=(o.files[0]).name
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
        data:{"name":name,"filename":fake_path.split("\\").pop(),"filename1":fake_path1.split("\\").pop()},
        success: function (request) {
            if (request.url =="error")
            {
                alert("an error has been occured try again");
            }
            else{
                document.getElementsByClassName("inpup")[0].style.display="none";
                document.getElementsByClassName("uploadwish")[0].style.display="flex";
            }

        }
    });
}

function ok(){
    var inp=document.getElementsByClassName("file")[0];
    let pile=inp.files;
    var inp2=document.getElementsByClassName("file")[1];
    let pile1=inp2.files;
    fake_path=document.getElementsByClassName('file')[0].value;
    fake_path1=document.getElementsByClassName('file')[1].value;
    var name=document.getElementsByClassName("names")[0].value;

    if ((pile[0] ) && (pile1[0]) && (name != ""))
    {

        document.getElementsByClassName('upstxts')[0].innerHTML="uploading";
        document.getElementsByClassName("lds-ring")[0].style.display="inline-block";
        document.getElementsByClassName("uploadsvg")[0].style.display="none";
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
                    if(screen.width<=980)
                    {
                        document.getElementsByClassName("progresss")[0].style.width=percentval.toString()+"%";
                    }
                    else{
                        document.getElementsByClassName("progresss")[0].style.height=percentval.toString()+"%";
                    }
                    if(percentval==100)
                    {
                        const storages = firebase.storage().ref(fake_path1.split("\\").pop());
                        let p=storages.put(pile1[0]);
                        p.on("status_changed",(snapshot)=>{
                            var percentval = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                            console.log(percentval);
                            if(screen.width<=980)
                            {
                                document.getElementsByClassName("progresss")[0].style.width=percentval.toString()+"%";
                            }
                            else{
                                document.getElementsByClassName("progresss")[0].style.height=percentval.toString()+"%";
                            }
                            if(percentval==100)
                            {
                                complete(); 
                            }
                        },(error)=>{
                                console.log("Error is ", error);
                        })
                    }
                },(error)=>{
                        console.log("Error is ", error);
                })
            }
        });
    }
    else{
        if (name ==""){
            alert("enter name")
        }
        else{
            alert("select a file !");
        }
    }




}