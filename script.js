function add(a,b){
    console.log(a+b);

}add(4,5)

function sub(a,b){

    setTimeout(function(){

        console.log(a-b);
    },2000)

}sub(4,5)

function div( add, sub){
    setTimeout(function(){

        console.log("rr");

        add( 2,2,sub(1,8))
       
    },4000)
    

}
div(add,sub)//



