import { useEffect } from "react";

const ScriptResource = (resourceUrl: String) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = `${resourceUrl}`;
		script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, [resourceUrl]);
};

// const scriptResource = (path: String) => {
//   const script = document.createElement("script");
//   script.src = `${path}`;
//   script.async = true;
//   document.body.appendChild(script);
// };
export default ScriptResource;
