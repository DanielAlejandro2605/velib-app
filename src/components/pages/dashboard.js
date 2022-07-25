import { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import user  from '../../img/usuario.png';
import position from '../../img/position.png';
import mechanical from '../../img/mecanica.png'
import electric from '../../img/electric.png'
import parking from '../../img/parking-sign.png'
const Dashboard = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    
    useEffect(() => {
        fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=Gare+RER+-+Maurice+Grandcoing&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes')
            .then(response => {
                if(response.ok){
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(error => {
                console.error("Error fetching API ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    if (loading) return (
        <>
            <main className='main-container container-glass'>
                <div className='load-container text-gradient'>Loading...</div>
            </main> 
        </>
    );
    if (error) return ("Error");
    return (
    <>
        <main className='main-container container-glass'>
            <div className='user-container'>
                <div className='img-user-container'>
                    <img src={user} alt="user" width={'100%'} height={'auto'}/>
                </div>
                <div className='info-user-container'>
                    <span className='text-gradient'>{location.state.email}</span>
                </div>
            </div>
            <div className='info-velib-container text-gradient'>
                <h1>Nearby Stations</h1>
                <h2>{data.records[0]["fields"]["name"]}</h2>
                <h3>{data.records[0]["fields"]["nom_arrondissement_communes"]}</h3>
                <div className='data-bike-info'>
                    <span>Last update : {data.records[0]["fields"]["duedate"].slice(11, 19)} {data.records[0]["fields"]["duedate"].slice(0, 10)}</span>
                </div>
                <div className='data-bike-container'>
                    <div className='data-bike'>
                        <img src={position} alt="position" width={'100%'} height={'auto'}/>
                        <span>{data.records[0]["fields"]["numbikesavailable"]}<br></br>Available</span>
                    </div>
                    <div className='data-bike'>
                        <img src={mechanical} alt="position" width={'100%'} height={'auto'}/>
                        <span>{data.records[0]["fields"]["mechanical"]}<br></br>Mechanical</span>
                    </div>
                    <div className='data-bike'>
                        <img src={electric} alt="position" width={'100%'} height={'auto'}/>
                        <span>{data.records[0]["fields"]["ebike"]}<br></br>Electrical</span>
                    </div>
                    <div className='data-bike'>
                        <img src={parking} alt="position" width={'100%'} height={'auto'}/>
                        <span>{data.records[0]["fields"]["numdocksavailable"]}<br></br>Docks</span>
                    </div>
                </div>
            </div>
        </main>
    </>
    );
};

export default Dashboard;