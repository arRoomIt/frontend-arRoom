import React, { useState } from "react"

const UserContext = React.createContext([{}, () => {}])

const initialUser = {
  _id: "",
  email: "",
  name: "",
  googleId:"",
  facebookId:"",
  isHost: false,
  profileImage: "",
  hostsReview: [],
  reservations: []
}

const UserProvider = props => {
  const [user, setUser] = useState(initialUser)

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
