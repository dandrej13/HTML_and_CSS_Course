function onOff() {
 console.log("test");
 const lightBulb = document.getElementById("lightBulb")
 console.log(lightBulb)
 console.log(lightBulb.src)

 if (lightBulb.src === "http://192.168.2.125:5500/new'/images/pic_bulbon.gif") {
     lightBulb.src = "images/pic_bulboff.gif"
 } else {
     lightBulb.src = "images/pic_bulbon.gif"
 }
    
}








