import { content } from "@/lib/constants";
import AboutMeCard from "@/components/AboutMeCard/page";
import EducationCard from "@/components/EducationCard/page";
import WorkExCard from "@/components/WorkExCard/page";
import SkillsCard from "@/components/SkillsCard/page";
import ProjectsCard from "@/components/ProjectsCard/pages";

export default function About() {
  const data = content;
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-6">
          <AboutMeCard data={data} />
          <EducationCard data={data} />
          <WorkExCard data={data} />
        </div>
        <div className="space-y-6">
          <SkillsCard data={data} />
          <ProjectsCard data={data} />
        </div>
      </div>
    </div>
  );
}
