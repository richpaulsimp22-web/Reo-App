// Stage: Curriculum Content Expansion & Authoring Pipeline
// Seed content is intentionally marked as review-ready rather than silently treated as authoritative.
// Production promotion requires human review of orthography, meaning, grammar, usage and audio provenance.
export const CONTENT_PACK_VERSION='1.0.0';
const src=(q)=>`https://maoridictionary.co.nz/search?keywords=${encodeURIComponent(q)}`;
const t=(id,reo,meaning,level,topic,pattern,sentence,sentenceMeaning,tokens,fn,unit)=>({id,reo,meaning,level,topic,emoji:'📘',pattern,sentence,sentenceMeaning,tokens,tags:[fn,unit],communicativeFunction:fn,unit,contentStatus:'review',source:{provider:'Te Aka Māori Dictionary',url:src(reo),note:'Verify source meaning, usage and permissions before production release.'}});
export const CURRICULUM_CONTENT=[
 t('cp-aroha','aroha','love / affection',1,'feelings','He + noun + tēnei','He aroha tēnei.','This is affection.',['He','aroha','tēnei','.'],'describe','feelings'),
 t('cp-hoa','hoa','friend',1,'everyday','Ko + noun + tēnei','Ko taku hoa tēnei.','This is my friend.',['Ko','taku','hoa','tēnei','.'],'identity','greetings'),
 t('cp-tamariki','tamariki','children',1,'school','He + noun + ēnei','He tamariki ēnei.','These are children.',['He','tamariki','ēnei','.'],'describe','school'),
 t('cp-ringa','ringa','hand / arm',1,'everyday','He + noun + tēnei','He ringa tēnei.','This is a hand.',['He','ringa','tēnei','.'],'describe','body'),
 t('cp-tu','Tū','stand up',1,'school','E + verb','E tū, e hoa.','Stand up, friend.',['E','tū',',','e','hoa','.'],'instruction','school'),
 t('cp-titiro','Titiro mai','look this way / look here',1,'school','Verb + mai','Titiro mai ki konei.','Look here.',['Titiro','mai','ki','konei','.'],'instruction','school'),
 t('cp-tonu','tonu','still / continuing',2,'actions','Kei te + verb + tonu','Kei te ako tonu au.','I am still learning.',['Kei','te','ako','tonu','au','.'],'persistence','routines'),
 t('cp-anō','anō','again',2,'actions','Verb + anō','Whakamātau anō.','Try again.',['Whakamātau','anō','.'],'repair','routines'),
 t('cp-nei','Kei hea ...?','Where is ...?',2,'places','Kei hea + noun?','Kei hea te pukapuka?','Where is the book?',['Kei','hea','te','pukapuka','?'],'question','questions'),
 t('cp-hea','Kei hea au?','Where am I?',2,'places','Kei hea + subject?','Kei hea au?','Where am I?',['Kei','hea','au','?'],'question','questions'),
 t('cp-rā','āpōpō','tomorrow',2,'everyday','A + time + clause','Āpōpō, ka haere au.','Tomorrow, I will go.',['Āpōpō',',','ka','haere','au','.'],'time','routines'),
 t('cp-ināianei','ināianei','now',2,'everyday','Ināianei + clause','Kei te mahi au ināianei.','I am working now.',['Kei','te','mahi','au','ināianei','.'],'time','routines'),
 t('cp-me','Me haere','should go / let’s go',2,'everyday','Me + verb','Me haere tātou.','We should go.',['Me','haere','tātou','.'],'recommendation','routines'),
 t('cp-engari','engari','but',3,'everyday','Clause + engari + clause','He pai, engari he uaua.','It is good, but it is difficult.',['He','pai',',','engari','he','uaua','.'],'contrast','connections'),
 t('cp-noho','Nōku te ...','The ... belongs to me',3,'everyday','Nōku + noun','Nōku te pukapuka.','The book is mine.',['Nōku','te','pukapuka','.'],'possession','connections'),
 t('cp-na','Nā te mea','because',3,'everyday','Nā te mea + clause','Ka haere au nā te mea kei te tatari ia.','I will go because they are waiting.',['Ka','haere','au','nā','te','mea','kei','te','tatari','ia','.'],'reason','connections'),
 t('cp-nohoia','Me noho tātou','we should stay',3,'places','Me + verb + subject','Me noho tātou ki konei.','We should stay here.',['Me','noho','tātou','ki','konei','.'],'recommendation','connections'),
 t('cp-ahakoa','Ahakoa','although / even though',4,'everyday','Ahakoa + clause, clause','Ahakoa he uaua, ka whakamātau tonu au.','Although it is difficult, I will keep trying.',['Ahakoa','he','uaua',',','ka','whakamātau','tonu','au','.'],'contrast','discourse'),
 t('cp-mēnā','Mēnā','if',4,'everyday','Mēnā + clause, clause','Mēnā ka taea, ka haere au.','If possible, I will go.',['Mēnā','ka','taea',',','ka','haere','au','.'],'condition','discourse'),
 t('cp-nohoanga','Ki ōku whakaaro','in my opinion',4,'everyday','Ki ōku whakaaro + clause','Ki ōku whakaaro, me ako tonu tātou.','In my opinion, we should keep learning.',['Ki','ōku','whakaaro',',','me','ako','tonu','tātou','.'],'opinion','discourse'),
 t('cp-tino','tino','very / really',4,'feelings','tino + adjective','He tino pai tēnei.','This is very good.',['He','tino','pai','tēnei','.'],'intensify','discourse'),
 t('cp-heoi','heoi anō','however / nevertheless',4,'everyday','Clause + heoi anō + clause','He uaua, heoi anō ka whakamātau tonu au.','It is difficult; nevertheless, I will keep trying.',['He','uaua',',','heoi','anō','ka','whakamātau','tonu','au','.'],'contrast','discourse'),
];
