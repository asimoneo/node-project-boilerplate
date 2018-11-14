const { MongoClient } = require('mongodb')

const { MONGO_URL } = process.env

;(async () => {
  const client = await MongoClient.connect(
    MONGO_URL,
    { useNewUrlParser: true }
  )

  try {
    console.log(client)
  } finally {
    client.close()
  }
})().catch(err => console.error(err))
