const timeToConvertSec = 3665;
let TimeConverterHours = Math.trunc(timeToConvertSec / 3600);
let TimeConverterMin = Math.trunc((timeToConvertSec / 60) % 60);
let TimeConverterSec = timeToConvertSec % 60;

console.log(TimeConverterHours + " ч " + TimeConverterMin + " мин " + TimeConverterSec +  " сек");
