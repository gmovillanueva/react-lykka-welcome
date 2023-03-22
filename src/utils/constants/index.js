export const postalRegexCode =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

export const passwordRegexCode =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/i;

export const genders = [
  'Female',
  'Male',
  'Neutral',
  'Non-Binary',
  'Transgender',
  'Two-Spirit',
  'Other',
];

export const families = [
  'Married',
  'Divorced',
  'Single',
  'In Relationship',
  'Solo Parent',
  'Widowed',
  'Two Parent (Nuclear Family)',
  'Multi-Parent',
  'Intergenerational Home',
  'Housemates',
];

export const dwellings = [
  'House',
  'Condo',
  'Walk-up',
  'Duplex',
  'Triplex',
  'Apartment',
  'Guest House',
  'Loft',
  'Studio',
  'Co-Op',
  'Cottage',
  'Other',
];

export const familyDescription = [
  'Use 5 key words to describe yourself/family/household',
  'What is your idea of a fun day?',
  'At the end of a long day, what do you need the most?',
  'What is something you are passionate about?',
  'What makes you jump out of bed in the morning?',
];

export const covidTolerance = [
  'Very Strict (Not Tolerant)',
  'Strict (A Little Tolerant)',
  'Moderately Strict (Tolerant)',
  'Not Strict (Comfortable with Risks)',
];

export const vaccinationStatus = [
  'Vaccinated - 4 Dose(s)',
  'Vaccinated - 3 Dose(s)',
  'Vaccinated - 2 Dose(s)',
  'Vaccinated - 1 Dose(s)',
  'Not Vaccinated',
];

export const dwellingType = [
  'house',
  'condo',
  'townhome',
  'apartment',
  'guest house',
  'loft',
  'duplex',
  'triplex',
  'coop',
  'subsidized housing',
  'other',
];

export const regions = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon Territory',
];

export const yesNoSelect = ['Yes', 'No', 'I do not Know'];

export const housingPreference = [
  'Co-living: Sharing a home communally',
  'Sharing a Rental',
  'Sharing Ownership',
  'A Place in the City',
  'A Place out of the City',
];

export const joinInterests = [
  'I am looking to meet other local families and grow my village.',
  'I am looking to share my home.',
  'I am looking for a home to join.',
  'I am looking for others to rent or buy a home with.',
];

export const activitiesPreference = [
  'Playdates',
  'Outings in Nature',
  'Potlucks to Build Community',
  'Meal Sharing',
  'Family Counselling',
  'Outdoor Games & Activities',
  'Creative Workshops',
  'Emotional/Communication Workshops',
  'Fun City Outings to Local Events',
  'Parenting Support',
];

export const ageRange = [
  '20-25',
  '26-30',
  '31-35',
  '36-40',
  '41-45',
  '46-50',
  '51-55',
  '56-60',
  '61-65',
  '66-70',
  '70+',
];

export const pronouns = [
  'He/Him/His/Himself',
  'She/Her/Hers/Herself',
  'They/Them/Theirs/Themselves',
  'Ze/Hir/Hirs/Hirself',
  'Xe/Xem/Xyrs/Xyrself',
  'Ey/Em/Eir/Emself',
  'Per/Per/Pers/Perself',
  'Fae/Faer/Faers/Faerself',
  'Other',
];

