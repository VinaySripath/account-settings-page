import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("test the steps", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("check the completed state of a step", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const heading = screen.getByText("Account Settings");
    expect(heading).toBeInTheDocument();

    const description = screen.getByTestId("step-desc");
    expect(screen.getAllByTestId("step-container")[0]).toContainElement(
      description
    );

    const button = screen.getAllByTestId("stepbutton");
    expect(button[0]).toBeInTheDocument();

    userEvent.click(button[0]);
    const completeButton = screen.getByText("Done");
    expect(completeButton).toBeInTheDocument();
    userEvent.click(completeButton);
    expect(screen.getByTestId("completed-step")).toBeInTheDocument();
  });

  test("check the pending state of a step", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const description = screen.getByTestId("step-desc");
    expect(screen.getAllByTestId("step-container")[0]).toContainElement(
      description
    );

    const button = screen.getAllByTestId("stepbutton");
    expect(button[0]).toBeInTheDocument();
    userEvent.click(button[0]);

    const pendingButton = screen.getByText("Pending");
    expect(pendingButton).toBeInTheDocument();
    userEvent.click(pendingButton);
    expect(screen.getByTestId("pending-step")).toBeInTheDocument();
  });

  test("check the incomplete state of a step", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const description = screen.getByTestId("step-desc");
    expect(screen.getAllByTestId("step-container")[0]).toContainElement(
      description
    );

    const button = screen.getAllByTestId("stepbutton")[0];
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    userEvent.click(screen.getByText("Done"));

    const buttonClick1 = screen.getAllByTestId("stepbutton")[1];
    userEvent.click(buttonClick1);
    userEvent.click(screen.getByText("Done"));

    const buttonClick2 = screen.getAllByTestId("stepbutton")[0];
    userEvent.click(buttonClick2);

    const incompleteButton = screen.getByText("Incomplete");
    expect(incompleteButton).toBeInTheDocument();
    userEvent.click(incompleteButton);
    expect(screen.getAllByTestId("failed-step")[0]).toBeInTheDocument();
    expect(screen.getByTestId("completed-step")).toBeInTheDocument();
    expect(screen.getByTestId("step-desc")).toBeInTheDocument();
  });
});
