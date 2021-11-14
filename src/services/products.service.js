import axios from "@/plugins/axios";
import ImageService from "@/services/images.service";

export class ProductsApiService {
  #normalize(products) {
    return products.map((product) => ({
      id: product.id,
      title: product.dish,
      image: ImageService.getRandomImage(),
      description: product.description,
      price: Math.floor(Math.random() * (1000 - 10) + 10),
      favourite: false,
    }));
  }

  async query(count = 30, config = {}) {
    const { data } = await axios.get(`/food/random_food?size=${count}`, config);

    return this.#normalize(data);
  }
}