export const religions = [
  {
    religion: 'Not Applicable',
  },
  {
    religion: 'Abrahamites',
  },
  {
    religion: 'Abyssinian Church',
  },
  {
    religion: 'Acacians',
  },
  {
    religion: 'Academics',
  },
  {
    religion: 'Acephali',
  },
  {
    religion: 'Adamites',
  },
  {
    religion: 'Adessenarians',
  },
  {
    religion: 'Adiaphorists',
  },
  {
    religion: 'Adoptiani',
  },
  {
    religion: 'Aerians',
  },
  {
    religion: 'Aetians',
  },
  {
    religion: 'Afghans',
  },
  {
    religion: 'Agnotae',
  },
  {
    religion: 'Agonistic',
  },
  {
    religion: 'Agynians',
  },
  {
    religion: 'Albigenses',
  },
  {
    religion: 'Allenites',
  },
  {
    religion: 'Almaricians',
  },
  {
    religion: 'Alogians',
  },
  {
    religion: 'American Sect',
  },
  {
    religion: 'Ammonians',
  },
  {
    religion: 'Amsdorfians',
  },
  {
    religion: 'Anabaptists',
  },
  {
    religion: 'Anchorites',
  },
  {
    religion: 'Angelites',
  },
  {
    religion: 'Anomoeans',
  },
  {
    religion: 'Anthropomorphites',
  },
  {
    religion: 'Antiburghers',
  },
  {
    religion: 'Antinomians',
  },
  {
    religion: 'Antipaedobaptists',
  },
  {
    religion: 'Antisabbatarians',
  },
  {
    religion: 'Antitactae',
  },
  {
    religion: 'Antitrinitarians',
  },
  {
    religion: 'Appelaeans',
  },
  {
    religion: 'Aphthartodocites',
  },
  {
    religion: 'Apocaritaes',
  },
  {
    religion: 'Apollinarians',
  },
  {
    religion: 'Apostolics',
  },
  {
    religion: 'Aquarians',
  },
  {
    religion: 'Arabaci',
  },
  {
    religion: 'Archontics',
  },
  {
    religion: 'Arians',
  },
  {
    religion: 'Aristotelians',
  },
  {
    religion: 'Armenians',
  },
  {
    religion: 'Arminians',
  },
  {
    religion: 'Arnoldists',
  },
  {
    religion: 'Artemonites',
  },
  {
    religion: 'Artotyrites',
  },
  {
    religion: 'Asclepidotaeans',
  },
  {
    religion: 'Ascodogrites',
  },
  {
    religion: 'Ascodrutes',
  },
  {
    religion: 'Assideans',
  },
  {
    religion: 'Assuritans',
  },
  {
    religion: 'Athanasians',
  },
  {
    religion: 'Atheists',
  },
  {
    religion: 'Audaeans',
  },
  {
    religion: 'Augustines',
  },
  {
    religion: 'Azymitae',
  },
  {
    religion: 'Babylonians',
  },
  {
    religion: 'Baptists',
  },
  {
    religion: 'Bardesanistes',
  },
  {
    religion: 'Baarlaamites',
  },
  {
    religion: 'Basilidians',
  },
  {
    religion: 'Baxterians',
  },
  {
    religion: 'Beghards',
  },
  {
    religion: 'Behmenists',
  },
  {
    religion: 'Benedictines',
  },
  {
    religion: 'Bereans',
  },
  {
    religion: 'Berangarians',
  },
  {
    religion: 'Beryllians',
  },
  {
    religion: 'Bethlehemites',
  },
  {
    religion: 'Bezpopoftschins',
  },
  {
    religion: 'Biddelians',
  },
  {
    religion: 'Birmans',
  },
  {
    religion: 'Bogomiles',
  },
  {
    religion: 'Bohemian Brethren',
  },
  {
    religion: 'Bonosians',
  },
  {
    religion: 'Borrelists',
  },
  {
    religion: 'Bourignonists',
  },
  {
    religion: 'Bramins',
  },
  {
    religion: 'Brazilians',
  },
  {
    religion: 'Brethren & Sisters of the Free Spirit',
  },
  {
    religion: 'Brethren & Clerks',
  },
  {
    religion: 'Brownists',
  },
  {
    religion: 'Buchanites',
  },
  {
    religion: 'Buddhists',
  },
  {
    religion: 'Budneians',
  },
  {
    religion: 'Budso',
  },
  {
    religion: 'Burghers',
  },
  {
    religion: 'Cabbalists',
  },
  {
    religion: 'Cainians',
  },
  {
    religion: 'Calixtins',
  },
  {
    religion: 'Calvinists',
  },
  {
    religion: 'Cameronians',
  },
  {
    religion: 'Camisars',
  },
  {
    religion: 'Caputiati',
  },
  {
    religion: 'Carolostadians',
  },
  {
    religion: 'Carpocratians',
  },
  {
    religion: 'Cataphrygians',
  },
  {
    religion: 'Catechumens',
  },
  {
    religion: 'Catholics',
  },
  {
    religion: 'Celtes',
  },
  {
    religion: 'Cerdonians',
  },
  {
    religion: 'Cerinthians',
  },
  {
    religion: 'Chazinzarians',
  },
  {
    religion: 'Chiliasts',
  },
  {
    religion: 'Chinese',
  },
  {
    religion: 'Christians',
  },
  {
    religion: 'Christians of St. John',
  },
  {
    religion: 'Christians of St. Thomas',
  },
  {
    religion: 'Christo Sacrum',
  },
  {
    religion: 'Church of England',
  },
  {
    religion: 'Circumcellians',
  },
  {
    religion: 'Cocceians',
  },
  {
    religion: 'Colarbarsians',
  },
  {
    religion: 'Collegiates',
  },
  {
    religion: 'Colluthians',
  },
  {
    religion: 'Collyliridians',
  },
  {
    religion: 'Congregationalists',
  },
  {
    religion: 'Cononites',
  },
  {
    religion: 'Consubstantialists',
  },
  {
    religion: 'Cophts',
  },
  {
    religion: 'Cornarists',
  },
  {
    religion: 'Corrupticolae',
  },
  {
    religion: 'Crispites',
  },
  {
    religion: 'Crusaders',
  },
  {
    religion: 'Cynics',
  },
  {
    religion: 'Daleites',
  },
  {
    religion: 'Damianists',
  },
  {
    religion: 'Dancers',
  },
  {
    religion: 'Davidists',
  },
  {
    religion: 'Deists',
  },
  {
    religion: 'Destructionists',
  },
  {
    religion: 'Diaconoftschins',
  },
  {
    religion: 'Diggers',
  },
  {
    religion: 'Dimoerites',
  },
  {
    religion: 'Dissenters',
  },
  {
    religion: 'Dissidents',
  },
  {
    religion: 'Docetae',
  },
  {
    religion: 'Dominicans',
  },
  {
    religion: 'Donatists',
  },
  {
    religion: 'Dorrellites',
  },
  {
    religion: 'Dositheans',
  },
  {
    religion: 'Druids',
  },
  {
    religion: 'Duhobortsi',
  },
  {
    religion: 'Dulcinists',
  },
  {
    religion: 'Dunkers',
  },
  {
    religion: 'Dursians',
  },
  {
    religion: 'Ebionites',
  },
  {
    religion: 'Eclectics',
  },
  {
    religion: 'Effrontes',
  },
  {
    religion: 'Egyptians',
  },
  {
    religion: 'Eicetae',
  },
  {
    religion: 'Eclesaites',
  },
  {
    religion: 'Encratites',
  },
  {
    religion: 'Energici',
  },
  {
    religion: 'English Church',
  },
  {
    religion: 'Eonites',
  },
  {
    religion: 'Eoquinians',
  },
  {
    religion: 'Epefanoftshins',
  },
  {
    religion: 'Epicureans',
  },
  {
    religion: 'Episcopalians',
  },
  {
    religion: 'Erastians',
  },
  {
    religion: 'Essenes',
  },
  {
    religion: 'Ethnophrones',
  },
  {
    religion: 'Euchites',
  },
  {
    religion: 'Eudoxians',
  },
  {
    religion: 'Eunomians',
  },
  {
    religion: 'Eusebians',
  },
  {
    religion: 'Eustathians',
  },
  {
    religion: 'Eutuchites',
  },
  {
    religion: 'Eutychians',
  },
  {
    religion: 'Familists',
  },
  {
    religion: 'Farvonians',
  },
  {
    religion: 'Fifth Monarchy-Men',
  },
  {
    religion: 'Flacians',
  },
  {
    religion: 'Flagellants',
  },
  {
    religion: 'Flandrians',
  },
  {
    religion: 'Florinians',
  },
  {
    religion: 'Franciscans',
  },
  {
    religion: 'Fraticelli',
  },
  {
    religion: 'Fratres Albati',
  },
  {
    religion: 'Freethinkers',
  },
  {
    religion: 'Freethinking Christians',
  },
  {
    religion: 'Free-Willers',
  },
  {
    religion: 'French Prophets',
  },
  {
    religion: 'Friends or Quakers',
  },
  {
    religion: 'Gaianitae',
  },
  {
    religion: 'Galileans',
  },
  {
    religion: 'Gallican Church',
  },
  {
    religion: 'Gaulanites',
  },
  {
    religion: 'Gaurs',
  },
  {
    religion: 'Gazares',
  },
  {
    religion: 'Gentiles',
  },
  {
    religion: 'Gentoos',
  },
  {
    religion: 'Georgians',
  },
  {
    religion: 'Glassites',
  },
  {
    religion: 'Gnosimachi',
  },
  {
    religion: 'Gnostics',
  },
  {
    religion: 'Gortonians',
  },
  {
    religion: 'Gospellers',
  },
  {
    religion: 'Grecians',
  },
  {
    religion: 'Greek Church',
  },
  {
    religion: 'Gymnosophists',
  },
  {
    religion: 'Halcyons',
  },
  {
    religion: 'Hattemists',
  },
  {
    religion: 'Heathen',
  },
  {
    religion: 'Hebrews',
  },
  {
    religion: 'Helcesaites',
  },
  {
    religion: 'Hellenists',
  },
  {
    religion: 'Hemero-Baptists',
  },
  {
    religion: 'Henricians',
  },
  {
    religion: 'Heracleonites',
  },
  {
    religion: 'Hermogenians',
  },
  {
    religion: 'Hernhutters',
  },
  {
    religion: 'Herodians',
  },
  {
    religion: 'Heterousians',
  },
  {
    religion: 'Hieracites',
  },
  {
    religion: 'Hindoos',
  },
  {
    religion: 'Hindus',
  },
  {
    religion: 'Hoffmanists',
  },
  {
    religion: 'Homoiousians',
  },
  {
    religion: 'Hopkinsians',
  },
  {
    religion: 'Hugonots',
  },
  {
    religion: 'Humanitarians',
  },
  {
    religion: 'Husseyites',
  },
  {
    religion: 'Hussites',
  },
  {
    religion: 'Hutchinsonians',
  },
  {
    religion: 'Hypsistarii',
  },
  {
    religion: 'Jacobites',
  },
  {
    religion: 'Jansenists',
  },
  {
    religion: 'Japanese',
  },
  {
    religion: 'Jasideans',
  },
  {
    religion: 'Iconoclaste',
  },
  {
    religion: 'Jerusalem',
  },
  {
    religion: 'Jesuits',
  },
  {
    religion: 'Jews',
  },
  {
    religion: 'Ikonobortsi',
  },
  {
    religion: 'Illuminati',
  },
  {
    religion: 'Incorruptibles',
  },
  {
    religion: 'Independents',
  },
  {
    religion: 'Indians',
  },
  {
    religion: 'Indwelling Scheme',
  },
  {
    religion: 'Infidels',
  },
  {
    religion: 'Inghamites',
  },
  {
    religion: 'Invisibles',
  },
  {
    religion: 'Joachimites',
  },
  {
    religion: 'Johnsonians',
  },
  {
    religion: 'Isbraniki',
  },
  {
    religion: 'Judaizing Christians',
  },
  {
    religion: 'Jumpers',
  },
  {
    religion: 'Karaites',
  },
  {
    religion: 'Keithians',
  },
  {
    religion: 'Kilhamites',
  },
  {
    religion: 'Kirk',
  },
  {
    religion: 'Knights',
  },
  {
    religion: 'Kniperdolings',
  },
  {
    religion: 'Ktistolatrae',
  },
  {
    religion: 'Labbadists',
  },
  {
    religion: 'Lama',
  },
  {
    religion: 'Lampetians',
  },
  {
    religion: 'Latitudinarians',
  },
  {
    religion: 'Libertines',
  },
  {
    religion: 'Lollards',
  },
  {
    religion: 'Lutherans',
  },
  {
    religion: 'Macedonians',
  },
  {
    religion: 'Magdalenettes',
  },
  {
    religion: 'Magi',
  },
  {
    religion: 'Mahometans',
  },
  {
    religion: 'Manicheans',
  },
  {
    religion: 'Marceliians',
  },
  {
    religion: 'Marcionites',
  },
  {
    religion: 'Marcosians',
  },
  {
    religion: 'Maronites',
  },
  {
    religion: 'Martinists',
  },
  {
    religion: 'Martyrs',
  },
  {
    religion: 'Massalians',
  },
  {
    religion: 'Materialists',
  },
  {
    religion: 'Melatoni',
  },
  {
    religion: 'Melchites',
  },
  {
    religion: 'Melchizedeckians',
  },
  {
    religion: 'Meletians',
  },
  {
    religion: 'Menandrians',
  },
  {
    religion: 'Mendai',
  },
  {
    religion: 'Mendicants',
  },
  {
    religion: 'Mennonites',
  },
  {
    religion: 'Men of Understanding',
  },
  {
    religion: 'Methodists',
  },
  {
    religion: 'Millenarians',
  },
  {
    religion: 'Modalists',
  },
  {
    religion: 'Mohammedans',
  },
  {
    religion: 'Molinists',
  },
  {
    religion: 'Molokans',
  },
  {
    religion: 'Monks',
  },
  {
    religion: 'Monarchians',
  },
  {
    religion: 'Monophysites',
  },
  {
    religion: 'Monothelites',
  },
  {
    religion: 'Montanists',
  },
  {
    religion: 'Moravians',
  },
  {
    religion: 'Mormon',
  },
  {
    religion: 'Muggletonians',
  },
  {
    religion: 'Muslims',
  },
  {
    religion: 'Musselmans',
  },
  {
    religion: 'Mystics',
  },
  {
    religion: 'Nazarenes',
  },
  {
    religion: 'Necessarians',
  },
  {
    religion: 'Negroes (The)',
  },
  {
    religion: 'Neonomians',
  },
  {
    religion: 'Nestorians',
  },
  {
    religion: 'Netovtschins',
  },
  {
    religion: 'New Jerusalem Church',
  },
  {
    religion: 'New Platonics',
  },
  {
    religion: 'Nicolaitans',
  },
  {
    religion: 'Noetians',
  },
  {
    religion: 'Nominalists',
  },
  {
    religion: 'Non-Conformists',
  },
  {
    religion: 'Non-Denomination',
  },
  {
    religion: 'Nonjurors',
  },
  {
    religion: 'Novatians',
  },
  {
    religion: 'Novojentzi',
  },
  {
    religion: 'Nuns',
  },
  {
    religion: 'OEconomists',
  },
  {
    religion: 'Ophians',
  },
  {
    religion: 'Oratory',
  },
  {
    religion: 'Oriental Philosophy',
  },
  {
    religion: 'Origenists',
  },
  {
    religion: 'Orthodox',
  },
  {
    religion: 'Osiandrians',
  },
  {
    religion: 'Ossenians',
  },
  {
    religion: 'Pagans',
  },
  {
    religion: 'Pantheists',
  },
  {
    religion: 'Papists',
  },
  {
    religion: 'Parmenianites',
  },
  {
    religion: 'Pasaginians',
  },
  {
    religion: 'Passalorynchites',
  },
  {
    religion: 'Patriarchal religion (The)',
  },
  {
    religion: 'Patricians',
  },
  {
    religion: 'Patripassiani',
  },
  {
    religion: 'Paulians',
  },
  {
    religion: 'Paulicians',
  },
  {
    religion: 'Pedo- or Paedo-baptists',
  },
  {
    religion: 'Pelagians',
  },
  {
    religion: 'Pelew Island',
  },
  {
    religion: 'Penitents',
  },
  {
    religion: 'Pepuzians',
  },
  {
    religion: 'Peremazanoftschins',
  },
  {
    religion: 'Perfectionists',
  },
  {
    religion: 'Persees',
  },
  {
    religion: 'Petrobrussians',
  },
  {
    religion: 'Pharisees',
  },
  {
    religion: 'Philadelphian Society',
  },
  {
    religion: 'Philistines',
  },
  {
    religion: 'Philoponists',
  },
  {
    religion: 'Philosophists',
  },
  {
    religion: 'Photinians',
  },
  {
    religion: 'Phrygians',
  },
  {
    religion: 'Picards',
  },
  {
    religion: 'Pietists',
  },
  {
    religion: 'Pilgrims',
  },
  {
    religion: 'Platonists',
  },
  {
    religion: 'Plotinists',
  },
  {
    religion: 'Pneumatomachians',
  },
  {
    religion: 'Polytheists',
  },
  {
    religion: 'Pomoryans',
  },
  {
    religion: 'Popery',
  },
  {
    religion: 'Popoftchins',
  },
  {
    religion: 'Pre-Adamites',
  },
  {
    religion: 'Predestinarians',
  },
  {
    religion: 'Pre-Existents',
  },
  {
    religion: 'Presbyterians',
  },
  {
    religion: 'Priminists',
  },
  {
    religion: 'Priscillianists',
  },
  {
    religion: 'Proclianites',
  },
  {
    religion: 'Protestants',
  },
  {
    religion: 'Psatyrians',
  },
  {
    religion: 'Ptolemaites',
  },
  {
    religion: 'Puritans',
  },
  {
    religion: 'Pyrrhonists',
  },
  {
    religion: 'Pythagoreans',
  },
  {
    religion: 'Quakers',
  },
  {
    religion: 'Quartodecimani',
  },
  {
    religion: 'Quietists',
  },
  {
    religion: 'Quintilians',
  },
  {
    religion: 'Rabbinists',
  },
  {
    religion: 'Racovians',
  },
  {
    religion: 'Ranters',
  },
  {
    religion: 'Raskolniks',
  },
  {
    religion: 'Realists',
  },
  {
    religion: 'Reformed Church',
  },
  {
    religion: 'Reformers',
  },
  {
    religion: 'Refugees',
  },
  {
    religion: 'Relief Kirk',
  },
  {
    religion: 'Rellyans',
  },
  {
    religion: 'Remonstrants',
  },
  {
    religion: 'Restorationists',
  },
  {
    religion: 'Rhinsberghers',
  },
  {
    religion: 'Rogereens',
  },
  {
    religion: 'Roman Catholics',
  },
  {
    religion: 'Rosecrucians',
  },
  {
    religion: 'Russian Church',
  },
  {
    religion: 'Sabbatarians',
  },
  {
    religion: 'Sabeans',
  },
  {
    religion: 'Sabellians',
  },
  {
    religion: 'Sacophori',
  },
  {
    religion: 'Sacramentarians',
  },
  {
    religion: 'Sadducees',
  },
  {
    religion: 'Samaritans',
  },
  {
    religion: 'Sammans',
  },
  {
    religion: 'Samokrestschentsi',
  },
  {
    religion: 'Sandemanians',
  },
  {
    religion: 'Satanians',
  },
  {
    religion: 'Saturnians',
  },
  {
    religion: 'Schaites',
  },
  {
    religion: 'Schamanism',
  },
  {
    religion: 'Sceptics',
  },
  {
    religion: 'Schewenkfeldians',
  },
  {
    religion: 'Schoolmen',
  },
  {
    religion: 'Scotch Baptists',
  },
  {
    religion: 'Scotists',
  },
  {
    religion: 'Seceders',
  },
  {
    religion: 'Secunduans',
  },
  {
    religion: 'Seekers',
  },
  {
    religion: 'Seeks',
  },
  {
    religion: 'Seleucians',
  },
  {
    religion: 'Sembiani',
  },
  {
    religion: 'Semi-Arians',
  },
  {
    religion: 'Semi-Judaizers',
  },
  {
    religion: 'Semi-Pelagians',
  },
  {
    religion: 'Separates',
  },
  {
    religion: 'Serverians',
  },
  {
    religion: 'Serverites',
  },
  {
    religion: 'Servetians',
  },
  {
    religion: 'Sethians',
  },
  {
    religion: 'Shakers',
  },
  {
    religion: 'Simonians',
  },
  {
    religion: 'Simonists',
  },
  {
    religion: 'Sintoos',
  },
  {
    religion: 'Society of the Victims',
  },
  {
    religion: 'Socinians',
  },
  {
    religion: 'Soldins',
  },
  {
    religion: 'Somnites',
  },
  {
    religion: 'Soul-Sleepers',
  },
  {
    religion: 'Southcottians',
  },
  {
    religion: 'South-Sea Islanders',
  },
  {
    religion: 'Spinosists',
  },
  {
    religion: 'Stancarians',
  },
  {
    religion: 'Starobredsi',
  },
  {
    religion: 'Starovertsi',
  },
  {
    religion: 'Stoics',
  },
  {
    religion: 'Strigolniks',
  },
  {
    religion: 'Stylites',
  },
  {
    religion: 'Sublapsarians',
  },
  {
    religion: 'Sufis',
  },
  {
    religion: 'Supralapsarians',
  },
  {
    religion: 'Swedenborgians',
  },
  {
    religion: 'Synergists',
  },
  {
    religion: 'Syrian Christians',
  },
  {
    religion: 'Taborites',
  },
  {
    religion: 'Talmudists',
  },
  {
    religion: 'Tanquelinians',
  },
  {
    religion: 'Tatianites',
  },
  {
    religion: 'Templars',
  },
  {
    religion: 'Theodosians',
  },
  {
    religion: 'Theopaschites',
  },
  {
    religion: 'Thephilanthropists',
  },
  {
    religion: 'Theosophists',
  },
  {
    religion: 'Therapeutae',
  },
  {
    religion: 'Thibetians',
  },
  {
    religion: 'Thomists',
  },
  {
    religion: 'Traskites',
  },
  {
    religion: 'Triformiani',
  },
  {
    religion: 'Trinitarians',
  },
  {
    religion: 'Tritheists',
  },
  {
    religion: 'Tschernaboltsi',
  },
  {
    religion: 'Tschurslviniks',
  },
  {
    religion: 'Tunkers',
  },
  {
    religion: 'Turlupins',
  },
  {
    religion: 'Valentinians',
  },
  {
    religion: 'Vanists',
  },
  {
    religion: 'Vaudois',
  },
  {
    religion: 'Ubiquitarians',
  },
  {
    religion: 'Uckewallists',
  },
  {
    religion: 'Verschorists',
  },
  {
    religion: 'Unitarians',
  },
  {
    religion: 'Unitas Fratrum',
  },
  {
    religion: 'Universalists',
  },
  {
    religion: 'Wahabees',
  },
  {
    religion: 'Waledenses',
  },
  {
    religion: 'Waterlandians',
  },
  {
    religion: 'Welch Indians',
  },
  {
    religion: 'Welseyans',
  },
  {
    religion: 'Whitefieldites',
  },
  {
    religion: 'Wickliffites',
  },
  {
    religion: 'Wilhelminians',
  },
  {
    religion: 'Wilkinson',
  },
  {
    religion: 'Winchesterians',
  },
  {
    religion: 'Yogeys',
  },
  {
    religion: 'Zabathai Zevi',
  },
  {
    religion: 'Zabeans',
  },
  {
    religion: 'Zacheans',
  },
  {
    religion: 'Zanzalians',
  },
  {
    religion: 'Zealots',
  },
  {
    religion: 'Zuinglians',
  },
  {
    religion: 'Other',
  },
];

