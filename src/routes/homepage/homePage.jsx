import Searchbar from "../../components/searchbar/searchbar";
import "./homePage.scss"

function HomePage() {
    return (
        <div className="homepage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum qui sapiente necessitatibus dolor earum, in sequi exercitationem, distinctio fugit ullam similique aliquam provident odit rem soluta hic nesciunt eaque commodi cumque. Animi?
                    </p>
                    <Searchbar />

                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property ready</h2>
                        </div>


                    </div>
                </div>
            </div>
            <div className="imageContainer">
                <img src="/bg.png" alt="" />
            </div>


        </div>
    )
}

export default HomePage;