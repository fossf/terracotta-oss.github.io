var pairs =
{
"backups":{"initiate":1,"cluster":1}
,"initiate":{"backups":1}
,"cluster":{"data":1}
,"data":{"posting":1}
,"posting":{"following":1}
,"following":{"uri":1}
,"uri":{"extension":1}
,"extension":{"\u002Fagents\u002Fbackups\u002Fto":1,"\u002Fagents\u002Fbackups\u002Fnote":1}
,"\u002Fagents\u002Fbackups\u002Fto":{"status":1}
,"status":{"backup":1}
,"backup":{"true":1,"progress)":1,"operations":1}
,"true":{"backup":1}
,"progress)":{"operation":1}
,"operation":{"uri":1}
,"\u002Fagents\u002Fbackups\u002Fnote":{"backup":1}
,"operations":{"involve":1}
,"involve":{"entire":1}
,"entire":{"tsa":1}
,"tsa":{"cannot":1}
,"cannot":{"delegated":1}
,"delegated":{"specific":1}
,"specific":{"servers":1}
}
;Search.control.loadWordPairs(pairs);
