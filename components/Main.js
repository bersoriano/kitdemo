export default function MainContainer(props) {
    return(
        <main>
            <div>{props.children}</div>
            <style jsx>{`
                main {
                    background-color: white;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    max-width: 1100px;
                    margin: 1em auto;
                    border: 1px solid #e4e2e2;
                    border-radius: .5em;        
                }            
            `}</style>
        </main>
    );
}