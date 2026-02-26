import react from 'react'

export default function Chat(props) {

    return(
            <div className={`flex ${props.value} p-4 gap-4`}>
                <div >
                    <img className="flex-1 bg-black shadow-lg rounded-full w-7 h-7"src = {props.source}/>
                </div>
                <div className="flex-10 p-4 bg-gray-100 rounded-lg"> 
                    <p>{props.text}</p>
                </div>
            </div>
    );
}