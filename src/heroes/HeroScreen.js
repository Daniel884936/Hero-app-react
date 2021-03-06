import React,{useMemo} from 'react'
import { Redirect } from 'react-router-dom';
import { getHeroById } from '../selectors/getHeroById';

export const HeroScreen = ({match, history}) => {
    const {heroId} = match?.params;

    const hero = useMemo(()=>getHeroById(heroId), [heroId])

    const { id,
            superhero,
            alter_ego,
            publisher,
            first_appearance,
            characters } = hero;
    console.log(hero);
    
    if(!hero){
        return (<Redirect to="/"/>)
    }

    const handleReturn = ()=>{
        if(history.length <= 2){
            history.push('/')
        }else{
           history.goBack(); 
        }        
    }


    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src = {`../assets/heroes/${id}.jpg`}
                    alt = {superhero}                
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b>{publisher}</li>
                    <li className="list-group-item"><b>First  appearance:</b>{first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button 
                        onClick ={handleReturn}
                        className="btn btn-outline-info">
                            Return
                        </button>
            </div>
        </div>
    )
}
