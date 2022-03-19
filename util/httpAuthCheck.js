// util/httpAuthCheck.js
import initializeBasicAuth from 'nextjs-basic-auth'

const users = [
  { user: 'johndoe', password: 'supersecretpassword' }
]

export default initializeBasicAuth({
  users: users
})