export const cultures = [
  {
    culture: 'Abkhazians',
  },
  {
    culture: 'Adjarians',
  },
  {
    culture: 'Afghanistan',
  },
  {
    culture: 'Afrian-American',
  },
  {
    culture: 'Afrikaners',
  },
  {
    culture: 'Afro-Brazilians',
  },
  {
    culture: 'Ainu',
  },
  {
    culture: 'Aka',
  },
  {
    culture: 'Albanians',
  },
  {
    culture: 'Algerians',
  },
  {
    culture: 'Amhara',
  },
  {
    culture: 'Andalusians',
  },
  {
    culture: 'Andhras',
  },
  {
    culture: 'Andorrans',
  },
  {
    culture: 'Angolans',
  },
  {
    culture: 'Antiguans',
  },
  {
    culture: 'Araucanians',
  },
  {
    culture: 'Argentines',
  },
  {
    culture: 'Armenians',
  },
  {
    culture: 'Asháninka',
  },
  {
    culture: 'Asmat',
  },
  {
    culture: 'Australian Aborigines',
  },
  {
    culture: 'Australians',
  },
  {
    culture: 'Austrians',
  },
  {
    culture: 'Aymara',
  },
  {
    culture: 'Azande',
  },
  {
    culture: 'Azerbaijanis',
  },
  {
    culture: 'Baganda',
  },
  {
    culture: 'Bahamians',
  },
  {
    culture: 'Bahrainis',
  },
  {
    culture: 'Bakongo',
  },
  {
    culture: 'Balinese',
  },
  {
    culture: 'Baluchi',
  },
  {
    culture: 'Bangladeshis',
  },
  {
    culture: 'Banyankole',
  },
  {
    culture: 'Barbadians',
  },
  {
    culture: 'Barbudans',
  },
  {
    culture: 'Basques',
  },
  {
    culture: 'Bedu',
  },
  {
    culture: 'Belarusans',
  },
  {
    culture: 'Belgians',
  },
  {
    culture: 'Belizeans',
  },
  {
    culture: 'Bemba',
  },
  {
    culture: 'Bengalis',
  },
  {
    culture: 'Beninese',
  },
  {
    culture: 'Bhutanese',
  },
  {
    culture: 'Bolivians',
  },
  {
    culture: 'Bosnians',
  },
  {
    culture: 'Brahui',
  },
  {
    culture: 'Brazilians',
  },
  {
    culture: 'Bretons',
  },
  {
    culture: 'Bulgarians',
  },
  {
    culture: 'Burkina Faso',
  },
  {
    culture: 'Burkinabe',
  },
  {
    culture: 'Burman',
  },
  {
    culture: 'Burmese',
  },
  {
    culture: 'Burundians',
  },
  {
    culture: 'Cambodia',
  },
  {
    culture: 'Cameroonians',
  },
  {
    culture: 'Canadians',
  },
  {
    culture: 'Cape Coloreds',
  },
  {
    culture: 'Cape Verdeans',
  },
  {
    culture: 'Castilians',
  },
  {
    culture: 'Catalans',
  },
  {
    culture: 'Central Africans',
  },
  {
    culture: 'Chadians',
  },
  {
    culture: 'Chagga',
  },
  {
    culture: 'Chakmas',
  },
  {
    culture: 'Cham',
  },
  {
    culture: 'Chechens',
  },
  {
    culture: 'Chewa and other Maravi Groups',
  },
  {
    culture: 'Chileans',
  },
  {
    culture: 'Chinese',
  },
  {
    culture: 'Chukchi',
  },
  {
    culture: 'Colombians',
  },
  {
    culture: 'Congolese',
  },
  {
    culture: 'Costa Ricans',
  },
  {
    culture: 'Cote dIvoire',
  },
  {
    culture: 'Creoles of Sierra Leone',
  },
  {
    culture: 'Croats',
  },
  {
    culture: 'Cubans',
  },
  {
    culture: 'Cunas',
  },
  {
    culture: 'Cyprus',
  },
  {
    culture: 'Czechs',
  },
  {
    culture: 'Danes',
  },
  {
    culture: 'Dinka',
  },
  {
    culture: 'Djiboutians',
  },
  {
    culture: 'Dominicans',
  },
  {
    culture: 'Dong',
  },
  {
    culture: 'Druze',
  },
  {
    culture: 'Ecuadorans',
  },
  {
    culture: 'Efe and Mbuti',
  },
  {
    culture: 'Egyptians',
  },
  {
    culture: 'Emirians',
  },
  {
    culture: 'English',
  },
  {
    culture: 'Equatorial Guineans',
  },
  {
    culture: 'Eritreans',
  },
  {
    culture: 'Estonians',
  },
  {
    culture: 'Ethiopians',
  },
  {
    culture: 'Ewenki',
  },
  {
    culture: 'Fiji',
  },
  {
    culture: 'Filipinos',
  },
  {
    culture: 'Finns',
  },
  {
    culture: 'Flemings',
  },
  {
    culture: 'French',
  },
  {
    culture: 'French Canadians',
  },
  {
    culture: 'French Guianans',
  },
  {
    culture: 'Frisians',
  },
  {
    culture: 'Fulani',
  },
  {
    culture: 'Gabonese',
  },
  {
    culture: 'Galicians',
  },
  {
    culture: 'Gambians',
  },
  {
    culture: 'Garifuna',
  },
  {
    culture: 'Georgians',
  },
  {
    culture: 'Germans',
  },
  {
    culture: 'Ghanaians',
  },
  {
    culture: 'Gikuyu',
  },
  {
    culture: 'Gonds',
  },
  {
    culture: 'Greek Cypriots',
  },
  {
    culture: 'Greeks',
  },
  {
    culture: 'Grenadians',
  },
  {
    culture: 'Guajiros',
  },
  {
    culture: 'Guaranís',
  },
  {
    culture: 'Guatemalans',
  },
  {
    culture: 'Guineans',
  },
  {
    culture: 'Gujaratis',
  },
  {
    culture: 'Gusii',
  },
  {
    culture: 'Guyanans',
  },
  {
    culture: 'Haitians',
  },
  {
    culture: 'Han',
  },
  {
    culture: 'Hausa',
  },
  {
    culture: 'Hazaras',
  },
  {
    culture: 'Herzegovina',
  },
  {
    culture: 'Hiligaynon',
  },
  {
    culture: 'Hill Tribespeople',
  },
  {
    culture: 'Hondurans',
  },
  {
    culture: 'Hungarians',
  },
  {
    culture: 'Hutu',
  },
  {
    culture: 'Iatmul',
  },
  {
    culture: 'Icelanders',
  },
  {
    culture: 'Igbo',
  },
  {
    culture: 'Ilocanos',
  },
  {
    culture: 'Indians',
  },
  {
    culture: 'Indo-Fijians',
  },
  {
    culture: 'Indonesians',
  },
  {
    culture: 'Inuit',
  },
  {
    culture: 'Iranians',
  },
  {
    culture: 'Iraqis',
  },
  {
    culture: 'Irish',
  },
  {
    culture: 'Israelis',
  },
  {
    culture: 'Italians',
  },
  {
    culture: 'Ivoirians',
  },
  {
    culture: 'Jamaicans',
  },
  {
    culture: 'Japanese',
  },
  {
    culture: 'Javanese',
  },
  {
    culture: 'Jivaro',
  },
  {
    culture: 'Jordanians',
  },
  {
    culture: 'Kalenjin',
  },
  {
    culture: 'Kammu',
  },
  {
    culture: 'Karakalpaks',
  },
  {
    culture: 'Karens',
  },
  {
    culture: 'Kayapos',
  },
  {
    culture: 'Kazaks',
  },
  {
    culture: 'Kenyans',
  },
  {
    culture: 'Khmer',
  },
  {
    culture: 'Kittitians and Nevisians',
  },
  {
    culture: 'Kurds',
  },
  {
    culture: 'Kuwaitis',
  },
  {
    culture: 'Kyrgyz',
  },
  {
    culture: 'Lao',
  },
  {
    culture: 'Laotians',
  },
  {
    culture: 'Latvians',
  },
  {
    culture: 'Lebanese',
  },
  {
    culture: 'Lesotho',
  },
  {
    culture: 'Liberians',
  },
  {
    culture: 'Libyans',
  },
  {
    culture: 'Liechtensteiners',
  },
  {
    culture: 'Lithuanians',
  },
  {
    culture: 'Luhya',
  },
  {
    culture: 'Luo',
  },
  {
    culture: 'Luxembourgers',
  },
  {
    culture: 'Maasai',
  },
  {
    culture: 'Macedonians',
  },
  {
    culture: 'Maan (Marsh Arabs)',
  },
  {
    culture: 'Malagasy',
  },
  {
    culture: 'Malawi',
  },
  {
    culture: 'Malays',
  },
  {
    culture: 'Malians',
  },
  {
    culture: 'Malinke',
  },
  {
    culture: 'Man (Manchus)',
  },
  {
    culture: 'Maori',
  },
  {
    culture: 'Marathas',
  },
  {
    culture: 'Maronites',
  },
  {
    culture: 'Mauritanians',
  },
  {
    culture: 'Maya',
  },
  {
    culture: 'Melanesians',
  },
  {
    culture: 'Melpa',
  },
  {
    culture: 'Mexicans',
  },
  {
    culture: 'Miao',
  },
  {
    culture: 'Micronesians',
  },
  {
    culture: 'Moldovans',
  },
  {
    culture: 'Monégasques',
  },
  {
    culture: 'Mongols',
  },
  {
    culture: 'Mordvins',
  },
  {
    culture: 'Moroccans',
  },
  {
    culture: 'Mossi',
  },
  {
    culture: 'Motu',
  },
  {
    culture: 'Mozambicans',
  },
  {
    culture: 'Namibians',
  },
  {
    culture: 'Nentsy',
  },
  {
    culture: 'Nepalis',
  },
  {
    culture: 'Netherlanders',
  },
  {
    culture: 'New Zealanders',
  },
  {
    culture: 'Nicaraguans',
  },
  {
    culture: 'Nigerians',
  },
  {
    culture: 'Nigeriens',
  },
  {
    culture: 'Ni-Vanuatu',
  },
  {
    culture: 'Norwegians',
  },
  {
    culture: 'Nyamwezi',
  },
  {
    culture: 'Omanis',
  },
  {
    culture: 'Oriya',
  },
  {
    culture: 'Oromos',
  },
  {
    culture: 'Páez',
  },
  {
    culture: 'Pakistanis',
  },
  {
    culture: 'Palestinians',
  },
  {
    culture: 'Pamiri',
  },
  {
    culture: 'Panamanians',
  },
  {
    culture: 'Paraguayans',
  },
  {
    culture: 'Pashtun',
  },
  {
    culture: 'Pemon',
  },
  {
    culture: 'Peruvians',
  },
  {
    culture: 'Poland',
  },
  {
    culture: 'Poles',
  },
  {
    culture: 'Polynesians',
  },
  {
    culture: 'Portuguese',
  },
  {
    culture: 'Punjabis',
  },
  {
    culture: 'Qataris',
  },
  {
    culture: 'Quechua',
  },
  {
    culture: 'Rajputs',
  },
  {
    culture: 'Republic of Korea',
  },
  {
    culture: 'Roma',
  },
  {
    culture: 'Romanians',
  },
  {
    culture: 'Russians',
  },
  {
    culture: 'Rwandans',
  },
  {
    culture: 'Salvadorans',
  },
  {
    culture: 'Sami',
  },
  {
    culture: 'Sammarinese',
  },
  {
    culture: 'Samoans',
  },
  {
    culture: 'Saudis',
  },
  {
    culture: 'Scots',
  },
  {
    culture: 'Senegalese',
  },
  {
    culture: 'Seychellois',
  },
  {
    culture: 'Shambaa',
  },
  {
    culture: 'Shans',
  },
  {
    culture: 'Sherpas',
  },
  {
    culture: 'Sierra Leone',
  },
  {
    culture: 'Sinhalese',
  },
  {
    culture: 'Slovaks',
  },
  {
    culture: 'Slovenes',
  },
  {
    culture: 'Somalis',
  },
  {
    culture: 'Songhay',
  },
  {
    culture: 'Sotho',
  },
  {
    culture: 'South Africa',
  },
  {
    culture: 'South Koreans',
  },
  {
    culture: 'Spaniards',
  },
  {
    culture: 'Sri Lanka',
  },
  {
    culture: 'St. Lucians',
  },
  {
    culture: 'St. Vincentians',
  },
  {
    culture: 'Sudanese',
  },
  {
    culture: 'Sumu and Miskito',
  },
  {
    culture: 'Sundanese',
  },
  {
    culture: 'Surinamese',
  },
  {
    culture: 'Swahili',
  },
  {
    culture: 'Swazis',
  },
  {
    culture: 'Swedes',
  },
  {
    culture: 'Swiss',
  },
  {
    culture: 'Syrians',
  },
  {
    culture: 'Tajiks',
  },
  {
    culture: 'Tamils',
  },
  {
    culture: 'Tanzanians',
  },
  {
    culture: 'Tatars',
  },
  {
    culture: 'Thai',
  },
  {
    culture: 'Tibetans',
  },
  {
    culture: 'Tigray',
  },
  {
    culture: 'Tonga',
  },
  {
    culture: 'Trinidadians and Tobagonians',
  },
  {
    culture: 'Tuareg',
  },
  {
    culture: 'Tunisians',
  },
  {
    culture: 'Turkmens',
  },
  {
    culture: 'Turks',
  },
  {
    culture: 'Tutsi',
  },
  {
    culture: 'Ugandans',
  },
  {
    culture: 'Uighurs',
  },
  {
    culture: 'Ukrainians',
  },
  {
    culture: 'United Arab Emirates',
  },
  {
    culture: 'United Kingdom',
  },
  {
    culture: 'Uruguayans',
  },
  {
    culture: 'Uzbeks',
  },
  {
    culture: 'Vanuatu',
  },
  {
    culture: 'Venezuelans',
  },
  {
    culture: 'Vietnamese',
  },
  {
    culture: 'Walloons',
  },
  {
    culture: 'Welsh',
  },
  {
    culture: 'Western Samoa',
  },
  {
    culture: 'Wolof',
  },
  {
    culture: 'Xavante',
  },
  {
    culture: 'Xhosa',
  },
  {
    culture: 'Yemenis',
  },
  {
    culture: 'Yoruba',
  },
  {
    culture: 'Zambians',
  },
  {
    culture: 'Zhuang',
  },
  {
    culture: 'Zimbabweans',
  },
  {
    culture: 'Zulu',
  },
  {
    culture: 'Other',
  },
];

