import { Carousel } from "@/components/carousel";
import Header from "../components/header";
import Footer from "@/components/footer";

export default function Home() {
  const data = [
    { img: "/post4.png", title: "Butterfly hoodie", price: "₮120'000" },
    {
      img: "angelpost.png",
      title: "Limited Angel hoodie Bundle",
      price: "₮240'000",
    },
    {
      img: "angelpost1.png",
      title: "Limited Angel hoodie White",
      price: "₮120'000",
    },
    {
      img: "angelpost2.png",
      title: "Limited Angel hoodie Black",
      price: "₮120'000",
    },
  ];
  return (
    <div>
      <Header />
      <div className="p-[20px] flex flex-col items-center justify-center">
        <div className="w-full">
          <p className="font-[600] text-[20px] mb-2">Coming Soon</p>
          <Carousel />
          <p className="font-[600] text-[20px] my-2">Available products</p>
          <div className="grid lg:grid-cols-3 gap-4 grid-cols-1">
            {data.map((item) => {
              return (
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                  <img
                    class="p-8 rounded-t-lg"
                    src={item.img}
                    alt="product image"
                  />

                  <div class="px-5 pb-5">
                    <h5 class="text-xl font-semibold tracking-tight">
                      {item.title}
                    </h5>
                  </div>
                  <div class="px-5 pb-5">
                    <h5 class="text-xl font-semibold tracking-tight">
                      {item.price}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
