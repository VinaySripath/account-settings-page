import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/react";
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

    const buttonClick2 = screen.getAllByTestId("stepbutton")[2];
    userEvent.click(buttonClick2);
    userEvent.click(screen.getByText("Done"));

    const buttonClick3 = screen.getAllByTestId("stepbutton")[3];
    userEvent.click(buttonClick3);
    userEvent.click(screen.getByText("Done"));

    const buttonClick4 = screen.getAllByTestId("stepbutton")[4];
    userEvent.click(buttonClick4);
    userEvent.click(screen.getByText("Done"));

    const buttonClick5 = screen.getAllByTestId("stepbutton")[0];
    userEvent.click(buttonClick5);

    const incompleteButtonClick = screen.getByText("Incomplete");
    expect(incompleteButtonClick).toBeInTheDocument();
    userEvent.click(incompleteButtonClick);
    expect(screen.getAllByTestId("failed-step")[0]).toBeInTheDocument();
    expect(screen.getAllByTestId("completed-step")[1]).toBeInTheDocument();
    expect(screen.getAllByTestId("step-desc")[0]).toBeInTheDocument();

    const buttonClick6 = screen.getAllByTestId("stepbutton")[1];
    userEvent.click(buttonClick6);

    const incompleteButtonClick2 = screen.getByText("Incomplete");
    expect(incompleteButtonClick2).toBeInTheDocument();
    userEvent.click(incompleteButtonClick2);

    expect(screen.getAllByTestId("failed-step")[0]).toBeInTheDocument();
    expect(screen.getAllByTestId("failed-step")[1]).toBeInTheDocument();
    const step = screen.getAllByTestId("step");
    expect(within(step[0]).getByTestId("step-desc")).toBeInTheDocument();
    expect(within(step[1]).queryByTestId("step-desc")).toBeNull();
  });
});
