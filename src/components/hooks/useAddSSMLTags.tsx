import { useState, useEffect } from "react";

// Define the type for the sentence object
type Sentence = {
  id: number;
  text: string;
};

// Define the type for the SSML tag object
type SSMLTag = {
  name: string;
  value: string;
};

export const useAddSSMLTags = (
  sentences: Sentence[],
  ssmlTags: SSMLTag[]
): string[] => {
  // Use state to store the sentences and the SSML tags
  const [sentencesWithSSML, setSentencesWithSSML] = useState<string[]>([]);

  // Use useEffect to update the sentences with the SSML tags
  useEffect(() => {
    // Define a function to add SSML tags to a sentence
    const addSSMLTags = (sentence: string, ssmlTags: SSMLTag[]): string => {
      // Loop through the SSML tags array
      for (let i = 0; i < ssmlTags.length; i++) {
        // Get the current SSML tag name and value
        const { name, value } = ssmlTags[i];
        // Use a switch statement to handle different SSML tag names and values
        switch (name) {
          case "break":
            // Add a break tag with the specified time value
            sentence = `<break time="${value}" />${sentence}`;
            break;
          case "emphasis":
            // Add an emphasis tag with the specified level value
            sentence = `<emphasis level="${value}">${sentence}</emphasis>`;
            break;
          case "say-as":
            sentence = `<say-as interpret-as="${value}">${sentence}</say-as>`;
            break;
          default:
            break;
        }
      }
      // Return the sentence with the SSML tags
      return sentence;
    };

    // Initialize an empty array to store the sentences with the SSML tags
    const sentencesWithSSML: string[] = [];
    // Loop through the sentences array
    for (let i = 0; i < sentences.length; i++) {
      // Get the current sentence object
      const { id, text } = sentences[i];
      // Add SSML tags to the sentence text
      const sentenceWithSSML = addSSMLTags(text, ssmlTags);
      // Push the sentence with the SSML tags to the array
      sentencesWithSSML.push(sentenceWithSSML);
    }
    // Set the state with the sentences with the SSML tags
    setSentencesWithSSML(sentencesWithSSML);
  }, [sentences, ssmlTags]);

  // Return the sentences with the SSML tags as an array of strings
  return sentencesWithSSML;
};
