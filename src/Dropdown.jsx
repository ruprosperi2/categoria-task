import React, {useEffect, useState} from 'react';

import {Categorias} from "../components/Categorias";



export const DropDown = () => {

    const [categories, setCategories] = useState([]);

    const getData=()=>{
        fetch('data.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                return response.json();
            })
            .then(function(myJson) {
                setCategories(myJson)
            });
    }

    useEffect(()=>{
           getData()

    },[])


    return (
        <div>
            <h1>DropDown</h1>

            <Categorias categorias={categories}/>

        </div>
    );
};

