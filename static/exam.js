function notf(){
    console.log("hi");

    Notification.requestPermission((result) => {
        console.log(result);
      });
      const greeting = new Notification('Hi, How are you?');
    }


