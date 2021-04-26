var product = 1

for (var i=1; i<=15; i++){
    product=product*i
    if (product>1e8){
        console.log(product)
        return
    }
}
