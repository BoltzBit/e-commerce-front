import AddProductForm from "./form";
import { formatMoney } from "./formatMoney";

//TODO Extrair os componentes dessa tela
export default async function Home() {
    const showForm = false;

    if (!showForm) {
        return (<ProductList />);
    }
    return (<AddProductForm />);
}

export async function ProductList() {
    const data = await fetch('http://localhost:5091/Product');
    const products = await data.json();

    return (
        <div className="flex min-h-[calc(100dvh-64px)] flex-col">
            <main className="flex-1">
                <section className="mx-auto max-w-7xl p-8 pb-16">
                    <ul
                        role="list"
                        data-testid="ProductList"
                        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {products.map((product: any, index: any) => (
                            <ProductElement
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export function ProductElement({ product }: { product: any }) {
    return (
        <li>
            <div>
                {/* TODO: Ao atualizar a api utilizar este componente pra renderizar as imagens */}

                {/* <ProductImageWrapper
							src={product.thumbnail.url}
							alt={product.thumbnail.alt ?? ""}
							width={512}
							height={512}
							sizes={"512px"}
                /> */}

                <div className="aspect-square overflow-hidden bg-neutral-50">
                    <img className="h-full w-full object-contain object-center p-2" />
                </div>

                <div className="mt-2 flex justify-between">
                    <div>
                        <h3 className="mt-1 text-sm font-semibold text-neutral-900">{product.name}</h3>
                        <p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">
                            Stock: {product?.stock}
                        </p>
                    </div>
                    <p className="mt-1 text-sm font-medium text-neutral-900" data-testid="ProductElement_PriceRange">
                        {formatMoney(product?.price)}
                    </p>
                </div>
            </div>
        </li>
    );
}
