import { useState, useEffect } from "react";
import { Sentence, TextContent } from "../DTO/dto";

// Define the type for the text content object


export const useParseText = (textContent: TextContent): Sentence[] => {
    // Use state to store the sentences
    const [sentences, setSentences] = useState<Sentence[]>([]);

    // Use useEffect hook to parse the text content into sentences
    useEffect(() => {

            // Define a function to split the text content by punctuation marks
            const splitText = (text: string): string[] => {
                // Use a regular expression to match the punctuation marks
                const regex = /([.?!])\s*(?=[A-Z])/g;
                // Split the text by the punctuation marks and keep them in the result
                const splitText = text.split(regex);
                // Return the split text as an array of strings
                return splitText;
            };

            // Define a function to join the split text into sentences
            const joinText = (splitText: string[]): string[] => {
                // Initialize an empty array to store the sentences
                const sentences: string[] = [];
                // Loop through the split text array
                for (let i = 0; i < splitText.length; i += 2) {
                    // Check if the current element is the last one
                    if (i === splitText.length - 1) {
                        // Push the current element to the sentences array
                        sentences.push(splitText[i]);
                    } else {
                        // Concatenate the current element and the next element to form a sentence
                        const sentence = splitText[i] + splitText[i + 1];
                        // Push the sentence to the sentences array
                        sentences.push(sentence);
                    }
                }
                // Return the sentences as an array of strings
                return sentences;
            };

            // Define a function to create sentence objects from the sentences array
            const createSentences = (sentences: string[]): Sentence[] => {
                // Initialize an empty array to store the sentence objects
                const sentenceObjects: Sentence[] = [];
                // Loop through the sentences array
                for (let i = 0; i < sentences.length; i++) {
                    // Create a sentence object with an id and a text
                    const sentenceObject: Sentence = {
                        id: i + 1,
                        text: sentences[i],
                    };
                    // Push the sentence object to the sentence objects array
                    sentenceObjects.push(sentenceObject);
                }
                // Return the sentence objects as an array of objects
                return sentenceObjects;
            };
            if (textContent) {
                // Call the functions to parse the text content into sentences
                const splitedText = splitText(textContent.content);
                const sentences = joinText(splitedText);
                const sentenceObjects = createSentences(sentences);

                // Set the state with the sentence objects
                setSentences(sentenceObjects);
            }
        }, [textContent]);

    // Return the sentences as an array of objects
    return sentences;
};
