function selectimg(event){

}

const firebaseConfig = {
    apiKey: "AIzaSyBZAyZvVciHmU0ocYPD2nZ0BW9IZePZptU",
    authDomain: "kidding-606b7.firebaseapp.com",
    databaseURL: "https://kidding-606b7-default-rtdb.firebaseio.com",
    projectId: "kidding-606b7",
    storageBucket: "kidding-606b7.appspot.com",
    messagingSenderId: "986582791827",
    appId: "1:986582791827:web:524af3abbaebac18d27f66",
    measurementId: "G-0WRH5NFR1L"
};

// Initialize Firebase

function uploadimg()
{
    var formData = new FormData();
    var inp=document.getElementsByClassName("up")[0];
    var name=document.getElementsByClassName("rollnumber")[0].value;
    let pile=inp.files;
    const firebaseConfig = {
        apiKey: "AIzaSyBZAyZvVciHmU0ocYPD2nZ0BW9IZePZptU",
        authDomain: "kidding-606b7.firebaseapp.com",
        databaseURL: "https://kidding-606b7-default-rtdb.firebaseio.com",
        projectId: "kidding-606b7",
        storageBucket: "kidding-606b7.appspot.com",
        messagingSenderId: "986582791827",
        appId: "1:986582791827:web:524af3abbaebac18d27f66",
        measurementId: "G-0WRH5NFR1L"
    };

    var t=firebase.initializeApp(firebaseConfig);

    const storages = firebase.storage().ref("babu.pptx");
    let r=storages.put(pile[0]);

}
function ok(){
    var formData = new FormData();
    var inp=document.getElementsByClassName("up")[0];
    var name=document.getElementsByClassName("rollnumber")[0].value;
    let pile=inp.files;
    l=name
    for(var d=0;d<=l.length;d++)
    {
        l=l.replace('.','')
    }
    formData.append('file', pile[0]);
    formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val())
    formData.append('name',l);

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