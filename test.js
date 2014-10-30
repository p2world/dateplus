require('./index.js');

function assert(a,b) {
	if(a!==b){
		throw new Error(a+' noteq '+b);
	}else{
		console.log('OK: '+b);
	}
}



var date=new Date(2000,0,1);
var date1=date.clone();
assert(date1.m(),1);
assert(date1.d(),1);

var date2=date.clone();
date2.m(5);
assert(date2.format(),'2000-05-01 00:00');

var date3=date.clone();
date3.m(-1);
assert(date3.format(),'1999-12-01 00:00');


var date4=date.clone();
date4.m('+1');
assert(date4.format(),'2000-02-01 00:00');



var date5=date.clone();
assert(date5.format('long'),'2000-01-01 00:00:00');

Date.formats.test="yyyy-m-d";
var date5=date.clone();
assert(date5.format('test'),'2000-1-1');

var values=[2000,6,15,12,30,30,500];
var d=Date.parseCN(values.join(' '));
assert(d.format('yyyy-mm-dd hh:MM:ss:SSS'),'2000-06-15 12:30:30:500');


var keys='ymdhMsS';
for (var i = 0; i < values.length; i++) {
	var key=keys[i];
	var value=values[i];
	var d1=d.clone();
	d1[key](i+1);
	assert(d1[key](),i+1);
}
for (var i = 0; i < values.length; i++) {
	var key=keys[i];
	var value=values[i];
	var d1=d.clone();
	d1[key](i+1+'');
	assert(d1[key](),i+1);
}
for (var i = 0; i < values.length; i++) {
	var key=keys[i];
	var value=values[i];
	var d1=d.clone();
	d1[key](-1);
	assert(d1[key](),value-1);
}
for (var i = 0; i < values.length; i++) {
	var key=keys[i];
	var value=values[i];
	var d1=d.clone();
	d1[key](-1+'');
	assert(d1[key](),value-1);
}
for (var i = 0; i < values.length; i++) {
	var key=keys[i];
	var value=values[i];
	var d1=d.clone();
	d1[key]('+1');
	assert(d1[key](),value+1);
}

for (var i = 0; i < values.length; i++) {
	var key=keys[i];
	var value=values[i];
	var d1=d.clone();
	d1[key](1);
	assert(d1[key](),1);
}

assert(new Date(2000,0,1).h(5).M(2).format('yyyy-mm-dd hh:MM:ss:SSS'),"2000-01-01 05:02:00:000");
assert(Date.parseCN('2014/1-2 12- 00').format(),'2014-01-02 12:00');

var a=Date.parseCN('2000 2 3 00:00');
var b=Date.parseCN('2000 2 2 12:00');
assert(a.d(b),0.5);
assert(a.h(b),12);
assert(a.M(b),720);
assert(a.s(b),43200);
assert(a.S(b),43200000);