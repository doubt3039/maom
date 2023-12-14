function notf(){
    console.log("hi");

    Notification.requestPermission((result) => {
        console.log(result);
        if (result=="granted"){
            setInterval(yep,5000)

        }

      });
}

function yep(){
    const greeting = new Notification('Hi, How are you?');
}


