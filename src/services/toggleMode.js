const toggleMode = (e)=>{
    e.preventDefault();
    if (e.target.children[0].style.left === "0.5rem") {
        e.target.children[0].style.left = "3rem";
        const colors = {
            background_Color: "#0E0A06",
            container_Color: "#000",
            text_color: "rgb(156 163 175)",
            text_color_nonHeading: "#ffff",
            text_color_minitext: "#9E9E9E",
            input_background: "#202124",
            selector_background: "#1a1c1f"
        }
        localStorage.setItem("colors", JSON.stringify(colors));
        return colors;
    }else{
        e.target.children[0].style.left = "0.5rem";
        const colors = {
            background_Color: "#F1F5F9",
            container_Color: "#ffff",
            text_color: "#000",
            text_color_nonHeading: "#000",
            text_color_minitext: "#1f2937",
            input_background: "#f3f4f6",
            selector_background: "#fff"
        }
        localStorage.setItem("colors", JSON.stringify(colors));
        return colors;
    }
}

export default toggleMode;