import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";

const MainStyle = styled.main`
   padding: 50px;
   background-color: #f4f4f4;

   & ul {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
   }

   & ul li {
      background-color: #faf7ff;
      border-radius: 10px;
      width: 300px;
      height: 320px;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
   }
   & ul li:nth-child(2n) {
      background-color: #e9e9e9;
   }

   & ul li:hover {
      transform: translateY(-10px);
   }

   & ul li p {
      margin-bottom: 10px;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
   }

   & ul li p:first-child {
      font-size: 1.2rem;
      font-weight: bold;
      white-space: nowrap;
   }

   & ul li p:nth-child(2) {
      font-size: 1rem;
      color: #555;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
   }

   & ul li p:last-child {
      font-size: 0.9rem;
      color: #777;
      font-style: italic;
   }
`;

export default function Main({ postdata, userdata }) {
   const modelRef = useRef(null);
   const [selectedPost, setSelectedPost] = useState(null);
   const handleClick = (post) => {
      setSelectedPost(post);
   };

   const closeClick = () => {
      setSelectedPost(null);
      modelRef.current.close();
   };

   useEffect(() => {
      if (modelRef.current && selectedPost) {
         modelRef.current.showModal();
      }
   }, [selectedPost]);

   return (
      <MainStyle>
         <div>
            {postdata.length === 0 ? (
               <p>데이터 불러오는 중...</p>
            ) : (
               <ul>
                  {postdata.map((item) => (
                     <li key={item.id} onClick={() => handleClick(item)}>
                        <p>{item.title}</p>
                        <p>{item.body}</p>
                        <p>
                           작성자 :
                           {userdata.map((user) => {
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
         <Modal
            ref={modelRef}
            closeClick={closeClick}
            post={selectedPost}
            user={userdata}
         />
      </MainStyle>
   );
}
