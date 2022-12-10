import {Link} from "react-router-dom";

const Linkedin = () => {


    return(
        <ul className="list-group">
            <li className="list-group-item fs-5">Authors Profile</li>


            <li className="list-group-item">
                <a href="https://www.linkedin.com/in/jw-zhang/" title="" className="text-decoration-none ms-3" target="_blank" rel="noopener">
                    <div className="row">
                        <div className="col-2">
                            <img  className="rounded-circle" height={80} width={90} src="/images/Jingwei.jpg"/>
                        </div>

                        <div className="col-2 ps-3">
                        </div>

                        <div className="col-8">
                            <div className="fw-bold"></div>
                            <div>Jinwei Zhang</div>
                            <div>Software Development, AI, Machine Learning </div>
                        </div>
                    </div>
                </a>
            </li>


            <li className="list-group-item">
                <a href="https://www.linkedin.com/in/zuocheng-wang-518108161/" title="" className="text-decoration-none ms-3" target="_blank" rel="noopener">
                    <div className="row">
                        <div className="col-2">
                            <img className="rounded-circle" height={80} width={90} src="/images/zuocheng.jpg"/>
                        </div>

                        <div className="col-2 ps-3">
                        </div>

                        <div className="col-8">
                            <div className="fw-bold"></div>
                            <div>Zuocheng Wang </div>
                            <div>Software Development, Game Development, Machine Learning </div>
                        </div>
                    </div>
                </a>
            </li>


            <li className="list-group-item">
                <a href="https://www.linkedin.com/in/pengbo-wang-7112b5169/" title="" className="text-decoration-none ms-3" target="_blank" rel="noopener">
                    <div className="row">
                            <div className="col-2">
                                <img className="rounded-circle" height={80} width={90} src="/images/pengbo.jpg"/>
                                    </div>

                                    <div className="col-2 ps-3">
                                    </div>

                                    <div className="col-8">
                                <div className="fw-bold"></div>
                            <div>Pengbo Wang </div>
                                        <div>Software Development, AI,  Machine Learning</div>
                        </div>
                    </div>
                </a>
            </li>

        </ul>
    );
};

export default Linkedin;
