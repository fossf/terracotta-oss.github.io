var pairs =
{
"how-to":{"update":1}
,"update":{"existing":1}
,"existing":{"job":1}
,"job":{"update":1,"\u002F\u002Fadd":1,"scheduler":1,"given":1}
,"\u002F\u002Fadd":{"new":1}
,"new":{"job":1}
,"scheduler":{"instructing":1}
,"instructing":{"replace":1}
,"replace":{"\u002F\u002Fthe":1}
,"\u002F\u002Fthe":{"existing":1}
,"given":{"name":1}
,"name":{"group":1}
,"group":{"(if":1}
,"(if":{"any)":1}
,"any)":{"jobdetail":1}
,"jobdetail":{"job1":1}
,"job1":{"=newjob":1,"group1":1}
,"=newjob":{"(myjobclass.class)":1}
,"(myjobclass.class)":{".withidentity":1}
,".withidentity":{"job1":1}
,"group1":{".build":1}
,".build":{"\u002F\u002Fstore":1}
,"\u002F\u002Fstore":{"overwrite":1}
,"overwrite":{"flag":1}
,"flag":{"\u0027true":1}
,"\u0027true":{"scheduler.addjob":1}
,"scheduler.addjob":{"(job1":1}
,"(job1":{"true)":1}
}
;Search.control.loadWordPairs(pairs);