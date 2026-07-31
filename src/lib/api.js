const API_URL = "";

export async function fetchPortfolioData() {
  const res = await fetch(`${API_URL}/updated_data`);
  if (!res.ok) {
    throw new Error(`Failed to load portfolio: ${res.status}`);
  }
  const json = await res.json();
  return json.data;
}

export async function fetchProjects() {
  const res = await fetch(`${API_URL}/api/projects`);
  if (!res.ok) throw new Error(`Failed to load projects: ${res.status}`);
  const json = await res.json();
  return json.data;
}

export async function fetchSkills() {
  const res = await fetch(`${API_URL}/api/skills`);
  if (!res.ok) throw new Error(`Failed to load skills: ${res.status}`);
  const json = await res.json();
  return json.data;
}

export async function fetchAchievements() {
  const res = await fetch(`${API_URL}/api/achievements`);
  if (!res.ok) throw new Error(`Failed to load achievements: ${res.status}`);
  const json = await res.json();
  return json.data;
}

export async function fetchCertificates() {
  const res = await fetch(`${API_URL}/api/certificates`);
  if (!res.ok) throw new Error(`Failed to load certificates: ${res.status}`);
  const json = await res.json();
  return json.data;
}

export async function fetchHobbies() {
  const res = await fetch(`${API_URL}/api/hobbies`);
  if (!res.ok) throw new Error(`Failed to load hobbies: ${res.status}`);
  const json = await res.json();
  return json.data;
}

export async function fetchProfile() {
  const res = await fetch(`${API_URL}/api/profile`);
  if (!res.ok) throw new Error(`Failed to load profile: ${res.status}`);
  const json = await res.json();
  return json.data;
}