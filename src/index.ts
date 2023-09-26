import { application } from 'express'

const port = process.env.PORT ?? 3000

function main() {
  try {
    application.listen(port)
    console.log(`Esta wea está corriendo en http://localhost:${port} :p`)
  } catch (e) {
    console.log(e)
  }
}

main()