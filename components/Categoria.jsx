import React, {useState} from 'react';

export const Categoria = ({categoria}) => {

    const [isVisible, setIsVisible] = useState(false);

    const expand = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div style={{paddingLeft: 10}}>
            <span onClick={expand}>{categoria.name}</span>
            {
                isVisible
                    ? (
                        categoria?.categories.map((cat) => {
                            return (
                                <div style={{paddingLeft: 10}}>
                                    <Categoria categoria={cat}/>
                                </div>
                            )
                        })
                    )
                    : (
                        <></>
                    )
            }

        </div>
    )

    // return (
    //     <div style={{ paddingLeft: 10 }}>
    //         <span onClick={expand}>{categoria.name}</span>
    //         {isVisible ? (
    //             categoria?.children.map((child) => {
    //                 return (
    //                     <div style={{ paddingLeft: 10 }}>
    //                         <Categoria categoria={child}/>
    //                     </div>
    //                 );
    //             })
    //         ) : (
    //             <></>
    //         )}
    //     </div>
    // );
};
