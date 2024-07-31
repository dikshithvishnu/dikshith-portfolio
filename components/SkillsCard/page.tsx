import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const SkillsCard = ({data} : {data:any}) => {
    return (
        <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{`Skills I've developed`}</CardTitle>
            </CardHeader>
            <CardContent className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {data.skills.map((skill: any, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="rounded-full p-2">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </CardContent>
          </Card>
    )
}

export default SkillsCard