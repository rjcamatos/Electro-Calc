
class __ElectroMath___FilterLC {
    constructor() {
        this.clear();
    }

    L = function(value) {
        if( value ) this._l = value; else return this._l;
    }

    C = function(value) {
        if( value ) this._c = value; else return this._c;
    }

    fo = function(value) {
        if( value ) this._fo = value; else return this._fo;
    }

    compute = function() {
        var ret = 0;
        if( this._l && this._c ) ret = this._fo = 1 / ( 2 * Math.PI * Math.sqrt( this._l * this._c) );
        if( this._fo && this._l ) ret = this._c = Math.pow(1/(2*Math.PI*this._fo*Math.sqrt(this._l)),2);
        if( this._fo && this._c ) ret = this._l = Math.pow(1/(2*Math.PI*this._fo*Math.sqrt(this._c)),2);
        return ret;
    }

    clear = function() {
        this._l = 0;
        this._c = 0;
        this._fo = 0;
    }
}



class __ElectroMath___FilterRC {
    constructor() {
        this.clear();
    }

    R = function(value) {
        if( value ) this._r = value; else return this._r;
    }

    C = function(value) {
        if( value ) this._c = value; else return this._c;
    }

    fc = function(value) {
        if( value ) this._fc = value; else return this._fc;
    }

    compute = function() {
        var ret = 0;
        if( this._r && this._c ) ret = this._fc = 1 / ( 2 * Math.PI * this._r * this._c );
        if( this._fc && this._r ) ret = this._c = 1 / ( 2 * Math.PI * this._fc * this._r );
        if( this._fc && this._c ) ret = this._r = 1 / ( 2 * Math.PI * this._fc * this._c );
        return ret;
    }

    clear = function() {
        this._c = 0;
        this._r = 0;
        this._fc = 0;
    }
}

class __ElectroMath___FilterRLC {
    constructor() {
        this.clear();
    }

    L = function(value) {
        if( value ) this._l = value; else return this._l;
    }

    C = function(value) {
        if( value ) this._c = value; else return this._c;
    }

    R = function(value) {
        if( value ) this._r = value; else return this._c;
    }

    Q = function(value) {
        if( value ) this._q = value; else return this._q;
    }

    BW = function(value) {
        if( value ) this._bw = value; else return this._bw;
    }

    fo = function(value) {
        if( value ) this._fo = value; else return this._fo;
    }

    compute = function() {
        var ret = 0;
        if( this._l && this._c ) ret = this._fo = 1 / ( 2 * Math.PI * Math.sqrt( this._l * this._c) );
        if( this._fo && this._l ) ret = this._c = Math.pow(1/(2*Math.PI*this._fo*Math.sqrt(this._l)),2);
        if( this._fo && this._c ) ret = this._l = Math.pow(1/(2*Math.PI*this._fo*Math.sqrt(this._c)),2);
        if( this._l && this._c && this._r ) ret = this._q = this._r * Math.sqrt(this._l / this._c);
        if( this._fo && this._q ) {
            ret = this._bw = this._fo / this._q        
        } 
        return ret;
    }

    clear = function() {
        this._l = 0;
        this._c = 0;
        this._r = 0;
        this._q = 0;
        this._bw = 0;
        this._fo = 0;
    }
}

class __ElectroMath___DecibelAmplitude {
    constructor() {
        this.clear();
    }

    Ref = function(value) {        
        if( value ) this._ref = value; else return this._ref;
    }

    Refer = function(value) {
        if( value ) this._refer = value; else return this._refer;
    }

    dB = function(value) {
        if( value ) this._db = value; else return this._db;
    }

    compute = function() {
        var ret = 0;
        if( this._refer && this._ref ) ret = this._db = 20 * Math.log10(this._refer/this._ref);
        if( this._db && this._ref ) ret = this._refer = this._ref * Math.pow(10,this._db/20);
        if( this._db && this._refer ) ret = this._ref = this._refer / Math.pow(10,this._db/20);
        return ret;
    }

    clear = function() {
        this._refer = 0;
        this._ref = 0;
        this._db = 0;
    }
}


class __ElectroMath___DecibelPower {
    constructor() {
        this.clear();
    }

    Ref = function(value) {        
        if( value ) this._ref = value; else return this._ref;
    }

    Refer = function(value) {
        if( value ) this._refer = value; else return this._refer;
    }

    dB = function(value) {
        if( value ) this._db = value; else return this._db;
    }

    compute = function() {
        var ret = 0;
        if( this._refer && this._ref ) ret = this._db = 10 * Math.log10(this._refer/this._ref);
        if( this._db && this._ref ) ret = this._refer = this._ref * Math.pow(10,this._db/10);
        if( this._db && this._refer ) ret = this._ref = this._refer / Math.pow(10,this._db/10);
        return ret;
    }

    clear = function() {
        this._refer = 0;
        this._ref = 0;
        this._db = 0;
    }
}

class __ElectroMath___ReactanceInductive {
    constructor() {
        this.clear();
    }

    f = function(value) {        
        if( value ) this._f = value; else return this._f;
    }

    X = function(value) {
        if( value ) this._x = value; else return this._x;
    }

    L = function(value) {
        if( value ) this._l = value; else return this._l;
    }

    compute = function() {
        var ret = 0;
        if( this._x && this._l ) ret = this._f = this._x/( 2 * Math.PI * this._l);
        if( this._f && this._x ) ret = this._l = this._x/( 2 * Math.PI * this._f);
        if( this._f && this._l ) ret = this._x = 2 * Math.PI * this._f * this._l;
        return ret;
    }

    clear = function() {
        this._f = 0;
        this._x = 0;
        this._l = 0;
    }
}


class __ElectroMath___ReactanceCapacitive {
    constructor() {
        this.clear();
    }

    f = function(value) {        
        if( value ) this._f = value; else return this._f;
    }

    X = function(value) {
        if( value ) this._x = value; else return this._x;
    }

    C = function(value) {
        if( value ) this._c = value; else return this._c;
    }

    compute = function() {
        var ret = 0;
        if( this._x && this._c ) ret = this._f = 1/( 2 * Math.PI  *this._x * this._c);
        //$('#frequency').val( toExp(1/(2*Math.PI*$('#reactance').valAsFloat()*$('#capacitance').valAsFloat())) );
        if( this._f && this._x ) ret = this._c = 1/( 2 * Math.PI  *this._f * this._x);
        //$('#capacitance').val( toExp(1/(2*Math.PI*$('#frequency').valAsFloat()*$('#reactance').valAsFloat())) );
        if( this._f && this._c ) ret = this._x = 1/( 2 * Math.PI  *this._f * this._c);
        //$('#reactance').val( toExp(1/(2*Math.PI*$('#frequency').valAsFloat())*parseFloat($('#capacitance').valAsFloat())) );
        return ret;
    }

    clear = function() {
        this._f = 0;
        this._x = 0;
        this._c = 0;
    }
}


class ElectroMath {
    constructor() {
        this.filterLC = new __ElectroMath___FilterLC;
        this.filterRC = new __ElectroMath___FilterRC;
        this.filterRLC = new __ElectroMath___FilterRLC;
        this.decibelAmplitude = new __ElectroMath___DecibelAmplitude;
        this.decibelPower = new __ElectroMath___DecibelPower;
        this.reactanceInductive = new __ElectroMath___ReactanceInductive;
        this.reactanceCapacitive = new __ElectroMath___ReactanceCapacitive;
    }
}