import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  margin-bottom: 25px;
  padding-left: 50px;
  gap: 15px;
`;

const Button = styled.button`
  background-color: #90e879;
  margin: 10px 0;
  padding: 10px 30px;
  border-radius: 20px;

  &:hover {
    transform: scale(1.1);
  }
`;

const MainContain = styled.div`
  background: linear-gradient(to right, rgb(255, 153, 102), rgb(255, 77, 136));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin: 40px auto;
  border-radius: 20px;

  @media only screen and (max-width: 800px) {
    width: 80%;
  }
`;

function UserContainer({ userData, fetchUsers }) {
  const navigate = useNavigate();
  const [isError, setIsError] = useState("");
  let userIds = [];
  const showDetails = (event) => {
    event.preventDefault();
    console.log(event);

    userIds = [];

    console.log(userData);
    console.log(userData.users);

    userData.users.map((user) =>
      Object.entries(event.target).map((userId) => {
        return userId[1].nodeName === "INPUT" && userId[1].checked
          ? Number(user.id) === Number(userId[1].id)
            ? userIds.push(user)
            : null
          : "";
      })
    );

    if (userIds.length > 0) {
      setIsError("");
      navigate("/details", { state: { data: userIds } });
    } else {
      setIsError("❗❗Please Select User❗❗");
    }

    console.log(userIds);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <>
      <h2>Please Wait...we are fetching data for you</h2>
    </>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <MainContain>
      <h2>User List</h2>
      <form onSubmit={showDetails}>
        {userData &&
          userData.users &&
          userData.users.map((user) => (
            <Row key={user.id}>
              <input type="checkbox" id={user.id}></input>
              <label htmlFor={user.id}>
                {user.firstName} {user.lastName}
              </label>
            </Row>
          ))}
        <Button type="submit">Submit</Button>
        <Button style={{ marginLeft: 20 }} onClick={fetchUsers}>
          Next
        </Button>
      </form>
      {isError}
    </MainContain>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
