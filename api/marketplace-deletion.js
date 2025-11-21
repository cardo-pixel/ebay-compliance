export default function handler(req, res) {
  const VERIFICATION_TOKEN = 'cardoebaydelete20258092842830242';
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method === 'GET' && req.query.challenge_code) {
    return res.status(200).json({
      challengeResponse: req.query.challenge_code
    });
  }
  
  if (req.method === 'POST') {
    return res.status(200).json({
      verificationToken: VERIFICATION_TOKEN
    });
  }
  
  return res.status(200).json({ 
    status: 'Endpoint is active'
  });
}