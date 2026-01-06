import { skills, experience, projects } from "@/data/portfolio";

export function useSkills() {
  return { data: skills, isLoading: false };
}

export function useExperience() {
  return { data: experience, isLoading: false };
}

export function useProjects() {
  return { data: projects, isLoading: false };
}
