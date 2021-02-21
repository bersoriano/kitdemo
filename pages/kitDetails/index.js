import Header from '../../components/Header';
import MainContainer from '../../components/Main';
import Image from 'next/image';
export default function KitDetail() {
    return (
        <div className="container">
            <Header></Header>
            <MainContainer>
                <h1 className="kitName">Video gear</h1>
                <div className="kitContainer">
                    <div className="kitItem">
                        <span className="title">Sony RX100 M7</span>
                        <Image
                            src="/cam.jpg"
                            width={300}
                            height={180}                        
                            >                        
                        </Image>
                        <ul className="links">
                            <li>
                                <span>Sony Rx100 M7 Camera</span>
                                <button>Link</button>
                            </li>
                        </ul>
                        <span className="subtitle">Comments</span>
                        <p className="comments">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p> 
                    </div>
                    <div className="kitItem">
                        <span className="title">Sony RX100 M7</span>
                        <Image
                            src="/cam.jpg"
                            width={300}
                            height={180}                        
                            >                        
                        </Image>
                        <ul className="links">
                            <li>
                                <span>Sony Rx100 M7 Camera</span>
                                <button>Link</button>
                            </li>
                        </ul>
                    </div>
                    <div className="kitItem">
                        <span className="title">Sony RX100 M7</span>
                        <Image
                            src="/cam.jpg"
                            width={300}
                            height={180}                        
                            >                        
                        </Image>
                        <ul className="links">
                            <li>
                                <span>Sony Rx100 M7 Camera</span>
                                <button>Link</button>
                            </li>
                        </ul>
                    </div>                                        
                </div>
            </MainContainer>
            <footer>
                <a
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <span>@bersoriano</span>
                </a>
            </footer>            
            <style jsx>
                {`
                    .kitName {
                        margin: 1em;
                    }
                    .kitContainer {
                        display: flex;
                        flex-direction: row;
                    }
                    .kitItem {
                        display: flex;
                        flex-direction: column;
                        border: 1px solid red;
                        padding: 1em;
                        margin: 0 auto;
                    }
                    .kitItem .title {
                        font-size: 2em;
                        text-align: center;
                        margin: 1em;
                    }
                    .kitItem .links li{
                        list-style: none;
                    }
                    .container {
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;       
                    }
                    footer {
                        width: 100%;
                        height: 100px;
                        border-top: 1px solid #eaeaea;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                      }              
                    footer a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }                                      
                `}          
            </style>             
        </div>       
    )
}