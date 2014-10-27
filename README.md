# dateplus: easy to modify date
## NOTE
this lib add some function on `Date`'s prototype

## Examples
```javascript
// get a Date instance by splited number string (only for order by year month day hour minute second microsecond)
var d=Date.parseCN('2014.1.1 12:00');

// set month to 10
d.m(10);

// set day 1+1=2
d.d('+1')

// set hour 12-1=11
d.h('-1');

// set hour 11-1=10 the same
d.h(-1);

// short for d.getTime();
//1412215200000
d.t();

// d.getTime(); with out microseconds
// 1412215200
d.T();

// date format string
d.format('yyyy-mm-dd hh:MM:ss:SSS');

// default date format string
// Date.formats.default
d.format();

// other short name for format
// Date.formats.date='yyyy-mm-dd'
d.format('date');
// Date.formats.long='yyyy-mm-dd hh:MM:ss'
d.format('long');

// you can custom by modify Date.formats
Date.formats.micro='yyyy-mm-dd hh:MM:ss:SSS';
d.format('micro');

// copy a instance
var d2=d1.clone();

// chain
var d3=d1.clone().y(2014).m(10).d(27).h(15).M(2);
```


## dictionary
### main order is `year month day hour minute second microsecond`
#### rule
* small unit Upper case (month Minute) (second microSecond)

```javascript
var names={
	y:"FullYear",
	w:"Day",
	m:"Month",
	d:"Date",
	h:"Hours",
	M:"Minutes",
	s:"Seconds",
	S:"Milliseconds"
};
```
