import fetch, { Headers } from 'node-fetch'

const { JWT_TOKEN, ENDPOINT } = process.env
const concurrentBenchmarks = process.argv[2] || 100
const headers = new Headers({
  Authorization: `Bearer ${JWT_TOKEN}`
})

console.log(`About to run ${concurrentBenchmarks} concurrent auth-at-edge requests...`)

function makeRequest() {
  return new Promise((resolve, reject) => {
    // NOTE: might need to remove headers if you want to benchmark something that doesn't have authorisation
    fetch(`${ENDPOINT}/private/top-secret.json`, { headers: headers }).then((response) => {
      if (response.ok) {
        resolve(response.status)
      } else {
        reject('request unsuccessful!', response.status)
      }
    })
  },
  (reason) => console.log('something bad happend', reason)
  )
}



console.time('benchmark')
const promises = []
for (let i = 0; i < concurrentBenchmarks; i++) {
  promises.push(makeRequest())
}

try {
  const result = await Promise.all(promises)
  console.log('result', result, promises.length)
} catch (e) {
  console.log('something went wrong:', e)
}

console.timeEnd('benchmark')
