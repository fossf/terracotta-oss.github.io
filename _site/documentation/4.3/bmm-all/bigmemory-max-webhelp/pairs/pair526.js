var pairs =
{
"logs":{"return":1,"using":1,"last":1}
,"return":{"logs":1}
,"using":{"uri":1}
,"uri":{"extension":1}
,"extension":{"\u002Fagents\u002Flogs":1}
,"\u002Fagents\u002Flogs":{"\u002Fv2\u002Fagents\u002Flogs":1,"sincewhen=10m":1}
,"\u002Fv2\u002Fagents\u002Flogs":{"limit":1}
,"limit":{"size":1}
,"size":{"returned":1}
,"returned":{"data":1}
,"data":{"sincewhen":1}
,"sincewhen":{"query":1}
,"query":{"logs":1}
,"last":{"ten":1}
,"ten":{"minutes":1}
,"minutes":{"\u002Fagents\u002Flogs":1}
}
;Search.control.loadWordPairs(pairs);