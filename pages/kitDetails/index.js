import Header from '../../components/Header';
import MainContainer from '../../components/Main';
import Image from 'next/image';
import Button from '../../components/Button';
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
                            <li className="link">
                                <span>Get it in Amazon</span>
                                <Button className="buy-btn" label="link">Link</Button>
                            </li>
                            <li className="link">
                                <span>Get it in Walmart</span>
                                <Button label="link">Link</Button>
                            </li>
                            <li className="link">
                                <span>Get it on Ebay</span>
                                <Button label="link">Link</Button>
                            </li>                                                        
                        </ul>
                        {/* <span className="subtitle">Comments</span>
                        <p className="comments">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>  */}
                    </div>  
                    <div className="kitItem">
                        <span className="title">Sony RX100 M7</span>
                        <Image
                            src="/sgrip.jpg"
                            width={160}
                            height={180}                        
                            >                        
                        </Image>
                        <ul className="links">
                            <li className="link">
                                <span>Get it in Amazon</span>
                                <Button className="buy-btn" label="link">Link</Button>
                            </li>
                            <li className="link">
                                <span>Get it in Walmart</span>
                                <Button label="link">Link</Button>
                            </li>
                            <li className="link">
                                <span>Get it on Ebay</span>
                                <Button label="link">Link</Button>
                            </li>                                                        
                        </ul>
                        {/* <span className="subtitle">Comments</span>
                        <p className="comments">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>  */}
                    </div>                                          
                </div>
            </MainContainer>
            <footer>
                {/* <a
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <span>@bersoriano</span>
                </a> */}
            </footer>            
            <style jsx>
                {`
                    .container {
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    .kitName {
                        margin: 1em 0;
                    }
                    .kitContainer {
                        display: flex;
                        flex-direction: row;
                    }
                    .kitItem {
                        min-width: 300px;
                        width: 300px;
                        display: flex;
                        flex-direction: column;
                        padding: 2em;
                        margin: 0 auto;
                        border-radius: .5em;                        
                        border: 1px solid silver;
                    }
                    .kitItem .title {
                        font-size: 2em;
                        text-align: center;
                        margin: 1em 0;
                    }
                    .kitItem .links li{
                        list-style: none;
                        margin: 1em 0;        
                        display: flex;                
                        flex-direction: row;
                    }
                    .kitItem .links li:hover{
                        opacity: .5;
                    }
                    .links .link span {
                        flex: 1;
                        line-height: 3em;
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