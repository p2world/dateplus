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

#### unit name rule
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

## math
* bigest unit is *day*

```javascript
var a=Date.parseCN('2000 2 3');
var b=Date.parseCN('2000 2 2')

// means a - b = ?d
a.d(b);// 1


// also works
var a=Date.parseCN('2000 2 3 00:00');
var b=Date.parseCN('2000 2 2 12:00')

a.d(b);// 0.5
a.h(b);// 12
a.M(b);// 720
a.s(b);// 43200
a.S(b);// 43200000
```

## parseCN
* get a Date instance by splited number string
* only for order by `year month day hour minute second microsecond`
* set the rest to 0

```javascript
// 2000-1-1 0:0:0:000
Date.parseCN('2000');

// 2000-2-1 0:0:0:000
Date.parseCN('2000 2');

// 2000-2-3 0:0:0:000
Date.parseCN('2000 2 3');

// every spliter are ok!
// 2000-2-1 0:0:0:000
Date.parseCN('2000|2');

```
