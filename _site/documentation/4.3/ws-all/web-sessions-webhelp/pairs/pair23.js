var pairs =
{
"connecting":{"management":1,"rest":1,"tms":1,"directly":1,"tsa":1}
,"management":{"service":1,"server":1,"agent":1,"port":1}
,"service":{"rest":1,"running":1}
,"rest":{"api":1,"management":1,"agent":1}
,"api":{"rest":1,"available":1}
,"available":{"connecting":1}
,"running":{"terracotta":1,"rest":1,"tms":1}
,"terracotta":{"management":1,"configuration":1}
,"server":{"node":1}
,"node":{"running":1,"http:\u002F\u002F<host>":1}
,"agent":{"urls":1,"host":1}
,"urls":{"shown":1}
,"shown":{"below":1}
,"below":{"connecting":1}
,"tms":{"http:\u002F\u002F<host>":1,"default":1}
,"http:\u002F\u002F<host>":{"<port>\u002Ftmc\u002Fapi":1,"<port>\u002Ftc-management-api":1}
,"<port>\u002Ftmc\u002Fapi":{"<port>":1}
,"<port>":{"9889":1,"configured":1,"management":1}
,"9889":{"running":1}
,"default":{"container":1,"port":1,"bind":1,"value":1}
,"container":{"using":1,"substitute":1,"connecting":1}
,"using":{"container":1}
,"substitute":{"port":1}
,"port":{"configured":1,"default":1,"rest":1,"value":1,"9540":1}
,"configured":{"container":1,"<managementrestservice>":1,"server\u0027s":1}
,"directly":{"standalone":1}
,"standalone":{"node":1}
,"<port>\u002Ftc-management-api":{"<port>":1}
,"<managementrestservice>":{"element\u0027s":1}
,"element\u0027s":{"bind":1}
,"bind":{"attribute":1,"value":1}
,"attribute":{"ehcache":1}
,"ehcache":{"configuration":1}
,"configuration":{"file":1}
,"file":{"(ehcache.xml":1,"(tc-config.xml":1}
,"(ehcache.xml":{"default)":1}
,"default)":{"specify":1,"default":1}
,"specify":{"value":1}
,"value":{"port":1,"0.0.0.0:9888":1,"configured":1,"management":1}
,"host":{"default":1}
,"0.0.0.0:9888":{"connecting":1}
,"tsa":{"http:\u002F\u002F<host>":1}
,"server\u0027s":{"<management-port>":1}
,"<management-port>":{"element":1}
,"element":{"terracotta":1}
,"(tc-config.xml":{"default)":1}
}
;Search.control.loadWordPairs(pairs);
