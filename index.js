(function(){
var proto={};
var names={
	y:"FullYear",
	w:"Day",
	m:"Month",
	d:"Date",
	h:"Hours",
	M:"Minutes",
	s:"Seconds",
	// 微秒
	S:"Milliseconds"
};

var marco=['',
	'var old=this.getXXX();',
	'if(arguments.length){',
		'//throw new Error("can`t set week");',
		'var re=/^([+-]?)(\\d+)$/.exec(""+value);',
		'if(re){',
			'value=Number(value);',
			'if(re[1]){',
				'value+=old;',
			'}else{',
				'//value--;',
			'}',
		'}else{',
			'throw new Error("arg must be number");',
		'}',
		'this.setXXX(value);',
		'return this;',
	'}else{',
		'//old++;',
		'return old;',
	'}',
''];
function makeExe(arr,index){
	arr[index]=arr[index].slice(2);
}
for(var c in names){
	var longName=names[c];
	var tmarco=marco.slice(0);
	if(c==='w'){
		makeExe(tmarco,3);
	}else if(c==='m'){
		makeExe(tmarco,10);
		makeExe(tmarco,18);
	}
	proto[c]=new Function('value',tmarco.join('\n').replace(/XXX/g,longName));
}

proto.t=function() {
	return this.getTime();
};
proto.T=function() {
	return Number((this.getTime()+'').slice(0,-3));
};
// 比如 15日   d=15 dd=15 ddd=015  get it?
proto.format=function(format) {
	var date=this;
	var formats;
	if(!format){
		format='default';
	}
	var tmp=Date.formats[format];
	if(tmp){
		format=tmp;
	}


	var chars='ymdhMsS';
	for ( var i=0;i<chars.length;i++){
		var c=chars[i];
		format=format.replace(new RegExp(c+'+','g'),function(cc){
			var value=date[c]()+'';
			for(var i=value.length;i<cc.length;i++){
				value='0'+value;
			}
			return value;
		});
	}
	return format;
};
proto.clone=function(){
	return new Date(this.getTime());
};
Date.formats={
	'default':'yyyy-mm-dd hh:MM',
	'long':'yyyy-mm-dd hh:MM:ss',
	'date':"yyyy-mm-dd"
};
Date.parseCN=function(str){
	// 用非数字切开
	var arr=str.split(/\D+/);
	var date=new Date(2000,0,1);
	var chars='ymdhMsS';
	var inits='1110000';
	for (var i = 0; i < chars.length; i++) {
		var val=arr[i]||inits[i];
		date[chars[i]](Number(val));
	}
	return date;
};
// 继承到Date
for(var i in proto){
	Date.prototype[i]=proto[i];
}
}());