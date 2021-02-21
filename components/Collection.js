import Item from './Item';

export default function Collection () {
    return (
        <div className="Collection">
            <Item></Item>
            <style jsx>{`
                .Collection{
                    border: 1px solid silver;
                    border-radius: 1em;
                    margin: 0 2em 2em;
                }
                .Collection:hover {
                    background-color: #eaeaea;
                }
            `}</style>                
        </div>      
    )  
}