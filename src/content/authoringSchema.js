export const AUTHORING_SCHEMA_VERSION='1.1.0';
export const AUTHORING_REQUIRED=['id','reo','meaning','level','topic','pattern','sentence','sentenceMeaning','tokens','communicativeFunction','unit'];
export const blankContentItem=()=>({id:`draft-${Date.now()}`,reo:'',meaning:'',level:1,topic:'everyday',pattern:'',sentence:'',sentenceMeaning:'',tokens:[],communicativeFunction:'',unit:'',sourceUrl:'',notes:'',status:'draft'});
export function validateAuthoringItem(item){
 const missing=AUTHORING_REQUIRED.filter(k=>item?.[k]===undefined||item?.[k]===null||item?.[k]==='');
 const tokenIssue=!Array.isArray(item?.tokens)||item.tokens.length===0;
 return {valid:missing.length===0&&!tokenIssue,missing,tokenIssue};
}
const MACRON_MAP={ā:'a',ē:'e',ī:'i',ō:'o',ū:'u',Ā:'A',Ē:'E',Ī:'I',Ō:'O',Ū:'U'};
const stripMacrons=(value='')=>value.replace(/[āēīōūĀĒĪŌŪ]/g,c=>MACRON_MAP[c]||c).toLowerCase();
const norm=(value='')=>value.trim().replace(/\s+/g,' ').toLowerCase();
const punctuation='.,?!:;';
export function qaContent(items=[],audioAssets=[]){
 const issues=[]; const add=(severity,code,item,message,detail='')=>issues.push({severity,code,id:item?.id||'',reo:item?.reo||'',message,detail});
 const ids=new Map(); items.forEach(i=>{if(ids.has(i.id))add('error','duplicate-id',i,'Duplicate content ID',`Also used by ${ids.get(i.id)}`);else ids.set(i.id,i.id)});
 const macronMap=new Map(); items.forEach(i=>{const key=stripMacrons(i.reo);if(macronMap.has(key)&&macronMap.get(key)!==i.id)add('warning','macron-collision',i,'Possible macron-sensitive duplicate',`Similar to ${macronMap.get(key)}`);else macronMap.set(key,i.id)});
 const audioIds=new Set((audioAssets||[]).map(a=>a.id));
 items.forEach(i=>{
  const base=validateAuthoringItem(i); base.missing.forEach(k=>add('error','missing-field',i,`Missing required field: ${k}`)); if(base.tokenIssue)add('error','tokenisation',i,'Tokens are missing or empty');
  if(i.sentence && Array.isArray(i.tokens)){const joined=i.tokens.join(' ').replace(/\s+([.,?!:;])/g,'$1').replace(/([¿¡])\s+/g,'$1');const a=norm(joined),b=norm(i.sentence);if(a!==b)add('error','sentence-token-mismatch',i,'Sentence does not match token sequence',`Tokens render as “${joined}”`)}
  if(i.sentence && !i.sentenceMeaning)add('error','missing-translation',i,'Sentence meaning is missing');
  if(i.status==='approved' || i.contentStatus==='approved'){if(!i.sourceUrl && !i.source?.url)add('error','approved-no-source',i,'Approved content has no source/provenance');if(i.audioItemId&&!audioIds.has(i.audioItemId))add('error','missing-audio-ref',i,'Audio reference does not exist in the audio manifest');}
  if(i.reo && /[aeiou]/i.test(i.reo) && !/[āēīōū]/i.test(i.reo) && i.reo.length>5)add('warning','macron-review',i,'No macron detected; verify orthography','This is a review signal, not proof that a macron is required.');
  if(i.sentence && i.sentence.split(/\s+/).length<2)add('warning','short-sentence',i,'Sentence is very short; confirm that it is intentional');
 });
 return {issues,counts:{error:issues.filter(x=>x.severity==='error').length,warning:issues.filter(x=>x.severity==='warning').length,info:issues.filter(x=>x.severity==='info').length},valid:!issues.some(x=>x.severity==='error')};
}
export function validateAuthoringPack(items=[]){
 const ids=items.map(x=>x.id); const duplicates=[...new Set(ids.filter((id,i)=>ids.indexOf(id)!==i))];
 const rows=items.map(validateAuthoringItem);
 return {valid:rows.every(x=>x.valid)&&duplicates.length===0,duplicates,invalid:rows.filter(x=>!x.valid).length,total:items.length};
}

