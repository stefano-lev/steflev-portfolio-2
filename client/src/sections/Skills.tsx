import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Badge from "../components/Badge";

const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "C++ (coursework)"],
  Tools: ["Git", "Linux", "Node.js", "Express", "REST APIs"],
  Interests: ["Cybersecurity", "Automation", "Developer tooling"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-white/10">
      <Container>
        <SectionHeading
          title="Skills"
          subtitle="A snapshot of what I’m comfortable with and what I’m actively building with."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="font-bold">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((x) => (
                  <Badge key={x}>{x}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
