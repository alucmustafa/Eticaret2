import { CampaingSingle } from "../components/CampaingSingle/CampaingSingle";
import { Categories } from "../components/Categories/Categories";
import { Products } from "../components/Products/Products";

const ShopPage = () => {
  return (
    <>
        <Categories/>
       <Products/>
       <CampaingSingle/>
       <Products/>
    </>
  )
}

export default ShopPage