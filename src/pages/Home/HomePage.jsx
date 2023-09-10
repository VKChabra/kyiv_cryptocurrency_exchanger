import Home from 'components/home';
import AboutUs from 'components/homePageSection/AboutUs';
import TopCourses from 'components/homePageSection/TopCourses';
import HomePageReviews from 'components/homePageSection/HomePageReviews';

const HomePage = () => (
  <div className="homepage">
    <Home />
    <TopCourses />
    <AboutUs />
    <HomePageReviews />
  </div>
);

export default HomePage;
