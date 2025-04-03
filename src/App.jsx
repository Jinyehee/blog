import { useEffect, useState } from "react";
import "./App.css";
import search from "./assets/search.png";
function App() {
   const [fakedata, setFakedata] = useState([]);
   const [user, setUser] = useState([]);
   useEffect(() => {
      const postData = async () => {
         try {
            const response = await fetch(
               `https://jsonplaceholder.typicode.com/posts`
            );
            const data = await response.json();
            setFakedata(data);
            console.log(fakedata);
         } catch (error) {
            console.log(error);
         }
      };
      postData();
   }, []);

   useEffect(() => {
      const userData = async () => {
         try {
            const response = await fetch(
               `https://jsonplaceholder.typicode.com/users`
            );
            const data = await response.json();
            setUser(data);
            console.log(user);
         } catch (error) {
            console.log(error);
         }
      };
      userData();
   }, []);
   return (
      <div>
         <header>
            <p>blog</p>
            <div>
               <input type="text" />
               <div className="search">
                  <img src={search} alt="" />
               </div>
            </div>
            <p>writing</p>
         </header>
         <main>
            <div>
               {fakedata.length === 0 ? (
                  <p>데이터 불러오는 중...</p>
               ) : (
                  <ul>
                     {fakedata.map((item) => (
                        <li key={item.id}>
                           <p>{item.title}</p>
                           <p>{item.body}</p>
                           <p>
                              작성자 :
                              {user.map((user) => {
                                 if (item.userId === user.id) {
                                    return user.name;
                                 }
                              })}
                           </p>
                        </li>
                     ))}
                  </ul>
               )}
            </div>
         </main>
      </div>
   );
}

export default App;
