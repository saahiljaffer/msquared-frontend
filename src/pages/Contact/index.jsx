import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { S1, S2 } from "../../components/Fonts";
import Button from "../../components/Button";
import { ButtonGroup } from "../../components/ButtonGroup";
import useStore from "../../store";
import NavBar from "../../components/NavBar";
import LoadingIndicator from "../../components/LoadingIndicator";
import Alert from "../../components/Alert";

const Title = styled(S1)`
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

const StyledTextArea = styled.textarea`
  width: fill-available;
  padding: 0.25rem;
  background-color: ${(props) => props.theme.colors.foreground.tertiary};
  font-size: ${(props) => props.theme.fonts.s2.size};
  color: ${(props) => props.theme.colors.foreground.default};
  font-weight: ${(props) => props.theme.fonts.s2.weight};
  font-family: "Niveau Grotesk";
  padding: 10px;
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
  const chosenPartyId = useStore((state) => state.chosenPartyId);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      <NavBar />
      <form
        onSubmit={handleSubmit((values) => {
          setLoading(true);
          fetch(`${process.env.REACT_APP_API_URL}/contact/${chosenPartyId}/`, {
            method: "POST",
            body: JSON.stringify(values),
          }).then(() => {
            setLoading(false);
            setSuccess(true);
          });
        })}
      >
        <Title>Questions</Title>

        <Container>
          <Label>
            Please enter your name
            <StyledInput
              name="name"
              {...register("name", { required: "This is required." })}
            />
          </Label>
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <Alert variant="error">{message}</Alert>}
          />
        </Container>
        <Container>
          <Label>
            Please enter your message
            <StyledTextArea
              rows="4"
              name="message"
              {...register("message", { required: "This is required." })}
            />
          </Label>
          <ErrorMessage
            errors={errors}
            name="message"
            render={({ message }) => <Alert variant="error">{message}</Alert>}
          />
        </Container>

        {success && (
          <StyledAlert variant="success">Message sent successfully</StyledAlert>
        )}

        <ButtonGroup center>
          <Button type="submit" disabled={loading}>
            {loading && <LoadingIndicator />}
            {!loading && "Submit"}
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
}

export default Login;
