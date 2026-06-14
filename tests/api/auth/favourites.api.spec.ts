import { test, expect } from '../../fixtures/auth.fixture';

interface LoginResponse {
    access_token: string;
    token_type: string;
};

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
