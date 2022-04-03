import React, { useEffect } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { S1, B1 } from "../../components/Fonts";
import Button, { STYLES } from "../../components/Button";
import { ButtonGroup } from "../../components/ButtonGroup";
import useStore from "../../store";
import { useGetPotentialParties } from "../../api";
import ChooseParty from "./ChooseParty";

const Title = styled(S1)`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.foreground.secondary};
`;

const StyledInput = styled.input`
  width: fill-available;
  height: 2rem;
  padding: 0.25rem;
  background-color: ${(props) => props.theme.colors.foreground.quintenary};
  font-size: ${(props) => props.theme.fonts.b1.size};
  font-weight: ${(props) => props.theme.fonts.b1.weight};
  letter-spacing: ${(props) => props.theme.fonts.b1.letterspacing};
  color: ${(props) => props.theme.colors.foreground.secondary};
  border: none;
  border-radius: 0.25rem;
  ::placeholder {
    color: ${(props) => props.theme.colors.foreground.tertiary};
  }
`;

const Container = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled(B1)`
  margin-bottom: 0.5rem;
`;

function Login() {
  const {
    register,
    handleSubmit,
    // TODO: handle errors
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();
  const name = useStore((state) => state.name);
  const setName = useStore((state) => state.setName);
  const setChosenPartyId = useStore((state) => state.setChosenPartyId);
  const chosenPartyId = useStore((state) => state.chosenPartyId);
  const { data, isLoading } = useGetPotentialParties(name);

  useEffect(() => {
    if (data && data.length === 1) {
      setChosenPartyId(data[0].fields.party);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (chosenPartyId) {
    return <Navigate to="/" replace />;
  }
  if (data && data.length > 1) {
    return <ChooseParty />;
  }
  return (
    <form
      onSubmit={handleSubmit((values) => {
        setName(values);
      })}
    >
      <Title>
        If you are responding for you and a guest (or your family), you&#39;ll
        be able to RSVP for your entire group.
      </Title>

      <Container>
        <Label>
          Please enter your first name
          <StyledInput name="firstName" {...register("firstName")} />
        </Label>
      </Container>
      <Container>
        <Label>
          Please enter your last name
          <StyledInput name="lastName" {...register("lastName")} />
        </Label>
      </Container>

      <ButtonGroup center>
        <Button buttonStyle={STYLES.PRIMARY} type="submit">
          Next
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default Login;
