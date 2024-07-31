import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const AboutMeCard = ({ data } : { data: any}) => {
    return (
        <Card>
            <CardHeader>
              <CardTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {data.about.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mt-4 text-muted-foreground text-lg">
                {data.about.content}
              </p>
            </CardContent>
          </Card>
    )
}

export default AboutMeCard