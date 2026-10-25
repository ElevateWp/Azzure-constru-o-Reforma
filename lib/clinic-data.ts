export interface TeamProfile { id: string; slug: string; name: string; title: string; qualifications: string; specialization: string; experienceYears: number; bio: string; philosophy: string; education: string[]; memberships: string[]; specialties: string[]; image: string; warmImage: string; }
export type DentistProfile = TeamProfile;
export interface ServiceDetail {
  slug: string; name: string; navLabel: string; tagline: string; shortDescription: string; clinicalExplanation: string; whoNeeds: string[]; benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[];
}
export interface ClinicInformation {
  name: string; legalName: string; tagline: string; primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string }; identityHighlights: string[]; schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[]; accreditations: string[];
}
export const CLINIC_INFO: ClinicInformation = {
  name: "Pedro’s Plumbing", legalName: "Pedro’s Plumbing", tagline: 'Fast, honest plumbing service for Pico Rivera and Los Angeles County.',
  primaryLocation: { street: '', suite: '', city: 'Pico Rivera', state: 'CA', postalCode: '', country: 'US', directions: 'Pico Rivera and surrounding Los Angeles County communities', landmarks: 'Serving Pico Rivera, Whittier, Downey, Montebello and nearby areas' },
  contact: { phone: '+1 562-413-0093', emergencyPhone: '+1 562-413-0093', whatsapp: '+1 562-413-0093', email: 'pedrosrepair@gmail.com', website: 'https://www.leakrepairspicorivera.com/' },
  identityHighlights: ['Licensed California contractor #1088325', '25+ years of local experience', 'Same-day response for plumbing emergencies', 'Free, upfront estimates'],
  schedule: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map((day) => ({ day, hours: '8 AM–8 PM' })),
  verifiedStats: [
    { value: 4.7, suffix: '/5', label: 'Google rating', description: 'Based on 43 customer reviews' },
    { value: 43, suffix: '', label: 'Google reviews', description: 'Customer feedback on Google' },
    { value: 25, suffix: '+', label: 'Years of experience', description: 'Serving Pico Rivera and Los Angeles County' },
  ], accreditations: ['California Contractor License #1088325', 'Fully insured'],
};
const teamId = 'pedro-grajeda';
export const DENTISTS: TeamProfile[] = [{ id: teamId, slug: 'pedro-grajeda', name: 'Pedro Grajeda', title: 'Owner & licensed plumber', qualifications: 'California License #1088325 · Fully insured', specialization: 'Residential and commercial plumbing', experienceYears: 25, bio: "Pedro Grajeda has more than 25 years of hands-on plumbing experience serving homeowners and businesses across Pico Rivera and Los Angeles County.", philosophy: 'Show up promptly, explain the work clearly, and provide honest estimates without surprise fees.', education: [], memberships: [], specialties: ['Emergency plumbing','Leak repair','Water heaters','Drain and sewer service'], image: '/images/plumbing-technician.jpg', warmImage: '/images/plumbing-repair.jpg' }];
const photos = ['/images/plumbing-technician.jpg','/images/plumbing-repair.jpg','/images/plumbing-pipes.jpg','/images/plumbing-hot-water.jpg'];
const serviceNames: [string,string,string][] = [
  ['leak-repair','Leak Repair','Find and fix plumbing leaks before a small problem grows into major water damage.'],
  ['drain-cleaning-jetting','Drain Cleaning & Jetting','Clear stubborn drain blockages with professional snaking and high-pressure water jetting.'],
  ['water-heater-services','Water Heater Services','Same-day water heater repair and installation for tank and tankless systems.'],
  ['sewer-rooter-service','Sewer & Rooter Service','Clear sewer blockages and discuss repairs or replacement for damaged sewer lines.'],
  ['emergency-plumbing','Emergency Plumbing','Call for urgent help with burst pipes, sewage backups, flooding and other plumbing emergencies.'],
  ['gas-line-repair','Gas Line Repair','Licensed gas line repair, replacement and installation for homes and businesses.'],
  ['leak-detection','Leak Detection','Locate hidden leaks behind walls or under slabs with non-invasive detection methods.'],
  ['commercial-plumbing','Commercial Plumbing','Plumbing service and maintenance for restaurants, offices, retail and other businesses.'],
];
function createService([slug,name,description]: [string,string,string], index:number): ServiceDetail {
  const situations = [`You have a ${name.toLowerCase()} issue at your home or business`, 'Water damage, a blockage, or a plumbing fixture that is not working as it should', 'You need a clear diagnosis and estimate before repair work begins'];
  return {
    slug,name,navLabel:name,tagline:`${name} in Pico Rivera and Los Angeles County.`,shortDescription:description,
    clinicalExplanation:`Pedro’s Plumbing serves homeowners and businesses in Pico Rivera and across Los Angeles County. Tell us what is happening and we will assess the issue, explain practical repair options, and provide an upfront estimate before work begins. For urgent problems, call (562) 413-0093.`,whoNeeds:situations,
    benefits:['25+ years of licensed local experience','Fast, same-day response when available','Honest, upfront estimates with no surprise fees'],
    indications:situations.map((condition)=>({condition,explanation:`Call Pedro’s Plumbing to describe the symptoms and arrange an assessment. We will explain the available options before starting the work.`})),
    procedureSteps:[
      {stepNumber:1,title:'Tell us what is happening',duration:'Call anytime',description:'Describe the plumbing issue, when it started and any signs of water damage.',clinicalDetails:'Photos or a short video can help explain the problem.'},
      {stepNumber:2,title:'Schedule a response',duration:'Same-day when available',description:'We will discuss timing and arrange a visit for your home or business.',clinicalDetails:'Emergency issues receive priority dispatch.'},
      {stepNumber:3,title:'Review the estimate',duration:'Before work begins',description:'Pedro will explain the recommended repair and provide an upfront estimate.',clinicalDetails:'You can review the scope and cost before approving the work.'},
      {stepNumber:4,title:'Complete the repair',duration:'As agreed',description:'We complete the approved work and review the result with you.',clinicalDetails:'Repair timing depends on the issue, parts and access.'},
    ],
    recoveryTimeline:[{period:'Before service',expectedSensations:'Explain the issue and share any photos that may help.',careProtocol:'If water is actively leaking, turn off the supply if it is safe to do so.'},{period:'During service',expectedSensations:'Pedro will describe the repair and answer questions.',careProtocol:'Keep the affected area accessible.'},{period:'After service',expectedSensations:'Review the completed work and any recommended follow-up.',careProtocol:'Call if you have questions about the repair.'}],
    costTransparency:{baseRange:'Free estimate before work begins.',factors:['Type and severity of the issue','Parts, materials and equipment required','Access, time and repair scope'],whatIsIncluded:['Assessment of the reported problem','Explanation of recommended work','Upfront estimate before you approve service'],note:'Pricing is confirmed after the problem has been assessed. Pedro’s Plumbing provides honest estimates with no surprise fees.'},
    beforeAfterCase:{category:name,clinicalContext:'Plumbing service photography from Pedro’s Plumbing.',beforeLabel:'Service visit',afterLabel:'Completed plumbing work',beforeImage:photos[index%photos.length],afterImage:photos[(index+1)%photos.length],timeframe:'Timing depends on the repair'},assignedDentistId:teamId,
    faqs:[{question:`What does ${name.toLowerCase()} cost?`,answer:'Contact Pedro’s Plumbing for a free estimate. The price is explained before work begins.'},{question:'Do you offer same-day service?',answer:'Same-day response is available for many calls. Call (562) 413-0093 to confirm availability for your location and issue.'},{question:'What areas do you serve?',answer:'Pedro’s Plumbing serves Pico Rivera, Whittier, Downey, Montebello, Santa Fe Springs and communities across Los Angeles County.'},{question:'How do I request service?',answer:'Call (562) 413-0093 or use the estimate request form to describe the plumbing work you need.'}],
  };
}
export const SERVICES: ServiceDetail[] = serviceNames.map(createService);
export interface EmergencyCondition { id:string; title:string; urgency:'Immediate (0–2 hours)'|'Same-Day (2–6 hours)'|'Urgent (Within 24 hours)'; symptoms:string[]; immediateAction:string[]; clinicTreatment:string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  {id:'active-pipe-leak',title:'Burst or actively leaking pipe',urgency:'Immediate (0–2 hours)',symptoms:['Water visibly leaking from a pipe','A growing wet area or sudden loss of water pressure'],immediateAction:['Keep people and belongings clear of the affected area.','If safe, turn off the water supply.','Keep clear of wet electrical equipment.'],clinicTreatment:'Call Pedro’s Plumbing at (562) 413-0093 for emergency plumbing assistance.'},
  {id:'sewer-backup',title:'Sewer backup or flooding',urgency:'Immediate (0–2 hours)',symptoms:['Wastewater backing up into a fixture','Flooding or strong sewer odors indoors'],immediateAction:['Avoid contact with wastewater.','Keep children and pets away from the affected area.','Call a licensed plumber for urgent help.'],clinicTreatment:'Call Pedro’s Plumbing at (562) 413-0093 to request an emergency response.'},
];
export interface BlogPost { slug:string; title:string; category:string; readTime:string; publishDate:string; lastUpdated:string; authorId:string; excerpt:string; leadImage:string; relatedServiceSlug:string; content:{intro:string;sections:{heading:string;body:string}[];faqs?:{question:string;answer:string}[]}; }
export const BLOG_POSTS: BlogPost[] = [
 {slug:'what-to-do-about-a-burst-pipe',title:'What to do when a pipe bursts',category:'Emergency Plumbing',readTime:'3 min read',publishDate:'2026-10-25',lastUpdated:'2026-10-25',authorId:teamId,excerpt:'A few immediate steps can limit water damage while you arrange an emergency plumbing response.',leadImage:photos[0],relatedServiceSlug:'emergency-plumbing',content:{intro:'A burst pipe can cause water damage quickly. Protect people first, stop the water if you can do so safely, and call a licensed plumber.',sections:[{heading:'Shut off the water if safe',body:'Use the nearest shutoff valve or main supply valve if you can reach it safely. Keep away from water near electrical equipment.'},{heading:'Call for help',body:'Call Pedro’s Plumbing at (562) 413-0093 and describe where the pipe has burst and how much water is escaping.'}]}},
 {slug:'signs-of-a-hidden-water-leak',title:'Signs you may have a hidden water leak',category:'Leak Detection',readTime:'3 min read',publishDate:'2026-10-25',lastUpdated:'2026-10-25',authorId:teamId,excerpt:'Unexpected damp spots, water stains and unexplained usage can be signs of a leak behind a wall or under a slab.',leadImage:photos[1],relatedServiceSlug:'leak-detection',content:{intro:'Not every leak is visible. A damp patch, recurring musty odor or unexplained water use can be a reason to arrange an inspection.',sections:[{heading:'Look for changes',body:'Note new stains, bubbling paint, damp flooring or sounds of running water when fixtures are off.'},{heading:'Arrange a professional check',body:'A plumber can use leak detection equipment to help locate the source and explain repair options.'}]}},
 {slug:'when-to-call-for-drain-cleaning',title:'When to call for professional drain cleaning',category:'Drain Cleaning',readTime:'3 min read',publishDate:'2026-10-25',lastUpdated:'2026-10-25',authorId:teamId,excerpt:'Slow drains, recurring clogs and several fixtures backing up may need a professional assessment.',leadImage:photos[2],relatedServiceSlug:'drain-cleaning-jetting',content:{intro:'A slow or blocked drain can have a simple cause, but recurring clogs may need professional equipment and assessment.',sections:[{heading:'Notice whether several drains are affected',body:'If multiple fixtures drain slowly or back up at once, the blockage may be farther along the drain or sewer line.'},{heading:'Avoid repeated chemical treatments',body:'Tell your plumber what you have already tried, and ask which cleaning method fits the blockage.'}]}},
 {slug:'repair-or-replace-a-water-heater',title:'Repair or replace a water heater?',category:'Water Heaters',readTime:'3 min read',publishDate:'2026-10-25',lastUpdated:'2026-10-25',authorId:teamId,excerpt:'A professional assessment can help you compare water heater repair and replacement options.',leadImage:photos[3],relatedServiceSlug:'water-heater-services',content:{intro:'A water heater that leaks, stops producing hot water or makes unusual sounds may need repair or replacement.',sections:[{heading:'Consider the symptoms and age',body:'Note whether the unit leaks, trips a breaker, produces inconsistent hot water or has visible corrosion.'},{heading:'Compare your options',body:'A licensed plumber can assess the unit and discuss repair cost, replacement options and installation timing.'}]}}
];
export const CUSTOMER_REVIEWS = [
 {name:'Lily Sandoval',date:'3 months ago',text:'I’ve used Pedro’s plumbing service several times and I’ve always had a great experience. Pedro is always professional, punctual and incredibly thorough. He takes the time to explain everything, does the job right the first time and never …'},
 {name:'Yubia Casillas',date:'4 months ago',text:'Gas company shut my gas off due to a leak. Called Pedro and he came out same day and took care of the leak. Very responsive, professional, and reasonably priced. He did a great job. Highly recommend.'},
 {name:'Nancy Smith',date:'6 months ago',text:'I can’t recommend Pedro’s Plumbing enough! I had a massive to-do list of repairs that I’d been putting off, and Pedro knocked them all out in record time. He was incredibly efficient, professional, and ensured every single job was done …'},
];