export const languages = [
  {
    language: 'English',
  },
  {
    language: 'French',
  },
  {
    language: 'Abkhazian',
  },
  {
    language: 'Afar',
  },
  {
    language: 'Afrikaans',
  },
  {
    language: 'Akan',
  },
  {
    language: 'Albanian',
  },
  {
    language: 'Amharic',
  },
  {
    language: 'Arabic',
  },
  {
    language: 'Aragonese',
  },
  {
    language: 'Armenian',
  },
  {
    language: 'Assamese',
  },
  {
    language: 'Avaric',
  },
  {
    language: 'Avestan',
  },
  {
    language: 'Aymara',
  },
  {
    language: 'Azerbaijani',
  },
  {
    language: 'Bambara',
  },
  {
    language: 'Bashkir',
  },
  {
    language: 'Basque',
  },
  {
    language: 'Belarusian',
  },
  {
    language: 'Bengali',
  },
  {
    language: 'Bihari',
  },
  {
    language: 'Bislama',
  },
  {
    language: 'Bosnian',
  },
  {
    language: 'Breton',
  },
  {
    language: 'Bulgarian',
  },
  {
    language: 'Burmese',
  },
  {
    language: 'Catalan',
  },
  {
    language: 'Valencian',
  },
  {
    language: 'Central Khmer',
  },
  {
    language: 'Chamorro',
  },
  {
    language: 'Chechen',
  },
  {
    language: 'Chichewa',
  },
  {
    language: 'Chewa',
  },
  {
    language: 'Nyanja',
  },
  {
    language: 'Chinese',
  },
  {
    language: 'Church Slavonic',
  },
  {
    language: 'Old Bulgarian',
  },
  {
    language: 'Old Church Slavonic',
  },
  {
    language: 'Chuvash',
  },
  {
    language: 'Cornish',
  },
  {
    language: 'Corsican',
  },
  {
    language: 'Cree',
  },
  {
    language: 'Croatian',
  },
  {
    language: 'Czech',
  },
  {
    language: 'Danish',
  },
  {
    language: 'Divehi',
  },
  {
    language: 'Dhivehi',
  },
  {
    language: 'Maldivian',
  },
  {
    language: 'Dutch',
  },
  {
    language: 'Flemish',
  },
  {
    language: 'Dzongkha',
  },
  {
    language: 'Esperanto',
  },
  {
    language: 'Estonian',
  },
  {
    language: 'Ewe',
  },
  {
    language: 'Faroese',
  },
  {
    language: 'Fijian',
  },
  {
    language: 'Finnish',
  },
  {
    language: 'Fulah',
  },
  {
    language: 'Gaelic',
  },
  {
    language: 'Scottish Gaelic',
  },
  {
    language: 'Galician',
  },
  {
    language: 'Ganda',
  },
  {
    language: 'Georgian',
  },
  {
    language: 'German',
  },
  {
    language: 'Gikuyu, Kikuyu',
  },
  {
    language: 'Greek (Modern)',
  },
  {
    language: 'Greenlandic',
  },
  {
    language: 'Kalaallisut',
  },
  {
    language: 'Guarani',
  },
  {
    language: 'Gujarati',
  },
  {
    language: 'Haitian',
  },
  {
    language: 'Haitian Creole',
  },
  {
    language: 'Hausa',
  },
  {
    language: 'Hebrew',
  },
  {
    language: 'Herero',
  },
  {
    language: 'Hindi',
  },
  {
    language: 'Hiri Motu',
  },
  {
    language: 'Hungarian',
  },
  {
    language: 'Icelandic',
  },
  {
    language: 'Ido',
  },
  {
    language: 'Igbo',
  },
  {
    language: 'Indonesian',
  },
  {
    language: 'Interlingua',
  },
  {
    language: 'Interlingue',
  },
  {
    language: 'Inuktitut',
  },
  {
    language: 'Inupiaq',
  },
  {
    language: 'Irish',
  },
  {
    language: 'Italian',
  },
  {
    language: 'Japanese',
  },
  {
    language: 'Javanese',
  },
  {
    language: 'Kannada',
  },
  {
    language: 'Kanuri',
  },
  {
    language: 'Kashmiri',
  },
  {
    language: 'Kazakh',
  },
  {
    language: 'Kinyarwanda',
  },
  {
    language: 'Komi',
  },
  {
    language: 'Kongo',
  },
  {
    language: 'Korean',
  },
  {
    language: 'Kwanyama',
  },
  {
    language: 'Kuanyama',
  },
  {
    language: 'Kurdish',
  },
  {
    language: 'Kyrgyz',
  },
  {
    language: 'Lao',
  },
  {
    language: 'Latin',
  },
  {
    language: 'Latvian',
  },
  {
    language: 'Letzeburgesch',
  },
  {
    language: 'Luxembourgish',
  },
  {
    language: 'Limburgish',
  },
  {
    language: 'Limburgan',
  },
  {
    language: 'Limburger',
  },
  {
    language: 'Lingala',
  },
  {
    language: 'Lithuanian',
  },
  {
    language: 'Luba-Katanga',
  },
  {
    language: 'Macedonian',
  },
  {
    language: 'Malagasy',
  },
  {
    language: 'Malay',
  },
  {
    language: 'Malayalam',
  },
  {
    language: 'Maltese',
  },
  {
    language: 'Manx',
  },
  {
    language: 'Maori',
  },
  {
    language: 'Marathi',
  },
  {
    language: 'Marshallese',
  },
  {
    language: 'Moldovan',
  },
  {
    language: 'Moldavian',
  },
  {
    language: 'Romanian',
  },
  {
    language: 'Mongolian',
  },
  {
    language: 'Nauru',
  },
  {
    language: 'Navajo',
  },
  {
    language: 'Navaho',
  },
  {
    language: 'Northern Ndebele',
  },
  {
    language: 'Ndonga',
  },
  {
    language: 'Nepali',
  },
  {
    language: 'Northern Sami',
  },
  {
    language: 'Norwegian',
  },
  {
    language: 'Norwegian Bokmål',
  },
  {
    language: 'Norwegian Nynorsk',
  },
  {
    language: 'Nuosu',
  },
  {
    language: 'Sichuan Yi',
  },
  {
    language: 'Occitan (post 1500)',
  },
  {
    language: 'Ojibwa',
  },
  {
    language: 'Oriya',
  },
  {
    language: 'Oromo',
  },
  {
    language: 'Ossetian',
  },
  {
    language: 'Ossetic',
  },
  {
    language: 'Pali',
  },
  {
    language: 'Panjabi',
  },
  {
    language: 'Punjabi',
  },
  {
    language: 'Pashto',
  },
  {
    language: 'Pushto',
  },
  {
    language: 'Persian',
  },
  {
    language: 'Polish',
  },
  {
    language: 'Portuguese',
  },
  {
    language: 'Quechua',
  },
  {
    language: 'Romansh',
  },
  {
    language: 'Rundi',
  },
  {
    language: 'Russian',
  },
  {
    language: 'Samoan',
  },
  {
    language: 'Sango',
  },
  {
    language: 'Sanskrit',
  },
  {
    language: 'Sardinian',
  },
  {
    language: 'Serbian',
  },
  {
    language: 'Shona',
  },
  {
    language: 'Sindhi',
  },
  {
    language: 'Sinhala',
  },
  {
    language: 'Sinhalese',
  },
  {
    language: 'Slovak',
  },
  {
    language: 'Slovenian',
  },
  {
    language: 'Somali',
  },
  {
    language: 'Sotho (Southern)',
  },
  {
    language: 'South Ndebele',
  },
  {
    language: 'Spanish (Castilian)',
  },
  {
    language: 'Sundanese',
  },
  {
    language: 'Swahili',
  },
  {
    language: 'Swati',
  },
  {
    language: 'Swedish',
  },
  {
    language: 'Tagalog',
  },
  {
    language: 'Tahitian',
  },
  {
    language: 'Tajik',
  },
  {
    language: 'Tamil',
  },
  {
    language: 'Tatar',
  },
  {
    language: 'Telugu',
  },
  {
    language: 'Thai',
  },
  {
    language: 'Tibetan',
  },
  {
    language: 'Tigrinya',
  },
  {
    language: 'Tonga (Tonga Islands)',
  },
  {
    language: 'Tsonga',
  },
  {
    language: 'Tswana',
  },
  {
    language: 'Turkish',
  },
  {
    language: 'Turkmen',
  },
  {
    language: 'Twi',
  },
  {
    language: 'Uighur',
  },
  {
    language: 'Uyghur',
  },
  {
    language: 'Ukrainian',
  },
  {
    language: 'Urdu',
  },
  {
    language: 'Uzbek',
  },
  {
    language: 'Venda',
  },
  {
    language: 'Vietnamese',
  },
  {
    language: 'Volap_k',
  },
  {
    language: 'Walloon',
  },
  {
    language: 'Welsh',
  },
  {
    language: 'Western Frisian',
  },
  {
    language: 'Wolof',
  },
  {
    language: 'Xhosa',
  },
  {
    language: 'Yiddish',
  },
  {
    language: 'Yoruba',
  },
  {
    language: 'Zhuang',
  },
  {
    language: 'Chuang',
  },
  {
    language: 'Zulu',
  },
];

