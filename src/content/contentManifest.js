export const CONTENT_SCHEMA_VERSION='1.0.0';
export const CURRICULUM_BLUEPRINT={
  levels:[
    {level:1,id:'beginner',title:'Tīmatanga',focus:'High-frequency kupu, greetings, identity, place and simple actions',units:['greetings','places','actions','school']},
    {level:2,id:'intermediate',title:'Waenga',focus:'Everyday sentences, questions, routines and connected meaning',units:['kai','school','routines','questions']},
    {level:3,id:'advanced',title:'Māhuri',focus:'Connected clauses, people, time, reasons and increasingly flexible patterns',units:['whanau','questions','time','connections']},
    {level:4,id:'fluency',title:'Matatau',focus:'Nuance, discussion, contrast, opinion and flexible kōrero',units:['discourse','persistence','opinion','conversation']},
  ],
  activitySequence:['learn','listen','choose','order','build','transform','cloze','dictation','translate','speak','grammar','match','listenOrder','conversation'],
  requiredFields:['id','reo','meaning','level','topic','sentence','sentenceMeaning','tokens','pattern'],
  audioPolicy:{primary:'native-speaker-recording',fallback:'maori-browser-voice-only',neverFallbackTo:'English TTS'},
};

export function validateItem(item){
  const missing=CURRICULUM_BLUEPRINT.requiredFields.filter(k=>item?.[k]===undefined||item?.[k]===null||item?.[k]==='');
  const tokenSentence=Array.isArray(item?.tokens)?item.tokens.join(' '):'';
  return {ok:missing.length===0,missing,tokenSentence};
}
export function validateCurriculum(items,lessons){
  const itemResults=items.map(validateItem);
  const ids=new Set(items.map(x=>x.id));
  const duplicateIds=items.map(x=>x.id).filter((id,i,a)=>a.indexOf(id)!==i);
  const brokenLessons=lessons.filter(l=>l.items.some(id=>!ids.has(id)));
  return {items:itemResults,duplicateIds:[...new Set(duplicateIds)],brokenLessons,valid:itemResults.every(x=>x.ok)&&duplicateIds.length===0&&brokenLessons.length===0};
}
