import crypto from 'crypto';

export default function handler(req, res) {
  const VERIFICATION_TOKEN = 'cardoebaydelete20258092842830242';
  
  const ENDPOINT_URL = 'https://ebay-compliance-8hcb5td3o-albert-lillys-projects.vercel.app/api/marketplace-deletion';
  
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method === 'GET' && req.query.challenge_code) {
    const challengeCode = req.query.challenge_code;
    
    const hash = crypto
      .createHash('sha256')
      .update(challengeCode + VERIFICATION_TOKEN + ENDPOINT_URL)
      .digest('hex');
    
    return res.status(200).json({
      challengeResponse: hash
    });
  }
  
  if (req.method === 'POST') {
    console.log('Deletion notification received:', req.body);
    return res.status(200).end();
  }
  
  return res.status(200).json({ 
    status: 'Endpoint is active'
  });
}