import fetch, { Headers } from 'node-fetch'

const { JWT_TOKEN, ENDPOINT } = process.env
const headers = new Headers({
  Authorization: `Bearer ${JWT_TOKEN}`
})

const response = await fetch(`${ENDPOINT}/private/top-secret.json`, { headers: headers })

// const text = await response.json()
console.log(response.status)
