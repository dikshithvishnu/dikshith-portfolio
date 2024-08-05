import Link from "next/link";
import { content } from "@/lib/constants";
import { SlLocationPin } from "react-icons/sl";

export default function Resume() {
  const data = content;
  return (
    <div className="bg-background text-foreground">
      <header className="bg-muted py-8 md:px-6">
        <div className="mx-auto px-4 w-full md:max-w-4xl">
          <div className="flex flex-col items-start gap-2 md:flex-row md:justify-between">
            <div className="grid gap-1">
              <h1 className="text-3xl font-bold">{data.personal.name}</h1>
              <div className="flex flex-col md:flex-row items-start gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5" />
                  <span>
                    <Link target="_blank" href={`mailto: ${data.personal.email}`}>
                      {data.personal.email}
                    </Link>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5" />
                  <span>
                    <Link target="_blank" href={`tel: ${data.personal.phone}`}>
                      {data.personal.phone}
                    </Link>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <SlLocationPin className="h-5 w-5" />
                  <span>
                      {data.personal.address.city}, {data.personal.address.state}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/Dikshith Vishnuvardhan - Resume.pdf"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary dark:text-white px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                download={true}
              >
                Download CV
              </a>
              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
        <section className="grid gap-8">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Work Experience</h2>
            <div className="grid gap-6">
              {data.workExperience.map((experience, index) => {
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between space-y-0.5">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {experience.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {experience.company} |{" "}
                          {experience.location
                            .replace("Massachusetts", "MA")
                            .replace("United States", "USA")}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarIcon className="h-4 w-4" />
                          <span className="italic">{experience.duration}</span>
                        </div>
                      </div>
                    </div>
                    {experience.responsibilities ? (
                      <ul className="px-4 list-disc">
                        {experience.responsibilities.map(
                          (responsibility, index) => {
                            return <li key={index}>{responsibility}</li>;
                          }
                        )}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">
                        {experience.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Skills</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {data.skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="rounded-lg bg-muted p-4 text-center"
                  >
                    <skill.icon className="mx-auto h-8 w-8" />
                    <p className="mt-2 text-sm font-medium">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Education</h2>
            <div className="grid gap-6">
              {data.education.map((school, index) => {
                return (

              <div key={index} className="grid gap-2">
                <div className="flex items-center justify-between">
                  <div className=" flex flex-col gap-0.5">
                    <h3 className="text-lg font-semibold">
                      {school.degree}
                    </h3>
                    <p className="text-muted-foreground">
                      {school.school} | {school.grade}
                    </p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span className="text-sm italic">{school.years}</span>
                  </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {school.description}
                </p>
              </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
