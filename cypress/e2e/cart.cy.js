describe('Cart Functionality - not exhaustive', () => {

    it('can add items to cart', () => {
        // Navigate to product page
        // Click Add to cart
        // Verify cart total increases by one
    })

    it('can remove items to cart using link', () => {
        // Use API to populate cart with items
        // click My Cart to expand
        // Click Remove next to an item
        // Verify the item is no longer there
        // Verify the cart total decreases by the amount added of the single item
    })

    it('can add items to carts changing number of items to 0', () => {
        // Use API to populate cart with items
        // click My Cart to expand
        // Click Remove next to an item
        // Verify the item is no longer there
        // Verify the cart total decreases by by the amount added of the single item
    })

    it('can increase the amount of items in cart', () => {
        // Use API to populate cart with items
        // Click My Cart to expand
        // Click the number for an item
        // Change it to a higher number
        // Verify the total updates to number * price
        // Verify My Cart number updates to new total items
    })

    it('can decrease the amount of items in cart', () => {
        // Use API to populate cart with items
            // Make sure one is more than 1
        // Click My Cart to expand
        // Click the number for an item
        // Change it to a lower number
        // Verify the total updates to number * price
        // Verify My Cart number updates to new total items
    })

    it('has no accessibility errors when cart is expanded with items', () => {
        // Use API to populate cart with items
        // Click My Cart to expand
        // Use ally plugin to verify accessibility
    })

})

// If possible, do visual testing on whole page to ensure that no unexpected UI changes occurred