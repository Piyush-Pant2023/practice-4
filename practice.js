let time=20;
if(time>4 &time<=9){
    console.log("good morning")
}else if(time<12 & time<16){
    console.log("good afternoon");
}else if(time<16 & time<19){
    console.log("good evening");
}else if(time>19 & time<24){
    console.log("good night")
}
else{
    console.log("please enter valid time");
}