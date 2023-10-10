import app from "./config/express"

const port = process.env.PORT ?? 3000
try {
  app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
} catch (e) {
  console.log(e)
}

console.log(process.env.JWT_SECRET)
console.log(process.env.CRYPTO_KEY)
