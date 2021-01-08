import { mapRecipe } from './recipe.service';

describe("recipe-service-tests", () => {

    // Valid Input
    test('Test a valid recipe is mapped with two ingredients', () => {
        // Arrange 
        const validRecipe =         {
            "idMeal": "52957",
            "strMeal": "Fruit and Cream Cheese Breakfast Pastries",
            "strIngredient1": "Cream Cheese",
            "strIngredient2": "Sugar"
        }

        // Act
        const result = mapRecipe(validRecipe);

        // Assert
        expect(result.ingredients.length).toBe(2);
        expect(result.isFav).toBe(false);
        expect(result.id).toBe("52957");
    })

    // Invalid Input..
    test('Test a invalid recipe is mapped with 0 ingredients', () => {
        // Arrange 
        const invalidRecipe = {
            "idMeal": "52957",
            "strMeal": "Fruit and Cream Cheese Breakfast Pastries",
            // No ingredients
        }

        // Act
        const result = mapRecipe(invalidRecipe);

        // Assert
        expect(result.ingredients.length).toBe(0);
        expect(result.ingredients).not.toBeNull();
    })

    // Null Input test??

});