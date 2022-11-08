import { useState } from "react";
import uniqid from "uniqid";

const Form = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [editMode,  setEditMode] = useState(false);

    const [editUserSelect,  setEditUserSelect] = useState();

    const addUser = (e) => {
        console.log('Agregando User')
        e.preventDefault()
        const newUser = {
            name: name,
            id: uniqid(),
        };
        setUsers([...users, newUser]);
        setName("");
    };
    const deleteUser = (user) => {
        console.log('eliminando')
        const newArray = users.filter((userMap)=> user != userMap.id && userMap )
        setUsers([...newArray])
        if (editMode && user == editUserSelect.id){
            toogleEdit()
        }
    };

    const toogleEdit = (user) => {
        editMode ? setEditMode(false) : setEditMode(true)
        setEditUserSelect(user)
        if (!editMode){
            setName(user.name)
        }else{
            setName('')
        }
    }

    const editUser = (e) => {
        e.preventDefault()
        console.log('edit')
        const newArray = users.map(usuario => {
            if (usuario.id == editUserSelect.id){
                usuario.name = name
            }
            return usuario
        })
        setUsers(newArray)
        setName('')
    };

    return (
        <>
            <h1>CRUD BASICO</h1>
            <form onSubmit={editMode ? (e) => editUser(e) : (e) => addUser(e)}>
                <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    value = {name}
                />
                
                <input type="submit" value={editMode ? 'Editar' : 'Subir'}/>  
                
            </form>
            <ol>
                { users.map(user=>{
                    return(
                        <li key={user.id}>{user.name} <button onClick={()=>deleteUser(user.id)}>ELIMINAR</button><button onClick={()=>toogleEdit(user)}>EDITAR</button></li>
                    )
                })}
            </ol>
        </>
    );
};

export default Form;
