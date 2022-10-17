import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: linear-gradient(to right, rgb(255, 153, 102), rgb(255, 77, 136));
  margin: 10px 0;
  border-radius: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;

const Info = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const UserDetailsCard = (props) => {
  console.log("In user Details Card");
  console.log(props);
  const data = props.data;
  return (
    <Card>
      <Info>ID: {data.id}</Info>
      <Info>
        Name: {data.firstName} {data.lastName}
      </Info>
      <Info>Date of Birth: {data.dob}</Info>
      <Info>Age: {data.age} years</Info>
      <Info>Phone: {data.contactNumber}</Info>
      <Info>Email Id: {data.email}</Info>
      <Info>Adress Line: {data.address}</Info>
      <Info>Salary: ₹{data.salary}</Info>
    </Card>
  );
};

export default UserDetailsCard;
