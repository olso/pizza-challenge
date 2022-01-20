import React from "react";
import {
  render,
  screen,
  within,
  waitFor,
  fireEvent,
} from "@testing-library/react";
// import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";

import App from "./App";
import testIds from "./consts/testIds";
import { routes } from "./consts/routes";

/**
 * Would usually split to test things separately, different states, etc
 */
test("one big happy path to pizza", async () => {
  const PIZZA_NAME = "ModeRNA";

  render(<App />);

  expect(
    within(screen.getAllByTestId(testIds.pizzaCard)[0]).getAllByRole(
      "heading",
      {
        level: 5,
      }
    )[0]
  ).toHaveTextContent("Loading...");

  await waitFor(() =>
    expect(
      within(screen.getAllByTestId(testIds.pizzaCard)[0]).getAllByRole(
        "heading",
        {
          level: 5,
        }
      )[0]
    ).toHaveTextContent(PIZZA_NAME)
  );

  fireEvent.click(screen.getAllByTestId(testIds.pizzaCard)[0]);

  await waitFor(() =>
    expect(screen.getAllByTestId(testIds.addAndCheckout)[0]).not.toBeDisabled()
  );

  fireEvent.click(screen.getAllByTestId(testIds.addAndCheckout)[0]);

  await waitFor(() =>
    expect(window.location.pathname).toBe(routes.CHECKOUT.url())
  );

  await waitFor(() =>
    expect(
      within(screen.getAllByTestId(testIds.checkoutItem)[0]).getAllByRole(
        "heading",
        {
          level: 5,
        }
      )[0]
    ).toHaveTextContent(PIZZA_NAME)
  );

  fireEvent.blur(
    within(screen.getByTestId(testIds.checkoutForm.name)).getByRole("textbox")
  );

  // formik bugs ahead, act() doesn't work properly
  // https://github.com/jaredpalmer/formik/issues/1543#issuecomment-737262149

  expect(
    await screen.findByText(/Name is a required field/i)
  ).toBeInTheDocument();

  fireEvent.change(
    within(screen.getByTestId(testIds.checkoutForm.name)).getByRole("textbox"),
    { target: { value: "A" } }
  );

  expect(
    await screen.findByText(/Name is a required field/i)
  ).not.toBeInTheDocument();

  fireEvent.change(
    within(screen.getByTestId(testIds.checkoutForm.address)).getByRole(
      "textbox"
    ),
    { target: { value: "B" } }
  );

  fireEvent.change(
    within(screen.getByTestId(testIds.checkoutForm.phone)).getByRole("textbox"),
    { target: { value: "C" } }
  );

  fireEvent.blur(
    within(screen.getByTestId(testIds.checkoutForm.cardNumber)).getByRole(
      "textbox"
    )
  );

  expect(
    await screen.findByText(/(wish card-validator would give a reason)/i)
  ).toBeInTheDocument();

  fireEvent.change(
    within(screen.getByTestId(testIds.checkoutForm.cardNumber)).getByRole(
      "textbox"
    ),
    { target: { value: "4024 0071 4954 0634" } }
  );

  fireEvent.change(
    within(screen.getByTestId(testIds.checkoutForm.cardExpiration)).getByRole(
      "textbox"
    ),
    { target: { value: "02/23" } }
  );

  fireEvent.change(
    within(screen.getByTestId(testIds.checkoutForm.cardCvv)).getByRole(
      "textbox"
    ),
    { target: { value: "60" } }
  );

  await waitFor(() =>
    expect(screen.getAllByTestId(testIds.checkoutForm.submit)[0]).toBeDisabled()
  );

  fireEvent.change(
    within(screen.getByTestId(testIds.checkoutForm.cardCvv)).getByRole(
      "textbox"
    ),
    { target: { value: "606" } }
  );

  await waitFor(() =>
    expect(
      screen.getAllByTestId(testIds.checkoutForm.submit)[0]
    ).not.toBeDisabled()
  );

  fireEvent.click(screen.getAllByTestId(testIds.checkoutForm.submit)[0]);

  await waitFor(() =>
    expect(window.location.pathname).toBe(routes.EXPLORE.url())
  );
});
