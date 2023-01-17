function displaydata(data){
result.value+=data
}

function allcl(){
    result.value=" "
    ans.value=" "
}

function oper(){

    ans.value=eval(result.value)

}
 function back(){
   
    result.value= result.value.slice(0,-1)
 }