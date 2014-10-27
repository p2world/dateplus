# dateplus: easy to modify date
## NOTE
this lib add some function on `Date`'s prototype

## Examples
```javascript
require('dateplus');
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
// 2014-10-02 10:00:00:000
d.format('yyyy-mm-dd hh:MM:ss:SSS');

// default date format string
// Date.formats.default (yyyy-mm-dd hh:MM)
// 2014-10-02 10:00
d.format();

// other short name for format
// Date.formats.date='yyyy-mm-dd'
// 2014-10-02
d.format('date');

// Date.formats.long='yyyy-mm-dd hh:MM:ss'
// 2014-10-02 10:00:00
d.format('long');

// you can custom by modify Date.formats
Date.formats.micro='yyyy-mm-dd hh:MM:ss:SSS';
// 2014-10-02 10:00:00:000
d.format('micro');

// copy a instance
var d2=d.clone();

// chain
var d3=d.clone().y(2014).m(10).d(27).h(15).M(2);
```


## dictionary
### main order is
1. year
2. month
3. day
4. hour
5. minute
6. second
7. microsecond

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
