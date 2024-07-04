import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => {
          if (text[index] === '\n') {
            return prev + '<br />';
          }
          return prev + text[index];
        });
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, speed, onComplete]);

  return <span dangerouslySetInnerHTML={{ __html: displayedText }} />;
};

export default TypingEffect;
