import React,{useMemo} from 'react'
import { useLocation } from 'react-router-dom'
import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../hooks/useForm'
import { getHeroByName } from '../selectors/getHeroByName'

export const SearchScreen = ({history}) => {

    const location = useLocation()    

    const searchParams  = new URLSearchParams(location.search);    
    const q = searchParams.get('q') == null ? '' : searchParams.get('q')

    const [{search}, handleInputChange] = useForm({
        search: q
    })

    const heroresFiltered = useMemo(() => getHeroByName(q), [q])

    const handleSearch = (e)=>{
        e.preventDefault();
        history.push(`?q=${search}`)
        console.log(search)
    }


    return (
        <>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">

                    <h4>Search Form</h4>
                    <hr/>

                    <form  onSubmit = {handleSearch} >                                                 
                          <input
                                value = {search}  
                                onChange = {handleInputChange}                         
                                type="text" 
                                name = "search"
                                autoComplete ="off"
                                className="form-control" 
                                placeholder="Find your hero"/>                                                  

                          <button                                                         
                                type="submit"
                                className="btn btn-outline-primary btn-block mt-2">
                              Search...
                          </button>
                    </form>

                </div>

                <div className="col-7">

                    {
                        (q === '')
                        &&
                        (<div class="alert alert-primary text-center animate__animated animate__headShake " role="alert">
                            <p>Search a hero</p>
                        </div>)                        
                    }

                    {
                         (q !== '' && heroresFiltered.length === 0)
                         &&
                         (<div class="alert alert-danger text-center alert alert-primary text-center animate__animated animate__headShake" role="alert">
                            <p>There is not a hero with {q}</p>
                         </div>)
                    }


                    {
                        heroresFiltered.map(hero => (< HeroCard key = {hero.id} {...hero}/>))
                    }
                </div>
            </div>
        </>
    )
}
