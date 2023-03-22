import { atom } from 'recoil';

export const villagerOnboardingBasicsAtom = atom({
  key: 'user_onboarding_basics',
  default: {
    firstName: '',
    lastName: '',
    displayName: '',
    privacySettings: 0,
    dateOfBirth: '',
  },
});

export const villagerOnboardingLocationsAtom = atom({
  key: 'user_onboarding_location',
  default: {
    country: '',
    postalCode: '',
    city: '',
    streetAddress: '',
    residencyType: '',
    secondaryAddress: '',
    region: '',
  },
});

export const villagerOnboardingFamilyAtom = atom({
  key: 'user_onboarding_family',
  default: {
    familyStructure: '',
    familyDescription: '',
    covidTolerance: '',
    vaccinationStatus: '',
  },
});

export const villagerOnboardingAdditionalAtom = atom({
  key: 'user_onboarding_additional',
  default: {
    spokenLanguages: '',
    noteworthy: '',
    culture: '',
    religion: '',
    educationLevel: '',
    occupationalStatus: '',
    income: '',
    inHomeWorkStudy: '',
  },
});

export const villagerOnboardingCommunesAtom = atom({
  key: 'user_onboarding_commune',
  default: {
    userCommuneName: '',
    userCommuneGender: '',
    userCommuneAgeRange: '',
    userCommunePronouns: '',
    userCommunePhoneNumber: '',
    userCommuneEmail: '',
  },
});

export const villagerOnboardingHouseholdsAtom = atom({
  key: 'user_onboarding_children',
  default: {
    userChildAge: '',
    userChildGender: '',
    userChildPronouns: '',
  },
});

export const villagerOnboardingAtom = atom({
  key: 'user_onboarding',
  default: {
    userPhoneNumber: '',
    userGender: '',
    pronouns: '',
    userDwellingType: '',
    userStreetAddress: '',
    userPostalCode: '',
  },
});

export const villagerMarcieWork = atom({
  key: 'marcie_work',
  default: {
    userPhoneNumber: '',
    userGender: '',
    pronouns: '',
    userDwellingType: '',
    userStreetAddress: '',
    userPostalCode: '',
  },
});

export const villagerFamilyInfo = atom({
  key: 'family_info',
  default: {
    marriageStatus: 'single',
    covidTolerance: '',
    vaccinationStatus: '',
    familyDescriptionChoice: '',
    familyDescriptionText: '',
  },
});

export const additionalInfo = atom({
  key: 'additionalfamily_info',
  default: {
    familyNoteworthy: [],
    ethnicCulture: [],
    religion: [],
    education: '',
    occupations: [],
    workStudyHome: '',
    annualIncome: '',
    userLanguages: [],
  },
});

export const compatibility = atom({
  key: 'compatibility_info',
  default: {
    hopes: [],
    needs: [],
    offers: [],
    emotionalSupport: [],
    reservationChoices: [],
    goodFit: [],
    familyStrengthsText: '',
    householdDescription: [],
    importantInterests: [],
  },
});

export const children = atom({
  key: 'children_info',
  default: {
    childsAge: '',
    childsGender: '',
    childPronouns: '',
  },
});

export const caregiver = atom({
  key: 'caregiver_info',
  default: {
    caregiverName: '',
    caregiverGender: '',
    caregiverAgeRange: '',
    caregiverPronouns: '',
    caregiverPhoneNumber: '',
    caregiverEmail: '',
  },
});

export const livingSituation = atom({
  key: 'livingSituation_info',
  default: {
    livingSituationSelect: '',
    livingSituationText: '',
    coLivingSelectYesNo: '',
    coLivingSelectPreference: [],
    eventsSelect: '',
    joinInterests: [],
  },
});

export const activities = atom({
  key: 'activities_info',
  default: {
    eventsActivities: [],
    structureEventsActivities: [],
  },
});

export const languageAtom = atom({
  key: 'language',
  default: 'en-US',
});

export const alertAtom = atom({
  key: 'alertAtom',
  default: {
    open: false,
    severity: 'info',
    message: '',
  },
});
