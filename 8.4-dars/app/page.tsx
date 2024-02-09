import Filter from './components/Filter'

export const getProduct = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  return res.json();
};

interface ISearchParams {
  limit: number;
  skip: number;
  search: string;
}

export default async function page({ searchParams }) {
  const products = await getProduct();
  return (
    <>
      <div className="app">
        <div className="p-10">
          <form>
            <input type="text" placeholder="Search" />
            <button>search</button>
          </form>
          <div className="flex gap-5">
            <ul className="grid grid-cols-3">
              {products.map((product) => {
                return (
                  <li className="ml-1 text-black mt-1 p-10 bg-slate-200">
                    <img
                      src={product.images[0]}
                      width={300}
                      alt="products img"
                    />
                    <h2 className="mt-5">{product.title}</h2>
                    <p className="mt-5">{product.description}</p>
                    <button className="bg-slate-900 text-white p-3 category">
                      {product.category.name}
                    </button>
                    <h4 className="mt-5">Price: {product.price}$</h4>
                  </li>
                );
              })}
            </ul>
            <Filter/>
          </div>
        </div>
      </div>
    </>
  );
}
