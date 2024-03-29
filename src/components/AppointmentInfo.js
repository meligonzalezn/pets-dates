import {BiTrashAlt} from "react-icons/bi";

//Este componente es el que contiene la información 
// que se encuentra en nuestro data.json
const AppointmentInfo = ({appointment, onDeleteAppointment}) =>{
    return(
        //items-start: este sirve para alinear los items al inicio del contenedor  
        <li className="px-3 py-3 flex items-start">
            {/*p-1.5: padding 1.5*/}
            <button onClick = {() => onDeleteAppointment(appointment.id)}type="button"
            className=" p-1.5 mr-1.5 mt-1 rounded text-white bg-red-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <BiTrashAlt /></button>
            {/*flex-grow: se usa cuando se quiere que el elemento llene todo el espacio disponible*/}
            <div className="flex-grow">
                <div className="flex items-center">
                    <span className="flex-none font-medium text-2xl text-blue-900">{appointment.petName}</span>
                    <span className="flex-grow text-right">{appointment.aptDate}</span>
                </div>
                <div><b className="font-bold text-blue-900">Owner:</b> {appointment.ownerName}</div>
                {/*leading tight: line height 1.25*/}
                <div className="leading-tight">{appointment.aptNotes}</div>
            </div>
        </li>
    )
}

export default AppointmentInfo;


