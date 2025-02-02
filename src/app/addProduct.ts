"use server";

export async function addProduct(prevState: any, formData: FormData) {

    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const price = Number.parseFloat(formData.get("price")?.toString() ?? '0');
    const stock = Number.parseInt(formData.get("stock")?.toString() ?? '0');

    //TODO: Validar campos do formulario com mensagem e nao throw error
    if (!name || !description || !price || !stock) {
        throw new Error("All fields are required");
    }

    const product: any = {
        name,
        description,
        price,
        stock
    };

    console.log(product);

    const response = await fetch('http://localhost:5091/Product',
        {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })

    const data = await response.json()

    console.log(data);

    return {message: 'ok'};
}