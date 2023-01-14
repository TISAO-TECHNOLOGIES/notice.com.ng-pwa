### Importing the script tag in react component

```
const scriptResource = (path: String) => {
const script = document.createElement("script");
script.src = `${path}`;
script.src = "/src/assets/js/owl.carousel.min.js";
script.async = true;
document.body.appendChild(script);
};

useEffect(() => {
scriptResource("/src/assets/js/owl.carousel.min.js");
scriptResource("/src/assets/js/main.js");
}, []);
```
