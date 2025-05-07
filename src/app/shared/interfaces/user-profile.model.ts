export interface UserInterface {
    id: number;
    username: string;
    name: string;
    email: string;
    bio?: string;
    city?: string;
    country?: string;
    picture?: string;
    skills: SkillInterface[];
    experiences: ExperienceInterface[];
    education: EducationInterface[];
    interests: InterestInterface[];
    [key: string]: any;
  }
  
  export interface SkillInterface {
    id: number;
    name: string;
    addedAt: string;
    updatedAt: string;
    username: string;
  }
  
  export interface ExperienceInterface {
    id: number;
    name: string;
    description?: string;
    place?: string;
    degree?: string;
    startedAt: string;
    endedAt?: string;
    username: string;
    addedAt: string;
  }
  
  export interface EducationInterface {
    id: number;
    name: string;
    content?: string;
    degree?: string;
    place?: string;
    startedAt: string;
    endedAt?: string;
    username: string;
    addedAt: string;
  }
  
  export interface InterestInterface {
    id: number;
    name: string;
    username: string;
    siteId?: string;
    updatedAt: string;
    addedAt: string;
  }
  