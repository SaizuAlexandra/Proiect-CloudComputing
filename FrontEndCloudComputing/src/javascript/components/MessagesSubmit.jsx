import React from 'react';
import axios from 'axios';
function MessagesSubmit() {

    const handleLocationRequest = async (e) => {
        const senderName = document.getElementById('senderName').value;
        const loc = document.getElementById('loc').value;

        try {
            let response = await axios.post(
                process.env.REACT_APP_API_URL + `/messages/timeZone`,
                {
                    senderName,
                    loc: loc
                });

                if(response.status === 200) {
                    alert(`Time zone for ${loc}: ${response.data.timeInfo}`);
                }
        }
        catch (error) {
            alert('Something went wrong');
            console.log(error);
        }
    }

    return (
        <div id="MessagesSubmit">
            <div className='text-2xl font-bold mb-4'>Introduceți locația pentru a afla fusul orar</div>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="senderName">
                            Nume
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="senderName" type="text" placeholder="John" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="loc">
                            Locația
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="loc" type="text" placeholder="Pitesti" />
                        </div>
                </div>
            </form>
            {/* Create a button to submit */}         
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 capitalize"
                onClick={handleLocationRequest}>
                Caută
            </button>
                
        </div>
    );
}

export default MessagesSubmit;