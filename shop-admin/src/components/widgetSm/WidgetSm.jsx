import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error.response);
      }
    };
    
    

    getUsers();
  }, []); 
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      {users.length === 0 ? (
        <p>No new users to display.</p>
      ) : (
        <ul className="widgetSmList">
          {users.map((user) => (
            <li className="widgetSmListItem" key={user._id}> 
              <img
                src={user.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnUtoVwPq-UFO5b4Q1rNgXi3GHOwI_D3R8K63RzfxAnm3GgUCyHUfFxkRzzpsfOAoUtVs&usqp=CAU"}
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span> 
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}