export interface Project {
  title: string;
  description: string;            
  moreDetails: string;            
  image: string;                 
  screenshots: string[];         
  liveLink: string;               
  githubLink: string;            
  techStack: string[];            
  tags: string[];                 
  subtags: string[];              
  backgroundColor?: string;       
  featured?: boolean;             
  year?: string;                  
  id: string;                     
}