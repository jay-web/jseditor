import React, { useEffect, useRef} from "react";

interface PreviewCodeProps {
  code: string;
  err: string;
}

const CodeHtml = `
<html>
    <head></head>
    <body>
        <div id="root"></div>
            <script>
                const handleError = (err) => {
                  let root = document.querySelector("#root");
                  root.innerHTML = '<div style="color:red;"><h4> '+ err + '</h4></div>'
                  console.error(err);
                }
                window.addEventListener('error', (event) => {
                  event.preventDefault();
                  handleError(event.error);
                })
                window.addEventListener("message", (event) => {
                    try{
                        eval(event.data);
                    }catch(err){
                       handleError(err);
                    } 
                    
                }, false);
            </script>
        
    </body>
</html>

`;

const PreviewCode: React.FC<PreviewCodeProps> = ({ code, err }) => {
  const iframeRef = useRef<any>();
  

  useEffect(() => {
    iframeRef.current.srcdoc = CodeHtml;
    setTimeout(() => {
      iframeRef.current.contentWindow.postMessage(code, "*");
    }, 50);
  
  }, [code]);

  return (
    <div className="relative previewBox bg-white grow h-full">
      <iframe
        ref={iframeRef}
        srcDoc={CodeHtml}
        sandbox="allow-scripts"
        className="bg-preview-light w-full h-full"
      />
     { err ?  <div className="absolute top-1 left-1 text-red-500">{err}</div> : null}
    </div>
  );
};

export default PreviewCode;
