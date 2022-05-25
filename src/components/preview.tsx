import React, { useEffect, useRef } from "react";

interface PreviewCodeProps {
  code: string;
}

const CodeHtml = `
<html>
    <head></head>
    <body>
        <div id="root"></div>
            <script>
                window.addEventListener("message", (event) => {
                    try{
                        eval(event.data);
                    }catch(err){
                        let root = document.querySelector("#root");
                        root.innerHTML = '<div style="color:red;"><h4> '+ err + '</h4></div>'
                        console.error(err);
                    } 
                    
                }, false);
            </script>
        
    </body>
</html>

`;

const PreviewCode: React.FC<PreviewCodeProps> = ({ code }) => {
  const iframeRef = useRef<any>();

  useEffect(() => {
    iframeRef.current.srcdoc = CodeHtml;
    setTimeout(() => {
      iframeRef.current.contentWindow.postMessage(code, "*");
    }, 50);
  
  }, [code]);

  return (
    <div className="relative previewBox grow h-full">
      <iframe
        ref={iframeRef}
        srcDoc={CodeHtml}
        sandbox="allow-scripts"
        className="bg-preview-light w-full h-full"
      />
    </div>
  );
};

export default PreviewCode;
