num="1234"
count=0,sum=0
for(i of num){
    count++
}
console.log("length:"+count)
for(j of num){
    power=1
    for(k=0;k<count;k++){
        power*=j
    }
    sum+=power
}
console.log("sum:"+sum)
if(sum==num){
    console.log("Armstrong number")
}else{
    console.log("Not an armstrong number")
}