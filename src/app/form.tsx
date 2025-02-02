'use client';

import { useActionState } from "react";
import { addProduct } from "./addProduct";

const initialState = {
    message: '',
}

export default function AddProductForm() {
    const [state, formAction, pending] = useActionState(addProduct, initialState);

    return (
        <div className="mx-auto mt-16 w-full max-w-lg">
            <form
                className="rounded border p-8 shadow-md"
                action={ formAction }
            >
                <div className="mb-2">
                    <label className="sr-only" htmlFor="name">
                        Nome do Produto
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        className="w-full rounded border bg-neutral-50 px-4 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="sr-only" htmlFor="description">
                        Descricao
                    </label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Descricao"
                        className="w-full rounded border bg-neutral-50 px-4 py-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="sr-only" htmlFor="price">
                        Preco
                    </label>
                    <input
                        type="text"
                        name="price"
                        placeholder="Preco"
                        className="w-full rounded border bg-neutral-50 px-4 py-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="sr-only" htmlFor="stock">
                        Estoque
                    </label>
                    <input
                        type="text"
                        name="stock"
                        placeholder="Estoque"
                        className="w-full rounded border bg-neutral-50 px-4 py-2"
                    />
                </div>

                <button
                    className="rounded bg-neutral-800 px-4 py-2 text-neutral-200 hover:bg-neutral-700"
                    type="submit"
                >
                    Salvar
                </button>
            </form>
            <div></div>
        </div>
    );
}