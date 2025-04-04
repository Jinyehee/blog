import { useRef } from "react";
import search from "../assets/search.png";
import styled from "styled-components";

const HeaderStyle = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 20px 30px;
   background-color: #151858;
   color: white;

   & p {
      font-size: 1.5rem;
      font-weight: bold;
   }

   & input {
      padding: 10px;
      border-radius: 5px;
      border: none;
      outline: none;
      margin-right: 15px;
      width: 300px;
   }

   & div {
      display: flex;
      align-items: center;
      gap: 15px;
   }
   & .search img {
      width: 30px;
   }
`;

export default function Header({ setSearchId, userdata }) {
   const inputRef = useRef(null);
   const searchClick = () => {
      const userId = userdata.find(
         (item) => item.name === inputRef.current.value
      );
      if (userId) {
         setSearchId(userId.id);
      } else {
         setSearchId(null);
      }
   };
   return (
      <HeaderStyle>
         <p>blog</p>
         <div>
            <input type="text" ref={inputRef} />
            <div className="search" onClick={searchClick}>
               <img src={search} alt="" />
            </div>
         </div>
         <p>writing</p>
      </HeaderStyle>
   );
}