export const optionsEducation = [
  'Never Finished High School',
  'High School Diploma',
  'Trade School Diploma',
  'Bachelors Degree',
  'Masters Degree',
  'Doctorate Degree',
  'Self taught',
  'Prefer Not to Say',
];

export const optionsOccupation = [
  'Stay-at-Home Parent',
  'Employed (Full-Time)',
  'Employed (Part-Time)',
  'Self-employed',
  'Unemployed',
  'Student',
  'Working Student',
  'Retired',
];

export const optionsIncome = [
  'Under $20,000',
  '$20,000 - $40,000',
  '$40,000 - $70,000',
  '$70,000 - $100,000',
  '$100,000 - $200,000',
  '$200,000 - $300,000',
  '$300,000 + ',
];

export const optionsNoteworthy = [
  'LGBTQQIP2SAA',
  'Newly Arrived/Immigrant Family',
  'Identify as First-Nations',
  'Identify as Part of a Visible Minority',
  'Child(ren) with Special Needs',
  'Caregiver or Adult in the House with a Disability',
  'Do Not Have Support/Family in the City',
  'Foster Family',
  'Other',
  'Not Applicable',
];

export const optionsRemote = [
  'Work from Home',
  'Do Not Work from Home',
  'Study from Home',
  'Do Not Study from Home',
  'Both Study and Work from Home',
  'Do Not Study nor Work from Home',
  'Study but Do Not Work from Home',
  'Do Not Study but Work from Home',
];

