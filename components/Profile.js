import Image from 'next/image';
export default function Profile () {
    return (
        <div className="profile">
          <Image className="profilePic" width={270} height={160} src="/ber.jpg" alt="User Profile Picture"></Image>
          <div className="data">
            <span className="name">bersoriano</span>
            <div className="statistics">
                <span className="kitNumber">9 Kits</span>
                <span className="followers">101 Followers</span>                
                <span className="followers">845 Item Likes</span>                                
            </div>
            <span className="userName">Bernardo Soriano</span>
            <span className="bio">I'm on a mission for delivering experiences that are easy to use, make people's lives better, fun and advance human capabilities.</span>
            <span className="website"><a href="www.bernardosoriano.com">www.bernardosoriano.com</a></span>
          </div>
          <div className="flex">
          </div>
          <div className="actions">
            <button>Subscribe</button>
          </div>
          <style jsx global>{`
            .profile {
                display: flex;
                flex-direction: row;
                padding: 5em;          
            }
            .profile span{
                margin-bottom: .2em;
            }
            .profile .name, .statistics {
                font-weight: bold;
                margin-bottom: .5em;
            }
            .statistics {
                display: flex;
            }
            .statistics span {
                margin-right: .5em;
            }
            .data {
                display: flex;
                flex-direction: column;
                font-size: 1.5em;
                padding: 0 5em;
            }
            .profilePic {
                border: 1px solid red;
                border-radius: 6em;
                margin: 0 3em;        
            }
            .actions {
            }            
            .flex {
                display: flex;
                flex: 1;
            }                      
          `}</style>
        </div>        
    )
}