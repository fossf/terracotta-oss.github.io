var pairs =
{
"how-to":{"create":1}
,"create":{"trigger":1}
,"trigger":{"executes":1,"=newtrigger":1}
,"executes":{"every":1}
,"every":{"minutes":1}
,"minutes":{"using":1}
,"using":{"simpletrigger":1,"calendarintervaltrigger":1}
,"simpletrigger":{"trigger":1}
,"=newtrigger":{".withidentity":1}
,".withidentity":{"trigger3":1}
,"trigger3":{"group1":1}
,"group1":{".startnow":1}
,".startnow":{".withschedule":1}
,".withschedule":{"(simpleschedule":1,"(calendarintervalschedule":1}
,"(simpleschedule":{".withintervalinminutes":1}
,".withintervalinminutes":{"(90)":1,"(90))":1}
,"(90)":{".repeatforever":1}
,".repeatforever":{"())":1}
,"())":{".build":1}
,".build":{"using":1}
,"calendarintervaltrigger":{"trigger":1}
,"(calendarintervalschedule":{".withintervalinminutes":1}
,"(90))":{".build":1}
}
;Search.control.loadWordPairs(pairs);