   
async function DeleteData(EndPoint, id) {
    try {
       
        let token = localStorage.getItem('accessToken');
        
        const response = await fetch(`http://192.168.88.198:8000/api/${EndPoint}/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting resource with id ${id} from ${EndPoint}`);
        }

        return { message: `Recurso con id ${id} ha sido eliminado correctamente desde ${EndPoint}` };
    } catch (error) {
        console.error('Error eliminando recurso:', error);
        throw error;
    }
}

export default DeleteData;