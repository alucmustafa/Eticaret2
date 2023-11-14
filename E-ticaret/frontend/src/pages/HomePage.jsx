
import { Slider } from "../components/Slider/Slider";
import { Categories } from "../components/Categories/Categories";
import { Products } from "../components/Products/Products";
import { Campaings } from "../components/Campaigns/Campaings";
import { Blogs } from "../components/Blogs/Blogs";
import { Brads } from "../components/Brads/Brads";
import { CampaingSingle } from "../components/CampaingSingle/CampaingSingle";
const HomePage = () => {
  return (
    <>
      <Slider/>
      <Categories />
      <Products />
      <Campaings />
      <Products />
      <Blogs />
      <Brads />
      <CampaingSingle />
     </>
  );
};

export default HomePage;