export const hopes = [
  'Build community around my family',
  'Co-parenting with different role models for my kids',
  'Sharing Resources',
  'Feeling understood and supported',
  'Strength in different perspectives, tools and experience',
  'Sharing Responsibilities',
  'Someone to talk to',
  'Breaking out of the nuclear family',
  'Meal sharing',
  'Shared child care',
  'Strength in numbers',
  'Affordability',
  'The best version of our family or myself is when I’m/we’re with others',
  'Personal growth',
  'More time',
  'Family-like connection',
  'Camaraderie and solidarity',
  'Coming together to create a bigger family',
  'Family activities',
  'Homeschooling community',
  'Housing',
];

export const needs = [
  'Meal Sharing',
  'Meal Preparation',
  'Shared Child Care',
  'Support with schooling, learning or homeschooling',
  'Shopping',
  'Car Sharing',
  'House Chores',
  'Time to Work',
  'Work Parties (Eg. Cooking, canning, brewing, renovating, building, cleaning, landscaping)',
  'Presentations and open houses by different coops, collectives, co-housing and re-villageing organizations',
];

export const offers = [
  'Meal Sharing',
  'Meal preparation',
  'Shared Child care',
  'Support with schooling, learning or homeschooling',
  'Shopping',
  'Car sharing',
  'House chores - or just time to do them',
  'Time to work',
  'Work parties (Eg. Cooking, canning, brewing, renovating, building, cleaning, landscaping)',
  'Presentations and open houses by different coops, collectives, co-housing and re-villageing organizations',
];

