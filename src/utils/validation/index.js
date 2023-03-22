import * as yup from 'yup';

import { passwordRegexCode, postalRegexCode } from '../constants';

export const loginFormSchema = yup.object().shape({
  userEmail: yup.string().required('Username is required.'),
  userPassword: yup.string().required('Password is required.'),
});

export const signUpFormSchema = yup.object().shape({
  firstName: yup.string().required('First name is required.'),
  lastName: yup.string().required('Last name is required.'),
  userEmail: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  userPassword: yup
    .string()
    .min(8, 'Minimum of eight characters')
    .matches(
      passwordRegexCode,
      'At least one capital, one digit, and one special character are required'
    )
    .required('Password is required.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('userPassword'), null], 'Passwords must match')
    .required('Confirmation password is required'),
});

export const profileDemographicsSchema = yup.object().shape({
  userDob: yup
    .date()
    .typeError('Invalid date format.')
    .required('A valid date of birth is required.'),
  userGender: yup.string().required('A gender is required.'),
  userPronouns: yup.string().required('A pronoun is required.'),
  userPostalCode: yup
    .string()
    .min(6, 'PostalCode must be 6 characters')
    .matches(postalRegexCode, 'Please enter a valid postal code (Ex. A1A 1A1)')
    .required('PostalCode is required.'),
  marriageStatus: yup.string().required('A family type is required.'),
  careTakerCount: yup.number().required('Number of Caretakers is required.'),
  userDwellingType: yup.string().required('A dwelling type is required.'),
  childrenCount: yup.number().required('Number of children is required.'),
  userRoommates: yup.boolean().required('You must select a roommate option.'),
  userOccupationType: yup
    .string()
    .required('You must select an occupational type.'),
  userLanguages: yup
    .array()
    .min(1, 'A spoken language is required')
    .required('A spoken language is required'),
  userPhoneNumber: yup.string().required('A phone number is required'),
  userStreetAddress: yup.string().required('A street address is required'),
  covidTolerance: yup.string().required('You must select a tolerance level.'),
  vaccinationStatus: yup
    .string()
    .required('You must select a vaccination status.'),
  familyDescriptionChoice: yup
    .string()
    .required('Please select one from the dropdown.'),
  familyDescriptionText: yup
    .string()
    .required('Please give a brief description.'),
  childsAge: yup
    .string()
    .required('If you do not have children, click REMOVE CHILD button.'),
  childGender: yup.string().required('A gender is required.'),
  childPronouns: yup.string().required('A pronoun is required.'),
  caregiverName: yup
    .string()
    .required('If you do not have caregivers, click REMOVE CAREGIVER button.'),
  caregiverGender: yup.string().required('A gender is required.'),
  caregiverAgeRange: yup
    .string()
    .required('Please select one from the dropdown.'),
  caregiverPronouns: yup.string().required('A pronoun is required.'),
  caregiverPhoneNumber: yup.string().required('A phone number is required'),
  caregiverEmail: yup.string().required('Email is required'),
  ethnicCultureText: yup.string().required('Please do not leave this blank'),
  education: yup.string().required('Education level is required'),
  workStudyHome: yup.boolean().required('You must select an option.'),
  occupations: yup
    .array()
    .min(1, 'An occupation is required')
    .required('An occupation is required'),
  ethnicCulture: yup
    .array()
    .min(1, 'Please pick one')
    .required('Please pick one'),
  religion: yup.array().min(1, 'Please pick one').required('Please pick one'),
  annualIncome: yup
    .string()
    .required('Annual household income level is required'),
  livingSituationSelect: yup
    .string()
    .required('Please select one from the dropdown.'),
  livingSituationText: yup
    .string()
    .required('Please give a brief description.'),
  coLivingSelectYesNo: yup
    .string()
    .required('Please select one from the dropdown.'),
  hopes: yup.array().min(1, 'Please pick one').required('Please pick one'),
  needs: yup.array().min(1, 'Please pick one').required('Please pick one'),
  offerss: yup.array().min(1, 'Please pick one').required('Please pick one'),
  emotionalSupport: yup
    .array()
    .min(1, 'Please pick one')
    .required('Please pick one'),
  reservationChoices: yup
    .array()
    .min(1, 'Please pick one')
    .required('Please pick one'),
  familyStrengthsText: yup
    .string()
    .required('Please give a brief description.'),
  householdDescription: yup
    .array()
    .min(1, 'Please pick one')
    .required('Please pick one'),
  importantInterests: yup
    .array()
    .min(1, 'Please pick one')
    .required('Please pick one'),
  coLivingSelectPreference: yup
    .array()
    .min(1, 'Please select at least one')
    .required('Please select at least one'),
  eventsSelect: yup.string().required('Please select one from the dropdown.'),
  joinInterests: yup
    .array()
    .min(1, 'Please select at least one')
    .required('Please select at least one'),
  eventsActivities: yup
    .array()
    .min(1, 'Please select at least one')
    .required('Please select at least one'),
  structureEventsActivities: yup
    .array()
    .min(1, 'Please select at least one')
    .required('Please select at least one'),
});

export const locationSchema = yup.object().shape({
  streetAddress: yup.string().required('Street Address is required.'),
  residencyType: yup.string().required('A residency type is required'),
  city: yup.string().required('City is required.'),
  region: yup.string().required('Region is required.'),
  postalCode: yup
    .string()
    .min(6, 'PostalCode must be 6 characters')
    .matches(postalRegexCode, 'Please enter a valid postal code (Ex. A1A 1A1)')
    .required('PostalCode is required.'),
});

export const additionalSchema = yup.object().shape({
  spokenLanguages: yup.string().required('A language is required'),
  noteworthy: yup.string().required('Street Address is required.'),
  culture: yup.string().required('Street Address is required.'),
  religion: yup.string().required('Street Address is required.'),
  educationLevel: yup.string().required('Street Address is required.'),
  occupationalStatus: yup.string().required('Street Address is required.'),
  income: yup.string().required('Street Address is required.'),
  inHomeWorkStudy: yup.string().required('Street Address is required.'),
});

export const familySchema = yup.object().shape({
  familyStructure: yup
    .string()
    .required('A family structure choice is required.'),
  covidTolerance: yup.string().required('A COVID tolerance is required.'),
  vaccinationStatus: yup.string().required('A vaccination status is required.'),
});
