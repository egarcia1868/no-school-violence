import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Missions(props) {
    const [missions, setMissions] = useState([]);

    //function getMissions() {
    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/missions')
            .then(response => {
                setMissions(response.data);
            })
            .catch(console.log);
    },[]);

    return (
        <>
            {/* <button style={{margin:"1% 0 2%"}} onClick={getMissions} className="btn btn-success">
                Get Missions
            </button> */}
            <table style={{alignItems:"center"}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {missions.map(mission => (
                        <tr key={mission.mission_id}>
                            <td>{mission.mission_id}</td>
                            <td>{mission.mission_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Missions;