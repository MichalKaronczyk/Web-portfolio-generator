import profile from '../data/profile.json';

export default function CVPage() {
  const { name, languages, experience, education, facts } = profile;

  return (
    <div>
      <h1>{name}</h1>

      <section>
        <h2>Languages</h2>
        <ul>
          {languages.map((lang, idx) => (
            <li key={idx}>{lang}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        {experience.map((exp, idx) => (
          <div key={idx}>
            <h3>
              {exp.role} - {exp.company}
            </h3>
            <p>
              <em>{exp.period}</em>
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {education.map((edu, idx) => (
          <div key={idx}>
            <h3>{edu.degree}</h3>
            <p>
              {edu.institution} – {edu.year}
            </p>
          </div>
        ))}
      </section>

      {facts.length > 0 && (
        <section>
          <h2>Facts</h2>
          <ul>
            {facts.map((fact, idx) => (
              <li key={idx}>{fact}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
