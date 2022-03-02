import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import Input from "../../../components/Input/Input";
import { S1 } from "../../../components/Fonts/Fonts";
import Button, { STYLES, TYPES } from "../../../components/Button/Button";
import { ButtonGroup } from "../../../components/ButtonGroup/ButtonGroup";
import { required } from "../../../form/validations";
import { Link } from "react-router-dom";
import { HOME } from "../../../routes/routes";

const Title = styled(S1)`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.foreground.secondary};
`;

const NameForm = ({
  handleSubmit,
  invalid,
  submitting,
  pristine,
  onSubmit,
}) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, invalid, submitting, pristine }) => (
      <form onSubmit={handleSubmit}>
        <Title>
          If you are responding for you and a guest (or your family), you&#39;ll
          be able to RSVP for your entire group.
        </Title>

        <Field
          name="firstName"
          label="Please enter your first name"
          component={Input}
          validate={required}
        />
        <Field
          name="lastName"
          label="Please enter your last name"
          component={Input}
          validate={required}
        />

        <ButtonGroup right>
          <Button buttonType={TYPES.OUTLINE}>
            <Link to={HOME.path}>Cancel</Link>
          </Button>
          <Button
            buttonStyle={STYLES.PRIMARY}
            type="submit"
            disabled={invalid || submitting || pristine}
          >
            Next
          </Button>
        </ButtonGroup>
      </form>
    )}
  </Form>
);

export default NameForm;
