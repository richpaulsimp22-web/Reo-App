export const AUDIO_SCHEMA_VERSION='1.0.0';

// Production rule: only assets with explicit provenance/licence/permission may be promoted to approved.
// URLs below are source/search destinations, not copied recordings. The app does not scrape or redistribute third-party audio.
export const AUDIO_ASSETS=[
 {id:'kiaora-headword',itemId:'kiaora',text:'Kia ora',level:1,type:'headword',status:'approved',provider:'Te Aka Māori Dictionary',speaker:'Te Aka native-speaker recording',sourceUrl:'https://maoridictionary.co.nz/search?keywords=Kia%20ora',licence:'Use subject to source/provider permission; verify before bundling',region:'General / source-specific',transcript:'Kia ora'},
 {id:'whare-headword',itemId:'whare',text:'whare',level:1,type:'headword',status:'pending',provider:'Te Aka Māori Dictionary',speaker:'',sourceUrl:'https://maoridictionary.co.nz/search?keywords=whare',licence:'Verify permission before bundling',region:'',transcript:'whare'},
 {id:'pukapuka-headword',itemId:'pukapuka',text:'pukapuka',level:1,type:'headword',status:'pending',provider:'Te Aka Māori Dictionary',speaker:'',sourceUrl:'https://maoridictionary.co.nz/search?keywords=pukapuka',licence:'Verify permission before bundling',region:'',transcript:'pukapuka'},
 {id:'kei-te-oma-sentence',itemId:'oma',text:'Kei te oma au.',level:1,type:'sentence',status:'pending',provider:'',speaker:'',sourceUrl:'',licence:'',region:'',transcript:'Kei te oma au.'},
 {id:'he-pukapuka-sentence',itemId:'pukapuka',text:'He pukapuka tēnei.',level:1,type:'sentence',status:'pending',provider:'',speaker:'',sourceUrl:'',licence:'',region:'',transcript:'He pukapuka tēnei.'},
];

export function validateAudioManifest(items){
 const missingProvenance=items.filter(x=>!x.provider||!x.sourceUrl||!x.licence||!x.transcript).length;
 const duplicateIds=items.map(x=>x.id).filter((id,i,a)=>a.indexOf(id)!==i);
 const approved=items.filter(x=>x.status==='approved').length;
 const pending=items.filter(x=>x.status!=='approved').length;
 return {valid:missingProvenance===0&&duplicateIds.length===0,missingProvenance,duplicateIds,approved,pending};
}
export function audioFor(itemId){return AUDIO_ASSETS.find(x=>x.itemId===itemId&&x.status==='approved'&&x.url)||null;}
