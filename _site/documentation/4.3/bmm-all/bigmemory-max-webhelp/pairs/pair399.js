var pairs =
{
"standard":{"ldap":1}
,"ldap":{"configuration":1,"server":1,"url":1,"group":1,"groups":1,"directory":1}
,"configuration":{"specify":1,"follows":1}
,"specify":{"realm":1,"correct":1}
,"realm":{"url":1}
,"url":{"<security>":1,"defined":1,"ldap:\u002F\u002Fadmin_user@server_name:server_port":1}
,"<security>":{"section":1}
,"section":{"terracotta":1}
,"terracotta":{"configuration":1,"keychain":1,"roles":1,"terracotta":1}
,"follows":{"<auth>":1}
,"<auth>":{"<realm>":1}
,"<realm>":{"com.tc.net.core.security.shiroldaprealm":1,"element":1}
,"com.tc.net.core.security.shiroldaprealm":{"<\u002Frealm>":1}
,"<\u002Frealm>":{"<url>":1}
,"<url>":{"ldap:\u002F\u002Fdirectory_manager@myldapserver:636":1,"ldap:\u002F\u002Fdizzy@172.16.254.1:636":1}
,"ldap:\u002F\u002Fdirectory_manager@myldapserver:636":{"userdntemplate=cn=%":1}
,"userdntemplate=cn=%":{"7b0":1}
,"7b0":{"ou=users":1,"ou=groups":1}
,"ou=users":{"dc=mycompany":1}
,"dc=mycompany":{"dc=com":1,"ou=groups":1}
,"dc=com":{"groupdntemplate=cn=%":1,"groupattribute=uniquemember":1,"dc=mycompany":1}
,"groupdntemplate=cn=%":{"7b0":1}
,"ou=groups":{"dc=mycompany":1,"cn=bandleaders":1}
,"groupattribute=uniquemember":{"groupbindings=bandleaders=admin":1}
,"groupbindings=bandleaders=admin":{"bandmembers=terracotta":1}
,"bandmembers=terracotta":{"<\u002Furl>":1,"maps":1}
,"<\u002Furl>":{"<user>":1}
,"<user>":{"<\u002Fuser>":1}
,"<\u002Fuser>":{"<\u002Fauth>":1}
,"<\u002Fauth>":{"note":1,"implies":1}
,"note":{"value":1}
,"value":{"<realm>":1,"uniquely":1,"groupattribute":1}
,"element":{"specify":1}
,"correct":{"class":1}
,"class":{"(or":1}
,"(or":{"shiro":1}
,"shiro":{"security":1}
,"security":{"realm)":1}
,"realm)":{"active":1}
,"active":{"directory":1}
,"directory":{"components":1,"structure":1}
,"components":{"url":1}
,"defined":{"following":1}
,"following":{"table":1,"dc=com":1}
,"table":{"component":1}
,"component":{"description":1}
,"description":{"ldap:\u002F\u002Ffor":1}
,"ldap:\u002F\u002Ffor":{"scheme":1}
,"scheme":{"either":1}
,"either":{"ldap:\u002F\u002For":1}
,"ldap:\u002F\u002For":{"ldaps:\u002F\u002Fdirectory_manager":1}
,"ldaps:\u002F\u002Fdirectory_manager":{"name":1}
,"name":{"user":1,"server":1}
,"user":{"sufficient":1,"required":1,"default":1}
,"sufficient":{"ldap":1}
,"server":{"perform":1,"ldap":1,"port":1}
,"perform":{"searches":1}
,"searches":{"user":1}
,"required":{"anonymous":1,"user\u0027s":1}
,"anonymous":{"lookups":1}
,"lookups":{"allowed":1}
,"allowed":{"user":1}
,"user\u0027s":{"password":1}
,"password":{"stored":1}
,"stored":{"terracotta":1}
,"keychain":{"using":1}
,"using":{"key":1}
,"key":{"root":1}
,"root":{"ldap":1}
,"ldap:\u002F\u002Fadmin_user@server_name:server_port":{"trailing":1}
,"trailing":{"slash":1}
,"slash":{"(\u0022\u002F\u0022)":1}
,"(\u0022\u002F\u0022)":{"server_address:server_port":1}
,"server_address:server_port":{"address":1}
,"address":{"resolvable":1}
,"resolvable":{"fully":1}
,"fully":{"qualified":1}
,"qualified":{"domain":1}
,"domain":{"name":1}
,"port":{"userdntemplate":1}
,"userdntemplate":{"specifies":1}
,"specifies":{"user-template":1,"group-template":1,"ldap":1,"mappings":1}
,"user-template":{"values":1}
,"values":{"example":1}
,"example":{"below":1,"groupbindings=bandleaders=admin":1,"<auth>":1}
,"below":{"groupdntemplate":1,"groupattribute":1,"groupbindings":1}
,"groupdntemplate":{"specifies":1}
,"group-template":{"values":1}
,"groupattribute":{"specifies":1,"musician":1}
,"group":{"attribute":1}
,"attribute":{"whose":1}
,"whose":{"value":1}
,"uniquely":{"identifies":1}
,"identifies":{"user":1}
,"default":{"uniquemember":1}
,"uniquemember":{"example":1}
,"groupbindings":{"specifies":1}
,"mappings":{"ldap":1}
,"groups":{"terracotta":1,"bandleaders":1}
,"roles":{"example":1,"respectively":1}
,"maps":{"ldap":1}
,"bandleaders":{"bandmembers":1}
,"bandmembers":{"admin":1}
,"admin":{"terracotta":1}
,"respectively":{"example":1}
,"ldap:\u002F\u002Fdizzy@172.16.254.1:636":{"userdntemplate=cn=%":1}
,"implies":{"ldap":1}
,"structure":{"similar":1}
,"similar":{"following":1}
,"cn=bandleaders":{"uniquemember=dizzy":1,"uniquemember=art":1,"musician=dizzy":1,"musician=art":1}
,"uniquemember=dizzy":{"uniquemember=duke":1}
,"uniquemember=duke":{"cn=bandleaders":1}
,"uniquemember=art":{"uniquemember=bird":1}
,"uniquemember=bird":{"however":1}
,"however":{"ldap":1}
,"musician=dizzy":{"musician=duke":1}
,"musician=duke":{"cn=bandleaders":1}
,"musician=art":{"musician=bird":1}
,"musician=bird":{"value":1}
}
;Search.control.loadWordPairs(pairs);
