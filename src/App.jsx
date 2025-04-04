import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
   const [fakedata, setFakedata] = useState([]);
   const [user, setUser] = useState([]);
   const [searchId, setSearchId] = useState(null);
   useEffect(() => {
      const postData = async () => {
         try {
            let url = `https://jsonplaceholder.typicode.com/posts`;
            if (searchId) {
               url += `?userId=${searchId}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setFakedata(data);
         } catch (error) {
            console.log(error);
         }
      };
      postData();
   }, [searchId]);

   useEffect(() => {
      const userData = async () => {
         try {
            const response = await fetch(
               `https://jsonplaceholder.typicode.com/users`
            );
            const data = await response.json();
            setUser(data);
         } catch (error) {
            console.log(error);
         }
      };
      userData();
   }, []);
   return (
      <div>
         <Header setSearchId={setSearchId} userdata={user} />
         <Main postdata={fakedata} userdata={user} />
      </div>
   );
}

export default App;
