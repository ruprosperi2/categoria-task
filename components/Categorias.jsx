import React from 'react';
import {Categoria} from "./Categoria";


export const Categorias = ({categorias}) => {

    return (
        <div>
            {
                categorias.map((categoria)=> <Categoria key={categoria.name} categoria={categoria}/> )
            }
        </div>
    );
};


