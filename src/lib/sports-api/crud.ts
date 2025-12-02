export async function fetchSportsCountries() {
  const res = await fetch('https://v1.basketball.api-sports.io/countries?name=brasil', {
    headers: {
      'x-apisports-key': process.env.SPORTS_API_KEY || '',
    },
  });
  return res.json();
}
