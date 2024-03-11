import {useEffect, useState} from "react";
import './App.css';
import {getPosts, getRandomUsers} from "./api";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";

function App() {
  
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  useEffect(() => {
    getRandomUsers().then((users) => setUserData(users.results[0]));
  },[]);

  const refresh = () => {
    getRandomUsers().then((users) =>setUserData(users.results[0]));
  }

  return (
    <div className="App">

      {userData && <UserCard data={userData} />}
      <button 
      className="user-refresh-btn"
      onClick={refresh}
      >Refresh User</button>
      {
        data ? data.map((e) => 
        <div className="cards">
        <PostCard title={e.title} body={e.body}/>
        </div>
        ) : 
        <p>No data</p>
      }
    </div>
  );
}

export default App;
