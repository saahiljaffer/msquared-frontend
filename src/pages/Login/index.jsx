import React, { useEffect } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { S1, S2 } from "../../components/Fonts";
import Button from "../../components/Button";
import { ButtonGroup } from "../../components/ButtonGroup";
import useStore from "../../store";
import { useGetPotentialParties } from "../../api";
import ChooseParty from "./ChooseParty";
import NavBar from "../../components/NavBar";
import LoadingIndicator from "../../components/LoadingIndicator";
import Alert from "../../components/Alert";

const Title = styled(S1)`
  margin-bottom: 1rem;
`;

const Text = styled(S2)`
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  width: fill-available;
  height: 2rem;
  padding: 0.25rem;
  background-color: ${(props) => props.theme.colors.foreground.tertiary};
  font-size: ${(props) => props.theme.fonts.s2.size};
  color: ${(props) => props.theme.colors.foreground.default};
  font-weight: ${(props) => props.theme.fonts.s2.weight};
  font-family: "Niveau Grotesk";
  padding-left: 10px;
  border: none;
  border-radius: 0.25rem;
`;

const Container = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled(S2)`
  text-align: start;
  margin-bottom: 0.5rem;
`;

const StyledAlert = styled(Alert)`
  margin-bottom: 1rem;
`;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const name = useStore((state) => state.name);
  const setName = useStore((state) => state.setName);
  const setChosenPartyId = useStore((state) => state.setChosenPartyId);
  const chosenPartyId = useStore((state) => state.chosenPartyId);
  const { data, isLoading } = useGetPotentialParties(name);

  useEffect(() => {
    if (data && data.length === 1) {
      setChosenPartyId(data[0][0].party_id);
    }
  }, [data]);

  if (chosenPartyId) {
    return <Navigate to="/" replace />;
  }

  if (data && data.length > 1) {
    return <ChooseParty />;
  }
  return (
    <>
      <NavBar showHome={false} showLogout={false} />
      <form
        onSubmit={handleSubmit((values) => {
          setName(values);
        })}
      >
        <Title>Login</Title>
        <Text>
          Welcome to our wedding website. We are so excited to celebrate with
          you all! As our big day is soon approaching, we would greatly
          appreciate it if you could kindly login and RSVP by May 20th, 2022.
        </Text>
        <Text>Guests are kindly requested to wear their masks.</Text>

        <Container>
          <Label>
            Please enter your first name
            <StyledInput
              name="firstName"
              {...register("firstName", { required: "This is required." })}
            />
          </Label>
          <ErrorMessage
            errors={errors}
            name="firstName"
            render={({ message }) => <Alert variant="error">{message}</Alert>}
          />
        </Container>
        <Container>
          <Label>
            Please enter your last name
            <StyledInput
              name="lastName"
              {...register("lastName", { required: "This is required." })}
            />
          </Label>
          <ErrorMessage
            errors={errors}
            name="lastName"
            render={({ message }) => <Alert variant="error">{message}</Alert>}
          />
        </Container>

        {data && data.length === 0 && (
          <StyledAlert variant="error">
            The name you entered could not be found on the guest list.
          </StyledAlert>
        )}

        <ButtonGroup center>
          <Button type="submit" disabled={isLoading}>
            {isLoading && <LoadingIndicator />}
            {!isLoading && "Login"}
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
}

export default Login;
