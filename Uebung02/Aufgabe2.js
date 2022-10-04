function wuerfeln() 
{
    var zahl = 6*Math.random();
    var augenzahl = Math.floor(zahl)+1;
    return augenzahl;
}
console.log(wuerfeln());
