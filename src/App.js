import Layout from './components/layout'
import Banner from "./sections/banner"
import CallToAction from "./sections/callToAction"
import Menu from "./sections/menu"
import Service from "./sections/service"
import SpecialOffer from "./sections/specialOffer"
import Testimonials from "./sections/testimonial"

function App() {
  return (
    <Layout>
      <Banner/>
      <Service/>
      <Menu/>
      <SpecialOffer/>
      <Testimonials/>
      <CallToAction/>
    </Layout>
  );
}

export default App;
