import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: #90e879;
  margin: 10px 0;
  padding: 10px 30px;
  border-radius: 20px;
`;
const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>❌Page Not Found</div>
      <Button onClick={() => navigate("/")}>Go Back</Button>
    </>
  );
};

export default NoMatch;
