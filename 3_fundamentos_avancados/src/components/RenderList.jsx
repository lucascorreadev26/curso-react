import { useState } from "react"

const RenderList = () => {
    const [users] = useState(["Lucas", "Kelle", "Isabel", "Robert"]);

  return (
    <div>
        <ul>{users.map((user, id) => (
            <li key={id} >{user}</li>
        ))}</ul>
    </div>
  )
}

export default RenderList