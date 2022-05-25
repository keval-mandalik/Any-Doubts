import "./Post.css"
function Post(){
    return(
        <div className="post p-2 m-3">
                <div className="post-user p-2 d-flex">
                    <div className="post-user-dp">
                        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg"
                                alt="profile" style="width: 40px; height: 40px; border-radius: 20px;" /></a>
                    </div>

                    <div className="post-user-details pt-2 px-2">
                        <div className="post-user-name">
                            <h6 style="line-height: 3px;"><b> Virat Kohli</b></h6>
                            <p>Indian Cricket Team Member</p>
                        </div>
                    </div>
                </div>

                <div className="post-description px-4">
                    <div className="post-header">
                        <p><b>Road to Playoffs</b></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti dolor quaerat vel,
                            qui sunt? Deleniti dolorum reiciendis omnis neque eum repellendus a, quibusdam dolorem vel.
                            Iusto dicta doloribus officiis quo quas?</p>
                    </div>

                    <div className="post-picture">
                        <img src="https://www.crictracker.com/wp-content/uploads/2022/05/Virat-Kohli-3.jpg" alt="post"
                            style="width: 100%; height: 330px;" />
                    </div>
                </div>
            </div>

    );
}

export default Post;