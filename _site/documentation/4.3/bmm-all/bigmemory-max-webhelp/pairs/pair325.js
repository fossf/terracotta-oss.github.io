var pairs =
{
"backup":{"status":1,"operations":1,"utility":1}
,"status":{"(backup-status)":1,"executed":1}
,"(backup-status)":{"backup-status":1}
,"backup-status":{"script":1}
,"script":{"run":1,"complements":1,"takes":1}
,"run":{"tools\u002Fmanagement-console\u002Fbin":1}
,"tools\u002Fmanagement-console\u002Fbin":{"directory":1}
,"directory":{"script":1}
,"complements":{"backup-data":1}
,"backup-data":{"utility":1,"details":1}
,"utility":{"checking":1,"(backup-data)":1}
,"checking":{"status":1}
,"executed":{"backups":1}
,"backups":{"specified":1}
,"specified":{"cluster":1}
,"cluster":{"example":1}
,"example":{"return":1}
,"return":{"list":1}
,"list":{"backup":1}
,"operations":{"agent":1}
,"agent":{"myclusteragent":1}
,"myclusteragent":{"[prompt]":1,"backup-status":1}
,"[prompt]":{"${bigmemory_home}\u002Ftools\u002Fmanagement-console\u002Fbin\u002Fbackup-status":1}
,"${bigmemory_home}\u002Ftools\u002Fmanagement-console\u002Fbin\u002Fbackup-status":{"\u00A0-l":1}
,"\u00A0-l":{"http:\u002F\u002Fmytmshost:9889":1}
,"http:\u002F\u002Fmytmshost:9889":{"myclusteragent":1}
,"takes":{"arguments":1}
,"arguments":{"backup-data":1}
,"details":{"database":1}
,"database":{"backup":1}
}
;Search.control.loadWordPairs(pairs);
