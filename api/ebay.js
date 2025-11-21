import { createHash } from 'crypto';

export default function handler(req, res) {
  const verificationToken = 'cardoebaydelete20258092842830242';
  const endpoint = 'https://ebay-compliance-albert-lillys-projects.vercel.app/api/ebay';
  
  res.setHeader('Content-Type', 'application/json');
  
  if (req.method === 'GET' && req.query.challenge_code) {
    const challengeCode = req.query.challenge_code;
    
    const hash = createHash('sha256');
    hash.update(challengeCode);
    hash.update(verificationToken);
    hash.update(endpoint);
    const responseHash = hash.digest('hex');
    
    return res.status(200).json({
      challengeResponse: responseHash
    });
  }
  
  if (req.method === 'POST') {
    return res.status(200).end();
  }
  
  return res.status(200).json({ status: 'active' });
}