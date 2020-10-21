import React from "react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Main from "../Main";

// Jest methods https://jestjs.io/docs/en/expect

// simple test
test("renders a message", () => {
  const { container, getByText } = render(<Main />);
  expect(getByText("Be the first to know when we launch.")).toBeInTheDocument();
});

// API call

jest.mock("axios");

const API =
  "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";

test("Post to Api", () => {
  const data = {
    data: {
      name: "Fouad",
      email: "usedemail@airwallex.com",
    },
  };

  axios.post.mockImplementationOnce(() => Promise.resolve(data));

  // await expect(onsubmit('react')).resolves.toEqual(data);
  expect(axios.post).toHaveReturned()(`${API}`);
});
