import services from "@/common/enums/services.enum";
import { ProductsApiService } from "@/services/products.service";

export const createServices = () => ({
  [services.PRODUCTS]: new ProductsApiService(),
});