export const emotionalSupport = [
  'Family and parent counselling',
  'Mental health resources',
  'Self-care',
  'Local playdates',
  'Parent buddy system',
  'Regular check-ins or support',
  'Discussion groups',
  'Safe sharing circles',
  'Sharing tools, skills & guidence',
  'Mentorship in sharing & community building',
  'Conflict resolution',
  'Communications skills',
  'Parenting resources',
];

export const reservationChoices = [
  'they will see where i lack as a parent',
  'they will see my kids misbehaving',
  'afraid of being judged',
  'we will have conflicts over discipline',
  'i’m afraid they will see how we fight',
  'the time and energy spent if it doesn’t work-out',
  'getting hurt if it doesn’t work-out',
  'the time to coordinate it',
  'the commitment',
  'worried about keeping healthy bounderies',
  'not having a clear agreement',
  'that sharing isn’t possible on the long-term and will eventually break-down',
  'conflict and uncomfortable conversations',
  'imbalance in our economic situation',
  'afraid we need too much',
  'afraid of asking for help',
  'afraid that we’re spread too thin and can’t help others',
  'we have so much to give, we’re afraid that another family won’t reciprocate',
  'i am afraid that this could disrupt my relationship with my partner or my ex-partner',
  'i’m afraid i will lose control or my place',
  'we’re messy and disorganized',
  'not being able to be myself or ourselves',
  'we’re neat, orderly and a bit uptight about our environment',
  'i’m afraid of issues around property and if things get damaged',
  'alot of time and searching before we click with another family',
  'there may be cultural barriers',
  'there may be economic barriers or having to keep up',
  'my temper or impatience',
  'how to integrate this into our already tight schedule',
  'conflict around lifestyle: bedtimes, screen time, eating habits',
  'mental health, special needs or learning disabilities in our family being revealed or misunderstood',
  'battles with addiction (drugs, alcohol, screens, food, shopping, etc.) being revealed',
  'that this could be perceived as failure as a parent',
  'afraid of being vulnerable',
  'i’m worried about the legal and financial implications if something happens',
];

