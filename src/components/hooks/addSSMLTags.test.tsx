// src/addSSMLTags.test.js
import { renderHook } from "@testing-library/react-hooks";
import {useAddSSMLTags} from "./useAddSSMLTags";

describe("addSSMLTags", () => {
  // Test case: add a break tag with 500ms to a sentence
  it("should add a break tag with 500ms to a sentence", () => {
    // Arrange
    const sentences = [
      { id: 1, text: "Hello" },
      { id: 2, text: "World" },
    ];
    const ssmlTags = [
      { name: "break", value: "500ms" },
    ];

    // Act
    const { result } = renderHook(() => useAddSSMLTags(sentences, ssmlTags));

    // Assert
    expect(result.current).toEqual([
      "<break time=\"500ms\" />Hello",
      "<break time=\"500ms\" />World",
    ]);
  });
});
