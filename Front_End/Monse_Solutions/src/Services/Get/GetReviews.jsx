
async function GetReviews() {
    try {
        const response = await fetch(`http://192.168.1.87:8000/api/reviews`);
        const data = await response.json();
        console.log(data);
        
        return data
        
    } catch (error) {
        console.error(error);
    }
}


export default GetReviews