
async function DeleteServices(id) {
    try {
        const response = await fetch(`http://localhost:3001/Services/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `Usuario con id ${id} ha sido eliminado correctamente` };
    } catch (error) {
        console.error('Error eliminando id:', error);
        throw error;
    }
}

export default DeleteServices
