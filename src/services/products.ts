export async function fetchProducts() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const data = await fetch("/api/products")

        return data.json();

    } catch (error) {
        throw new Error('Failed to fetch revenue data.');
    }
}