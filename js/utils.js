
function toExp(number) {
    var exp = 0;
    var neg = false;
    
    if( number == 0 ) {
        return 0;
    }
    
    if( number < 0 ) {
        neg = true;
        number = number * -1;
    }
    
    if( number < 0.999 ) {
        do { exp -= 3; } while( (number *= 1000) < 1 );
    }
    
    if( number >= 1000 ) {
        var exp = 0;
        do { exp += 3; } while( (number /= 1000) > 999 );
    }
    
    if( exp >= 0 ) exp = '+' + exp;

    if( neg ) number *= -1;

    return parseFloat(number).toFixed(3) + 'e' + exp;    
}

jQuery.fn.extend({
    valAsFloat: function(){
        return parseFloat(this.val());
    }
});