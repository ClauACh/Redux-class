import React from 'react';

const App = () => {

  const ponerFilas = () => [
    <tr>
    <td>
      Claudia
    </td>
    <td>
      email@ejemplo.com
    </td>
    <td>
      clauach.com
    </td>
  </tr>,

<tr>
<td>
  Platzi
</td>
<td>
  email-platzi@ejemplo.com
</td>
<td>
  platzi.com
</td>
</tr>
  ]

  return(
    <div className="margen">
    <table className="tabla">
      <thead>
        <tr>
          <th>
            Nombre
          </th>
          <th>
            Correo
          </th>
          <th>
            Enlace
          </th>
        </tr>
      </thead>
      <tbody>
        { ponerFilas()}
        
      </tbody>
    </table>
    </div>
  )
}

export default App;