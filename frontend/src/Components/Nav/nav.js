import "./Nav.css"
function Nav() {
    return (
        <>
            <div className="container-fluid">

                <nav className="navbar navbar-expand-md navbar-light">
                    <a href="#" className="navbar-brand me-5 ms-2">
                        <img src="https://assets.entrepreneur.com/content/3x2/2000/20190211224126-quora-logo-crop.jpeg"
                            alt="" style={{width: "150px", height: "60px"}} />
                    </a>

                    <button className="navbar-toggler custom-toggler" type="button" data-bs-target="#navbar"
                        data-bs-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#"><i className="fa-solid fa-house"></i></a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#"><i className="fa-solid fa-list"></i></a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#"><i className="fa-solid fa-pen-to-square"></i></a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#"><i className="fa-solid fa-people-group"></i></a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#"><i className="fa-solid fa-bell"></i></a>
                            </li>
                        </ul>
                        <form action="#" className="d-flex">
                            <input className="form-control mx-3" type="text" placeholder="Search" />
                            <a href="#"><img className="mx-3" src="https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png"
                                alt="profile" style={{width: "40px", height:" 40px", borderRadius: "20px"}} /></a>
                            <button className="btn qbutton" type="button"><a href="#">Add Question</a></button>
                        </form>

                    </div>
                </nav>

                <div className="ask d-flex m-3" style={{justifyContent:"left"}}>
                    <div className="profile">
                        <a href="#"><img className="mx-3" src="https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png"
                            alt="profile" style={{width: "40px", height:" 40px", borderRadius: "20px"}} /></a>
                    </div>

                    <div className="question ">
                        <form action="#">
                            <input type="text" className="form-control" placeholder="What do you want to ask or share ?"
                                style={{width:" 150%", borderRadius: "20px" }}/>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Nav;