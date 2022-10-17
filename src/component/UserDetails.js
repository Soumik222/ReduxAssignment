import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserDetailsCard from "./UserDetailsCard";
import styled from "styled-components";

const Line = styled.div`
  height: 1px;
  background-color: #e3e1e1;
  margin: auto;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserDetail = styled.div`
  width: 50%;

  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`;

const Button = styled.button`
  background-color: #90e879;
  margin: 10px 0;
  padding: 10px 30px;
  border-radius: 20px;
`;

const UserDetails = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("Checking");
  // console.log(location.state);
  // console.log(location.state.data === null);
  useEffect(() => {
    if (location.state == null) {
      navigate(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const data = location.state.data;
  // console.log(data);
  //   console.log(props);
  return (
    location.state && (
      <DetailsContainer>
        {location.state.data.map((data) => (
          <UserDetail key={data.id}>
            <UserDetailsCard data={data} />
            <Line></Line>
          </UserDetail>
        ))}
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </DetailsContainer>
    )
  );
};

export default UserDetails;
