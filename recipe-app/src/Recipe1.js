import React, { Component } from "react";

class Recipe1 extends Component {
    render() {
        return (
            <div>
                <h2 style={{color:"red"}}>Grilled Chicken</h2>
                <img src="https://easychickenrecipes.com/wp-content/uploads/2020/06/grilled-chicken-recipe-best-5-of-6.jpg" width={300} height={300}></img>
                <h1 style={{color:"yellowgreen"}}>Steps in Making</h1>

                <p>Combine all marinade ingredients in a bowl or freezer bag. Add chicken and toss well to combine.Marinade for a 30 minutes (or up to 4 hours) before cooking chicken.
Preheat grill to medium high heat.Place chicken on the grill for 7-8 minutes. Flip over and cook an additional 7-8 minutes or until no pink remains and chicken reaches 165°F.Rest 3-5 minutes before slicing.</p>
            </div>
        );
    }
}

export default Recipe1;