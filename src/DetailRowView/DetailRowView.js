import React from 'react'

export default ({person}) => (
    <div>
        <p>Вибраний користувач <b>{person.firstName + ' ' + person.lastName}</b></p>
        <p>
            Опис: <br/>
            <textarea defaultValue={person.description}/>
        </p>

        <p>Адреса: <b>{person.address.streetAddress}</b></p>
        <p>Місто: <b>{person.address.streetAddress}</b></p>
        <p>Область / штат: <b>{person.address.streetAddress}</b></p>
        <p>Індекс: <b>{person.address.zip}</b></p>
    </div>
)
