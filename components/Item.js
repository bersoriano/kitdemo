import Link from 'next/link';
export default function Item () {
    return (
        <Link href={`/kitDetails`}>
            <div className="Item">
                <div className="header">YouTube Camera Set</div>
                <div className="details">
                    <span>26 products</span>
                    <span className="space"></span>
                </div>
                <div className="thumbnail">
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>                
                    <div className="item"></div>
                    <div className="item"></div>
                </div>
                <div className="actions">
                    <button>233</button>
                    <div className="space"></div>
                    <button>Like</button>
                    <button>Share</button>
                </div>
                <style jsx>{`
                    .header, .details, .thumbnail {
                        display: flex;
                        flex: 1;
                        flex-direction: column;
                        width: 100%;
                    }
                    .Item {
                        min-height: 296px;
                        padding: 1em;
                        box-sizing: border-box;
                    }
                    .header {
                        font-size: 1.5em;
                    }
                    .details {
                        display: flex;
                        flex-direction: row;
                        margin: .5em 0;
                    }
                    .thumbnail {
                        max-width: 100%;
                        display: flex;
                        flex-direction: row;
                        flex-flow: wrap;
                    }
                    .thumbnail .item {
                        border: 1px solid #adafad;
                        background-color: #e6e4e4;
                        min-height: 134px;
                        min-width: 134px;
                        width: 100px;
                        margin: auto;                    
                    }
                    .actions {
                        padding: 1em 0;
                        display: flex;
                    }
                    .space {
                        display: flex;
                        flex: 1;
                    }
                `}</style>                
            </div>      
        </Link>
    )  
}