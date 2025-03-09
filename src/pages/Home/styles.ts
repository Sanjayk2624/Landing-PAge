import styled from "styled-components";

export const StyledImage = styled.img`

max-width: 350px;
height: auto;
display: block;
margin: 0 auto;
border-radius: 50%;
box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);

 animation: fadeIn 1s ease-in-out;
 
 transition: box-shadow 0.3s ease-in-out
 &:hover {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
  }
    
 transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 5;
      transform: translateY(0);
    }
  }
`;
