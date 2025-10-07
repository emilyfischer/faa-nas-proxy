export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  try {
    const response = await fetch('https://nasstatus.faa.gov/api/airport-status-information');
    const data = await response.text();
    
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch FAA data' });
  }
}
