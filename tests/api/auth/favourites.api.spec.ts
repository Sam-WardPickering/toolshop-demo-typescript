import { test, expect } from '../../fixtures/auth.fixture';

interface Product {
    id: string
    name: string
    description: string
    price: number
    is_location_offer: boolean
    is_rental: boolean
    co2_rating: string
    in_stock: boolean
    is_eco_friendly: boolean
    product_image: Record<string, unknown>
};

interface FavoriteItem {
    id: string
    user_id: string
    product_id: string
    product: Product
}

test('GET /favorites - retrieves all favourites', async ({ request, token }) => {

    const favorites = await request.get('/favorites', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    expect(favorites.status()).toBe(200);

    const favouritesBody: FavoriteItem[] = await favorites.json();

    expect(favouritesBody.length).toBeGreaterThan(0);
    expect(favouritesBody[0].id).toBeDefined();
    expect(favouritesBody[0].product.name).toBeDefined();
    expect(favouritesBody[0].product.price).toBeGreaterThan(0);
        
});


test('GET /favourites - 401 when user not authenticated', async ({ request }) => {
    const favorites = await request.get('/favorites');

    expect(favorites.status()).toBe(401);
    expect((await favorites.json()).message).toBe('Unauthorized');

});


test('POST /favourites - store new favourite', async ({ request, token }) => {
    //Get products
    const productsResponse = await request.get('/products');
    expect(productsResponse.status()).toBe(200);

    // Get first returned product
    const product = (await productsResponse.json()).data[0];

    // Add product to favourites
    const response = await request.post('/favorites', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: {
            product_id: product.id,
        },
    });

    console.log(await response.json());
    

    // Verify product is added to favourites
});