export const goodFit = [
  'Chemistry',
  'Practical and logistical issues: Proximity and complimentary of schedules, needs and resources',
  'Similar lifestyle and outlook',
  'Similary family structure',
  'Complimentary lifestyle and outlook (Different from ours)',
  'Shared interests',
  'Ages of children',
  'Kids getting along',
  'Adults sharing a vision',
  'Humour',
  'Trust',
  'Being able to be ourselves',
  'Openness',
  'Common interests',
  'Similar socioeconomic status',
  'Similar Cultural backgrounds',
  'Similar parenting-styles',
  'Ability to dialogue easily and resolve conflict',
  'Routine',
  'Respect',
  'Goodwill',
  'Mutual generosity and enthusiasm',
  'Compassion and acceptance of others',
  'Listening/communication',
  'Intimacy, trust, vulnerability',
  'Clear boundaries',
];

export const householdDescription = [
  'Introverted',
  'Extroverted',
  'Confident',
  'Anxious',
  'Curious',
  'Easy-Going',
  'Often a little stressed',
  'High tension',
  'Organized',
  'Messy and cluttered',
  'Clean and uncluttered most of the time',
  'Outgoing',
  'Energetic',
  'Loud and lively',
  'Quiet',
  'Shy',
  'Respectful',
  'Non-Judmental',
  'Opinionated',
  'Finds it easy to have a difficult conversation',
  'Finds difficult conversations hard',
  'In conflict it is importaint to speak up',
  'In conflict it feels safest to pull away',
  'Speaking up for myself and my family is easy',
  'Speaking up for myself and my family is hard',
  'We are often like our own space/room',
  'We are super social',
  'Lot’s of yelling, nagging and/or whining',
  'Lot’s of talking, sharing and processing',
  'Often has background music on',
  'Often have the tv on',
  'We don’t have a tv',
  'Often on our computeres, tablets, phones',
  'We have a screen time limit',
  'We don’t like our kids being on devices',
  'Like having visitors over',
  'We are often out of the house',
  'We are homebuddies',
  'Clearly dedicated space and bounderies for our stuff for each of us',
  'Fluid space and boundaries',
  'On a tight schedule or routine',
  'Our days are different and we take them as they come',
];

export const importantInterests = [
  'Extended family',
  'Community involvement',
  'Circles of Friends',
  'Volunteer work',
  'Activism',
  'The enviroment',
  'Social inequality/diversity',
  'Outdoor Games and play',
  'Indoor Games and play',
  'Laughing together',
  'Relaxing together',
  'Gardening',
  'Being in Nature',
  'Food and cooking',
  'Baking',
  'Arts & creativity',
  'DIY Projects',
  'Culture',
  'Sports',
  'Cyceling',
  'Walking',
  'Fashion',
  'Fitness and wellbeing',
  'Crafts',
  'Books and reading',
  'Writing',
  'Music',
  'Gaming',
  'Lego and other building games',
  'Science and tech',
  'Traveling',
  'Local Family excursions',
  'Learning & Education',
  'Pets',
  'Discussions',
  'Politics',
  'Spirituality',
  'Meditating',
  'Yoga',
  'Chi Kung',
  'religion',
];

export const eventsActivities = [
  'Playdates',
  'Outings into nature',
  'Potlucks to build community',
  'Meal sharing',
  'Family counselling',
  'Outdoor games & activities for the whole family',
  'Creative workshops',
  'Emotional/communication workshops',
  'Fun city outings to local events',
  'Walks and talks/parenting support',
  'Other',
];

export const structureEventsActivities = [
  'Paid events orginized by Lykkå',
  'Events created by other villagers',
  'Adult gatherings to strenghten the parents connections',
  'Kids activitiests',
  'Kids activities in tandem with adult gatherings',
  'Gatherings to meet other families with no initial structure',
  'Gatherings to meet other families which is orginized around an activity/workshop/focus',
  'Other',
];
