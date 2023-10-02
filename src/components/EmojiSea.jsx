import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EmojiSea = (props) => {
    console.log(props.dataName, "??")
    const [emojis, setEmoji] = useState([])
    const [searchData, setSearchData] = useState('')
    useEffect(() => {
        if (searchData !== "") {
            handleSearch()
        }
    }, [searchData]);

    const handleSearch = () => {
        const headers = {
            'X-Api-Key': 'f1O1oFtqAkh/r4DXV45DQw==f8O9wnCZyBvpdoaF',
        };
        axios.get('https://api.api-ninjas.com/v1/emoji?name=' + searchData, { headers })
            .then(response => {
                console.log(response.data)
                setEmoji(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);

            });
    }

    return (
        <>
            <input type="text" value={searchData} placeholder={props.dataName} className='form-control mt-2' style={{ width: "50%" }} onChange={(e) => setSearchData(e.target.value)} />
            <button className='btn btn-warning mt-2' onClick={handleSearch}>Search</button>
            <ol className='mt-2'>
                {
                    emojis.map((item, l) => {
                        return (
                            <div key={l}>
                                <li>{item.name} {item.character} </li>
                            </div>
                        )
                    })
                }
            </ol>
        </>
    )
}

export default EmojiSea