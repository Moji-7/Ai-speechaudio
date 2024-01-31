// src/useParseText.test.js
import { renderHook } from "@testing-library/react-hooks";
import {useParseText} from "./useParseText";

describe("useParseText", () => {
  // Test case 1: parse a text content with two sentences
  it("should parse a text content with two sentences", () => {
    // Arrange
    const textContent = {
      id: 1,
      title: "Hello",
      content: "This is a test. It has two sentences.",
    };

    // Act
    const { result } = renderHook(() => useParseText(textContent));

    // Assert
    expect(result.current).toEqual([
      { id: 1, text: "This is a test." },
      { id: 2, text: "It has two sentences." },
    ]);
  });

//   // Test case 2: parse a text content with no sentences
//   it("should parse a text content with no sentences", () => {
//     // Arrange
//     const textContent:any = []
//     // Act
//     const { result } = renderHook(() => useParseText(textContent));

//     // Assert
//     expect(result.current).toEqual([]);
//   });
});
