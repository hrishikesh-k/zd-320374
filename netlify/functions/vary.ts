export default function() {
  return new Response('hello', {
    headers: {
      'netlify-vary': 'query=""'
    }
  })
}

export const config = {
  path: '/api/vary'
}