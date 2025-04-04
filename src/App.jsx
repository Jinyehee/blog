import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
   const [fakedata, setFakedata] = useState([]);
   const [user, setUser] = useState([]);
   const [searchId, setSearchId] = useState(null);
   useEffect(() => {
      // post data api 호출
      const postData = async () => {
         try {
            let url = `https://jsonplaceholder.typicode.com/posts`;
            if (searchId) {
               // header.jax의 input창에서 받아온 searchId가 있다면 url 뒤에 붙인다 (특정 포스트 검색)
               url += `?userId=${searchId}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setFakedata(data); // fakedata 변수에 넣는다
         } catch (error) {
            console.log(error);
         }
      };
      postData();
   }, [searchId]); // searchId가 바뀔때마다 갱신

   useEffect(() => {
      // user data api 호출
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
         {searchId === 0 ? (
            <p className="error_p">검색된 결과가 없습니다...</p>
         ) : (
            <Main postdata={fakedata} userdata={user} />
         )}
      </div>
   );
}

export default App;
