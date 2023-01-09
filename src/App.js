import Layout from "./components/layout";
import Banner from "./sections/banner";
import CallToAction from "./sections/callToAction";
import Menu from "./sections/menu";
import Service from "./sections/service";
import SpecialOffer from "./sections/specialOffer";
import Testimonials from "./sections/testimonial";
import Seo from "./components/seo";

function App() {
  return (
    <Layout>
      <Seo
        title="Order Pizza Online || Pizza Pizza"
        description="Order your favourites from Pizza Pizza & get 15% Off upto Rs.300 on minimum order of Rs.600. Experience Safe, Hygienic & Contactless Delivery.Trust in Every Bite. 30 Minutes Delivery. Cashless Payment Option. Delivery In 30 Minutes."
        name="Company name"
        type="article"
      />
      <Banner />
      <Service />
      <Menu />
      <SpecialOffer />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
}

export default App;
