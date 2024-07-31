import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const ProjectsCard = ({ data }: { data: any }) => {


    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{`Projects I've worked on`}</CardTitle>
            </CardHeader>
            <CardContent className="mt-4 space-y-4">
                {data.projects.map((project: any, index: number) => (
                    <div key={index} className="flex items-start lg:items-center gap-4">
                      <Link className="w-1/6" href={project.url} >
                        <Image
                            src={project.image}
                            width="100"
                            height="100"
                            alt={project.title}
                            className="rounded-lg p-2 bg-black cursor-pointer"
                        />
                        </Link>
                        <div className="flex-1">
                            <h3 className="text-lg font-medium">{project.title}</h3>
                            <p className="text-muted-foreground">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default ProjectsCard;
