import { IconType } from 'react-icons';

export interface SocialLink {
  icon: IconType;
  link: string;
  name: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  socials: SocialLink[];
  address: Address;
}

export interface HomeInfo {
  title: string;
  description: string;
  location: string;
}

export interface AboutInfo {
  title: string;
  content: string;
}

export interface EducationInfo {
  degree: string;
  school: string;
  schoolURL: string;
  years: string;
  icon: string;
  grade: string;
  description: string;
}

export interface WorkExperience {
  title: string;
  logo: string;
  company: string;
  companyURL: string;
  employmentType: string;
  duration: string;
  location: string;
  responsibilities?: string[];
  description: string;
  skills?: string[];
}

export interface Skill {
  name: string;
  icon: IconType;
}

export interface Project {
  title: string;
  description: string;
  url: string;
  image: string;
}

export interface ProfileData {
  personal: PersonalInfo;
  home: HomeInfo;
  about: AboutInfo;
  education: EducationInfo[];
  workExperience: WorkExperience[];
  skills: Skill[];
  projects: Project[];
}
