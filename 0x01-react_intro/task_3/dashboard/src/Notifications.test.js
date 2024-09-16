import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
  test("renders without crashing", () => {
    render(<Notifications />);
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test("renders three list items", () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(3);
  });

  test('renders the text "Here is the list of notifications"', () => {
    render(<Notifications />);
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
  });
});