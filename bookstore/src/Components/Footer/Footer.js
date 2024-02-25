
import Icon from "../Icon/Icon";


function Footer() {

    return (
        <>
            <footer className="text-center position-absolute bottom-0 w-100" style={{ "backgroundColor": "rgb(60, 60, 60)" }}>
                <div className="container pt-4 " >
                    <section className="" >

                    </section>
                </div>

                <div className="text-center  p-3">
                    <div className=" row ">

                        <div className="col">
                            <Icon iconclass="bi-linkedin" />
                            <p className="text-white fs-6">LinkedIn</p>
                        </div>
                        <div className="col">
                            <Icon iconclass="bi-facebook" />
                            <p className="text-white fs-6">Facebook</p>
                        </div>
                        <div className="col">
                            <Icon iconclass="bi-twitter" />
                            <p className="text-white fs-6">Twitter</p>
                        </div>

                    </div>
                </div>

            </footer>

        </>
    )
}


export default Footer;