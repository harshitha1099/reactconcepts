import React, { Component } from "react";

class Recipe2 extends Component {
    render() {
        return (
            <div>
                <h2 style={{color:"red"}}>Butter Chicken</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chicken_makhani.jpg/1200px-Chicken_makhani.jpg" width={300} height={300}></img>
                <h1 style={{color:"yellowgreen"}}>Steps In Making</h1>
                <p>Marinate chicken pieces in yogurt and lemon, anywhere from 2-3 hours to overnight. Heat 1 TBSP oil in a large saucepan over medium heat. Cook the shallots, onion, ginger,
                    and garlic until onions are translucent. Stir in the butter, lemon juice, spices, and bay leaf. Cook for 1 minute, stirring
                    continuously. Add tomato sauce, yogurt, and cream. Cook on high for about 2 minutes, continue
                    stirring. Reduce heat to low and simmer for 10 minutes. Add salt and pepper, remove from
                    heat, and set aside. Heat 1 TBSP oil in a heavy skillet over medium heat. Cook chicken until lightly browned
                    on all sides, about 10 minutes. Season chicken with 1 TBSP garam masala and 1/3 TBSP cayenne. Add a generous
                    spoonful of sauce to the chicken; simmer until the liquids have reduced and chicken is
                    cooked all the way through. Add the rest of the sauce to the chicken. Mix ground cashews and water, then stir into sauce. Cook 10 minutes or until sauce has
                    thickened.</p>
            </div>
        );
    }
}

export default Recipe2;