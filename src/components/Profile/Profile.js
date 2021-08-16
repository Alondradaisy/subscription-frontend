import React from "react";
import axios from "axios";
import Cookie from "js-cookie";

function Profile() {
  async function handleUpdate() {
    const cookie = Cookie.get("jwt-cookie");

    try {
      let result = await axios.put(
        "http://localhost:3002/api/users/update-profile",
        {},

        {
          headers: {
            authorization: `Bearer ${cookie}`,
          },
        }
      );
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  return ( 
    <div>
        <button onClick={handleUpdate}>Update!</button>
    </div>;
  );
}

export default Profile;
