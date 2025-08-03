import { useState } from 'react';
import profileData from '../data/profile.json';
import SectionInput from '../components/SectionInput';
import AITextHelper from '../components/AITextHelper';

export default function AdminPanel() {
  const [profile, setProfile] = useState(profileData);

  const saveFile = () => {
    const blob = new Blob([JSON.stringify(profile, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'profile.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <label>Name:</label>
      <AITextHelper
        value={profile.name}
        onChange={val => setProfile({ ...profile, name: val })}
      />

      <SectionInput
        label="Languages"
        items={profile.languages}
        setItems={items => setProfile({ ...profile, languages: items })}
      />

      <h2>Experience</h2>
      {profile.experience.map((exp, idx) => (
        <div key={idx}>
          <AITextHelper
            value={exp.role}
            onChange={val => {
              const arr = [...profile.experience];
              arr[idx].role = val;
              setProfile({ ...profile, experience: arr });
            }}
          />
          <input
            placeholder="Company"
            value={exp.company}
            onChange={e => {
              const arr = [...profile.experience];
              arr[idx].company = e.target.value;
              setProfile({ ...profile, experience: arr });
            }}
          />
          <input
            placeholder="Period"
            value={exp.period}
            onChange={e => {
              const arr = [...profile.experience];
              arr[idx].period = e.target.value;
              setProfile({ ...profile, experience: arr });
            }}
          />
          <AITextHelper
            value={exp.description}
            onChange={val => {
              const arr = [...profile.experience];
              arr[idx].description = val;
              setProfile({ ...profile, experience: arr });
            }}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setProfile({
            ...profile,
            experience: [
              ...profile.experience,
              { role: '', company: '', period: '', description: '' }
            ]
          })
        }
      >
        Add Experience
      </button>

      <h2>Education</h2>
      {profile.education.map((edu, idx) => (
        <div key={idx}>
          <input
            placeholder="Degree"
            value={edu.degree}
            onChange={e => {
              const arr = [...profile.education];
              arr[idx].degree = e.target.value;
              setProfile({ ...profile, education: arr });
            }}
          />
          <input
            placeholder="Institution"
            value={edu.institution}
            onChange={e => {
              const arr = [...profile.education];
              arr[idx].institution = e.target.value;
              setProfile({ ...profile, education: arr });
            }}
          />
          <input
            placeholder="Year"
            value={edu.year}
            onChange={e => {
              const arr = [...profile.education];
              arr[idx].year = e.target.value;
              setProfile({ ...profile, education: arr });
            }}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setProfile({
            ...profile,
            education: [
              ...profile.education,
              { degree: '', institution: '', year: '' }
            ]
          })
        }
      >
        Add Education
      </button>

      <SectionInput
        label="Facts"
        items={profile.facts}
        setItems={items => setProfile({ ...profile, facts: items })}
      />

      <button type="button" onClick={saveFile}>
        Save profile.json
      </button>
    </div>
  );
}
