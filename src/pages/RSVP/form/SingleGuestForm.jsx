/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-class-assign */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/static-property-placement */
import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import { H5, S1 } from "../../../components/Fonts/Fonts";
import RadioGroup from "../../../components/Radio/RadioGroup";
import Button, { STYLES, TYPES } from "../../../components/Button/Button";
import { ButtonGroup } from "../../../components/ButtonGroup/ButtonGroup";
import { required } from "../../../form/validations";

const CurrentGuestHeader = styled.div`
  margin-bottom: 1rem;
`;

const GuestName = styled(H5)`
  margin-bottom: 0.25rem;
`;

const GuestNumberIndicator = styled(S1)`
  color: ${(props) => props.theme.colors.foreground.tertiary};
`;

function SingleGuestForm({
  onSubmit,
  onCancel,
  cancelBtnLabel,
  currentGuest,
  guestNumberIndicatorText,
}) {
  const onGuestFormSubmit = (values) => {
    onSubmit(values);
  };

  const onGuestFormCancel = () => {
    onCancel();
  };

  return (
    <>
      <CurrentGuestHeader>
        <GuestName>{`${currentGuest.fields.first_name} ${currentGuest.fields.last_name}`}</GuestName>
        <GuestNumberIndicator>{guestNumberIndicatorText}</GuestNumberIndicator>
      </CurrentGuestHeader>
      <Form enableReinitialize onSubmit={onSubmit}>
        {({ handleSubmit, invalid, form, submitting }) => (
          <form>
            <Field
              name="isAttending"
              label="Will you be joining us for the Nikkah?"
              options={[
                { label: "Let the good times roll!", value: "True" },
                {
                  label: "Sorry, the show must go on without me",
                  value: "False",
                },
              ]}
              validate={required}
              component={RadioGroup}
            />

            <Field
              name="isAttendingAfterParty"
              label="Will you be joining us for the after party?"
              options={[
                { label: "Let the good times roll!", value: "Yes" },
                { label: "Sorry, the show must go on without me", value: "No" },
              ]}
              validate={required}
              component={RadioGroup}
            />

            <ButtonGroup right>
              <Button
                buttonType={TYPES.OUTLINE}
                onClick={() => {
                  // onGuestFormCancel();
                  form.reset();
                }}
              >
                {cancelBtnLabel()}
              </Button>
              <Button
                buttonStyle={STYLES.PRIMARY}
                disabled={invalid || submitting}
                onClick={() => {
                  form.reset();
                  onSubmit();
                }}
              >
                Next
              </Button>
            </ButtonGroup>
          </form>
        )}
      </Form>
    </>
  );
}

export default SingleGuestForm;
