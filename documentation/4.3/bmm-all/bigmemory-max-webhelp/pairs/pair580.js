var pairs =
{
"bidirectional":{"wan":1,"unidirectional":1,"mode":1,"modes":1,"replication":1}
,"wan":{"replication":1}
,"replication":{"bigmemory":1,"service":1,"modes":1,"master":1}
,"bigmemory":{"wan":1}
,"service":{"offers":1}
,"offers":{"two":1}
,"two":{"replication":1,"directions":1}
,"modes":{"unidirectional":1,"section":1,"bidirectional":1}
,"unidirectional":{"bidirectional":1,"mode":1}
,"mode":{"replicates":1,"replica":1}
,"replicates":{"data":1}
,"data":{"direction":1,"two":1,"comparison":1,"bidirectional":1}
,"direction":{"master":1}
,"master":{"replica":1,"used":1,"cache\u0027s":1,"cache":1,"caches":1}
,"replica":{"used":1,"replica":1,"master":1,"caches":1}
,"used":{"active-passive":1,"active-active":1}
,"active-passive":{"deployments":1}
,"deployments":{"disaster":1,"updates":1}
,"disaster":{"recovery":1}
,"recovery":{"bidirectional":1}
,"directions":{"master":1}
,"active-active":{"deployments":1}
,"updates":{"region":1}
,"region":{"incorporated":1,"distributed":1,"communicated":1,"replica":1}
,"incorporated":{"master":1}
,"cache\u0027s":{"authoritative":1}
,"authoritative":{"data":1}
,"comparison":{"unidirectional":1}
,"section":{"replication":1}
,"caches":{"notify":1,"region":1,"determine":1}
,"notify":{"master":1}
,"cache":{"modification":1,"either":1,"element":1,"modifications":1}
,"modification":{"receive":1,"based":1}
,"receive":{"master":1}
,"either":{"applies":1,"region":1}
,"applies":{"rejects":1}
,"rejects":{"modification":1}
,"based":{"upon":1}
,"upon":{"tracking":1}
,"tracking":{"cache":1}
,"element":{"figure":1}
,"figure":{"below":1}
,"below":{"master":1}
,"distributed":{"application":1}
,"application":{"servers":1}
,"servers":{"terracotta":1,"tsa":1}
,"terracotta":{"servers":1}
,"tsa":{"cache":1}
,"modifications":{"either":1,"become":1}
,"communicated":{"orchestrators":1}
,"orchestrators":{"master":1}
,"determine":{"modifications":1}
,"become":{"part":1}
,"part":{"authoritative":1}
}
;Search.control.loadWordPairs(pairs);