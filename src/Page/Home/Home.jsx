import MakeAppointment from "../../Component/MakeAppointment/MakeAppointment";
import Carusel from "../../Component/Carusel/Carusel";
import Whylex from "../../Component/Whylex/Whylex";
import Facility from "../../Component/Facility/Facility";
import Packages from "../../Component/Packages/Packages";
import Stats from "../../Component/Stats/Stats";
import Subscribe from "../../Component/Subscribe/Subscribe";
import Moto from "../../Component/Moto/Moto";
import Testymony from "../../Component/Testymony/Testymony";
import Lawyer from "../../Component/Lawyer/Lawyer";
import Service from "../../Component/Service/Service";


const Home = () => {
    return (
        <div >
            <Carusel></Carusel>
            <Moto></Moto>
            <Whylex></Whylex>
            <Service></Service>
            <Stats></Stats>
            <Packages></Packages>
            
            <Lawyer></Lawyer>
            <MakeAppointment></MakeAppointment>
            <Testymony></Testymony>
            <Facility></Facility>
            <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;