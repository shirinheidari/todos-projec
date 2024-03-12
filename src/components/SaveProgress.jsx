import UseOnlineStatus from "../hooks/UseOnlineStatus";


export default function SaveProgress() {
  const isOnline = UseOnlineStatus();
   
    const progressHandler = () => {
        console.log('save progress')
      }
    
    return(
        <button onClick={progressHandler} disabled={! isOnline} className={ `border border-gray-300 font-bold px-4 py-1 by-gray-100 rounded 
              ${isOnline ? '' : 'opacity-50'}`} >
                {isOnline ? 'save progress' : 'Reconecting...'}
        </button>
    )
}