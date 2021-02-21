import Link from 'next/link';
export default function Header() {
    return(
        <div className="header">
            <div className="headerContainer">
            <Link href={`/`}>
                <h1>KitShare</h1>
            </Link>
            <div className="flex"></div>
            <span>Login</span>
            </div>
            <style jsx>{`
                .header {
                    background-color: white;
                    min-height: 50px;
                    border: 1px solid #e4e2e2;
                }
                .headerContainer {
                    display: flex;
                    align-items: center;          
                    width: 100%;
                    margin: 0 auto;
                    max-width: 1100px;
                }
                h1 {
                    cursor: pointer;
                }            
            `}</style>       
        </div>     
    )
}