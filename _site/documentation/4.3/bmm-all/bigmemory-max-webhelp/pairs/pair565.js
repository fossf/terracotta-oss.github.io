var pairs =
{
"terminating":{"demo":1}
,"demo":{"terminate":1}
,"terminate":{"clean":1}
,"clean":{"application":1}
,"application":{"scripts":1}
,"scripts":{"stop-*.sh":1}
,"stop-*.sh":{"(for":1}
,"(for":{"unix\u002Flinux)":1,"windows)":1}
,"unix\u002Flinux)":{"stop-*.bat":1}
,"stop-*.bat":{"(for":1}
,"windows)":{"alternatively":1}
,"alternatively":{"kill":1}
,"kill":{"java":1}
,"java":{"processes":1}
,"processes":{"sending":1}
,"sending":{"ctrl-c":1}
,"ctrl-c":{"signal":1}
}
;Search.control.loadWordPairs(pairs);