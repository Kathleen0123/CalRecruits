export default function Home() {
    return (
        <>
            <h1>Browse UC Berkeley's Student Organizations</h1>
            <ul className="clubBox">
                <li>
                    <a href="/club/1" className="clubLink"><img className="clubImg" src={require('../img/club1.png')} alt="Public Health Advocate"/></a>
                    <br /><a href="/club/1" className="clubLink">Public Health Advocate</a>
                    <br /><p className="clubName">Founded in 2005, the Public Health Advocate (PHA) is an undergraduate publication featuring current public health issues with local, national, and international perspectives.</p>
                </li>
                <li>
                    <a href="/club/2" className="clubLink"><img className="clubImg" src={require('../img/club2.png')} alt="Cal Quidditch"/></a>
                    <br /><a href="/club/2" className="clubLink">Cal Quidditch</a>
                    <br /><p className="clubName">Cal Quidditch is more than a sports team; it is a community. It has given both Harry Potter nerds and Muggles a place to connect and form lasting connections while having the time of their lives on and off the field. </p>
                </li>
            </ul>
        </>
    )
}