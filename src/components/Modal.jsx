import { forwardRef } from "react";
import styled from "styled-components";

const ModalStyle = styled.dialog`
   width: 600px;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   border: 1px solid black;
   position: fixed;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   padding: 30px;
   border-radius: 20px;
   gap: 50px;

   &::backdrop {
      background-color: rgba(0, 0, 0, 0.8);
   }

   & p:nth-child(3) {
      color: #777;
      font-style: italic;
   }

   & button {
      height: 35px;
      width: 60px;
      border: 0;
      background-color: #151858;
      color: white;
      border-radius: 5px;
      float: right;
      right: 0;
      bottom: 0;
      position: absolute;
      margin: 20px;
   }
`;

const Modal = forwardRef((props, ref) => {
   if (!props.post) return;
   return (
      <div>
         <ModalStyle ref={ref}>
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
            <p>
               작성자:
               {props.user.map((item) => {
                  if (props.post.userId === item.id) {
                     return item.name;
                  }
               })}
            </p>
            <button onClick={props.closeClick}>닫기</button>
         </ModalStyle>
      </div>
   );
});
export default Modal;
