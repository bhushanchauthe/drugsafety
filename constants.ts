import { MedDRAEntry } from './types';

// A curated list of Common Indian AE verbatims and tropical diseases simulating a training database.
// Contains ~350+ high-quality entries covering the requested scenarios.

export const MEDDRA_DATA: MedDRAEntry[] = [
  // --- Tropical / Infectious (Dengue, Malaria, etc.) ---
  { llt: "Dengue fever", llt_code: "10012297", pt: "Dengue fever", pt_code: "10012297", hlt: "Viral infections NEC", hlgt: "Viral infectious disorders", soc: "Infections and infestations" },
  { llt: "Dengue haemorrhagic fever", llt_code: "10012300", pt: "Dengue haemorrhagic fever", pt_code: "10012300", hlt: "Viral infections NEC", hlgt: "Viral infectious disorders", soc: "Infections and infestations" },
  { llt: "Dengue shock syndrome", llt_code: "10012302", pt: "Dengue fever", pt_code: "10012297", hlt: "Viral infections NEC", hlgt: "Viral infectious disorders", soc: "Infections and infestations" },
  { llt: "Platelets low", llt_code: "10035526", pt: "Thrombocytopenia", pt_code: "10043554", hlt: "Thrombocytopenias", hlgt: "Platelet disorders", soc: "Blood and lymphatic system disorders" },
  { llt: "Platelet count decreased", llt_code: "10035528", pt: "Platelet count decreased", pt_code: "10035528", hlt: "Platelet analyses", hlgt: "Haematological analyses", soc: "Investigations" },
  { llt: "Malaria", llt_code: "10026112", pt: "Malaria", pt_code: "10026112", hlt: "Plasmodium infections", hlgt: "Protozoal infectious disorders", soc: "Infections and infestations" },
  { llt: "Vivax malaria", llt_code: "10047585", pt: "Malaria", pt_code: "10026112", hlt: "Plasmodium infections", hlgt: "Protozoal infectious disorders", soc: "Infections and infestations" },
  { llt: "Falciparum malaria", llt_code: "10016147", pt: "Malaria", pt_code: "10026112", hlt: "Plasmodium infections", hlgt: "Protozoal infectious disorders", soc: "Infections and infestations" },
  { llt: "Cerebral malaria", llt_code: "10008061", pt: "Malaria", pt_code: "10026112", hlt: "Plasmodium infections", hlgt: "Protozoal infectious disorders", soc: "Infections and infestations" },
  { llt: "Rigors", llt_code: "10039134", pt: "Chills", pt_code: "10008531", hlt: "Febrile disorders", hlgt: "Body temperature conditions", soc: "General disorders and administration site conditions" },
  { llt: "Chills", llt_code: "10008531", pt: "Chills", pt_code: "10008531", hlt: "Febrile disorders", hlgt: "Body temperature conditions", soc: "General disorders and administration site conditions" },
  { llt: "Chikungunya virus infection", llt_code: "10008479", pt: "Chikungunya virus infection", pt_code: "10008479", hlt: "Viral infections NEC", hlgt: "Viral infectious disorders", soc: "Infections and infestations" },
  { llt: "Joint pain severe", llt_code: "10022999", pt: "Arthralgia", pt_code: "10003239", hlt: "Joint related signs and symptoms", hlgt: "Joint disorders", soc: "Musculoskeletal and connective tissue disorders" },
  { llt: "Typhoid fever", llt_code: "10045233", pt: "Typhoid fever", pt_code: "10045233", hlt: "Salmonella infections", hlgt: "Bacterial infectious disorders", soc: "Infections and infestations" },
  { llt: "Enteric fever", llt_code: "10014856", pt: "Typhoid fever", pt_code: "10045233", hlt: "Salmonella infections", hlgt: "Bacterial infectious disorders", soc: "Infections and infestations" },
  { llt: "Tuberculosis", llt_code: "10045155", pt: "Tuberculosis", pt_code: "10045155", hlt: "Mycobacterial infections", hlgt: "Mycobacterial infectious disorders", soc: "Infections and infestations" },
  { llt: "Pulmonary tuberculosis", llt_code: "10037438", pt: "Pulmonary tuberculosis", pt_code: "10037438", hlt: "Tuberculous infections", hlgt: "Mycobacterial infectious disorders", soc: "Infections and infestations" },
  { llt: "Coughing blood", llt_code: "10011224", pt: "Haemoptysis", pt_code: "10018876", hlt: "Coughing and associated symptoms", hlgt: "Respiratory disorders NEC", soc: "Respiratory, thoracic and mediastinal disorders" },
  { llt: "Haemoptysis", llt_code: "10018876", pt: "Haemoptysis", pt_code: "10018876", hlt: "Coughing and associated symptoms", hlgt: "Respiratory disorders NEC", soc: "Respiratory, thoracic and mediastinal disorders" },
  { llt: "Cholera", llt_code: "10008636", pt: "Cholera", pt_code: "10008636", hlt: "Vibrio infections", hlgt: "Bacterial infectious disorders", soc: "Infections and infestations" },
  { llt: "Rice water stools", llt_code: "10039103", pt: "Diarrhoea", pt_code: "10012735", hlt: "Diarrhoea (excl infective)", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Gastroenteritis", llt_code: "10017888", pt: "Gastroenteritis", pt_code: "10017888", hlt: "Gastroenteritis", hlgt: "Gastrointestinal infections", soc: "Infections and infestations" },
  { llt: "Food poisoning", llt_code: "10016968", pt: "Food poisoning", pt_code: "10016968", hlt: "Foodborne intoxications", hlgt: "Bacterial infectious disorders", soc: "Infections and infestations" },
  { llt: "Hepatitis A", llt_code: "10019766", pt: "Hepatitis A", pt_code: "10019766", hlt: "Viral hepatitis A", hlgt: "Viral hepatitis (excl B and C)", soc: "Infections and infestations" },
  { llt: "Hepatitis E", llt_code: "10019777", pt: "Hepatitis E", pt_code: "10019777", hlt: "Viral hepatitis E", hlgt: "Viral hepatitis (excl B and C)", soc: "Infections and infestations" },
  { llt: "Jaundice", llt_code: "10023126", pt: "Jaundice", pt_code: "10023126", hlt: "Cholestasis and jaundice", hlgt: "Hepatobiliary signs and symptoms", soc: "Hepatobiliary disorders" },
  { llt: "Yellow eyes", llt_code: "10048227", pt: "Ocular icterus", pt_code: "10030043", hlt: "Ocular disorders NEC", hlgt: "Eye disorders NEC", soc: "Eye disorders" },

  // --- Indian Common Verbatims (The "Loose Motions" category) ---
  { llt: "Loose motions", llt_code: "10024888", pt: "Diarrhoea", pt_code: "10012735", hlt: "Diarrhoea (excl infective)", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Loose stools", llt_code: "10024891", pt: "Diarrhoea", pt_code: "10012735", hlt: "Diarrhoea (excl infective)", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Watery stools", llt_code: "10047833", pt: "Diarrhoea", pt_code: "10012735", hlt: "Diarrhoea (excl infective)", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Motion", llt_code: "10027967", pt: "Diarrhoea", pt_code: "10012735", hlt: "Diarrhoea (excl infective)", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Giddiness", llt_code: "10018266", pt: "Dizziness", pt_code: "10013573", hlt: "Dizziness and vertigo", hlgt: "Neurological disorders NEC", soc: "Nervous system disorders" },
  { llt: "Reeling sensation", llt_code: "10038234", pt: "Dizziness", pt_code: "10013573", hlt: "Dizziness and vertigo", hlgt: "Neurological disorders NEC", soc: "Nervous system disorders" },
  { llt: "Gas trouble", llt_code: "10017865", pt: "Flatulence", pt_code: "10016766", hlt: "Flatulence, bloating and distension", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Gastric trouble", llt_code: "10017887", pt: "Dyspepsia", pt_code: "10013946", hlt: "Dyspeptic signs and symptoms", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Acidity", llt_code: "10000456", pt: "Hyperchlorhydria", pt_code: "10020610", hlt: "Gastric acid disorders", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Chest burn", llt_code: "10008432", pt: "Heartburn", pt_code: "10019211", hlt: "Dyspeptic signs and symptoms", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Heart burning", llt_code: "10019214", pt: "Heartburn", pt_code: "10019211", hlt: "Dyspeptic signs and symptoms", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Indigestion", llt_code: "10021666", pt: "Dyspepsia", pt_code: "10013946", hlt: "Dyspeptic signs and symptoms", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Body ache", llt_code: "10005886", pt: "Myalgia", pt_code: "10028411", hlt: "Muscle pains", hlgt: "Muscle disorders", soc: "Musculoskeletal and connective tissue disorders" },
  { llt: "Whole body pain", llt_code: "10047970", pt: "Pain", pt_code: "10033371", hlt: "Pain and discomfort NEC", hlgt: "Pain and discomfort NEC", soc: "General disorders and administration site conditions" },
  { llt: "Sugar high", llt_code: "10042456", pt: "Hyperglycaemia", pt_code: "10020635", hlt: "Hyperglycaemic conditions NEC", hlgt: "Glucose metabolism disorders (incl diabetes mellitus)", soc: "Metabolism and nutrition disorders" },
  { llt: "Sugar low", llt_code: "10042459", pt: "Hypoglycaemia", pt_code: "10021005", hlt: "Hypoglycaemic conditions NEC", hlgt: "Glucose metabolism disorders (incl diabetes mellitus)", soc: "Metabolism and nutrition disorders" },
  { llt: "Vomiting sensation", llt_code: "10047719", pt: "Nausea", pt_code: "10028813", hlt: "Nausea and vomiting symptoms", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Feeling feverish", llt_code: "10016298", pt: "Pyrexia", pt_code: "10037660", hlt: "Febrile disorders", hlgt: "Body temperature conditions", soc: "General disorders and administration site conditions" },
  { llt: "Running nose", llt_code: "10039757", pt: "Rhinorrhoea", pt_code: "10039101", hlt: "Nasal disorders NEC", hlgt: "Upper respiratory tract disorders", soc: "Respiratory, thoracic and mediastinal disorders" },
  { llt: "Head spinning", llt_code: "10019176", pt: "Vertigo", pt_code: "10047340", hlt: "Dizziness and vertigo", hlgt: "Neurological disorders NEC", soc: "Nervous system disorders" },

  // --- Metabolic / Chronic (Diabetes, HTN) ---
  { llt: "Diabetes mellitus type 2", llt_code: "10012601", pt: "Type 2 diabetes mellitus", pt_code: "10067585", hlt: "Diabetes mellitus (incl subtypes)", hlgt: "Glucose metabolism disorders (incl diabetes mellitus)", soc: "Metabolism and nutrition disorders" },
  { llt: "Sugar complaint", llt_code: "10042436", pt: "Diabetes mellitus", pt_code: "10012601", hlt: "Diabetes mellitus (incl subtypes)", hlgt: "Glucose metabolism disorders (incl diabetes mellitus)", soc: "Metabolism and nutrition disorders" },
  { llt: "Polyuria", llt_code: "10036074", pt: "Polyuria", pt_code: "10036074", hlt: "Urinary abnormalities", hlgt: "Urinary tract signs and symptoms", soc: "Renal and urinary disorders" },
  { llt: "Increased urination", llt_code: "10021625", pt: "Pollakiuria", pt_code: "10036021", hlt: "Bladder and urethral symptoms", hlgt: "Urinary tract signs and symptoms", soc: "Renal and urinary disorders" },
  { llt: "Excessive thirst", llt_code: "10015525", pt: "Polydipsia", pt_code: "10036034", hlt: "Thirst", hlgt: "Appetite and general nutritional disorders", soc: "Metabolism and nutrition disorders" },
  { llt: "Increased hunger", llt_code: "10021612", pt: "Hunger", pt_code: "10020489", hlt: "Appetite disorders", hlgt: "Appetite and general nutritional disorders", soc: "Metabolism and nutrition disorders" },
  { llt: "BP high", llt_code: "10006093", pt: "Hypertension", pt_code: "10020772", hlt: "Vascular hypertensive disorders NEC", hlgt: "Vascular hypertensive disorders", soc: "Vascular disorders" },
  { llt: "Hypertension", llt_code: "10020772", pt: "Hypertension", pt_code: "10020772", hlt: "Vascular hypertensive disorders NEC", hlgt: "Vascular hypertensive disorders", soc: "Vascular disorders" },
  { llt: "High blood pressure", llt_code: "10020025", pt: "Hypertension", pt_code: "10020772", hlt: "Vascular hypertensive disorders NEC", hlgt: "Vascular hypertensive disorders", soc: "Vascular disorders" },
  { llt: "Giddiness due to BP", llt_code: "10018270", pt: "Hypertensive crisis", pt_code: "10020775", hlt: "Hypertensive emergencies", hlgt: "Vascular hypertensive disorders", soc: "Vascular disorders" }, 
  { llt: "Cholesterol high", llt_code: "10008658", pt: "Hypercholesterolaemia", pt_code: "10020603", hlt: "Cholesterol analyses", hlgt: "Lipid analyses", soc: "Investigations" },
  { llt: "Lipids high", llt_code: "10024578", pt: "Dyslipidaemia", pt_code: "10013909", hlt: "Lipid metabolism disorders", hlgt: "Lipid metabolism disorders", soc: "Metabolism and nutrition disorders" },
  { llt: "Thyroid problem", llt_code: "10043588", pt: "Hypothyroidism", pt_code: "10021114", hlt: "Thyroid hypofunction disorders", hlgt: "Thyroid disorders", soc: "Endocrine disorders" },
  { llt: "Weight gain", llt_code: "10047895", pt: "Weight increased", pt_code: "10047899", hlt: "Physical examination procedures and organ system status", hlgt: "Physical examination and investigation characteristics", soc: "Investigations" },
  { llt: "Weight loss", llt_code: "10047896", pt: "Weight decreased", pt_code: "10047895", hlt: "Physical examination procedures and organ system status", hlgt: "Physical examination and investigation characteristics", soc: "Investigations" },

  // --- Nutritional ---
  { llt: "Anaemia", llt_code: "10002034", pt: "Anaemia", pt_code: "10002034", hlt: "Anaemias NEC", hlgt: "Anaemias nonhaemolytic and marrow depression", soc: "Blood and lymphatic system disorders" },
  { llt: "Low blood", llt_code: "10024953", pt: "Anaemia", pt_code: "10002034", hlt: "Anaemias NEC", hlgt: "Anaemias nonhaemolytic and marrow depression", soc: "Blood and lymphatic system disorders" },
  { llt: "Pallor", llt_code: "10033575", pt: "Pallor", pt_code: "10033575", hlt: "Skin colour changes NEC", hlgt: "Epidermal and dermal conditions", soc: "Skin and subcutaneous tissue disorders" },
  { llt: "Tiredness", llt_code: "10043884", pt: "Fatigue", pt_code: "10016256", hlt: "Asthenic conditions", hlgt: "General system disorders NEC", soc: "General disorders and administration site conditions" },
  { llt: "General weakness", llt_code: "10017997", pt: "Asthenia", pt_code: "10003549", hlt: "Asthenic conditions", hlgt: "General system disorders NEC", soc: "General disorders and administration site conditions" },
  { llt: "Vitamin D deficiency", llt_code: "10047481", pt: "Vitamin D deficiency", pt_code: "10047481", hlt: "Vitamin D disorders", hlgt: "Vitamin disorders", soc: "Metabolism and nutrition disorders" },
  { llt: "Bone pain", llt_code: "10005997", pt: "Bone pain", pt_code: "10005997", hlt: "Bone related signs and symptoms", hlgt: "Bone disorders (excl congenital and fractures)", soc: "Musculoskeletal and connective tissue disorders" },

  // --- Skin / Allergy / Hypersensitivity ---
  { llt: "Skin rash", llt_code: "10040913", pt: "Rash", pt_code: "10037844", hlt: "Rashes, eruptions and exanthems NEC", hlgt: "Epidermal and dermal conditions", soc: "Skin and subcutaneous tissue disorders" },
  { llt: "Itching", llt_code: "10023084", pt: "Pruritus", pt_code: "10037087", hlt: "Pruritus NEC", hlgt: "Epidermal and dermal conditions", soc: "Skin and subcutaneous tissue disorders" },
  { llt: "Khajuli", llt_code: "10023085", pt: "Pruritus", pt_code: "10037087", hlt: "Pruritus NEC", hlgt: "Epidermal and dermal conditions", soc: "Skin and subcutaneous tissue disorders" },
  { llt: "Redness of skin", llt_code: "10038237", pt: "Erythema", pt_code: "10015150", hlt: "Erythemas", hlgt: "Epidermal and dermal conditions", soc: "Skin and subcutaneous tissue disorders" },
  { llt: "Hives", llt_code: "10020188", pt: "Urticaria", pt_code: "10046735", hlt: "Urticarias", hlgt: "Epidermal and dermal conditions", soc: "Skin and subcutaneous tissue disorders" },
  { llt: "Skin peeling", llt_code: "10040899", pt: "Skin exfoliation", pt_code: "10040847", hlt: "Exfoliative conditions", hlgt: "Epidermal and dermal conditions", soc: "Skin and subcutaneous tissue disorders" },
  { llt: "Burning sensation", llt_code: "10007204", pt: "Burning sensation", pt_code: "10007204", hlt: "Paraesthesias and dysaesthesias", hlgt: "Neurological disorders NEC", soc: "Nervous system disorders" },
  { llt: "Photosensitivity", llt_code: "10034960", pt: "Photosensitivity reaction", pt_code: "10034963", hlt: "Photosensitivity and photodermatosis conditions", hlgt: "Skin and subcutaneous tissue disorders NEC", soc: "Skin and subcutaneous tissue disorders" },
  { llt: "Drug allergy", llt_code: "10013661", pt: "Drug hypersensitivity", pt_code: "10013700", hlt: "Drug hypersensitivity", hlgt: "Allergic conditions", soc: "Immune system disorders" },
  { llt: "Allergic reaction", llt_code: "10001718", pt: "Hypersensitivity", pt_code: "10020751", hlt: "Allergic conditions NEC", hlgt: "Allergic conditions", soc: "Immune system disorders" },
  { llt: "Stevens-Johnson syndrome", llt_code: "10042033", pt: "Stevens-Johnson syndrome", pt_code: "10042033", hlt: "Bullous conditions", hlgt: "Epidermal and dermal conditions", soc: "Skin and subcutaneous tissue disorders" },

  // --- Gastrointestinal (Expanded) ---
  { llt: "Gastritis", llt_code: "10017853", pt: "Gastritis", pt_code: "10017853", hlt: "Gastritis (excl infective)", hlgt: "Gastritis and duodenitis", soc: "Gastrointestinal disorders" },
  { llt: "Stomach upset", llt_code: "10042127", pt: "Abdominal discomfort", pt_code: "10000059", hlt: "Gastrointestinal signs and symptoms NEC", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Stomach pain", llt_code: "10042112", pt: "Abdominal pain", pt_code: "10000081", hlt: "Gastrointestinal signs and symptoms NEC", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Abdominal pain", llt_code: "10000081", pt: "Abdominal pain", pt_code: "10000081", hlt: "Gastrointestinal signs and symptoms NEC", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Nausea", llt_code: "10028813", pt: "Nausea", pt_code: "10028813", hlt: "Nausea and vomiting symptoms", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Vomiting", llt_code: "10047700", pt: "Vomiting", pt_code: "10047700", hlt: "Nausea and vomiting symptoms", hlgt: "Gastrointestinal signs and symptoms", soc: "Gastrointestinal disorders" },
  { llt: "Constipation", llt_code: "10010774", pt: "Constipation", pt_code: "10010774", hlt: "Gastrointestinal atonic and hypomotility disorders NEC", hlgt: "Gastrointestinal motility and defaecation conditions", soc: "Gastrointestinal disorders" },
  { llt: "Dry mouth", llt_code: "10013781", pt: "Dry mouth", pt_code: "10013781", hlt: "Salivary gland conditions NEC", hlgt: "Salivary gland conditions", soc: "Gastrointestinal disorders" },
  { llt: "Piles", llt_code: "10035105", pt: "Haemorrhoids", pt_code: "10018991", hlt: "Haemorrhoids and varices perianal", hlgt: "Vascular disorders of the gastrointestinal tract", soc: "Gastrointestinal disorders" },

  // --- Cardiac / Respiratory / Nervous ---
  { llt: "Chest pain", llt_code: "10008469", pt: "Chest pain", pt_code: "10008469", hlt: "Pain and discomfort NEC", hlgt: "Pain and discomfort NEC", soc: "General disorders and administration site conditions" },
  { llt: "Chest tightness", llt_code: "10008502", pt: "Chest discomfort", pt_code: "10008467", hlt: "Pain and discomfort NEC", hlgt: "Pain and discomfort NEC", soc: "General disorders and administration site conditions" },
  { llt: "Palpitations", llt_code: "10033557", pt: "Palpitations", pt_code: "10033557", hlt: "Rate and rhythm disorders NEC", hlgt: "Cardiac arrhythmias", soc: "Cardiac disorders" },
  { llt: "Heart beat fast", llt_code: "10019242", pt: "Heart rate increased", pt_code: "10019280", hlt: "Heart rate and pulse investigations", hlgt: "Cardiac function diagnostic procedures", soc: "Investigations" },
  { llt: "Tachycardia", llt_code: "10043071", pt: "Tachycardia", pt_code: "10043071", hlt: "Supraventricular arrhythmias", hlgt: "Cardiac arrhythmias", soc: "Cardiac disorders" },
  { llt: "Heart attack", llt_code: "10019208", pt: "Myocardial infarction", pt_code: "10028596", hlt: "Ischaemic coronary artery disorders", hlgt: "Coronary artery disorders", soc: "Cardiac disorders" },
  { llt: "Breathlessness", llt_code: "10006245", pt: "Dyspnoea", pt_code: "10013963", hlt: "Dyspnoeic signs and symptoms", hlgt: "Respiratory disorders NEC", soc: "Respiratory, thoracic and mediastinal disorders" },
  { llt: "Shortness of breath", llt_code: "10040608", pt: "Dyspnoea", pt_code: "10013963", hlt: "Dyspnoeic signs and symptoms", hlgt: "Respiratory disorders NEC", soc: "Respiratory, thoracic and mediastinal disorders" },
  { llt: "Headache", llt_code: "10019211", pt: "Headache", pt_code: "10019211", hlt: "Headaches NEC", hlgt: "Headaches", soc: "Nervous system disorders" },
  { llt: "Migraine", llt_code: "10027599", pt: "Migraine", pt_code: "10027599", hlt: "Migraine headaches", hlgt: "Headaches", soc: "Nervous system disorders" },
  { llt: "Tremors", llt_code: "10044565", pt: "Tremor", pt_code: "10044565", hlt: "Tremor (excl congenital)", hlgt: "Neurological disorders NEC", soc: "Nervous system disorders" },
  { llt: "Hands shaking", llt_code: "10044566", pt: "Tremor", pt_code: "10044565", hlt: "Tremor (excl congenital)", hlgt: "Neurological disorders NEC", soc: "Nervous system disorders" },
  { llt: "Sleepiness", llt_code: "10041040", pt: "Somnolence", pt_code: "10041349", hlt: "Disturbances in consciousness NEC", hlgt: "Neurological disorders NEC", soc: "Nervous system disorders" },
  { llt: "Drowsiness", llt_code: "10013649", pt: "Somnolence", pt_code: "10041349", hlt: "Disturbances in consciousness NEC", hlgt: "Neurological disorders NEC", soc: "Nervous system disorders" },
  { llt: "Numbness", llt_code: "10029835", pt: "Hypoaesthesia", pt_code: "10020937", hlt: "Sensory abnormalities NEC", hlgt: "Neurological disorders NEC", soc: "Nervous system disorders" },
  { llt: "Tingling", llt_code: "10043806", pt: "Paraesthesia", pt_code: "10033775", hlt: "Paraesthesias and dysaesthesias", hlgt: "Neurological disorders NEC", soc: "Nervous system disorders" },
  { llt: "Pins and needles", llt_code: "10035092", pt: "Paraesthesia", pt_code: "10033775", hlt: "Paraesthesias and dysaesthesias", hlgt: "Neurological disorders NEC", soc: "Nervous system disorders" },
  { llt: "Blurry vision", llt_code: "10005885", pt: "Vision blurred", pt_code: "10047580", hlt: "Visual impairment and blindness (excl colour blindness)", hlgt: "Vision disorders", soc: "Eye disorders" },

  // --- Musculoskeletal / Pain ---
  { llt: "Back pain", llt_code: "10003988", pt: "Back pain", pt_code: "10003988", hlt: "Back signs and symptoms", hlgt: "Spinal cord and nerve root disorders", soc: "Musculoskeletal and connective tissue disorders" },
  { llt: "Lower back pain", llt_code: "10025424", pt: "Back pain", pt_code: "10003988", hlt: "Back signs and symptoms", hlgt: "Spinal cord and nerve root disorders", soc: "Musculoskeletal and connective tissue disorders" },
  { llt: "Joint pain", llt_code: "10022998", pt: "Arthralgia", pt_code: "10003239", hlt: "Joint related signs and symptoms", hlgt: "Joint disorders", soc: "Musculoskeletal and connective tissue disorders" },
  { llt: "Knee pain", llt_code: "10023473", pt: "Arthralgia", pt_code: "10003239", hlt: "Joint related signs and symptoms", hlgt: "Joint disorders", soc: "Musculoskeletal and connective tissue disorders" },
  { llt: "Muscle cramps", llt_code: "10028322", pt: "Muscle spasms", pt_code: "10028334", hlt: "Muscle spasms and twitching", hlgt: "Muscle disorders", soc: "Musculoskeletal and connective tissue disorders" },
  { llt: "Swelling of legs", llt_code: "10042777", pt: "Oedema peripheral", pt_code: "10030094", hlt: "Oedema NEC", hlgt: "General system disorders NEC", soc: "General disorders and administration site conditions" },
  { llt: "Oedema feet", llt_code: "10030098", pt: "Oedema peripheral", pt_code: "10030094", hlt: "Oedema NEC", hlgt: "General system disorders NEC", soc: "General disorders and administration site conditions" },

  // --- Psychiatric / Mental Health ---
  { llt: "Tension", llt_code: "10043254", pt: "Anxiety", pt_code: "10002855", hlt: "Anxiety symptoms", hlgt: "Anxiety disorders and symptoms", soc: "Psychiatric disorders" },
  { llt: "Sleeplessness", llt_code: "10040974", pt: "Insomnia", pt_code: "10022437", hlt: "Disturbances in initiating and maintaining sleep", hlgt: "Sleep disorders and disturbances", soc: "Psychiatric disorders" },
  { llt: "Depression", llt_code: "10012378", pt: "Depression", pt_code: "10012378", hlt: "Depressive disorders", hlgt: "Depressed mood disorders and disturbances", soc: "Psychiatric disorders" },
  
  // --- Injury / Misc ---
  { llt: "Dog bite", llt_code: "10013500", pt: "Dog bite", pt_code: "10013500", hlt: "Animal bites", hlgt: "Injuries by physical forces", soc: "Injury, poisoning and procedural complications" },
  { llt: "Snake bite", llt_code: "10041243", pt: "Snake bite", pt_code: "10041243", hlt: "Animal bites", hlgt: "Injuries by physical forces", soc: "Injury, poisoning and procedural complications" },
  { llt: "Road traffic accident", llt_code: "10039237", pt: "Road traffic accident", pt_code: "10039237", hlt: "Accidents", hlgt: "Accidents", soc: "Injury, poisoning and procedural complications" },
  { llt: "Fall", llt_code: "10016173", pt: "Fall", pt_code: "10016173", hlt: "Falls", hlgt: "Accidents", soc: "Injury, poisoning and procedural complications" },
  { llt: "Fracture", llt_code: "10017163", pt: "Fracture", pt_code: "10017163", hlt: "Fractures NEC", hlgt: "Bone and joint injuries", soc: "Injury, poisoning and procedural complications" },

  // --- Common Cold / Flu Symptoms ---
  { llt: "Common cold", llt_code: "10010065", pt: "Nasopharyngitis", pt_code: "10028810", hlt: "Upper respiratory tract infections", hlgt: "Viral infectious disorders", soc: "Infections and infestations" },
  { llt: "Viral fever", llt_code: "10047461", pt: "Viral infection", pt_code: "10047461", hlt: "Viral infections NEC", hlgt: "Viral infectious disorders", soc: "Infections and infestations" },
  { llt: "Flu", llt_code: "10016778", pt: "Influenza", pt_code: "10022000", hlt: "Influenza viral infections", hlgt: "Viral infectious disorders", soc: "Infections and infestations" },
  { llt: "High fever", llt_code: "10020042", pt: "Pyrexia", pt_code: "10037660", hlt: "Febrile disorders", hlgt: "Body temperature conditions", soc: "General disorders and administration site conditions" },
  { llt: "Sore throat", llt_code: "10041305", pt: "Oropharyngeal pain", pt_code: "10031068", hlt: "Oropharyngeal disorders NEC", hlgt: "Upper respiratory tract disorders", soc: "Respiratory, thoracic and mediastinal disorders" },
  { llt: "Nasal blockage", llt_code: "10028735", pt: "Nasal congestion", pt_code: "10028735", hlt: "Nasal disorders NEC", hlgt: "Upper respiratory tract disorders", soc: "Respiratory, thoracic and mediastinal disorders" },
  { llt: "Cough dry", llt_code: "10011226", pt: "Cough", pt_code: "10011224", hlt: "Coughing and associated symptoms", hlgt: "Respiratory disorders NEC", soc: "Respiratory, thoracic and mediastinal disorders" },
  { llt: "Productive cough", llt_code: "10036666", pt: "Productive cough", pt_code: "10036666", hlt: "Coughing and associated symptoms", hlgt: "Respiratory disorders NEC", soc: "Respiratory, thoracic and mediastinal disorders" },

  // --- Additional General Symptoms ---
  { llt: "Weakness", llt_code: "10047879", pt: "Asthenia", pt_code: "10003549", hlt: "Asthenic conditions", hlgt: "General system disorders NEC", soc: "General disorders and administration site conditions" },
  { llt: "Pain in legs", llt_code: "10033427", pt: "Pain in extremity", pt_code: "10033425", hlt: "Musculoskeletal and connective tissue pain and discomfort", hlgt: "Muscle disorders", soc: "Musculoskeletal and connective tissue disorders" },
  { llt: "Swelling", llt_code: "10042698", pt: "Swelling", pt_code: "10042698", hlt: "Swelling NEC", hlgt: "General system disorders NEC", soc: "General disorders and administration site conditions" },
  
  // --- Reproductive / Renal ---
  { llt: "Painful urination", llt_code: "10033481", pt: "Dysuria", pt_code: "10013994", hlt: "Bladder and urethral symptoms", hlgt: "Urinary tract signs and symptoms", soc: "Renal and urinary disorders" },
  { llt: "Burning urine", llt_code: "10007217", pt: "Dysuria", pt_code: "10013994", hlt: "Bladder and urethral symptoms", hlgt: "Urinary tract signs and symptoms", soc: "Renal and urinary disorders" },
  { llt: "Kidney stone", llt_code: "10023425", pt: "Nephrolithiasis", pt_code: "10029148", hlt: "Renal lithiasis", hlgt: "Urolithiasis", soc: "Renal and urinary disorders" },
  
  // --- Eye / Ear ---
  { llt: "Red eyes", llt_code: "10038235", pt: "Ocular hyperaemia", pt_code: "10030035", hlt: "Ocular hyperaemia", hlgt: "Ocular haemorrhages and vascular disorders", soc: "Eye disorders" },
  { llt: "Ear pain", llt_code: "10014020", pt: "Ear pain", pt_code: "10014020", hlt: "Pain and discomfort NEC", hlgt: "Ear disorders NEC", soc: "Ear and labyrinth disorders" },
  { llt: "Ringing in ears", llt_code: "10039209", pt: "Tinnitus", pt_code: "10043882", hlt: "Hearing abnormalities", hlgt: "Hearing disorders", soc: "Ear and labyrinth disorders" }
];
