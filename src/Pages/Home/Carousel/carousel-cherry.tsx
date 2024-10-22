import React, { useEffect, useState } from 'react';
import './carousel-cherry.css';

interface Person {
    Nom: string;
    Prenom: string;
    DateAnniversaire: string;
    Bio: string;
    Image: string;
}

const CarouselCherry: React.FC = () => {
    const [people, setPeople] = useState<Person[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number>(0); 

    useEffect(() => {
        fetch('Json/data.json')
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(error => console.error('Erreur lors du chargement des données :', error));
    }, []);

    const handleCardClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className="wrapper">
            <div className="container">
                {people.map((person, index) => (
                    <React.Fragment key={index}>
                        <input 
                            type="radio" 
                            name="slide" 
                            id={`c${index + 1}`} 
                            checked={selectedIndex === index} 
                            onChange={() => handleCardClick(index)} 
                        />
                        <label 
                            htmlFor={`c${index + 1}`} 
                            className="card" 
                            style={{ backgroundImage: `url(${person.Image})` }} 
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="row">
                                <div className="icon">{index + 1}</div>
                                <div className="description">
                                    <div className='Assemblage-1'>
                                    <div className='Nom'>
                                        <p className='question'>Nom :</p>
                                        <p className='reponse'>{person.Nom}</p>
                                    </div>
                                    <div className='Biographie'>
                                        <p className='question'>Bio :</p>
                                        <p className='reponse'>{person.Bio}</p>
                                    </div>
                                    </div>
                                    <div className='Assemblage-2'>
                                    <div className='Prenom'>
                                        <p className='question'>Prénom :</p>
                                        <p className='reponse'>{person.Prenom}</p>
                                    </div>
                                    <div className='Anniversaire'>
                                        <p className='question'>Date d'anniversaire :</p>
                                        <p className='reponse'>{person.DateAnniversaire}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CarouselCherry;
