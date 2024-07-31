import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"

const WorkExCard = ({data} : {data:any}) => {
    return (
        <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {data.workExperience.map((work: any, index: number) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="self-start w-1/6 rounded-full p-2 text-primary-foreground">
                    <Image src={work.logo} height={60} width={60} className="rounded-full" alt={work.company} />
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <h3 className="text-lg font-medium">{work.title}</h3>
                    <p className="text-muted-foreground">
                      {work.company} | {work.duration}
                    </p>
                    <p className="text-muted-foreground text-sm italic">
                      {work.location}
                    </p>
                    <p className="text-muted-foreground">{work?.description}</p>
                    <div className="flex gap-0.5 mt-0.5 flex-wrap">
                    {work.skills.map((skill: any, index: number) => {
                      return (
                        <Badge key={index}>
                          {skill}
                        </Badge>
                      )
                    })}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
    )
}
export default WorkExCard