import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const EducationCard = ({ data } : { data : any} ) => {
    return (
        <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {data.education.map((edu: any, index: number) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="rounded-full p-2 text-primary-foreground">
                    <Image
                      src={edu.icon}
                      height={60}
                      width={60}
                      className="rounded-full"
                      alt={edu.school}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{edu.degree}</h3>
                    <p className="text-muted-foreground">
                      {edu.school} | {edu.years}
                    </p>
                    <p className="text-sm italic">Grade: {edu.grade}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
    )
}

export default EducationCard