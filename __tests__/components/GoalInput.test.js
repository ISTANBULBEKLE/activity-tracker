import React from "react";
import GoalInput from "../../components/GoalInput";
import { render } from "@testing-library/react-native";

describe("GoalInput", () => {
  test("Should render correctly", () => {
    render(<GoalInput />);
  });
});