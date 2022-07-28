export default function handler(req, res) {
  res.status(200).json([
    {
      name: 'John Doe',
      website: 'johndoe.com'
    },
    {
      name: 'Okky Mahes',
      website: 'okkymahes.id'
    },
    {
      name: 'pak bossquee',
      website: null
    }
  ])
}
