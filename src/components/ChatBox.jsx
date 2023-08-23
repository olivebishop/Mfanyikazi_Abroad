import React, { useEffect } from 'react';

function ChatWidget() {
  useEffect(() => {
    // Create a new script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://embed.tawk.to/64e601aecc26a871b030e7a6/1h8h7d59f';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Append the script element to the body of the document
    document.body.appendChild(script);

    // Clean up the script element when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Your component's content */}
    </div>
  );
}

export default ChatWidget;
