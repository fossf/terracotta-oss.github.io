var pairs =
{
"configuring":{"encrypted":1}
,"encrypted":{"server":1}
,"server":{"keychain":1}
,"keychain":{"default":1,"files":1}
,"default":{"keychain":1}
,"files":{"protect":1}
,"protect":{"stored":1}
,"stored":{"passwords":1}
,"passwords":{"using":1}
,"using":{"obfuscation":1,"property":1}
,"obfuscation":{"scheme":1,"without":1}
,"scheme":{"override":1,"explicitly":1}
,"override":{"scheme":1,"configured":1}
,"explicitly":{"naming":1}
,"naming":{"secret":1}
,"secret":{"provider":1}
,"provider":{"encryption":1,"shown":1,"-you":1,"using":1}
,"encryption":{"<secret-provider>":1}
,"<secret-provider>":{"com.terracotta.management.security.consolefetchingbackend":1}
,"com.terracotta.management.security.consolefetchingbackend":{"<\u002Fsecret-provider>":1}
,"<\u002Fsecret-provider>":{"secret":1}
,"shown":{"configuration":1}
,"configuration":{"example":1,"com.terracotta.secretprovider=com.terracotta.management.security.obfuscatingsecretproviderbackend":1}
,"example":{"above":1,"obfuscation":1}
,"above":{"overriding":1}
,"overriding":{"configured":1}
,"configured":{"secret":1}
,"-you":{"override":1}
,"property":{"com.terracotta.secretprovider":1}
,"com.terracotta.secretprovider":{"example":1}
,"without":{"changing":1}
,"changing":{"configuration":1}
}
;Search.control.loadWordPairs(pairs);