const quiz = [
  {
    options: ['Gingivitis','Colitis','Hepatitis','Stomatitis'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_____ patient with colon cancer, permanent hole in abdomen, what is the hole called?',
    options: ['Colostomy','Colitis','Megacolon','Colectomy'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_____patient with chronic abdomen pains referred to digestive tract specialist.',
    options: ['Gastroenterologist','Pulmonologist','Cardiologist','Proctologist'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_____patient with lower back pain, blood in urine, usually leads to inflammation of the...',
    options: ['Kidneys','Testes,','Liver','Lungs'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_____symptoms of lower back pain, blood in urine and tests positive for kidney inflammation.',
    options: ['Nephritis','Cystititis', 'Orchiditis', 'Hepatitis'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Patient with an enlarged heart but avid marathon runner has ______.',
    options: ['Cardiomegaly','Hepatomegaly', 'Mega Millions', 'Myocarditis'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Enlarged hearts only occur with symptoms of obesity.',
    options: ['False','True'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_____ is bleeding and blood loss.',
    options: ['Hemorrhage','Hemoglobin','Hernia','Heroditus'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_____ is inflammation of the liver.',
    options: ['Hepatitus','Cancer','Appendicitus','Crohns'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_____ is the study of disease.',
    options: ['Pathology','Ethos','Ethnicity','Ascites'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_____ is a patient with right-side paralysis.',
    options: ['Right Hemiplegia','Parapesis'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_____ is a rapid heart rate.',
    options: ['Tachycardia','Asystole','Ventricular tachycardia','Cardiac Arrest'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_____ originated in the bone.',
    options: ['Osteogenic','Osteoporosis','Osteopenia','Ossteoarthritis'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'______ patient had difficulty swallowing',
    options: ['Dysphagia','Diaspora','Dystopia','Lacrimation'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_____ patient has a speech impairment.',
    options: ['Aphasia','Logorrhea','Loquacious','Diva'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Encephalitis is inflammation of the ______',
    options: ['head','ear','ears','toes'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Term for general muscle pain.',
    options: ['Myalgia','Leiomia','Leukemia','Meiosis'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Term for nerve disorder',
    options: ['Neuropathy','Pathology','Cramps','Encephalitis'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Neuropathy is a disorder of the_____.',
    options: ['Nerves','Brain','Digestive system','Muscles'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Myalgia is pain in the_____',
    options: ['Muscles','Joints','Back','Bones'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Nephrectomy removes a ________.',
    options: ['Kidney','Eye','Testicle','Finger'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Medical term for removing a kidney.',
    options: ['Nephrectomy','Pathology','Myalgia','Neuropathy'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Patient cannot move the four quadrants of the body.',
    options: ['Quadrapalegic','Parapalegic','Myalgia','Handicapped'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_____ patient has lower extremities weakness',
    options: ['Parapesis','Paraplegic','Myalgia','Fibra'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'What is paraparesis?',
    options: ['Lower extremity weakness','Cold feet','Tingling','Shallow breathing'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Atherosclerosis is the hardening of the ______.',
    options: ['Arteries','Veins','Joints','Lungs'],
    answer: 0,
  },
  {
    q:'Patient with hardening veins',
    options: ['Atherosclerosis','Scoleosis','Tuberculosis','Cardiac Arrest'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'_______ is a spinal condition.',
    options: ['Spondylosis','Fibra','Nephrectomy','Neuropathy'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'______ is a suspension of breathing',
    options: ['Apnea','Sneezing','Atherosclerosis','Neuropathy'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'What system are the blood vessels in?',
    options: ['Vascular','Endocrine','Digestive','Adrenal'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'The Vascular system contains which part?',
    options: ['Blood vessels','Nerves','Brain cells','Ear canal'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Cardiomegaly is an enlarged what?',
    options: ['Heart','Skull','Hips','Ego'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'______muscles are between the ribs.',
    options: ['Intercostal','Innerstitial','Mezzanine','Meaty'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Where are the intercostal muscles located?',
    options: ['Ribs','Spine','Back','Shoulders'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Gastroenterologist specializes in diseases of what?',
    options: ['Digestive','Suggestive','Vascular','Skeletal'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Oopherectomy is the removal of the uterus and _____',
    options: ['Ovaries','Testes','Labia','Lymph nodes'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'What operation is the removal of the uterus and ovaries?',
    options: ['Oopherectomy','Hysterectomy','Vasectomy','Chemo'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Salpingitis is sterilization due to_______.',
    options: ['STI','Surgery','Hereditary','Man-made chemicals'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'A procedure that records electrical brain activity?',
    options: ['Electroencephalography','Electrocardiography', 'Electromyography, Electrophoresis'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'An epileptic patient would like a procedure to record brain activity.',
    options: ['Electroencephalography','Electrocardiography', 'Electromyography', 'Electrophoresis'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What is an x-ray of the female breasts called?',
    options: ['Mammogram','Mammography', 'Mammoplasty', 'Mammoplasia'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'______ is a black tumor of the skin.',
    options: ['Melanoma','Leukemia', 'Cyanosis', 'Hepatitis'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'______ is an overabundance of white blood cells.',
    options: ['Leukemia','Melanoma', 'Cyanosis','Broccolli'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Leuko is what color?',
    options: ['White','Black', 'Red', 'Blue'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Melano is what color?',
    options: ['Black','White','Red','Blue'],
    answer: 0,
    topic: 'Load 1',
  },
  {
    q:'Cyano is what color?',
    options: ['Blue','White','Red','Black'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_____ blueness due to cold.',
    options: ['Cyanosis','Xanthoma','Melanoma','Leukemia'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Xantho is what color?',
    options: ['Yellow','Black','Blue','White'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'A yellow tumor is called a what?',
    options: ['Xanthoma','Melanoma','Red','Leukemia'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Xanthoma is what?',
    options: ['A yellow tumor','A blue tumor','A hot DJ','Thanos brother'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What does the prefix oma mean?',
    options: ['Swelling','Small','Cute','Fat'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What is Latin for swelling?',
    options: ['oma','opa','odo','oro'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'When a tumor is malignant is it cancerous?',
    options: ['Yes','No'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'What is malignant?',
    options: ['Cancerous','Astute','Angry','Not that bad'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'What is lipoma?',
    options: ['Fat','Skinny','Angry','Emotional'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'The prefix lipo is what?',
    options: ['Fat','Skinny','Angry','Bad'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Benign is what?',
    options: ['Not life-threatening','Angry','Call your mom','Life-threatening'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Malignant and benign; which is not life-threatening?',
    options: ['Benign','Malignant'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Malignant and benign; which is life-threatening?',
    options: ['Malignant','Benign'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'What is the prefix Myo mean?',
    options: ['Muscle','Fat','Gluten-free','Yogurt'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'What is myoma?',
    options: ['Uterus tumor','Testes tumor','Cervix tumor','Angry tumor'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Are myomas cancerous?',
    options: ['No','Yes'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Are myomas and leiomyomas similar?',
    options: ['Yes','No'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'What does the prefix leio mean?',
    options: ['Smooth','Rough','Rounded','Sticky'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'What does the prefix fibra mean?',
    options: ['Fiber','Grain','Rice','Cloth'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'What is associated with myoma?',
    options: ['High estrogen','High testosterone','High cortisol','High adrenaline'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'What does the lymphatic system do?',
    options: ['Fights germs','Fights cholesterol','Fights sleep','Fights heart attacks'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Is bone marrow a part of the lymphatic system?',
    options: ['Yes','No'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Is lymphoma life-threatening?',
    options: ['Yes','No'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'Which cancer attacks the lymphatic system?',
    options: ['Lymphoma','Myoma','Melanoma','Xanthoma'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'What does the prefix carcino mean?',
    options: ['Malignant','Benign','Pretty good','Terrible'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_______ this cancer attacks the liver, kidneys and skin.',
    options: ['Carcinoma','Melanoma','Xanthoma','Myoma'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_________ this cancer attacks the bones, muscles, cartilage, and blood vessels.',
    options: ['Sarcoma','Carcinoma','Melanoma','Xanthoma'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'What does the prefix sarc mean?',
    options: ['Flesh','Kidneys','Brains','Malignant'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'What does the prefix osteo mean?',
    options: ['Bone','Benign','Brains','Malignant'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_______ is a type of bone tumor.',
    options: ['Osteoma','Carcinoma','Melanoma','Xanthoma'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_________ is a type of cartilage tumor.',
    options: ['Chondroblastoma','Osteoma','Carcinoma','Xanthoma'],
    answer: 0,
    topic: 'Load 1'
  },
  {
    q:'_________ a rare benign bone tumor.',
    options: ['Chodromyxoid fibroma','Leiomyoma','Carcinoma','Chondroblastoma'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What does the prefix endo mean?',
    options: ['Inside','Outside','Left','Heart'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What does the prefix peri mean?',
    options: ['Around','Outside','Inside','Skin'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What is perianal?',
    options: ['Around the anus,','Around the penis','Around the toes','Around the eyes'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What is endoscopy?',
    options: ['Inspect inside','Inspect the anus','Inspect for bugs','Listen for sounds'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What does the prefix circum mean?',
    options: ['Around','Inside','Outside','Skin'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What does the prefix retro mean?',
    options: ['Behind','Over','Outside','Old'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'Where is retrosternal?',
    options: ['Behind the breastbone','Behind the buttocks','Outside the buttocks','Inside the neck'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What does the prefix epi mean?',
    options: ['On top','Under the skin','Cut the skin','Behind the skin'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What is Osteoporosis?',
    options: ['Bone loss','Hearing loss','Loss of movement','Muscle loss'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What is cephalgia?',
    options: ['A headache','An earache','A muscle ache','A heart ache'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What do you have pain during cephalgia?',
    options: ['Head and neck','Under arms','Chest','Stomach'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What does the suffix algia mean?',
    options: ['Pain','Happiness','Angry','Sad'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'Where is the pain located for arthralgia?',
    options: ['Joints','Muscles','Ears','Palms'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'Where is the pain located for mastalgia?',
    options: ['Breast','Lips','Eyes','Throat'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What does the suffix dynia mean?',
    options: ['Pain','Liquid','Flushed','Manic'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What is closest to interstitial tissue?',
    options: ['Blood','Mucus','Earwax','Cartilage'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What does ECF stand for?',
    options: ['Extracellular fluid','Extracredit Funds','Extraceltos Flux','Endocentric Flux'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'What is a component of interstitial tissue?',
    options: ['Water and electrolytes','Old cells','Bacteria','Hair'],
    answer: 0,
    topic:'Load 1'
  },
  {
    q:'Opthalmoscope is an instrument to view the ______.',
    options: ['Eye','Ear','Nose','Heart'],
    answer: 0,
    topic:'Load 2'
  },
  {
    q:'What instrument do you need to view the eye?',
    options: ['Opthalmoscope','Stethoscope','Shygmomanometer','Bedpan'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'What is the membrane surrounding the heart?',
    options: ['Pericardium','Tachycardia','Cannula','Cardioverter'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'_____ is a patient with urinary bladder inflammation.',
    options: ['Cystitis','Arthritis','Myocarditis','Osteroarthritis'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'A patient with inflammation of the urinary bladder has _____',
    options: ['Cystitis','Arthritis','Synovectomy','Arthrodesis'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'Arthrodesis is _____ fusing bones together.',
    options: ['pins','stem cells','donor cartilage','webbing'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'Arthrodesis is pins or plates ______ fusing bones together.',
    options: ['permanently','temporarily','mostly','short term'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'_____ patient needs pins or plates to fuse bones together.',
    options: ['Arthrodesis','Osteotomy','Synovectomy','Vasectomy'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'_____ lining of the joint.',
    options: ['Synovium','Skin','Mucosa','Membrane'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'____ patient needs a part of bone removed from a damaged joint.',
    options: ['Osteotomy','Arthroscopy','Arthrodesis','Synovectomy'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'____ patient needs a part of the joint lining removed.',
    options: ['Synovectomy','Synovium','Arthroscopy','Arthrodesis'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'What are the symptoms that would require a Synovectomy?',
    options: ['Inflammation of the joints','Inflammation of the head','Migraines','Plantar fascitis'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'What are the symptoms that would require a Synovectomy?',
    options: ['Too much joint growth','Too little joint growth','Dislocated joint','Car crash'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'Patient has joint damage needs a _____ to remove the bone.',
    options: ['Osteotomy','Arthroscopy','Synovectomy','Hysterectomy'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'A procedure to repair damaged tissue.',
    options: ['Arthroscopy','Osteotomy','Synovectomy','Arthrodesis'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'A procedure making small cuts around a joint.',
    options: ['Arthroscopy','Osteotomy','Synovectomy','Joint replacement'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'A joint is replaced with an artificial one.',
    options: ['Joint replacement','Joint repair','Joint conditioning','Arthroscopy'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'A procedure to remove bits of cartilage or bone near a joint.',
    options: ['Arthroscopy','Arthrodesis','Osteotomy','Synovectomy'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'Does Tylenol reduce inflammation?',
    options: ['No','Yes'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'Patient needs a pain reliever that also reduces inflammation.',
    options: ['NSAIDS','Tylenol','Icy Hot','Opioids'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'NSAIDS side effects are an increase in _____',
    options: ['heart attacks','addictions','happiness','sleepiness'],
    answer: 0,
    topic: 'Load 2'
  },
  {
    q:'Which pain med causes kidney problems.',
    options: ['NSAIDS','Opioids','Topical pain relievers','Tylenol'],
    answer: 0,
    topic: 'Load 2'
  },
   {
     q:'A patient receives an injection in a joint of _____',
     options: ['corticosteroid','tylenol','ibuprophen','opioids'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Patient complains of weight gain after a corticosteroid is that a side effect?',
     options: ['Yes','No'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Patient grew a peptic ulcer after corticosteroid usage is that a side effect?',
     options: ['Yes','No'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Opioids can cause severe bleeding in the stomach.',
     options: ['Yes','No'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Which drug adjusts neurotransmitters in the brain?',
     options: ['Tricyclics','Psychedelics','Opioids','Tylenol'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What doses are lower between pain meds and antidepressants?',
     options: ['Antidepressants','Pain meds'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Which has fewer side effects antidepressants or SSRIs',
     options: ['SSRI','antidepressants'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Is sexual activity increased on antidepressants?',
     options: ['No','Yes'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What do anticonvulsants also treat?',
     options: ['Pain','Heartburn','Depression','Inflammation'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Which system is bypassed when taking a muscle relaxer?',
     ptions: ['Central Nervous','Vascular','Digestive','Skeletal'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Patient has pain at night from fibromyalgia theyd need _____',
     options: ['Muscle relaxers','Whiskey','Opioids','Tylenol'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What is TENS treatment?',
     options: ['An electrical patch','Addiction counseling','Pain meds','Surgery'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What is an SCS procedure?',
     options: ['Electric pulses to the spine','Electric pulses to the neck','Surgery','Counseling'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What occurs in an SCS procedure?',
     options: ['Implant shocks the epidural','Implant shocks the adrenal gland','Hypnosis','Implant delivers opioids'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the prefix arthro mean?',
     options: ['Joint','Upper','Lower','Green'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the suffix gram mean?',
     options: ['Record','Replace','Remove','Weight'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the suffix itis mean?',
     options: ['Inflammation','Replace','Virus','Joint'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the suffix opsy mean?',
     options: ['Way of viewing','Way of surgery','Inflammation','Record'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the suffix scopy mean?',
     options: ['Visual exam','Audio exam','Instrument','Type of doctor'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the suffix logy mean?',
     options: ['Study of','Surgery','Removal','Blood'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the prefix hyper mean?',
     options: ['More than usual','Less than usual','Contaminated','Around'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the prefix hypo mean?',
     options: ['At a loss','With too much','Something broken','An extra something'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Cardio refers to what body part?',
     options: ['Heart','Lungs','Feet','Skin'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Dermo refers to what body part?',
     options: ['Skin','Hands','Heart','Brain'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What is a biopsy?',
     options: ['Tissue sample for study','An injection','A surgery procedure','New dance move'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What is abnormal tissue called?',
     options: ['A mass','A group of cells','Disease','Hub of activity'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Lesions are only outside the body?',
     options: ['No','Yes'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Is a birthmark a lesion?',
     options: ['Yes','No'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'____ is a region where an organ or tissue has been damaged.',
     options: ['Lesion','Tissue','Skin','Life'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'____ is a skin lesion with fluid between skin layers',
     options: ['Vesicles','Nodules','Macules','Scabs'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'_____ is a skin lesion that is a solid mass.',
     options: ['Nodules','Vesicles','Macules','Numb dermis'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'_____ is a skin lesion that is flat and large.',
     options: ['Macules','Vesicles','Nodules','Tumors'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Is a tumor lesion palpable or non-palpable?',
     options: ['Palpable','Non-palpable'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What is the term for freckles?',
     options: ['Macule skin lesions','Vesicle skin lesions','Nodules','Palpable'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Patient is diabetic and develops skin lesions.',
     options: ['Its a side effect','Its an emergency','Its and STI','Its weird'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What are two common categories for lesions?',
     options: ['Malignant and benign','Inside and outside','Left and right','Tissue or bone'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What is the term for a blister?',
     options: ['Vesicle','Macule','Nodule','Puss'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the term adipose mean?',
     options: ['Fat','Head','Headache','Bone'],
     answer: 0,
     opic: 'Load 2'
   },
   {
     q:'What part is an epithelial cell?',
     options: ['Skin','Muscle','Organ','Nerve'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'The term for tailbone',
     options: ['Coccyx','Vertebrae','Coccydynia','Lumbar'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does supine describe?',
     options: ['Lying on your back','Downward dog position','Lying on your side','Too many burpees'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'_____ is when you divide the body into left and right sides',
     options: ['Transverse','Reverse','Normal','Abnormal'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'The term for backbone.',
     options: ['Vertebral column','Vertebra','Back','Not the front'],
     answer: 0,
     topic: 'Load 1'
   },
   {
     q:'This plane divides the body into upper and lower halfs.',
     options: ['Lateral','Vertebral','Subcutaneous','Transverse'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'The term for dividing the body horizontally.',
     options: ['Lateral','Transverse','Horizontal','Front'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the suffix eal mean?',
     options: ['belongs to something','does not belong to something','owes you money','parasite'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the prefix epi mean?',
     options: ['Above','Below','Within','Inside'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'____ pain the inner ear from infection.',
     options: ['Otalgia','Otaldynia','Rhinorrhea','Nodule'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the suffix -scope mean?',
     options: ['To record','To interact','To love','To sit'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the suffix pathy mean?',
     options: ['Disease','To remove','To record','To view'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the suffix penia mean?',
     options: ['Having pain','Phantom limb','Swelling','Deficiency'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the suffix ectomy mean?',
     options: ['Removal','Replacement','Renter','Parasite'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'_____ an image created from sound waves.',
     options: ['Ultrasonography','CRT','X-ray','Tomography'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What is hypertrophy?',
     options: ['Cell size increased','Cell sized decreased','Damaged cells','Diseased cells'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What is retroperitoneal?',
     options: ['Behind the abdomen','The belly button','Between the hips','Under the nipples'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'____ a muscle that carries a limb toward the body.',
     options: ['Abductor','Bendy','Midline','Pecs'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'_____ patient has shortness of breath as a symptom only.',
     options: ['Dyspnea','Eupnea','Hyperpnea','Costal'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'_____ patient has shortness of breath only when lying down.',
     options: ['Orthopnea','Dyspnea','Eupnea','Hyperpnea'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'The term for rapid breathing.',
     options: ['Tachypnea','Dyspnea','Eupnea','Orthopnea'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the prefix paro mean?',
     options: ['Make ready','Make the bed','Ready for bed','Gimme a minute'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the prefix par mean?',
     options: ['Equal','Unequal','More','Less'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What location are parathyroid glands to the thyroid?',
     options: ['Adjacent','Close by','To the right','To the left'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What location is the paraumbilicus?',
     options: ['Alongside the umbilicus','Inside the umbilicus','Over the umbilicus','Right of the umbilicus'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the term Zebra mean?',
     options: ['Think logically','Think efficiently','Think about taking a break','Get some sleep'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the prefix brady mean?',
     options: ['Slowness','Rapid','Good pace','Speech'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What is abnormally slow speech?',
     options: ['Bradylalia','Bradycardia','Bradyacusia','Tachycardia'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What is a heartbeat below 50 bpm?',
     options: ['Bradycardia','Bradylalia','Bradyacusia','Tachycardia'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Cardiomyopathy is damage to what?',
     options: ['Heart muscle layer','Heart valve','Pacemaker','Arteries'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'_____ patient has mild deafness.',
     options: ['Bradyecoia','Tachypnea','Bradylalia','Bradycardia'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'The term pericardium means?',
     options: ['Around the heart','Heartburn','Around the heart muscle','Around a heart valve'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Carditis is inflammation of the________',
     options: ['Heart','Joints','Neck','Lower back'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'Endometriosis is a disease in a womans ______',
     options: ['Menstrual cycle','Ovaries','Uterus','Mammory glands'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'_____ patient has high sugar in the blood.',
     options: ['Hyperglycemia','Hypercalcemia','Hyperactive','Tachypnea'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'_____ patient has high calcium in the blood.',
     options: ['Hypercalcemia','Hyperglycemia','Hyperactive','Tachycardia'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the prefix cortico mean?',
     options: ['Outer region','Inner region','Above','Inside'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does prefix costo mean?',
     options: ['Ribs','Knee','Shin','Heel'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the prefix crin mean?',
     options: ['Secrete','Extrude','Chop','Cut'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the prefix dys mean?',
     options: ['Difficulty','No life','Remove','Replace'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the prefix hypo mean?',
     options: ['Below normal','Above normal','Within range','Disease'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the term bilateral mean?',
     options: ['Both sides','Alternating sides','Upper half only','Left hand right foot'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the prefix ad mean?',
     options: ['Towards','Away','From','Parasite'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What is the root in a Latin word?',
     options: ['Main part','Prefix','Suffix','Vowels'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'How should you read a medical term?',
     options: ['From the suffix','From the prefix','From the bathroom','Left to right'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the root word splen mean?',
     options: ['Spleen','Liver','Lungs','Vascular'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the suffix otic mean?',
     options: ['Related to the disease','Affected by the disease','Inherited disease','Multiple process disease'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the root hyster mean?',
     options: ['Uterus','Labia','Anus','Penis'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the root enter mean?',
     options: ['Intestine','Digestive','Vascular','Skeletal'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the root neuro mean?',
     options: ['Nerves','Brains','Skull','Skin'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the root ot or oto mean?',
     options: ['Ear','Head','Nerves','Blood vessels'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the root chondr mean?',
     options: ['Cartilage','Muscles','Head','Nerves'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the root nephr mean?',
     options: ['Kidney','Liver','Blood','Heart'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the root dent mean?',
     options: ['Teeth','Mouth','Lips','Face'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the root gastr mean?',
     options: ['Stomach','Kidney','Liver','Joints'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the root cholangi mean?',
     options: ['Bile','Stomach','Liver','Kidney'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the prefix an mean?',
     options: ['Away','Towards','In love','Above'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the prefix intra mean?',
     options: ['Inside','Over','Outside','Head'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the prefix poly mean?',
     options: ['One or more','None','Multiple partners','Derivative'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the root word colo mean?',
     options: ['To strain','To mix','To add','To be happy'],
     answer: 0,
     topic:'Load 2'
   },
   {
     q:'_____ this digestive part removes water, nutrients and electrolytes from food.',
     options: ['Colon','Anus','Bladder','Intestine'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the root word chole mean?',
     options: ['Bile','Vomit','Reaction','Red'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What English word replaces the root word chole in some medical terms?',
     options: ['Gall','Bile','Yellow','Trail'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does a cholecyst refer too?',
     options: ['Gall bladder','Intestine','Green color','Red color,''],
     answer: 0,
     topic: 'Load 1'
   },
   {
     q:'What does the prefix Cirrh refer too?',
     options: ['Yellow','Green','Blue','Red'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'_____ patient has a chronic liver disease.',
     options: ['Cirrhosis','Chodromyxoid','Xanthoma','Leukemia'],
     answer: 0,
     topic: 'Load 2'
   },
   {
     q:'What does the prefix dextro mean?',
     options: ['Right side','Left side','Inside','Outside'],
     answer: 0,
     topic: 'Load 2'
   },
]
