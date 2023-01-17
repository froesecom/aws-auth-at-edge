import fetch from 'node-fetch'

console.log('about to fetch')

const response = await fetch('https://google.com.au')

console.log(Object.keys(response))
