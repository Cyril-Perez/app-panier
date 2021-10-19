import "./page.css"

const Home = ()=>{
    return (
        <div className="content-home">
            <h1>Accéder a tout nos délicieux fromage</h1>
            <img src={process.env.PUBLIC_URL + "imgs/home.jpg"}/>
        </div>
    )
}

export default Home