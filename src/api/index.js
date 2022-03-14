import { useQuery, useMutation, useQueryClient } from "react-query";

export const useGetPotentialParties = (name) =>
  useQuery(
    ["potentialParties", name],
    () =>
      fetch(
        `${process.env.REACT_APP_API_URL}/parties/?first_name=${name.firstName}&last_name=${name.lastName}`
      ).then((response) => response.json()),
    {
      enabled:
        Boolean(name) && Boolean(name.firstName) && Boolean(name.lastName),
    }
  );

export const useGetGuests = (pk) =>
  useQuery(
    ["guests", pk],
    () =>
      fetch(`${process.env.REACT_APP_API_URL}/guests/${pk}/`).then((response) =>
        response.json()
      ),
    { enabled: Boolean(pk) }
  );

export const useGetParty = (pk) =>
  useQuery(
    ["party", pk],
    () =>
      fetch(`${process.env.REACT_APP_API_URL}/parties/${pk}/`).then(
        (response) => response.json()
      ),
    { enabled: Boolean(pk) }
  );

export const usePostGuests = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ chosenPartyId, updatedGuests }) =>
      fetch(`${process.env.REACT_APP_API_URL}/guests/${chosenPartyId}/`, {
        method: "POST",
        body: JSON.stringify(updatedGuests),
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("party");
        queryClient.invalidateQueries("guests");
      },
    }
  );
};
