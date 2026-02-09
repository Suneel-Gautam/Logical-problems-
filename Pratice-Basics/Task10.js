function task10(n1, n2 , n3){

    if(n1 > n2 && n1 > n3){
        return `${n1} is the Largest number`
    }else if(n2 > n3 && n2 > n1){
        return `${n2} is the Largest number`
    }else if(n3 > n1 && n3 > n2){
        return `${n3} is the Largest numhber`
    }else {
        return `All number are equal`
    }
}


console.log(task10(10,10,10))